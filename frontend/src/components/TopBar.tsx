import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function TopBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isTransparent = isHome && !isScrolled;

    return (
        <div className={`z-50 transition-all duration-300 py-2 text-sm hidden lg:block border-b ${isTransparent
            ? 'absolute top-0 left-0 w-full bg-transparent border-transparent'
            : 'bg-primary-dark border-white/5'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-white">
                <div className="flex items-center space-x-6">
                    <a href="mailto:info@consultoria.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                        <FaEnvelope className="w-4 h-4" />
                        <span>info@consultoria.com</span>
                    </a>
                    <a href="tel:+51999999999" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                        <FaPhone className="w-4 h-4" />
                        <span>+51 999 999 999</span>
                    </a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-gray-300 hover:text-secondary transition-colors" aria-label="LinkedIn">
                        <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-secondary transition-colors" aria-label="Facebook">
                        <FaFacebook className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
