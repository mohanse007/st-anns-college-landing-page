import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, HelpCircle, FileText, Download, Award, ChevronRight } from 'lucide-react';

export default function AcademicsPage() {
  const [activeSection, setActiveSection] = useState<'programs' | 'departments' | 'calendars' | 'exams'>('programs');

  const courseList = [
    { name: 'B.Sc (Honours)', type: 'Undergraduate', duration: '4 Years (Single Major)', path: '2021/08/BcMC.pdf' },
    { name: 'B.Com (Honours)', type: 'Undergraduate', duration: '4 Years', path: '2021/08/BCOM-COMPUTERS.pdf' },
    { name: 'BBA (Honours)', type: 'Undergraduate', duration: '4 Years', path: '2022/05/Fees-Structure.pdf' },
    { name: 'BCA (Honours)', type: 'Undergraduate', duration: '4 Years', path: '2021/08/BcMC.pdf' },
    { name: 'B.A (Honours)', type: 'Undergraduate', duration: '4 Years', path: '2021/08/BA.pdf' },
    { name: 'MBA / MCA', type: 'Postgraduate', duration: '2 Years', path: '2022/05/Fees-Structure.pdf' }
  ];

  const departments = [
    'Computer Science & AI-ML', 'Botany & Agricultural Development', 'Zoology & Microbiology',
    'Chemistry & Biochemistry', 'Mathematics & Statistics', 'Physics', 'English Literature',
    'Economics', 'Public Administration', 'History', 'Hindi & Telugu languages'
  ];

  return (
    <div className="pt-[156px] lg:pt-[180px] pb-24 bg-gradient-to-b from-purple-50 via-pink-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-white/60 backdrop-blur-md p-2 rounded-2xl border border-gray-150 max-w-4xl mx-auto shadow-sm">
          {[
            { id: 'programs', label: 'Programs Offered & Fees' },
            { id: 'departments', label: 'Our Departments' },
            { id: 'calendars', label: 'Academic Calendars' },
            { id: 'exams', label: 'Examinations & Results' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50/50'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="min-h-[400px]">

          {/* SECTION 1: PROGRAMS OFFERED & FEES */}
          {activeSection === 'programs' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-bold mb-4 shadow-sm border border-purple-200">
                  <BookOpen className="w-3.5 h-3.5" />
                  Degrees & Specializations
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Academic Programs Offered</h2>
                <p className="text-gray-500 text-sm mt-2">Check details on curriculum structure, admission targets, and fee profiles.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseList.map((course) => (
                  <div key={course.name} className="p-6 bg-white/60 backdrop-blur-md border border-gray-150 rounded-3xl shadow-md hover:shadow-xl hover:border-purple-300 transition-all flex flex-col justify-between">
                    <div>
                      <span className="px-2.5 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-extrabold">{course.type}</span>
                      <h4 className="text-lg font-bold text-gray-800 mt-3">{course.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">Duration: {course.duration}</p>
                    </div>
                    <a
                      href={`http://localhost:8080/wp-content/uploads/${course.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 hover:from-purple-600 hover:to-pink-600 hover:text-white font-bold rounded-xl text-xs transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      View Syllabus & Fees
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* SECTION 2: OUR DEPARTMENTS */}
          {activeSection === 'departments' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-bold mb-4 shadow-sm border border-purple-200">
                  <Award className="w-3.5 h-3.5" />
                  Expert Faculty Groups
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Academic Departments</h2>
                <p className="text-gray-500 text-sm mt-2">Strong foundations in science, commerce, management, and humanities.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {departments.map((dept) => (
                    <div key={dept} className="flex items-center gap-2.5 p-3 bg-purple-50/20 hover:bg-purple-50/60 border border-purple-100/55 rounded-xl transition-colors">
                      <ChevronRight className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">{dept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SECTION 3: ACADEMIC CALENDARS */}
          {activeSection === 'calendars' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-bold mb-4 shadow-sm border border-purple-200">
                  <Calendar className="w-3.5 h-3.5" />
                  Schedules & Calenders
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Academic Calendars</h2>
                <p className="text-gray-500 text-sm mt-2">Find calendars and student diary log files for offline download.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Academic Calendar 2024-25', desc: 'Active academic schedules and holidays.', path: '2024/09/UGPGAcademicCalendar2024-2025-1.pdf' },
                  { title: 'Academic Calendar 2021-22', desc: 'Calendar logs of previous cycles.', path: '2022/12/Calender2021-22.pdf' },
                  { title: 'College Diary 2021', desc: 'Student handbook diary files.', path: '2022/12/St.-Anns-Degree-Col.-Diary-2021.pdf' }
                ].map((cal) => (
                  <div key={cal.title} className="bg-white/60 backdrop-blur-md p-6 border border-gray-150 rounded-3xl shadow-md flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{cal.title}</h4>
                      <p className="text-xs text-gray-500 mt-2">{cal.desc}</p>
                    </div>
                    <a
                      href={`http://localhost:8080/wp-content/uploads/${cal.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-purple-50 text-purple-700 hover:bg-purple-600 hover:text-white font-bold rounded-xl text-xs transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" /> Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* SECTION 4: EXAMINATIONS & RESULTS */}
          {activeSection === 'exams' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-bold mb-4 shadow-sm border border-purple-200">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Examination Cell
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Examinations & Result Portals</h2>
                <p className="text-gray-500 text-sm mt-2">Access timetables, registration procedures, and result links.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Procedures */}
                <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg space-y-6">
                  <h3 className="text-lg font-bold text-gray-800">Registration Process</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Check the applicant-side step-by-step procedure guide to register for end-semester examinations.
                  </p>
                  <a
                    href="http://localhost:8080/wp-content/uploads/2026/04/Applicant-Side---Step-by-Step-Process-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-pink-600 text-white font-bold rounded-full text-xs hover:bg-pink-700 transition-colors shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" /> View Process PDF
                  </a>
                </div>

                {/* Practical exams */}
                <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg space-y-6">
                  <h3 className="text-lg font-bold text-gray-800">Practical & Term Examinations</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Download schedules and regulations for practical exams, internal projects, and viva assessments.
                  </p>
                  <a
                    href="http://localhost:8080/wp-content/uploads/2022/12/Practical_prac_merged.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white font-bold rounded-full text-xs hover:bg-purple-700 transition-colors shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Schedules
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
