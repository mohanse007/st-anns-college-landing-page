import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="relative inline-block"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        >
          <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50" />
          <div className="relative bg-white p-6 rounded-full">
            <GraduationCap className="w-12 h-12 text-purple-600" />
          </div>
        </motion.div>
        
        <motion.h2
          className="text-white text-2xl font-bold mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          St.Ann's College
        </motion.h2>
        
        <motion.div
          className="flex gap-2 justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
