import React from 'react';

const Suporte: React.FC = () => {
  return (
    <section id="suporte" className="section">
      <div className="section-bg section-bg-1"></div>
      
      <div className="container mx-auto px-4 section-content">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Suporte</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-modern p-8">
              <h3 className="text-2xl font-semibold mb-6">Suporte de Verdade</h3>
              <p className="mb-6">
                Nosso suporte técnico é formado por especialistas que entendem profundamente nossos produtos 
                e estão preparados para resolver seus problemas de forma rápida e eficiente.
              </p>
              <p className="mb-6">
                Diferente de outras empresas, não terceirizamos nosso suporte. Você sempre falará 
                diretamente com quem realmente conhece o sistema.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Tempo médio de resposta: 2 horas</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Resolução no primeiro contato: 85%</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Satisfação dos clientes: 97%</span>
                </div>
              </div>
            </div>
            
            <div className="card-modern p-8">
              <h3 className="text-2xl font-semibold mb-6">Entre em Contato</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 bg-opacity-10 bg-white rounded border border-gray-700 focus:border-accent focus:outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 bg-opacity-10 bg-white rounded border border-gray-700 focus:border-accent focus:outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full p-3 bg-opacity-10 bg-white rounded border border-gray-700 focus:border-accent focus:outline-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">Enviar Mensagem</button>
              </form>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">Canais de Atendimento</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-opacity-5 bg-white rounded-lg">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">E-mail</h4>
                <p>suporte@empresa.com.br</p>
                <p className="text-sm text-gray-400 mt-2">Resposta em até 24h</p>
              </div>
              
              <div className="p-6 bg-opacity-5 bg-white rounded-lg">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Telefone</h4>
                <p>(00) 1234-5678</p>
                <p className="text-sm text-gray-400 mt-2">Seg-Sex, 9h às 18h</p>
              </div>
              
              <div className="p-6 bg-opacity-5 bg-white rounded-lg">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Chat</h4>
                <p>Suporte em tempo real</p>
                <p className="text-sm text-gray-400 mt-2">Disponível 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suporte;
