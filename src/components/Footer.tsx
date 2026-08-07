import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Campus Life', href: '#campus' },
    { name: 'Placements', href: '#placements' },
    { name: 'Contact', href: '#contact' },
  ];

  const resources = [
    { name: 'Student Portal', href: '#' },
    { name: 'Faculty Portal', href: '#' },
    { name: 'Library', href: '#' },
    { name: 'E-Learning', href: '#' },
    { name: 'Research', href: '#' },
    { name: 'Alumni', href: '#' },
  ];

  const programs = [
    { name: 'B.Sc (Honours)', href: '#programs' },
    { name: 'B.Com (Honours)', href: '#programs' },
    { name: 'BBA (Honours)', href: '#programs' },
    { name: 'BCA (Honours)', href: '#programs' },
    { name: 'B.A (Honours)', href: '#programs' },
    { name: 'Postgraduate (PG) Programs', href: '#programs' },
  ];

  const socialLinks = [
    { icon: 'F', href: '#', label: 'Facebook' },
    { icon: 'T', href: '#', label: 'Twitter' },
    { icon: 'I', href: '#', label: 'Instagram' },
    { icon: 'L', href: '#', label: 'LinkedIn' },
    { icon: 'Y', href: '#', label: 'YouTube' },
  ];

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
                    href={link.href}
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
                    href={link.href}
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
                    href={link.href}
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
                  <span className="font-bold">{social.icon}</span>
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
