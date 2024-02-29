import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import turnoReducer from "./turno/turnoSlice";
import userReducer from './user/userSlice'

const reducers = combineReducers({ /* creo un reducer que contiene a todos los reducers */
turnos: turnoReducer,
user: userReducer,
})

const persistConfig = { /* creo el objeto de configuracion para guardar datos en el local storage, luego lo voy a utilizar en persistReducer */
  key: "root", /* los datos los voy a guardar bajo el nombre de root */
  storage, /* esto es una libreria importada */
  whitelist: ['user'] /* con esta propiedad indico los reducers que deseeo que se guarden en el local storage, si hago esto se guardaria todos los reducers y por lo general no queremos guardar todos */
};

const persistedReducer = persistReducer(persistConfig, reducers); /* el persistReducer es una libreria que se usa para guardar datos en el local storage */

export const store = configureStore({ /* esta libreria exporta el store */
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);/* esta libreria exporta el persistStore para utilizar el local storage */
