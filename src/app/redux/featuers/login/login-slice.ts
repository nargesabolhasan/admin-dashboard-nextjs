'use client'
import {createSlice} from "@reduxjs/toolkit";

export interface LoginState {
    isLogin: boolean
}

const initialState: LoginState  = {
    isLogin: true
}

export const loginSlice = createSlice({
    name: "login", initialState, reducers: {
        login: (state) => {
            state.isLogin = true
        },
        logout: (state) => {
            state.isLogin = false
        }
    }
})

export const {login, logout} = loginSlice.actions
const  loginReducer=loginSlice.reducer
export default loginReducer