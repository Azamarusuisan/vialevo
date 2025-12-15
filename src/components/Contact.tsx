"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-black text-white relative">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-2xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold font-jp mb-2">Contact</h2>
                    <div className="h-1 w-12 bg-accent mx-auto mb-6" />
                    <p className="text-gray-400 text-sm font-jp">
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
                            <label className="text-sm text-gray-400 font-jp">お名前</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-accent transition-colors" placeholder="山田 太郎" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-jp">メールアドレス</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-accent transition-colors" placeholder="example@vialevo.co.jp" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-jp">お問い合わせ内容</label>
                        <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="お問い合わせ内容をご記入ください"></textarea>
                    </div>

                    <div className="text-center pt-4">
                        <button type="button" className="bg-accent hover:bg-accent-dim text-white font-bold py-3 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-accent/20">
                            送信する
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
