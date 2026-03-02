import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiTrendingUp, 
  FiX, 
  FiClock,  // ✅ FiHistory replaced with FiClock
  FiMic, 
  FiCamera, 
  FiFileText, 
  FiCode, 
  FiGlobe, 
  FiStar 
} from 'react-icons/fi';

const SearchBar = ({ onSearch, isLoading, trending = [], placeholder = "Ask AI anything..." }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Generate suggestions based on input
  useEffect(() => {
    if (query.length > 1) {
      const allSuggestions = [
        'React component with hooks',
        'Python data analysis script',
        'Modern portfolio website',
        'E-commerce with Tailwind',
        'Fix JavaScript error',
        'Create REST API',
        'Build a chatbot',
        'Machine learning model'
      ];
      const filtered = allSuggestions.filter(s => 
        s.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (query.trim()) {
      // Save to recent searches
      const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
      
      onSearch(query);
      setShowSuggestions(false);
    }
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsListening(true);
      // Simulate voice recognition
      setTimeout(() => {
        setQuery('How to build a React app');
        setIsListening(false);
      }, 2000);
    } else {
      alert('Voice search is not supported in your browser');
    }
  };

  const clearSearch = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative" ref={suggestionsRef}>
      <form onSubmit={handleSubmit} className="relative">
        {/* Main Input */}
        <div className="relative group">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder={placeholder}
            className="w-full px-6 py-5 pl-14 pr-36 text-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-all shadow-xl group-hover:shadow-2xl"
          />
          
          {/* Search Icon */}
          <FiSearch className="absolute left-5 top-6 text-2xl text-gray-400" />
          
          {/* Right Buttons */}
          <div className="absolute right-3 top-3 flex items-center space-x-2">
            {/* Voice Search */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={handleVoiceSearch}
              className={`p-2 rounded-lg transition ${
                isListening 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500'
              }`}
            >
              <FiMic />
            </motion.button>

            {/* Clear Button */}
            {query && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                type="button"
                onClick={clearSearch}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                <FiX className="text-gray-500" />
              </motion.button>
            )}
            
            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isLoading}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg disabled:opacity-50 flex items-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Thinking...</span>
                </>
              ) : (
                <>
                  <FiSearch />
                  <span>Search</span>
                </>
              )}
            </motion.button>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap gap-2 mt-3">
          <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm flex items-center space-x-1 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition">
            <FiCode className="text-purple-600" />
            <span>Code</span>
          </button>
          <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm flex items-center space-x-1 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition">
            <FiGlobe className="text-green-600" />
            <span>Website</span>
          </button>
          <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm flex items-center space-x-1 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition">
            <FiFileText className="text-blue-600" />
            <span>Blog</span>
          </button>
        </div>
      </form>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {showSuggestions && (query.length > 0 || recentSearches.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Recent Searches */}
            {recentSearches.length > 0 && query.length === 0 && (
              <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 mb-2 text-sm text-gray-500">
                  <FiClock />  {/* ✅ FiHistory replaced with FiClock */}
                  <span>Recent Searches</span>
                </div>
                <div className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(search);
                        handleSubmit();
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center space-x-2"
                    >
                      <FiSearch className="text-gray-400 text-sm" />
                      <span className="dark:text-white">{search}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="p-3">
                <div className="flex items-center space-x-2 mb-2 text-sm text-gray-500">
                  <FiTrendingUp />
                  <span>Suggestions</span>
                </div>
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(suggestion);
                        handleSubmit();
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center space-x-2"
                    >
                      <FiStar className="text-yellow-500 text-sm" />
                      <span className="dark:text-white">{suggestion}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Trending Searches */}
            {trending.length > 0 && query.length === 0 && (
              <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 mb-2 text-sm text-gray-500">
                  <FiTrendingUp />
                  <span>Trending Now</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trending.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(item);
                        handleSubmit();
                      }}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm hover:bg-purple-100 dark:hover:bg-purple-900/30 transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;