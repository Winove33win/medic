import React from 'react';
import { DOCTORS } from '../constants';

interface TeamProps {
  onDoctorClick: (id: number) => void;
}

const Team: React.FC<TeamProps> = ({ onDoctorClick }) => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Corpo Clínico</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Conheça os profissionais dedicados que fazem da nossa clínica um lugar de excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {DOCTORS.map((doctor) => (
            <div 
              key={doctor.id} 
              className="group space-y-4 cursor-pointer"
              onClick={() => onDoctorClick(doctor.id)}
            >
              <div className="aspect-w-3 aspect-h-3 relative overflow-hidden rounded-lg">
                <img 
                  className="object-cover shadow-lg rounded-lg w-full h-96 transform group-hover:scale-105 transition-transform duration-300" 
                  src={doctor.image} 
                  alt={doctor.name} 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white text-primary-600 px-4 py-2 rounded-full font-bold shadow-lg">Ver Perfil</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{doctor.name}</h3>
                  <p className="text-primary-600">{doctor.specialty}</p>
                </div>
                <div className="text-sm text-gray-500">
                  <p>{doctor.crm}</p>
                  <p className="mt-2 line-clamp-3">
                    {doctor.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;