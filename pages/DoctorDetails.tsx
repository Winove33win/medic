import React from 'react';
import { Page, Doctor } from '../types';
import { DOCTORS } from '../constants';
import { ArrowLeft, GraduationCap, Languages, Calendar, CheckCircle } from 'lucide-react';

interface DoctorDetailsProps {
  doctorId: number | null;
  onNavigate: (page: Page) => void;
}

const DoctorDetails: React.FC<DoctorDetailsProps> = ({ doctorId, onNavigate }) => {
  const doctor = DOCTORS.find(d => d.id === doctorId);

  if (!doctor) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold text-gray-700">Profissional não encontrado</h2>
        <button 
          onClick={() => onNavigate(Page.TEAM)}
          className="mt-4 text-primary-600 hover:text-primary-800 font-medium flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Equipe
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Hero Header */}
      <div className="bg-primary-600 h-64 w-full absolute top-20 left-0 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <button 
          onClick={() => onNavigate(Page.TEAM)}
          className="mb-6 text-white/90 hover:text-white flex items-center font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> Voltar para lista
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/3 bg-gray-100 relative">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover min-h-[300px] md:min-h-[500px]"
                fetchPriority="high"
                width="600"
                height="600"
              />
            </div>

            {/* Info Section */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold tracking-wide mb-2">
                    {doctor.specialty}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{doctor.name}</h1>
                  <p className="text-lg text-gray-500 mt-1">{doctor.crm}</p>
                </div>
                <button
                  onClick={() => onNavigate(Page.CONTACT)}
                  className="mt-4 md:mt-0 px-8 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Agendar Consulta
                </button>
              </div>

              <div className="prose max-w-none text-gray-600 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sobre</h3>
                <p className="leading-relaxed">{doctor.bio}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Education */}
                <div>
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-6 w-6 text-primary-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Formação Acadêmica</h3>
                  </div>
                  <ul className="space-y-3">
                    {doctor.education.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="h-1.5 w-1.5 bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Other Info */}
                <div className="space-y-8">
                  {/* Languages */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Languages className="h-6 w-6 text-primary-600 mr-2" />
                      <h3 className="text-lg font-bold text-gray-900">Idiomas</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((lang, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 text-primary-600 mr-2" />
                      <h3 className="text-lg font-bold text-gray-900">Dias de Atendimento</h3>
                    </div>
                    <ul className="space-y-2">
                      {doctor.availability.map((day, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {day}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;