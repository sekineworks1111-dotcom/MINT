import { Lightbulb, MessageCircle, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
    {
        icon: Lightbulb,
        title: "自ら気づく力",
        desc: "指導者に言われるだけでなく、自ら課題を見つけ、改善策を考える習慣を身につけます。",
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        icon: MessageCircle,
        title: "発信・提案する力",
        desc: "自分の考えを言葉にし、チームメイトに伝えるコミュニケーション能力を育みます。",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: TrendingUp,
        title: "未来を創る力",
        desc: "バレーボールを通じて培った主体性は、将来どのような道に進んでも自分を支える力となります。",
        color: "bg-green-100 text-green-600"
    }
]

const Philosophy = () => {
    return (
        <section className="py-24 bg-bg-light relative overflow-hidden">
            <div className="container px-4 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-mint-600 font-bold tracking-wider text-sm uppercase mb-2 block">Our Philosophy</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">MINTの想い</h2>
                    <p className="text-gray-600 leading-relaxed">
                        バレーボールを通じて、社会で活躍できる「自分」を育てる。<br />
                        技術の向上だけでなく、人間としての成長を大切にしています。
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                            <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-6`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center bg-white/50 backdrop-blur rounded-2xl p-8 border border-white max-w-3xl mx-auto">
                    <h4 className="text-lg font-bold text-navy-800 mb-3">「ピアコーチング」の文化</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                        MINTでは、選手同士が教え合い、励まし合う文化を大切にしています。<br />
                        教えることは学ぶこと。互いに高め合う関係性がここにはあります。
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Philosophy
