import { Instagram, ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const InstagramFeed = () => {
    // Behold.so Widget Integration
    // To make this work:
    // 1. Go to https://behold.so/ and sign up (Free)
    // 2. Connect the @MINT_VOLLEYBALL_YUGI account
    // 3. Create a widget style (Grid)
    // 4. Copy the "Feed ID" and replace 'YOUR_FEED_ID' below
    const BEHOLD_FEED_ID = 'YOUR_FEED_ID' // Replace this with actual ID

    useEffect(() => {
        // Load Behold script dynamically
        const script = document.createElement('script')
        script.src = 'https://w.behold.so/widget.js'
        script.type = 'module'
        document.body.appendChild(script)

        return () => {
            // Cleanup if needed
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

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

                {/* Widget Container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="min-h-[300px] mb-12 bg-white rounded-2xl shadow-sm p-4"
                >
                    {/* Behold Widget */}
                    {BEHOLD_FEED_ID === 'YOUR_FEED_ID' ? (
                        <div className="flex flex-col items-center justify-center h-[300px] bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 text-gray">
                            <Instagram size={48} className="mb-4 text-gray-300" />
                            <p className="font-bold mb-2">Instagramフィードを表示するには設定が必要です</p>
                            <p className="text-sm max-w-md">
                                開発者の方へ: Behold.soでフィードIDを取得し、<br />
                                <code>src/components/InstagramFeed.jsx</code> の <code>BEHOLD_FEED_ID</code> を更新してください。
                            </p>
                            <a
                                href="https://instagram.com/MINT_VOLLEYBALL_YUGI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 px-6 py-2 bg-turquoise text-black rounded-full font-bold text-sm hover:bg-turquoise-dark transition-colors"
                            >
                                Instagramで直接見る
                            </a>
                        </div>
                    ) : (
                        <behold-widget feed-id={BEHOLD_FEED_ID}></behold-widget>
                    )}
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
