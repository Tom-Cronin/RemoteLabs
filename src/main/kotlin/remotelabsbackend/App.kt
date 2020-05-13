package remotelabsbackend

import java.util.concurrent.*

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.request.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.jackson.*
import io.ktor.features.*
import io.ktor.sessions.*
import com.fasterxml.jackson.databind.*

val users = ConcurrentHashMap<String, User>()
val helpQueue = ConcurrentLinkedQueue<String>()
val commPairs = CopyOnWriteArrayList<Pair<String, String>>()
val sessions = ConcurrentHashMap<String, Session>()

fun main(args: Array<String>) {
    startHTTPServer()

}

data class SessionCookie(val uuid: String)

private fun startHTTPServer() {
    val server = embeddedServer(Netty, port = 8080) {
        install(ContentNegotiation) {
            jackson() {
            }
        }
        install(Sessions) {
            cookie<SessionCookie>("SESSION")
        }
        // install(DefaultHeaders) {
        //     header("Access-Control-Allow-Origin", "*")
        // }
        install(CORS) {
            method(HttpMethod.Post)
            header(HttpHeaders.Vary)
            allowCredentials = true
            anyHost()
            allowNonSimpleContentTypes = true
        }
        routing {
            post("/start") {
                initSession(call)
            }
            post("/stop") {
                stopSession(call)
            }
            post("/join") {
                joinSession(call)
            }
            post("/leave") {
                leaveSession(call)
            }
            post("/help") {
                help(call)
            }
            post("/") {
                call.respond(updateInfo(call))
            }
        }
    }
    server.start(wait = true)
}

data class SessionCreate(val session: Session, val sessionJoin: SessionJoin)

private suspend fun initSession(call: ApplicationCall) {
    val sessionCreate = call.receive<SessionCreate>()
    sessions[sessionCreate.session.uuid] = sessionCreate.session
    val user = User(sessionCreate.sessionJoin.name, true, sessionCreate.session.uuid)
    users[user.uuid] = user
    sessionCreate.session.users.add(user)
    call.sessions.set("SESSION", SessionCookie(user.uuid))
    val update = updateInfo(call)
    update["OK"] = true
    update["ID"] = sessionCreate.session.uuid
    call.respond(update)
}

private suspend fun stopSession(call: ApplicationCall) {
    val session = call.sessions.get<SessionCookie>()
    if(session != null) {
        val user = users[session.uuid]
        if(user?.admin == true) {
            sessions.remove(user.session)
            call.respond(mapOf("OK" to true))
        } else {
            call.respond(HttpStatusCode.Forbidden, mapOf("OK" to false))
        }
    } else {
        call.respond(HttpStatusCode.Forbidden, mapOf("OK" to false))
    }
}

data class SessionJoin(val name: String, val id: String = "", val password: String = "")

private suspend fun joinSession(call: ApplicationCall) {
    val sessionJoin = call.receive<SessionJoin>()
    val session = sessions[sessionJoin.id]
    var admin = false
    if(session?.adminPassword == sessionJoin.password) {
        admin = true
    }

    if(admin == true || session?.userPassword == sessionJoin.password) {
        val user = User(sessionJoin.name, admin, sessionJoin.id)
        users[user.uuid] = user
        session?.users?.add(user)
        call.sessions.set("SESSION", SessionCookie(user.uuid))
        val update = updateInfo(call)
        update["OK"] = true
        call.respond(update)
    } else {
        call.respond(HttpStatusCode.Forbidden, mapOf("OK" to false))
    }
}

private suspend fun leaveSession(call: ApplicationCall) {
    val session = call.sessions.get<SessionCookie>()
    if(session != null) {
        sessions[users[session.uuid]?.session]?.users?.remove(users[session.uuid])
        users.remove(session.uuid)
    } else {
        call.respond(HttpStatusCode.Forbidden, mapOf("OK" to false))
    }
}

private suspend fun updateInfo(call: ApplicationCall): HashMap<String, Any> {
    val session = call.sessions.get<SessionCookie>()
    val map = hashMapOf<String, Any>()
    if(session != null) {
        val user = users[session.uuid]
        val sessionID = user?.session
        val usersList = sessions[sessionID]?.users
        if (usersList != null)
            map["users"] = usersList
    }
    return map
}

private suspend fun help(call: ApplicationCall) {
    val session = call.sessions.get<SessionCookie>()
    if(session != null) {
        val user = users[session.uuid]
        if(user != null) {
            if(user.admin){
                
            } else {
                helpQueue.add(session.uuid)
                call.respond(mapOf("OK" to true))
            }
        } else {
            call.respond(HttpStatusCode.Forbidden, mapOf("OK" to false))
        }
    } else {
        call.respond(HttpStatusCode.Forbidden, mapOf("OK" to false))
    }
}