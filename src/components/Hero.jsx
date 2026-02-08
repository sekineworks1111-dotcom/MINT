import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
            {/* Background with Logo-inspired Design */}
            <div className="absolute inset-0 z-0">
                {/* Turquoise gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-turquoise via-turquoise-light to-white opacity-40"></div>

                {/* Decorative elements */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-turquoise rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-turquoise-light rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* M.I.N.T. Acronym Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-turquoise/20 border border-turquoise text-black text-sm font-bold mb-8 backdrop-blur-sm"
                    >
                        <Sparkles size={16} className="text-turquoise-dark" />
                        <span>Momentum · Imagination · Never give up · Teamwork</span>
                    </motion.div>

                    {/* Main Logo/Title */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mb-8"
                    >
                        <h1 className="text-7xl md:text-9xl font-black text-black tracking-tight leading-none mb-2" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                            Mint
                        </h1>
                        <p className="text-sm md:text-base text-gray font-semibold tracking-wider">Since 2025</p>
                    </motion.div>

                    {/* Tagline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight"
                    >
                        Believe in ourselves
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg md:text-xl text-gray mb-10 max-w-2xl leading-relaxed"
                    >
                        バレーボールをもっと楽しく、もっと身近に。<br />
                        自ら考え、仲間と創る。未来を拓く力をバレーボールから。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-turquoise text-black font-bold text-lg hover:bg-turquoise-dark transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            体験入部・見学に申し込む
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="/activity"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-black text-black font-bold text-lg hover:bg-black hover:text-white transition-all"
                        >
                            活動の様子を見る
                        </a>
                    </motion.div>

                    {/* Location Badge */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="mt-12 text-sm text-gray-light"
                    >
                        八王子・多摩・日野・町田・稲城 | 中学生女子バレーボールクラブ
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default Hero
