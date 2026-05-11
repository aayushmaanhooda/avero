import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import AINative from './components/AINative';
import Boarding from './components/Boarding';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HeroBackground from './components/HeroBackground';
import JetstarPrinciple from './components/JetstarPrinciple';
import Navbar from './components/Navbar';
import OurApproach from './components/OurApproach';
import SuccessStories from './components/SuccessStories';
import TheShift from './components/TheShift';
import WhyNow from './components/WhyNow';
import { preloadSecondaryAssets } from './utils/preloadAssets';

const App = () => {
  useEffect(() => {
    preloadSecondaryAssets();
  }, []);

  return (
    <div className="min-h-screen bg-brand-950 text-white">
      <Navbar />

      <HeroBackground>
        <Hero />
      </HeroBackground>

      <TheShift />

      <AINative />

      <OurApproach />

      <WhyNow />

      <SuccessStories />

      <JetstarPrinciple />

      <Boarding />

      <Contact />

      <Footer />

      <Analytics />
    </div>
  );
};

export default App;
