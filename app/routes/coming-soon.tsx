import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "../components/ui";
import { Link } from "react-router";
import { Rocket, Sparkles, BookOpen, Users, LayoutDashboard, ArrowLeft, Send, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function ComingSoon() {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "sardarsadiq106@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2b5b84', '#1e3e59', '#ffc331', '#ffffff']
    });

    setTimeout(() => setCopied(false), 2000);
  };

  const upcomingFeatures = [
    {
      title: "Student Portal",
      description: "A centralized hub for curriculum, assignments, and real-time project collaboration.",
      icon: LayoutDashboard,
      color: "blue"
    },
    {
      title: "Success Stories",
      description: "Deep-dive interviews and career transformation journeys of our elite graduates.",
      icon: Users,
      color: "purple"
    },
    {
      title: "Engineering Blog",
      description: "Architectural insights, tech deep-dives, and industry trends from our lead trainers.",
      icon: BookOpen,
      color: "cyan"
    }
  ];

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <Badge variant="guide">Under Construction</Badge>
        <h1 className="mt-8 text-5xl md:text-7xl font-display font-bold text-primary tracking-tight">
          Great Things <br className="hidden md:block" />
          Take <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600">Time.</span>
        </h1>
        <p className="mt-8 text-lg font-sans text-on-surface/70 leading-relaxed">
          We're currently architecting the next phase of the EthoStack ecosystem. 
          Our new portals and resources are being built with the same precision we teach in our cohorts.
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {upcomingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-container-low/50 backdrop-blur-sm p-8 rounded-2xl border border-outline-variant/10 group hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-on-surface/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Sections */}
        <div className="mt-20 flex flex-col items-center gap-12">
          {/* Notify Me Card */}
          <div className="w-full p-8 md:p-12 bg-surface-container-high rounded-3xl border border-outline-variant/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Rocket className="w-32 h-32 rotate-45" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">Want to be the first to know?</h2>
              <p className="text-on-surface/70 text-sm mb-8">
                Leave your email and we'll signal you the moment we launch these premium resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-surface-container-lowest border border-outline-variant px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans text-sm"
                />
                <button className="bg-primary text-white px-8 py-3 rounded-md font-label uppercase tracking-widest text-xs font-semibold flex items-center justify-center gap-2 hover:bg-on-primary-container transition-colors">
                  Notify Me <Send className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Copy Email Section */}
          <div className="flex flex-col items-center gap-4 relative">
            <AnimatePresence>
              {isHovered && !copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: -10, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute -top-12 px-4 py-2 bg-primary text-white text-[10px] font-label uppercase tracking-[0.2em] rounded-lg shadow-xl pointer-events-none whitespace-nowrap z-20"
                >
                  Click to Copy Email
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleCopy}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-4 bg-surface-container-lowest border border-outline-variant/20 px-8 py-5 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {copied ? <Check className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
              </div>
              
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-label uppercase tracking-widest text-on-surface/40 group-hover:text-primary transition-colors">Reach Out To Us</span>
                <span className="text-sm font-sans font-medium text-primary">{email}</span>
              </div>

              <div className="ml-4 p-2 rounded-lg bg-surface-container-low text-on-surface/30 group-hover:text-primary transition-colors">
                <Copy className="w-4 h-4" />
              </div>
            </motion.button>
            
            {copied && (
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] font-label uppercase tracking-widest text-green-500 font-semibold mt-2"
              >
                Copied to clipboard!
              </motion.span>
            )}
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8">
           <Link to="/" className="text-sm font-sans font-medium text-on-surface/60 hover:text-primary flex items-center gap-2 transition-colors">
             <ArrowLeft className="w-4 h-4" /> Back to Home
           </Link>
           <span className="w-1 h-1 bg-outline-variant/50 rounded-full" />
           <Link to="/courses" className="text-sm font-sans font-medium text-on-surface/60 hover:text-primary transition-colors">
             Explore Courses
           </Link>
        </div>
      </motion.div>

      {/* Floating Sparkles */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-1/4 right-10 text-primary/20 pointer-events-none hidden lg:block"
      >
        <Sparkles className="w-12 h-12" />
      </motion.div>
    </div>
  );
}
