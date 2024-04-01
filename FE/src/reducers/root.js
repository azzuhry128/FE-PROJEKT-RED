import { combineReducers } from "@reduxjs/toolkit";
import messageReducer from "./messageReducer";
import contactReducer from "./contactReducer";

const rootReducer = combineReducers({
    message: messageReducer,
    contact: contactReducer,
})

export default rootReducer