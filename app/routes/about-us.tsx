import { Badge, ButtonLink } from "../components/ui";
import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Play, MoveRight } from "lucide-react";

export default function AboutUs() {
   return (
      <div className="w-full">
         {/* Hero Section */}
         <section className="bg-surface-container-low pb-24 relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-surface" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>

            <div className="container mx-auto px-6 pt-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="pb-16"
               >
                  <Badge variant="legacy">OUR LEGACY</Badge>
                  <h1 className="mt-6 text-5xl lg:text-[5rem] leading-[1.05] font-display font-bold text-primary tracking-tight">
                     Engineering the<br />Future of<br />Learning.
                  </h1>
                  <p className="mt-8 text-lg font-sans text-on-surface/80 max-w-md leading-relaxed">
                     EthoStack was born from a singular vision: to bridge the gap between academic theory and the high-velocity demands of modern engineering studios.
                  </p>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex justify-end lg:-mr-12"
               >
                  <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative border border-outline-variant/10">
                     <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="Modern Architecture"
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                  </div>
               </motion.div>
            </div>
         </section>

         {/* Vision & Mission */}
         <section className="container mx-auto px-6 py-24">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">

               {/* Vision */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-surface-container-lowest p-12 rounded-2xl shadow-sm border border-outline-variant/10 h-full flex flex-col justify-center"
               >
                  <div className="w-12 h-12 bg-on-primary-container/10 rounded-xl flex items-center justify-center text-on-primary-container mb-8">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-primary mb-6">Our Vision</h2>
                  <p className="text-on-surface/80 font-sans leading-relaxed text-sm md:text-base">
                     To be the global benchmark for architectural software engineering, fostering a community where technical precision meets creative soul. We envision a world where every developer is equipped to build systems that are as beautiful as they are robust.
                  </p>
               </motion.div>

               {/* Mission */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-primary text-white p-12 rounded-2xl shadow-2xl shadow-primary/20 h-full flex flex-col justify-center relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-on-primary-container/20 rounded-full blur-[80px]"></div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-8 relative z-10">
                     <Rocket className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-white mb-6 relative z-10">Our Mission</h2>
                  <p className="text-white/80 font-sans leading-relaxed text-sm md:text-base relative z-10">
                     To provide high-end, editorial-grade technical education. We dismantle complex stacks into digestible architectures, empowering our students to transition from consumers of technology to the architects of the next digital era.
                  </p>
               </motion.div>

            </div>
         </section>

         {/* The Mentors */}
         <section className="bg-surface-container-low py-24">
            <div className="container mx-auto px-6">
               <div className="mb-16 max-w-xl">
                  <h2 className="text-4xl font-display font-bold text-primary mb-4">The Mentors</h2>
                  <p className="text-on-surface/70 font-sans text-sm leading-relaxed">
                     Learn from senior architects with experience at global tech giants. Our trainers don't just teach code; they teach the philosophy of systems.
                  </p>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  {/* Profile 1 */}
                  <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 group">
                     <div className="h-64 overflow-hidden bg-surface">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Julian Voss" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" />
                     </div>
                     <div className="p-8">
                        <Badge variant="legacy">LEAD ARCHITECT</Badge>
                        <h3 className="text-xl font-display font-bold text-primary mt-4 mb-2">Julian Voss</h3>
                        <p className="text-sm font-sans text-on-surface/70 leading-relaxed mb-6">
                           Former Senior Engineer at Google, Julian specializes in distributed systems and high-concurrency Java architectures.
                        </p>
                        <div className="flex items-center gap-3 text-on-surface/40">
                           <ShieldCheck className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
                           <Play className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
                        </div>
                     </div>
                  </div>

                  {/* Profile 2 */}
                  <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 group">
                     <div className="h-64 overflow-hidden bg-surface">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Elena Rossi" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" />
                     </div>
                     <div className="p-8">
                        <Badge variant="guide">SYSTEMS DESIGN</Badge>
                        <h3 className="text-xl font-display font-bold text-primary mt-4 mb-2">Elena Rossi</h3>
                        <p className="text-sm font-sans text-on-surface/70 leading-relaxed mb-6">
                           A Python expert with a passion for clean code. Elena has built scalable infrastructures for series-C fintech startups.
                        </p>
                        <div className="flex items-center gap-3 text-on-surface/40">
                           <Rocket className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
                           <ShieldCheck className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
                        </div>
                     </div>
                  </div>

                  {/* Profile 3 */}
                  <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 group">
                     <div className="h-64 overflow-hidden bg-surface">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Marcus Chen" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" />
                     </div>
                     <div className="p-8">
                        <Badge variant="guide">FRONTEND LEAD</Badge>
                        <h3 className="text-xl font-display font-bold text-primary mt-4 mb-2">Marcus Chen</h3>
                        <p className="text-sm font-sans text-on-surface/70 leading-relaxed mb-6">
                           Specializing in React and modern UI/UX principles. Marcus ensures that our technical stacks are as beautiful as they are functional.
                        </p>
                        <div className="flex items-center gap-3 text-on-surface/40">
                           <Play className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
                           <Rocket className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Blue CTA overlaying */}
         <section className="bg-surface-container-low pb-24">
            <div className="bg-primary text-white w-full rounded-tr-[100px] rounded-tl-[100px] overflow-hidden">
               <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12 relative">

                  {/* Pattern overlay */}
                  <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none">
                     <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M200 0L400 200L200 400L0 200L200 0Z" stroke="white" strokeWidth="4" />
                        <path d="M200 100L300 200L200 300L100 200L200 100Z" stroke="white" strokeWidth="4" />
                        <path d="M200 200V0" stroke="white" strokeWidth="4" />
                        <path d="M200 400V200" stroke="white" strokeWidth="4" />
                     </svg>
                  </div>

                  <div className="max-w-xl relative z-10">
                     <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to become an architect?</h2>
                     <p className="text-white/80 font-sans text-sm leading-relaxed">
                        Join our next cohort and transition from coder to creator. Our enrollment for the Autumn Studio is now open.
                     </p>
                  </div>

                  <div className="flex gap-4 shrink-0 relative z-10 w-full md:w-auto">
                     <ButtonLink to="/courses" className="bg-white text-primary w-full md:w-auto">
                        VIEW CURRICULUM
                     </ButtonLink>
                     <ButtonLink to="/contact" className="bg-linear-to-r from-on-primary-container to-blue-600 text-white w-full md:w-auto">
                        APPLY TODAY
                     </ButtonLink>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
