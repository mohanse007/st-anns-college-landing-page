import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Compass, Globe, Award, Download, FileText } from 'lucide-react';

export default function ActivitiesPage() {
  const [activeTab, setActiveTab] = useState<'ncc' | 'nss' | 'outreach'>('ncc');

  return (
    <div className="pt-[156px] lg:pt-[180px] pb-24 bg-gradient-to-b from-purple-50 via-pink-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-white/60 backdrop-blur-md p-2 rounded-2xl border border-gray-150 max-w-4xl mx-auto shadow-sm">
          {[
            { id: 'ncc', label: 'NCC (National Cadet Corps)' },
            { id: 'nss', label: 'NSS (National Service Scheme)' },
            { id: 'outreach', label: 'Outreach & Unnat Bharat' }
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

        {/* Content Area */}
        <div className="min-h-[400px]">

          {/* NCC Tab */}
          {activeTab === 'ncc' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg space-y-6">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 flex-shrink-0">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">National Cadet Corps (NCC)</h3>
                    <p className="text-xs text-gray-400">Unity and Discipline – Grooming Tomorrow's Leaders</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The NCC unit of St. Ann's College for Women provides basic military training to our student cadets. It aims to develop character, comradeship, discipline, a secular outlook, the spirit of adventure, and ideals of selfless service among the youth of our country.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-xs text-gray-500">
                  <div className="p-4 bg-purple-50/20 border border-purple-100/40 rounded-2xl">
                    <h4 className="font-bold text-purple-900 mb-2">Core Training Focus</h4>
                    <p>Includes drill movements, weapon training, map reading, basic first-aid, navigation, and camping skills that build team cohesion.</p>
                  </div>
                  <div className="p-4 bg-pink-50/20 border border-pink-100/40 rounded-2xl">
                    <h4 className="font-bold text-pink-900 mb-2">Cadet Benefits</h4>
                    <p>Cadets regularly attend local, state, and national camps (RDC, TSC), helping them qualify for 'B' & 'C' certificate exams with high grades.</p>
                  </div>
                </div>
                <div className="pt-4 flex justify-center">
                  <a
                    href="http://localhost:8080/wp-content/uploads/2021/07/Swach-bharat-appreciation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download NCC Appreciation PDF
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* NSS Tab */}
          {activeTab === 'nss' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg space-y-6">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 flex-shrink-0">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">National Service Scheme (NSS)</h3>
                    <p className="text-xs text-gray-400">"Not Me But You" – Service to the Community</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our active NSS units cultivate community awareness and civic responsibility in students. Through regular weekend drives and annual special camps in adopted villages, volunteers engage in literacy teaching, sanitation drives, and health awareness campaigns.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-xs text-gray-500">
                  <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-1.5">Health Camps</h4>
                    <p>Free blood grouping, anemia screening, and general medical checkups for local rural residents.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-1.5">Sanitation Drives</h4>
                    <p>Cleanliness drives in Malkapuram and adopted local villages promoting health and hygiene standards.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-1.5">Awareness Seminars</h4>
                    <p>Educational rallies addressing child marriage, voting rights, and environment protection policies.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Outreach & Unnat Bharat Tab */}
          {activeTab === 'outreach' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {/* UBA Card */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Unnat Bharat Abhiyan (UBA)</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    St. Ann's is an active participant in the Ministry of Education's flagship UBA program, adopting five local villages to support development, technology transfer, and capacity-building.
                  </p>
                </div>
                <a
                  href="http://localhost:8080/wp-content/uploads/2021/07/UBA-REPORT.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-purple-50 text-purple-700 font-bold rounded-xl text-xs hover:bg-purple-600 hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download UBA Report PDF
                </a>
              </div>

              {/* Sports achieved Card */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Sports & Games</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Our student athletes participate in state and inter-collegiate events, securing awards in volleyball, kabaddi, chess, and athletic meets.
                  </p>
                </div>
                <div className="p-4 bg-pink-50/50 border border-pink-100 rounded-2xl text-xs text-pink-950 font-semibold leading-relaxed">
                  St. Ann's regularly hosts inter-department tournaments, promoting fitness, sportsmanship, and teamwork values across all streams.
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </div>
  );
}
