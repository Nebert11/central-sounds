import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/config/site';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Hello Central Sounds, I would like to inquire about your products and services.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0 transition-opacity" />
    </a>
  );
}
