import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden w-full relative">
      <Navbar />
      <main key={location.pathname} className="flex-1 pt-20 animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
}
