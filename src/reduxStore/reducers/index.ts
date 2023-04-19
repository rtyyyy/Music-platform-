import { combineReducers } from "redux";
import { playerReducer } from "./playerReducer";
import { createStore } from "@reduxjs/toolkit";
export const rootReducer = combineReducers({
    player: playerReducer
})


export const store = createStore( rootReducer)

// получения типа состояния
export type RootState =  ReturnType<typeof rootReducer>