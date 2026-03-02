import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMonitor, FiSmartphone, FiTablet, FiRefreshCw,
  FiDownload, FiCopy, FiMaximize2, FiCode 
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const WebsitePreview = ({ html, onRefresh, onDownload, onCopy }) => {
  const [viewMode, setViewMode] = useState('desktop');
  const [showCode, setShowCode] = useState(false);

  const viewports = {
    desktop: { width: '100%', height: '600px' },
    tablet: { width: '768px', height: '1024px' },
    mobile: { width: '375px', height: '667px' }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(html);
    toast.success('HTML copied!');
  };

  const handleDownload = () => {
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'website.html';
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Website downloaded!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div className="px-4 py-3 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="font-medium dark:text-white">Website Preview</span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Viewport Controls */}
            <div className="flex items-center space-x-1 bg-white dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('desktop')}
                className={`p-1.5 rounded ${
                  viewMode === 'desktop' 
                    ? 'bg-purple-600 text-white' 
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                title="Desktop"
              >
                <FiMonitor />
              </button>
              <button
                onClick={() => setViewMode('tablet')}
                className={`p-1.5 rounded ${
                  viewMode === 'tablet' 
                    ? 'bg-purple-600 text-white' 
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                title="Tablet"
              >
                <FiTablet />
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`p-1.5 rounded ${
                  viewMode === 'mobile' 
                    ? 'bg-purple-600 text-white' 
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                title="Mobile"
              >
                <FiSmartphone />
              </button>
            </div>

            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>

            {/* Actions */}
            <button
              onClick={() => setShowCode(!showCode)}
              className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
              title="View Code"
            >
              <FiCode />
            </button>
            <button
              onClick={handleCopy}
              className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
              title="Copy HTML"
            >
              <FiCopy />
            </button>
            <button
              onClick={handleDownload}
              className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
              title="Download"
            >
              <FiDownload />
            </button>
            <button
              onClick={() => window.open().document.write(html)}
              className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
              title="Open in new tab"
            >
              <FiMaximize2 />
            </button>
            {onRefresh && (
              <button
                onClick={onRefresh}
                className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                title="Refresh"
              >
                <FiRefreshCw />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="bg-gray-50 dark:bg-gray-900 p-4 overflow-auto">
        <div className="flex justify-center">
          <div
            style={{
              width: viewports[viewMode].width,
              height: viewports[viewMode].height,
              transition: 'all 0.3s'
            }}
            className="bg-white shadow-2xl rounded-lg overflow-hidden"
          >
            <iframe
              srcDoc={`
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src="https://cdn.tailwindcss.com"></script>
                    <style>
                      * { transition: all 0.2s; }
                    </style>
                  </head>
                  <body>
                    ${html}
                  </body>
                </html>
              `}
              className="w-full h-full"
              title="Website Preview"
              sandbox="allow-scripts"
            />
          </div>
        </div>
      </div>

      {/* Code View */}
      {showCode && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          className="border-t border-gray-200 dark:border-gray-700"
        >
          <div className="bg-gray-900 text-gray-100 p-4 font-mono text-sm overflow-auto max-h-96">
            <pre>{html}</pre>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default WebsitePreview;