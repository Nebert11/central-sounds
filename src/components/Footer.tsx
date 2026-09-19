import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, MapPin, Facebook, Instagram, Youtube, Twitter, Clock } from 'lucide-react';
import Logo from './Logo';
import { siteConfig, whatsappLink } from '@/config/site';
import { categories } from '@/data/products';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-gray-400 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex gap-3 pt-2">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[#E50914] transition-colors duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[#E50914] transition-colors duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[#E50914] transition-colors duration-200">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[#E50914] transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-sm text-gray-400 hover:text-[#E50914] transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-sm text-gray-400 hover:text-[#E50914] transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-[#E50914] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-[#E50914] transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-[#E50914] transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-400 hover:text-[#E50914] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2.5">
              {categories.slice(0, 7).map((cat) => (
                <li key={cat}>
                  <Link to={`/products?category=${encodeURIComponent(cat)}`} className="text-sm text-gray-400 hover:text-[#E50914] transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-[#E50914] shrink-0" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={whatsappLink('Hello Central Sounds!')} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4 mt-0.5 text-[#E50914] shrink-0" />
                  <span>{siteConfig.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 text-[#E50914] shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-[#E50914] shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock className="w-4 h-4 mt-0.5 text-[#E50914] shrink-0" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
