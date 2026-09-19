import { Link } from 'react-router-dom';
import { ArrowRight, Volume2, Users, Award, Heart } from 'lucide-react';
import Seo from '@/components/Seo';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/config/site';

const values = [
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description: 'We carefully select every product in our catalog to ensure it meets professional standards.',
  },
  {
    icon: Users,
    title: 'Customer-First Approach',
    description: 'Our team takes the time to understand your needs and recommend the right solution.',
  },
  {
    icon: Volume2,
    title: 'Deep Audio Expertise',
    description: 'Years of experience in live sound, studio recording, and event production inform every recommendation.',
  },
  {
    icon: Heart,
    title: 'Passion for Sound',
    description: 'We live and breathe audio. Helping you find the perfect sound is what drives us.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title={`About Us — ${siteConfig.name}`}
        description={`Learn about ${siteConfig.name}, your trusted partner for premium audio equipment and professional sound solutions.`}
      />

      <section className="relative bg-[#0A0A0A] text-white pt-28 lg:pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1534/man-person-technology-music.jpg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Sound engineer at mixing console"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-[#E50914] uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mt-2 mb-6">
              Your Sound, <span className="text-[#E50914]">Our Passion</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              {siteConfig.name} is a premier audio equipment supplier dedicated to bringing you the best in professional sound technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/36269938/pexels-photo-36269938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Audio engineer working at mixing console"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block w-32 h-32 bg-[#E50914] rounded-2xl flex items-center justify-center shadow-xl">
                <Volume2 className="w-16 h-16 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-black mb-6">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {siteConfig.name} was founded with a simple mission: to make professional-quality audio equipment accessible to everyone — from touring professionals to home studio enthusiasts, from event planners to houses of worship.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We specialize in a full range of audio products including speakers, subwoofers, amplifiers, mixers, microphones, DJ equipment, PA systems, and audio accessories. Our catalog is carefully curated to include only equipment that meets our high standards for performance, reliability, and value.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What sets us apart is not just the products we sell, but the expertise and personal service we provide. We take the time to understand your needs and help you find the right equipment for your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#E50914] uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black mt-2">Why Choose {siteConfig.name}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#E50914] mb-4">
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '15+', label: 'Years of Experience' },
              { value: '500+', label: 'Products in Catalog' },
              { value: '1000+', label: 'Happy Customers' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl lg:text-5xl font-extrabold text-[#E50914] mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[300px]">
              <img
                src="https://images.pexels.com/photos/4218027/pexels-photo-4218027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Live concert with professional sound system"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 lg:p-12 bg-[#0A0A0A] text-white flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-extrabold mb-4">Ready to elevate your sound?</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Whether you are setting up a home studio, equipping a venue, or planning an event, our team is here to help you find the perfect audio solution.
              </p>
              <Link
                to="/products"
                className="flex items-center gap-2 self-start px-6 py-3 bg-[#E50914] text-white font-semibold rounded-lg hover:bg-[#c40812] transition-colors"
              >
                Browse Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
