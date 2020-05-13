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
import java.util.UUID

suspend fun initDevSession(call: ApplicationCall) {
    try{
        call.receive<SessionCreate>()
        val update = updateDevInfo(call)
        update["OK"] = true
        update["ID"] = "This Session"
        call.respond(update)
    } catch(e: Exception) {
        call.respond(mapOf("OK" to false))
    }
    
    
}

suspend fun stopDevSession(call: ApplicationCall) {
    try{
        call.respond(mapOf("OK" to true))
    } catch(e: Exception) {
        call.respond(mapOf("OK" to false))
    }
}

suspend fun joinDevSession(call: ApplicationCall) {
    try{
        call.receive<SessionJoin>()
        val update = updateDevInfo(call)
        update["OK"] = true
        call.respond(update)
    } catch(e: Exception) {
        call.respond(mapOf("OK" to false))
    }
}

suspend fun leaveDevSession(call: ApplicationCall) {
    try{
        call.respond(mapOf("OK" to true))
    } catch(e: Exception) {
        call.respond(mapOf("OK" to false))
    }
}

suspend fun updateDevInfo(call: ApplicationCall): HashMap<String, Any> {
    val map = hashMapOf<String, Any>()
    val usersList = arrayListOf<User>()
    for(i in 0..50) {
        usersList.add(User("Arthan", true, "This Session"))
        usersList.add(User("Tom", false, "This Session"))
    }
    map["users"] = usersList
    return map
}

suspend fun helpDev(call: ApplicationCall) {
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