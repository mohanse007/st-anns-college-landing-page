import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-purple-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              <img
                src={logo}
                alt="St. Ann's College Logo"
                className="relative w-12 h-12 object-contain rounded-full bg-white border border-purple-200 shadow-md"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-base bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight whitespace-nowrap">
                St.Ann's College for Women
              </div>
              <div className="text-[10px] tracking-widest text-purple-700 font-bold uppercase -mt-0.5">
                Autonomous
              </div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="#contact"
              className="px-6 py-2.5 text-gray-700 font-medium hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
            <motion.a
              href="#admissions"
              className="relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium shadow-lg shadow-purple-300/50 hover:shadow-xl hover:shadow-purple-400/50 transition-all overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200"
          >
            <div className="max-w-none px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-purple-600 font-medium transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#admissions"
                className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium text-center shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
