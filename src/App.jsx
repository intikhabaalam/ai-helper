import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { 
  setQuery, 
  setType, 
  setLanguage,
  clearResult 
} from './features/aiSlice';
import { toggleDarkMode } from './features/themeSlice';
import { addToHistory } from './features/historySlice';
import { aiService } from './features/aiService'; // ✅ Direct import
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
import CodeEditor from './components/CodeEditor';
import WebsitePreview from './components/WebsitePreview';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import EmptyState from './components/EmptyState';
import HistorySidebar from './components/HistorySidebar';
import QuickActions from './components/QuickActions';
import { FiZap, FiCpu, FiCloud, FiShield, FiAward } from 'react-icons/fi';

function App() {
  const dispatch = useDispatch();
  
  // Redux state
  const { 
    query, 
    result, 
    status, 
    error, 
    type, 
    language,
    isLoading 
  } = useSelector((state) => state.ai);
  
  const { darkMode } = useSelector((state) => state.theme);
  const { items: historyItems } = useSelector((state) => state.history);
  
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [trendingSearches] = useState([
    'Build a Netflix clone with React',
    'Fix Python recursion error',
    'Create AI chatbot',
    'Modern portfolio website',
    'E-commerce with Tailwind',
    'React hooks best practices'
  ]);

  // Handle search - ✅ FIXED: ab aiService.askAI call karega
  const handleSearch = async (searchQuery) => {
    if (!searchQuery.trim()) {
      toast.error('Please enter something to search');
      return;
    }

    dispatch(setQuery(searchQuery));
    
    try {
      // ✅ Direct call to aiService.askAI
      const response = await aiService.askAI(searchQuery);
      
      // Dispatch success
      dispatch({
        type: 'ai/processQuery/fulfilled',
        payload: response
      });
      
      toast.success('Got your answer!');
    } catch (err) {
      // Dispatch error
      dispatch({
        type: 'ai/processQuery/rejected',
        error: err.message
      });
      toast.error('Failed to get response');
    }
  };

  // Handle tab change
  const handleTabChange = (newTab) => {
    dispatch(setType(newTab));
    dispatch(clearResult());
  };

  // Handle code change
  const handleCodeChange = (newCode) => {
    dispatch(setQuery(newCode));
  };

  // Handle language change
  const handleLanguageChange = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
  };

  // Handle history item click
  const handleHistorySelect = (item) => {
    dispatch(setQuery(item.query));
    dispatch(setType(item.type));
    if (item.result) {
      dispatch({
        type: 'ai/processQuery/fulfilled',
        payload: item.result
      });
    }
  };

  // Add to history when result is received
  useEffect(() => {
    if (result && status === 'succeeded') {
      dispatch(addToHistory({
        query,
        result,
        type,
        timestamp: new Date().toISOString()
      }));
    }
  }, [result, status, query, type, dispatch]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-gray-50'
    }`}>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: darkMode ? '#1f2937' : '#ffffff',
            color: darkMode ? '#ffffff' : '#000000',
          },
        }}
      />
      
      <Navbar 
        darkMode={darkMode}
        setDarkMode={() => dispatch(toggleDarkMode())}
        activeTab={type}
        setActiveTab={handleTabChange}
        onHistoryClick={() => setIsHistoryOpen(true)}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                AI Helper
              </span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your intelligent assistant for code, websites, and everything in between
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: FiZap, title: 'Lightning Fast', desc: 'Responses in seconds' },
              { icon: FiCpu, title: 'AI Powered', desc: 'Advanced language models' },
              { icon: FiCloud, title: 'Cloud Ready', desc: 'Access anywhere' },
              { icon: FiShield, title: 'Secure', desc: 'Your data is safe' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl"
              >
                <feature.icon className="text-3xl text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Search Bar */}
          <SearchBar 
            onSearch={handleSearch}
            isLoading={status === 'loading'}
            trending={trendingSearches}
            placeholder={type === 'code' 
              ? "Describe the code you need or paste code to fix..." 
              : type === 'website'
              ? "Describe the website you want to build..."
              : "Ask AI anything... (e.g., 'React component', 'Portfolio website', 'Fix Python code')"
            }
          />

          {/* Quick Actions */}
          <div className="mt-8">
            <QuickActions 
              onAction={(action) => {
                handleSearch(action);
              }} 
            />
          </div>

          {/* Main Content Area */}
          <AnimatePresence mode="wait">
            {status === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-8"
              >
                <LoadingSpinner text="AI is processing your request..." />
              </motion.div>
            )}

            {error && status !== 'loading' && (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-8"
              >
                <ErrorMessage 
                  message={error}
                  onRetry={() => handleSearch(query)}
                  onDismiss={() => dispatch(clearResult())}
                  details="Please check your input and try again"
                />
              </motion.div>
            )}

            {status !== 'loading' && !error && !result && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-8"
              >
                <EmptyState 
                  type={type}
                  action="Get Started"
                  onAction={() => {
                    handleSearch(type === 'code' 
                      ? 'Create a React component' 
                      : type === 'website'
                      ? 'Create a modern portfolio'
                      : 'How to learn React');
                  }}
                />
              </motion.div>
            )}

            {result && status !== 'loading' && !error && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8"
              >
                {type === 'code' ? (
                  <CodeEditor
                    value={result.code || result}
                    language={language}
                    onChange={handleCodeChange}
                    readOnly
                  />
                ) : type === 'website' ? (
                  <WebsitePreview
                    html={result.html || result}
                    onRefresh={() => handleSearch(query)}
                  />
                ) : (
                  <ResultCard
                    result={result}
                    type={type}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stats Section */}
          {!result && status !== 'loading' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { icon: FiAward, stat: '10K+', label: 'Happy Users' },
                { icon: FiCpu, stat: '1M+', label: 'Queries Processed' },
                { icon: FiCloud, stat: '99.9%', label: 'Uptime' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="text-3xl text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold dark:text-white">{item.stat}</div>
                  <div className="text-gray-600 dark:text-gray-300">{item.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-8 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>© 2024 AI Helper. All rights reserved.</p>
        <p className="text-sm mt-2">Powered by cutting-edge AI technology</p>
      </footer>

      {/* History Sidebar */}
      <HistorySidebar 
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={historyItems}
        onSelect={handleHistorySelect}
        onClear={() => {
          // Clear history logic
        }}
      />
    </div>
  );
}

export default App;