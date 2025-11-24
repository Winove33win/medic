import React from 'react';
import { Page, Service } from '../types';
import { SERVICES } from '../constants';
import { ArrowLeft, Clock, CheckCircle, FileText, Calendar } from 'lucide-react';
import { getIconComponent } from '../utils/iconHelper';

interface ServiceDetailsProps {
  serviceId: number | null;
  onNavigate: (page: Page) => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ serviceId, onNavigate }) => {
  const service = SERVICES.find(s => s.id === serviceId);

  const renderIcon = (iconName: string) => {
    const IconComponent = getIconComponent(iconName);
    return <IconComponent className="h-12 w-12 text-primary-600" />;
  };

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold text-gray-700">Serviço não encontrado</h2>
        <button 
          onClick={() => onNavigate(Page.SERVICES)}
          className="mt-4 text-primary-600 hover:text-primary-800 font-medium flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Serviços
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Header */}
      <div className="bg-primary-50 py-12 border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <button 
            onClick={() => onNavigate(Page.SERVICES)}
            className="mb-8 text-primary-600 hover:text-primary-800 flex items-center font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Voltar para Serviços
          </button>
          
          <div className="flex items-center">
            <div className="p-4 bg-white rounded-2xl shadow-sm mr-6">
                {renderIcon(service.icon)}
            </div>
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{service.title}</h1>
                <p className="mt-2 text-xl text-gray-500">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Sobre o Procedimento</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {service.fullDescription || service.description}
                    </p>
                </section>

                {service.features && (
                    <section>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">O que está incluído</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-lg">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {service.preparation && (
                    <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <FileText className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div className="ml-3">
                                <h3 className="text-lg font-bold text-yellow-800">Preparo Necessário</h3>
                                <div className="mt-2 text-yellow-700">
                                    <p>{service.preparation}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>

            {/* Sidebar / CTA */}
            <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-24">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Informações Rápidas</h3>
                    
                    <div className="space-y-6 mb-8">
                        {service.duration && (
                            <div className="flex items-center">
                                <Clock className="h-5 w-5 text-primary-600 mr-3" />
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Duração Estimada</p>
                                    <p className="text-gray-900 font-semibold">{service.duration}</p>
                                </div>
                            </div>
                        )}
                         <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary-600 mr-3" />
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Disponibilidade</p>
                                <p className="text-gray-900 font-semibold">Segunda a Sexta</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <button 
                            onClick={() => onNavigate(Page.CONTACT)}
                            className="w-full bg-primary-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-xl flex items-center justify-center"
                        >
                            Agendar Agora
                        </button>
                        <p className="text-xs text-center text-gray-400">
                            Agendamento sujeito a disponibilidade.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;