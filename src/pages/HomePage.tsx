import { Link } from 'react-router-dom';
import { ArrowRight, Headphones, ShieldCheck, Headset, Volume2 } from 'lucide-react';
import Seo from '@/components/Seo';
import CTASection from '@/components/CTASection';
import ProductCard from '@/components/ProductCard';
import BrandMarquee from '@/components/BrandMarquee';
import { categories as productCategories, getFeaturedProducts } from '@/data/products';
import { siteConfig } from '@/config/site';

const whyChooseUs = [
  {
    icon: Volume2,
    title: 'Quality Audio Equipment',
    description: 'We stock only premium, professional-grade audio gear from trusted brands.',
  },
  {
    icon: Headphones,
    title: 'Professional Advice',
    description: 'Our experienced team helps you choose the right equipment for your needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Service',
    description: 'From purchase to setup, we provide dependable service every step of the way.',
  },
  {
    icon: Headset,
    title: 'Customer Support',
    description: 'Reach us anytime via WhatsApp, phone, or email for ongoing support.',
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 6);

  return (
    <>
      <Seo
        title={`${siteConfig.name} — Premium Sound. Powerful Experience.`}
        description={siteConfig.description}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/39204570/pexels-photo-39204570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Concert stage with professional audio equipment"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl ml-0 sm:ml-0 lg:ml-0 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-[#E50914]/20 border border-[#E50914]/30 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
              <span className="text-sm font-semibold text-white">Premium Audio Equipment</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] mb-6">
              Premium Sound.
              <br />
              <span className="text-[#E50914]">Powerful</span> Experience.
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Explore quality audio equipment and sound solutions from {siteConfig.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#E50914] text-white text-base font-semibold rounded-lg hover:bg-[#c40812] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden bg-[#E50914] py-3">
          <div className="hero-category-marquee flex w-max whitespace-nowrap">
            {[...productCategories, ...productCategories].map((category, index) => (
              <Link
                key={`${category}-${index}`}
                to={`/products?category=${encodeURIComponent(category)}`}
                className="inline-flex items-center gap-6 px-6 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:text-black sm:text-base"
              >
                <span>{category}</span>
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white/75" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-[#0A0A0A] py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                to={`/products?category=${encodeURIComponent(cat.label)}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#E50914]/20 group-hover:bg-[#E50914] transition-colors duration-200">
                  <cat.icon className="w-6 h-6 text-[#E50914] group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-white">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 lg:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-sm font-bold text-[#E50914] uppercase tracking-wider">Featured</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-black mt-2">Featured Products</h2>
            </div>
            <Link
              to="/products"
              className="flex items-center gap-2 text-sm font-semibold text-black hover:text-[#E50914] transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#E50914] uppercase tracking-wider">Why Central Sounds</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black mt-2">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-[#F5F5F5] rounded-2xl hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#E50914] mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandMarquee bg="bg-[#F5F5F5]" />

      <CTASection />
    </>
  );
}
