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
                    <img src="/MINT_ball.jpg" alt="MINT Ball" className="h-6 w-6 rounded-full object-cover" />
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
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 md:hidden"
                        >
                            {/* Backdrop - transparent/invisible as user asked for menu background specifically, but we typically need a closer. 
                                Let's make the menu itself the visible part.
                            */}

                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                                className="absolute top-0 right-0 h-[100dvh] w-[70%] max-w-xs bg-white/80 backdrop-blur-md shadow-2xl flex flex-col pt-20 border-l border-white/20"
                            >
                                <nav className="flex flex-col">
                                    {menuItems.map((item, index) => (
                                        <Link
                                            key={item.name}
                                            to={`${item.path}${item.hash}`}
                                            className="block py-3 px-6 text-lg font-bold text-black border-b border-gray-400/30 hover:bg-white/40 transition-colors"
                                            onClick={() => handleNavClick(item)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}


                                </nav>

                                <div className="mt-auto mb-8 text-center text-xs text-black font-medium">
                                    <p className="mb-1">MINT Volleyball Club</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Header
