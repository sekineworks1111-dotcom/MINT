import { Instagram, ExternalLink } from 'lucide-react'
import { useEffect } from 'react'

const Activity = () => {
    // Behold Widget ID for Activity Page (can be the same or different from Home)
    const BEHOLD_FEED_ID = 'YOUR_FEED_ID'

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://w.behold.so/widget.js'
        script.type = 'module'
        document.body.appendChild(script)

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    // Mock data for Note cards (unchanged)
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
            <section className="bg-black text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-turquoise/10 skew-x-12 transform origin-top-right"></div>
                <div className="container px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">ACTIVITY</h1>
                    <p className="text-turquoise text-xl font-semibold">活動風景</p>
                    <p className="text-gray-light mt-6 max-w-2xl mx-auto text-lg">
                        MINTの日常や練習の様子をInstagramで発信中。<br />
                        ぜひフォローして応援してください！
                    </p>
                </div>
            </section>

            {/* Instagram Grid (Via Behold Widget) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">

                    {BEHOLD_FEED_ID === 'YOUR_FEED_ID' ? (
                        <div className="flex flex-col items-center justify-center p-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-center">
                            <Instagram size={64} className="mb-6 text-gray-300" />
                            <h3 className="text-xl font-bold text-gray-600 mb-2">Instagramフィード設定</h3>
                            <p className="text-gray mb-6 max-w-lg mx-auto">
                                Behold.soでフィードIDを取得し、<code>src/pages/Activity.jsx</code> に設定してください。<br />
                                設定するまでは、以下のボタンから直接Instagramをご覧いただけます。
                            </p>
                            <a
                                href="https://instagram.com/MINT_VOLLEYBALL_YUGI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-gradient-to-tr from-purple-600 to-pink-500 text-white rounded-full font-bold text-base hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2"
                            >
                                <Instagram size={20} />
                                @MINT_VOLLEYBALL_YUGI を見る
                            </a>
                        </div>
                    ) : (
                        <div className="min-h-[600px]">
                            <behold-widget feed-id={BEHOLD_FEED_ID}></behold-widget>
                        </div>
                    )}

                </div>
            </section>

            {/* Follow Section (Unchanged layout) */}
            <section className="py-16 bg-bg-light text-center">
                <div className="container px-4">
                    <div className="inline-block p-1 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 mb-6">
                        <div className="bg-white p-1 rounded-full">
                            <Instagram className="text-black" size={48} />
                        </div>
                    </div>
                    <h2 className="text-3xl font-black text-black mb-2">@MINT_VOLLEYBALL_YUGI</h2>
                    <p className="text-gray mb-8">Official Instagram Account</p>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-8 py-3 bg-turquoise text-black rounded-full font-bold hover:bg-turquoise-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        フォローする
                    </a>
                </div>
            </section>

            {/* Note Section (Unchanged) */}
            <section className="py-24 bg-white">
                <div className="container px-4 max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-black mb-4">想いを知る</h2>
                        <p className="text-gray text-lg">指導者やクラブの考えをnoteで発信しています。</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {notePosts.map((note, index) => (
                            <a
                                key={index}
                                href="https://note.com/mint_volleyball"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl shadow-md hover:shadow-xl border-2 border-gray-100 hover:border-turquoise overflow-hidden transition-all hover:-translate-y-1 block h-full flex flex-col"
                            >
                                <div className="h-48 bg-turquoise/20 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-turquoise/10 group-hover:scale-105 transition-transform duration-500"></div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <span className="text-xs text-gray-light mb-2 block">{note.date}</span>
                                    <h3 className="text-lg font-bold text-black mb-3 line-clamp-2 group-hover:text-turquoise-dark transition-colors">
                                        {note.title}
                                    </h3>
                                    <p className="text-sm text-gray line-clamp-3 mb-4 flex-grow">
                                        {note.desc}
                                    </p>
                                    <div className="text-turquoise-dark text-sm font-bold flex items-center gap-1 mt-auto">
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
