import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authSlice from "./authslice";

// Create a persist configuration
const persistConfig = {
  key: "root",
  storage: localStorage,
};

// Wrap the auth reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
