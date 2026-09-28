import WhatsAppIcon from './WhatsAppIcon';
import { whatsappLink } from '@/config/site';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Hello Central Sounds, I would like to inquire about your products and services.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
}
