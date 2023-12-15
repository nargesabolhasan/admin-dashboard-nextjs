'use client'
import React, {useState} from 'react';
import Link from "next/link";
import sidebarItems from "@/components/sidebar/sidebar-items";
import {usePathname,useRouter} from "next/navigation";

const Sidebar = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(true)
    const pathname = usePathname()
    const router = useRouter()
    const handleNavigate = (path: string) => {
        router.push(path)
    }
    return (
        <aside
            className={`absolute top-0 left-0 flex flex-col h-screen w-[350px] z-30 overflow-y-hidden bg-amber-800 duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarIsOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className={"flex flex-col justify-between items-center gap-2 p-6"}>
                <Link href={"/"} className={"text-[40px]"}>admin dashboard</Link>
                <div className={"flex flex-col  duration-300 ease-linear"}>
                    <ul className={"mb-6 flex flex-col gap-1.5"}>{sidebarItems.map(item => <li
                        key={item.id}>
                        <label
                            onClick={() => handleNavigate(item.path)}
                            className={`group relative cursor-pointer flex items-center gap-2.5 rounded-md p-2 font-medium text-black duration-300 ease-in-out hover:bg-amber-950 ${pathname.includes(`${item.id}`) && "bg-amber-100"}`}>
                            {item.label}
                        </label>
                    </li>)}
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;