
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingCart, Package, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Shop',
    children: [
      { name: 'All Products', path: '/products' },
      { name: 'Biocosmetics', path: '/products?category=cosmetics' },
      { name: 'Functional Foods', path: '/products?category=food' },
    ]
  },
  {
    name: 'Innovation',
    children: [
      { name: 'Our Research', path: '/research' },
      { name: 'The Problem', path: '/problem' },
      { name: 'Our Solution', path: '/solution' },
      { name: 'Impact', path: '/impact' },
    ]
  },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Hooks
  const { itemCount } = useCart();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveChild = (children: { path: string }[]) => {
    return children.some(child => location.pathname === child.path);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/60 backdrop-blur-2xl backdrop-saturate-150 border-white/30 shadow-lg py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105 border border-purple-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50"></div>
              {/* Molecular O2 Icon */}
              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-primary bg-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-accent absolute -top-1 -right-1"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 absolute -bottom-1 -left-0.5"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold font-display text-foreground tracking-tight leading-none">
                Oxygen <span className="text-primary drop-shadow-sm">Bio</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                Innovations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.children ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1',
                      isActiveChild(link.children)
                        ? 'text-primary bg-primary/10 font-bold shadow-inner'
                        : 'text-muted-foreground hover:text-primary hover:bg-white/50 hover:shadow-sm'
                    )}
                  >
                    {link.name}
                    <ChevronDown size={14} className={cn(
                      'transition-transform duration-200 opacity-50',
                      activeDropdown === link.name && 'rotate-180'
                    )} />
                  </button>
                  {activeDropdown === link.name && (
                    <div className="absolute top-full left-0 pt-2 w-56 z-50 animate-fade-in">
                      <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-xl p-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-4 py-2.5 text-sm text-slate-600 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path!}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                    location.pathname === link.path
                      ? 'text-primary bg-primary/10 font-bold shadow-inner'
                      : 'text-muted-foreground hover:text-primary hover:bg-white/50 hover:shadow-sm'
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Cart Button */}
            <Button variant="ghost" size="icon" asChild className="relative text-slate-600 hover:text-primary hover:bg-primary/5">
              <Link to="/cart">
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white" />
                )}
              </Link>
            </Button>

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 text-slate-700 hover:text-primary hover:bg-primary/5 pl-2 pr-4 rounded-full border border-slate-200">
                    <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold">
                      {user.name.substring(0, 1)}
                    </span>
                    <span className="max-w-[100px] truncate text-sm font-medium">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white border-slate-100 shadow-xl w-48">
                  <DropdownMenuLabel className="text-slate-900">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-slate-100" />
                  <DropdownMenuItem asChild className="focus:bg-slate-50 cursor-pointer text-slate-600">
                    <Link to="/orders">
                      <Package className="mr-2 h-4 w-4" />
                      My Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-slate-100" />
                  <DropdownMenuItem onClick={logout} className="text-red-500 focus:bg-red-50 focus:text-red-600 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-primary hover:bg-primary/5 font-medium">
                  <Link to="/login">Log in</Link>
                </Button>
                <Button size="sm" asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                  <Link to="/contact">Partner</Link>
                </Button>
              </div>
            )}
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
          <div className="lg:hidden py-4 border-t border-white/20 animate-fade-in bg-white/90 backdrop-blur-2xl shadow-2xl absolute top-full left-0 right-0 border-b">
            <div className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                link.children ? (
                  <div key={link.name} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-semibold text-slate-900">
                      {link.name}
                    </div>
                    <div className="pl-4 space-y-1 border-l-2 border-slate-100 ml-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            'block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                            location.pathname === child.path
                              ? 'text-primary bg-primary/5'
                              : 'text-slate-500 hover:text-primary hover:bg-slate-50'
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path!}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300',
                      location.pathname === link.path
                        ? 'text-primary bg-primary/5'
                        : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                    )}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 border-slate-200 text-slate-700" asChild>
                  <Link to="/cart" onClick={() => setIsOpen(false)}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Cart ({itemCount})
                  </Link>
                </Button>
                {!user && (
                  <Button variant="outline" className="flex-1 border-slate-200 text-slate-700" asChild>
                    <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                  </Button>
                )}
              </div>
              {user && (
                <Button variant="outline" className="w-full mt-2 border-slate-200 text-slate-700" asChild>
                  <Link to="/orders" onClick={() => setIsOpen(false)}>My Orders</Link>
                </Button>
              )}
              <Button className="mt-2 bg-primary hover:bg-primary/90 text-white w-full shadow-md" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Partner With Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
