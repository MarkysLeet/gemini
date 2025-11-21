"use client";

import React from 'react';
import { Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from './ScrollReveal';

const SpeedReliability = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-900/50 border-y border-slate-800 my-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 text-left">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-400 text-xs font-bold mb-6">
                {t.speedReliability.badge}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t.speedReliability.title}
                </h3>
                <p className="text-slate-400 text-lg mb-8">
                {t.speedReliability.description}
                </p>

                <ul className="space-y-4">
                {t.speedReliability.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Zap className="w-3 h-3 text-green-400" />
                    </div>
                    {item}
                    </li>
                ))}
                </ul>
            </ScrollReveal>
          </div>
          <div className="relative">
            <ScrollReveal delay={0.2}>
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur-lg opacity-20"></div>
                <div className="relative bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-2xl">
                <div className="space-y-4">
                    {/* Fake Code snippet */}
                    <div className="font-mono text-sm">
                    <div className="text-slate-500">// Grozan Engine Initialization</div>
                    <div className="text-purple-400">const <span className="text-blue-400">future</span> = <span className="text-yellow-400">await</span> grozan.<span className="text-blue-400">init</span>({'{'}</div>
                    <div className="pl-4 text-slate-300">mode: <span className="text-green-400">'turbo'</span>,</div>
                    <div className="pl-4 text-slate-300">ai_core: <span className="text-blue-400">true</span>,</div>
                    <div className="pl-4 text-slate-300">scale: <span className="text-orange-400">Infinity</span></div>
                    <div className="text-purple-400">{'}'});</div>
                    <div className="mt-2 text-slate-500">// System ready</div>
                    <div className="text-green-400">console.log("Success");</div>
                    </div>
                </div>
                </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedReliability;
