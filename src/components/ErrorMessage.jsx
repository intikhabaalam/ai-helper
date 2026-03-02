import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertCircle, FiRefreshCw, FiX } from 'react-icons/fi';

const ErrorMessage = ({ 
  message = 'Something went wrong', 
  onRetry, 
  onDismiss,
  details 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <FiAlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
        </div>
        
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
            {message}
          </h3>
          
          {details && (
            <div className="mt-2 text-sm text-red-700 dark:text-red-300">
              <p>{details}</p>
            </div>
          )}
          
          <div className="mt-4 flex space-x-3">
            {onRetry && (
              <button
                onClick={onRetry}
                className="flex items-center space-x-1 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-500"
              >
                <FiRefreshCw />
                <span>Try again</span>
              </button>
            )}
          </div>
        </div>
        
        {onDismiss && (
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={onDismiss}
              className="inline-flex text-red-600 dark:text-red-400 hover:text-red-500"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ErrorMessage;