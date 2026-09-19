import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Seo from '@/components/Seo';
import { siteConfig } from '@/config/site';

export default function NotFoundPage() {
  return (
    <>
      <Seo title={`Page Not Found — ${siteConfig.name}`} />
      <section className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white px-4">
        <div className="text-center">
          <h1 className="text-8xl lg:text-9xl font-extrabold text-[#E50914] mb-4">404</h1>
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Page Not Found</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E50914] text-white font-semibold rounded-lg hover:bg-[#c40812] transition-colors"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <Link
              to="/products"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
