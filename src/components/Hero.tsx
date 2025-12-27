import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-600/30 to-pink-500/20 z-10" />

      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center animate-ken-burns" />

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 text-white">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-white p-2 shadow-[0_8px_30px_rgba(138,106,174,0.4)]">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                PE
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 tracking-tight">
            Purple Events
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 tracking-wide">
            You Dream It, We Create It
          </p>

          <p className="text-lg md:text-xl text-purple-100 mb-12">
            Jos & Abuja Event Planner
          </p>

          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-10 py-5 bg-white text-purple-600 rounded-[14px] font-semibold text-lg shadow-[0_8px_30px_rgba(138,106,174,0.3)] hover:shadow-[0_12px_40px_rgba(138,106,174,0.4)] hover:-translate-y-1 active:translate-y-0 active:shadow-[0_4px_20px_rgba(138,106,174,0.3)] transition-all duration-300"
          >
            Begin Your Journey
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <button
          onClick={() => scrollToSection('services')}
          className="absolute bottom-12 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white opacity-75" />
        </button>
      </div>
    </section>
  );
}
