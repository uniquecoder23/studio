import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import React from 'react';

const allServices = [
  {
    category: 'Personal Events',
    services: [
      { name: 'Wedding Planning', description: 'From venue selection to the final send-off, we craft your perfect day.' },
      { name: 'Birthday Parties', description: 'Themed parties for all ages, creating moments of pure joy.' },
      { name: 'Anniversary Celebrations', description: 'Mark your milestones with an elegant and memorable celebration.' },
      { name: 'Baby Showers', description: 'Welcome the new arrival with a beautifully styled and fun-filled event.' },
    ]
  },
  {
    category: 'Corporate Events',
    services: [
      { name: 'Conferences & Seminars', description: 'Professional planning for impactful and smooth-running conferences.' },
      { name: 'Product Launches', description: 'Create a buzz with a launch event that captures attention.' },
      { name: 'Team Building', description: 'Engaging activities and events to boost morale and collaboration.' },
      { name: 'Award Ceremonies', description: 'Recognize achievements with a glamorous and well-organized ceremony.' },
    ]
  },
  {
    category: 'Cultural & Religious Events',
    services: [
      { name: 'Bhajan Sandhya', description: 'Organizing serene and spiritual bhajan and kirtan evenings.' },
      { name: 'Festival Celebrations', description: 'Grand celebrations for Diwali, Holi, Navratri, and more.' },
      { name: 'Carnivals & Fairs', description: 'Vibrant and entertaining carnivals for communities and organizations.' },
      { name: 'DJ Nights', description: 'High-energy music and dance nights with professional DJs and equipment.' },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="pt-24 lg:pt-32">
        <section className="py-16 lg:py-24 bg-secondary dark:bg-card">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-5xl lg:text-6xl text-primary">Our Expertise</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
              Whatever the occasion, we have the expertise to make it extraordinary. Explore our comprehensive services.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {allServices.map(category => (
                <div key={category.category}>
                  <h2 className="font-headline text-4xl text-primary mb-8 text-center md:text-left">{category.category}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map(service => (
                      <Card key={service.name} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
                            <CardDescription className="pt-2">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex items-end">
                            <div className="flex items-center text-primary font-semibold">
                                <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                                <span>Expert Planning</span>
                            </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
