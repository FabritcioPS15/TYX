import { FaEnvelope, FaPhone, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function TopBar() {
    return (
        <div className="bg-primary-dark text-white py-2 text-sm hidden lg:block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
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
