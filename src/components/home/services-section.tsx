import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Grand Weddings',
    description: 'Exquisite wedding planning for a truly unforgettable and grand celebration.',
    bgImage: "https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg",
    aiHint: "grand wedding stage"
  },
  {
    title: 'Sangeet & Receptions',
    description: 'Sophisticated and seamless events that reflect your company’s prestige.',
    bgImage: "https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg",
    aiHint: "sangeet dance floor"
  },
  {
    title: 'Cultural Celebrations',
    description: 'Creative and immersive themed parties that transport your guests.',
    bgImage: "https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg",
    aiHint: "cultural event decor"
  },
  {
    title: 'Royal Destination Events',
    description: 'Elegant evenings of music, from classical quartets to soulful jazz bands.',
    bgImage: "https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg",
    aiHint: "destination wedding"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-7xl lg:text-8xl text-accent" style={{fontFamily: 'Tangerine, cursive'}}>Our Offerings</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We offer a wide range of bespoke services to make your event a masterpiece.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service) => (
            <Card key={service.title} className="text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative border-none">
                <Image
                    src={service.bgImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={service.aiHint}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300"></div>
                <div className="relative flex flex-col justify-center items-center h-full p-6 text-white">
                  <h3 className="font-offering text-6xl pt-6 text-white">{service.title}</h3>
                  <CardContent className="pt-4">
                    <p className="text-gray-200 text-lg">{service.description}</p>
                  </CardContent>
                </div>
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
