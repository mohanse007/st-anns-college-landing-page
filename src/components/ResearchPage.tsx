import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Download, Calendar, Mail } from 'lucide-react';

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState<'journal' | 'newsletters'>('journal');

  return (
    <div className="pt-[156px] lg:pt-[180px] pb-24 bg-gradient-to-b from-purple-50 via-pink-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-white/60 backdrop-blur-md p-2 rounded-2xl border border-gray-150 max-w-4xl mx-auto shadow-sm">
          {[
            { id: 'journal', label: 'St. Ann\'s Cognitive Chronicles Journal' },
            { id: 'newsletters', label: 'College Newsletters & Archives' }
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

          {/* JOURNAL TAB */}
          {activeTab === 'journal' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Journal Info */}
              <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-lg space-y-6">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 flex-shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">St. Ann's Cognitive Chronicles</h3>
                    <p className="text-xs text-purple-600 font-bold uppercase mt-0.5">ISSN Registered Peer-Reviewed Journal</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-sm text-gray-600">
                  <p>
                    <strong>Call for Papers:</strong> Submissions are invited for the 2026 Edition 3 journal volume. Faculty, researchers, and students can submit their original scientific research, review articles, and case studies.
                  </p>
                  <div className="p-4 bg-purple-50 border border-purple-100 rounded-2xl flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-xs font-semibold text-purple-950">
                      Submit research papers directly to: <strong>editor@stannscollegevizag.org</strong> or <strong>cognitivechronicles@stanns.edu.in</strong>.
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-4 text-xs">
                  <a
                    href="http://localhost:8080/wp-content/uploads/2021/08/1.1.3_Bos.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-4 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md hover:border-purple-300 font-bold text-gray-700 transition-all"
                  >
                    <Download className="w-4 h-4 text-purple-600" />
                    Download Guidelines for Authors
                  </a>
                  <a
                    href="http://localhost:8080/wp-content/uploads/2022/11/1.4.1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-4 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md hover:border-pink-300 font-bold text-gray-700 transition-all"
                  >
                    <Download className="w-4 h-4 text-pink-600" />
                    View Editorial Board
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* NEWSLETTERS TAB */}
          {activeTab === 'newsletters' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-bold mb-4 shadow-sm border border-purple-200">
                  <Calendar className="w-3.5 h-3.5" />
                  Monthly publications
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">College Newsletters</h2>
                <p className="text-gray-500 text-sm mt-2">Download news chronicles highlighting events, webinars, and cultural activities.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'English Department Newsletter', date: 'December 2022', path: '2022/12/Eng-Newsletter.pdf' },
                  { title: 'November Newsletter', date: 'November 2022', path: '2022/12/Nov-News2022.pdf' },
                  { title: 'October Newsletter', date: 'October 2022', path: '2022/11/Brown-and-Black-Professional-Modern-Newsletter-5.pdf' }
                ].map((news) => (
                  <div key={news.title} className="bg-white/60 backdrop-blur-md p-6 border border-gray-150 rounded-3xl shadow-md flex flex-col justify-between">
                    <div>
                      <FileText className="w-8 h-8 text-pink-500 mb-4" />
                      <h4 className="font-bold text-gray-800 text-sm">{news.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">Published: {news.date}</p>
                    </div>
                    <a
                      href={`http://localhost:8080/wp-content/uploads/${news.path}`}
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

        </div>

      </div>
    </div>
  );
}
