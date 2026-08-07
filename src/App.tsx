import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
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
import Ticker from './components/Ticker';

// Subpages
import AboutPage from './components/AboutPage';
import AcademicsPage from './components/AcademicsPage';
import NaacPage from './components/NaacPage';
import IqacPage from './components/IqacPage';
import RtiPage from './components/RtiPage';
import ActivitiesPage from './components/ActivitiesPage';
import CommitteesPage from './components/CommitteesPage';
import ResearchPage from './components/ResearchPage';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
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

  // Scroll to top on page change
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className="relative min-h-screen bg-white">
        <Navbar scrolled={scrolled} currentPage={currentPage} onPageChange={handlePageChange} />
        
        {currentPage === 'home' ? (
          <>
            <Hero />
            <SocialProof />
            <Features />
            <Programs />
            <Benefits />
            <Testimonials />
            <Admissions />
            <FAQ />
            <CTA />
          </>
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : currentPage === 'academics' ? (
          <AcademicsPage />
        ) : currentPage === 'naac' ? (
          <NaacPage />
        ) : currentPage === 'iqac' ? (
          <IqacPage />
        ) : currentPage === 'rti' ? (
          <RtiPage />
        ) : currentPage === 'activities' ? (
          <ActivitiesPage />
        ) : currentPage === 'committees' ? (
          <CommitteesPage />
        ) : currentPage === 'research' ? (
          <ResearchPage />
        ) : null}

        <Footer onPageChange={handlePageChange} />

        {/* Back to Top Floating Button */}
        <AnimatePresence>
          {scrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 z-40 p-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 active:scale-95 transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
