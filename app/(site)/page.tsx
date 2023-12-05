import ContactSection from '../components/ContactSection';
import LandingSection from '../components/LandingSection';

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <LandingSection />
      <ContactSection />
    </div>
  );
}
