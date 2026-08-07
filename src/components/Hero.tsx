import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Users } from 'lucide-react';

export default function Hero() {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-white pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-32 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-lg shadow-purple-200/50 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span className="text-xs font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Empowering Women Since 1977
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                  Shape Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Brilliant Future
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join India's premier women's college offering world-class education,
              exceptional mentorship, and limitless opportunities for personal and
              professional growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#admissions"
                className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-xl shadow-purple-300/50 hover:shadow-2xl hover:shadow-purple-400/50 transition-all overflow-hidden text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="#programs"
                className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-purple-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Programs
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { icon: Award, label: 'NAAC A Rated', value: '3.01 CGPA' },
                { icon: Users, label: 'Students', value: '2000+' },
                { icon: Sparkles, label: 'Placement Rate', value: '95%' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-0.5">
                    <stat.icon className="w-4 h-4 text-purple-600" />
                    <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            className="relative w-full max-w-[360px] mx-auto lg:ml-auto lg:mr-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glassmorphic Card */}
              <motion.div
                className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20"
                animate={floatingAnimation}
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 rounded-2xl overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center text-white/20 text-5xl font-bold">
                    St.Ann's
                  </div>
                </div>

                {/* Floating Accent Cards */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="text-2xl">🎓</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-3 shadow-xl"
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="text-white text-xs font-semibold">
                    Top Ranked
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl blur-3xl opacity-30" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <motion.div className="w-1.5 h-2 bg-gray-450 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
