import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    Sparkles
} from "lucide-react";
import axios from "../api/axios";
import toast from "react-hot-toast";

export default function Login() {

    const navigate = useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loading,setLoading]=useState(false);
    const [showPassword,setShowPassword]=useState(false);

    const login=async()=>{

        if(!email||!password){

            toast.error("Please fill all fields");

            return;

        }

        try{

            setLoading(true);

            const response=await axios.post(

                "/users/login",

                {

                    email,
                    password

                }

            );

            localStorage.setItem(

                "token",

                response.data.token

            );

            navigate("/dashboard");

        }

        catch{

            toast.error("Invalid email or password");

        }

        finally{

            setLoading(false);

        }

    };

    return(
         <motion.div

        initial={{ opacity:0 }}

        animate={{ opacity:1 }}

        transition={{ duration:.35 }}

    >

        <div className="min-h-screen overflow-hidden relative flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-fuchsia-100">

            <div className="absolute w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl -top-20 -left-20"/>

            <div className="absolute w-[500px] h-[500px] rounded-full bg-fuchsia-500/20 blur-3xl bottom-0 right-0"/>

            <motion.div

                animate={{

                    y:[0,-15,0]

                }}

                transition={{

                    repeat:Infinity,

                    duration:5

                }}

                className="absolute top-24 left-32"

            >

                <Sparkles className="text-indigo-500" size={40}/>

            </motion.div>

            <motion.div

                initial={{

                    opacity:0,
                    scale:.9

                }}

                animate={{

                    opacity:1,
                    scale:1

                }}

                transition={{

                    duration:.5

                }}

                className="w-full max-w-md rounded-3xl border border-white/40 bg-white/70 backdrop-blur-2xl shadow-2xl p-10"

            >

              <div className="text-center">

                    <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">

                        HireGen AI

                    </h1>

                    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700">

                        <Sparkles size={16}/>

                        AI Powered Resume Intelligence

                    </div>

                    <p className="mt-5 text-slate-500">

                        AI Resume Analyzer & ATS Optimizer

                    </p>

                </div>

                <div className="mt-10 space-y-6">

                    <div className="relative">

                        <Mail

                            size={20}

                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"

                        />

                        <input

                            type="email"

                            value={email}

                            onChange={(e)=>setEmail(e.target.value)}

                            placeholder="Email Address"

                            className="w-full rounded-2xl border border-slate-300 bg-white px-12 py-4 outline-none focus:border-indigo-500"

                        />

                    </div>

                    <div className="relative">

                        <Lock

                            size={20}

                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"

                        />

                        <input

                            type={showPassword?"text":"password"}

                            value={password}

                            onChange={(e)=>setPassword(e.target.value)}

                            placeholder="Password"

                            className="w-full rounded-2xl border border-slate-300 bg-white px-12 py-4 pr-14 outline-none focus:border-indigo-500"

                        />

                        <button

                            type="button"

                            onClick={()=>setShowPassword(!showPassword)}

                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"

                        >

                            {

                                showPassword

                                ?

                                <EyeOff size={20}/>

                                :

                                <Eye size={20}/>

                            }

                        </button>

                    </div>

                    <motion.button

                        whileHover={{scale:1.03}}

                        whileTap={{scale:.97}}

                        onClick={login}

                        disabled={loading}

                        className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 py-4 text-lg font-semibold text-white shadow-xl"

                    >

                       {

                            loading

                            ?

                            <div className="flex items-center justify-center gap-3">

                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>

                                <span>Signing In...</span>

                            </div>

                            :

                            "Login"

                        }

                    </motion.button>

                </div>

                <div className="mt-8 text-center">

                    <span className="text-slate-500">

                        Don't have an account?

                    </span>

                    <Link

                        to="/register"

                        className="ml-2 font-semibold text-indigo-600 hover:text-fuchsia-600"

                    >

                        Register

                    </Link>

                </div>

            </motion.div>

        </div>
    </motion.div>    

    );

}