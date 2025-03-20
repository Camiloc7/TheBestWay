import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    text: 'The Best Way no solo me ha permitido expresar mi fe a través de la moda, sino que me ha conectado con una comunidad increíble de creyentes.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    text: 'Cada prenda tiene un significado especial que me recuerda mi camino de fe. La calidad es excelente y los diseños son únicos.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#875241] text-center mb-12">
          Testimonios que Inspiran
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#F9E5EE]/30 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <Quote className="w-8 h-8 text-[#D6958A] mb-2" />
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <p className="font-medium text-[#875241]">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-[#875241] font-medium hover:text-[#D6958A] transition-colors duration-200">
            Ver más testimonios →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;