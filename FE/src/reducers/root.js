import { combineReducers } from "@reduxjs/toolkit";
import messageReducer from "./messageReducer";
import contactReducer from "./contactReducer";
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
    message: messageReducer,
    contact: contactReducer,
    account: accountReducer
})

export default rootReducer