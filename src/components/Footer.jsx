const Footer = () => {
    return (
        <footer className="bg-navy-900 text-white py-10 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-mint-400 tracking-tighter mb-2">MINT</h3>
                        <p className="text-gray-400 text-sm">
                            Volleyball Club for Junior High School Girls<br />
                            Hachioji / Tama / Hino / Machida / Inagi
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm text-gray-300">
                        <a href="#" className="hover:text-mint-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-mint-300 transition-colors">Contact</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-mint-300 transition-colors">Instagram</a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-navy-800 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} MINT Volleyball Club. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
