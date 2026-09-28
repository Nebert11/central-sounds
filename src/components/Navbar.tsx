import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappLink } from '@/config/site';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-2 z-50 bg-transparent px-3 py-1 sm:px-5 sm:py-2">
      <nav className="mx-auto w-full max-w-[1760px] rounded-[2.5rem] border border-zinc-600/80 bg-[#101012]/80 shadow-[0_16px_35px_rgba(0,0,0,0.4)] backdrop-blur-md min-[1440px]:w-[60vw]">
        <div className="flex h-[48px] items-center justify-between px-5 sm:px-8 min-[1440px]:h-[64px] min-[1440px]:px-12">
          <Logo variant="light" className="w-[96px] sm:w-[112px] min-[1440px]:w-[130px]" />

          <div className="hidden min-[1440px]:flex min-[1440px]:items-center min-[1440px]:gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-2 py-2 text-sm font-bold uppercase tracking-[0.14em] transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-500 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden min-[1440px]:flex min-[1440px]:items-center">
            <a
              href={whatsappLink('Hello Central Sounds, I would like to inquire about your products and services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[52px] items-center gap-1 rounded-lg bg-[#e40024] px-4 text-xs font-bold uppercase tracking-[0.10em] text-white transition-colors duration-200 hover:bg-[#bd001d]"
            >
              Talk To Us
            </a>
          </div>

          <button
            className="p-2 text-white min-[1440px]:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 min-[1440px]:hidden ${
          menuOpen ? 'max-h-[500px] border-t border-zinc-700' : 'max-h-0'
        }`}
      >
        <div className="space-y-1 bg-[#101012] px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `block px-4 py-3 text-base font-semibold rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={whatsappLink('Hello Central Sounds, I would like to inquire about your products and services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#e40024] px-5 py-3 text-base font-bold text-white transition-colors duration-200 hover:bg-[#bd001d]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Talk To Us
          </a>
        </div>
      </div>
    </header>
  );
}
