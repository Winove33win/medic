import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import DoctorDetails from './pages/DoctorDetails';
import ServiceDetails from './pages/ServiceDetails';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [selectedDoctorId, setSelectedDoctorId] = useState<number | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    if (page !== Page.DOCTOR_DETAILS) {
        setSelectedDoctorId(null);
    }
    if (page !== Page.SERVICE_DETAILS) {
        setSelectedServiceId(null);
    }
  };

  const handleDoctorClick = (id: number) => {
    setSelectedDoctorId(id);
    setCurrentPage(Page.DOCTOR_DETAILS);
  };

  const handleServiceClick = (id: number) => {
    setSelectedServiceId(id);
    setCurrentPage(Page.SERVICE_DETAILS);
  }

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={handleNavigate} onDoctorClick={handleDoctorClick} onServiceClick={handleServiceClick} />;
      case Page.ABOUT:
        return <About />;
      case Page.SERVICES:
        return <Services onServiceClick={handleServiceClick} />;
      case Page.TEAM:
        return <Team onDoctorClick={handleDoctorClick} />;
      case Page.CONTACT:
        return <Contact />;
      case Page.DOCTOR_DETAILS:
        return <DoctorDetails doctorId={selectedDoctorId} onNavigate={handleNavigate} />;
      case Page.SERVICE_DETAILS:
        return <ServiceDetails serviceId={selectedServiceId} onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} onDoctorClick={handleDoctorClick} onServiceClick={handleServiceClick} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      <Footer onNavigate={handleNavigate} />
      <ChatWidget />
    </div>
  );
};

export default App;