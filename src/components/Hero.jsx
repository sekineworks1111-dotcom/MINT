import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-turquoise/30 via-white to-turquoise/20 py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="flex flex-col items-center text-center">

                    {/* Logo Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 w-full max-w-4xl"
                    >
                        <img
                            src="/mint-logo.png"
                            alt="MINT Volleyball Club - Momentum, Imagination, Never give up, Teamwork - Mint Since 2025 - Believe in ourselves"
                            className="w-full h-auto"
                            title="MINT Volleyball Club Logo"
                        />
                    </motion.div>

                    {/* Catchphrase */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg md:text-xl text-gray mb-10 max-w-2xl leading-relaxed font-medium"
                    >
                        バレーボールをもっと楽しく、もっと身近に。<br />
                        自ら考え、仲間と創る。未来を拓く力をバレーボールから。
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12"
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
                        className="text-sm text-gray-light"
                    >
                        八王子・多摩・日野・町田・稲城 | 中学生女子バレーボールクラブ
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default Hero
