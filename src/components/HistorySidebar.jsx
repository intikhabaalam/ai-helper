import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiClock, FiSearch, FiCode, FiGlobe, FiStar,
  FiMoreVertical, FiTrash2, FiArchive, FiX
} from 'react-icons/fi';

const HistorySidebar = ({ isOpen, onClose, history = [], onSelect, onClear }) => {
  const [filter, setFilter] = useState('all');

  const getIcon = (type) => {
    switch(type) {
      case 'code': return FiCode;
      case 'website': return FiGlobe;
      default: return FiSearch;
    }
  };

  const filteredHistory = filter === 'all' 
    ? history 
    : history.filter(item => item.type === filter);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed right-0 top-0 bottom-0 w-96 bg-white dark:bg-gray-800 shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <FiClock className="text-purple-600" />
                  <h2 className="text-lg font-semibold dark:text-white">History</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <FiX />
                </button>
              </div>

              {/* Filters */}
              <div className="flex space-x-2">
                {['all', 'search', 'code', 'website'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1 rounded-lg text-sm capitalize ${
                      filter === f
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* History List */}
            <div className="overflow-y-auto h-full pb-20">
              {filteredHistory.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No history found
                </div>
              ) : (
                <div className="p-4 space-y-3">
                  {filteredHistory.map((item, index) => {
                    const Icon = getIcon(item.type);
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition cursor-pointer"
                        onClick={() => onSelect(item)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                            <Icon className="text-purple-600" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <p className="font-medium dark:text-white truncate">
                              {item.query}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(item.timestamp).toLocaleString()}
                            </p>
                          </div>

                          {/* Actions */}
                          <div className="opacity-0 group-hover:opacity-100 transition">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                // Handle delete
                              }}
                              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                            >
                              <FiTrash2 className="text-red-500" />
                            </button>
                          </div>
                        </div>

                        {/* Preview */}
                        {item.result && (
                          <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            {typeof item.result === 'string' 
                              ? item.result.substring(0, 100) + '...'
                              : item.result.title || 'View result'}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={onClear}
                className="w-full px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition flex items-center justify-center space-x-2"
              >
                <FiTrash2 />
                <span>Clear History</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HistorySidebar;