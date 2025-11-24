import React from 'react';
import { Page } from '../types';
import { ArrowRight, Calendar, HeartPulse, Leaf, Stethoscope, Star } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';
import { useDoctors } from '../context/DoctorContext';
import { getIconComponent } from '../utils/iconHelper';

interface HomeProps {
  onNavigate: (page: Page) => void;
  onDoctorClick: (id: number) => void;
  onServiceClick: (id: number) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onDoctorClick, onServiceClick }) => {
  const { doctors } = useDoctors();

  const renderIcon = (iconName: string) => {
    const IconComponent = getIconComponent(iconName);
    return <IconComponent className="h-7 w-7 text-primary-600" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-emerald-50 opacity-80" aria-hidden />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-primary-700 font-medium">
                <HeartPulse className="h-5 w-5" />
                Medicina preventiva e atendimento acolhedor
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
                  Cuidado médico humanizado para cada fase da sua saúde
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl">
                  Equipe multidisciplinar, tecnologia de diagnóstico avançada e um ambiente minimalista que transmite calma para
                  você e sua família.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate(Page.CONTACT)}
                  className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-primary-700 transition"
                >
                  Agendar consulta
                  <Calendar className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate(Page.ABOUT)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-slate-700 font-semibold hover:border-primary-200 hover:text-primary-700 transition"
                >
                  Conheça a clínica
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-xl">
                {[{ label: 'Atendimento 07h às 19h', icon: Stethoscope }, { label: 'Ambiente seguro e higienizado', icon: Leaf }].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3">
                    <item.icon className="h-5 w-5 text-primary-600" />
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-primary-100/50 blur-3xl rounded-full" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1200"
                  alt="Equipe médica da Clínica Vida & Saúde"
                  className="w-full h-[420px] object-cover"
                  fetchPriority="high"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-2xl px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">Corpo clínico</p>
                    <p className="text-lg font-semibold text-slate-900">Especialistas em Cardiologia, Pediatria e Clínica Geral</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-[0.2em]">Especialidades</p>
            <h2 className="text-3xl font-semibold text-slate-900">Cuidado completo em um só lugar</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Diagnóstico ágil, acompanhamento próximo e exames integrados para você seguir bem.</p>
          </div>
          <button
            onClick={() => onNavigate(Page.SERVICES)}
            className="hidden md:inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
          >
            Todas as especialidades
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.slice(0, 6).map((service) => (
            <article
              key={service.id}
              className="group rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-lg transition cursor-pointer"
              onClick={() => onServiceClick(service.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  {renderIcon(service.icon)}
                </div>
                <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-primary-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>

        <button
          onClick={() => onNavigate(Page.SERVICES)}
          className="mt-8 inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
        >
          Ver todas as especialidades e exames
          <ArrowRight className="h-5 w-5" />
        </button>
      </section>

      {/* MÉDICOS */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-[0.2em]">Equipe</p>
              <h2 className="text-3xl font-semibold text-slate-900">Especialistas que cuidam de você</h2>
              <p className="mt-2 text-slate-600 max-w-2xl">Médicos dedicados, formados nas melhores instituições e focados em comunicação clara.</p>
            </div>
            <button
              onClick={() => onNavigate(Page.TEAM)}
              className="hidden md:inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
            >
              Ver equipe completa
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.slice(0, 3).map((doc) => (
              <article
                key={doc.id}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white shadow-sm hover:shadow-lg transition cursor-pointer"
                onClick={() => onDoctorClick(doc.id)}
              >
                <div className="h-52 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    src={doc.image}
                    alt={`Foto Dr(a) ${doc.name} - ${doc.specialty}`}
                    loading="lazy"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-600">
                    <Stethoscope className="h-4 w-4" />
                    {doc.specialty}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{doc.name}</h3>
                  <p className="text-sm text-slate-500">{doc.crm}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{doc.bio}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => onNavigate(Page.TEAM)}
            className="mt-8 inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
          >
            Ver equipe médica completa
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-[0.2em]">Experiências reais</p>
            <h2 className="text-3xl font-semibold text-slate-900">Pacientes que confiam na Vida & Saúde</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Atendimento humano, comunicação clara e resultados que geram tranquilidade.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article key={item.id} className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.avatar}
                  alt={`Foto de ${item.name}`}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">“{item.content}”</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-emerald-500 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_35%)]" aria-hidden />
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 text-center relative">
          <h2 className="text-3xl md:text-4xl font-semibold">Sua saúde em primeiro lugar, com menos espera e mais acolhimento.</h2>
          <p className="mt-4 text-lg text-primary-50 max-w-3xl mx-auto">
            Agende online, escolha o especialista e seja atendido em um ambiente pensado para a sua tranquilidade.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate(Page.CONTACT)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-primary-700 font-semibold shadow-sm hover:bg-primary-50 transition"
            >
              Agendar agora
              <Calendar className="h-5 w-5" />
            </button>
            <button
              onClick={() => onNavigate(Page.CONTACT)}
              className="inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 text-white font-semibold hover:bg-white/10 transition"
            >
              Fale com a equipe
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
