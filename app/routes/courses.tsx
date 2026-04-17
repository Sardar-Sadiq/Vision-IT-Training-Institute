import { Badge, ButtonLink } from "../components/ui";
import { motion } from "framer-motion";
import { Server, Database, Cloud, Code2, Globe, Shapes, Users2, Blocks, LineChart, Shield } from "lucide-react";

export default function Courses() {
   return (
      <div className="w-full">
         {/* Hero Section */}
         <section className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
            >
               <h1 className="text-5xl lg:text-[4rem] leading-[1.1] font-display font-bold text-primary tracking-tight">
                  The Architect's <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-on-primary-container to-blue-400">Catalogue.</span>
               </h1>
               <p className="mt-6 text-lg font-sans text-on-surface/80 max-w-md leading-relaxed">
                  Master the structural foundations of modern engineering. Our courses are designed for precision, deep logic, and architectural excellence.
               </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="relative h-[400px] lg:h-[450px]"
            >
               <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative border border-outline-variant/10">
                  <img
                     src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                     alt="Server Room"
                     loading="eager"
                     decoding="async"
                     className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-[#1e3e59]/80 to-transparent mix-blend-multiply" />
               </div>
            </motion.div>
         </section>

         {/* Python Full Stack Section */}
         <section className="bg-surface-container-low py-24 border-t border-outline-variant/5">
            <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-12 gap-8">

                  {/* Left Column */}
                  <div className="lg:col-span-4 flex flex-col pt-12">
                     <Badge variant="beginner">BEGINNER TO ADVANCED</Badge>
                     <h2 className="text-4xl font-display font-bold text-primary mt-6 mb-4">Python Full Stack</h2>

                     <ul className="space-y-4 mb-8 font-sans text-sm text-on-surface/70">
                        <li className="flex items-center gap-3"><Users2 className="w-4 h-4" /> 24 Weeks | 480 Hours</li>
                        <li className="flex items-center gap-3"><Blocks className="w-4 h-4" /> Django & React Architecture</li>
                     </ul>
                     <p className="text-sm font-sans text-on-surface/80 leading-relaxed mb-8">
                        Master the most versatile language on the planet. From data structures to scalable web architectures using Django and modern frontend patterns.
                     </p>

                     <div className="flex gap-3 flex-wrap">
                        <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg text-xs font-label uppercase tracking-wider shadow-sm border border-outline-variant/10"><Code2 className="w-3 h-3" /> Python</span>
                        <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg text-xs font-label uppercase tracking-wider shadow-sm border border-outline-variant/10"><Shapes className="w-3 h-3" /> Django</span>
                        <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg text-xs font-label uppercase tracking-wider shadow-sm border border-outline-variant/10"><Database className="w-3 h-3" /> Postgres</span>
                     </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-8 flex flex-col gap-6">
                     <div className="grid md:grid-cols-2 gap-6">
                        {/* Curriculum */}
                        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                           <h3 className="font-sans font-semibold text-lg mb-6">Curriculum</h3>
                           <ul className="space-y-4 text-sm font-sans text-on-surface/80">
                              <li className="flex gap-4">
                                 <span className="font-label text-on-surface/40 font-semibold w-6">01</span>
                                 <span>Advanced Python & Async IO</span>
                              </li>
                              <li className="flex gap-4">
                                 <span className="font-label text-on-surface/40 font-semibold w-6">02</span>
                                 <span>Django REST Framework Architecture</span>
                              </li>
                              <li className="flex gap-4">
                                 <span className="font-label text-on-surface/40 font-semibold w-6">03</span>
                                 <span>React Context & State Orchestration</span>
                              </li>
                              <li className="flex gap-4">
                                 <span className="font-label text-on-surface/40 font-semibold w-6">04</span>
                                 <span>CI/CD & Docker Orchestration</span>
                              </li>
                           </ul>
                        </div>

                        {/* Capstone */}
                        <div className="bg-primary text-white p-8 rounded-2xl shadow-sm">
                           <h3 className="font-sans font-semibold text-lg mb-6">Capstone Projects</h3>

                           <div className="mb-6">
                              <h4 className="text-xs font-label uppercase tracking-widest text-primary-container mb-2">REAL-TIME ANALYTICS</h4>
                              <p className="text-sm font-sans text-white/80">A high-throughput dashboard built with WebSocket and Redis.</p>
                           </div>
                           <div>
                              <h4 className="text-xs font-label uppercase tracking-widest text-primary-container mb-2">ARCHITECTURAL CRM</h4>
                              <p className="text-sm font-sans text-white/80">Multi-tenant SaaS application with complex permission logic.</p>
                           </div>
                        </div>
                     </div>

                     {/* Career Pathways */}
                     <div className="bg-surface-container-highest p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-outline-variant/10">
                        <div className="flex-1">
                           <h3 className="font-sans font-semibold text-lg mb-2">Career Pathways</h3>
                           <p className="text-sm font-sans text-on-surface/70">Graduates typically secure roles in high-growth engineering teams.</p>
                        </div>
                        <div className="flex gap-3 flex-wrap shrink-0">
                           <span className="bg-white px-4 py-3 rounded-xl text-xs font-label uppercase shadow-sm font-semibold tracking-wider text-center">Backend<br />Architect</span>
                           <span className="bg-white px-4 py-3 rounded-xl text-xs font-label uppercase shadow-sm font-semibold tracking-wider text-center">Full<br />Stack<br />Engineer</span>
                           <span className="bg-white px-4 py-3 rounded-xl text-xs font-label uppercase shadow-sm font-semibold tracking-wider text-center text-on-primary-container">Python<br />Lead</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Java Enterprise Section */}
         <section className="py-24 border-t border-outline-variant/5">
            <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-12 gap-12 items-start">

                  {/* Left Column */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                     <h3 className="font-sans font-semibold text-lg mb-2 mt-4 px-2">Advanced Tooling</h3>
                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-surface-container-low p-6 rounded-xl text-center shadow-sm flex flex-col items-center justify-center gap-3">
                           <Server className="w-6 h-6 text-primary" />
                           <span className="text-[10px] font-label font-bold uppercase tracking-widest">Kubernetes</span>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-xl text-center shadow-sm flex flex-col items-center justify-center gap-3">
                           <Shield className="w-6 h-6 text-primary" />
                           <span className="text-[10px] font-label font-bold uppercase tracking-widest">Spring Security</span>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-xl text-center shadow-sm flex flex-col items-center justify-center gap-3">
                           <Globe className="w-6 h-6 text-primary" />
                           <span className="text-[10px] font-label font-bold uppercase tracking-widest">Angular</span>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-xl text-center shadow-sm flex flex-col items-center justify-center gap-3">
                           <LineChart className="w-6 h-6 text-primary" />
                           <span className="text-[10px] font-label font-bold uppercase tracking-widest">Prometheus</span>
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-6 mt-6">
                        {/* Mastery Modules */}
                        <div className="bg-surface-container-low p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                           <h3 className="font-sans font-semibold text-lg mb-6">Mastery Modules</h3>
                           <ul className="space-y-6">
                              <li>
                                 <h4 className="text-[10px] font-label uppercase tracking-widest text-on-surface/40 mb-1">MODULE 01</h4>
                                 <p className="text-sm font-sans font-medium text-on-surface">Multithreading & JVM Internals</p>
                              </li>
                              <li>
                                 <h4 className="text-[10px] font-label uppercase tracking-widest text-on-surface/40 mb-1">MODULE 02</h4>
                                 <p className="text-sm font-sans font-medium text-on-surface">Microservice Communication (gRPC/Kafka)</p>
                              </li>
                              <li>
                                 <h4 className="text-[10px] font-label uppercase tracking-widest text-on-surface/40 mb-1">MODULE 03</h4>
                                 <p className="text-sm font-sans font-medium text-on-surface">Event-Driven Architecture</p>
                              </li>
                           </ul>
                        </div>

                        {/* Dark Card */}
                        <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden flex flex-col">
                           <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')] bg-cover bg-center"></div>
                           <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent"></div>
                           <div className="mt-auto relative z-10">
                              <h3 className="font-sans font-semibold text-lg mb-2">Banking Core Engine</h3>
                              <p className="text-sm font-sans text-white/70">
                                 Build a transaction processing engine capable of ACID compliance at scale.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-5 flex flex-col pt-12 lg:pl-10">
                     <Badge variant="guide">ENTERPRISE GRADE</Badge>
                     <h2 className="text-4xl font-display font-bold text-primary mt-6 mb-4">Java Enterprise</h2>

                     <ul className="space-y-4 mb-8 font-sans text-sm text-on-surface/70">
                        <li className="flex items-center gap-3"><Users2 className="w-4 h-4" /> 28 Weeks | 560 Hours</li>
                        <li className="flex items-center gap-3"><Blocks className="w-4 h-4" /> Spring Boot & Microservices</li>
                     </ul>
                     <p className="text-sm font-sans text-on-surface/80 leading-relaxed mb-8">
                        The backbone of global finance and enterprise scale. Learn to build resilient, distributed systems that handle millions of requests.
                     </p>

                     <div className="flex gap-3 flex-wrap">
                        <span className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg text-xs font-label uppercase tracking-wider"><Code2 className="w-3 h-3 text-[#552c8b]" /> Java 21</span>
                        <span className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg text-xs font-label uppercase tracking-wider"><Server className="w-3 h-3 text-[#552c8b]" /> Spring Boot</span>
                        <span className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg text-xs font-label uppercase tracking-wider"><Cloud className="w-3 h-3 text-[#552c8b]" /> AWS</span>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Data Analytics Section */}
         <section className="bg-surface-container-low py-24 border-t border-outline-variant/5">
            <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-12 gap-8 items-start">

                  {/* Left Column */}
                  <div className="lg:col-span-4 flex flex-col pt-12">
                     <Badge variant="beginner">DATA TO INSIGHTS</Badge>
                     <h2 className="text-4xl font-display font-bold text-primary mt-6 mb-4">Data Analytics & AI</h2>

                     <ul className="space-y-4 mb-8 font-sans text-sm text-on-surface/70">
                        <li className="flex items-center gap-3"><Users2 className="w-4 h-4" /> 20 Weeks | 400 Hours</li>
                        <li className="flex items-center gap-3"><Blocks className="w-4 h-4" /> Big Data & Machine Learning</li>
                     </ul>
                     <p className="text-sm font-sans text-on-surface/80 leading-relaxed mb-8">
                        Harness the power of data. From complex ETL pipelines to predictive machine learning models, become a builder of intelligence.
                     </p>

                     <div className="flex gap-3 flex-wrap">
                        <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg text-xs font-label uppercase tracking-wider shadow-sm border border-outline-variant/10"><Code2 className="w-3 h-3 text-[#2a8b55]" /> Python</span>
                        <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg text-xs font-label uppercase tracking-wider shadow-sm border border-outline-variant/10"><Database className="w-3 h-3 text-[#2a8b55]" /> SQL</span>
                        <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg text-xs font-label uppercase tracking-wider shadow-sm border border-outline-variant/10"><LineChart className="w-3 h-3 text-[#2a8b55]" /> Pandas</span>
                     </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-8 flex flex-col gap-6">
                     <div className="grid md:grid-cols-2 gap-6">
                        {/* Curriculum */}
                        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                           <h3 className="font-sans font-semibold text-lg mb-6">Curriculum</h3>
                           <ul className="space-y-4 text-sm font-sans text-on-surface/80">
                              <li className="flex gap-4">
                                 <span className="font-label text-on-surface/40 font-semibold w-6">01</span>
                                 <span>Advanced Python & Calculus</span>
                              </li>
                              <li className="flex gap-4">
                                 <span className="font-label text-on-surface/40 font-semibold w-6">02</span>
                                 <span>Data Engineering & SQL Architecture</span>
                              </li>
                              <li className="flex gap-4">
                                 <span className="font-label text-on-surface/40 font-semibold w-6">03</span>
                                 <span>Statistical Modeling & ML Models</span>
                              </li>
                              <li className="flex gap-4">
                                 <span className="font-label text-on-surface/40 font-semibold w-6">04</span>
                                 <span>Deep Learning & AI Application</span>
                              </li>
                           </ul>
                        </div>

                        {/* Capstone */}
                        <div className="bg-primary text-white p-8 rounded-2xl shadow-sm relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-8 text-white/5">
                              <LineChart className="w-32 h-32" />
                           </div>
                           <div className="relative z-10">
                              <h3 className="font-sans font-semibold text-lg mb-6">Capstone Projects</h3>
                              <div className="mb-6">
                                 <h4 className="text-xs font-label uppercase tracking-widest text-[#60ecae] mb-2">PREDICTIVE MARKET INDEX</h4>
                                 <p className="text-sm font-sans text-white/80">A machine learning model forecasting time-series outcomes.</p>
                              </div>
                              <div>
                                 <h4 className="text-xs font-label uppercase tracking-widest text-[#60ecae] mb-2">RECOMMENDATION ENGINE</h4>
                                 <p className="text-sm font-sans text-white/80">Collaborative filtering systems deployed at scale.</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Career Pathways */}
                     <div className="bg-surface-container-highest p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-outline-variant/10">
                        <div className="flex-1">
                           <h3 className="font-sans font-semibold text-lg mb-2">Career Pathways</h3>
                           <p className="text-sm font-sans text-on-surface/70">Graduates quickly adapt into analytics departments.</p>
                        </div>
                        <div className="flex gap-3 flex-wrap shrink-0">
                           <span className="bg-white px-4 py-3 rounded-xl text-xs font-label uppercase shadow-sm font-semibold tracking-wider text-center">Data<br />Scientist</span>
                           <span className="bg-white px-4 py-3 rounded-xl text-xs font-label uppercase shadow-sm font-semibold tracking-wider text-center">ML<br />Engineer</span>
                           <span className="bg-white px-4 py-3 rounded-xl text-xs font-label uppercase shadow-sm font-semibold tracking-wider text-center text-on-primary-container">Analytics<br />Lead</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="container mx-auto px-6 pb-24">
            <div className="bg-linear-to-br from-primary to-on-primary-container rounded-3xl p-16 md:p-24 text-center relative shadow-2xl">
               <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                     Ready to Begin Your <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8ca5ff] to-white">Evolution?</span>
                  </h2>
                  <p className="text-white/80 font-sans mb-10 text-sm md:text-base">
                     Join the studio where engineers are made, not just taught. Limited seats for the Spring 2024 cohort.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                     <ButtonLink to="/contact" className="bg-white text-primary hover:bg-surface-container-highest transition-colors">
                        DOWNLOAD BROCHURE
                     </ButtonLink>
                     <ButtonLink to="/contact" className="bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                        TALK TO A MENTOR
                     </ButtonLink>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
