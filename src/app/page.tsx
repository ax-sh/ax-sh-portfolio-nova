import { ContactSection } from '@/components/sections/contact';
import HeroSection from '@/components/sections/hero';
import WorkSection from '@/components/sections/work';
import { initMocks } from '@/mocks';
import { Footer } from '@/ui/footer';

initMocks().then();

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
