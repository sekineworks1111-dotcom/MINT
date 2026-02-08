import { Instagram } from 'lucide-react'
import { ExternalLink } from 'lucide-react'

const Activity = () => {
    // Mock data for Instagram grid
    const instaPosts = Array.from({ length: 9 }).map((_, i) => ({ id: i + 1 }))

    // Mock data for Note cards
    const notePosts = [
        {
            title: "【MINT】設立への想い - バレーボールを通じて伝えたいこと",
            desc: "なぜ今、クラブチームなのか。指導方針と目指す未来について。",
            date: "2023.10.15"
        },
        {
            title: "練習風景 - 失敗を恐れずにチャレンジする",
            desc: "先日の練習での一コマ。新しいフォーメーションに挑戦しました。",
            date: "2023.11.02"
        },
        {
            title: "こーちのちょいとバレーをしませんか？ vol.1",
            desc: "バレーボールの魅力と、中学生年代に大切にしてほしいこと。",
            date: "2023.12.10"
        }
    ]

    return (
        <div className="w-full bg-white">
            {/* Page Header */}
            <section className="bg-navy-900 text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-mint/10 skew-x-12 transform origin-top-right"></div>
                <div className="container px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">ACTIVITY</h1>
                    <p className="text-mint-200 text-lg">活動風景</p>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        MINTの日常や練習の様子をInstagramで発信中。<br />
                        ぜひフォローして応援してください！
                    </p>
                </div>
            </section>

            {/* Instagram Grid */}
            <section className="py-20 bg-white">
                <div className="container px-4 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
                        {instaPosts.map((post) => (
                            <a
                                key={post.id}
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aspect-square bg-gray-100 relative group overflow-hidden block md:rounded-xl"
                            >
                                {/* Placeholder Image */}
                                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                    IMG {post.id}
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-navy-900/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Instagram className="text-mint-400 mb-2" size={32} />
                                    <span className="text-white font-bold tracking-wider text-sm">Instagramで見る</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Follow Section */}
            <section className="py-16 bg-bg-light text-center">
                <div className="container px-4">
                    <div className="inline-block p-1 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 mb-6">
                        <div className="bg-white p-1 rounded-full">
                            <Instagram className="text-navy-900" size={48} />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900 mb-2">@MINT_VOLLEYBALL_YUGI</h2>
                    <p className="text-gray-500 mb-8">Official Instagram Account</p>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-8 py-3 bg-navy-900 text-white rounded-full font-bold hover:bg-navy-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        フォローする
                    </a>
                </div>
            </section>

            {/* Note Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-navy-900 mb-4">想いを知る</h2>
                        <p className="text-gray-600">指導者やクラブの考えをnoteで発信しています。</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {notePosts.map((note, index) => (
                            <a
                                key={index}
                                href="https://note.com/mint_volleyball"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all hover:-translate-y-1 block h-full flex flex-col"
                            >
                                <div className="h-48 bg-mint/20 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-mint/5 group-hover:scale-105 transition-transform duration-500"></div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <span className="text-xs text-gray-400 mb-2 block">{note.date}</span>
                                    <h3 className="text-lg font-bold text-navy-900 mb-3 line-clamp-2 group-hover:text-mint-600 transition-colors">
                                        {note.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
                                        {note.desc}
                                    </p>
                                    <div className="text-mint-600 text-sm font-bold flex items-center gap-1 mt-auto">
                                        READ MORE <ExternalLink size={14} />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Activity
