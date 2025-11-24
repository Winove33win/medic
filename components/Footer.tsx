import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Activity } from 'lucide-react';
import { Page } from '../types';
import { CONTACT_INFO } from '../constants';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6 text-primary-500" />
              <span className="ml-2 text-xl font-bold">Vida<span className="text-primary-500">&</span>Saúde</span>
            </div>
            <p className="text-gray-400 text-sm">
              Compromisso com a sua saúde e bem-estar. Tecnologia avançada e atendimento humanizado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate(Page.HOME)} className="text-gray-400 hover:text-white text-sm">Home</button></li>
              <li><button onClick={() => onNavigate(Page.ABOUT)} className="text-gray-400 hover:text-white text-sm">Sobre Nós</button></li>
              <li><button onClick={() => onNavigate(Page.SERVICES)} className="text-gray-400 hover:text-white text-sm">Serviços</button></li>
              <li><button onClick={() => onNavigate(Page.TEAM)} className="text-gray-400 hover:text-white text-sm">Corpo Clínico</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-2" /> {CONTACT_INFO.address}
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-2" /> {CONTACT_INFO.phone}
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-2" /> {CONTACT_INFO.email}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Clínica Vida & Saúde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;