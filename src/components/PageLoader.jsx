import { motion } from "framer-motion";

export default function PageLoader() {

    return (

        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-[9999]">

            <motion.div

                animate={{

                    rotate:360

                }}

                transition={{

                    repeat:Infinity,

                    duration:1,

                    ease:"linear"

                }}

                className="w-16 h-16 rounded-full border-4 border-indigo-600 border-t-transparent"

            />

        </div>

    );

}