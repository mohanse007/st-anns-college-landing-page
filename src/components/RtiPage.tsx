import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Phone, User, Download, FileText } from 'lucide-react';

export default function RtiPage() {
  const officers = [
    {
      title: 'Appellate Authority',
      role: 'Principal',
      name: "Dr. Sr. Prema D'Souza",
      phone: '+91 8978098870',
      email: 'principal@stanns.edu.in',
    },
    {
      title: 'Public Information Officer (PIO)',
      role: 'Vice Principal',
      name: 'Mrs. J. Helen',
      phone: '+91 8978098870',
      email: 'viceprincipal@stanns.edu.in',
    },
    {
      title: 'Assistant Public Information Officer (APIO)',
      role: 'Office Superintendent',
      name: 'Mr. P. Appa Rao',
      phone: '+91 8978098870',
      email: 'office@stanns.edu.in',
    },
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
            <ShieldCheck className="w-3.5 h-3.5" />
            Statutory Disclosure
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
            Right to Information (RTI) Act
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Statutory declaration under Section 4(1)(b) of the Right to Information Act, 2005, promoting transparency, accountability, and citizen information rights.
          </p>
        </motion.div>

        {/* Declaration and Download Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          
          {/* Main Info Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-md space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Statutory Declaration</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                St. Ann's College for Women, Visakhapatnam, is an autonomous college accredited by NAAC and governed by statutory education guidelines. The college strictly adheres to the provisions of the RTI Act, 2005. 
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Any citizen seeking information regarding college courses, administrative decisions, or official audits can submit a written application addressed to the Public Information Officer (PIO) along with the requisite fee as prescribed by government rules.
              </p>
              <div className="p-4 bg-purple-50/50 border border-purple-100 rounded-2xl flex items-center gap-3">
                <FileText className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <span className="text-xs text-purple-950 leading-relaxed font-semibold">
                  Official written queries must be submitted physically or via official post along with a court fee stamp or demand draft where applicable.
                </span>
              </div>
            </div>
          </div>

          {/* Download Box */}
          <div className="bg-white/60 backdrop-blur-md p-8 border border-gray-150 rounded-3xl shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-850 mb-3">RTI Documentation</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Download the complete official statutory declaration document containing all details, structure, and operational definitions under Section 4(1)(b).
              </p>
            </div>
            <a
              href="http://localhost:8080/wp-content/uploads/2021/07/RTI-ACT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-sm w-full"
            >
              <Download className="w-4 h-4" />
              Download RTI Declaration PDF
            </a>
          </div>

        </div>

        {/* Public Information Officers List */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Public Information Officers</h2>
            <p className="text-gray-500 text-sm mt-1">Responsible officers designated for handling RTI queries and appeals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officers.map((off) => (
              <div 
                key={off.title} 
                className="p-8 bg-white/40 backdrop-blur-sm border border-gray-150 rounded-3xl shadow-sm hover:shadow-md hover:border-pink-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-6">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-pink-600 uppercase tracking-wider">{off.title}</span>
                  <h4 className="font-bold text-gray-800 text-lg mt-1 mb-1">{off.name}</h4>
                  <p className="text-xs text-gray-400 mb-6">{off.role}</p>
                </div>
                
                <div className="space-y-2.5 border-t border-gray-100 pt-4 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span>{off.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span className="break-all">{off.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
