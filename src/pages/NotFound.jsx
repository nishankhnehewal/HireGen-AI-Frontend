import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-fuchsia-100">

            <motion.div

                initial={{ opacity:0, scale:.9 }}

                animate={{ opacity:1, scale:1 }}

                className="text-center"

            >

                <h1 className="text-9xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">

                    404

                </h1>

                <h2 className="mt-6 text-4xl font-bold">

                    Page Not Found

                </h2>

                <p className="mt-4 text-slate-500">

                    The page you're looking for doesn't exist.

                </p>

                <Link

                    to="/dashboard"

                    className="inline-flex items-center gap-3 mt-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-8 py-4 text-white font-semibold shadow-xl"

                >

                    <Home size={18}/>

                    Back to Dashboard

                </Link>

            </motion.div>

        </div>

    );

}