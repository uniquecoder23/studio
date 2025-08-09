"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/gallery', label: 'Gallery' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          <div className="flex-shrink-0 md:hidden">
            <Logo size={64} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-end items-center space-x-6">
            {navLinks.slice(0, 3).map(link => (
              <Link key={link.href} href={link.href} className={cn(
                "text-lg font-medium transition-colors",
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
              )}>
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:block mx-6">
            <Logo size={80} />
          </div>

          <div className="hidden md:flex flex-1 justify-start items-center space-x-6">
            {navLinks.slice(3).map(link => (
              <Link key={link.href} href={link.href} className={cn(
                "text-lg font-medium transition-colors",
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
              )}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
             <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className={cn("ml-2", isScrolled ? "text-foreground" : "text-white")}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 bg-white/10 backdrop-blur-lg">
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={cn("text-lg font-medium transition-colors", isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary")}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
