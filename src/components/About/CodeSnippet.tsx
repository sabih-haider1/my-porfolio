import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="relative max-w-md rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-700/60 backdrop-blur-lg shadow-xl border border-white/10 p-6 font-mono mx-auto">
      <button
        onClick={handleCopy}
        aria-label="Copy code to clipboard"
        className="absolute top-4 right-4 text-gray-400 hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded transition-colors"
        tabIndex={0}
      >
        <Copy size={18} />
      </button>
      <pre className="text-emerald-400 text-sm whitespace-pre-wrap select-all dark:text-emerald-400 text-left">
        {code}
      </pre>
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-2 right-4 text-xs text-cyan-400 bg-gray-900/80 px-2 py-1 rounded shadow-lg pointer-events-none"
            role="status"
            aria-live="polite"
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CodeSnippet; 