"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { useAi } from '@/context/AiContext';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';

const AiModal = () => {
  const { isAiModalOpen, closeAiModal } = useAi();
  const { t, language } = useLanguage();
  const router = useRouter();

  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  const handleGenerateProjectPlan = async () => {
    if (!aiPrompt.trim()) return;

    setIsAiLoading(true);
    setAiError('');
    setAiResponse(null);

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: aiPrompt,
          language: language
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t.ai.error);
      }

      setAiResponse(data.text);
    } catch (err) {
      console.error(err);
      setAiError(t.ai.error);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleDiscussPlan = () => {
    if (aiResponse) {
      const formattedMessage = `
Client Vision / Prompt:
${aiPrompt}

----------------------------------------

AI Architect Suggested Plan:
${aiResponse}
      `.trim();

      sessionStorage.setItem('grozan-ai-plan', formattedMessage);
      closeAiModal();
      router.push('/contact');
    }
  };

  return (
    <AnimatePresence>
      {isAiModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  <Bot className="text-indigo-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.ai.modalTitle}</h3>
                  <p className="text-sm text-slate-400">{t.ai.modalDesc}</p>
                </div>
              </div>
              <button
                onClick={closeAiModal}
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-grow custom-scrollbar text-left">
              {!aiResponse ? (
                <div className="space-y-6">
                  <div>
                    <textarea
                      className="w-full h-32 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-500"
                      placeholder={t.ai.placeholder}
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                    ></textarea>
                  </div>

                  {aiError && (
                    <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg">
                      {aiError}
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      onClick={handleGenerateProjectPlan}
                      disabled={isAiLoading || !aiPrompt.trim()}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAiLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {t.ai.analyzing}
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          {t.ai.generateBtn}
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-8">
                    <p className="text-xs text-slate-500 uppercase font-semibold mb-3">{t.ai.examplesTitle}</p>
                    <div className="flex flex-wrap gap-2">
                      {t.ai.examples.map(tag => (
                        <button
                          key={tag}
                          onClick={() => setAiPrompt(tag)}
                          className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-400 hover:border-indigo-500 hover:text-indigo-400 transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 prose prose-invert max-w-none">
                    <h4 className="text-indigo-400 font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      {t.ai.resultTitle}
                    </h4>
                    <div className="whitespace-pre-line text-slate-300 leading-relaxed">
                      {aiResponse}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                    <button
                      onClick={() => setAiResponse(null)}
                      className="text-slate-400 hover:text-white text-sm"
                    >
                      ← {t.ai.backBtn}
                    </button>
                    <button
                      onClick={handleDiscussPlan}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-colors"
                    >
                      {t.ai.discussBtn}
                    </button>
                  </div>
                </div>
              )}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AiModal;
