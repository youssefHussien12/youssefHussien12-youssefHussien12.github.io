import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Star, 
  Layers, 
  Server, 
  Database, 
  ShieldCheck, 
  CreditCard, 
  Terminal, 
  X, 
  ArrowUpRight,
  Code2,
  Workflow
} from 'lucide-react';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const primaryProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-slate-950/80 border-t border-slate-900 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Backend Portfolios &amp; Codebases
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured Backend Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl">
            Production-oriented backend systems demonstrating RESTful API architecture, authentication &amp; authorization, database modeling, and third-party integrations.
          </p>
        </div>

        {/* PRIMARY FEATURED PROJECT: E-Commerce Dashboard */}
        {primaryProject && (
          <div className="mb-14">
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-blue-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-blue-950/20 backdrop-blur-xl overflow-hidden group">
              
              {/* Featured Badge Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[90px] pointer-events-none rounded-full"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Project Details */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-md shadow-blue-600/30">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {primaryProject.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60">
                      {primaryProject.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {primaryProject.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base mt-2.5 leading-relaxed">
                      "{primaryProject.description}"
                    </p>
                  </div>

                  {/* Key Features Checklist */}
                  <div className="space-y-2.5 pt-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                      <Workflow className="w-3.5 h-3.5 text-blue-400" />
                      Key Features &amp; Implementation:
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {primaryProject.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Tags */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Technologies Used:</span>
                    <div className="flex flex-wrap gap-2">
                      {primaryProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-blue-950/40 border border-blue-800/50 text-blue-300 text-xs font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-slate-800/80">
                    <a
                      href={primaryProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Code</span>
                    </a>

                    {primaryProject.liveDemoUrl && (
                      <a
                        href={primaryProject.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-blue-400" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    <button
                      onClick={() => setActiveModalProject(primaryProject)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-600 transition-colors"
                    >
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span>Inspect API Specs</span>
                    </button>
                  </div>

                </div>

                {/* Right: Technical Architecture Blueprint Preview */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-slate-950 border border-slate-800/90 p-5 font-mono text-xs shadow-inner space-y-4">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2 text-slate-300 font-semibold">
                        <Server className="w-4 h-4 text-blue-400" />
                        <span>Backend Architecture Blueprint</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        RESTful
                      </span>
                    </div>

                    {/* Architecture Highlights */}
                    <div className="space-y-2.5 text-[11px]">
                      <div>
                        <span className="text-slate-500 uppercase text-[10px] block">Pattern</span>
                        <span className="text-slate-200 font-semibold">{primaryProject.architectureHighlights.type}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 uppercase text-[10px] block">Authentication &amp; RBAC</span>
                        <span className="text-slate-300">{primaryProject.architectureHighlights.auth}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 uppercase text-[10px] block">Payment Gateway</span>
                        <span className="text-slate-300">{primaryProject.architectureHighlights.payments}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 uppercase text-[10px] block">Database Optimization</span>
                        <span className="text-slate-300">{primaryProject.architectureHighlights.database}</span>
                      </div>
                    </div>

                    {/* Sample Endpoints Mini Table */}
                    <div className="pt-2 border-t border-slate-800/80">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                        Sample Core Endpoints:
                      </span>
                      <div className="space-y-1.5">
                        {primaryProject.sampleEndpoints.slice(0, 3).map((ep) => (
                          <div key={ep.path} className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800/80 text-[11px]">
                            <div className="flex items-center gap-1.5 truncate">
                              <span className={`font-bold px-1.5 py-0.5 rounded text-[10px] ${ep.method === 'POST' ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                {ep.method}
                              </span>
                              <span className="text-slate-300 truncate">{ep.path}</span>
                            </div>
                            <span className="text-slate-500 text-[10px] hidden sm:inline flex-shrink-0 ml-2">{ep.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* REMAINING 3 BACKEND PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/90 transition-all duration-300 p-6 flex flex-col justify-between backdrop-blur-sm hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1 group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {project.category}
                  </span>
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  "{project.description}"
                </p>

                {/* Features List */}
                <div className="mt-5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Key Features:
                  </span>
                  <div className="space-y-1.5">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-800/90 border border-slate-700/60 text-slate-300 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-blue-400 bg-blue-950/40 hover:bg-blue-900/50 border border-blue-800/60 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                )}

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors"
                  title="Inspect API Architecture"
                  aria-label="Inspect API Architecture"
                >
                  <Terminal className="w-4 h-4 text-emerald-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* API SPEC & ARCHITECTURE MODAL */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl p-6 overflow-hidden max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {activeModalProject.title} — API Spec
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    Backend architecture &amp; endpoint contracts
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-5 space-y-5">
              
              {/* Architecture specs */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Architectural Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {Object.entries(activeModalProject.architectureHighlights).map(([key, value]) => (
                    <div key={key} className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80">
                      <span className="text-[10px] uppercase font-mono text-blue-400 block mb-1">{key}</span>
                      <span className="text-slate-300 leading-snug">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Endpoints Table */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  REST Endpoints &amp; Routes
                </h4>
                <div className="space-y-2">
                  {activeModalProject.sampleEndpoints.map((ep) => (
                    <div key={ep.path} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
                      <div className="flex items-center gap-2 truncate">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          ep.method === 'POST' ? 'bg-amber-500/20 text-amber-400' :
                          ep.method === 'PATCH' ? 'bg-purple-500/20 text-purple-400' :
                          ep.method === 'WS' ? 'bg-pink-500/20 text-pink-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {ep.method}
                        </span>
                        <span className="text-white font-medium truncate">{ep.path}</span>
                      </div>
                      <span className="text-slate-400 text-[11px] sm:text-right">{ep.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Declared Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Go to Code Repository</span>
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
