import React, { useState } from 'react';
import { DOCTORS } from '../constants';
import { Search, Filter, XCircle } from 'lucide-react';

interface TeamProps {
  onDoctorClick: (id: number) => void;
}

const Team: React.FC<TeamProps> = ({ onDoctorClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Todas');

  // Extract unique specialties from the DOCTORS list
  const specialties = ['Todas', ...Array.from(new Set(DOCTORS.map(d => d.specialty)))];

  // Filter doctors based on search term and selected specialty
  const filteredDoctors = DOCTORS.filter(doctor => {
    const matchesName = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'Todas' || doctor.specialty === selectedSpecialty;
    return matchesName && matchesSpecialty;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSpecialty('Todas');
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Corpo Clínico</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Conheça os profissionais dedicados que fazem da nossa clínica um lugar de excelência.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-1/2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Buscar médico por nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Specialty Filter */}
            <div className="relative w-full md:w-1/3 flex items-center">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm appearance-none cursor-pointer"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty === 'Todas' ? 'Todas as Especialidades' : specialty}
                  </option>
                ))}
              </select>
               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filteredDoctors.map((doctor) => (
              <div 
                key={doctor.id} 
                className="group space-y-4 cursor-pointer animate-fade-in"
                onClick={() => onDoctorClick(doctor.id)}
              >
                <div className="aspect-w-3 aspect-h-3 relative overflow-hidden rounded-lg">
                  <img 
                    className="object-cover shadow-lg rounded-lg w-full h-96 transform group-hover:scale-105 transition-transform duration-300" 
                    src={doctor.image} 
                    alt={doctor.name}
                    loading="lazy"
                    width="400"
                    height="400"
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
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <div className="flex justify-center mb-4">
              <XCircle className="h-12 w-12 text-gray-300" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Nenhum médico encontrado</h3>
            <p className="mt-1 text-gray-500">
              Não encontramos resultados para "{searchTerm}" {selectedSpecialty !== 'Todas' && `em ${selectedSpecialty}`}.
            </p>
            <button
              onClick={clearFilters}
              className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;