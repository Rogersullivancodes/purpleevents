import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const portfolioImages = [
  {
    url: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: '#TheNedu',
    category: 'Wedding',
  },
  {
    url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: '#FERYA25',
    category: 'Wedding',
  },
  {
    url: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: '#NenLong',
    category: 'Corporate Event',
  },
  {
    url: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: '#Peesful25',
    category: 'Wedding',
  },
  {
    url: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: '#CK2',
    category: 'Celebration',
  },
  {
    url: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Luxury Decor',
    category: 'Wedding',
  },
  {
    url: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Garden Wedding',
    category: 'Wedding',
  },
  {
    url: 'https://images.pexels.com/photos/2788775/pexels-photo-2788775.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Table Setting',
    category: 'Reception',
  },
  {
    url: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Floral Elegance',
    category: 'Decoration',
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<typeof portfolioImages[0] | null>(null);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            portfolioImages.forEach((_, index) => {
              setTimeout(() => {
                setVisibleImages((prev) => [...prev, index]);
              }, index * 100);
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
    <section id="portfolio" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into the magical moments we've created
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioImages.map((image, index) => {
            const isVisible = visibleImages.includes(index);

            return (
              <div
                key={index}
                className={`break-inside-avoid group relative overflow-hidden rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(138,106,174,0.3)] transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="text-purple-200 text-sm mb-1">{image.category}</p>
                    <h3 className="text-white text-xl font-playfair font-bold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-5xl max-h-[90vh] overflow-auto">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-[20px] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-6">
              <p className="text-purple-300 text-sm mb-1">{selectedImage.category}</p>
              <h3 className="text-white text-2xl font-playfair font-bold">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
