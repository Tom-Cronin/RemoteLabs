# Endpoints

## /start
### Starts a session with given access credentials and joins with given name
#### Request:
```json
{
    "session": {
        "adminPassword": Password needed to join as an admin,
        "userPassword": Password needed to join as a user
    },
    "sessionJoin": {
        "name": Your name to join with
    }
}
```
#### Response:
```json
{
    "OK": Whether or not it succeeded,
    "ID": New Session's ID
}
```
## /join
### Joins the session with given ID using username and passwor
#### Request:
```json
{
    "name": "",
    "password": "",
    "id": ""
}
```
#### Response:
```json
{
    "OK": Whether or not it succeeded
}
```
## /leave
### Leaves your current session
#### Request:
```json
{}
```
#### Response:
```json
{
    "OK": Whether or not it succeeded
}
```
## /stop
### Stops your current session (Only available as an admin)
#### Request:
```json
{}
```
#### Response:
```json
{
    "OK": Whether or not it succeeded
}
```
## /help
### Not yet implemented