import { motion } from "framer-motion";

export default function AnalysisCard({

    title,
    color,
    icon: Icon,
    children

}) {

    return (

        <motion.div

            initial={{

                opacity:0,

                y:25

            }}

            animate={{

                opacity:1,

                y:0

            }}

            whileHover={{

                y:-8,

                scale:1.01

            }}

            transition={{

                duration:.35

            }}

            className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl transition-all"

        >

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100"></div>

            <div className="relative z-10">

                <div className="mb-8 flex items-center justify-between">

                    <div className="flex items-center gap-4">

                        {

                            Icon &&

                            <div

                                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color} text-white shadow-lg`}

                            >

                                <Icon size={24}/>

                            </div>

                        }

                        <div>

                            <h2 className="text-2xl font-bold text-slate-800">

                                {title}

                            </h2>

                            <p className="mt-1 text-sm text-slate-500">

                                AI Generated Insights

                            </p>

                        </div>

                    </div>

                    <div className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600">

                        HireGen AI

                    </div>

                </div>

                <div className="rounded-2xl bg-slate-50 p-6">

                    <div className="leading-8 text-slate-700">

                        {children}

                    </div>

                </div>

            </div>

        </motion.div>

    );

}