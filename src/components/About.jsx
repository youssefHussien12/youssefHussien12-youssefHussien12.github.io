import React from 'react';
import { personalInfo, aboutContent } from '../data/portfolioData';
import { 
  Server, 
  ShieldCheck, 
  Database, 
  Zap, 
  MapPin, 
  Code, 
  Layers, 
  CheckCircle, 
  CheckCircle2,
  FileCheck
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            About Me
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Architecting Reliable Server-Side Software
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A focused look into my backend philosophy, engineering background, and core focus areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-xl backdrop-blur-sm space-y-5">
              {aboutContent.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  {p}
                </p>
              ))}

              {/* Recruiter Quick Snapshot */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-mono block">Location</span>
                    <span className="text-sm font-semibold text-slate-200">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-mono block">Specialization</span>
                    <span className="text-sm font-semibold text-slate-200">{personalInfo.specialization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-mono block">Availability</span>
                    <span className="text-sm font-semibold text-emerald-400">Open for Full-time Backend Roles</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-mono block">Architecture</span>
                    <span className="text-sm font-semibold text-slate-200">RESTful &bull; MVC &bull; Modular</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recruiter Positioning Guarantee */}
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-300">
                <strong className="text-blue-300 font-semibold block mb-0.5">Ready for Backend Impact:</strong>
                Equipped with hands-on practice in writing server controllers, structuring relational and NoSQL databases, securing routes with JWT authorization, and handling third-party integrations like Stripe.
              </div>
            </div>
          </div>

          {/* Right Column: 4 Backend Core Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutContent.corePillars.map((pillar, idx) => {
              const icons = {
                Network: <Server className="w-5 h-5 text-blue-400" />,
                ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
                Database: <Database className="w-5 h-5 text-cyan-400" />,
                Zap: <Zap className="w-5 h-5 text-amber-400" />
              };

              return (
                <div 
                  key={pillar.title}
                  className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/50">
                      {icons[pillar.icon]}
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-1">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
