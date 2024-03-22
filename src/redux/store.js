import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import turnoReducer from "./turno/turnoSlice";
import userReducer from './user/userSlice'

const reducers = combineReducers({ 
turnos: turnoReducer,
user: userReducer,
})

const persistConfig = { 
  key: "root", 
  storage, 
  whitelist: ['user'] 
};

const persistedReducer = persistReducer(persistConfig, reducers); 

export const store = configureStore({ 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
