import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Send, 
  Github, 
  Linkedin, 
  Server, 
  Database, 
  ShieldCheck, 
  Code2, 
  Cloud, 
  Activity, 
  CheckCircle2, 
  Terminal, 
  Play,
  Layers,
  Copy,
  Check
} from 'lucide-react';

export default function Hero() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);

  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/auth/login',
      status: 200,
      time: '24ms',
      tag: 'Auth & JWT',
      response: {
        status: "success",
        code: 200,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        user: { id: "usr_892", role: "admin", email: "recruiter@company.com" }
      }
    },
    {
      method: 'GET',
      path: '/api/v1/products?limit=10',
      status: 200,
      time: '32ms',
      tag: 'MongoDB Indexed',
      response: {
        status: "success",
        results: 10,
        totalItems: 450,
        data: [{ id: "prod_01", name: "Backend Architecture Guide", stock: 120 }]
      }
    },
    {
      method: 'POST',
      path: '/api/v1/payments/checkout',
      status: 200,
      time: '48ms',
      tag: 'Stripe Webhook',
      response: {
        status: "success",
        paymentId: "pi_3MtwBwLkdIwHu7ix28q3z1",
        state: "requires_capture",
        currency: "usd"
      }
    }
  ];

  const handleTestEndpoint = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
    }, 400);
  };

  const handleCopyCurl = () => {
    const ep = endpoints[selectedEndpoint];
    const curl = `curl -X ${ep.method} "https://api.youssef.dev${ep.path}" -H "Authorization: Bearer <TOKEN>"`;
    navigator.clipboard.writeText(curl);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern bg-radial-glow">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Recruiter Alert Pill */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">
              Role Focus: <strong className="text-blue-400 font-semibold">Node.js Back-End Developer</strong>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-xs text-slate-400 hidden sm:inline">{personalInfo.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center md:text-left space-y-6">
            
            <div className="space-y-3">
              <p className="font-mono text-sm tracking-wide text-blue-400 font-semibold uppercase flex items-center justify-center md:justify-start gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Backend Engineering &bull; Scalable REST APIs</span>
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                {personalInfo.headline}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.subheadline}
            </p>

            {/* Quick architectural badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 pb-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <Server className="w-3.5 h-3.5 text-blue-400" />
                <span>Node.js & Express</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>JWT & RBAC</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span>MongoDB & MySQL</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <Cloud className="w-3.5 h-3.5 text-purple-400" />
                <span>Docker & Sockets</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all hover:translate-y-[-1px] active:translate-y-[0px]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition-all hover:text-white"
              >
                <Send className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>

              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Visit GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-blue-400 transition-colors"
                  title="Visit LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Recruiter Positioning Notice */}
            <div className="pt-3 border-t border-slate-800/80 max-w-xl">
              <p className="text-xs text-slate-400 leading-normal">
                <span className="text-slate-200 font-medium">Recruiter Note:</span> {personalInfo.positioning}
              </p>
            </div>

          </div>

          {/* Right Column: Live Backend Architecture & API Simulator Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-950/80 border border-slate-800/90 shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-xl">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/90">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-blue-400" />
                    node:express-cluster (v20-lts)
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <Activity className="w-3 h-3" />
                    HEALTHY
                  </span>
                </div>
              </div>

              {/* Server Stats Bar */}
              <div className="grid grid-cols-3 divide-x divide-slate-800/80 border-b border-slate-800/80 bg-slate-900/40 text-center py-2.5">
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Avg Response</span>
                  <span className="font-mono text-xs font-semibold text-emerald-400">28ms</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Uptime</span>
                  <span className="font-mono text-xs font-semibold text-blue-400">99.98%</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Middleware</span>
                  <span className="font-mono text-xs font-semibold text-purple-400">JWT &bull; CORS &bull; RBAC</span>
                </div>
              </div>

              {/* Endpoint Selector Tabs */}
              <div className="p-3 border-b border-slate-800/70 bg-slate-900/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400 font-medium">Test API Endpoint:</span>
                  <button 
                    onClick={handleCopyCurl} 
                    className="text-[11px] font-mono text-slate-400 hover:text-slate-200 flex items-center gap-1"
                    title="Copy cURL command"
                  >
                    {copiedCurl ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied cURL</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy cURL</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex gap-1.5 overflow-x-auto pb-1">
                  {endpoints.map((ep, idx) => (
                    <button
                      key={ep.path}
                      onClick={() => setSelectedEndpoint(idx)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all text-left whitespace-nowrap flex items-center gap-1.5 ${
                        selectedEndpoint === idx
                          ? 'bg-blue-600/20 text-blue-300 border border-blue-500/40'
                          : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 border border-slate-800'
                      }`}
                    >
                      <span className={`font-bold text-[10px] ${ep.method === 'POST' ? 'text-amber-400' : 'text-blue-400'}`}>
                        {ep.method}
                      </span>
                      <span className="truncate max-w-[130px]">{ep.path}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Endpoint Simulation View */}
              <div className="p-4 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-2 truncate">
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold text-[11px]">
                      {endpoints[selectedEndpoint].method}
                    </span>
                    <span className="text-slate-200 font-semibold truncate text-[11px] sm:text-xs">
                      {endpoints[selectedEndpoint].path}
                    </span>
                  </div>

                  <button
                    onClick={handleTestEndpoint}
                    disabled={isExecuting}
                    className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium text-[11px] transition-all disabled:opacity-50"
                  >
                    <Play className={`w-3 h-3 ${isExecuting ? 'animate-spin' : ''}`} />
                    <span>{isExecuting ? 'Sending...' : 'Send'}</span>
                  </button>
                </div>

                {/* Middleware Execution Pipeline */}
                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60 space-y-1.5">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>Express Middleware Stack</span>
                    <span className="text-emerald-400 font-semibold">Latency: {endpoints[selectedEndpoint].time}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-slate-300 flex-wrap">
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">RateLimit</span>
                    <span className="text-slate-600">&rarr;</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">AuthJWT</span>
                    <span className="text-slate-600">&rarr;</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">RBAC</span>
                    <span className="text-slate-600">&rarr;</span>
                    <span className="px-1.5 py-0.5 rounded bg-blue-900/50 text-blue-300 border border-blue-500/30">
                      {endpoints[selectedEndpoint].tag}
                    </span>
                  </div>
                </div>

                {/* Response Payload Viewer */}
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Status: <strong className="text-emerald-400">200 OK</strong>
                    </span>
                    <span>Content-Type: application/json</span>
                  </div>

                  <pre className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-emerald-300 text-[11px] overflow-x-auto leading-relaxed">
                    {JSON.stringify(endpoints[selectedEndpoint].response, null, 2)}
                  </pre>
                </div>

              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2.5 bg-slate-900/80 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Database className="w-3 h-3 text-cyan-400" />
                  MongoDB & MySQL Connection Pools Active
                </span>
                <span className="text-slate-500">Node v20.x</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
