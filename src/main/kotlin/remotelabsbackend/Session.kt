package remotelabsbackend

import java.util.UUID

class Session(val adminPassword: String = "", val userPassword: String = "") {
    val uuid: String
    val users = arrayListOf<User>()

    init {
        uuid = UUID.randomUUID().toString()
    }
}