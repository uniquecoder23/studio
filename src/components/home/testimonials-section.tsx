import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FlippingCard } from '@/components/flipping-card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya & Rohan",
    location: "Mumbai",
    avatar: "https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg",
    testimonial: "Maa Savitri made our wedding a fairytale. Every detail was perfect, and they handled everything with such grace. We couldn't have asked for a better team!",
    aiHint: "happy couple"
  },
  {
    name: "Sunita Sharma",
    location: "Delhi",
    avatar: "https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg",
    testimonial: "The Bhajan Sandhya they organized was divine. The atmosphere, the artists, everything was spiritually uplifting. Highly recommended for religious events.",
    aiHint: "smiling woman"
  },
  {
    name: "Innovate Corp.",
    location: "Bangalore",
    avatar: "https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg",
    testimonial: "Our annual carnival was a huge success, thanks to Maa Savitri Event Planner. Their creativity and execution were flawless. Our employees had a fantastic time!",
    aiHint: "corporate building"
  }
];

const TestimonialFront = ({ name, location, avatar, aiHint }: { name: string, location: string, avatar: string, aiHint: string }) => (
  <div className="flex flex-col items-center justify-center text-center p-6 h-full">
    <Avatar className="w-24 h-24 border-4 border-accent">
      <AvatarImage src={avatar} alt={name} data-ai-hint={aiHint} />
      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
    </Avatar>
    <h3 className="font-headline text-2xl mt-4">{name}</h3>
    <p className="text-muted-foreground">{location}</p>
    <p className="mt-4 text-sm font-semibold text-primary">Click to read my story</p>
  </div>
);

const TestimonialBack = ({ testimonial, name }: { testimonial: string, name: string }) => (
  <div className="flex flex-col items-center justify-center p-8 h-full bg-primary text-primary-foreground">
     <Quote className="w-10 h-10 text-accent" />
    <p className="mt-4 text-center italic">"{testimonial}"</p>
    <p className="mt-6 font-bold font-headline">- {name}</p>
  </div>
);

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary dark:bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-5xl lg:text-6xl text-accent">What Our Clients Say</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Stories of joy and celebration, shared by those we've had the pleasure to serve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, i) => (
            <div key={i} className="h-80 cursor-pointer">
              <FlippingCard
                front={<TestimonialFront name={t.name} location={t.location} avatar={t.avatar} aiHint={t.aiHint} />}
                back={<TestimonialBack testimonial={t.testimonial} name={t.name} />}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
