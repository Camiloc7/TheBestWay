import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#875241]/80 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Vístete con propósito, crece en fe
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Descubre una colección que no solo viste tu cuerpo, sino que inspira tu espíritu y fortalece tu fe.
            </p>
            <button className="bg-white text-[#875241] px-8 py-3 rounded-full font-medium hover:bg-[#F9E5EE] transition-colors duration-200">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;