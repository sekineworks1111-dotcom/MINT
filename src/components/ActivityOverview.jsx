import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const ActivityOverview = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-full h-full bg-mint/20 rounded-2xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1000&auto=format&fit=crop"
                                alt="Volleyball Activity"
                                className="relative rounded-2xl shadow-lg w-full object-cover aspect-video"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2"
                    >
                        <span className="text-mint-600 font-bold tracking-wider text-sm uppercase mb-2 block">Activity</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">楽しく、真剣に。</h2>

                        <div className="space-y-4 text-gray-600 mb-8">
                            <p>
                                <strong className="text-navy-800">対象：</strong><br />
                                八王子・多摩・日野・町田・稲城および近隣地域の中学生女子。
                            </p>
                            <p>
                                <strong className="text-navy-800">レベルは問いません：</strong><br />
                                初心者から経験者、部活を引退したけれど続けたい子まで、ブランクがある方も大歓迎です。
                            </p>
                        </div>

                        <a
                            href="https://note.com/mint_volleyball"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-navy-700 font-semibold border-b-2 border-mint hover:text-navy-900 hover:border-mint-600 transition-colors pb-1 group"
                        >
                            note「こーちのちょいとバレーをしませんか？」を読む
                            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ActivityOverview
