import { motion } from "framer-motion";
import {
    Sparkles,
    Star,
    ShieldCheck
} from "lucide-react";

export default function VerdictBanner({ atsScore, resumeScore }) {

    let verdict = "Needs Improvement";
    let color =
        "from-red-500 via-orange-500 to-yellow-500";

    if (atsScore >= 80 && resumeScore >= 80) {

        verdict = "Excellent Resume";
        color =
            "from-emerald-500 via-green-500 to-teal-500";

    } else if (atsScore >= 65 && resumeScore >= 60) {

        verdict = "Good Resume";
        color =
            "from-indigo-600 via-purple-600 to-pink-600";

    }

    return (

        <motion.div

            initial={{
                opacity:0,
                y:30
            }}

            animate={{
                opacity:1,
                y:0
            }}

            transition={{
                duration:.4
            }}

            className={`rounded-3xl bg-gradient-to-r ${color} p-8 text-white shadow-2xl relative overflow-hidden`}

        >

            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>

            <div className="relative z-10 flex justify-between items-center">

                <div>

                    <div className="flex items-center gap-2">

                        <Sparkles size={22} />

                        <span className="uppercase tracking-widest text-sm">

                            AI Verdict

                        </span>

                    </div>

                    <h1 className="text-5xl font-black mt-4">

                        {verdict}

                    </h1>

                    <p className="mt-4 text-white/90 text-lg max-w-xl">

                        Your resume has been analyzed using AI-powered ATS
                        evaluation. Continue improving the highlighted
                        sections to maximize recruiter visibility and increase
                        interview chances.

                    </p>

                </div>

                <div className="hidden md:flex flex-col items-center">

                    <ShieldCheck size={72} />

                    <div className="flex mt-5 gap-1">

                        <Star fill="white" />
                        <Star fill="white" />
                        <Star fill="white" />
                        <Star fill="white" />
                        <Star fill="white" />

                    </div>

                </div>

            </div>

        </motion.div>

    );

}