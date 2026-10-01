import React from 'react';
import { experience } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Server, 
  Code, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center md:items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Work History
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Professional Experience &amp; Internships
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Hands-on technical internships developing backend services, debugging APIs, and understanding integration lifecycles.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          
          {experience.map((exp, idx) => {
            const isBackend = exp.isPrimary;

            return (
              <div key={exp.company} className="relative group">
                
                {/* Timeline Node Point */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isBackend 
                      ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-500/40 scale-110' 
                      : 'bg-slate-900 border-slate-700'
                  }`}
                >
                  {isBackend ? (
                    <Server className="w-3 h-3 text-white" />
                  ) : (
                    <Code className="w-3 h-3 text-slate-400" />
                  )}
                </div>

                {/* Experience Card */}
                <div 
                  className={`rounded-2xl transition-all duration-300 p-6 sm:p-7 backdrop-blur-sm ${
                    isBackend 
                      ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-blue-950/30 border-2 border-blue-500/40 shadow-xl shadow-blue-950/20' 
                      : 'bg-slate-900/40 border border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className={`text-xl font-bold ${isBackend ? 'text-white' : 'text-slate-200'}`}>
                          {exp.role}
                        </h3>
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
                          isBackend 
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                        }`}>
                          {isBackend && <Sparkles className="w-3 h-3 text-blue-400" />}
                          {exp.highlightBadge}
                        </span>
                      </div>
                      
                      <div className="text-base font-semibold text-blue-400 mt-1">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800/80 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-2.5 my-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Responsibilities &amp; Contributions:
                    </span>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isBackend ? 'text-blue-400' : 'text-slate-500'}`} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies tags */}
                  <div className="pt-4 border-t border-slate-800/70 flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 rounded-md text-xs font-mono ${
                          isBackend 
                            ? 'bg-blue-950/60 text-blue-300 border border-blue-800/40' 
                            : 'bg-slate-800/70 text-slate-400 border border-slate-700/60'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
