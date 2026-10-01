import React from 'react';
import { education } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen,
  CheckCircle2
} from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#090d16] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center md:items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic &amp; Training
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Education &amp; Credentials
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Formal foundations in management information systems combined with specialized backend &amp; full-stack training.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, idx) => {
            const isDegree = idx === 0;

            return (
              <div
                key={item.institution}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/90 transition-all duration-300 p-6 sm:p-7 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${
                        isDegree 
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                          : 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30'
                      }`}>
                        {isDegree ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-blue-400 block font-medium">
                          {item.badge}
                        </span>
                        <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                          {item.degree}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="text-base font-semibold text-slate-200 mb-2">
                    {item.institution}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {item.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/70 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{item.period}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
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
