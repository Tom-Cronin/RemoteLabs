package remotelabsbackend

import java.io.OutputStream
import java.net.ServerSocket
import java.net.Socket
import java.nio.charset.Charset
import java.util.*
import java.util.concurrent.ConcurrentLinkedQueue

val connections = hashMapOf<String, String>()
val admin = hashMapOf<String, Boolean>()
var adminPassword: String = ""
var userPassword: String = ""
val helpQueue = ConcurrentLinkedQueue<String>()

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
    private val reader: Scanner = Scanner(client.getInputStream())
    private val writer: OutputStream = client.getOutputStream()
    private val ip: String = client.inetAddress.hostAddress
    private var running = false

    fun run() {
        running = true
        try {
            val text = reader.nextLine()
            val args = text.split(":")
            if (args.size > 1 && adminPassword != "") {
                if (args[1] == adminPassword) {
                    admin[ip] = true
                } else {
                    admin[ip] = false
                }
            } else {
                admin[ip] = false
            }
            if (userPassword != "" && admin[ip] != true) {
                if (args.size <= 1 || args[1] != userPassword) {
                    shutdown()
                    return
                }
            }
            connections[ip] = args[0]
            write("Connected successfully\n" +
                "Hello ${args[0]}\n" +
                "Privelege=" + if (admin[ip] == true)"Admin" else "User")
        } catch (e: Exception) {
            shutdown()
            return
        }
        try {
            while (running) {
                val text = reader.nextLine()
                val args = text.split(":")
                if(admin[ip]!=true && text == "help") {
                    if(helpQueue.contains(ip)) {
                        helpQueue.remove(ip)
                    } else {
                        helpQueue.add(ip)
                    }
                    //TODO update mentor's help needed list
                }
                if(admin[ip]==true && args[0] == "help") {
                    if(args.size == 0) {
                        connect(ip, helpQueue.peek())
                    } else {
                        connect(ip, helpQueue.toArray(arrayOf<String>())[args[1].toInt()])
                    }
                }
            }
        } finally {
            shutdown()
            return
        }
    }

    private fun connect(from: String, to: String) {
        //TODO actually connect the 2 people
    }

    private fun write(message: String) {
        writer.write((message + "\n").toByteArray(Charset.defaultCharset()))
    }

    private fun shutdown() {
        running = false
        admin.remove(ip)
        connections.remove(ip)
        client.close()
        println("Client disconnected: $ip")
    }
}
