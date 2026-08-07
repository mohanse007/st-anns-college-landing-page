import { Megaphone } from 'lucide-react';

export default function Ticker() {
  const announcements = [
    "Admissions Open for Degree & PG (Intermediate, Degree, MBA, MCA) for the Academic Year 2026-27",
    "St. Ann's Cognitive Chronicles Journal - call for research papers for 2026 Edition 3 is active. Submit today!",
    "Accredited by NAAC with 'A' Grade (3.01 CGPA) & ISO 9001:2015 Certified Institution",
    "UGC Autonomous Examinations Registration Process is active for end-semester assessments."
  ];

  return (
    <div className="w-full bg-gradient-to-r from-purple-900 via-pink-850 to-purple-950 text-white h-10 flex items-center border-b border-pink-700/25 relative overflow-hidden z-30 select-none shadow-inner">
      {/* Ticker Title Badge */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 h-full px-4 flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-[5px_0_15px_rgba(0,0,0,0.2)] z-10 flex-shrink-0 border-r border-pink-500/20">
        <Megaphone className="w-3.5 h-3.5 animate-bounce" />
        <span>Announcements</span>
      </div>

      {/* Scrolling Text Container */}
      <div className="flex-1 overflow-hidden relative h-full flex items-center">
        <div className="animate-marquee hover:pause whitespace-nowrap flex flex-row flex-nowrap items-center gap-16 text-xs sm:text-sm font-semibold tracking-wide py-1 text-pink-50 cursor-pointer">
          {announcements.map((text, idx) => (
            <span key={idx} className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
              <span className="text-pink-400">✦</span>
              {text}
            </span>
          ))}
          {/* Duplicate to ensure seamless infinite scroll */}
          {announcements.map((text, idx) => (
            <span key={`dup-${idx}`} className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
              <span className="text-pink-400">✦</span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
