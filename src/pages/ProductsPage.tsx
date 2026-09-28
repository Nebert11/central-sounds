import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Seo from '@/components/Seo';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { siteConfig } from '@/config/site';

export default function ProductsPage() {
  const PAGE_SIZE = 60;
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, selectedCategory]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        search === '' ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const visibleProducts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      <Seo
        title={`Products — ${siteConfig.name}`}
        description="Browse our full catalog of premium audio equipment including speakers, subwoofers, amplifiers, mixers, microphones, DJ gear, PA systems, and more."
      />

      <section className="relative bg-[#0A0A0A] text-white pt-28 lg:pt-36 pb-12 overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full sm:w-3/5 lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/20002400/pexels-photo-20002400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Audio equipment showroom with turntables, speakers, and amplifiers on display"
            className="w-full h-full object-cover object-right opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-bold text-[#E50914] uppercase tracking-wider">Catalog</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold mt-2">Our Products</h1>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl">
            Explore our complete range of professional audio equipment and sound solutions.
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-12 bg-[#F5F5F5] min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 mb-6">
            <SlidersHorizontal className="w-5 h-5 text-gray-500 shrink-0" />
            <div className="flex gap-2">
              <button
                onClick={() => handleCategoryChange('All')}
                className={`px-4 py-2 text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-[#E50914] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#E50914] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <p className="text-sm text-gray-500">
              Showing {visibleProducts.length} of {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {search && (
                <>
                  {' '}
                  for "<span className="font-semibold text-black">{search}</span>"
                </>
              )}
            </p>

            <div className="relative w-full sm:w-80 lg:w-96 group">
              <Search
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                  search ? 'text-[#E50914]' : 'text-gray-400 group-focus-within:text-[#E50914]'
                }`}
              />
              <input
                type="text"
                placeholder="Search by name, category, or description..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-11 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-black placeholder:text-gray-400 shadow-sm transition-all duration-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E50914]/40 focus:border-[#E50914]"
                aria-label="Search products"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {filtered.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {hasMore && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    className="px-8 py-3.5 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Load More Products
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-200">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter to find what you are looking for.
              </p>
              <button
                onClick={() => {
                  setSearch('');
                  handleCategoryChange('All');
                }}
                className="px-6 py-3 bg-[#E50914] text-white font-semibold rounded-lg hover:bg-[#c40812] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
