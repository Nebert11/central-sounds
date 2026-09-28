import { Volume2, Wrench, Mic2, Calendar, Lightbulb, Settings, RefreshCw, Sliders } from 'lucide-react';
import Seo from '@/components/Seo';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/config/site';

const services = [
  {
    icon: Volume2,
    title: 'Audio Equipment Supply',
    description: 'We supply a wide range of professional audio equipment from leading brands, tailored to your specific needs and budget.',
  },
  {
    icon: Settings,
    title: 'Sound System Installation',
    description: 'Professional installation of sound systems for venues, offices, restaurants, houses of worship, and more.',
  },
  {
    icon: Mic2,
    title: 'PA System Solutions',
    description: 'Complete PA system design and supply for public address, announcements, and background music.',
  },
  {
    icon: Calendar,
    title: 'Event Sound Solutions',
    description: 'Full sound reinforcement for events, concerts, weddings, conferences, and corporate functions.',
  },
  {
    icon: Lightbulb,
    title: 'Audio Consultation',
    description: 'Expert advice on equipment selection, system design, and acoustic optimization for your space.',
  },
  {
    icon: Wrench,
    title: 'Equipment Setup',
    description: 'Professional setup and configuration of your audio equipment to ensure optimal performance.',
  },
  {
    icon: RefreshCw,
    title: 'Sound System Maintenance',
    description: 'Regular maintenance and repair services to keep your sound system performing at its best.',
  },
  {
    icon: Sliders,
    title: 'Professional Audio Solutions',
    description: 'Custom audio solutions for studios, broadcast, post-production, and specialized applications.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Seo
        title={`Services — ${siteConfig.name}`}
        description="Professional audio services including equipment supply, sound system installation, PA solutions, event sound, consultation, setup, and maintenance."
      />

      <section className="relative bg-[#0A0A0A] text-white pt-28 lg:pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full sm:w-3/5 lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/34585133/pexels-photo-34585133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Sound engineer at live concert"
            className="w-full h-full object-cover object-right opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-[#E50914] uppercase tracking-wider">Services</span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mt-2 mb-6">
              Professional <span className="text-[#E50914]">Audio</span> Services
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              From equipment supply to installation and maintenance, we provide comprehensive audio solutions for every need.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#E50914] mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#E50914] uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black mt-2">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Reach out via WhatsApp, phone, or email to discuss your audio needs.' },
              { step: '02', title: 'Recommendation', description: 'We recommend the right equipment and services based on your requirements and budget.' },
              { step: '03', title: 'Delivery & Setup', description: 'We supply, deliver, and professionally set up your audio equipment.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-extrabold text-[#E50914]/20 mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need help with your audio project?"
        subtitle="From a single microphone to a full venue installation, our team is ready to help."
      />
    </>
  );
}
