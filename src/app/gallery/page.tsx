import Image from 'next/image';

const galleryPhotos = [
  { src: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', alt: 'Wedding reception', category: 'Weddings', aiHint: 'wedding reception' },
  { src: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', alt: 'Birthday party', category: 'Birthdays', aiHint: 'birthday party' },
  { src: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', alt: 'Conference', category: 'Corporate', aiHint: 'business conference' },
  { src: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', alt: 'DJ setup', category: 'Parties', aiHint: 'dj setup' },
  { src: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', alt: 'Bhajan Sandhya stage', category: 'Cultural', aiHint: 'religious event' },
  { src: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', alt: 'Outdoor carnival', category: 'Carnivals', aiHint: 'carnival games' },
  { src: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', alt: 'Elegant table setting', category: 'Weddings', aiHint: 'table setting' },
  { src: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', alt: 'Corporate gala', category: 'Corporate', aiHint: 'corporate gala' },
  { src: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', alt: 'Kids birthday theme', category: 'Birthdays', aiHint: 'kids party' },
  { src: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', alt: 'Bride and groom', category: 'Weddings', aiHint: 'bride groom' },
  { src: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', alt: 'Live band performance', category: 'Parties', aiHint: 'live band' },
  { src: 'https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg', alt: 'Product launch stage', category: 'Corporate', aiHint: 'product launch' },
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
                    height={400}
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
