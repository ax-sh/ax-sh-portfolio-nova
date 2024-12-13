import { ContactSection } from '@/components/sections/contact';
import { WorkSection } from '@/components/sections/work';
import { Footer } from '@/ui/footer';

export default function Home() {
  return (
    <>
      <WorkSection />
      <ContactSection />
      <Footer />
    </>
  );
}
