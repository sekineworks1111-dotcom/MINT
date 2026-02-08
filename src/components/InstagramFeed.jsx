import { Instagram, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const InstagramFeed = () => {
    // Placeholder posts
    const posts = [1, 2, 3, 4]

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
                    <p className="text-gray text-lg">
                        練習の様子や試合結果などをInstagramで発信しています。<br />
                        MINTの雰囲気を感じてください。
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="aspect-square bg-turquoise/10 rounded-xl overflow-hidden relative group cursor-pointer border-2 border-turquoise/30"
                        >
                            <div className="absolute inset-0 bg-turquoise/20 group-hover:bg-turquoise/40 transition-colors"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-gray font-medium">
                                Photo {post}
                            </div>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Instagram className="text-turquoise" size={32} />
                            </div>
                        </motion.div>
                    ))}
                </div>

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
