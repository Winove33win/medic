import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Fale Conosco</h2>
          <p className="mt-4 text-lg text-gray-500">
            Estamos prontos para atender você. Agende sua consulta ou tire suas dúvidas pelos nossos canais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-bold text-gray-900">Telefone</p>
                  <p className="text-gray-700 font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-bold text-gray-900">Email</p>
                  <p className="text-gray-700 font-medium">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-bold text-gray-900">Endereço</p>
                  <p className="text-gray-700 font-medium">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-bold text-gray-900">Horário de Atendimento</p>
                  <p className="text-gray-700 font-medium">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-medium border border-gray-300">
              {/* Placeholder map */}
              <span>Mapa Google Maps aqui</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-900">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-400"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-400"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-400"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-900">Assunto</label>
                <select
                  id="subject"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
                >
                  <option className="text-gray-900">Agendamento de Consulta</option>
                  <option className="text-gray-900">Dúvidas sobre Exames</option>
                  <option className="text-gray-900">Financeiro</option>
                  <option className="text-gray-900">Outros</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-400"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;