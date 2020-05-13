# Endpoints

## All end points are POST requests

## /start
### Starts a session with given access credentials and joins with given name
#### Request:
```
{
    "session": {
        "adminPassword": Password needed to join as an admin,
        "userPassword": Password needed to join as a user
    },
    "sessionJoin": {
        "name": Your name to join with
    },
    "users": See below
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
    "name": Name to join with,
    "password": Password needed to join,
    "id": Session ID to join
}
```
#### Response:
```json
{
    "OK": Whether or not it succeeded,
    "users": See below
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
## /
### Updates client with user list
#### Request:
```json
{}
```
#### Response:
```json
{"users": Array of {
    "name": Name of user,
    "admin": Whether or not the user is an admin,
    "session": The session ID they are in,
    "uuid": The user's unique ID
    }
}
```
##### This users field is also included in the response of /join and /start endpoints
## /help
### Not yet implemented