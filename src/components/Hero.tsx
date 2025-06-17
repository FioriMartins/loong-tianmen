import React from 'react';
import SplitText from './SplitText'

const Hero: React.FC = () => {
  // Função para rolagem suave
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Ajuste para compensar o header
        behavior: 'smooth'
      });
    }
  };

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section className="hero-section">
      <div className="section-bg section-bg-1"></div>
      
      <div className="container mx-auto px-4 section-content">
        
    <SplitText
        text="Seu Comércio"
        className="text-2xl font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
    />
      <p className="text-xl md:text-2xl mb-8">+ Inteligente + Prático + Fácil</p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="#sobre" 
            className="btn btn-primary"
            onClick={(e) => scrollToSection(e, 'sobre')}
          >
            Saiba Mais
          </a>
          <a 
            href="#planos" 
            className="btn btn-outline"
            onClick={(e) => scrollToSection(e, 'planos')}
          >
            Ver Planos
          </a>
        </div>
        
        <p className="mt-12 max-w-2xl mx-auto text-center">
          Conheça o software ERP feito para empresas que desejam 
          maior aproveitamento em suas atividades!
        </p>
      </div>
    </section>
  );
};

export default Hero;
