const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-black text-turquoise tracking-tighter mb-2" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                            Mint
                        </h3>
                        <p className="text-gray-light text-sm">
                            Volleyball Club for Junior High School Girls<br />
                            Hachioji / Tama / Hino / Machida / Inagi
                        </p>
                        <p className="text-turquoise-light text-xs mt-2 font-semibold">
                            Believe in ourselves
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm text-gray-light">
                        <a href="#" className="hover:text-turquoise transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-turquoise transition-colors">Contact</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-turquoise transition-colors">Instagram</a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray/30 text-center text-xs text-gray-light">
                    &copy; {new Date().getFullYear()} MINT Volleyball Club. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
