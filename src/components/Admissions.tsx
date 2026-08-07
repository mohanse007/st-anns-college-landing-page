import { motion } from 'framer-motion';
import { Calendar, FileText, CheckCircle, CreditCard, Award, ArrowRight } from 'lucide-react';

export default function Admissions() {
  const steps = [
    {
      icon: FileText,
      title: 'Online Application',
      description: 'Fill out the online application form with your academic details and preferences.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: CheckCircle,
      title: 'Document Verification',
      description: 'Submit required documents including marks sheets, certificates, and ID proof.',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Award,
      title: 'Entrance Test/Interview',
      description: 'Appear for program-specific entrance test or merit-based interview.',
      color: 'from-pink-500 to-pink-700',
    },
    {
      icon: CreditCard,
      title: 'Fee Payment & Enrollment',
      description: 'Complete the admission process with fee payment and course registration.',
      color: 'from-green-500 to-green-700',
    },
  ];

  const pricing = [
    {
      name: 'Undergraduate Programs',
      price: '₹45,000',
      period: 'per year',
      features: [
        'Full access to campus facilities',
        'Digital library resources',
        'Industry workshops & seminars',
        'Placement assistance',
        'Student clubs & activities',
        'Health & wellness services',
      ],
      popular: false,
    },
    {
      name: 'Postgraduate Programs',
      price: '₹65,000',
      period: 'per year',
      features: [
        'Advanced research facilities',
        'International collaborations',
        'Conference participation',
        'Publication support',
        'Dedicated mentorship',
        'Career advancement support',
      ],
      popular: true,
    },
    {
      name: 'Professional Courses',
      price: '₹25,000',
      period: 'per course',
      features: [
        'Industry-recognized certification',
        'Flexible learning schedule',
        'Expert instructors',
        'Job placement support',
        'Practical training',
        'Online resources',
      ],
      popular: false,
    },
  ];

  return (
    <section id="admissions" className="py-24 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-lg rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Admissions 2026-27</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Simple Admission Process
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Join us in 4 easy steps and start your journey to excellence
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center">
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl mb-4 shadow-xl`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="absolute top-8 left-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center font-bold text-purple-600 text-sm">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-300 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                Affordable Fee Structure
              </span>
            </h3>
            <p className="text-gray-600">Choose the program that fits your goals and budget</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  className={`relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    plan.popular ? 'border-purple-500' : 'border-gray-200'
                  }`}
                  whileHover={{ y: -8 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2 text-gray-900">{plan.name}</h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-500">/ {plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="#contact"
                    className={`block w-full py-3 rounded-full font-semibold text-center transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Now
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Dates */}
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Important Dates</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Application Start Date</span>
                  <span className="font-bold">June 1, 2026</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Application Deadline</span>
                  <span className="font-bold">July 31, 2026</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Entrance Test</span>
                  <span className="font-bold">August 15, 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Session Begins</span>
                  <span className="font-bold">September 1, 2026</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-purple-100 mb-6">
                Don't miss out on this opportunity to join India's premier women's college
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
