import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiCode, FiGlobe, FiStar } from 'react-icons/fi';

const EmptyState = ({ 
  type = 'search', 
  title, 
  description,
  action,
  onAction 
}) => {
  const icons = {
    search: FiSearch,
    code: FiCode,
    website: FiGlobe,
    star: FiStar
  };

  const Icon = icons[type] || FiSearch;

  const defaultMessages = {
    search: {
      title: 'Start Your Search',
      description: 'Type something in the search bar to get AI-powered results'
    },
    code: {
      title: 'Ready to Write Code',
      description: 'Select a language and start coding with AI assistance'
    },
    website: {
      title: 'Build Your Website',
      description: 'Describe your dream website and let AI create it'
    }
  };

  const msg = {
    title: title || defaultMessages[type]?.title || 'Welcome to AI Helper',
    description: description || defaultMessages[type]?.description || 'Get started with AI-powered assistance'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16 px-4"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="inline-flex p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl mb-6"
      >
        <Icon className="w-12 h-12 text-purple-600 dark:text-purple-400" />
      </motion.div>

      <h3 className="text-2xl font-bold mb-2 dark:text-white">
        {msg.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
        {msg.description}
      </p>

      {action && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAction}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg"
        >
          {action}
        </motion.button>
      )}

      {/* Suggestions */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
          Try "React component"
        </span>
        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
          "Portfolio website"
        </span>
        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
          "Fix Python code"
        </span>
      </div>
    </motion.div>
  );
};

export default EmptyState;