import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Phone, Mail, Check, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Seo from '@/components/Seo';
import ProductCard from '@/components/ProductCard';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { getProductById, getRelatedProducts, formatPrice } from '@/data/products';
import { siteConfig, whatsappProductLink } from '@/config/site';

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!product) {
    return (
      <>
        <Seo title={`Product Not Found — ${siteConfig.name}`} />
        <section className="min-h-[70vh] flex items-center justify-center bg-[#F5F5F5] pt-20">
          <div className="text-center px-4">
            <h1 className="text-4xl font-extrabold text-black mb-4">Product Not Found</h1>
            <p className="text-gray-500 mb-8">
              The product you are looking for does not exist or has been removed.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E50914] text-white font-semibold rounded-lg hover:bg-[#c40812] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Products
            </Link>
          </div>
        </section>
      </>
    );
  }

  const related = getRelatedProducts(product);
  const whatsappUrl = whatsappProductLink(product.name);

  const nextImage = () => setActiveImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <>
      <Seo
        title={`${product.name} — ${siteConfig.name}`}
        description={product.shortDescription}
      />

      <section className="bg-white pt-24 lg:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-[#E50914] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#E50914] transition-colors">Products</Link>
            <span>/</span>
            <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-[#E50914] transition-colors">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-black font-medium truncate">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 group cursor-pointer">
                <img
                  src={product.images[activeImage]}
                  alt={`${product.name} — image ${activeImage + 1}`}
                  className="w-full h-full object-cover"
                  onClick={() => setLightboxOpen(true)}
                />
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Zoom image"
                >
                  <ZoomIn className="w-5 h-5 text-black" />
                </button>
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-black" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                  </>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-5 gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === idx
                          ? 'border-[#E50914] ring-2 ring-[#E50914]/20'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}

              <div className="pt-2">
                <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-3">Specifications</h3>
                <div className="rounded-xl border border-gray-200 overflow-hidden">
                  {product.specifications.map((spec, idx) => (
                    <div
                      key={spec.label}
                      className={`flex justify-between px-4 py-3 text-sm ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                    >
                      <span className="font-medium text-gray-500">{spec.label}</span>
                      <span className="font-semibold text-black text-right ml-4">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-black rounded-full mb-4 self-start">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-black mb-3">{product.name}</h1>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">{product.description}</p>

              <div className="mb-6">
                <span className="text-2xl font-extrabold text-black">
                  {product.price ? formatPrice(product.price) : 'Contact us for price'}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-[#E50914] mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 mt-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#E50914] text-white text-base font-bold rounded-lg hover:bg-[#c40812] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Order via WhatsApp
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Inquiry about ${encodeURIComponent(product.name)}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-black">Similar Products</h2>
              <Link
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="flex items-center gap-2 text-sm font-semibold text-black hover:text-[#E50914] transition-colors"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.slice(0, 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-white hover:text-[#E50914] transition-colors"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          {product.images.length > 1 && (
            <>
              <button
                className="absolute left-6 p-2 text-white hover:text-[#E50914] transition-colors"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button
                className="absolute right-6 p-2 text-white hover:text-[#E50914] transition-colors"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                aria-label="Next image"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )}
          <img
            src={product.images[activeImage]}
            alt={`${product.name} — image ${activeImage + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
