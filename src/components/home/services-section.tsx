import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Clapperboard, Disc, Music, PartyPopper } from 'lucide-react';
import React from 'react';

const services = [
  {
    title: 'Bhajan Sandhya',
    icon: <Music className="h-12 w-12 text-primary" />,
    description: 'Organize serene and soulful bhajan sandhyas to create a divine atmosphere.'
  },
  {
    title: 'Wedding Planner',
    icon: <PartyPopper className="h-12 w-12 text-primary" />,
    description: 'Comprehensive wedding planning services for a dream wedding experience.'
  },
  {
    title: 'Carnival',
    icon: <Clapperboard className="h-12 w-12 text-primary" />,
    description: 'Fun-filled and vibrant carnivals with entertainment for all ages.'
  },
  {
    title: 'DJ Night',
    icon: <Disc className="h-12 w-12 text-primary" />,
    description: 'High-energy DJ nights with the best music and lighting setups.'
  }
];

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl lg:text-5xl text-primary">Our Services</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We offer a wide range of services to make your event a grand success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service) => (
            <Card key={service.title} className="text-center group hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button asChild size="lg" className="mt-12">
          <Link href="/services">Other Services</Link>
        </Button>
      </div>
    </section>
  );
}
