import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Sparkles,
    CheckCircle2
} from "lucide-react";

import axios from "../api/axios";
import toast from "react-hot-toast";

export default function Register() {

    const navigate = useNavigate();

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [showPassword,setShowPassword]=useState(false);

    const [loading,setLoading]=useState(false);

    const getStrength=()=>{

        if(password.length<6)
            return{
                text:"Weak",
                color:"bg-red-500",
                width:"25%"
            };

        if(password.length<10)
            return{
                text:"Medium",
                color:"bg-yellow-500",
                width:"60%"
            };

        return{

            text:"Strong",

            color:"bg-green-500",

            width:"100%"

        };

    };

    const strength=getStrength();

    const register=async()=>{

        if(!name||!email||!password){

            toast.error("Please fill all fields");

            return;

        }

        try{

            setLoading(true);

            await axios.post(

                "/users/register",

                {

                    name,

                    email,

                    password

                }

            );

            toast.success("Registration successful 🎉");

            navigate("/");

        }

        catch{

            toast.error("Registration failed");

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

        <div className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-fuchsia-100 relative">

            <div className="absolute w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl -left-24 -top-24"/>

            <div className="absolute w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-3xl bottom-0 right-0"/>

            <motion.div

                animate={{

                    y:[0,-12,0]

                }}

                transition={{

                    repeat:Infinity,

                    duration:5

                }}

                className="absolute top-24 right-44"

            >

                <Sparkles size={40} className="text-indigo-500"/>

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

                className="w-full max-w-lg rounded-3xl border border-white/40 bg-white/70 backdrop-blur-2xl shadow-2xl p-10"

            >

                <div className="text-center">

                    <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">

                        HireGen AI

                    </h1>

                    <p className="mt-4 text-slate-500">

                        Create your AI Resume Workspace

                    </p>

                </div>

                <div className="space-y-5 mt-10">

                    <div className="relative">

                        <User

                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"

                            size={20}

                        />

                        <input

                            value={name}

                            onChange={(e)=>setName(e.target.value)}

                            placeholder="Full Name"

                            className="w-full rounded-2xl border border-slate-300 px-12 py-4 outline-none focus:border-indigo-600"

                        />

                    </div>

                    <div className="relative">

                        <Mail

                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"

                            size={20}

                        />

                        <input

                            type="email"

                            value={email}

                            onChange={(e)=>setEmail(e.target.value)}

                            placeholder="Email"

                            className="w-full rounded-2xl border border-slate-300 px-12 py-4 outline-none focus:border-indigo-600"

                        />

                    </div>

                    <div className="relative">

                        <Lock

                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"

                            size={20}

                        />

                        <input

                            type={showPassword?"text":"password"}

                            value={password}

                            onChange={(e)=>setPassword(e.target.value)}

                            placeholder="Password"

                            className="w-full rounded-2xl border border-slate-300 px-12 py-4 pr-14 outline-none focus:border-indigo-600"

                        />

                        <button

                            type="button"

                            onClick={()=>setShowPassword(!showPassword)}

                            className="absolute right-4 top-1/2 -translate-y-1/2"

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

                    <div>

                        <div className="h-2 rounded-full bg-slate-200 overflow-hidden">

                            <div

                                className={`h-full ${strength.color}`}

                                style={{

                                    width:strength.width

                                }}

                            />

                        </div>

                        <p className="text-sm mt-2 text-slate-500">

                            Password Strength :

                            <span className="font-semibold ml-2">

                                {strength.text}

                            </span>

                        </p>

                    </div>

                    <motion.button

                        whileHover={{scale:1.03}}

                        whileTap={{scale:.97}}

                        onClick={register}

                        disabled={loading}

                        className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-4 text-lg font-semibold text-white shadow-xl"

                    >

                        {

                            loading
                            ?
                            <div className="flex items-center justify-center gap-3">

                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>

                                <span>

                                    Creating Account...

                                </span>

                            </div>

                            :

                            "Create Account"
                        }

                    </motion.button>

                </div>

                <div className="mt-8 text-center">

                    <CheckCircle2

                        className="mx-auto text-green-500 mb-3"

                        size={28}

                    />

                    <span className="text-slate-500">

                        Already have an account?

                    </span>

                    <Link

                        to="/"

                        className="ml-2 font-semibold text-indigo-600"

                    >

                        Login

                    </Link>

                </div>

            </motion.div>

        </div>
    </motion.div>    

    );

}