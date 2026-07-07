import { Eye, Trash2, FileText, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumeTable({

    resumes,
    navigate,
    deleteResume

}) {

    const getColor = (score) => {

        if (score >= 80)
            return "bg-green-500";

        if (score >= 60)
            return "bg-yellow-500";

        return "bg-red-500";

    };

    const getStatus = (score) => {

        if (score >= 80)
            return "Excellent";

        if (score >= 60)
            return "Good";

        return "Needs Work";

    };

    return (

        <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b px-8 py-7">

                <div>

                    <h2 className="text-3xl font-bold">

                        Recent Resumes

                    </h2>

                    <p className="mt-2 text-slate-500">

                        AI Generated Resume Reports

                    </p>

                </div>

                <div className="rounded-2xl bg-indigo-50 px-5 py-3 text-indigo-600 font-semibold">

                    {resumes.length} Files

                </div>

            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-slate-50">

                        <tr className="text-left text-slate-600">

                            <th className="px-8 py-5">

                                Resume

                            </th>

                            <th>

                                Resume Score

                            </th>

                            <th>

                                ATS Score

                            </th>

                            <th>

                                Verdict

                            </th>

                            <th>

                                Actions

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            resumes.map((resume,index)=>(

                                <motion.tr

                                    key={resume.id}

                                    initial={{

                                        opacity:0,

                                        y:15

                                    }}

                                    animate={{

                                        opacity:1,

                                        y:0

                                    }}

                                    transition={{

                                        delay:index*.08

                                    }}

                                    whileHover={{

                                        backgroundColor:"#F8FAFC"

                                    }}

                                    className="border-b"

                                >

                                    <td className="px-8 py-6">

                                        <div className="flex items-center gap-4">

                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">

                                                <FileText

                                                    className="text-red-600"

                                                    size={26}

                                                />

                                            </div>

                                            <div>

                                                <h3 className="max-w-[260px] truncate font-bold">

                                                    {resume.fileName}

                                                </h3>

                                                <p className="mt-1 text-sm text-slate-500">

                                                    Resume #{resume.id}

                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    <td>

                                        <div className="w-44">

                                            <div className="mb-2 flex justify-between text-sm">

                                                <span>

                                                    {resume.resumeScore}%

                                                </span>

                                                <TrendingUp

                                                    size={15}

                                                    className="text-green-600"

                                                />

                                            </div>

                                            <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                                                <motion.div

                                                    initial={{

                                                        width:0

                                                    }}

                                                    animate={{

                                                        width:`${resume.resumeScore}%`

                                                    }}

                                                    transition={{

                                                        duration:1

                                                    }}

                                                    className={`h-full ${getColor(resume.resumeScore)}`}

                                                />

                                            </div>

                                        </div>

                                    </td>

                                    <td>

                                        <div className="w-44">

                                            <div className="mb-2 flex justify-between text-sm">

                                                <span>

                                                    {resume.atsScore}%

                                                </span>

                                                <TrendingUp

                                                    size={15}

                                                    className="text-indigo-600"

                                                />

                                            </div>

                                            <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                                                <motion.div

                                                    initial={{

                                                        width:0

                                                    }}

                                                    animate={{

                                                        width:`${resume.atsScore}%`

                                                    }}

                                                    transition={{

                                                        duration:1

                                                    }}

                                                    className={`h-full ${getColor(resume.atsScore)}`}

                                                />

                                            </div>

                                        </div>

                                    </td>

                                    <td>

                                        <span

                                            className={`rounded-full px-4 py-2 text-sm font-semibold text-white ${getColor(resume.atsScore)}`}

                                        >

                                            {getStatus(resume.atsScore)}

                                        </span>

                                    </td>

                                    <td>

                                        <div className="flex gap-3">

                                            <motion.button

                                                whileHover={{

                                                    scale:1.1

                                                }}

                                                whileTap={{

                                                    scale:.9

                                                }}

                                                onClick={()=>navigate("/analysis/"+resume.id)}

                                                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"

                                            >

                                                <Eye size={18}/>

                                            </motion.button>

                                            <motion.button

                                                whileHover={{

                                                    scale:1.1

                                                }}

                                                whileTap={{

                                                    scale:.9

                                                }}

                                                onClick={()=>deleteResume(resume.id)}

                                                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"

                                            >

                                                <Trash2 size={18}/>

                                            </motion.button>

                                        </div>

                                    </td>

                                </motion.tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}