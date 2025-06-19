import React from "react";
import HardwareModel from "./HardwareModel";

const Hardware: React.FC = () => {
  return (
    <section id="hardware" className="section">
      <div className="section-bg section-bg-2"></div>

      <div className="container mx-auto px-4 section-content">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Hardware
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Ecossistema Completo
              </h3>
              <p className="text-gray-300 mb-6">
                Estamos desenvolvendo uma linha de hardware próprio, criando um
                ecossistema completo e integrado para otimizar ainda mais a
                experiência dos nossos clientes.
              </p>
              <p className="text-gray-300 mb-6">
                Nossa visão é oferecer soluções que combinam software e hardware
                perfeitamente alinhados, eliminando problemas de compatibilidade
                e maximizando a eficiência operacional.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="card-modern p-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-3 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                  <span>Processadores otimizados</span>
                </div>
                <div className="card-modern p-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-3 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Dispositivos móveis</span>
                </div>
                <div className="card-modern p-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-3 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Segurança integrada</span>
                </div>
              </div>
            </div>
            <div className="card-modern p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Loong Hexie
              </h3>
              <HardwareModel />
              {/* <div className="mt-8 text-center">
                <button className="btn btn-outline">
                  Solicitar Demonstração
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware;
