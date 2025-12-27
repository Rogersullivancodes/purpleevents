import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    alert('Thank you for reaching out! We\'ll get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
            Let's Create Magic Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to plan your dream event? Get in touch with us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-[24px] p-8 md:p-12 shadow-[0_8px_30px_rgba(138,106,174,0.15)]">
            <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-[12px] flex items-center justify-center flex-shrink-0 shadow-[0_4px_15px_rgba(138,106,174,0.3)]">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <a href="tel:+2348012345678" className="text-gray-600 hover:text-purple-600 transition-colors">
                    +234 801 234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-[12px] flex items-center justify-center flex-shrink-0 shadow-[0_4px_15px_rgba(138,106,174,0.3)]">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <a href="mailto:info@purpleevents.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                    info@purpleevents.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-[12px] flex items-center justify-center flex-shrink-0 shadow-[0_4px_15px_rgba(138,106,174,0.3)]">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Locations</p>
                  <p className="text-gray-600">Jos, Plateau State</p>
                  <p className="text-gray-600">Abuja, FCT</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-[16px] shadow-[0_4px_20px_rgba(138,106,174,0.1)]">
              <p className="text-gray-700 italic leading-relaxed">
                "Purple Events made our wedding day absolutely perfect! Their attention to detail and creative vision exceeded all our expectations."
              </p>
              <p className="text-purple-600 font-semibold mt-4">- Happy Couple</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-8 md:p-12 shadow-[0_8px_30px_rgba(138,106,174,0.15)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-[12px] border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all shadow-inner"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-[12px] border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all shadow-inner"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-[12px] border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all shadow-inner"
                  placeholder="+234 800 000 0000"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-[12px] border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all shadow-inner bg-white"
                >
                  <option value="">Select an event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell us about your event
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-[12px] border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all shadow-inner resize-none"
                  placeholder="Share your vision with us..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-[14px] font-semibold text-lg shadow-[0_8px_30px_rgba(138,106,174,0.3)] hover:shadow-[0_12px_40px_rgba(138,106,174,0.4)] hover:-translate-y-1 active:translate-y-0 active:shadow-[0_4px_20px_rgba(138,106,174,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? 'Sending...' : 'Plan Your Dream Event'}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
