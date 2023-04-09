import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
  contacts: contactsReducer,
        filter: filterReducer,
});



export const store = configureStore({
    reducer: rootReducer});








