import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const galleryImages = [
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 1', aiHint: 'indian wedding decor' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 2', aiHint: 'bride groom ceremony' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 3', aiHint: 'wedding mandap' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 4', aiHint: 'wedding sangeet dance' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 5', aiHint: 'henna design hands' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 6', aiHint: 'royal wedding venue' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 7', aiHint: 'indian wedding food' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 8', aiHint: 'wedding couple portrait' },
];

export function GalleryPreview() {
  return (
    <section className="py-16 lg:py-24 bg-secondary dark:bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-7xl lg:text-8xl text-primary" style={{fontFamily: 'Tangerine, cursive'}}>Event Wonders</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A visual journey through some of our most memorable events.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square group overflow-hidden rounded-lg shadow-lg border-4 border-accent/50">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={image.aiHint}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        <Button asChild size="lg" className="mt-12">
          <Link href="/gallery">View Full Gallery</Link>
        </Button>
      </div>
    </section>
  );
}
