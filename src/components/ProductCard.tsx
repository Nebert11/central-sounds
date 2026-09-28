import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/data/products';
import { formatPrice } from '@/data/products';
import { whatsappProductLink } from '@/config/site';
import WhatsAppIcon from './WhatsAppIcon';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Link to={`/products/${product.id}`} className="relative aspect-[4/3] overflow-hidden bg-gray-50 block">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white bg-black/70 backdrop-blur-sm rounded-full">
          {product.category}
        </span>
      </Link>

      <div className="flex flex-col flex-1 p-5">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-base font-bold text-black mb-1 group-hover:text-[#E50914] transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3 flex-1">
          {product.shortDescription}
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="text-sm font-semibold text-gray-700">
              {product.price ? formatPrice(product.price) : 'Contact us for price'}
            </span>
            <a
              href={whatsappProductLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ask about ${product.name} on WhatsApp`}
              className="flex items-center justify-center gap-1.5 w-full sm:w-auto h-9 px-3 rounded-xl sm:rounded-full bg-[#25D366] text-white hover:bg-[#1ebe57] transition-colors shrink-0"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span className="text-xs font-semibold">WhatsApp</span>
            </a>
          </div>
          <Link
            to={`/products/${product.id}`}
            className="flex items-center justify-center gap-1 text-sm font-semibold text-[#E50914] hover:text-[#c40812] transition-colors"
          >
            View Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

