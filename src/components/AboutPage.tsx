import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Target, ShieldCheck, Heart, User, CheckCircle2, FileText, Download } from 'lucide-react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'vision' | 'inspiration' | 'recognition'>('overview');

  const governingBody = [
    { role: 'President', name: 'Dr. Sr. Elizabeth Rani' },
    { role: 'Secretary & Correspondent', name: 'Sr. Mary Grace' },
    { role: 'Principal', name: 'Dr. Sr. Prema D\'Souza' },
    { role: 'UGC Representative', name: 'Prof. K. Rama Devi' },
    { role: 'State Govt. Nominee', name: 'Dr. P. Venkata Rao' },
    { role: 'Academic Experts', name: 'Prof. S. Geetha, Dr. M. Prasad' }
  ];

  const adminStaff = [
    { role: 'Vice Principal', name: 'Mrs. J. Helen' },
    { role: 'Academic Coordinator', name: 'Dr. G. Sridevi' },
    { role: 'Office Superintendent', name: 'Mr. P. Appa Rao' },
    { role: 'Senior Assistant', name: 'Mrs. K. Satyavathi' },
    { role: 'Librarian', name: 'Mrs. M. Lakshmi' }
  ];

  return (
    <div className="pt-[156px] lg:pt-[180px] pb-24 bg-gradient-to-b from-purple-50 via-pink-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-white/60 backdrop-blur-md p-2 rounded-2xl border border-gray-150 max-w-4xl mx-auto shadow-sm">
          {[
            { id: 'overview', label: 'Overview & Administration' },
            { id: 'vision', label: 'Vision & Women Empowerment' },
            { id: 'inspiration', label: 'Our Inspiration' },
            { id: 'recognition', label: 'Recognition & Policies' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content wrapper */}
        <div className="min-h-[400px]">
          
          {/* TAB 1: OVERVIEW & ADMINISTRATION */}
          {activeTab === 'overview' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-bold mb-4 shadow-sm border border-purple-200">
                  <Award className="w-3.5 h-3.5" />
                  Established in 1977
                </span>
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6 tracking-tight">
                  St. Ann's College for Women
                </h1>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Visakhapatnam's premier autonomous institution dedicated to academic achievement, character building, and comprehensive development of young women.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Governing Body Table */}
                <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-purple-600" />
                    Governing Body Members
                  </h3>
                  <div className="overflow-hidden rounded-2xl border border-gray-100">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-900 font-bold text-xs uppercase">
                          <th className="px-6 py-4">Designation</th>
                          <th className="px-6 py-4">Name</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
                        {governingBody.map((member) => (
                          <tr key={member.role} className="hover:bg-purple-50/20 transition-colors">
                            <td className="px-6 py-4 font-semibold text-gray-700">{member.role}</td>
                            <td className="px-6 py-4">{member.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Administrative Staff Table */}
                <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-pink-600" />
                    Administrative & Academic Leaders
                  </h3>
                  <div className="overflow-hidden rounded-2xl border border-gray-100">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-pink-50 to-purple-50 text-pink-900 font-bold text-xs uppercase">
                          <th className="px-6 py-4">Role</th>
                          <th className="px-6 py-4">Name</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
                        {adminStaff.map((staff) => (
                          <tr key={staff.role} className="hover:bg-pink-50/20 transition-colors">
                            <td className="px-6 py-4 font-semibold text-gray-700">{staff.role}</td>
                            <td className="px-6 py-4">{staff.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: VISION & EMPOWERMENT */}
          {activeTab === 'vision' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Vision */}
                <div className="p-8 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-purple-200/50 rounded-3xl shadow-xl hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6">
                    <Compass className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    To be a center of excellence in higher education, fostering intellectual growth, moral uprightness, social responsibility, and cultural integration in young women, enabling them to lead meaningful and productive lives.
                  </p>
                </div>

                {/* Mission */}
                <div className="p-8 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-pink-200/50 rounded-3xl shadow-xl hover:shadow-2xl hover:border-pink-300 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6">
                    <Target className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <ul className="space-y-3.5 text-gray-600 text-sm">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span>To impart quality value-based education that triggers curiosity and creative learning.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span>To foster a warm and supportive community that nurtures self-reliance and confidence.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span>To encourage ethical awareness and proactive participation in community development programs.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Thrust Area: Women Empowerment */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="text-2xl font-bold text-gray-800">Women Empowerment – Priority & Thrust</h3>
                  <p className="text-xs text-pink-600 font-extrabold uppercase mt-1">"Women for Women Empowerment"</p>
                </div>
                <p className="text-gray-700 font-semibold leading-relaxed text-sm">
                  Women empowerment will come through education, health, employment, self-sufficiency, social awareness, political participation & leadership. Hence, St. Ann's college concentrated on these areas and working for the achievement of women empowerment.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-purple-900">1. Literacy & Education</h4>
                      <p className="text-xs mt-1 leading-relaxed">Digital literacy workshops are being conducted to the members of self-help groups by the students of St. Ann's college. NSS volunteers are specially trained by the union government.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-900">2. Health Awareness</h4>
                      <p className="text-xs mt-1 leading-relaxed">Addressing women's reproductive health issues and anemia. Regular free blood group tests, free medical camps, and health awareness talks are conducted by the college.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-purple-900">3. Employment & Self-Sufficiency</h4>
                      <p className="text-xs mt-1 leading-relaxed">Vocational courses (fashion technology, beautician courses) after college timings. Student exhibitions cum sale stalls help market self-help group products.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-900">4. Leadership & Social Awareness</h4>
                      <p className="text-xs mt-1 leading-relaxed">Trainings on social issues (domestic violence, child marriages) and leadership training to prepare women for local elections and leadership roles.</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex justify-center">
                  <a 
                    href="http://localhost:8080/wp-content/uploads/2021/08/7-3-1.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download Journey of Empowerment PDF
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: OUR INSPIRATION */}
          {activeTab === 'inspiration' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Patroness */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Saint Anne</h3>
                    <p className="text-xs text-gray-400">Patroness of Single Women & Educators</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  Saint Anne is the patron saint of the Society of St. Ann, Luzern, under which St. Ann's College for Women functions. Our founder, Father Wilhelm Meyer, placed the Society under her protection to take care of mothers and children. Saint Anne represents love, life, and the nurture of young learners.
                </p>
                <div className="p-4 bg-pink-50/50 border border-pink-100 rounded-2xl text-xs text-pink-950 font-semibold italic">
                  "The Society of St. Ann has been founded, to lead the members to Christian perfection, through works of charity in the nursing and teaching professions."
                </div>
              </div>

              {/* Founder */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 flex-shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Fr. Wilhelm Meyer</h3>
                    <p className="text-xs text-gray-400">Founder of Society of St. Ann (1870–1912)</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  Born in Schoetz, Switzerland, Fr. Wilhelm Meyer was ordained a priest in 1897. Compassionate for the sick, poor, and mothers in childbirth, he established the Society of St. Ann. His core philosophy guides our institution: <strong>"When work meets the needs of the time, it indicates the Will of God."</strong>
                </p>
                <div className="p-4 bg-purple-50/50 border border-purple-100 rounded-2xl text-xs text-purple-950 font-semibold italic">
                  "Cling like a creeper to the Rock, Jesus Christ. Walk in the presence of God and so live always in union with God."
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: RECOGNITION & POLICIES */}
          {activeTab === 'recognition' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* UGC 2(f) */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-md flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">UGC 2(f) Recognition</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    St. Ann's College for Women is recognized under Section 2(f) of the UGC Act, certifying our eligibility for central assistance and academic recognition.
                  </p>
                </div>
                <a
                  href="http://localhost:8080/wp-content/uploads/2021/07/UGC-2F1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-purple-50 text-purple-700 font-bold rounded-xl text-xs hover:bg-purple-600 hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download UGC 2(f) PDF
                </a>
              </div>

              {/* Code of Conduct */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-md flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Code of Conduct</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Access our official codes of conduct, institutional policies, and student/staff guidance handbooks.
                  </p>
                </div>
                <a
                  href="http://localhost:8080/wp-content/uploads/2021/07/code-of-conduct-updated.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-pink-50 text-pink-700 font-bold rounded-xl text-xs hover:bg-pink-600 hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Code of Conduct
                </a>
              </div>

              {/* Staff Appraisals & Welfare */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-md flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <User className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Staff Policies & Welfare</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    View institutional guidelines regarding staff appraisals, professional support, and welfare policies.
                  </p>
                </div>
                <div className="mt-6 space-y-2">
                  <a
                    href="http://localhost:8080/wp-content/uploads/2021/08/Staff-Support-Policy-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 hover:from-purple-600 hover:to-pink-600 hover:text-white font-bold rounded-xl text-xs transition-colors"
                  >
                    <Download className="w-3 h-3" />
                    Welfare Policy
                  </a>
                  <a
                    href="http://localhost:8080/wp-content/uploads/2021/08/Performance-Appraisal-Policy-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 hover:from-purple-600 hover:to-pink-600 hover:text-white font-bold rounded-xl text-xs transition-colors"
                  >
                    <Download className="w-3 h-3" />
                    Appraisal Policy
                  </a>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </div>
  );
}
