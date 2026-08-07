import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, HelpCircle, FileText, Scale } from 'lucide-react';

export default function CommitteesPage() {
  const [activeTab, setActiveTab] = useState<'statutory' | 'grievance'>('statutory');

  return (
    <div className="pt-[156px] lg:pt-[180px] pb-24 bg-gradient-to-b from-purple-50 via-pink-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-white/60 backdrop-blur-md p-2 rounded-2xl border border-gray-150 max-w-4xl mx-auto shadow-sm">
          {[
            { id: 'statutory', label: 'Academic & Welfare Committees' },
            { id: 'grievance', label: 'Grievance & Anti-Ragging Cell' }
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

        {/* Content Box */}
        <div className="min-h-[400px]">

          {/* TAB 1: ACADEMIC & WELFARE COMMITTEES */}
          {activeTab === 'statutory' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* SC/ST and OBC Committee */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">SC/ST and OBC Committee</h3>
                </div>
                <p className="text-xs text-purple-950 font-semibold">Objective: Cell promotes the special interest of students in the reserved category and to provide special inputs in areas where the students experience difficulties.</p>
                <div className="text-xs text-gray-500 space-y-2">
                  <p><strong>Responsibilities:</strong></p>
                  <ul className="list-disc pl-4 space-y-1.5">
                    <li>Function as a Grievances Redressal Cell for academic and administrative SC/ST employee or student concerns.</li>
                    <li>Collect course-wise admission ratios annually.</li>
                    <li>Disseminate welfare scheme resources to reserved students.</li>
                  </ul>
                  <p className="pt-2"><strong>Incharge:</strong> Mr. B.P Raju (Lecturer in Economics)</p>
                </div>
              </div>

              {/* Minority Cell */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Minority Cell</h3>
                </div>
                <p className="text-xs text-pink-950 font-semibold">Objective: Helps minority students for their academic development, equal opportunities, and financial assistance schemes.</p>
                <div className="text-xs text-gray-500 space-y-2">
                  <p><strong>Responsibilities:</strong></p>
                  <ul className="list-disc pl-4 space-y-1.5">
                    <li>Facilitate state government and UGC scholarship schemes.</li>
                    <li>Coordinate professional counseling for emotional emergencies.</li>
                    <li>Ensure a safe and secure campus environment.</li>
                  </ul>
                  <p className="pt-2"><strong>Incharge:</strong> Mr. B.P Raju (Lecturer in Economics)</p>
                </div>
              </div>

              {/* Commerce Committee */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Commerce Committee</h3>
                </div>
                <p className="text-xs text-blue-950 font-semibold">Objective: Provide practical training for the theoretical knowledge which the commerce students gain in the classroom.</p>
                <div className="text-xs text-gray-500 space-y-2">
                  <p><strong>Responsibilities:</strong></p>
                  <ul className="list-disc pl-4 space-y-1.5">
                    <li>Expose students to meet practical challenges in the business scenario.</li>
                    <li>Let students interact with industry experts.</li>
                    <li>Develop e-commerce and financial literacy skills.</li>
                  </ul>
                  <p className="pt-2"><strong>Incharge:</strong> Mrs. K. Uma Maheshwari (Lecturer in Commerce)</p>
                </div>
              </div>

              {/* Science Club Committee */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Science Club Committee</h3>
                </div>
                <p className="text-xs text-emerald-950 font-semibold">Objective: To develop awareness of & concern for scientific issues in personal, social, environmental and technological contexts.</p>
                <div className="text-xs text-gray-500 space-y-2">
                  <p><strong>Responsibilities:</strong></p>
                  <ul className="list-disc pl-4 space-y-1.5">
                    <li>Inculcate scientific attitude and explorer instincts in students.</li>
                    <li>Host science day celebrations, workshops, and science fairs.</li>
                    <li>Keep students informed of recent advances in science and engineering.</li>
                  </ul>
                  <p className="pt-2"><strong>Incharge:</strong> Mrs. K. Kanaka Triveni (Lecturer in Physics)</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: GRIEVANCE & ANTI-RAGGING CELL */}
          {activeTab === 'grievance' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Anti Ragging */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-md flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-650 font-extrabold text-sm">
                    ⚠️
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Anti-Ragging Committee</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    St. Ann's is a zero-tolerance ragging campus. Any violation is strictly prosecuted under state penal code and university policies.
                  </p>
                </div>
                <div className="mt-8 p-4 bg-red-50/40 border border-red-100 rounded-2xl text-[11px] text-red-950 font-semibold">
                  Submit physical complaint letters directly to the Vice Principal's office or mail info@stannscollegevizag.org.
                </div>
              </div>

              {/* ICC Complaints */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-md flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-650">
                    ♀️
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Internal Complaints (ICC)</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Governed by gender sensitization rules. Resolves gender discriminations, student comfort issues, and campus safety queries.
                  </p>
                </div>
                <div className="mt-8 p-4 bg-pink-50/40 border border-pink-100 rounded-2xl text-[11px] text-pink-950 font-semibold">
                  A transparent committee formed under UGC rules to address and resolve students concerns.
                </div>
              </div>

              {/* Grievance redressal */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-md flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                    ⚖️
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Grievance Redressal Cell</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Allows anonymous/written feedback submission for staff behavior, exam schedules, and library issues.
                  </p>
                </div>
                <div className="mt-8 p-4 bg-purple-50/40 border border-purple-100 rounded-2xl text-[11px] text-purple-950 font-semibold">
                  Boxes are placed outside the office for written notes.
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </div>
  );
}
