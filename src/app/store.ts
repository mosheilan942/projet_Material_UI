import { configureStore } from "@reduxjs/toolkit";
import  projectReducer  from "./projectSlice";
import  messageSlice  from "./messageSlice";

export const store = configureStore({
    reducer: {
        project : projectReducer,
        message : messageSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch