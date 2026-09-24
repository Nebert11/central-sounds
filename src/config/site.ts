export const siteConfig = {
  name: 'Central Sounds',
  tagline: 'Your Sound, Our Passion',
  description:
    'Premium audio equipment and sound solutions. Central Sounds specializes in speakers, amplifiers, mixers, DJ equipment, PA systems, and professional audio gear.',
  phone: '0740212033',
  phoneDisplay: '0740212033',
  whatsapp: '0740212033',
  whatsappDisplay: '0740212033',
  email: 'centralsounds91@gmail.com',
  address: '123 Audio Avenue, Sound District, City 12345',
  addressShort: 'Sound District, City 12345',
  hours: 'Mon–Sat: 9:00 AM – 7:00 PM',
  social: {
    facebook: 'https://facebook.com/centralsounds',
    instagram: 'https://instagram.com/centralsounds',
    youtube: 'https://youtube.com/@centralsounds',
    twitter: 'https://twitter.com/centralsounds',
  },
  colors: {
    primary: '#E50914',
    black: '#0A0A0A',
    white: '#FFFFFF',
    lightBg: '#F5F5F5',
  },
};

export function whatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}

export function whatsappProductLink(productName: string): string {
  return whatsappLink(
    `Hello Central Sounds, I am interested in purchasing the ${productName}. Please provide me with the price and availability.`
  );
}
