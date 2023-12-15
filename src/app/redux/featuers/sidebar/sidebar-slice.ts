'use client'
import {createSlice} from "@reduxjs/toolkit";

export interface SideBarState {
    isOpen: boolean
}

const initialState: SideBarState = {
    isOpen: true
}

export const sideBarSlice = createSlice({
    name: "sidebar", initialState, reducers: {
        openSideBar: (state) => {
            state.isOpen = true
        },
        closeSideBar: (state) => {
            state.isOpen = false
        }
    }
})

export const {openSideBar, closeSideBar} = sideBarSlice.actions
const sidebarReducer = sideBarSlice.reducer
export default sidebarReducer