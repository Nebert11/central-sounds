import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User } from 'lucide-react';
import Seo from '@/components/Seo';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { siteConfig, whatsappLink } from '@/config/site';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry from ${form.name || 'Website Visitor'}`;
    const body = `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Interested in: ${form.interest}

Message:
${form.message}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsApp = () => {
    const msg = `Hello Central Sounds!

Name: ${form.name || ''}
Email: ${form.email || ''}
Phone: ${form.phone || ''}
Interested in: ${form.interest || ''}
Message: ${form.message || ''}`;
    window.open(whatsappLink(msg), '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phone}`,
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: siteConfig.whatsappDisplay,
      href: whatsappLink('Hello Central Sounds, I would like to inquire about your products and services.'),
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: siteConfig.address,
    },
  ];

  return (
    <>
      <Seo
        title={`Contact — ${siteConfig.name}`}
        description={`Get in touch with ${siteConfig.name} via phone, WhatsApp, email, or visit our store. We are here to help you find the right audio equipment.`}
      />

      <section className="relative bg-[#0A0A0A] text-white pt-28 lg:pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full sm:w-3/5 lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/39639240/pexels-photo-39639240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Audio mixing console close-up"
            className="w-full h-full object-cover object-right opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-[#E50914] uppercase tracking-wider">Contact</span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mt-2 mb-6">
              Get in <span className="text-[#E50914]">Touch</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Have a question about a product or service? We are here to help. Reach out via WhatsApp, phone, or email.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info) => {
              const content = (
                <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#E50914] mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">{info.label}</h3>
                  <p className="text-base font-semibold text-black break-words">{info.value}</p>
                </div>
              );
              return info.href ? (
                <a key={info.label} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block">
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-6 lg:p-8">
              <h2 className="text-2xl font-extrabold text-black mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-1.5">Product / Service</label>
                    <input
                      type="text"
                      id="interest"
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent"
                      placeholder="What are you interested in?"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Send via Email
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E50914] text-white font-semibold rounded-lg hover:bg-[#c40812] transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-[#0A0A0A] rounded-2xl p-6 lg:p-8 text-white flex flex-col justify-center">
                <WhatsAppIcon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-extrabold mb-2">Need help choosing the right equipment?</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Talk to {siteConfig.name} on WhatsApp. Our team is ready to help you find the perfect audio solution.
                </p>
                <a
                  href={whatsappLink('Hello Central Sounds, I need help choosing the right audio equipment.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#1da851] transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#E50914]" />
                  <h3 className="text-lg font-bold text-black">Business Hours</h3>
                </div>
                <p className="text-sm text-gray-500">{siteConfig.hours}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-[#E50914]" />
                    <h3 className="text-lg font-bold text-black">Visit Us</h3>
                  </div>
                  <p className="text-sm text-gray-500">{siteConfig.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
