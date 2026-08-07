import { motion } from 'framer-motion';
import { BookOpen, Users, Globe, Lightbulb, Trophy, Heart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Rigorous curriculum designed by industry experts with cutting-edge research opportunities and modern teaching methodologies.',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from distinguished professors with PhDs from top universities and extensive industry experience.',
      gradient: 'from-pink-500 to-pink-700',
    },
    {
      icon: Globe,
      title: 'Global Exposure',
      description: 'International exchange programs, study abroad opportunities, and partnerships with leading universities worldwide.',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'State-of-the-art labs, entrepreneurship incubators, and innovation centers to bring your ideas to life.',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Trophy,
      title: 'Career Support',
      description: 'Dedicated placement cell with 95% placement rate, internship programs, and career counseling services.',
      gradient: 'from-green-500 to-green-700',
    },
    {
      icon: Heart,
      title: 'Holistic Development',
      description: 'Focus on personality development, leadership skills, and emotional well-being through comprehensive support systems.',
      gradient: 'from-red-500 to-red-700',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold text-purple-700">Why Choose Us</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
              Excellence in Every Aspect
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Discover what makes St.Ann's College the perfect choice for your higher education journey
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="#programs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-xl shadow-purple-300/50 hover:shadow-2xl hover:shadow-purple-400/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Programs
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
