import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  { name: 'Savitri Devi', role: 'Founder & CEO', avatar: 'https://placehold.co/150x150.png', aiHint: 'business woman' },
  { name: 'Rajesh Kumar', role: 'Head of Operations', avatar: 'https://placehold.co/150x150.png', aiHint: 'professional man' },
  { name: 'Anjali Singh', role: 'Creative Director', avatar: 'https://placehold.co/150x150.png', aiHint: 'creative woman' },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="pt-24 lg:pt-32">
        <section className="py-16 lg:py-24 bg-secondary dark:bg-card">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-5xl lg:text-6xl text-primary">Our Story</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
              More than just planners, we are creators of joy, architects of memories, and curators of dreams.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline text-4xl text-primary">Our Mission</h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Our mission is to craft exceptional and personalized events that leave a lasting impression. We are committed to understanding our clients' visions and bringing them to life with creativity, precision, and unwavering dedication. We strive to exceed expectations at every turn, ensuring each celebration is not just an event, but a cherished memory.
                </p>
                 <h2 className="font-headline text-4xl text-primary mt-12">Our Vision</h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  To be the most sought-after event planning company, renowned for our innovative designs, flawless execution, and commitment to creating magical experiences. We envision a future where every celebration we touch becomes a benchmark for excellence and heartfelt joy.
                </p>
              </div>
              <div className="relative aspect-square w-full h-full">
                <Image
                  src="https://placehold.co/600x600.png"
                  alt="Vision of an event"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  data-ai-hint="event planners meeting"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-secondary dark:bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl lg:text-5xl text-primary">Meet The Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {teamMembers.map(member => (
                <div key={member.name} className="flex flex-col items-center">
                  <Avatar className="w-32 h-32 border-4 border-accent">
                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-headline text-2xl mt-4">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-4xl lg:text-5xl text-primary">Visit Us</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    We'd love to discuss your next event. Find us here.
                </p>
                <div className="mt-8 rounded-lg overflow-hidden shadow-2xl border">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.019951635397!2d77.30799797525389!3d28.478796175753177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce790437b1207%3A0x6b30f83c1808a8e1!2sJaipuria%20Sunrise%20Greens%2C%20Ahinsa%20Khand%201%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201014!5e0!3m2!1sen!2sin!4v1721307684073!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
