import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Programs from './components/Programs';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Admissions from './components/Admissions';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className="relative min-h-screen bg-white">
      <Navbar scrolled={scrolled} />
      <Hero />
      <SocialProof />
      <Features />
      <Programs />
      <Benefits />
      <Testimonials />
      <Admissions />
      <FAQ />
      <CTA />
      <Footer />
      </div>
    </>
  );
}
