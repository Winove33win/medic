import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import DoctorDetails from './pages/DoctorDetails';
import ServiceDetails from './pages/ServiceDetails';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';
import { Page } from './types';
import { DoctorProvider } from './context/DoctorContext';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [selectedDoctorId, setSelectedDoctorId] = useState<number | null>(null);
  const [editingDoctorId, setEditingDoctorId] = useState<number | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    if (page !== Page.DOCTOR_DETAILS) setSelectedDoctorId(null);
    if (page !== Page.SERVICE_DETAILS) setSelectedServiceId(null);
    if (page !== Page.ADMIN_PANEL) setEditingDoctorId(null);
  };

  const handleDoctorClick = (id: number) => {
    setSelectedDoctorId(id);
    setCurrentPage(Page.DOCTOR_DETAILS);
  };

  const handleServiceClick = (id: number) => {
    setSelectedServiceId(id);
    setCurrentPage(Page.SERVICE_DETAILS);
  };

  const handleEditDoctor = (id: number) => {
    setEditingDoctorId(id);
    setCurrentPage(Page.ADMIN_PANEL);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={handleNavigate} onDoctorClick={handleDoctorClick} onServiceClick={handleServiceClick} />;
      case Page.ABOUT:
        return <About />;
      case Page.SERVICES:
        return <Services onServiceClick={handleServiceClick} />;
      case Page.TEAM:
        return <Team onDoctorClick={handleDoctorClick} onEditDoctor={handleEditDoctor} />;
      case Page.CONTACT:
        return <Contact />;
      case Page.DOCTOR_DETAILS:
        return <DoctorDetails doctorId={selectedDoctorId} onNavigate={handleNavigate} />;
      case Page.SERVICE_DETAILS:
        return <ServiceDetails serviceId={selectedServiceId} onNavigate={handleNavigate} />;
      case Page.ADMIN_LOGIN:
        return <AdminLogin onNavigate={handleNavigate} />;
      case Page.ADMIN_PANEL:
        return <AdminPanel onNavigate={handleNavigate} editingDoctorId={editingDoctorId} />;
      default:
        return <Home onNavigate={handleNavigate} onDoctorClick={handleDoctorClick} onServiceClick={handleServiceClick} />;
    }
  };

  // Hide Header/Footer on Admin Pages for cleaner look, or keep them. 
  // Let's keep them but Header handles navigation gracefully.
  const isFullScreen = currentPage === Page.ADMIN_LOGIN || currentPage === Page.ADMIN_PANEL;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {!isFullScreen && <Header currentPage={currentPage} onNavigate={handleNavigate} />}
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      {!isFullScreen && <Footer onNavigate={handleNavigate} />}
      
      {!isFullScreen && <WhatsAppButton />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <DoctorProvider>
      <AppContent />
    </DoctorProvider>
  );
};

export default App;
