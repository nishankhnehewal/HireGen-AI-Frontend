import { Search, Bell, Moon, UserCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {

    return (

        <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-2xl">

            <div className="flex items-center justify-between px-8 py-5">

                {/* Left */}

                <motion.div

                    initial={{ opacity:0, x:-20 }}

                    animate={{ opacity:1, x:0 }}

                >

                    <h1 className="text-4xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">

                        HireGen AI

                    </h1>

                    <p className="mt-2 text-slate-500">

                        AI Resume Intelligence Workspace

                    </p>

                </motion.div>

                {/* Right */}

                <div className="flex items-center gap-5">

                    {/* Search */}

                    <div className="relative hidden lg:block">

                        <Search

                            size={18}

                            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"

                        />

                        <input

                            placeholder="Search resumes..."

                            className="w-96 rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-5 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"

                        />

                    </div>

                    {/* AI */}

                    <motion.div

                        whileHover={{ scale:1.05 }}

                        className="hidden xl:flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-5 py-3 text-white shadow-xl"

                    >

                        <Sparkles size={18} />

                        <span className="font-semibold">

                            AI Active

                        </span>

                    </motion.div>

                    {/* Theme */}

                    <motion.button

                        whileHover={{ scale:1.08 }}

                        whileTap={{ scale:.92 }}

                        className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 transition hover:bg-slate-200"

                    >

                        <Moon size={18} />

                    </motion.button>

                    {/* Notification */}

                    <motion.button

                        whileHover={{ scale:1.08 }}

                        whileTap={{ scale:.92 }}

                        className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 transition hover:bg-slate-200"

                    >

                        <Bell size={18} />

                        <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

                    </motion.button>

                    {/* Profile */}

                    <motion.div

                        whileHover={{ scale:1.03 }}

                        className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-md"

                    >

                        <UserCircle2

                            size={46}

                            className="text-indigo-600"

                        />

                        <div>

                            <h3 className="font-bold text-slate-800">

                                Nishankh

                            </h3>

                            <p className="text-xs text-slate-500">

                                Premium Account

                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>

        </header>

    );

}