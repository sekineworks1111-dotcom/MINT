import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="text-3xl font-black text-black tracking-tighter group-hover:text-turquoise transition-colors" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        Mint
                    </span>
                    <span className="text-xs font-medium text-gray hidden sm:block">Volleyball Club</span>
                </Link>

                <nav className="flex items-center gap-6">
                    <Link to="/" className="text-sm font-semibold text-gray hover:text-black transition-colors">
                        HOME
                    </Link>
                    <Link to="/activity" className="text-sm font-semibold text-gray hover:text-black transition-colors">
                        ACTIVITY
                    </Link>
                    <a href="#contact" className="hidden sm:inline-flex px-5 py-2 rounded-full bg-turquoise text-black text-sm font-bold hover:bg-turquoise-dark transition-all shadow-sm hover:shadow active:scale-95 transform">
                        Join Us
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
