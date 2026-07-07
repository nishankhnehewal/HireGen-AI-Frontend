import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function ScoreGauge({

    title,
    score,
    color

}) {

    const radius = 80;

    const circumference = 2 * Math.PI * radius;

    const offset =
        circumference -
        (score / 100) * circumference;

    const status =

        score >= 80

            ? "Excellent"

            : score >= 60

            ? "Good"

            : "Needs Work";

    const statusColor =

        score >= 80

            ? "text-green-600"

            : score >= 60

            ? "text-yellow-500"

            : "text-red-500";

    return (

        <motion.div

            initial={{

                opacity:0,

                y:20

            }}

            animate={{

                opacity:1,

                y:0

            }}

            transition={{

                duration:.5

            }}

            className="relative overflow-hidden rounded-[32px] bg-white p-10 shadow-2xl"

        >

            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-100 blur-3xl opacity-60"></div>

            <div className="relative flex flex-col items-center">

                <div className="relative h-52 w-52">

                    <svg

                        className="absolute inset-0 -rotate-90"

                        width="208"

                        height="208"

                    >

                        <circle

                            cx="104"

                            cy="104"

                            r={radius}

                            stroke="#E5E7EB"

                            strokeWidth="14"

                            fill="transparent"

                        />

                        <motion.circle

                            cx="104"

                            cy="104"

                            r={radius}

                            stroke="url(#gradient)"

                            strokeWidth="14"

                            fill="transparent"

                            strokeLinecap="round"

                            strokeDasharray={circumference}

                            initial={{

                                strokeDashoffset:circumference

                            }}

                            animate={{

                                strokeDashoffset:offset

                            }}

                            transition={{

                                duration:1.5

                            }}

                        />

                        <defs>

                            <linearGradient

                                id="gradient"

                                x1="0%"

                                y1="0%"

                                x2="100%"

                                y2="100%"

                            >

                                <stop

                                    offset="0%"

                                    stopColor="#6366F1"

                                />

                                <stop

                                    offset="100%"

                                    stopColor="#D946EF"

                                />

                            </linearGradient>

                        </defs>

                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">

                        <h1 className="text-6xl font-black text-slate-800">

                           {score}

                        </h1>

                        <p className="mt-2 text-slate-500">

                            {title}

                        </p>

                    </div>

                </div>

                <span

                    className={`mt-6 rounded-full bg-slate-100 px-5 py-2 font-bold ${statusColor}`}

                >

                    {status}

                </span>

                <p className="mt-4 text-center text-slate-500">

                    AI evaluated this score based on
                    resume quality, ATS compatibility
                    and recruiter readability.

                </p>

            </div>

        </motion.div>

    );

}