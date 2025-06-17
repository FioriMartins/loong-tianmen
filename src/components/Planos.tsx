import React from 'react';

const Planos: React.FC = () => {
  return (
    <section id="planos" className="section">
      <div className="section-bg section-bg-1"></div>
      
      <div className="container mx-auto px-4 section-content">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Planos</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio e comece a transformar sua operação com nossas soluções tecnológicas avançadas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card-modern p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Básico</h3>
            <div className="text-3xl font-bold mb-6">R$ 199<span className="text-lg text-white">/mês</span></div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Gestão de estoque básica
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Controle de vendas
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Suporte por e-mail
              </li>
            </ul>
            <button className="btn btn-outline w-full">Selecionar</button>
          </div>
          
          <div className="card-modern p-8 text-center border border-accent" style={{ position: 'relative', zIndex: 2 }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
              Mais Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Profissional</h3>
            <div className="text-3xl font-bold mb-6">R$ 349<span className="text-lg text-white">/mês</span></div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tudo do plano Básico
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Integração com IA
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Relatórios avançados
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Suporte prioritário
              </li>
            </ul>
            <button className="btn btn-primary w-full">Selecionar</button>
          </div>
          
          <div className="card-modern p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Empresarial</h3>
            <div className="text-3xl font-bold mb-6">R$ 599<span className="text-lg text-white">/mês</span></div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tudo do plano Profissional
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                APIs personalizadas
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Integração com hardware
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Suporte 24/7
              </li>
            </ul>
            <button className="btn btn-outline w-full">Selecionar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planos;
