import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="section">
      <div className="section-bg section-bg-1"></div>
      
      <div className="container mx-auto px-4 section-content">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sobre o Projeto</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="mb-6 text-lg">
            Somos uma empresa de tecnologia focada no desenvolvimento de softwares de gestão e equipamentos 
            de automação para empresas de serviços e varejo em geral. Nosso objetivo é criar um ambiente 
            confortável e eficiente, onde os usuários possam se concentrar no que realmente importa: 
            fazer o seu trabalho.
          </p>
          
          <p className="mb-6 text-lg">
            Inspirados pela relação entre mestre e aluno, sábio e curioso, ou Jedi e Padawan, 
            buscamos oferecer:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="p-6 bg-opacity-10 bg-white rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Soluções modernas</h3>
              <p>Utilizando linguagens de programação atuais, com integração de IA e APIs.</p>
            </div>
            
            <div className="p-6 bg-opacity-10 bg-white rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Suporte de verdade</h3>
              <p>Um suporte acessível e eficiente, que resolve problemas de forma prática.</p>
            </div>
            
            <div className="p-6 bg-opacity-10 bg-white rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Visão de futuro</h3>
              <p>Planejamos desenvolver hardware próprio, criando um ecossistema completo e integrado.</p>
            </div>
          </div>
          
          <blockquote className="italic text-center text-lg border-l-4 border-accent pl-4 py-2 my-8">
            "Como um ferreiro que molda o ferro quente na bigorna, nosso projeto é apenas o primeiro golpe; 
            o verdadeiro valor se forjará em cada uso, gerando transformações que transcendem nosso alcance."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
