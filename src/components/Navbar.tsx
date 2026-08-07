import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';
import Ticker from './Ticker';

interface NavbarProps {
  scrolled: boolean;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ scrolled, currentPage, onPageChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});

  const navLinks = [
    { name: 'Home', page: 'home', scrollId: 'hero' },
    { 
      name: 'About Us', 
      page: 'about',
      dropdown: [
        { name: 'Overview & Admin', page: 'about' },
        { name: 'Vision & Mission', page: 'about' },
        { name: 'Our Inspiration', page: 'about' },
        { name: 'Policies & Codes', page: 'about' }
      ] 
    },
    { 
      name: 'Academics', 
      page: 'academics',
      dropdown: [
        { name: 'Programs & Fees', page: 'academics' },
        { name: 'Our Departments', page: 'academics' },
        { name: 'Academic Calendars', page: 'academics' },
        { name: 'Exams & Results', page: 'academics' }
      ]
    },
    { 
      name: 'NAAC', 
      page: 'naac',
      dropdown: [
        { name: 'Accreditation Cert', page: 'naac' },
        { name: 'AQAR Reports', page: 'naac' },
        { name: 'SSR Reports', page: 'naac' },
        { name: 'Evaluative Criteria', page: 'naac' }
      ]
    },
    { name: 'IQAC', page: 'iqac' },
    { 
      name: 'Committees', 
      page: 'committees',
      dropdown: [
        { name: 'Welfare Committees', page: 'committees' },
        { name: 'Grievance & Redressal', page: 'committees' },
        { name: 'Anti-Ragging policies', page: 'committees' }
      ]
    },
    { 
      name: 'Activities', 
      page: 'activities',
      dropdown: [
        { name: 'NCC Unit', page: 'activities' },
        { name: 'NSS Service', page: 'activities' },
        { name: 'Outreach & Sports', page: 'activities' }
      ]
    },
    { name: 'RTI', page: 'rti' },
    { 
      name: 'Research & Journal', 
      page: 'research',
      dropdown: [
        { name: 'Academic Journal', page: 'research' },
        { name: 'College Newsletters', page: 'research' }
      ]
    },
    { name: 'Contact Us', page: 'home', scrollId: 'contact' },
    { 
      name: 'Login', 
      dropdown: [
        { name: 'UG & PG Student Login', href: 'https://saca.linways.com/' },
        { name: 'Staff Login', href: 'https://saca.linways.com/' }
      ] 
    },
  ];

  const handleLinkClick = (link: { page?: string; scrollId?: string; href?: string }, event: React.MouseEvent) => {
    if (link.href) {
      // External link triggers default action (target _blank if configured)
      return;
    }

    event.preventDefault();

    if (link.page) {
      onPageChange(link.page);
      
      if (link.scrollId) {
        setTimeout(() => {
          const el = document.getElementById(link.scrollId!);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    }
  };

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
            onClick={(e) => handleLinkClick({ page: 'home', scrollId: 'hero' }, e)}
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
              onClick={(e) => handleLinkClick({ page: 'home', scrollId: 'admissions' }, e)}
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
          <div className="flex items-center justify-center gap-1 py-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  href={link.href || '#'}
                  onClick={(e) => handleLinkClick(link, e)}
                  className={`px-3.5 py-1.5 text-xs font-semibold transition-colors rounded-lg flex items-center gap-1 group whitespace-nowrap ${
                    currentPage === link.page
                      ? 'text-purple-600 bg-purple-50/50 font-bold'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                  {link.dropdown && (
                    <span className="text-[9px] text-gray-400 group-hover:text-purple-500 transition-colors">▼</span>
                  )}
                </motion.a>

                {/* Dropdown Menu Wrapper (creates the hover bridge) */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="w-56 bg-gradient-to-b from-pink-100/25 via-pink-50/15 to-white/5 backdrop-blur-3xl rounded-2xl shadow-[0_20px_50px_rgba(244,63,94,0.15),inset_0_1px_2px_rgba(255,255,255,0.6)] border border-pink-200/30 py-2 overflow-hidden"
                    >
                      {link.dropdown.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href || '#'}
                          onClick={(e) => handleLinkClick(sub, e)}
                          target={sub.href?.startsWith('http') ? '_blank' : undefined}
                          rel={sub.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block px-4 py-2 text-xs text-gray-800 hover:text-pink-600 hover:bg-pink-50/40 font-bold transition-colors whitespace-nowrap text-center"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </motion.div>
                  </div>
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
                      href={link.href || '#'}
                      onClick={(e) => {
                        handleLinkClick(link, e);
                        if (!link.dropdown) setMobileMenuOpen(false);
                      }}
                      className={`text-sm font-semibold py-1 ${
                        currentPage === link.page ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                      }`}
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
                          href={sub.href || '#'}
                          onClick={(e) => {
                            handleLinkClick(sub, e);
                            setMobileMenuOpen(false);
                          }}
                          target={sub.href?.startsWith('http') ? '_blank' : undefined}
                          rel={sub.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block text-xs font-medium text-gray-500 hover:text-purple-600 py-1"
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
                  onClick={(e) => {
                    handleLinkClick({ page: 'home', scrollId: 'admissions' }, e);
                    setMobileMenuOpen(false);
                  }}
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Ticker />
    </motion.nav>
  );
}
