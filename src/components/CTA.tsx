import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        />
      </div>

      <div className="max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 relative">
        <motion.div
          className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-[2.5rem] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut' as const,
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut' as const,
            }}
          />

          <div className="relative px-8 py-16 md:px-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Limited Seats Available</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ready to Begin Your
                <br />
                <span className="text-purple-100">Transformative Journey?</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Join thousands of successful women who chose St.Ann's College to shape their future. 
                Applications are now open for the 2026-27 academic year.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.a
                  href="#admissions"
                  className="group relative px-8 py-4 bg-white text-purple-600 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Apply Now - Limited Seats
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href="#programs"
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Programs
                </motion.a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="mt-12 flex flex-wrap justify-center items-center gap-8 text-purple-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm">NAAC A Accredited</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm">95% Placement Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm">10,000+ Alumni</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            { emoji: '🎓', text: 'Top-Ranked College' },
            { emoji: '💼', text: 'Industry Partners' },
            { emoji: '🌍', text: 'Global Exposure' },
            { emoji: '⭐', text: 'Excellence Award' },
          ].map((item, index) => (
            <motion.div
              key={item.text}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="text-4xl mb-2">{item.emoji}</div>
              <div className="text-sm font-medium text-gray-700">{item.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
