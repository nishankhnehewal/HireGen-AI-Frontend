import { motion } from "framer-motion";

export default function StatsCard({

    title,
    value,
    color,
    icon: Icon

}) {

    return (

        <motion.div

            whileHover={{
                y: -8,
                scale: 1.02
            }}

            transition={{
                duration: .25
            }}

            className={`relative overflow-hidden rounded-3xl p-7 text-white shadow-2xl ${color}`}

        >

            <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/10 blur-xl"></div>

            <div className="flex justify-between items-start">

                <div>

                    <p className="text-white/80 text-lg">

                        {title}

                    </p>

                    <h2 className="text-5xl font-bold mt-4">

                        {value}

                    </h2>

                </div>

                {

                    Icon &&

                    <div className="bg-white/15 p-4 rounded-2xl">

                        <Icon size={30} />

                    </div>

                }

            </div>

        </motion.div>

    );

}