It is common to have multiple reducers in your application. These reducers are then combined
into one.

Reducer composition requires that a single reducer handles the state update for a
single field in the state object.
For example, for the messages field, you have a messagesReducer. For a
contacts field, you also have a contactsReducer and so on.

The return value from each of the reducer is solely for the field they represent.

```
    import { combineReducers } from "redux";

    export default combineReducers({
        user: user,
        contacts: contacts,
    });
```
combineReducers function takes in an object. The shape of the object is exactly like the state object of the application.
The object has keys user and contacts, just like the state object we’ve got in mind.
The values in the object come from the reducers!
All the key and values put together will then result in the state object of the application.

An important point to **ALWAYS** remember is that when using combineReducers, the value returned from each reducer is NOT the state of the application. It is only the VALUE of the particular key they represent in the state object!