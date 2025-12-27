import { Heart, Calendar, Sparkles, Camera, Music, UtensilsCrossed } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Heart,
    title: 'Wedding Planning',
    description: 'From intimate ceremonies to grand celebrations, we craft unforgettable wedding experiences tailored to your love story.',
  },
  {
    icon: Calendar,
    title: 'Event Coordination',
    description: 'Seamless execution of corporate events, birthdays, and special occasions with meticulous attention to detail.',
  },
  {
    icon: Sparkles,
    title: 'Decoration & Styling',
    description: 'Transforming venues into magical spaces with elegant decor that reflects your unique vision and style.',
  },
  {
    icon: Camera,
    title: 'Photography & Video',
    description: 'Capturing every precious moment with professional photography and cinematic videography services.',
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Curating the perfect entertainment lineup to keep your guests engaged and create lasting memories.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Catering Services',
    description: 'Exquisite culinary experiences featuring diverse menus crafted to delight your guests.',
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive event planning solutions designed to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-[20px] p-8 shadow-[0_8px_30px_rgba(138,106,174,0.15)] hover:shadow-[0_12px_40px_rgba(138,106,174,0.25)] hover:-translate-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-[14px] flex items-center justify-center mb-6 shadow-[0_6px_20px_rgba(138,106,174,0.3)] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
