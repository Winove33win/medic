import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Sobre a Clínica Vida & Saúde</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            História, missão e valores que guiam nosso atendimento diário.
          </p>
        </div>

        {/* History Section */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-12">
            <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=800" 
                  alt="História da clínica" 
                  className="rounded-lg shadow-lg"
                  loading="lazy"
                  width="800"
                  height="600"
                />
            </div>
            <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa História</h3>
                <p className="text-gray-600 mb-4">
                    A Clínica Vida & Saúde iniciou suas atividades em 2010 com o objetivo de oferecer um atendimento médico de excelência, acessível e humanizado. Começamos em um pequeno consultório e hoje somos referência na região, com uma estrutura completa e multidisciplinar.
                </p>
                <p className="text-gray-600">
                    Ao longo desses anos, investimos constantemente em tecnologia e na capacitação de nossa equipe, garantindo diagnósticos precisos e tratamentos eficazes para milhares de famílias.
                </p>
            </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-primary-600 mb-3">Missão</h4>
                <p className="text-gray-600">Promover a saúde e o bem-estar através de um atendimento médico de qualidade, ético e humanizado.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-primary-600 mb-3">Visão</h4>
                <p className="text-gray-600">Ser reconhecida como a melhor clínica da região pela excelência no cuidado ao paciente e inovação em saúde.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-primary-600 mb-3">Valores</h4>
                <ul className="text-gray-600 list-disc list-inside">
                    <li>Ética e Transparência</li>
                    <li>Humanização</li>
                    <li>Comprometimento</li>
                    <li>Inovação</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;