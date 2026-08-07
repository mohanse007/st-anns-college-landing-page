import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Laptop, Palette, FlaskConical, Calculator } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: FlaskConical,
      title: 'B.Sc (Honours)',
      degree: 'Undergraduate',
      duration: '4 Years',
      description: 'Specializations in Botany, Chemistry, Mathematics, Microbiology, Zoology, Computer Science, AI-ML, and Agriculture & Rural Development.',
      highlights: ['Botany & Zoology', 'Microbiology & Chemistry', 'CS, AI-ML, Mathematics'],
      color: 'purple',
    },
    {
      icon: Briefcase,
      title: 'B.Com (Honours)',
      degree: 'Undergraduate',
      duration: '4 Years',
      description: 'Specialized honours program with a focus on Computer Applications in business, accounting, and finance.',
      highlights: ['Computer Applications', 'Corporate Finance', 'Taxation Studies'],
      color: 'blue',
    },
    {
      icon: Calculator,
      title: 'BBA (Honours)',
      degree: 'Undergraduate',
      duration: '4 Years',
      description: 'Honours program in Business Administration focusing on management theories, strategy, leadership, and entrepreneurship.',
      highlights: ['Business Administration', 'Strategic Planning', 'Leadership Training'],
      color: 'pink',
    },
    {
      icon: Laptop,
      title: 'BCA (Honours)',
      degree: 'Undergraduate',
      duration: '4 Years',
      description: 'Comprehensive program in Computer Applications, software development, web tech, database systems, and networking.',
      highlights: ['Computer Applications', 'Web Development', 'Coding Bootcamps'],
      color: 'orange',
    },
    {
      icon: Palette,
      title: 'B.A (Honours)',
      degree: 'Undergraduate',
      duration: '4 Years',
      description: 'Honours degree program specialized in Special English, exploring advanced English literature, linguistics, and creative writing.',
      highlights: ['Special English', 'Creative Writing', 'English Literature'],
      color: 'green',
    },
    {
      icon: GraduationCap,
      title: 'Postgraduate (PG) Programs',
      degree: 'Admissions Open 2026-2027',
      duration: '2 Years',
      description: 'Advanced postgraduate professional degree programs including MBA (Master of Business Administration) and MCA (Master of Computer Applications).',
      highlights: ['MBA - Business Admin', 'MCA - Computer Apps', 'Admissions 2026-2027'],
      color: 'indigo',
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; gradient: string; border: string }> = {
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      gradient: 'from-purple-500 to-purple-700',
      border: 'border-purple-200',
    },
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      gradient: 'from-blue-500 to-blue-700',
      border: 'border-blue-200',
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      gradient: 'from-green-500 to-green-700',
      border: 'border-green-200',
    },
    pink: {
      bg: 'bg-pink-50',
      text: 'text-pink-600',
      gradient: 'from-pink-500 to-pink-700',
      border: 'border-pink-200',
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      gradient: 'from-orange-500 to-orange-700',
      border: 'border-orange-200',
    },
    indigo: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-600',
      gradient: 'from-indigo-500 to-indigo-700',
      border: 'border-indigo-200',
    },
  };

  return (
    <section id="programs" className="py-24 bg-white">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <GraduationCap className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Academic Programs</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Programs That Transform Lives
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose from our wide range of undergraduate and postgraduate programs designed for the modern world
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const colors = colorMap[program.color];
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${colors.border} hover:border-opacity-50 overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-bl-full" style={{
                    backgroundImage: `linear-gradient(to bottom right, ${program.color === 'purple' ? '#9333ea, #7c3aed' : program.color === 'blue' ? '#3b82f6, #2563eb' : program.color === 'green' ? '#10b981, #059669' : program.color === 'pink' ? '#ec4899, #db2777' : program.color === 'orange' ? '#f97316, #ea580c' : '#6366f1, #4f46e5'})`
                  }} />

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <program.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{
                      backgroundImage: `linear-gradient(to right, ${program.color === 'purple' ? '#9333ea, #7c3aed' : program.color === 'blue' ? '#3b82f6, #2563eb' : program.color === 'green' ? '#10b981, #059669' : program.color === 'pink' ? '#ec4899, #db2777' : program.color === 'orange' ? '#f97316, #ea580c' : '#6366f1, #4f46e5'})`
                    }}>
                      {program.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                      <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full font-medium`}>
                        {program.degree}
                      </span>
                      <span>• {program.duration}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {program.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className={`px-3 py-1 text-xs font-medium ${colors.bg} ${colors.text} rounded-full`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="#admissions"
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text} group-hover:gap-3 transition-all`}
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <span className="text-lg">→</span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Can't Find Your Perfect Program?
            </h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Our academic counselors are here to help you choose the right path for your career goals
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Speak to a Counselor
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
