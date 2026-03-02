import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';
import { 
  FiPlay, FiSave, FiRefreshCw, FiMaximize2, 
  FiMinimize2, FiSettings, FiCode, FiCopy 
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const CodeEditor = ({ 
  value, 
  onChange, 
  language = 'javascript',
  theme = 'vs-dark',
  readOnly = false,
  onRun,
  onSave
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [showSettings, setShowSettings] = useState(false);

  const languages = [
    'javascript', 'typescript', 'python', 'java', 'c++', 
    'go', 'rust', 'php', 'ruby', 'swift'
  ];

  const themes = ['vs-dark', 'light', 'hc-black'];

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    toast.success('Code copied!');
  };

  const handleFormat = () => {
    // In a real app, you'd use prettier or similar
    toast.success('Code formatted!');
  };

  const handleRun = () => {
    if (onRun) {
      onRun(value);
    } else {
      toast('Execution simulated', { icon: '🚀' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden ${
        isFullscreen ? 'fixed inset-4 z-50' : ''
      }`}
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          
          <select
            value={language}
            onChange={(e) => onChange?.(e.target.value)}
            className="ml-4 px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600"
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
            title="Copy"
          >
            <FiCopy />
          </button>
          <button
            onClick={handleFormat}
            className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
            title="Format"
          >
            <FiCode />
          </button>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
            title="Settings"
          >
            <FiSettings />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
          </button>
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-1"></div>
          <button
            onClick={handleRun}
            className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 flex items-center space-x-1"
          >
            <FiPlay />
            <span>Run</span>
          </button>
          <button
            onClick={onSave}
            className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 flex items-center space-x-1"
          >
            <FiSave />
            <span>Save</span>
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">Font Size:</span>
              <input
                type="range"
                min="10"
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-24"
              />
              <span className="text-sm dark:text-white">{fontSize}px</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">Theme:</span>
              <select
                value={theme}
                onChange={(e) => onChange?.(e.target.value)}
                className="px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded border"
              >
                {themes.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
      )}

      {/* Editor */}
      <Editor
        height={isFullscreen ? 'calc(100vh - 100px)' : '400px'}
        language={language}
        theme={theme}
        value={value}
        onChange={onChange}
        options={{
          fontSize,
          minimap: { enabled: false },
          wordWrap: 'on',
          automaticLayout: true,
          scrollBeyondLastLine: false,
          lineNumbers: 'on',
          readOnly,
          folding: true,
          bracketPairColorization: { enabled: true },
          renderWhitespace: 'selection',
          tabSize: 2,
        }}
      />
    </motion.div>
  );
};

export default CodeEditor;