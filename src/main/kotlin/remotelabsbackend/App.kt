package remotelabsbackend

import java.io.OutputStream
import java.net.ServerSocket
import java.net.Socket
import java.nio.charset.Charset
import java.util.*
import java.util.concurrent.*
import com.beust.klaxon.Klaxon

val uuids = ConcurrentHashMap<String, Socket>()
val connections = ConcurrentHashMap<Socket, User>()
var adminPassword: String = ""
var userPassword: String = ""
val helpQueue = ConcurrentLinkedQueue<String>()
val commPairs = CopyOnWriteArrayList<Pair<Socket, Socket>>()

fun main(args: Array<String>) {
    if (args.size> 0) {
        adminPassword = args[0]
    }
    if (args.size> 1) {
        userPassword = args[1]
    }
    startTCPServer()

}

private fun startTCPServer() {
    Thread({ val server = ServerSocket(6969)
        while (true) {
            val client = server.accept()
            println("Client connected: ${client.inetAddress.hostAddress}")

            Thread({ ClientHandler(client).run() }).start()
        }
    }).start()
}

class ClientHandler(client: Socket) {
    private val client: Socket = client
    private val reader: Scanner = Scanner(client.inputStream)
    private val writer: OutputStream = client.outputStream
    private val ip: String = client.inetAddress.hostAddress
    private var running = false

    fun run() {
        running = true
        initConnection()
        if(!running) {
            return
        }
        updateAll()
        serveUser()
    }

    private fun initConnection() {
        try {
            val text = reader.nextLine()
            val args = text.split(":")
            var admin = false
            if (args.size > 1 && adminPassword != "") {
                if (args[1] == adminPassword) {
                    admin = true
                }
            }
            if (userPassword != "" && !admin) {
                if (args.size <= 1 || args[1] != userPassword) {
                    shutdown()
                    return
                }
            }
            val user = User(args[0], admin)
            connections[client] = user
            uuids[user.uuid] = client
            // write("Connected successfully\n" +
            //     "Hello ${args[0]}\n" +
            //     "Privelege=" + if (connections[client]?.admin == true)"Admin" else "User")
        } catch (e: Exception) {
            shutdown()
            return
        }
    }

    private fun serveUser() {
        try {
            while (running) {
                val text = reader.nextLine()
                val args = text.split(":")
                if(connections[client]?.admin != true && text == "help") {
                    if(helpQueue.contains(connections[client]?.uuid)) {
                        helpQueue.remove(connections[client]?.uuid)
                    } else {
                        helpQueue.add(connections[client]?.uuid)
                    }
                    updateAdmins()
                }
                if(connections[client]?.admin == true && args[0] == "help") {
                    if(args.size == 1) {
                        connect(client, uuids[helpQueue.peek()]!!)
                    } else {
                        connect(client, helpQueue.toArray(arrayOf<Socket>())[args[1].toInt()])
                    }
                }
            }
        } finally {
            shutdown()
            return
        }
    }

    private fun write(message: String) {
        write(writer, message)
    }

    private fun shutdown() {
        running = false
        uuids.remove(connections[client]?.uuid)
        connections.remove(client)
        client.close()
        println("Client disconnected: $ip")
    }
}

fun usersString(): String {
    return Klaxon().toJsonString(connections.values)
}

fun write(writer: OutputStream, message: String) {
    writer.write((message + "\n").toByteArray(Charset.defaultCharset()))
}

fun updateAll() {
    val message = usersString()
    for((key, _) in connections) {
        val writer = key.outputStream
        write(writer, message)
    }
}

fun helpsString(): String {
    return Klaxon().toJsonString(helpQueue)
}

fun updateAdmins() {
    val message = helpsString()
    for((key, value) in connections) {
        if(value.admin) {
            val writer = key.outputStream
            write(writer, message)
        }
    }
}

fun connect(from: Socket, to: Socket) {
    commPairs.add(Pair(from, to))
}
