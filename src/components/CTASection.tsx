import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config/site';
import WhatsAppIcon from './WhatsAppIcon';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = 'Looking for the right sound equipment?',
  subtitle = 'Talk to our team today and find the perfect audio solution for your needs.',
}: CTASectionProps) {
  return (
    <section className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">{title}</h2>
          <p className="text-lg text-gray-400 mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink('Hello Central Sounds, I would like to talk to your team about audio equipment.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 bg-[#E50914] text-white font-semibold rounded-lg hover:bg-[#c40812] transition-colors duration-200 shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
            <Link
              to="/products"
              className="flex items-center gap-2 px-7 py-3.5 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
