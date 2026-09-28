import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Seo from '@/components/Seo';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { siteConfig } from '@/config/site';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

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

  return (
    <>
      <Seo
        title={`Products — ${siteConfig.name}`}
        description="Browse our full catalog of premium audio equipment including speakers, subwoofers, amplifiers, mixers, microphones, DJ gear, PA systems, and more."
      />

      <section className="bg-[#0A0A0A] text-white pt-28 lg:pt-36 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
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
