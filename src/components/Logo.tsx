import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`group block w-[170px] sm:w-[190px] rounded-lg transition-transform duration-300 hover:scale-[1.02] ${
        variant === 'light' ? 'bg-white px-2 py-1' : ''
      } ${className}`}
      aria-label="Central Sounds home"
    >
      <img
        src="/logo.png"
        alt="Central Sounds — Your Sound, Our Passion"
        className="block w-full h-auto object-contain"
      />
    </Link>
  );
}
