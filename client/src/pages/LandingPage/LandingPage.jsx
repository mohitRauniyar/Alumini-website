import React from 'react';
import HeroSection from './HeroSection';
import AchievementsSection from './AchievementsSection';
import EventsSection from './EventsSection';
import AlumniSection from './AlumniSection';
import QuotesSection from './QuotesSection';
import DonationSection from './DonationSection';
import ChatComponent from '../../components/Chat/ChatComponent'
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AchievementsSection />
      <EventsSection />
      <AlumniSection />
      <QuotesSection />
      <DonationSection />
      <ChatComponent />
      <Footer />
    </>
  );
};

export default LandingPage;
