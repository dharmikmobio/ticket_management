// Redux
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Import reducers
import ticketReducer from "./reducers/ticket";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["tickets"], // reducers to be persisted
};

const rootReducer = combineReducers({
  tickets: ticketReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
