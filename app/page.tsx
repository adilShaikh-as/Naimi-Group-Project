'use client';

import { useEffect, useState } from 'react';

import Navbar from './components/landing/Navbar';
import Hero from './components/landing/Hero';
import Highlights from './components/landing/Highlights';
import About from './components/landing/About';
import Residences from './components/landing/Residences';
import Amenities from './components/landing/Amenities';
import Location from './components/landing/Location';
import FinalCTA from './components/landing/FinalCTA';
import Footer from './components/landing/Footer';
import EnquiryModal from './components/landing/EnquiryModal';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enquiryTopic, setEnquiryTopic] = useState(
    'General Website Enquiry'
  );

  // Open the enquiry modal on every page load / refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      setEnquiryTopic('General Website Enquiry');
      setIsModalOpen(true);
    }, 800); // set to 0 for instant

    return () => clearTimeout(timer);
  }, []);

  const openEnquiryModal = (topic: string) => {
    setEnquiryTopic(topic);
    setIsModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F3F0E9] text-[#171715]">
      <Navbar
        onEnquire={() =>
          openEnquiryModal('General Website Enquiry')
        }
      />

      <Hero onEnquire={openEnquiryModal} />

      <Highlights />

      <About />

      <Residences onEnquire={openEnquiryModal} />

      <Amenities onEnquire={openEnquiryModal} />

      <Location />

      <FinalCTA onEnquire={openEnquiryModal} />

      <Footer />

      <EnquiryModal
        isOpen={isModalOpen}
        topic={enquiryTopic}
        onClose={closeEnquiryModal}
      />
    </main>
  );
}