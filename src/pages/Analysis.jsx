import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";

import Layout from "../components/Layout";

import VerdictBanner from "../components/analysis/VerdictBanner";
import ScoreGauge from "../components/analysis/ScoreGauge";
import AnalysisCard from "../components/analysis/AnalysisCard";
import SkillChip from "../components/analysis/SkillChip";
import Timeline from "../components/analysis/Timeline";

import {
    ArrowLeft,
    Download,
    Share2,
    CheckCircle2,
    AlertTriangle,
    Brain,
    Sparkles
} from "lucide-react";

import { motion } from "framer-motion";

export default function Analysis() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [analysis, setAnalysis] = useState(null);

    useEffect(() => {
        loadAnalysis();
    }, []);

    const loadAnalysis = async () => {

        try {

            const response = await axios.get(

                "/resume/analysis/" + id,

                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("token")
                    }
                }

            );

            setAnalysis(response.data);

        }

        catch {

            navigate("/dashboard");

        }

    };

    if (!analysis)

        return (
             <motion.div

        initial={{ opacity:0 }}

        animate={{ opacity:1 }}

        transition={{ duration:.35 }}

    >

            <Layout>

                <div className="h-[80vh] flex items-center justify-center">

                    <motion.div

                        animate={{
                            rotate: 360
                        }}

                        transition={{
                            repeat: Infinity,
                            duration: 1.2,
                            ease: "linear"
                        }}

                        className="w-16 h-16 rounded-full border-4 border-indigo-600 border-t-transparent"

                    />

                </div>

            </Layout>
        </motion.div>
    

        );
        

    return (

        <Layout>

            <div className="max-w-7xl mx-auto space-y-8">

                <button

                    onClick={() => navigate("/dashboard")}

                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"

                >

                    <ArrowLeft size={18} />

                    Back Dashboard

                </button>

                <VerdictBanner

                    atsScore={analysis.atsScore}

                    resumeScore={analysis.resumeScore}

                />

                <div className="grid md:grid-cols-2 gap-8">

                    <ScoreGauge
                        score={analysis.resumeScore}
                        title="Resume Score"
                        color="border-green-500"
                    />

                    <ScoreGauge
                        score={analysis.atsScore}
                        title="ATS Score"
                        color="border-indigo-500"
                    />

                </div>

                <div className="flex gap-4">

                    <button

                        className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow-xl"

                    >

                        <Download size={18} />

                        Download Report

                    </button>

                    <button

                        className="flex items-center gap-2 px-6 py-4 rounded-2xl border"

                    >

                        <Share2 size={18} />

                        Share Report

                    </button>

                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    <AnalysisCard

                        title="Strengths"

                        color="bg-green-500"

                        icon={CheckCircle2}

                    >

                        <div className="flex flex-wrap gap-3">

                            {

                                analysis.strengths

                                    ?.split(/[,.;]/)

                                    .filter(s => s.trim().length > 2)

                                    .map((skill, index) => (

                                        <SkillChip

                                            key={index}

                                            text={skill.trim()}

                                        />

                                    ))

                            }

                        </div>

                    </AnalysisCard>

                    <AnalysisCard

                        title="Weaknesses"

                        color="bg-red-500"

                        icon={AlertTriangle}

                    >

                        <ul className="space-y-3">

                            {

                                analysis.weaknesses

                                    ?.split(".")

                                    .filter(Boolean)

                                    .map((item, index) => (

                                        <li

                                            key={index}

                                            className="flex gap-3"

                                        >

                                            <span className="text-red-500 mt-1">

                                                •

                                            </span>

                                            <span className="text-slate-700">

                                                {item.trim()}

                                            </span>

                                        </li>

                                    ))

                            }

                        </ul>

                    </AnalysisCard>

                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    <AnalysisCard

                        title="Missing Skills"

                        color="bg-orange-500"

                        icon={Sparkles}

                    >

                        <div className="flex flex-wrap gap-3">

                            {

                                analysis.missingSkills

                                    ?.split(/[,.;]/)

                                    .filter(s => s.trim().length > 2)

                                    .map((skill, index) => (

                                        <SkillChip

                                            key={index}

                                            text={skill.trim()}

                                        />

                                    ))

                            }

                        </div>

                    </AnalysisCard>

                    <AnalysisCard

                        title="Improvement Roadmap"

                        color="bg-blue-500"

                        icon={Brain}

                    >

                        <Timeline

                            improvements={

                                analysis.improvements

                                    ?.split(".")

                                    .filter(Boolean)

                            }

                        />

                    </AnalysisCard>

                </div>

                <AnalysisCard

                    title="AI Summary"

                    color="bg-purple-600"

                    icon={Sparkles}

                >

                    <p className="leading-8 text-slate-700">

                        {analysis.summary}

                    </p>

                </AnalysisCard>

            </div>

        </Layout>
       

    );

}