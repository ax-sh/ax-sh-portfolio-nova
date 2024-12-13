import { ContactSection } from '@/components/sections/contact';
import HeroSection from '@/components/sections/hero';
import WorkSection from '@/components/sections/work';
import { Footer } from '@/ui/footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </>
  );
}
