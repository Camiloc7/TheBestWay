"use client";

import React, { useState } from 'react';
import { ShoppingBag, Menu, Search, User, ChevronDown, Heart } from 'lucide-react';

const NabVar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Definir explícitamente el tipo de `categories`
  type CategoryWithFeatured = {
    featured: { name: string; image: string }[];
    sections: { title: string; items: string[] }[];
  };
  
  type CategoryWithoutFeatured = {
    sections: { title: string; items: string[] }[];
  };
  
  type Categories = {
    [key: string]: CategoryWithFeatured | CategoryWithoutFeatured;
  };
  
  const categories: Categories = {
    'Tienda': {
      featured: [
        { name: 'Nueva Colección', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { name: 'Más Vendidos', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
      ],
      sections: [
        {
          title: 'Categorías',
          items: ['Buzos', 'Camisetas', 'Gorras', 'Accesorios']
        },
        {
          title: 'Colecciones',
          items: ['Fe y Propósito', 'Espíritu Joven', 'Gracia Diaria']
        }
      ]
    },
    'Blog': {
      sections: [
        {
          title: 'Temas Populares',
          items: ['Crecimiento Espiritual', 'Moda Cristiana', 'Testimonios', 'Vida y Fe']
        }
      ]
    }
  };

  // Type guard para verificar si una categoría tiene 'featured'
const hasFeatured = (category: CategoryWithFeatured | CategoryWithoutFeatured): category is CategoryWithFeatured => {
  return 'featured' in category; // Verifica si 'featured' es una propiedad de 'category'
};


  return (
    <>
      <header className="fixed w-full bg-white shadow-sm z-50">
        {/* Top Bar */}
        <div className="bg-[#875241] text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-sm">
            <p>✨ Envío gratis en pedidos superiores a $50 ✨</p>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-serif font-bold text-[#875241]">
                The Best Way
              </h1>
              <p className="text-sm text-[#D6958A]">Viste tu fe, crece en espíritu</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {Object.keys(categories).concat(['Inicio', 'Nosotros', 'Eventos', 'Contacto']).map((item) => (
                <div
                  key={item}
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(item)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <button className="flex items-center space-x-1 py-2 text-gray-700 hover:text-[#875241] transition-colors duration-200">
                    <span>{item}</span>
                    {/* Usamos el type guard para verificar si la categoría tiene 'featured' */}
                    {activeCategory && hasFeatured(categories[activeCategory]) && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </button>
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-[#875241] transition-colors duration-200">
                <Search className="w-5 h-5" />
                <span className="text-sm">Buscar</span>
              </button>
              <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-[#875241] transition-colors duration-200">
                <User className="w-5 h-5" />
                <span className="text-sm">Cuenta</span>
              </button>
              <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-[#875241] transition-colors duration-200">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Favoritos</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-[#875241] transition-colors duration-200">
                <ShoppingBag className="w-5 h-5" />
                <span className="text-sm">Carrito (0)</span>
              </button>
              <button 
                className="lg:hidden p-2 hover:bg-[#F9E5EE] rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5 text-[#875241]" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        {activeCategory && categories[activeCategory] && (
          <div 
            className="absolute left-0 w-full bg-white shadow-lg border-t border-gray-100"
            onMouseEnter={() => setActiveCategory(activeCategory)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              <div className="grid grid-cols-12 gap-8">
                {/* Featured Items */}
                {activeCategory && hasFeatured(categories[activeCategory]) && (
                  <div className="col-span-4">
                    <h3 className="text-lg font-medium text-[#875241] mb-4">Destacados</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {categories[activeCategory].featured.map((item, index) => (
                        <div key={index} className="group cursor-pointer">
                          <div className="relative overflow-hidden rounded-lg">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <p className="text-white font-medium">{item.name}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Menu Sections */}
                <div className={`${hasFeatured(categories[activeCategory]) ? 'col-span-8' : 'col-span-12'} grid grid-cols-3 gap-8`}>
                  {categories[activeCategory].sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-medium text-[#875241] mb-4">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-[#875241] transition-colors duration-200"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NabVar;
