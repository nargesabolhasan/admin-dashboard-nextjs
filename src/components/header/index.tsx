'use client'

import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import {login, logout} from "@/app/redux/featuers/login/login-slice";
import {closeSideBar, openSideBar} from "@/app/redux/featuers/sidebar/sidebar-slice";

const Header = () => {
    const showSidebar = useSelector((state: RootState) => state.sidebar.isOpen)
    const authenticated = useSelector((state: RootState) => state.authenticate.isLogin)
    const dispatch = useDispatch()
    const handleLogin = () => {
        authenticated ? dispatch(logout()) : dispatch(login())
    }
    const handleShowSideBar = () => {
        showSidebar ? dispatch(closeSideBar()) : dispatch(openSideBar())
    }
    return (
        <header className={"sticky z-50 w-full h-20 bg-white drop-shadow-1"}>
            <div className={"flex flex-grow gap-2 items-center justify-end p-4 shadow-2 md:px-6 2xl:px-11"}>
                <div className={"flex items-center gap-2 sm:gap-4"}>
                    <button
                        className={"inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide"}
                        onClick={handleShowSideBar}>
                        {showSidebar ? "hide sidebar" : "show sidebar"}
                    </button>
                    <button
                        className={"inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide"}
                        onClick={handleLogin}>
                        {authenticated ? "logout" : "login"}
                    </button>
                </div>
            </div>
        </header>
    )

}

export default Header;