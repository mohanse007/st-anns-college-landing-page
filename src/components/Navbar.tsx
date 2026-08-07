import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#features' },
    { 
      name: 'Administration', 
      href: '#', 
      dropdown: [
        { name: 'Governing Body', href: '#' },
        { name: 'Principal Office', href: '#' },
        { name: 'Administrative Staff', href: '#' }
      ] 
    },
    { 
      name: 'Academics', 
      href: '#programs', 
      dropdown: [
        { name: 'Undergraduate (UG)', href: '#programs' },
        { name: 'Postgraduate (PG)', href: '#programs' },
        { name: 'Admissions 2026-27', href: '#admissions' }
      ] 
    },
    { name: 'RTI', href: '#' },
    { 
      name: 'Committees', 
      href: '#', 
      dropdown: [
        { name: 'Anti-Ragging Committee', href: '#' },
        { name: 'Grievance Cell', href: '#' },
        { name: 'IQAC Cell', href: '#' }
      ] 
    },
    { name: 'NAAC', href: '#faq' },
    { name: 'AICTE', href: '#' },
    { name: 'IQAC', href: '#' },
    { name: 'Contact Us', href: '#contact' },
    { 
      name: 'Login', 
      href: '#', 
      dropdown: [
        { name: 'UG Student Login', href: 'https://saca.linways.com/' },
        { name: 'PG Student Login', href: 'https://saca.linways.com/' },
        { name: 'Staff Login', href: 'https://saca.linways.com/' }
      ] 
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-lg shadow-purple-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        {/* Row 1: Logo & Brand + Top Right buttons */}
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-md opacity-35 group-hover:opacity-55 transition-opacity" />
              <img
                src={logo}
                alt="St. Ann's College Logo"
                className="relative w-14 h-14 object-contain rounded-full bg-white border border-purple-200 shadow-md"
              />
            </div>
            <div className="block">
              <div className="font-extrabold text-base sm:text-lg md:text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight whitespace-nowrap">
                St.Ann's College for Women
              </div>
              <div className="text-[10px] md:text-[11px] tracking-widest text-purple-700 font-extrabold uppercase mt-0.5">
                Autonomous
              </div>
            </div>
          </motion.a>

          {/* Top Right Quick Actions (Desktop only) */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-xs text-gray-500 font-medium">📞 +91 8978098870</span>
            <span className="text-gray-300">|</span>
            <motion.a
              href="#admissions"
              className="relative px-5 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-semibold shadow-md hover:shadow-lg transition-all overflow-hidden group"
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

        {/* Row 2: Menu Bar (Desktop only) */}
        <div className="hidden lg:block border-t border-gray-150">
          <div className="flex items-center justify-center gap-1 py-2 overflow-x-auto no-scrollbar">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  href={link.href}
                  className="px-3 py-1.5 text-xs text-gray-700 hover:text-purple-600 font-semibold transition-colors rounded-lg hover:bg-purple-50/50 flex items-center gap-1 group whitespace-nowrap"
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                  {link.dropdown && (
                    <span className="text-[9px] text-gray-400 group-hover:text-purple-500 transition-colors">▼</span>
                  )}
                </motion.a>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  >
                    {link.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        target={sub.href.startsWith('http') ? '_blank' : undefined}
                        rel={sub.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block px-4 py-2 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 font-medium transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-y-auto max-h-[80vh]"
          >
            <div className="max-w-none px-6 py-6 space-y-3">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <a
                      href={link.href}
                      className="text-sm font-semibold text-gray-700 hover:text-purple-600 py-1"
                      onClick={() => {
                        if (!link.dropdown) setMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </a>
                    {link.dropdown && (
                      <button
                        onClick={() => setMobileDropdowns(prev => ({ ...prev, [link.name]: !prev[link.name] }))}
                        className="p-1 text-gray-400 hover:text-purple-600"
                      >
                        <span className="text-xs">{mobileDropdowns[link.name] ? '▲' : '▼'}</span>
                      </button>
                    )}
                  </div>
                  
                  {link.dropdown && mobileDropdowns[link.name] && (
                    <div className="pl-4 border-l-2 border-purple-100 py-1 space-y-2">
                      {link.dropdown.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          target={sub.href.startsWith('http') ? '_blank' : undefined}
                          rel={sub.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block text-xs font-medium text-gray-500 hover:text-purple-600 py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="#admissions"
                  className="block w-full px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-center text-sm shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
