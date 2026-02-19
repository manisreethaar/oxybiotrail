
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TestTube, Factory, Calendar, Users, Home, FlaskConical, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Technology', path: '/science', icon: TestTube },
  { name: 'Roadmap', path: '/roadmap', icon: Calendar },
  { name: 'Innovations', path: '/innovations', icon: FlaskConical },
  { name: 'Careers', path: '/careers', icon: GraduationCap },
  { name: 'Team', path: '/team', icon: Users },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Hooks
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl transition-all duration-300 group-hover:bg-primary/20 border border-primary/20">
              {/* Bio Leaf/DNA Icon representation */}
              <div className="text-primary">
                <TestTube size={20} />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold font-display text-foreground tracking-tight leading-none">
                Bio<span className="text-primary">Start</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                Innovations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/50 dark:bg-black/20 p-1 rounded-full border border-white/20 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2',
                  location.pathname === link.path
                    ? 'text-primary bg-white shadow-sm font-bold'
                    : 'text-muted-foreground hover:text-primary hover:bg-white/50'
                )}
              >
                {/* <link.icon size={14} /> */}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button size="sm" asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
              <Link to="/partner">Partner With Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 animate-fade-in bg-white/95 backdrop-blur-2xl shadow-2xl absolute top-full left-0 right-0 border-b">
            <div className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300',
                    location.pathname === link.path
                      ? 'text-primary bg-primary/5'
                      : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  )}
                >
                  <link.icon size={18} />
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <Button className="mt-2 bg-primary hover:bg-primary/90 text-white w-full shadow-md" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
