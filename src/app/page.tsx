import { Hero } from '@/components/home/hero';
import { AboutSection } from '@/components/home/about-section';
import { StorySection } from '@/components/home/story-section';
import { ServicesSection } from '@/components/home/services-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { ReelsSection } from '@/components/home/reels-section';
import { GalleryPreview } from '@/components/home/gallery-preview';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StorySection />
      <ServicesSection />
      <TestimonialsSection />
      <ReelsSection />
      <GalleryPreview />
    </>
  );
}
