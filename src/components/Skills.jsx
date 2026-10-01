import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Server, 
  Code, 
  Database, 
  ShieldAlert, 
  Wrench, 
  Layers, 
  Cpu, 
  Check, 
  Sparkles,
  Lock,
  GitBranch,
  Terminal
} from 'lucide-react';

const categoryMeta = {
  "Backend": {
    icon: Server,
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30",
    accent: "text-blue-400",
    badge: "Runtime & Frameworks"
  },
  "Programming": {
    icon: Code,
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30",
    accent: "text-amber-400",
    badge: "Core Languages"
  },
  "Databases": {
    icon: Database,
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
    badge: "NoSQL & Relational"
  },
  "APIs & Security": {
    icon: Lock,
    color: "from-rose-500/20 to-pink-500/10",
    border: "border-rose-500/30",
    accent: "text-rose-400",
    badge: "Auth & Hardening"
  },
  "Tools & DevOps": {
    icon: GitBranch,
    color: "from-purple-500/20 to-violet-500/10",
    border: "border-purple-500/30",
    accent: "text-purple-400",
    badge: "Deployment & CI"
  },
  "Additional": {
    icon: Layers,
    color: "from-cyan-500/20 to-sky-500/10",
    border: "border-cyan-500/30",
    accent: "text-cyan-400",
    badge: "Realtime & Sockets"
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredCategories = activeCategory === 'ALL'
    ? skillCategories
    : skillCategories.filter(cat => cat.name === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-[#090d16] bg-radial-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Backend Engineering Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive overview of backend technologies, databases, security standards, and developer tools in my workflow.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-3xl">
            <button
              onClick={() => setActiveCategory('ALL')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeCategory === 'ALL'
                  ? 'bg-blue-600 text-white font-medium shadow-md shadow-blue-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Categories ({skillCategories.length})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeCategory === cat.name
                    ? 'bg-blue-600 text-white font-medium shadow-md shadow-blue-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const meta = categoryMeta[category.name] || categoryMeta["Backend"];
            const Icon = meta.icon;

            return (
              <div
                key={category.name}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/90 transition-all duration-300 p-6 flex flex-col justify-between backdrop-blur-sm hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${meta.color} border ${meta.border}`}>
                        <Icon className={`w-5 h-5 ${meta.accent}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {category.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400 block">
                          {meta.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-mono hover:bg-slate-700/70 hover:border-slate-600 hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400/80"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle bottom detail */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{category.skills.length} core proficiencies</span>
                  <span className={`${meta.accent}`}>Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Backend Architecture Highlights Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-indigo-950/40 border border-blue-900/40 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-base font-semibold text-white flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                Backend Code Quality &amp; Security Standards
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                Every backend system is designed with defense in depth: parameter sanitization, centralized error handling middleware, environment variable security, stateless JWT lifecycle management, and optimized database indexing.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="text-center px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="block font-mono text-sm font-bold text-emerald-400">Node.js</span>
                <span className="text-[10px] text-slate-400 uppercase">Core Runtime</span>
              </div>
              <div className="text-center px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="block font-mono text-sm font-bold text-blue-400">Express / Nest</span>
                <span className="text-[10px] text-slate-400 uppercase">Architecture</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
