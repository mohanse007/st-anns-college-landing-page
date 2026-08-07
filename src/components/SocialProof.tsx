import { motion } from 'framer-motion';
import { Star, TrendingUp, Award, ShieldCheck } from 'lucide-react';

function getLogoUrl(name: string) {
  const mapping: Record<string, string> = {
    'Infosys': 'https://logo.clearbit.com/infosys.com',
    'Tata Consultancy Services (TCS)': 'https://logo.clearbit.com/tcs.com',
    'Wipro': 'https://logo.clearbit.com/wipro.com',
    'Tech Mahindra': 'https://logo.clearbit.com/techmahindra.com',
    'Cognizant': 'https://logo.clearbit.com/cognizant.com',
    'HDFC Bank': 'https://logo.clearbit.com/hdfcbank.com',
    'Miracle Software Systems': 'https://logo.clearbit.com/miraclesoft.com',
    'TekWissen': 'https://logo.clearbit.com/tekwissen.com',
    'Concentrix': 'https://logo.clearbit.com/concentrix.com',
    'AMTZ': 'https://logo.clearbit.com/amtz.in',
    'Coromandel': 'https://logo.clearbit.com/coromandel.co.in',
    'HPCL': 'https://logo.clearbit.com/hindustanpetroleum.com',
    'Bharat Bank': 'https://logo.clearbit.com/bharatbank.com',
    'Unlox IT Solutions': 'https://logo.clearbit.com/unlox.in',
    'Placement Park': 'https://logo.clearbit.com/placementpark.com',
    'Vivam Software Solutions': 'https://logo.clearbit.com/vivam.in',
    'WNS': 'https://logo.clearbit.com/wns.com',
    'Bajaj Finserv Limited': 'https://logo.clearbit.com/bajajfinserv.in'
  };
  return mapping[name] || `https://logo.clearbit.com/${name.toLowerCase().replace(/\s+/g, '')}.com`;
}

export default function SocialProof() {
  const stats = [
    { icon: Star, value: '4.8/5', label: 'Student Satisfaction', color: 'text-yellow-600' },
    { icon: Award, value: 'NAAC A', label: 'Accreditation (3.01 CGPA)', color: 'text-purple-600' },
    { icon: TrendingUp, value: '95%', label: 'Placement Success', color: 'text-green-600' },
    { icon: ShieldCheck, value: 'ISO', label: '9001:2015 Certified', color: 'text-blue-600' },
  ];

  const logos = [
    'Infosys',
    'Tata Consultancy Services (TCS)',
    'Wipro',
    'Tech Mahindra',
    'Cognizant',
    'HDFC Bank',
    'Miracle Software Systems',
    'TekWissen',
    'Concentrix',
    'AMTZ',
    'Coromandel',
    'HPCL',
    'Bharat Bank',
    'Unlox IT Solutions',
    'Placement Park',
    'Vivam Software Solutions',
    'WNS',
    'Bajaj Finserv Limited'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50/10 to-white border-y border-gray-100 relative overflow-hidden">
      {/* Blurred Background Color Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-purple-200/10 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-pink-200/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </motion.div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="text-center mb-12">
          <motion.p
            className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Students Are Placed At
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                className="flex items-center justify-center h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full min-h-[90px] relative overflow-hidden flex items-center justify-center px-4 py-4 bg-gradient-to-br from-white to-gray-50/50 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 group">
                  {/* Blurred Background Official Logo Image */}
                  <img 
                    src={getLogoUrl(logo)}
                    alt=""
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                    className="absolute right-1 bottom-1 w-16 h-16 opacity-[0.18] filter blur-[0.5px] grayscale pointer-events-none select-none z-0 object-contain transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.28]"
                  />
                  <div className="relative z-10 text-xs sm:text-sm font-extrabold text-gray-700 text-center leading-snug">{logo}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recognition Banner */}
        <motion.div
          className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
          
          <div className="relative text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-300 text-yellow-300" />
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Recognized for Excellence in Women's Education
            </h3>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Awarded by the Ministry of Education for outstanding contribution to empowering women through quality higher education
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
