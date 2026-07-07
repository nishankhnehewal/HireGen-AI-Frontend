import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import axios from "../api/axios";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import ResumeTable from "../components/ResumeTable";

import {
    FileText,
    Trophy,
    BarChart3,
    Upload,
    Sparkles,
    ArrowRight
} from "lucide-react";

export default function Dashboard() {

    const navigate = useNavigate();

    const [resumes,setResumes]=useState([]);

    const [loading,setLoading]=useState(true);

    useEffect(()=>{

        loadResumes();

    },[]);

    const loadResumes=async()=>{

        try{

            const response=await axios.get(

                "/resume",

                {

                    headers:{

                        Authorization:
                        "Bearer "+localStorage.getItem("token")

                    }

                }

            );

            setResumes(response.data);

        }

        catch(error){

            console.log(error);

            navigate("/");

        }

        finally{

            setLoading(false);

        }

    };

    const deleteResume=async(id)=>{

        if(!window.confirm("Delete Resume?")) return;

        try{

            await axios.delete(

                "/resume/"+id,

                {

                    headers:{

                        Authorization:
                        "Bearer "+localStorage.getItem("token")

                    }

                }

            );toast.success("Resume deleted");

            loadResumes();

        }

        catch{

            toast.error("Delete failed");

        }

    };

    const averageResumeScore=

        resumes.length

        ?

        Math.round(

            resumes.reduce(

                (sum,item)=>

                sum+Number(item.resumeScore||0),

                0

            )/resumes.length

        )

        :

        0;

    const averageATSScore=

        resumes.length

        ?

        Math.round(

            resumes.reduce(

                (sum,item)=>

                sum+Number(item.atsScore||0),

                0

            )/resumes.length

        )

        :

        0;

    const excellent=

        resumes.filter(

            r=>Number(r.atsScore)>=80

        ).length;
            return (
                <motion.div

        initial={{ opacity:0 }}

        animate={{ opacity:1 }}

        transition={{ duration:.35 }}

        >
                

        <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-white">

            <Sidebar />

            <div className="flex-1 overflow-auto">

                <Navbar />

                <div className="p-8">

                    {/* Hero */}

                    <motion.div

                        initial={{ opacity: 0, y: 20 }}

                        animate={{ opacity: 1, y: 0 }}

                        className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 p-10 text-white shadow-2xl mb-8"

                    >

                        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-10">

                            <div>

                                <p className="uppercase tracking-[6px] text-white/70">

                                    HireGen AI

                                </p>

                                <h1 className="mt-4 text-5xl font-black leading-tight">

                                    👋 Welcome Back,

                                    <br />

                                    Nishankh

                                </h1>

                                <p className="mt-5 max-w-2xl text-lg text-white/90">

                                    Your AI Resume Intelligence Workspace.

                                    Upload resumes, improve ATS score and

                                    receive AI powered recommendations.

                                </p>

                                <div className="flex gap-4 mt-8">

                                    <button

                                        onClick={() => navigate("/upload")}

                                        className="flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-indigo-700 shadow-xl hover:scale-105 transition"

                                    >

                                        <Upload size={20} />

                                        Upload Resume

                                    </button>

                                    <button

                                        className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-7 py-4 backdrop-blur-lg hover:bg-white/20 transition"

                                    >

                                        <Sparkles size={20} />

                                        AI Insights

                                    </button>

                                </div>

                            </div>

                            <div className="grid grid-cols-2 gap-5">

                                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl">

                                    <p className="text-white/70">

                                        Total Uploads

                                    </p>

                                    <h2 className="mt-3 text-5xl font-bold">

                                        {resumes.length}

                                    </h2>

                                </div>

                                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl">

                                    <p className="text-white/70">

                                        Excellent ATS

                                    </p>

                                    <h2 className="mt-3 text-5xl font-bold">

                                        {excellent}

                                    </h2>

                                </div>

                                <div className="col-span-2 rounded-3xl bg-white/10 p-6 backdrop-blur-xl">

                                    <p className="text-white/70">

                                        AI Recommendation

                                    </p>

                                    <h2 className="mt-3 text-3xl font-bold">

                                        {averageATSScore >= 80

                                            ? "Excellent Resume"

                                            : averageATSScore >= 60

                                            ? "Good Resume"

                                            : "Needs Improvement"}

                                    </h2>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                    {/* Stats */}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">

                        <StatsCard

                            title="Total Resumes"

                            value={resumes.length}

                            icon={FileText}

                            color="bg-gradient-to-r from-blue-600 to-indigo-600"

                        />

                        <StatsCard

                            title="Resume Score"

                            value={`${averageResumeScore}%`}

                            icon={Trophy}

                            color="bg-gradient-to-r from-green-500 to-emerald-500"

                        />

                        <StatsCard

                            title="ATS Score"

                            value={`${averageATSScore}%`}

                            icon={BarChart3}

                            color="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"

                        />

                    </div>

                    <div className="flex items-center justify-between mb-6">

                        <div>

                            <h2 className="text-3xl font-bold">

                                Recent Resumes

                            </h2>

                            <p className="text-slate-500 mt-2">

                                View, analyze and manage all uploaded resumes.

                            </p>

                        </div>

                        <button

                            onClick={() => navigate("/upload")}

                            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-7 py-4 text-white font-semibold shadow-xl hover:scale-105 transition"

                        >

                            Upload Resume

                            <ArrowRight size={18} />

                        </button>

                    </div>

                    {

                        loading ?

                        <div className="rounded-3xl bg-white p-16 text-center shadow-xl">

                            <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>

                            <p className="mt-6 text-slate-500">

                                Loading your dashboard...

                            </p>

                        </div>

                        :

                        resumes.length===0 ?

                        <div className="rounded-3xl bg-white p-20 text-center shadow-xl">

                            <FileText

                                size={90}

                                className="mx-auto text-indigo-500"

                            />

                            <h2 className="mt-8 text-3xl font-bold">

                                No Resume Uploaded

                            </h2>

                            <p className="mt-3 text-slate-500">

                                Upload your first resume and let AI analyze it.

                            </p>

                            <button

                                onClick={()=>navigate("/upload")}

                                className="mt-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white"

                            >

                                Upload Resume

                            </button>

                        </div>

                        :

                        <ResumeTable

                            resumes={resumes}

                            navigate={navigate}

                            deleteResume={deleteResume}

                        />

                    }

                </div>

            </div>

        </div>
    </motion.div>    

    );

}