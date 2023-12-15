'use client';
import {configureStore, Slice} from "@reduxjs/toolkit";
import loginReducer from "./featuers/login/login-slice";
import {loadPreloadState, saveState} from "@/app/redux/connect-to-localstorage";
import sidebarReducer from "@/app/redux/featuers/sidebar/sidebar-slice";

export const store = configureStore({
    reducer: {
        //@ts-ignore
        authenticate:loginReducer,
        sidebar:sidebarReducer
    },
    devTools: true,
    preloadedState: loadPreloadState(),
})

store.subscribe(() => {
    saveState({
        //@ts-ignore
        authenticated: store.getState().authenticate.isLogin
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState
