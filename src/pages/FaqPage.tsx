import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import CTASection from '@/components/CTASection';
import { siteConfig, whatsappLink } from '@/config/site';

const faqs = [
  {
    question: 'How do I order a product?',
    answer: 'Simply browse our catalog, click on any product to view details, and use the "Order via WhatsApp" button to send us a pre-filled message. We will respond with pricing and availability. You can also call or email us.',
  },
  {
    question: 'Do you offer online payment or checkout?',
    answer: 'No, we do not process payments online. All purchases are completed through direct communication with us via WhatsApp, phone, or email. This allows us to provide personalized service and ensure you get exactly what you need.',
  },
  {
    question: 'Can I get a product recommendation?',
    answer: 'Absolutely! Contact us via WhatsApp, phone, or email with your requirements and our team will recommend the best equipment for your needs and budget.',
  },
  {
    question: 'Do you offer installation services?',
    answer: 'Yes, we provide professional sound system installation for venues, offices, restaurants, houses of worship, and more. Contact us to discuss your project.',
  },
  {
    question: 'Do you handle event sound reinforcement?',
    answer: 'Yes, we offer complete event sound solutions including equipment delivery, setup, and operation. From small gatherings to large concerts, we have you covered.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve customers locally and can arrange delivery and setup within our service area. Contact us to confirm whether we cover your location.',
  },
  {
    question: 'Do you offer warranties on your products?',
    answer: 'Most products come with manufacturer warranties. We also provide maintenance and repair services. Contact us for specific warranty information on any product.',
  },
  {
    question: 'How can I contact Central Sounds?',
    answer: `You can reach us via WhatsApp at ${siteConfig.whatsappDisplay}, by phone at ${siteConfig.phoneDisplay}, or by email at ${siteConfig.email}. You can also visit us at ${siteConfig.address}.`,
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Seo
        title={`FAQ — ${siteConfig.name}`}
        description="Frequently asked questions about Central Sounds products, ordering, services, and support."
      />

      <section className="relative bg-[#0A0A0A] text-white pt-28 lg:pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/26100254/pexels-photo-26100254.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Audio equipment knobs"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-[#E50914] uppercase tracking-wider">FAQ</span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mt-2 mb-6">
              Frequently Asked <span className="text-[#E50914]">Questions</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Find answers to common questions about our products, ordering process, and services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="flex items-center justify-between w-full p-5 lg:p-6 text-left"
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-base lg:text-lg font-bold text-black pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#E50914] shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === idx ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-sm lg:text-base text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-[#0A0A0A] rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-gray-400 mb-6">Our team is ready to help. Reach out anytime.</p>
            <a
              href={whatsappLink('Hello Central Sounds, I have a question.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E50914] text-white font-semibold rounded-lg hover:bg-[#c40812] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
