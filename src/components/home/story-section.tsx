import Image from 'next/image';

export function StorySection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary dark:bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl lg:text-5xl text-primary">Events That Tell a Story</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Every event has a unique story. We are the authors who write its most beautiful chapters, from the first invitation to the final farewell.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="relative aspect-[3/4] group overflow-hidden rounded-lg shadow-lg">
            <Image src="https://placehold.co/400x533.png" alt="Wedding ceremony" fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint="wedding ceremony"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 className="absolute bottom-4 left-4 font-headline text-2xl text-white">Weddings</h3>
          </div>
          <div className="relative aspect-[3/4] group overflow-hidden rounded-lg shadow-lg">
            <Image src="https://placehold.co/400x533.png" alt="Corporate event" fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint="corporate event" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 className="absolute bottom-4 left-4 font-headline text-2xl text-white">Corporate</h3>
          </div>
          <div className="relative aspect-[3/4] group overflow-hidden rounded-lg shadow-lg">
            <Image src="https://placehold.co/400x533.png" alt="Social gathering" fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint="social gathering" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 className="absolute bottom-4 left-4 font-headline text-2xl text-white">Social</h3>
          </div>
          <div className="relative aspect-[3/4] group overflow-hidden rounded-lg shadow-lg">
            <Image src="https://placehold.co/400x533.png" alt="Cultural festival" fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint="cultural festival" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 className="absolute bottom-4 left-4 font-headline text-2xl text-white">Cultural</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
