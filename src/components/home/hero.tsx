"use client"

import React from 'react';

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
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-lg animate-fade-in-down">
          Crafting Wonderful Events
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl font-body text-gray-200 drop-shadow-md animate-fade-in-up">
          Begin yours with the event vogue
        </p>
      </div>
    </section>
  );
}
