import { Outlet, NavLink, Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Globe, Shield, Code, Menu, X } from "lucide-react";
import { ButtonLink, Badge } from "../components/ui";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-[20px] border-b border-outline-variant/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-2xl tracking-tight text-primary">
          <span className="text-5xl text-blue-700 italianno">V</span> ision
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-sans font-medium transition-colors hover:text-on-primary-container ${isActive ? "text-on-primary-container border-b-2 border-on-primary-container pb-1" : "text-on-surface"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink to="/contact">Enroll Now</ButtonLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-outline-variant/10 py-6 px-6 flex flex-col gap-6 shadow-lg shadow-black/5 "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-sans font-medium ${isActive ? "text-on-primary-container" : "text-on-surface"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-outline-variant/10">
              <ButtonLink to="/contact" className="w-full">Enroll Now</ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer bg-surface py-16 border-t border-surface-container-low mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link gap-2 to="/" className="font-display font-bold text-xl tracking-tight text-primary mb-4 block">
            EthoStack
          </Link>
          <p className="text-sm font-sans text-on-surface/70 leading-relaxed max-w-xs">
            A premium engineering studio dedicated to crafting world-class full-stack developers.
          </p>
          <div className="mt-6 flex gap-4 text-on-surface/50">
            <Globe className="w-5 h-5 hover:text-primary transition-colors cursor-pointer" />
            <Code className="w-5 h-5 hover:text-primary transition-colors cursor-pointer" />
            <Shield className="w-5 h-5 hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-sm mb-4">Programs</h4>
          <ul className="space-y-3 text-sm font-sans text-on-surface/70">
            <li><Link to="/courses" className="hover:text-primary transition-colors">Python Full Stack</Link></li>
            <li><Link to="/courses" className="hover:text-primary transition-colors">Java Enterprise</Link></li>
            <li><Link to="/courses" className="hover:text-primary transition-colors">Mentorship</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-sm mb-4">Resources</h4>
          <ul className="space-y-3 text-sm font-sans text-on-surface/70">
            <li><Link to="#" className="hover:text-primary transition-colors">Student Portal</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Success Stories</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-sm mb-4">Legal</h4>
          <ul className="space-y-3 text-sm font-sans text-on-surface/70">
            <li><Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-surface-container-low text-center">
        <p className="text-xs font-sans text-on-surface/50">
          © {new Date().getFullYear()} EthoStack Engineering Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-surface overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
