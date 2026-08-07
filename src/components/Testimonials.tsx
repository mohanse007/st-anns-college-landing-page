import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer at Google',
      year: 'Class of 2022',
      image: '👩‍💼',
      content: 'St.Ann\'s College transformed my life. The faculty\'s dedication, modern curriculum, and placement support helped me land my dream job at Google. Forever grateful!',
      rating: 5,
    },
    {
      name: 'Anjali Patel',
      role: 'Research Scholar, MIT',
      year: 'Class of 2021',
      image: '👩‍🔬',
      content: 'The research opportunities and mentorship I received here were exceptional. The college prepared me perfectly for my PhD program at MIT.',
      rating: 5,
    },
    {
      name: 'Meera Reddy',
      role: 'Entrepreneur & CEO',
      year: 'Class of 2020',
      image: '👩‍💻',
      content: 'The entrepreneurship cell and innovation lab at St.Ann\'s gave me the foundation to start my own tech company. The support was incredible!',
      rating: 5,
    },
    {
      name: 'Kavya Menon',
      role: 'Financial Analyst, JP Morgan',
      year: 'Class of 2023',
      image: '👩‍💼',
      content: 'The Commerce program here is world-class. Industry exposure, live projects, and expert faculty made me job-ready from day one.',
      rating: 5,
    },
    {
      name: 'Divya Kumar',
      role: 'Medical Student, AIIMS',
      year: 'Class of 2022',
      image: '👩‍⚕️',
      content: 'The Science department\'s rigorous training and state-of-the-art labs helped me crack the NEET exam with flying colors.',
      rating: 5,
    },
    {
      name: 'Sneha Iyer',
      role: 'UX Designer, Microsoft',
      year: 'Class of 2021',
      image: '👩‍🎨',
      content: 'The perfect blend of arts and technology. The creative freedom and technical skills I gained here shaped my design career.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2Y1ZjNmZiIgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48L2c+PC9zdmc+')] opacity-50" />

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-purple-600 fill-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Success Stories</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Hear From Our Alumni
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of successful women who started their journey at St.Ann's College
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
                whileHover={{ y: -5 }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                  <Quote className="w-6 h-6 text-purple-600" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {testimonial.image}
                  </motion.div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-purple-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.year}</div>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { value: '10,000+', label: 'Alumni Network' },
            { value: '95%', label: 'Placement Rate' },
            { value: '50+ LPA', label: 'Highest Package' },
            { value: '4.8/5', label: 'Student Rating' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
