"use client"

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function Hero() {
  const schoolImages = [
    { src: "https://via.placeholder.com/1920x1080?text=School+Campus", alt: "School Campus" },
    { src: "https://via.placeholder.com/1920x1080?text=Students+in+Classroom", alt: "Students in a classroom" },
    { src: "https://via.placeholder.com/1920x1080?text=Graduation+Day", alt: "Students celebrating graduation" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Carousel */}
      <Carousel className="absolute top-0 left-0 w-full h-full" opts={{ loop: true }}>
        <CarouselContent>
          {schoolImages.map((image, index) => (
            <CarouselItem key={index}>
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg animate-fade-in-down">
          Find Your Future
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl text-gray-200 drop-shadow-lg animate-fade-in-up">
          Your journey to the perfect school or college starts here.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up">
          <Button asChild size="lg">
            <Link href="/school-application" className="text-lg">
              Looking for School
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/college-application" className="text-lg">
              Looking for College
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
