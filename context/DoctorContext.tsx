import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Doctor } from '../types';
import { DOCTORS as INITIAL_DOCTORS } from '../constants';

interface DoctorContextType {
  doctors: Doctor[];
  addDoctor: (doctor: Omit<Doctor, 'id'>) => void;
  updateDoctor: (doctor: Doctor) => void;
  deleteDoctor: (id: number) => void;
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const DoctorContext = createContext<DoctorContextType | undefined>(undefined);

export const DoctorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [doctors, setDoctors] = useState<Doctor[]>(() => {
    const saved = localStorage.getItem('doctors');
    return saved ? JSON.parse(saved) : INITIAL_DOCTORS;
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('doctors', JSON.stringify(doctors));
  }, [doctors]);

  const addDoctor = (doctorData: Omit<Doctor, 'id'>) => {
    const newId = doctors.length > 0 ? Math.max(...doctors.map(d => d.id)) + 1 : 1;
    const newDoctor = { ...doctorData, id: newId };
    setDoctors([...doctors, newDoctor]);
  };

  const updateDoctor = (updatedDoctor: Doctor) => {
    setDoctors(doctors.map(doc => doc.id === updatedDoctor.id ? updatedDoctor : doc));
  };

  const deleteDoctor = (id: number) => {
    setDoctors(doctors.filter(doc => doc.id !== id));
  };

  const login = (password: string) => {
    // Hardcoded simple auth for demonstration
    if (password === 'admin123') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  return (
    <DoctorContext.Provider value={{ doctors, addDoctor, updateDoctor, deleteDoctor, isAdmin, login, logout }}>
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctors = () => {
  const context = useContext(DoctorContext);
  if (context === undefined) {
    throw new Error('useDoctors must be used within a DoctorProvider');
  }
  return context;
};
