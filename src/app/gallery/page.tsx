import Image from 'next/image';

const galleryPhotos = [
  { src: 'https://placehold.co/600x400.png', alt: 'Wedding reception', category: 'Weddings', aiHint: 'wedding reception' },
  { src: 'https://placehold.co/400x600.png', alt: 'Birthday party', category: 'Birthdays', aiHint: 'birthday party' },
  { src: 'https://placehold.co/600x400.png', alt: 'Conference', category: 'Corporate', aiHint: 'business conference' },
  { src: 'https://placehold.co/600x400.png', alt: 'DJ setup', category: 'Parties', aiHint: 'dj setup' },
  { src: 'https://placehold.co/400x600.png', alt: 'Bhajan Sandhya stage', category: 'Cultural', aiHint: 'religious event' },
  { src: 'https://placehold.co/600x400.png', alt: 'Outdoor carnival', category: 'Carnivals', aiHint: 'carnival games' },
  { src: 'https://placehold.co/400x600.png', alt: 'Elegant table setting', category: 'Weddings', aiHint: 'table setting' },
  { src: 'https://placehold.co/600x400.png', alt: 'Corporate gala', category: 'Corporate', aiHint: 'corporate gala' },
  { src: 'https://placehold.co/600x400.png', alt: 'Kids birthday theme', category: 'Birthdays', aiHint: 'kids party' },
  { src: 'https://placehold.co/400x600.png', alt: 'Bride and groom', category: 'Weddings', aiHint: 'bride groom' },
  { src: 'https://placehold.co/600x400.png', alt: 'Live band performance', category: 'Parties', aiHint: 'live band' },
  { src: 'https://placehold.co/400x600.png', alt: 'Product launch stage', category: 'Corporate', aiHint: 'product launch' },
];

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <div className="pt-24 lg:pt-32">
        <section className="py-16 lg:py-24 bg-secondary dark:bg-card">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-5xl lg:text-6xl text-primary">Our Gallery</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
              A portfolio of moments we've proudly created.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {galleryPhotos.map((photo, index) => (
                <div key={index} className="overflow-hidden rounded-lg break-inside-avoid group shadow-lg">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={photo.src.includes('600x400') ? 400 : 600}
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={photo.aiHint}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
