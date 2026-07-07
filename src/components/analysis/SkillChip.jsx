import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function SkillChip({ text }) {

    if (!text) return null;

    return (

        <motion.div

            whileHover={{

                scale:1.06,

                y:-3

            }}

            whileTap={{

                scale:.95

            }}

            className="group flex items-center gap-3 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-purple-50 px-5 py-3 shadow-sm transition-all hover:border-indigo-300 hover:shadow-lg"

        >

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-white">

                <CheckCircle2 size={14}/>

            </div>

            <span className="font-medium text-slate-700 group-hover:text-indigo-700">

                {text}

            </span>

        </motion.div>

    );

}