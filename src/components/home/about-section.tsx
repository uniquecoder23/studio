import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-full relative aspect-square">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Maa Savitri Event Planner team"
              fill
              className="object-cover rounded-lg shadow-lg"
              data-ai-hint="indian wedding planner"
            />
          </div>
          <div>
            <h2 className="font-headline text-7xl lg:text-8xl text-primary" style={{fontFamily: 'Tangerine, cursive'}}>About Us</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Maa Savitri Event Planner is a premier event management company dedicated to creating unforgettable experiences. With years of expertise, a passion for perfection, and a network of the finest vendors, we bring your vision to life. From intimate gatherings to grand celebrations, we handle every detail with precision and care, ensuring a seamless and spectacular event.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our philosophy is simple: your event is our masterpiece. We believe in building strong client relationships, understanding your unique style and needs to craft a truly personalized event.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
