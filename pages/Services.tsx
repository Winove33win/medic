import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

interface ServicesProps {
    onServiceClick: (id: number) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  
  const getIcon = (iconName: string) => {
    // @ts-ignore
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className="h-8 w-8 text-white" /> : null;
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nossos Serviços</h2>
          <p className="mt-4 text-lg text-gray-500">
            Oferecemos uma ampla gama de especialidades médicas e exames para cuidar de você e sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8 flex-1">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-600 shadow-lg mb-6">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                    <li className="flex items-center text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                        Consulta especializada
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                        Acompanhamento contínuo
                    </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 text-center">
                  <button 
                    onClick={() => onServiceClick(service.id)}
                    className="text-primary-600 font-medium hover:text-primary-800 text-sm uppercase tracking-wide"
                  >
                      Saiba mais
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;