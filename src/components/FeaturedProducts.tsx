import React from 'react';

const products = [
  {
    id: 1,
    name: 'Faith Journey Hoodie',
    price: '$45.00',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Buzos'
  },
  {
    id: 2,
    name: 'Grace & Love Tee',
    price: '$28.00',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Camisetas'
  },
  {
    id: 3,
    name: 'Spirit Collection Cap',
    price: '$24.00',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Accesorios'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-[#FCE1DA]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#875241] text-center mb-12">
          Productos Destacados
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4">
                  <p className="text-sm text-[#D6958A] mb-1">{product.category}</p>
                  <h3 className="text-lg font-medium text-[#875241]">{product.name}</h3>
                  <p className="text-[#875241]">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-[#875241] text-white px-8 py-3 rounded-full font-medium hover:bg-[#D6958A] transition-colors duration-200">
            Ver toda la colección
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;