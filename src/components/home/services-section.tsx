import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Gem, Film, Music, PartyPopper, VenetianMask } from 'lucide-react';
import React from 'react';

const services = [
  {
    title: 'Luxury Weddings',
    icon: <Gem className="h-10 w-10 text-primary" />,
    description: 'Exquisite wedding planning for a truly unforgettable and grand celebration.'
  },
  {
    title: 'Corporate Galas',
    icon: <Film className="h-10 w-10 text-primary" />,
    description: 'Sophisticated and seamless events that reflect your company’s prestige.'
  },
  {
    title: 'Themed Parties',
    icon: <VenetianMask className="h-10 w-10 text-primary" />,
    description: 'Creative and immersive themed parties that transport your guests.'
  },
  {
    title: 'Musical Soirees',
    icon: <Music className="h-10 w-10 text-primary" />,
    description: 'Elegant evenings of music, from classical quartets to soulful jazz bands.'
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl lg:text-5xl text-primary">Signature Services</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We offer a wide range of bespoke services to make your event a masterpiece.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service) => (
            <Card key={service.title} className="text-center group hover:shadow-2xl transition-shadow duration-500 bg-card/80 backdrop-blur-sm border-border/50 hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-5 w-fit group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-3xl pt-6">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button asChild size="lg" className="mt-16">
          <Link href="/services">Explore All Services</Link>
        </Button>
      </div>
    </section>
  );
}
