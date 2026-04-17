import { Badge, ButtonLink } from "../components/ui";
import { Link } from "react-router";
import { MoveRight, Star, Shield, TerminalSquare, GraduationCap, Code2, Users2, Play, GitBranch, Database, FileCode2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const stats = [
    { value: "95%", label: "PLACEMENT RATE" },
    { value: "1.2k+", label: "ENGINEERS TRAINED" },
    { value: "150+", label: "HIRING PARTNERS" },
    { value: "24/7", label: "LEARNING SUPPORT" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="beginner">VISION TRAINING & INTERNSHIP</Badge>
          <h1 className="mt-6 text-5xl lg:text-[4rem] leading-[1.1] font-display font-bold text-primary tracking-tight">
            Build Your Career <br className="hidden lg:block" />
            in <span className="text-transparent bg-clip-text bg-linear-to-r from-on-primary-container to-blue-400">Full Stack</span> <br className="hidden lg:block" />
            Development
          </h1>
          <p className="mt-6 text-lg font-sans text-on-surface/80 max-w-lg leading-relaxed">
            Master the art of modern engineering. From database architecture to front-end precision, we mentor the next generation of architects.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <ButtonLink to="/contact">ENROLL NOW</ButtonLink>
            <ButtonLink to="/courses" variant="secondary">VIEW COURSES</ButtonLink>
          </div>
        </motion.div>

        {/* Hero Image Mockup Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:h-[500px]"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative border border-outline-variant/10 group">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Code Editor"
              className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-primary/80 to-transparent mix-blend-multiply" />

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute left-6 bottom-6 right-6 md:right-auto md:w-80 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-xl shadow-[0_16px_40px_rgba(0,0,0,0.2)] border border-white/20 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-sm">Live Project Session</h4>
                <p className="text-xs font-sans text-on-surface/60 mt-0.5">Architectural Enterprise Cloud Architecture</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}


      {/* Vision Advantage */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-xl">
          <h2 className="text-3xl font-display font-bold text-primary">The Vision Advantage</h2>
          <p className="mt-4 text-on-surface/70 font-sans leading-relaxed">
            We don't just teach code, we cultivate the architectural mindset required for senior engineering roles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-surface-container-low p-10 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-on-primary-container mb-8">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-semibold text-lg mb-3 object-cover">Placement Support</h3>
            <p className="text-on-surface/70 text-sm leading-relaxed">
              Dedicated career coaching, resume architectural reviews, and direct referrals to our Tier-1 tech partners.
            </p>
          </div>

          <div className="bg-primary text-white p-10 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-primary/20">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-8">
              <TerminalSquare className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-semibold text-lg mb-3">Real-time Projects</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Work on production-grade systems. No "to-do" apps. We build scalable microservices and distributed systems.
            </p>
          </div>

          <div className="bg-surface-container-low p-10 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-on-primary-container mb-8">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-semibold text-lg mb-3">Experienced Trainers</h3>
            <p className="text-on-surface/70 text-sm leading-relaxed">
              Learn from Senior Architects and Tech Leads who have built systems at scale for global enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Core Specializations */}
      <section className="bg-surface-container-low py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-primary">Core Specializations</h2>
            <p className="mt-4 text-on-surface/70 font-sans text-sm">
              Choose your path to mastery. Intensive, industry-aligned curricula designed for professional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Link to="/courses" className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 group block hover:shadow-md transition-shadow">
              <div className="h-48 bg-linear-to-br from-[#2b5b84] to-[#1e3e59] relative flex items-center justify-center p-6">
                <div className="absolute top-6 left-6">
                  <Badge variant="beginner">BEGINNER TO TECH</Badge>
                </div>
                <Code2 className="w-24 h-24 text-white opacity-20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#ffc331]/10 rounded-full blur-2xl"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-primary mb-3">Python Full Stack</h3>
                <p className="text-on-surface/70 text-sm leading-relaxed mb-8">
                  Master Django, FastAPI, React, and AWS. Build enterprise-grade applications with a focus on clean code and scalability.
                </p>
                <div className="flex items-center justify-between border-t border-surface-container-low pt-6 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-on-surface/60 font-label">
                    <Users2 className="w-4 h-4" /> 24 Weeks
                  </div>
                  <div className="text-xs font-label uppercase tracking-widest font-semibold flex items-center gap-2 text-on-surface hover:text-on-primary-container transition-colors">
                    Curriculum <MoveRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/courses" className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 group block hover:shadow-md transition-shadow">
              <div className="h-48 bg-linear-to-br from-primary to-gray-900 relative flex items-center justify-center p-6">
                <div className="absolute top-6 left-6">
                  <Badge variant="advanced">ADVANCED ENTERPRISE</Badge>
                </div>
                <Database className="w-24 h-24 text-white opacity-20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-on-primary-container/20 rounded-full blur-2xl"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-primary mb-3">Java Enterprise</h3>
                <p className="text-on-surface/70 text-sm leading-relaxed mb-8">
                  Deep dive into Spring Boot, Microservices, Kubernetes, and Angular. Designed for those targeting Fortune 500 engineering roles.
                </p>
                <div className="flex items-center justify-between border-t border-surface-container-low pt-6 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-on-surface/60 font-label">
                    <Users2 className="w-4 h-4" /> 28 Weeks
                  </div>
                  <div className="text-xs font-label uppercase tracking-widest font-semibold flex items-center gap-2 text-on-surface hover:text-on-primary-container transition-colors">
                    Curriculum <MoveRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-4 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Success Stories</h2>
            <p className="text-on-surface/70 font-sans text-sm mb-8 leading-relaxed">
              From students to architects. See how our graduates transformed their careers in the top engineering firms.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-surface-container-low transition-colors">
                <MoveRight className="w-4 h-4 rotate-180" />
              </button>
              <button className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-surface-container-low transition-colors">
                <MoveRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low rounded-2xl p-8 relative">
              <div className="flex text-[#ffc331] mb-6">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="italic text-on-surface/80 text-sm leading-relaxed mb-8">
                "The level of technical depth at Vision is unmatched. I transitioned from a manual tester to a Senior Full Stack Engineer in just 6 months."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul')] bg-cover"></div>
                <div>
                  <div className="font-semibold text-sm">Rahul Sharma</div>
                  <div className="text-xs text-on-surface/50 font-label">SDE At TechCorp</div>
                </div>
              </div>
              <div className="absolute top-8 right-8 text-primary/5 text-6xl font-display font-bold block">"</div>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-8 relative">
              <div className="flex text-[#ffc331] mb-6">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="italic text-on-surface/80 text-sm leading-relaxed mb-8">
                "Building the real-world microservices project was a game changer. It gave me the confidence to handle high-pressure system design interviews."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Priya')] bg-cover"></div>
                <div>
                  <div className="font-semibold text-sm">Priya Patel</div>
                  <div className="text-xs text-on-surface/50 font-label">Backend Developer, Innovate</div>
                </div>
              </div>
              <div className="absolute top-8 right-8 text-primary/5 text-6xl font-display font-bold block">"</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="bg-linear-to-br from-primary via-gray-900 to-on-primary-container rounded-3xl p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Architect Your Future?
            </h2>
            <p className="text-white/80 font-sans mb-10 text-sm md:text-base">
              Join our next cohort and learn to build enterprise-scale applications from scratch. Limited seats available for personalized mentoring.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink to="/contact" className="bg-white text-primary hover:bg-surface-container-highest transition-colors">
                SCHEDULE A FREE DEMO
              </ButtonLink>
              <ButtonLink to="/courses" className="bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                DOWNLOAD BROCHURE
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
