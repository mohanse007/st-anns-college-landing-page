import { motion } from 'framer-motion';
import { FileText, Download, Award, ShieldAlert, BookOpen, Layers } from 'lucide-react';

export default function NaacPage() {
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

  const aqarReports = [
    { year: '2023-24', title: 'Annual Quality Assurance Report 2023-24', size: '2.4 MB', path: '2025/07/AQAR-2023-24.pdf' },
    { year: '2022-23', title: 'Annual Quality Assurance Report 2022-23', size: '2.1 MB', path: '2024/03/AQAR-22-23.pdf' },
    { year: '2021-22', title: 'Annual Quality Assurance Report 2021-22', size: '1.9 MB', path: '2023/02/AQAR-2021-22.pdf' },
    { year: '2020-21', title: 'Annual Quality Assurance Report 2020-21', size: '1.8 MB', path: '2023/05/AQAR23.pdf' },
    { year: '2019-20', title: 'Annual Quality Assurance Report 2019-20', size: '1.7 MB', path: '2021/08/2019-2020.pdf' },
  ];

  const criteriaList = [
    { num: 'I', title: 'Curricular Aspects', desc: 'Curricular planning, implementation, academic flexibility, and feedback systems.', path: '2021/08/1.1.3_Bos.pdf' },
    { num: 'II', title: 'Teaching-Learning & Evaluation', desc: 'Student enrollment, profile, diversity, teaching-learning processes, and evaluations.', path: '2021/08/2017-2018.pdf' },
    { num: 'III', title: 'Research, Innovations & Extension', desc: 'Resource mobilization, innovation ecosystem, publications, and extensions.', path: '2021/07/UBA-REPORT.pdf' },
    { num: 'IV', title: 'Infrastructure & Learning Resources', desc: 'Physical facilities, library resources, IT infrastructure, and maintenance.', path: '2021/07/organogram.pdf' },
    { num: 'V', title: 'Student Support & Progression', desc: 'Student mentoring, support schemes, placements, alumni networks, and co-curriculars.', path: '2021/10/5.1.1.pdf' },
    { num: 'VI', title: 'Governance, Leadership & Management', desc: 'Vision, strategy, decentralization, e-governance, and professional development.', path: '2022/12/6.1.2.pdf' },
    { num: 'VII', title: 'Institutional Values & Best Practices', desc: 'Gender equity, environmental consciousness, inclusivity, and core institutional values.', path: '2021/08/7.2.11_ADDITIONAL_INFORMATION_compressed.pdf' },
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
            <Award className="w-3.5 h-3.5" />
            Accreditation Cycle
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
            National Assessment and Accreditation Council (NAAC)
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            St. Ann's College for Women is proudly accredited with an **'A' Grade (3.01 CGPA)**, reflecting our commitment to continuous quality improvement and higher education benchmarks.
          </p>
        </motion.div>

        {/* NAAC Certificate Info Card */}
        <motion.div 
          className="mb-16 p-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl text-white shadow-xl shadow-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <ShieldAlert className="w-6 h-6 text-pink-200" />
              <h2 className="text-2xl font-bold">NAAC Accredited 'A' Grade</h2>
            </div>
            <p className="text-purple-100 max-w-xl text-sm">
              Accredited on January 25, 2022. The certificate and formal accreditation letter are available for official review.
            </p>
          </div>
          <a
            href="http://localhost:8080/wp-content/uploads/2024/02/NAAC-Certification-Docx.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3.5 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-sm"
          >
            <Download className="w-4 h-4" />
            View Certificate PDF
          </a>
        </motion.div>

        {/* AQAR Reports & Self Study Table */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          
          {/* Left Column: AQAR List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <FileText className="w-6 h-6 text-purple-600" />
                Annual Quality Assurance Reports (AQAR)
              </h2>
              <p className="text-gray-500 text-xs mt-1">Select and download AQAR submissions from the past 5 academic cycles.</p>
            </div>

            <motion.div 
              className="bg-white/60 backdrop-blur-md border border-gray-150 rounded-3xl overflow-hidden shadow-md divide-y divide-gray-100"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aqarReports.map((report) => (
                <motion.div 
                  key={report.year}
                  variants={itemVariants}
                  className="p-6 flex items-center justify-between gap-4 hover:bg-purple-50/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">{report.title}</h4>
                      <p className="text-xs text-gray-400">Academic Year: {report.year} • Size: {report.size}</p>
                    </div>
                  </div>
                  <a
                    href={`http://localhost:8080/wp-content/uploads/${report.path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all"
                    title="Download Report"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Institutional Self Study */}
          <div className="space-y-8">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-pink-600" />
                Self-Study Reports (SSR)
              </h2>
              <p className="text-gray-500 text-xs mt-1">UGC compliance files and Institutional assessments.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-gray-150 rounded-3xl p-6 shadow-md space-y-4">
              <div className="p-4 bg-gradient-to-br from-pink-50/50 to-white border border-pink-100 rounded-2xl flex items-start gap-4">
                <FileText className="w-8 h-8 text-pink-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Institutional SSR 2021</h4>
                  <p className="text-xs text-gray-400 mb-3">Self-Study Report Cycle-3 (12.4 MB)</p>
                  <a 
                    href="http://localhost:8080/wp-content/uploads/2021/12/SACW-Final-SSR.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-pink-600 font-bold hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" /> Download SSR PDF
                  </a>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50/50 to-white border border-purple-100 rounded-2xl flex items-start gap-4">
                <FileText className="w-8 h-8 text-purple-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Extended Profile Metadata</h4>
                  <p className="text-xs text-gray-400 mb-3">Supporting institutional metrics (3.1 MB)</p>
                  <a 
                    href="http://localhost:8080/wp-content/uploads/2021/07/organogram.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-purple-600 font-bold hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Profile PDF
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Criteria Metrics */}
        <div className="space-y-8">
          <div className="border-b border-gray-100 pb-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Evaluative Criteria & Documentation</h2>
            <p className="text-gray-500 text-sm mt-1">Submissions structured under NAAC's 7 assessment pillars.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criteriaList.map((crit) => (
              <div 
                key={crit.num} 
                className="p-6 bg-white/40 backdrop-blur-sm border border-gray-150 rounded-2xl shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 font-extrabold text-sm mb-4">
                  {crit.num}
                </div>
                <h4 className="font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">{crit.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{crit.desc}</p>
                <a 
                  href={`http://localhost:8080/wp-content/uploads/${crit.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-purple-600 font-bold hover:underline"
                >
                  <Download className="w-3.5 h-3.5" /> Criteria Documents
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
