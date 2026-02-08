import { Lightbulb, MessageCircle, TrendingUp, ExternalLink, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
    {
        icon: Lightbulb,
        title: "自ら気づく力",
        desc: "指導者に言われるだけでなく、自ら課題を見つけ、改善策を考える習慣を身につけます。",
        color: "bg-turquoise text-black"
    },
    {
        icon: MessageCircle,
        title: "発信・提案する力",
        desc: "自分の考えを言葉にし、チームメイトに伝えるコミュニケーション能力を育みます。",
        color: "bg-turquoise-light text-black"
    },
    {
        icon: TrendingUp,
        title: "未来を創る力",
        desc: "バレーボールを通じて培った主体性は、将来どのような道に進んでも自分を支える力となります。",
        color: "bg-turquoise-dark text-white"
    }
]

const Philosophy = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-bg-turquoise opacity-50 blur-3xl"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-turquoise-dark font-bold tracking-wider text-sm uppercase mb-2 block">Our Philosophy</span>
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-6">MINTの想い</h2>
                    <p className="text-gray leading-relaxed text-lg mb-6">
                        バレーボールを通じて、社会で活躍できる「自分」を育てる。<br />
                        技術の向上だけでなく、人間としての成長を大切にしています。
                    </p>

                    {/* YouTube Link */}
                    <motion.a
                        href="https://www.youtube.com/watch?v=n_9XbRUCK2k"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl group"
                    >
                        <Youtube size={20} className="group-hover:scale-110 transition-transform" />
                        HIGASHI・MINT 未来Project
                        <ExternalLink size={16} />
                    </motion.a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border-2 border-gray-100 hover:border-turquoise"
                        >
                            <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                                <item.icon size={32} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
                            <p className="text-gray leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center bg-bg-turquoise rounded-2xl p-8 border-2 border-turquoise max-w-3xl mx-auto">
                    <h4 className="text-xl font-bold text-black mb-3">「ピアコーチング」の文化</h4>
                    <p className="text-gray">
                        MINTでは、選手同士が教え合い、励まし合う文化を大切にしています。<br />
                        教えることは学ぶこと。互いに高め合う関係性がここにはあります。
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Philosophy
