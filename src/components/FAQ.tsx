import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are the eligibility criteria for admission?',
      answer: 'For undergraduate programs, you need to have completed 10+2 or equivalent with minimum 50% marks. For postgraduate programs, a relevant bachelor\'s degree with 55% marks is required. Specific programs may have additional requirements.',
    },
    {
      question: 'Is there any entrance examination?',
      answer: 'Yes, we conduct entrance examinations for certain programs. Merit-based admission is also available for select courses. The entrance test evaluates aptitude, subject knowledge, and communication skills.',
    },
    {
      question: 'What is the fee structure and payment options?',
      answer: 'Our fee structure is competitive and varies by program. We offer flexible payment options including semester-wise, annual, and installment plans. Financial aid and scholarships are available for eligible students.',
    },
    {
      question: 'Do you provide hostel facilities?',
      answer: 'Yes, we have modern hostel facilities with separate blocks, 24/7 security, wifi connectivity, mess services, and recreational facilities. Priority is given to outstation students.',
    },
    {
      question: 'What kind of placement support do you offer?',
      answer: 'Our dedicated placement cell works year-round to connect students with top companies. We have a 95% placement record with packages ranging from 3-50 LPA. We also provide resume building, interview preparation, and career counseling.',
    },
    {
      question: 'Are there scholarship opportunities available?',
      answer: 'Yes, we offer merit-based scholarships, need-based financial aid, and special scholarships for sports and cultural achievements. Up to 100% fee waiver is available for exceptional students.',
    },
    {
      question: 'What is the student-faculty ratio?',
      answer: 'We maintain a healthy student-faculty ratio of 15:1 to ensure personalized attention and quality education. Our faculty members are highly qualified with PhDs and extensive industry experience.',
    },
    {
      question: 'Can I pursue international exchange programs?',
      answer: 'Absolutely! We have partnerships with over 50 universities worldwide. Students can participate in semester exchange programs, summer schools, and collaborative research projects.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <HelpCircle className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Got Questions?</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about admissions, programs, and campus life
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.div
                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'border-purple-300 shadow-lg shadow-purple-100'
                    : 'border-gray-200 hover:border-purple-200'
                }`}
                whileHover={{ scale: openIndex === index ? 1 : 1.01 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      openIndex === index
                        ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            Still have questions? Our admission counselors are here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Admission Office
            </motion.a>
            <motion.a
              href="tel:+918978098870"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-purple-300 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Call: +91 8978098870
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
