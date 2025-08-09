import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Logo size={80} />
            <p className="font-headline text-xl mt-4 text-center md:text-left">Maa Savitri Event Planner</p>
            <p className="mt-2 text-muted-foreground text-center md:text-left">Crafting memories, one event at a time.</p>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>123 Event Lane, Celebration City, 12345</li>
              <li>engtechno25@gmail.com</li>
              <li>+1 234 567 8900</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Maa Savitri Event Planner. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
