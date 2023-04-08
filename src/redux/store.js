import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["contacts"]

};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
        filter: filterReducer,
});


const persistedFilterReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedFilterReducer,

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);






