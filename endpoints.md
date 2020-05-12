# Endpoints

## /start
### Starts a session with given access credentials and joins with given name
```json
{
    "session": {
        "adminPassword": "",
        "userPassword": ""
    },
    "sessionJoin": {
        "name": ""
    }
}
```
## /join
### Joins the session with given ID using username and password
```json
{
    "name": "",
    "password": "",
    "id": ""
}
```
## /stop
### Stops your current session (Only available as an admin)
```json
{}
```

## /help
### Not yet implemented