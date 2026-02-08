import { Instagram, ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const InstagramFeed = () => {
    return (
        <section className="py-24 bg-bg-light">
            <div className="container mx-auto px-4 max-w-6xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-12"
                >
                    <Instagram className="text-turquoise-dark mb-4" size={40} />
                    <h2 className="text-4xl font-black text-black mb-4">日々の活動風景</h2>
                    <p className="text-gray text-lg mb-6">
                        練習の様子や試合結果などをInstagramで発信しています。<br />
                        MINTの雰囲気を感じてください。
                    </p>
                    <a
                        href="https://instagram.com/MINT_VOLLEYBALL_YUGI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-turquoise-dark hover:text-black transition-colors"
                    >
                        @MINT_VOLLEYBALL_YUGI <ExternalLink size={14} />
                    </a>
                </motion.div>

                {/* Clean Link Banner instead of broken embeds */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <a
                        href="https://instagram.com/MINT_VOLLEYBALL_YUGI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full max-w-4xl mx-auto bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group"
                    >
                        <div className="bg-white rounded-xl p-8 md:p-12 flex flex-col items-center justify-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Instagram size={40} className="text-black" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-black mb-2">Official Instagram</h3>
                            <p className="text-gray text-center max-w-lg mb-6">
                                最新の活動情報はインスタグラムで更新中！<br />
                                選手の素顔や練習の裏側も公開しています。
                            </p>
                            <span className="text-turquoise-dark font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                CHECK NOW <ArrowRight size={20} />
                            </span>
                        </div>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        to="/activity"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-turquoise hover:text-black transition-all shadow-lg"
                    >
                        もっと見る <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default InstagramFeed
