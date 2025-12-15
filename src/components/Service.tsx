"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe, Lightbulb } from "lucide-react";

const services = [
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Digital Transformation",
        desc: "最先端テクノロジーを活用し、ビジネスプロセスの再構築と新たな価値創造を支援します。",
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Strategic Consulting",
        desc: "市場分析に基づいた確実な成長戦略の策定と、実行までの一貫したサポートを提供します。",
    },
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Future Investment",
        desc: "次世代を担うイノベーションへの投資を通じ、持続可能な社会の実現に貢献します。",
    },
];

export default function Service() {
    return (
        <section id="service" className="py-24 bg-white text-black relative overflow-hidden">
            {/* Background Texture */}
            <div
                className="absolute inset-0 bg-cover z-0 opacity-30"
                style={{ backgroundImage: "url('/images/service_bg.png')" }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold font-jp mb-2">Service</h2>
                    <div className="h-1 w-12 bg-accent mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="mb-6 p-4 bg-gray-100 rounded-full w-fit group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-accent">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-jp">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-jp">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
