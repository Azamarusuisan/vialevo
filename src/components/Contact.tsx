"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white text-gray-800 relative">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-2xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold font-jp mb-2 text-gray-900">Contact</h2>
                    <div className="h-1 w-12 bg-accent mx-auto mb-6" />
                    <p className="text-gray-500 text-sm font-jp">
                        事業に関するご質問やご相談など、<br className="md:hidden" />お気軽にお問い合わせください。
                    </p>
                </motion.div>

                <motion.form
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-500 font-jp font-medium">お名前</label>
                            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-gray-900" placeholder="山田 太郎" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-500 font-jp font-medium">メールアドレス</label>
                            <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-gray-900" placeholder="example@vialevo.co.jp" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-500 font-jp font-medium">お問い合わせ内容</label>
                        <textarea rows={6} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none text-gray-900" placeholder="お問い合わせ内容をご記入ください"></textarea>
                    </div>

                    <div className="text-center pt-4">
                        <button type="button" className="bg-accent hover:bg-accent-dim text-white font-bold py-3 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-accent/30">
                            送信する
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
