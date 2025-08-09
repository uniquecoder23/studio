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
        poster="https://placehold.co/1920x1080.png"
      >
        <source src="https://cdn.pixabay.com/video/2024/05/29/211330-947355113_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="font-headline text-8xl md:text-9xl lg:text-[10rem] text-white drop-shadow-2xl animate-fade-in-down" style={{fontFamily: 'Tangerine, cursive'}}>
          Timeless Traditions
        </h1>
        <p className="mt-2 text-2xl md:text-3xl max-w-3xl font-body text-gray-200 drop-shadow-lg animate-fade-in-up">
          Weaving Dreams into Grand Celebrations
        </p>
        <Button asChild size="lg" className="mt-10 animate-fade-in-up bg-primary/80 border-accent text-primary-foreground hover:bg-primary">
          <Link href="/contact">Begin Your Story</Link>
        </Button>
      </div>
    </section>
  );
}
