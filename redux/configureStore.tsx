import { configureStore } from "@reduxjs/toolkit";
import activeUserReducer from "./activeUser";
import activeSearchEngineReducer from "./searchEngine";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    activeUser: activeUserReducer,
    searchEngine: activeSearchEngineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
