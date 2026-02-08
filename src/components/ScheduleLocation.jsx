import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const ScheduleLocation = () => {
    return (
        <section className="py-24 bg-white" id="schedule">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* BAND Link Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-2xl mx-auto"
                >
                    <div className="bg-gradient-to-r from-turquoise/20 via-turquoise/10 to-turquoise/20 rounded-2xl p-8 border-2 border-turquoise">
                        <h3 className="text-2xl font-black text-black mb-4">メンバー専用コミュニティ</h3>
                        <p className="text-gray mb-6">
                            練習スケジュールや連絡事項はBANDで共有しています。<br />
                            メンバーの方は下記リンクからご参加ください。
                        </p>
                        <a
                            href="https://www.band.us/band/98321447"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-turquoise hover:text-black transition-all shadow-lg group"
                        >
                            BANDコミュニティに参加
                            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Schedule */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Calendar className="text-turquoise-dark" size={32} />
                            <h2 className="text-3xl font-black text-black">基本練習日程</h2>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-8">
                            <h3 className="text-lg font-bold text-black mb-6 border-l-4 border-turquoise pl-3">週末の練習</h3>
                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="font-bold text-black text-lg">土曜日</span>
                                    <span className="text-gray bg-turquoise/10 px-4 py-1 rounded-full text-sm font-medium">09:00 - 12:00 (午前練習)</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="font-bold text-black text-lg">日曜日</span>
                                    <span className="text-gray bg-turquoise/10 px-4 py-1 rounded-full text-sm font-medium">13:00 - 17:00 (午後練習・試合)</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2">
                                    <span className="font-bold text-black text-lg">平日</span>
                                    <span className="text-gray bg-turquoise/10 px-4 py-1 rounded-full text-sm font-medium">自主練・オンラインMTGなど</span>
                                </div>
                            </div>
                            <div className="mt-8 p-4 bg-turquoise/10 rounded-xl text-black text-sm flex gap-3 items-start border border-turquoise/30">
                                <span className="text-turquoise-dark font-bold shrink-0">NOTE:</span>
                                <span className="text-gray">
                                    体育館の確保状況や試合日程により、時間・場所が変更になる場合があります。<br />
                                    最新のスケジュールは会員向けカレンダーで共有しています。
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <MapPin className="text-turquoise-dark" size={32} />
                            <h2 className="text-3xl font-black text-black">活動場所</h2>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-2 overflow-hidden">
                            <div className="h-[300px] w-full rounded-xl overflow-hidden bg-gray-100 relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103683.47355038446!2d139.23190449999998!3d35.6661989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60191e3b6a948e9d%3A0xe549557b420f1882!2z5p2x5Lqs6YO95YWr546L5a2Q5biC!5e0!3m2!1sja!2sjp!4v1707000000000!5m2!1sja!2sjp"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Activity Map"
                                ></iframe>
                            </div>
                        </div>
                        <div className="mt-6 space-y-2">
                            <h4 className="font-bold text-black">主な活動エリア</h4>
                            <p className="text-gray text-sm">
                                八王子市、多摩市、日野市、町田市、稲城市の公営体育館や中学校の体育館を利用しています。<br />
                                アクセスしやすい場所を選定して活動しています。
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ScheduleLocation
