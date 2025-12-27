import { Instagram, Facebook, Twitter, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const instagramPosts = [
    'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=300',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-[0_4px_15px_rgba(138,106,174,0.3)]">
                PE
              </div>
              <span className="font-playfair font-bold text-xl">Purple Events</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Creating unforgettable moments and bringing your dreams to life, one event at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/purple_eventss"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-xl mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Wedding Planning</li>
              <li>Event Coordination</li>
              <li>Decoration & Styling</li>
              <li>Photography & Video</li>
              <li>Entertainment</li>
              <li>Catering Services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-xl mb-6">Instagram Feed</h3>
            <div className="grid grid-cols-3 gap-2">
              {instagramPosts.map((post, index) => (
                <a
                  key={index}
                  href="https://instagram.com/purple_eventss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square rounded-lg overflow-hidden hover:opacity-75 transition-opacity"
                >
                  <img src={post} alt={`Instagram post ${index + 1}`} className="w-full h-full object-cover" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Purple Events. Made with <Heart className="inline w-4 h-4 text-purple-500" /> in Jos & Abuja
          </p>
          <p className="text-gray-400 text-sm">
            Follow us @purple_eventss on Instagram
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(138,106,174,0.4)] hover:shadow-[0_12px_40px_rgba(138,106,174,0.5)] hover:-translate-y-1 transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}
