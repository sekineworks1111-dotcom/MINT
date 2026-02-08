import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false)
    }, [location])

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        // Cleanup function to ensure scroll is restored when component unmounts
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const menuItems = [
        { name: 'ホーム', path: '/', hash: '' },
        { name: 'チーム理念', path: '/', hash: '#philosophy' },
        { name: '活動予定', path: '/', hash: '#schedule' },
        { name: '活動レポート', path: '/activity', hash: '' },
    ]

    const handleNavClick = (item) => {
        setIsOpen(false)

        // Smooth scroll handling if on the same page
        if (item.hash && location.pathname === item.path) {
            const element = document.querySelector(item.hash)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group z-50 relative">
                    <span className="text-3xl font-black text-black tracking-tighter group-hover:text-turquoise transition-colors" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        Mint
                    </span>
                    <span className="text-xs font-medium text-gray hidden sm:block">Volleyball Club</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={`${item.path}${item.hash}`}
                            className="text-sm font-bold text-gray hover:text-black transition-colors"
                            onClick={() => handleNavClick(item)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a href="#contact" className="px-5 py-2 rounded-full bg-turquoise text-black text-sm font-bold hover:bg-turquoise-dark transition-all shadow-sm hover:shadow active:scale-95 transform">
                        部員募集
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 relative p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden"
                        >
                            <nav className="flex flex-col gap-6">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={`${item.path}${item.hash}`}
                                            className="text-2xl font-black text-black block py-2 border-b border-gray-100 uppercase"
                                            onClick={() => handleNavClick(item)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: menuItems.length * 0.1 }}
                                    className="mt-4"
                                >
                                    <a
                                        href="#contact"
                                        className="block w-full text-center py-4 rounded-full bg-turquoise text-black font-bold text-xl hover:bg-turquoise-dark transition-all shadow-lg"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        部員募集 / お問い合わせ
                                    </a>
                                </motion.div>

                                <div className="mt-auto mb-8 text-center text-gray text-sm">
                                    <p className="font-bold mb-2">MINT Volleyball Club</p>
                                    <p>Believe in ourselves</p>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Header
