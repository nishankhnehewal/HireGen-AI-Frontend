import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import toast from "react-hot-toast";

import Layout from "../components/Layout";

import { motion } from "framer-motion";

import {
    UploadCloud,
    FileText,
    Sparkles,
    CheckCircle2
} from "lucide-react";

export default function UploadResume() {

    const navigate = useNavigate();

    const [file,setFile]=useState(null);

    const [uploading,setUploading]=useState(false);

    const [dragging,setDragging]=useState(false);

    const uploadResume=async()=>{

        if(!file){

            toast.error("Please select a PDF file");

            return;

        }

        const formData=new FormData();

        formData.append("file",file);

        try{

            setUploading(true);

            await axios.post(

                "/resume/upload",

                formData,

                {

                    headers:{

                        Authorization:
                        "Bearer "+localStorage.getItem("token"),

                        "Content-Type":"multipart/form-data"

                    }

                }

            );

            toast.success("Resume analyzed successfully! 🎉");

            navigate("/dashboard");

        }

        catch{

            toast.error("Upload failed. Please try again.");

        }

        finally{

            setUploading(false);

        }

    };

    return(
        

    <motion.div

        initial={{ opacity:0 }}

        animate={{ opacity:1 }}

        transition={{ duration:.35 }}

    >


        <Layout>

            <div className="max-w-5xl mx-auto">

                <motion.div

                    initial={{opacity:0,y:30}}

                    animate={{opacity:1,y:0}}

                    className="mb-10"

                >

                    <h1 className="text-5xl font-bold">

                        Upload Resume

                    </h1>

                    <p className="text-slate-500 mt-3 text-lg">

                        Upload your resume and let AI generate an ATS report,
                        strengths, weaknesses and personalized improvements.

                    </p>

                </motion.div>

                <motion.div

                    whileHover={{scale:1.01}}

                    onDragOver={(e)=>{

                        e.preventDefault();

                        setDragging(true);

                    }}

                    onDragLeave={()=>setDragging(false)}

                    onDrop={(e)=>{

                        e.preventDefault();

                        setDragging(false);

                        const dropped=e.dataTransfer.files[0];

                        if(dropped){

                            setFile(dropped);

                        }

                    }}

                    className={`rounded-3xl border-2 border-dashed p-20 text-center transition-all duration-300

                    ${
                        dragging

                        ?

                        "border-indigo-600 bg-indigo-50"

                        :

                        "border-indigo-300 bg-white"

                    }

                    shadow-xl`}

                >

                    <motion.div

                        animate={uploading?{

                            y:[0,-10,0]

                        }:{}}

                        transition={{

                            repeat:Infinity,

                            duration:1

                        }}

                    >

                        <UploadCloud

                            size={90}

                            className="mx-auto text-indigo-600"

                        />

                    </motion.div>

                    <h2 className="text-3xl font-bold mt-8">

                        Drag & Drop Resume

                    </h2>

                    <p className="text-slate-500 mt-2">

                        PDF files only

                    </p>

                    <label className="inline-block mt-8">

                        <input

                            type="file"

                            accept=".pdf"

                            hidden

                            onChange={(e)=>setFile(e.target.files[0])}

                        />

                        <div className="cursor-pointer rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-8 py-4 text-white font-semibold shadow-xl">

                            Browse Resume

                        </div>

                    </label>

                    {

                        file&&

                        <motion.div

                            initial={{opacity:0}}

                            animate={{opacity:1}}

                            className="mt-10 mx-auto max-w-xl rounded-2xl bg-slate-100 p-5 flex items-center gap-4"

                        >

                            <FileText

                                className="text-red-600"

                                size={35}

                            />

                            <div className="text-left flex-1">

                                <h3 className="font-semibold truncate">

                                    {file.name}

                                </h3>

                                <p className="text-sm text-slate-500">

                                    Ready for AI analysis

                                </p>

                            </div>

                            <CheckCircle2

                                className="text-green-600"

                            />

                        </motion.div>

                    }

                    {

                        uploading &&

                        <div className="mt-10">

                            <div className="w-full h-4 rounded-full bg-slate-200 overflow-hidden">

                                <motion.div

                                    initial={{width:0}}

                                    animate={{width:"100%"}}

                                    transition={{duration:3}}

                                    className="h-full bg-gradient-to-r from-indigo-600 to-fuchsia-600"

                                />

                            </div>

                            <div className="flex justify-center items-center gap-3 mt-5 text-indigo-600 font-semibold">

                                <Sparkles className="animate-pulse"/>

                                AI is analyzing your resume...

                            </div>

                        </div>

                    }

                    <motion.button

                        whileHover={{scale:1.05}}

                        whileTap={{scale:.95}}

                        disabled={uploading}

                        onClick={uploadResume}

                        className="mt-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-10 py-5 text-white text-lg font-semibold shadow-xl"

                    >

                        {

                            uploading

                            ?

                            "Analyzing Resume..."

                            :

                            "Upload & Analyze"

                        }

                    </motion.button>

                </motion.div>

            </div>

        </Layout>
     </motion.div>    

    );

}