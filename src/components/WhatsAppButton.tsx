import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '2348012345678';
  const message = 'Hi Purple Events! I would like to discuss planning my event.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_12px_40px_rgba(34,197,94,0.5)] hover:-translate-y-1 hover:scale-110 transition-all duration-300 z-50 animate-pulse-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full" />
    </a>
  );
}
