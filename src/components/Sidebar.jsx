import { NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    Upload,
    FileText,
    BarChart3,
    User,
    Settings,
    LogOut,
    Sparkles,
    ChevronRight
} from "lucide-react";

import { motion } from "framer-motion";

export default function Sidebar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    const menus = [

        {
            title:"Dashboard",
            path:"/dashboard",
            icon:LayoutDashboard
        },

        {
            title:"Upload Resume",
            path:"/upload",
            icon:Upload
        },

        {
            title:"My Resumes",
            path:"/resumes",
            icon:FileText
        },

        {
            title:"Analysis",
            path:"/analysis",
            icon:BarChart3
        },

        {
            title:"Profile",
            path:"/profile",
            icon:User
        },

        {
            title:"Settings",
            path:"/settings",
            icon:Settings
        }

    ];

    return(

        <aside className="w-72 min-h-screen bg-slate-950 text-white border-r border-slate-800 flex flex-col justify-between">

            <div>

                <div className="p-8 border-b border-slate-800">

                    <motion.div

                        whileHover={{scale:1.03}}

                        className="flex items-center gap-4"

                    >

                        <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl">

                            <Sparkles size={28}/>

                        </div>

                        <div>

                            <h1 className="text-3xl font-black">

                                HireGen AI

                            </h1>

                            <p className="text-slate-400 text-sm">

                                Resume Intelligence

                            </p>

                        </div>

                    </motion.div>

                </div>

                <div className="mt-8 px-4 space-y-3">
                    </div>
                    {

    menus.map((item)=>{

        const Icon=item.icon;

        return(

                    <NavLink
                    key={item.title}
                    to={item.path}
                    end={item.path === "/dashboard"}
                    className={({ isActive }) =>

                        `group mx-2 flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300

                        ${

                            isActive

                            ?

                            "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl"

                            :

                            "hover:bg-slate-900"

                        }`

                    }

                >

                <div className="flex items-center gap-4">

                    <Icon

                        size={22}

                        className="transition-transform duration-300 group-hover:scale-110"

                    />

                    <span className="font-medium">

                        {item.title}

                    </span>

                </div>

                <ChevronRight

                    size={18}

                    className="opacity-0 transition-all duration-300 group-hover:opacity-100"

                />

            </NavLink>

        );

    })

}

</div>


<div className="p-5">

    <motion.div

        whileHover={{ scale: 1.03 }}

        className="rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 shadow-2xl"

    >

        <div className="flex items-center gap-3 mb-4">

            <Sparkles size={24} />

            <h3 className="text-2xl font-bold">

                HireGen Pro

            </h3>

        </div>

        <p className="text-sm leading-7 text-white/90">

            ✓ AI Resume Analysis

            <br />

            ✓ ATS Optimization

            <br />

            ✓ Cover Letter Generator

            <br />

            ✓ Job Matching

            <br />

            ✓ Interview Preparation

        </p>

        <motion.button

            whileHover={{ scale: 1.05 }}

            whileTap={{ scale: .95 }}

            className="mt-6 w-full rounded-2xl bg-white py-3 font-bold text-indigo-700 shadow-lg"

        >

            Upgrade Plan

        </motion.button>

    </motion.div>

    <motion.button

        whileHover={{ scale: 1.02 }}

        whileTap={{ scale: .97 }}

        onClick={logout}

        className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-600 py-4 font-semibold text-white shadow-xl"

    >

        <LogOut size={18} />

        Logout

    </motion.button>

</div>

</aside>

);
}

   