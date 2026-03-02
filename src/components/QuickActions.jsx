import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiGlobe, FiSearch, FiFileText,
  FiImage, FiVideo, FiMusic, FiBook
} from 'react-icons/fi';

const QuickActions = ({ onAction }) => {
  const actions = [
    { icon: FiCode, label: 'Write Code', color: 'from-blue-500 to-cyan-500' },
    { icon: FiGlobe, label: 'Build Website', color: 'from-purple-500 to-pink-500' },
    { icon: FiFileText, label: 'Write Blog', color: 'from-green-500 to-emerald-500' },
    { icon: FiImage, label: 'Generate Image', color: 'from-orange-500 to-red-500' },
    { icon: FiVideo, label: 'Create Video', color: 'from-pink-500 to-rose-500' },
    { icon: FiMusic, label: 'Compose Music', color: 'from-indigo-500 to-purple-500' },
    { icon: FiBook, label: 'Summarize Text', color: 'from-yellow-500 to-orange-500' },
    { icon: FiSearch, label: 'Research', color: 'from-teal-500 to-cyan-500' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onAction?.(action.label)}
          className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
          
          {/* Icon */}
          <div className={`relative z-10 w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center text-white text-2xl`}>
            <action.icon />
          </div>
          
          {/* Label */}
          <h3 className="relative z-10 font-medium text-center dark:text-white">
            {action.label}
          </h3>
          
          {/* Hint */}
          <p className="relative z-10 text-xs text-center text-gray-500 mt-1">
            Click to start
          </p>
        </motion.button>
      ))}
    </div>
  );
};

export default QuickActions;