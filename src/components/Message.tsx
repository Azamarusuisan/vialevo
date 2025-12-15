"use client";

import { motion } from "framer-motion";

export default function Message() {
    return (
        <section id="message" className="py-24 md:py-32 bg-gray-50 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <motion.div
                        className="md:w-1/3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold font-jp text-gray-900 mb-2">Top Message</h2>
                        <div className="h-1 w-12 bg-accent" />
                    </motion.div>

                    <motion.div
                        className="md:w-2/3 space-y-8"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-xl md:text-2xl font-bold leading-relaxed text-gray-800 font-jp">
                            変化を恐れず、<br />
                            次代のスタンダードを築く。
                        </h3>

                        <div className="text-gray-600 text-sm leading-8 font-jp text-justify">
                            <p className="mb-6">
                                急激に変化する現代社会において、企業に求められるのは「適応力」と「先見性」です。私たちVialevoは、既存の枠組みにとらわれない柔軟な発想と、確かな戦略眼で、クライアント様のビジネスを次のステージへと導きます。
                            </p>
                            <p>
                                テクノロジーの進化と共に、私たちの生活様式もビジネスモデルも変革の時を迎えています。その中で、本質を見極め、持続可能な成長を実現することこそが私たちの使命です。
                            </p>
                        </div>

                        <div className="pt-8 text-right">
                            <p className="text-sm text-gray-500 mb-1">代表取締役</p>
                            <p className="text-xl text-gray-900 font-jp tracking-widest font-bold">加藤 眞史</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
