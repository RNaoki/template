import ContactSection from '../components/ContactSection';
import LandingSection from '../components/LandingSection';
import Login from '../components/Login';

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <LandingSection />
      <ContactSection />
      <Login />
    </div>
  );
}
