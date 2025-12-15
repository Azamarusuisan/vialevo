"use client";

import { motion } from "framer-motion";

export default function Company() {
    const companyInfo = [
        { label: "会社名", value: "株式会社Vialevo" },
        { label: "代表取締役", value: "加藤 眞史" },
        { label: "設立", value: "令和7年12月4日" },
        { label: "本社所在地", value: "〒350-1138 埼玉県川越市中台元町1-24-36" },
    ];

    return (
        <section id="company" className="py-24 bg-gray-50 text-gray-800">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold font-jp mb-2 text-gray-900">Company</h2>
                    <div className="h-1 w-12 bg-accent" />
                </motion.div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {companyInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row border-b border-gray-100 last:border-0 p-6 md:p-8 hover:bg-gray-50 transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <dt className="w-48 font-bold text-gray-500 font-jp mb-2 md:mb-0">{item.label}</dt>
                            <dd className="flex-1 font-medium font-jp text-gray-900">{item.value}</dd>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
