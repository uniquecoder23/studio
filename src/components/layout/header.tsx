"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/school-application', label: 'Find a School' },
  { href: '/college-application', label: 'Find a College' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
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
      isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-200" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link href="/" className="flex-shrink-0">
            <Logo size={60} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                isScrolled ? "text-gray-700" : "text-white"
              )}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className={cn("ml-2", isScrolled ? "text-gray-800" : "text-white")}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-lg">
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-primary">
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
