import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', text = 'Processing...' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className={`${sizes[size]} border-4 border-purple-200 dark:border-purple-900 border-t-purple-600 rounded-full`}
        />
        
        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className={`absolute inset-2 ${sizes[size].replace('w-', 'w-').replace('h-', 'h-')} border-4 border-pink-200 dark:border-pink-900 border-t-pink-600 rounded-full`}
        />
        
        {/* Center Dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className={`absolute inset-0 m-auto ${sizes[size].replace('w-', 'w-').replace('h-', 'h-')} bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-50`}
        />
      </div>
      
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-gray-600 dark:text-gray-300"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default LoadingSpinner;