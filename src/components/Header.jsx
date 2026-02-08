import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="text-2xl font-bold text-mint-500 tracking-tighter group-hover:text-mint-600 transition-colors">MINT</span>
                    <span className="text-sm font-medium text-navy-700 hidden sm:block">Volleyball Club</span>
                </Link>

                <nav className="flex items-center gap-6">
                    <Link to="/" className="text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors">
                        HOME
                    </Link>
                    <Link to="/activity" className="text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors">
                        ACTIVITY
                    </Link>
                    <a href="#contact" className="hidden sm:inline-flex px-5 py-2 rounded-full bg-navy-600 text-white text-sm font-medium hover:bg-navy-700 transition-colors shadow-sm hover:shadow active:scale-95 transform">
                        Join Us
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
