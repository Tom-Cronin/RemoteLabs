package remotelabsbackend

import java.util.UUID

class User(val name: String, var admin: Boolean) {
    val uuid: String
    get() = "$name:$field"


    init {
        uuid = UUID.randomUUID().toString()
    }
}