import { Send } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        grade: '',
        email: '',
        type: 'experience', // experience or observation
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Mock submission
        alert('送信しました（デモ）')
        setFormData({ name: '', grade: '', email: '', type: 'experience', message: '' })
    }

    return (
        <section className="py-24 bg-white relative" id="contact">
            <div className="container px-4 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-mint-600 font-bold tracking-wider text-sm uppercase mb-2 block">Contact</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">お問い合わせ</h2>
                    <p className="text-gray-600">
                        体験入部・見学のお申し込み、その他ご質問はこちらからお気軽にどうぞ。<br />
                        初心者・ブランクのある方も大歓迎です！
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="bg-bg-light p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-navy-800" htmlFor="name">お名前 <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-mint-500 focus:ring-2 focus:ring-mint-200 outline-none transition-all"
                                placeholder="山田 花子"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-navy-800" htmlFor="grade">学年 <span className="text-red-500">*</span></label>
                            <select
                                id="grade"
                                name="grade"
                                required
                                value={formData.grade}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-mint-500 focus:ring-2 focus:ring-mint-200 outline-none transition-all bg-white"
                            >
                                <option value="">選択してください</option>
                                <option value="jh1">中学1年生</option>
                                <option value="jh2">中学2年生</option>
                                <option value="jh3">中学3年生</option>
                                <option value="es6">小学6年生</option>
                                <option value="other">その他</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2 mb-6">
                        <label className="text-sm font-bold text-navy-800" htmlFor="email">メールアドレス <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-mint-500 focus:ring-2 focus:ring-mint-200 outline-none transition-all"
                            placeholder="example@mint-club.com"
                        />
                    </div>

                    <div className="space-y-2 mb-6">
                        <label className="text-sm font-bold text-navy-800">ご希望の内容 <span className="text-red-500">*</span></label>
                        <div className="flex gap-6 mt-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="type"
                                    value="experience"
                                    checked={formData.type === 'experience'}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-mint-500 border-gray-300 focus:ring-mint-500"
                                />
                                <span className="text-gray-700">体験入部</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="type"
                                    value="observation"
                                    checked={formData.type === 'observation'}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-mint-500 border-gray-300 focus:ring-mint-500"
                                />
                                <span className="text-gray-700">見学</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="type"
                                    value="other"
                                    checked={formData.type === 'other'}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-mint-500 border-gray-300 focus:ring-mint-500"
                                />
                                <span className="text-gray-700">その他</span>
                            </label>
                        </div>
                    </div>

                    <div className="space-y-2 mb-8">
                        <label className="text-sm font-bold text-navy-800" htmlFor="message">メッセージ・ご質問</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-mint-500 focus:ring-2 focus:ring-mint-200 outline-none transition-all resize-none"
                            placeholder="練習の日程について知りたい、など"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-navy-800 text-white font-bold text-lg hover:bg-navy-900 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
                    >
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        送信する
                    </button>
                </motion.form>
            </div>
        </section>
    )
}

export default ContactForm
