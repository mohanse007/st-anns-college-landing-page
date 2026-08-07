import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Wifi, Home, Book, Dumbbell, Microscope, Play } from 'lucide-react';

export default function Benefits() {
  const [playTour, setPlayTour] = useState(false);
  const benefits = [
    {
      icon: Building2,
      title: 'Modern Campus',
      description: 'Sprawling 7-acre campus with green spaces, modern architecture, and smart classrooms.',
    },
    {
      icon: Wifi,
      title: 'High-Speed Wi-Fi',
      description: 'Campus-wide high-speed internet connectivity for seamless learning and collaboration.',
    },
    {
      icon: Home,
      title: 'Hostel Facility',
      description: 'Safe, secure, and fully-furnished on-campus residential housing with healthy dining options.',
    },
    {
      icon: Book,
      title: 'World-Class Library',
      description: 'Over 50,000 books, digital resources, research journals, and quiet study zones.',
    },
    {
      icon: Dumbbell,
      title: 'Sports Facilities',
      description: 'Indoor and outdoor sports complexes, gym, yoga studio, and wellness center.',
    },
    {
      icon: Microscope,
      title: 'Dedicated Labs',
      description: 'State-of-the-art laboratories with cutting-edge equipment for hands-on learning.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        />
      </div>

      <div className="max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Campus Life
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
              World-Class Facilities
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Experience premium infrastructure designed to enhance your learning and personal growth
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-6 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Image Showcase */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Card - Campus Tour */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            whileHover={!playTour ? { scale: 1.02 } : {}}
            transition={{ duration: 0.3 }}
            onClick={() => {
              if (!playTour) setPlayTour(true);
            }}
          >
            {playTour ? (
              <div className="aspect-[4/3]">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/3oKHrtsmctc?autoplay=1"
                  title="St. Ann's College Campus Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <>
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 flex items-center justify-center relative">
                  <div className="w-full h-full absolute inset-0 flex items-center justify-center text-white/10 text-8xl font-bold select-none">
                    🏛️
                  </div>
                  {/* Play Button Overlay */}
                  <motion.div
                    className="relative z-10 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl border border-white/20 text-purple-600 group-hover:bg-white group-hover:scale-110 transition-all duration-300"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                  <h3 className="text-2xl font-bold mb-2">Campus Tour</h3>
                  <p className="text-white/90">Explore our beautiful campus virtually</p>
                </div>
              </>
            )}
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-500">
              <div className="w-full h-full flex items-center justify-center text-white/10 text-8xl font-bold">
                👥
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">Student Life</h3>
              <p className="text-white/90">Vibrant community and endless opportunities</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
