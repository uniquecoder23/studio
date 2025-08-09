import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const galleryImages = [
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 1', aiHint: 'wedding decor' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 2', aiHint: 'party lights' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 3', aiHint: 'corporate meeting' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 4', aiHint: 'birthday cake' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 5', aiHint: 'live concert' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 6', aiHint: 'outdoor festival' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 7', aiHint: 'flower arrangement' },
  { src: 'https://placehold.co/400x400.png', alt: 'Event photo 8', aiHint: 'happy crowd' },
];

export function GalleryPreview() {
  return (
    <section className="py-16 lg:py-24 bg-secondary dark:bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl lg:text-5xl text-primary">Event Wonders</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A visual journey through some of our most memorable events.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square group overflow-hidden rounded-lg shadow-lg">
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
          <Link href="/gallery">View More</Link>
        </Button>
      </div>
    </section>
  );
}
