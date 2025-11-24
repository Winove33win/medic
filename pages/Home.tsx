import React from 'react';
import { Page } from '../types';
import { Clock, Shield, Users, ArrowRight, Star, Calendar, CheckCircle } from 'lucide-react';
import { SERVICES, DOCTORS, TESTIMONIALS } from '../constants';
import * as Icons from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
  onDoctorClick: (id: number) => void;
  onServiceClick: (id: number) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onDoctorClick, onServiceClick }) => {
  
  const getIcon = (iconName: string) => {
    // @ts-ignore
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className="h-8 w-8 text-primary-600" /> : <Clock className="h-8 w-8" />;
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* SECTION 1: HERO */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Clínica Médica Vida & Saúde:</span>{' '}
                  <span className="block text-primary-600 xl:inline">Excelência em Cuidar de Você</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Referência em atendimento médico humanizado em São Paulo. Contamos com tecnologia de ponta e especialistas em Cardiologia, Pediatria e diversas áreas para garantir o seu bem-estar completo.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={() => onNavigate(Page.CONTACT)}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg"
                      aria-label="Agendar consulta médica online"
                    >
                      Agendar Consulta
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      onClick={() => onNavigate(Page.ABOUT)}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg"
                    >
                      Conheça a Clínica
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1200"
            alt="Equipe médica da Clínica Vida e Saúde em atendimento"
          />
        </div>
      </section>

      {/* SECTION 2: STATS/FEATURES */}
      <section className="bg-primary-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
            <div className="flex flex-col items-center text-white">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Horário Estendido</h3>
              <p className="mt-2 text-primary-100">Atendimento médico das 07h às 19h.</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Segurança e Higiene</h3>
              <p className="mt-2 text-primary-100">Protocolos rigorosos para sua saúde.</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Médicos Especialistas</h3>
              <p className="mt-2 text-primary-100">Corpo clínico formado nas melhores universidades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES PREVIEW */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Especialidades Médicas</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Serviços de Saúde Completos
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Da prevenção ao tratamento, oferecemos consultas e exames integrados.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service) => (
              <div 
                key={service.id} 
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => onServiceClick(service.id)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-50 text-primary-600 mb-4">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
             <button onClick={() => onNavigate(Page.SERVICES)} className="text-primary-600 font-semibold hover:text-primary-700 flex items-center justify-center mx-auto">
               Ver todas as especialidades e exames <ArrowRight className="ml-2 h-4 w-4"/>
             </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: ABOUT PREVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Sobre a Clínica Vida & Saúde
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Fundada em 2010 em São Paulo, nascemos com a missão de democratizar o acesso à saúde de qualidade. Com instalações modernas e um atendimento acolhedor, tratamos cada paciente como parte da nossa família, oferecendo diagnósticos precisos e ágeis.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">Mais de 50.000 atendimentos médicos realizados.</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">Certificação de Qualidade e Segurança.</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">Laboratório próprio para coleta de exames.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                  alt="Recepção moderna da clínica médica"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
            O que dizem nossos pacientes
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                   ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{item.content}"</p>
                <div className="flex items-center">
                  <img src={item.avatar} alt={`Foto de ${item.name}`} className="h-10 w-10 rounded-full object-cover mr-3" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TEAM PREVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Corpo Clínico Especializado</h2>
            <p className="mt-4 text-lg text-gray-500">Conheça nossos médicos cardiologistas, pediatras e especialistas.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DOCTORS.map((doc) => (
              <div 
                key={doc.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => onDoctorClick(doc.id)}
              >
                <img className="w-full h-48 object-cover" src={doc.image} alt={`Foto Dr(a) ${doc.name} - ${doc.specialty}`} />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium text-gray-900">{doc.name}</h3>
                  <p className="text-primary-600 text-sm mb-1">{doc.specialty}</p>
                  <p className="text-gray-400 text-xs mb-3">{doc.crm}</p>
                  <span className="text-primary-600 text-sm font-medium hover:underline">Ver perfil completo</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => onNavigate(Page.TEAM)} className="px-6 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors">
              Ver Equipe Médica Completa
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Sua saúde em primeiro lugar
          </h2>
          <p className="mt-4 text-xl text-primary-100">
            Agende sua consulta online agora mesmo ou entre em contato. Estamos prontos para atender você e sua família.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => onNavigate(Page.CONTACT)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 shadow-sm"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Consulta
            </button>
            <button
              onClick={() => onNavigate(Page.CONTACT)}
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-primary-700"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;