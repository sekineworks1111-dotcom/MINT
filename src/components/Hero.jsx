import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-mint/10 skew-x-12 transform origin-top-right"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-navy-50/50 rounded-full blur-3xl"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint/20 text-navy-800 text-sm font-medium mb-6"
                    >
                        <Sparkles size={16} className="text-mint-600" />
                        <span>八王子・多摩エリアの中学生女子バレーボールクラブ</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy-900 mb-6 tracking-tight leading-[1.1]"
                    >
                        バレーボールをもっと<span className="text-mint-500">楽しく</span>、<br />
                        もっと<span className="text-mint-500">身近に</span>。
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
                    >
                        自ら考え、仲間と創る。<br />
                        未来を拓く力をバレーボールから。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-mint text-navy-900 font-bold text-lg hover:bg-mint/80 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-mint/20"
                        >
                            体験入部・見学に申し込む
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="/activity"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-200 text-navy-800 font-medium text-lg hover:bg-gray-50 transition-all"
                        >
                            活動の様子を見る
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
