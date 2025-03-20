import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#875241] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Best Way</h3>
            <p className="text-white/80">
              Viste tu fe, crece en espíritu. Una marca que inspira el crecimiento espiritual.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Tienda', 'Nosotros', 'Blog', 'Eventos', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className="text-white/80 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Ayuda</h4>
            <ul className="space-y-2">
              {['FAQ', 'Envíos', 'Devoluciones', 'Guía de Tallas', 'Términos y Condiciones'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#F9E5EE] transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#F9E5EE] transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#F9E5EE] transition-colors duration-200">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} The Best Way. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;