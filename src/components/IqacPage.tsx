import { motion } from 'framer-motion';
import { Target, Calendar, Leaf, Shield, UserCheck, Download, Award } from 'lucide-react';

export default function IqacPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const iqacMinutes = [
    { title: 'IQAC Meeting Minutes - Q4 2024-25', date: 'March 15, 2025', size: '1.2 MB', path: '2022/12/Iqacmin2021-22.pdf' },
    { title: 'IQAC Meeting Minutes - Q3 2024-25', date: 'December 10, 2024', size: '1.4 MB', path: '2022/12/Iqacmin2020-21.pdf' },
    { title: 'IQAC Meeting Minutes - Q2 2024-25', date: 'September 22, 2024', size: '1.1 MB', path: '2021/07/IQAC-MINUTES-2018-19.pdf' },
    { title: 'IQAC Meeting Minutes - Q1 2024-25', date: 'June 08, 2024', size: '1.3 MB', path: '2021/07/IQAC-MINUTES-2019-2020.pdf' },
    { title: 'Annual IQAC Report & Action Taken Report 2023-24', date: 'May 30, 2024', size: '2.5 MB', path: '2021/07/Action-taken-report-for-2019-2020.pdf' },
  ];

  const audits = [
    { title: 'Green Audit Certificate', icon: Leaf, desc: 'Evaluates institutional campus greenery, botanical variety, and carbon-reduction footprints.', color: 'from-green-500 to-emerald-600', path: '2022/12/Green-Audit.pdf' },
    { title: 'Energy Audit Certificate', icon: Shield, desc: 'Assesses electricity consumption, solar power generation ratio, and power-saving efficiencies.', color: 'from-amber-500 to-orange-600', path: '2022/12/Energy_Audit.pdf' },
    { title: 'Environment Audit Certificate', icon: UserCheck, desc: 'Monitors waste disposal, recycling streams, air indexes, and plastic-free campus zones.', color: 'from-blue-500 to-indigo-600', path: '2022/12/Env-Audit.pdf' },
  ];

  return (
    <div className="pt-[156px] lg:pt-[180px] pb-24 bg-gradient-to-b from-purple-50 via-pink-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Header Hero */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-bold mb-4 shadow-sm border border-purple-200">
            <Target className="w-3.5 h-3.5" />
            Quality Assurance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
            Internal Quality Assurance Cell (IQAC)
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            The IQAC serves as a planning and monitoring body tasked with promoting institutional quality enhancement, optimizing learning methodologies, and coordinating academic audits.
          </p>
        </motion.div>

        {/* Quality Audits Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Environmental & Resource Audits</h2>
            <p className="text-gray-500 text-sm mt-1">Authorized green audit compliance logs certifying our sustainable campus standards.</p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {audits.map((aud) => (
              <motion.div 
                key={aud.title}
                variants={itemVariants}
                className="p-8 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-gray-150 rounded-3xl shadow-md hover:shadow-xl hover:border-purple-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${aud.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform shadow-md`}>
                    <aud.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-850 mb-3">{aud.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">{aud.desc}</p>
                </div>
                <a
                  href={`http://localhost:8080/wp-content/uploads/${aud.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 hover:from-purple-600 hover:to-pink-600 hover:text-white font-bold rounded-xl shadow-sm transition-all text-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Certificate
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Meeting Minutes */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Minutes List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-purple-600" />
                IQAC Meeting Minutes & ATRs
              </h2>
              <p className="text-gray-500 text-xs mt-1">Review official quality benchmarks, minutes, and Action Taken Reports.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-gray-150 rounded-3xl overflow-hidden shadow-md divide-y divide-gray-100">
              {iqacMinutes.map((minute) => (
                <div 
                  key={minute.title}
                  className="p-6 flex items-center justify-between gap-4 hover:bg-purple-50/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 flex-shrink-0">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">{minute.title}</h4>
                      <p className="text-xs text-gray-400">Published: {minute.date} • Size: {minute.size}</p>
                    </div>
                  </div>
                  <a
                    href={`http://localhost:8080/wp-content/uploads/${minute.path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-gray-400 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all"
                    title="Download Report"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* IQAC Objectives Column */}
          <div className="space-y-8">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Award className="w-6 h-6 text-pink-600" />
                Core Objectives
              </h2>
              <p className="text-gray-500 text-xs mt-1">Our primary quality enhancement agendas.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-gray-150 rounded-3xl p-6 shadow-md space-y-4 text-sm text-gray-650">
              <div className="p-4 bg-gradient-to-br from-purple-50/50 to-white border border-purple-100 rounded-2xl">
                <h4 className="font-bold text-purple-950 mb-2">Quality Culturization</h4>
                <p className="text-xs leading-relaxed">Systematically implementing quality measures across all academic programs, curricula, and evaluations.</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-pink-50/50 to-white border border-pink-100 rounded-2xl">
                <h4 className="font-bold text-pink-950 mb-2">Best Practices Modeling</h4>
                <p className="text-xs leading-relaxed">Documenting, publishing, and adopting innovative methodologies and extension services that drive excellence.</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50/50 to-white border border-blue-100 rounded-2xl">
                <h4 className="font-bold text-blue-950 mb-2">Feedback Ecosystem</h4>
                <p className="text-xs leading-relaxed">Coordinating 360-degree review structures involving parents, alumni, industry recruiters, and students.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
