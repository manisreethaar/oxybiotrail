
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Footer() {
  return (
    <footer className="bg-white/40 backdrop-blur-lg border-t border-white/50 pt-16 pb-8 text-muted-foreground mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold font-display text-slate-900">
                Oxygen <span className="text-primary">BioInnovations</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              India's first honest precision nutrition system. Built on millet, mushrooms, and real science.
            </p>

            <div className="pt-2">
              <p className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Join the Waitlist</p>
              <WaitlistForm variant="footer" />
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="p-2 rounded-full bg-white shadow-sm hover:shadow-md hover:text-primary transition-all border border-slate-100">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white shadow-sm hover:shadow-md hover:text-primary transition-all border border-slate-100">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white shadow-sm hover:shadow-md hover:text-primary transition-all border border-slate-100">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 font-display text-foreground text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/problem" className="hover:text-primary transition-colors">Our Science</Link></li>
              <li><Link to="/ingredients" className="hover:text-primary transition-colors">Ingredients</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4 font-display text-slate-900">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 font-display text-foreground text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>TBI @ Adhiyamaan College of Engineering, Dr MGR Nagar, Hosur</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@oxygenbio.com" className="hover:text-primary transition-colors">info@oxygenbio.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+918001234567" className="hover:text-primary transition-colors">+91 (800) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Oxygen Bioinnovations Pvt. Ltd. All rights reserved. <span className="text-xs text-primary/50 ml-2">v2.0 (Live)</span></p>
        </div>
      </div>
    </footer>
  );
}
