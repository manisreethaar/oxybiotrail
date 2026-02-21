
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TestTube, Factory, Calendar, Users, Home, FlaskConical, GraduationCap, Target, BookOpen, Leaf, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from "@/context/AuthContext";
import { useWaitlistCount } from '@/hooks/useWaitlistCount';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const staticLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Careers', path: '/careers', icon: Briefcase },
  { name: 'Blog', path: '/blog', icon: BookOpen },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { count } = useWaitlistCount(0);

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
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Oxygen Bioinnovations" className="h-10 w-auto object-contain" />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold text-foreground tracking-tight leading-none uppercase">
                OXYGEN
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest text-muted-foreground font-medium mt-1">
                Ancient Ingredients. Modern Science.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center bg-white/50 dark:bg-black/20 p-1.5 rounded-full border border-white/20 backdrop-blur-sm">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">

                  {/* Home */}
                  <NavigationMenuItem>
                    <Link to="/">
                      <NavigationMenuLink className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                        location.pathname === '/' ? "text-primary bg-white shadow-sm font-bold" : "text-muted-foreground hover:text-primary hover:bg-white/50"
                      )}>
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  {/* About Us Submenu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(
                      "rounded-full px-4 text-sm font-medium transition-all duration-300 bg-transparent hover:bg-white/50",
                      location.pathname.startsWith('/about') ? "text-primary bg-white shadow-sm font-bold" : "text-muted-foreground"
                    )}>
                      About Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-border rounded-2xl">
                        <li className="row-span-3">
                          <div className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-b from-emerald-500/10 to-emerald-500/5 p-6 border border-emerald-500/10">
                            <Users className="h-6 w-6 text-emerald-600 mb-2" />
                            <div className="mb-2 mt-4 text-lg font-display font-bold text-slate-900 dark:text-white">
                              Who is Oxygen?
                            </div>
                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                              Built by scientists who were frustrated with what the market had to offer.
                            </p>
                          </div>
                        </li>
                        <li>
                          <Link to="/about/vision-mission" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                            <div className="text-sm font-semibold text-slate-900 dark:text-white leading-none">Vision & Mission</div>
                            <p className="line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 mt-1.5">Our goals and the future we're building towards.</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/about/founder-team" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                            <div className="text-sm font-semibold text-slate-900 dark:text-white leading-none">Founder & Team</div>
                            <p className="line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 mt-1.5">The origin hook and the people driving the science.</p>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Our Science Submenu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(
                      "rounded-full px-4 text-sm font-medium transition-all duration-300 bg-transparent hover:bg-white/50",
                      location.pathname.startsWith('/science') ? "text-primary bg-white shadow-sm font-bold" : "text-muted-foreground"
                    )}>
                      Our Science
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-border rounded-2xl">
                        <li className="row-span-3">
                          <div className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-b from-amber-500/10 to-amber-500/5 p-6 border border-amber-500/10">
                            <FlaskConical className="h-6 w-6 text-amber-600 mb-2" />
                            <div className="mb-2 mt-4 text-lg font-display font-bold text-slate-900 dark:text-white">
                              Evidence-Based
                            </div>
                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                              We formulate with clinical precision and indigenous botanical wisdom.
                            </p>
                          </div>
                        </li>
                        <li>
                          <Link to="/science/the-problem" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                            <div className="text-sm font-semibold text-slate-900 dark:text-white leading-none">The Problem</div>
                            <p className="line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 mt-1.5">Understand the nutritional breakdown in urban India.</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/science/ingredients" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                            <div className="text-sm font-semibold text-slate-900 dark:text-white leading-none">Ingredients Index</div>
                            <p className="line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 mt-1.5">Deep dive into every component of our formulations.</p>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Careers & Blog */}
                  {staticLinks.slice(1).map((link) => (
                    <NavigationMenuItem key={link.path}>
                      <Link to={link.path}>
                        <NavigationMenuLink className={cn(
                          "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                          location.pathname === link.path ? "text-primary bg-white shadow-sm font-bold" : "text-muted-foreground hover:text-primary hover:bg-white/50"
                        )}>
                          {link.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}

                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {scrolled && count > 0 && (
              <span className="text-xs font-medium text-muted-foreground animate-fade-in">
                <span className="text-primary font-bold">{count}</span> people waiting
              </span>
            )}
            <Button size="sm" asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
              <a href="#waitlist">Join Waitlist</a>
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
              <Link to="/" onClick={() => setIsOpen(false)} className={cn("flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all", location.pathname === '/' ? "text-primary bg-primary/5" : "text-slate-600 hover:text-primary hover:bg-slate-50")}>
                <Home size={18} /> Home
              </Link>

              <div className="py-2 pl-4">
                <p className="text-xs font-bold uppercase text-slate-400 mb-2">About Us</p>
                <div className="flex flex-col gap-1 border-l-2 border-slate-100 dark:border-slate-800 ml-2 pl-4">
                  <Link to="/about/vision-mission" onClick={() => setIsOpen(false)} className={cn("py-2 text-sm font-medium text-slate-600 hover:text-primary", location.pathname === '/about/vision-mission' && "text-primary font-bold")}>Vision & Mission</Link>
                  <Link to="/about/founder-team" onClick={() => setIsOpen(false)} className={cn("py-2 text-sm font-medium text-slate-600 hover:text-primary", location.pathname === '/about/founder-team' && "text-primary font-bold")}>Founder & Team</Link>
                </div>
              </div>

              <div className="py-2 pl-4">
                <p className="text-xs font-bold uppercase text-slate-400 mb-2">Our Science</p>
                <div className="flex flex-col gap-1 border-l-2 border-slate-100 dark:border-slate-800 ml-2 pl-4">
                  <Link to="/science/the-problem" onClick={() => setIsOpen(false)} className={cn("py-2 text-sm font-medium text-slate-600 hover:text-primary", location.pathname === '/science/the-problem' && "text-primary font-bold")}>The Problem</Link>
                  <Link to="/science/ingredients" onClick={() => setIsOpen(false)} className={cn("py-2 text-sm font-medium text-slate-600 hover:text-primary", location.pathname === '/science/ingredients' && "text-primary font-bold")}>Ingredients Index</Link>
                </div>
              </div>

              <Link to="/careers" onClick={() => setIsOpen(false)} className={cn("flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all", location.pathname === '/careers' ? "text-primary bg-primary/5" : "text-slate-600 hover:text-primary hover:bg-slate-50")}>
                <Briefcase size={18} /> Careers
              </Link>
              <Link to="/blog" onClick={() => setIsOpen(false)} className={cn("flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all", location.pathname === '/blog' ? "text-primary bg-primary/5" : "text-slate-600 hover:text-primary hover:bg-slate-50")}>
                <BookOpen size={18} /> Blog
              </Link>
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
