import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.jpg';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const quickLinks = [
    { name: 'About Us', page: 'about' },
    { name: 'Programs Offered', page: 'academics' },
    { name: 'Admissions', page: 'home', scrollId: 'admissions' },
    { name: 'Campus Life', page: 'activities' },
    { name: 'Placements', page: 'home', scrollId: 'placements' },
    { name: 'Contact', page: 'home', scrollId: 'contact' },
  ];

  const resources = [
    { name: 'Student Portal', href: 'https://saca.linways.com/' },
    { name: 'Faculty Portal', href: 'https://saca.linways.com/' },
    { name: 'NAAC Documents', page: 'naac' },
    { name: 'IQAC Portal', page: 'iqac' },
    { name: 'RTI Disclosure', page: 'rti' },
    { name: 'Academic Journal', page: 'research' }
  ];

  const programs = [
    { name: 'B.Sc (Honours)', page: 'academics' },
    { name: 'B.Com (Honours)', page: 'academics' },
    { name: 'BBA (Honours)', page: 'academics' },
    { name: 'BCA (Honours)', page: 'academics' },
    { name: 'B.A (Honours)', page: 'academics' },
    { name: 'Postgraduate (PG) Programs', page: 'academics' },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    { icon: YoutubeIcon, href: '#', label: 'YouTube' },
  ];

  const handleLinkClick = (link: { page?: string; scrollId?: string; href?: string }, event: React.MouseEvent) => {
    if (link.href) {
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
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="relative max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-lg opacity-40" />
                  <img
                    src={logo}
                    alt="St. Ann's College Logo"
                    className="relative w-14 h-14 object-contain rounded-full bg-white border border-purple-300 shadow-md"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg text-white leading-tight">
                    St.Ann's College for Women
                  </div>
                  <div className="text-xs text-purple-300 font-semibold tracking-wider uppercase mt-0.5">
                    Autonomous
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering women through quality education since 1977. Join us in shaping 
                the future of women's education in India.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Door No: 62-2-104, Ramkrishnapuram,<br />
                    Malkapuram, Visakhapatnam
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+91 8978098870</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">admissions@stanns.edu.in</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href || '#'}
                    onClick={(e) => handleLinkClick(link, e)}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    onClick={(e) => handleLinkClick(link, e)}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href || '#'}
                    onClick={(e) => handleLinkClick(link, e)}
                    target={link.href?.startsWith('http') ? '_blank' : undefined}
                    rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="py-12 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-2xl mb-2">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to our newsletter for the latest updates and news.</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="text-gray-400 text-sm text-center md:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>© 2026 St.Ann's College for Women. All rights reserved.</p>
              <div className="flex items-center justify-center md:justify-end gap-4 mt-2">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
