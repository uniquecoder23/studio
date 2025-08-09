import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const reels = [
  { id: 1, thumbnail: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', aiHint: 'wedding dance' },
  { id: 2, thumbnail: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', aiHint: 'event decoration' },
  { id: 3, thumbnail: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', aiHint: 'dj party' },
  { id: 4, thumbnail: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', aiHint: 'happy guests' },
];

export function ReelsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-5xl lg:text-6xl text-accent">Event Moments</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Catch glimpses of our vibrant events on Instagram.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {reels.map((reel) => (
            <Link key={reel.id} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={reel.thumbnail}
                  alt={`Instagram reel ${reel.id}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={reel.aiHint}
                />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                 </div>
              </div>
            </Link>
          ))}
        </div>
        <Button asChild size="lg" className="mt-12 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{fontFamily: 'Qwigley, cursive'}} className="text-3xl">Other Reels</Link>
        </Button>
      </div>
    </section>
  );
}
