import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCopy, FiDownload, FiExternalLink, FiStar, FiThumbsUp,
  FiThumbsDown, FiShare2, FiBookmark, FiMoreHorizontal,
  FiCheck, FiClock, FiUser, FiCalendar, FiEye, FiGlobe
} from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import toast from 'react-hot-toast';

const ResultCard = ({ result, type, onFeedback }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [copied, setCopied] = useState(false);

  // Safety check - agar result undefined ho to
  if (!result) {
    return (
      <div className="text-center py-8 text-gray-500">
        No result to display
      </div>
    );
  }

  const copyToClipboard = async (text, message = 'Copied to clipboard!') => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success(message);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadFile = (content, filename) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('File downloaded!');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'AI Helper Result',
          text: 'Check out this AI-generated result!',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      copyToClipboard(window.location.href, 'Link copied to clipboard!');
    }
  };

  // Code Result View
  if (type === 'code') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="font-semibold dark:text-white">{result.language || 'Code'}</span>
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">AI Generated</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => copyToClipboard(result.code)}
                className="p-2 hover:bg-white/20 rounded-lg transition relative"
              >
                {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => downloadFile(result.code, `code.${result.language || 'txt'}`)}
                className="p-2 hover:bg-white/20 rounded-lg transition"
              >
                <FiDownload />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 hover:bg-white/20 rounded-lg transition ${
                  isBookmarked ? 'text-yellow-500' : ''
                }`}
              >
                <FiBookmark />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleShare}
                className="p-2 hover:bg-white/20 rounded-lg transition"
              >
                <FiShare2 />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Code Content */}
        <div className="relative">
          <SyntaxHighlighter
            language={result.language?.toLowerCase() || 'javascript'}
            style={vscDarkPlus}
            showLineNumbers
            wrapLines
            className="!m-0 !rounded-none"
          >
            {result.code || '// No code provided'}
          </SyntaxHighlighter>
        </div>

        {/* Explanation */}
        {result.explanation && (
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3 dark:text-white flex items-center">
              <FiStar className="mr-2 text-yellow-500" />
              Explanation
            </h3>
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{result.explanation}</ReactMarkdown>
            </div>
          </div>
        )}

        {/* Suggestions */}
        {result.suggestions && result.suggestions.length > 0 && (
          <div className="px-6 pb-6">
            <h4 className="font-semibold mb-3 dark:text-white">💡 Suggestions for Improvement</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {result.suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm flex items-start space-x-2"
                >
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="dark:text-gray-300">{suggestion}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Feedback Section */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Was this helpful?</span>
              <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg">
                <FiThumbsUp />
              </button>
              <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg">
                <FiThumbsDown />
              </button>
            </div>
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-sm text-purple-600 hover:underline flex items-center"
            >
              More options
              <FiMoreHorizontal className="ml-1" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Website Result View
  if (type === 'website') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FiGlobe className="text-2xl text-purple-600" />
                <span className="font-semibold dark:text-white">Website Preview</span>
                <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded-full">
                  Live
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => copyToClipboard(result.html || result)}
                  className="p-2 hover:bg-white/20 rounded-lg transition"
                >
                  <FiCopy />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => downloadFile(result.html || result, 'website.html')}
                  className="p-2 hover:bg-white/20 rounded-lg transition"
                >
                  <FiDownload />
                </motion.button>
              </div>
            </div>

            {/* Preview Controls */}
            <div className="flex items-center space-x-4 mt-2 text-sm">
              <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600">
                <FiEye />
                <span>Desktop</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600">
                <FiEye />
                <span>Tablet</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600">
                <FiEye />
                <span>Mobile</span>
              </button>
            </div>
          </div>

          {/* Preview Frame */}
          <div className="bg-gray-50 dark:bg-gray-900 p-4">
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
                  <body class="bg-white dark:bg-gray-900">
                    ${result.html || result}
                  </body>
                </html>
              `}
              className="w-full h-[600px] rounded-lg shadow-inner"
              title="Website Preview"
              sandbox="allow-scripts"
            />
          </div>
        </div>

        {/* Website Info */}
        {result.description && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
            <h4 className="font-semibold mb-2 dark:text-white">Website Details</h4>
            <p className="text-gray-600 dark:text-gray-300">{result.description}</p>
          </div>
        )}
      </motion.div>
    );
  }

  // Search Result View - ✅ FIXED (removed moreResults)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Main Result */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
            <span className="flex items-center">
              <FiUser className="mr-1" />
              AI Assistant
            </span>
            <span className="flex items-center">
              <FiClock className="mr-1" />
              Just now
            </span>
            <span className="flex items-center">
              <FiEye className="mr-1" />
              1.2k views
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-3 dark:text-white">
            {result.title || 'Search Results'}
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {result.description || 'Here are the results for your search'}
          </p>

          {/* Links - ✅ WITH SAFETY CHECK */}
          <div className="space-y-4">
            {result.links && result.links.length > 0 ? (
              result.links.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition cursor-pointer"
                  onClick={() => link.url && window.open(link.url, '_blank')}
                >
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-1 group-hover:underline">
                    {link.title || 'Untitled Link'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {link.desc || link.description || 'No description available'}
                  </p>
                  {link.url && (
                    <span className="text-xs text-gray-500 flex items-center">
                      {link.url}
                      <FiExternalLink className="ml-1" />
                    </span>
                  )}
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                No links available for this result
              </p>
            )}
          </div>

          {/* Related Topics - ✅ WITH SAFETY CHECK */}
          {result.related && result.related.length > 0 && (
            <div className="mt-6 pt-6 border-t dark:border-gray-700">
              <h4 className="font-semibold mb-3 dark:text-white">Related Topics</h4>
              <div className="flex flex-wrap gap-2">
                {result.related.map((item, index) => (
                  <button
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm hover:bg-purple-100 dark:hover:bg-purple-900/30 transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Content - ✅ WITH SAFETY CHECK */}
          {result.content && (
            <div className="mt-6 pt-6 border-t dark:border-gray-700">
              <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown>{result.content}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>

        {/* Action Bar */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600">
                <FiThumbsUp />
                <span>24</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600">
                <FiThumbsDown />
                <span>3</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600">
                <FiShare2 />
                <span>Share</span>
              </button>
            </div>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center space-x-1 ${
                isBookmarked ? 'text-yellow-500' : 'text-gray-500 hover:text-purple-600'
              }`}
            >
              <FiBookmark />
              <span>{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;