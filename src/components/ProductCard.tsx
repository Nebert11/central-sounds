import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/data/products';
import { formatPrice } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white bg-black/70 backdrop-blur-sm rounded-full">
          {product.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-black mb-1 group-hover:text-[#E50914] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3 flex-1">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700">
            {product.price ? formatPrice(product.price) : 'Contact us for price'}
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-[#E50914]">
            View Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
