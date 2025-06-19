import React from "react";

const Suporte: React.FC = () => {
  return (
    <section id="suporte" className="section">
      <div className="section-bg section-bg-1"></div>

      <div className="container mx-auto px-4 section-content">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Suporte
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">
              Canais de Atendimento
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-opacity-5 bg-white rounded-lg">
                <div className="mb-4 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">E-mail</h4>
                <p>loongcomputer@gmail.com</p>
                <p className="text-sm text-gray-400 mt-2">
                  Resposta em até 24h
                </p>
              </div>

              <div className="p-6 bg-opacity-5 bg-white rounded-lg">
                <div className="mb-4 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Telefone</h4>
                <p>(14) 99795-8339</p>
                <p className="text-sm text-gray-400 mt-2">Seg-Sex, 9h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suporte;
