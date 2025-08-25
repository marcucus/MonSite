'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes } from 'react-icons/fa';

interface ConsoleCommand {
  command: string;
  output: string | React.ReactNode;
  timestamp: string;
}

const DevConsole: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<ConsoleCommand[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: {
      output: (
        <div className="space-y-1">
          <div className="text-accent-400">Available commands:</div>
          <div className="ml-4 space-y-1 text-gray-300">
            <div><span className="text-primary-400">about</span> - Discover more about Adrien</div>
            <div><span className="text-primary-400">skills</span> - View technical skills</div>
            <div><span className="text-primary-400">projects</span> - Show recent projects</div>
            <div><span className="text-primary-400">contact</span> - Get contact information</div>
            <div><span className="text-primary-400">matrix</span> - Enter the matrix 🕶️</div>
            <div><span className="text-primary-400">joke</span> - Get a developer joke</div>
            <div><span className="text-primary-400">clear</span> - Clear console</div>
            <div><span className="text-primary-400">exit</span> - Close console</div>
          </div>
        </div>
      )
    },
    about: {
      output: (
        <div className="space-y-2">
          <div className="text-accent-400">🚀 Adrien Marques - Développeur Full-Stack</div>
          <div className="text-gray-300">
            Passionné par l'innovation technologique et l'expérience utilisateur.
            J'aime créer des applications qui combinent performance et élégance.
          </div>
          <div className="text-primary-400">Version: Human 1.0 (stable)</div>
          <div className="text-green-400">Status: Ready for new challenges ✅</div>
        </div>
      )
    },
    skills: {
      output: (
        <div className="space-y-2">
          <div className="text-accent-400">📊 Technical Skills:</div>
          <div className="ml-4 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-green-400">●</span>
              <span>React/Next.js</span>
              <div className="w-20 bg-gray-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">●</span>
              <span>PHP/Symfony</span>
              <div className="w-20 bg-gray-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">●</span>
              <span>Docker</span>
              <div className="w-20 bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-[60%]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">●</span>
              <span>Angular</span>
              <div className="w-20 bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-[65%]"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    projects: {
      output: (
        <div className="space-y-2">
          <div className="text-accent-400">🎯 Recent Projects:</div>
          <div className="ml-4 space-y-2">
            <div className="border-l-2 border-primary-400 pl-3">
              <div className="text-primary-400 font-semibold">Portfolio Website</div>
              <div className="text-sm text-gray-400">Next.js, TypeScript, Tailwind CSS</div>
            </div>
            <div className="border-l-2 border-green-400 pl-3">
              <div className="text-green-400 font-semibold">E-commerce Platform</div>
              <div className="text-sm text-gray-400">Symfony, PHP, MySQL</div>
            </div>
            <div className="border-l-2 border-accent-400 pl-3">
              <div className="text-accent-400 font-semibold">Task Management App</div>
              <div className="text-sm text-gray-400">React, Node.js, MongoDB</div>
            </div>
          </div>
        </div>
      )
    },
    contact: {
      output: (
        <div className="space-y-2">
          <div className="text-accent-400">📞 Contact Information:</div>
          <div className="ml-4 space-y-1">
            <div>📧 Email: <span className="text-primary-400">contact@adrienmarques.dev</span></div>
            <div>💼 LinkedIn: <a href="https://linkedin.com/in/adrien-marques-755393181" className="text-primary-400 hover:underline">adrien-marques</a></div>
            <div>🐙 GitHub: <a href="https://github.com/marcucus" className="text-primary-400 hover:underline">marcucus</a></div>
            <div className="text-green-400 text-sm mt-2">💡 Always open to interesting projects!</div>
          </div>
        </div>
      )
    },
    matrix: {
      output: (
        <div className="space-y-2">
          <div className="text-green-400 font-mono">Wake up, Neo...</div>
          <div className="text-green-400 font-mono animate-pulse">The Matrix has you...</div>
          <div className="text-green-400 font-mono">Follow the white rabbit 🐰</div>
          <div className="mt-2 text-red-400">💊 Take the red pill to see the code behind this site!</div>
        </div>
      )
    },
    joke: {
      output: (() => {
        const jokes = [
          "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
          "How many programmers does it take to change a light bulb? None. That's a hardware problem. 💡",
          "Why do Java developers wear glasses? Because they don't see sharp! 👓",
          "A SQL query goes into a bar, walks up to two tables and asks: 'Can I join you?' 🍺",
          "Why did the programmer quit his job? He didn't get arrays! 📊",
          "What's a programmer's favorite hangout place? Foo Bar! 🍻"
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
      })()
    },
    clear: { output: 'CLEAR' },
    exit: { output: 'EXIT' }
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const timestamp = new Date().toLocaleTimeString();
    
    if (trimmedCmd === 'clear') {
      setCommandHistory([]);
      return;
    }
    
    if (trimmedCmd === 'exit') {
      setIsOpen(false);
      return;
    }

    const command: ConsoleCommand = {
      command: cmd,
      output: commands[trimmedCmd as keyof typeof commands]?.output || 
              <span className="text-red-400">Command not found. Type 'help' for available commands.</span>,
      timestamp
    };

    setCommandHistory(prev => [...prev, command]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (currentInput.trim()) {
        executeCommand(currentInput);
        setCurrentInput('');
        setHistoryIndex(-1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]?.command || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]?.command || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open console with Ctrl+` or Ctrl+Shift+C
      if ((e.ctrlKey && e.key === '`') || (e.ctrlKey && e.shiftKey && e.key === 'C')) {
        e.preventDefault();
        setIsOpen(true);
      }
      
      // Close console with Escape
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [commandHistory]);

  // Welcome message when first opened
  useEffect(() => {
    if (isOpen && commandHistory.length === 0) {
      setCommandHistory([{
        command: '',
        output: (
          <div className="space-y-2">
            <div className="text-accent-400">🎉 Welcome to Adrien's Developer Console!</div>
            <div className="text-gray-300">Type 'help' to see available commands.</div>
            <div className="text-sm text-gray-500">Pro tip: Use ↑/↓ arrows to navigate command history</div>
          </div>
        ),
        timestamp: new Date().toLocaleTimeString()
      }]);
    }
  }, [isOpen]);

  return (
    <>
      {/* Console trigger button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-3 bg-dark-800 glass border border-primary-500/50 rounded-full text-primary-400 hover:text-white hover:bg-primary-500/20 transition-all duration-300 z-50 group"
        title="Open Developer Console (Ctrl+`)"
      >
        <FaTerminal className="w-5 h-5" />
        <div className="absolute -top-12 right-0 bg-dark-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Developer Console
        </div>
      </motion.button>

      {/* Console overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-0 left-0 right-0 h-2/3 bg-dark-900 border-t border-primary-500/30 flex flex-col"
            >
              {/* Console header */}
              <div className="flex items-center justify-between p-4 border-b border-primary-500/30">
                <div className="flex items-center gap-2">
                  <FaTerminal className="text-primary-400" />
                  <span className="text-white font-mono">Developer Console</span>
                  <span className="text-gray-500 text-sm">v1.0.0</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Console output */}
              <div
                ref={consoleRef}
                className="flex-1 p-4 overflow-y-auto font-mono text-sm space-y-3 console-container"
              >
                {commandHistory.map((cmd, index) => (
                  <div key={index} className="space-y-1">
                    {cmd.command && (
                      <div className="flex items-center gap-2">
                        <span className="text-primary-400">$</span>
                        <span className="text-white">{cmd.command}</span>
                        <span className="text-gray-500 text-xs ml-auto">{cmd.timestamp}</span>
                      </div>
                    )}
                    <div className="pl-4">{cmd.output}</div>
                  </div>
                ))}
              </div>

              {/* Console input */}
              <div className="p-4 border-t border-primary-500/30">
                <div className="flex items-center gap-2">
                  <span className="text-primary-400 font-mono">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="flex-1 bg-transparent text-white font-mono outline-none"
                    placeholder="Type a command..."
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DevConsole;