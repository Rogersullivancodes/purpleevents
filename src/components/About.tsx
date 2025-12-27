import { useEffect, useRef, useState } from 'react';
import { Users, Instagram, Award } from 'lucide-react';

export default function About() {
  const [counts, setCounts] = useState({ followers: 0, posts: 0, events: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount('followers', 7500, 2000);
            animateCount('posts', 3666, 2000);
            animateCount('events', 500, 2000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = (key: 'followers' | 'posts' | 'events', target: number, duration: number) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
    }, 16);
  };

  const stats = [
    {
      icon: Instagram,
      value: `${counts.followers.toLocaleString()}+`,
      label: 'Instagram Followers',
    },
    {
      icon: Award,
      value: `${counts.events}+`,
      label: 'Events Planned',
    },
    {
      icon: Users,
      value: `${counts.posts.toLocaleString()}+`,
      label: 'Happy Clients',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
              About Purple Events
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Based in Jos and Abuja, Purple Events is your premier partner in creating extraordinary celebrations. With years of experience and a passion for perfection, we transform dreams into reality.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our dedicated team of creative professionals specializes in crafting bespoke events that reflect your unique style and personality. From intimate gatherings to grand celebrations, we handle every detail with precision and care.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-white rounded-[14px] shadow-[0_6px_20px_rgba(138,106,174,0.15)]"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://instagram.com/purple_eventss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-[14px] font-semibold shadow-[0_8px_30px_rgba(138,106,174,0.3)] hover:shadow-[0_12px_40px_rgba(138,106,174,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow @purple_eventss
            </a>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-[0_20px_60px_rgba(138,106,174,0.4)] ring-8 ring-white">
                <img
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Purple Events"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
