"use client"

import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Logo } from '../logo';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg"
      >
        <source src="https://cdn.pixabay.com/video/2022/10/23/136139-764371523_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="font-headline text-8xl md:text-9xl lg:text-[10rem] text-white drop-shadow-2xl animate-fade-in-down" style={{fontFamily: 'Tangerine, cursive'}}>
          Maa Savitri Event Planner
        </h1>
        <p className="mt-2 text-2xl md:text-3xl max-w-3xl font-body text-gray-200 drop-shadow-lg animate-fade-in-up">
          Weaving Dreams into Grand Celebrations
        </p>
        <Button asChild size="lg" className="mt-10 animate-fade-in-up bg-accent/80 border-accent text-accent-foreground hover:bg-accent">
          <Link href="/contact" style={{fontFamily: 'Qwigley, cursive'}} className="text-3xl">Begin Your Story</Link>
        </Button>
      </div>
    </section>
  );
}
