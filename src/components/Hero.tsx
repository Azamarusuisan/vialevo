"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/images/hero_bg_light.png')" }}
            >
                <div className="absolute inset-0 bg-white/20" />
            </div>

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-accent text-sm md:text-base tracking-[0.3em] mb-4 uppercase font-bold">
                        Create the Future
                    </h2>
                    <h1 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-widest font-jp mb-6">
                        <span className="block mb-2">未来を、</span>
                        <span className="block">共創する。</span>
                    </h1>
                    <p className="text-gray-500 text-xs md:text-sm tracking-widest font-sans mt-8 uppercase">
                        Strategic Investment & Consulting
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-[10px] tracking-widest uppercase">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-gray-400/0 via-gray-400 to-gray-400/0" />
            </motion.div>
        </section>
    );
}
