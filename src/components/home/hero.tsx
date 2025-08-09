"use client"

import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://placehold.co/1920x1080.png"
      >
        <source src="https://cdn.pixabay.com/video/2022/10/23/136139-764371523_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-2xl animate-fade-in-down">
          Crafting Exquisite Events
        </h1>
        <p className="mt-6 text-xl md:text-2xl max-w-3xl font-body text-gray-200 drop-shadow-lg animate-fade-in-up">
          We transform your visions into unforgettable celebrations, meticulously planned and flawlessly executed.
        </p>
        <Button asChild size="lg" className="mt-10 animate-fade-in-up" variant="outline">
          <Link href="/contact">Plan Your Event</Link>
        </Button>
      </div>
    </section>
  );
}
