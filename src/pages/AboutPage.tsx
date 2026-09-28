import { Link } from 'react-router-dom';
import { ArrowRight, Volume2, Users, Award, Heart, Target, Eye } from 'lucide-react';
import Seo from '@/components/Seo';
import CTASection from '@/components/CTASection';
import BrandMarquee from '@/components/BrandMarquee';
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

const goals = [
  {
    icon: Target,
    title: 'Mission',
    description: `We are committed to delivering high-quality professional sound equipment, audio solutions, and technical services that meet the needs of churches, events, and institutions.`,
  },
  {
    icon: Eye,
    title: 'Vision',
    description: `To become a leading and trusted sound and audio solutions provider in Kenya, recognized for quality products, innovation, professionalism, and exceptional customer satisfaction.`,
  },
];

const coreValues = ['Quality', 'Customer Satisfaction', 'Professionalism', 'Innovation', 'Integrity', 'Reliability'];

export default function AboutPage() {
  return (
    <>
      <Seo
        title={`About Us — ${siteConfig.name}`}
        description={`Learn about ${siteConfig.name}, your trusted partner for premium audio equipment and professional sound solutions.`}
      />

      <section className="relative bg-[#0A0A0A] text-white pt-28 lg:pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full sm:w-3/5 lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/34594386/pexels-photo-34594386.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Professional audio equipment rack with stage lighting"
            className="w-full h-full object-cover object-right opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
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
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                <img
                  src={`${import.meta.env.BASE_URL}images/about/pa-stack.png`}
                  alt="Full line-array PA speaker stack with mixer, wireless mics, and amplifiers"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex w-32 h-32 bg-white rounded-2xl items-center justify-center shadow-xl p-3">
                <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="Central Sounds icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-black mb-6">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded with a singular vision — to empower musicians, producers, and audio engineers with world-class sonic tools — {siteConfig.name} has quickly grown into a premier destination for professional audio equipment. Our journey began from a deep-rooted passion for flawless sound reproduction and a frustration with the lack of accessible, high-tier gear for creators who refuse to compromise on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#E50914] uppercase tracking-wider">We Are The Best</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black mt-2">Our Goals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {goals.map((g) => (
              <div key={g.title} className="p-6 bg-[#F5F5F5] rounded-2xl hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#E50914] mb-4">
                  <g.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{g.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{g.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {coreValues.map((cv) => (
              <span key={cv} className="px-4 py-2 rounded-full bg-[#F5F5F5] text-sm font-semibold text-black border border-gray-200">
                {cv}
              </span>
            ))}
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
      <BrandMarquee />

      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[300px]">
              <img
                src="https://images.pexels.com/photos/20903613/pexels-photo-20903613.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Crowd in front of loudspeakers at a live concert"
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
