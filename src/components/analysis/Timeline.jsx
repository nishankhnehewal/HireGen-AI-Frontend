import { motion } from "framer-motion";
import {
    CheckCircle2,
    Sparkles,
    ArrowRight
} from "lucide-react";

export default function Timeline({ improvements }) {

    const steps = improvements || [];

    return (

        <div className="space-y-8">

            {

                steps.map((step,index)=>(

                    <motion.div

                        key={index}

                        initial={{

                            opacity:0,

                            x:-30

                        }}

                        animate={{

                            opacity:1,

                            x:0

                        }}

                        transition={{

                            delay:index*.15

                        }}

                        whileHover={{

                            x:8

                        }}

                        className="relative flex gap-6"

                    >

                        <div className="flex flex-col items-center">

                            <motion.div

                                whileHover={{

                                    scale:1.1,

                                    rotate:8

                                }}

                                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg"

                            >

                                {

                                    index===0

                                    ?

                                    <Sparkles size={20}/>

                                    :

                                    <CheckCircle2 size={18}/>

                                }

                            </motion.div>

                            {

                                index!==steps.length-1 &&

                                <div className="mt-3 h-20 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-300"/>

                            }

                        </div>

                        <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-indigo-300 hover:bg-white hover:shadow-lg">

                            <div className="flex items-center justify-between">

                                <h3 className="text-lg font-bold text-slate-800">

                                    Step {index+1}

                                </h3>

                                {

                                    index===0 &&

                                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">

                                        High Priority

                                    </span>

                                }

                            </div>

                            <p className="mt-3 leading-7 text-slate-600">

                                {step}

                            </p>

                            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-indigo-600">

                                Continue

                                <ArrowRight size={15}/>

                            </div>

                        </div>

                    </motion.div>

                ))

            }

        </div>

    );

}