export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  images: string[];
  features: string[];
  specifications: { label: string; value: string }[];
  price?: number;
  featured: boolean;
  relatedProducts: string[];
}

export const categories = [
  'Speakers',
  'Subwoofers',
  'Amplifiers',
  'Mixers',
  'Microphones',
  'DJ Equipment',
  'PA Systems',
  'Audio Accessories',
  'Cables & Connectors',
  'Other Audio Equipment',
];

export const products: Product[] = [
  {
    id: 'cs-pro-line-array-speaker',
    name: 'CS Pro Line Array Speaker',
    category: 'Speakers',
    shortDescription: 'Professional line array speaker for large venues and concerts.',
    description:
      'The CS Pro Line Array Speaker delivers crystal-clear sound projection across large venues. Engineered for touring professionals, it combines premium drivers with advanced waveguide technology for consistent coverage and stunning clarity at any volume.',
    images: [
      'https://images.pexels.com/photos/635928/pexels-photo-635928.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4295360/pexels-photo-4295360.png?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/34585133/pexels-photo-34585133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'High-efficiency neodymium drivers',
      '120° horizontal dispersion',
      'Weather-resistant enclosure',
      'Integrated rigging hardware',
      'Bi-amp or passive operation',
    ],
    specifications: [
      { label: 'Power Handling', value: '800W RMS' },
      { label: 'Frequency Response', value: '55Hz – 20kHz' },
      { label: 'Sensitivity', value: '99 dB' },
      { label: 'Impedance', value: '8 Ohms' },
      { label: 'Weight', value: '24 kg' },
    ],
    price: 285000,
    featured: true,
    relatedProducts: ['cs-sub-18-subwoofer', 'cs-power-amp-2000', 'cs-pa-system-bundle'],
  },
  {
    id: 'cs-studio-monitor-8',
    name: 'CS Studio Monitor 8"',
    category: 'Speakers',
    shortDescription: 'Precision studio monitor with flat frequency response.',
    description:
      'The CS Studio Monitor 8 delivers accurate, uncolored sound for critical mixing and mastering. Its bi-amplified design and silk-dome tweeter ensure every detail of your mix translates perfectly across all playback systems.',
    images: [
      'https://images.pexels.com/photos/38555188/pexels-photo-38555188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38555186/pexels-photo-38555186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Bi-amplified Class D design',
      'Silk dome tweeter',
      'Acoustic space control',
      'Balanced XLR/TRS inputs',
      'Magnetic shielding',
    ],
    specifications: [
      { label: 'Woofer', value: '8" woven composite' },
      { label: 'Tweeter', value: '1" silk dome' },
      { label: 'Frequency Response', value: '37Hz – 30kHz' },
      { label: 'Power', value: '140W total' },
      { label: 'Weight', value: '12.7 kg' },
    ],
    price: 45000,
    featured: true,
    relatedProducts: ['cs-condenser-mic-pro', 'cs-headphone-studio-pro', 'cs-audio-interface-4x4'],
  },
  {
    id: 'cs-sub-18-subwoofer',
    name: 'CS Sub-18 Subwoofer',
    category: 'Subwoofers',
    shortDescription: 'Deep, powerful bass with a 18-inch high-excursion driver.',
    description:
      'The CS Sub-18 is built for chest-thumping low end. Its 18-inch high-excursion driver and vented enclosure produce deep, controlled bass that fills any venue. Perfect for live sound, clubs, and mobile DJs.',
    images: [
      'https://images.pexels.com/photos/373632/pexels-photo-373632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6587321/pexels-photo-6587321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/13972228/pexels-photo-13972228.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      '18" high-excursion driver',
      'Vented enclosure design',
      'Cast aluminum handles',
      'Pole mount socket',
      'Durable textured coating',
    ],
    specifications: [
      { label: 'Power Handling', value: '1000W RMS' },
      { label: 'Frequency Response', value: '35Hz – 150Hz' },
      { label: 'Sensitivity', value: '98 dB' },
      { label: 'Impedance', value: '8 Ohms' },
      { label: 'Weight', value: '32 kg' },
    ],
    price: 95000,
    featured: true,
    relatedProducts: ['cs-pro-line-array-speaker', 'cs-power-amp-2000', 'cs-pa-system-bundle'],
  },
  {
    id: 'cs-power-amp-2000',
    name: 'CS Power Amp 2000',
    category: 'Amplifiers',
    shortDescription: '2-channel power amplifier with 2000W total output.',
    description:
      'The CS Power Amp 2000 delivers clean, reliable power for demanding live sound applications. With efficient Class H topology and comprehensive protection circuitry, it provides stable performance night after night.',
    images: [
      'https://images.pexels.com/photos/5156632/pexels-photo-5156632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4481407/pexels-photo-4481407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/226551/pexels-photo-226551.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Class H efficiency',
      '2 x 1000W at 4 Ohms',
      'Front-panel LCD metering',
      'Comprehensive protection',
      'Variable-speed cooling fan',
    ],
    specifications: [
      { label: 'Output', value: '2 x 1000W @ 4Ω' },
      { label: 'THD', value: '< 0.05%' },
      { label: 'Frequency Response', value: '20Hz – 20kHz ±0.5dB' },
      { label: 'Input', value: 'XLR + 1/4" TRS' },
      { label: 'Weight', value: '11 kg' },
    ],
    price: 78000,
    featured: true,
    relatedProducts: ['cs-pro-line-array-speaker', 'cs-sub-18-subwoofer', 'cs-pa-system-bundle'],
  },
  {
    id: 'cs-digital-mixer-32',
    name: 'CS Digital Mixer 32',
    category: 'Mixers',
    shortDescription: '32-channel digital mixing console with touchscreen control.',
    description:
      'The CS Digital Mixer 32 brings studio-grade processing to live sound. With 32 channels, motorized faders, a large touchscreen, and built-in effects, it handles everything from small gigs to full productions with ease.',
    images: [
      'https://images.pexels.com/photos/30807699/pexels-photo-30807699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/36936571/pexels-photo-36936571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      '32 input channels',
      '7" touchscreen display',
      '17 motorized faders',
      'Built-in FX engine',
      'Multi-track USB recording',
    ],
    specifications: [
      { label: 'Channels', value: '32 mic/line' },
      { label: 'Effects', value: '8 FX processors' },
      { label: 'Display', value: '7" color touchscreen' },
      { label: 'I/O', value: 'USB, AES/EBU, Dante' },
      { label: 'Weight', value: '14 kg' },
    ],
    price: 320000,
    featured: true,
    relatedProducts: ['cs-condenser-mic-pro', 'cs-headphone-studio-pro', 'cs-power-amp-2000'],
  },
  {
    id: 'cs-condenser-mic-pro',
    name: 'CS Condenser Mic Pro',
    category: 'Microphones',
    shortDescription: 'Large-diaphragm condenser microphone for studio recording.',
    description:
      'The CS Condenser Mic Pro captures vocals and instruments with stunning detail and warmth. Its large-diaphragm capsule and transformer-balanced output deliver the classic studio sound at an accessible price.',
    images: [
      'https://images.pexels.com/photos/13521352/pexels-photo-13521352.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7301210/pexels-photo-7301210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/164755/pexels-photo-164755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      '34mm gold-sputtered capsule',
      'Cardioid polar pattern',
      'Transformer-balanced output',
      'Includes shock mount and case',
      'Low self-noise (7 dB-A)',
    ],
    specifications: [
      { label: 'Type', value: 'Large-diaphragm condenser' },
      { label: 'Pattern', value: 'Cardioid' },
      { label: 'Frequency Response', value: '20Hz – 20kHz' },
      { label: 'Sensitivity', value: '-34 dBV/Pa' },
      { label: 'Self-Noise', value: '7 dB-A' },
    ],
    price: 18500,
    featured: true,
    relatedProducts: ['cs-studio-monitor-8', 'cs-audio-interface-4x4', 'cs-headphone-studio-pro'],
  },
  {
    id: 'cs-dynamic-mic-live',
    name: 'CS Dynamic Mic Live',
    category: 'Microphones',
    shortDescription: 'Rugged dynamic microphone for live vocals.',
    description:
      'The CS Dynamic Mic Live is a workhorse vocal microphone built for the road. Its cardioid pattern rejects feedback while delivering warm, clear vocals. Rugged construction handles the demands of nightly performances.',
    images: [
      'https://images.pexels.com/photos/14166/pexels-photo-14166.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7450049/pexels-photo-7450049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7598545/pexels-photo-7598545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Cardioid pickup pattern',
      'Neodymium magnet',
      'Internal shock mounting',
      'On/off switch',
      'Includes clip and pouch',
    ],
    specifications: [
      { label: 'Type', value: 'Dynamic' },
      { label: 'Pattern', value: 'Cardioid' },
      { label: 'Frequency Response', value: '50Hz – 15kHz' },
      { label: 'Sensitivity', value: '-54 dBV/Pa' },
      { label: 'Impedance', value: '300 Ohms' },
    ],
    price: 6500,
    featured: false,
    relatedProducts: ['cs-condenser-mic-pro', 'cs-digital-mixer-32', 'cs-pa-system-bundle'],
  },
  {
    id: 'cs-dj-controller-pro',
    name: 'CS DJ Controller Pro',
    category: 'DJ Equipment',
    shortDescription: '4-channel DJ controller with jog wheels and performance pads.',
    description:
      'The CS DJ Controller Pro is a full-featured 4-channel controller for professional DJs. Large touch-sensitive jog wheels, 16 performance pads, and dedicated effects controls give you everything you need for seamless mixes.',
    images: [
      'https://images.pexels.com/photos/9005458/pexels-photo-9005458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/9005483/pexels-photo-9005483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/5268174/pexels-photo-5268174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      '4-channel mixer section',
      'Touch-sensitive jog wheels',
      '16 RGB performance pads',
      'Built-in audio interface',
      'Includes DJ software license',
    ],
    specifications: [
      { label: 'Channels', value: '4 deck' },
      { label: 'Pads', value: '16 RGB backlit' },
      { label: 'Audio Interface', value: '24-bit / 48kHz' },
      { label: 'I/O', value: '2x RCA, 1/4" mic, headphone' },
      { label: 'Weight', value: '3.2 kg' },
    ],
    price: 85000,
    featured: true,
    relatedProducts: ['cs-headphone-dj-pro', 'cs-digital-mixer-32', 'cs-pa-system-bundle'],
  },
  {
    id: 'cs-headphone-dj-pro',
    name: 'CS DJ Headphones Pro',
    category: 'DJ Equipment',
    shortDescription: 'Closed-back DJ headphones with swiveling ear cups.',
    description:
      'The CS DJ Headphones Pro are built for the booth. Swiveling ear cups, powerful drivers, and excellent isolation let you cue and monitor with confidence, even in the loudest environments.',
    images: [
      'https://images.pexels.com/photos/2919003/pexels-photo-2919003.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/18441496/pexels-photo-18441496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/27507166/pexels-photo-27507166.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Closed-back design',
      'Swiveling ear cups',
      '50mm dynamic drivers',
      'Detachable cable',
      'Folding design',
    ],
    specifications: [
      { label: 'Driver', value: '50mm' },
      { label: 'Impedance', value: '32 Ohms' },
      { label: 'Frequency Response', value: '5Hz – 30kHz' },
      { label: 'Sensitivity', value: '105 dB' },
      { label: 'Weight', value: '280 g' },
    ],
    price: 12500,
    featured: false,
    relatedProducts: ['cs-dj-controller-pro', 'cs-headphone-studio-pro', 'cs-digital-mixer-32'],
  },
  {
    id: 'cs-pa-system-bundle',
    name: 'CS PA System Bundle',
    category: 'PA Systems',
    shortDescription: 'Complete PA system with speakers, mixer, and stands.',
    description:
      'The CS PA System Bundle is an all-in-one solution for events, venues, and performances. It includes two full-range speakers, a compact mixer, speaker stands, and all cables. Just add microphones and you are ready to go.',
    images: [
      'https://images.pexels.com/photos/34585133/pexels-photo-34585133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38954245/pexels-photo-38954245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7494200/pexels-photo-7494200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      '2x full-range 12" speakers',
      '8-channel compact mixer',
      '2x speaker stands',
      'All cables included',
      'Setup in minutes',
    ],
    specifications: [
      { label: 'Speaker Power', value: '2 x 500W' },
      { label: 'Mixer Channels', value: '8' },
      { label: 'Stand Height', value: 'Up to 2m' },
      { label: 'Coverage', value: 'Up to 300 people' },
      { label: 'Total Weight', value: '45 kg' },
    ],
    price: 145000,
    featured: true,
    relatedProducts: ['cs-pro-line-array-speaker', 'cs-sub-18-subwoofer', 'cs-dynamic-mic-live'],
  },
  {
    id: 'cs-portable-bluetooth-speaker',
    name: 'CS Portable Bluetooth Speaker',
    category: 'Speakers',
    shortDescription: 'Compact wireless speaker with big sound and IPX7 waterproofing.',
    description:
      'The CS Portable Bluetooth Speaker packs room-filling sound into a rugged, waterproof design. With 20 hours of battery life and Bluetooth 5.3, it is the perfect companion for any adventure.',
    images: [
      'https://images.pexels.com/photos/13981272/pexels-photo-13981272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4917455/pexels-photo-4917455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/880874/pexels-photo-880874.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'IPX7 waterproof rating',
      '20-hour battery life',
      'Bluetooth 5.3',
      'Stereo pairing mode',
      'USB-C fast charging',
    ],
    specifications: [
      { label: 'Power', value: '40W' },
      { label: 'Battery', value: '20 hours' },
      { label: 'Bluetooth', value: '5.3' },
      { label: 'Waterproof', value: 'IPX7' },
      { label: 'Weight', value: '1.2 kg' },
    ],
    price: 8500,
    featured: false,
    relatedProducts: ['cs-studio-monitor-8', 'cs-headphone-studio-pro', 'cs-pa-system-bundle'],
  },
  {
    id: 'cs-headphone-studio-pro',
    name: 'CS Studio Headphones Pro',
    category: 'Audio Accessories',
    shortDescription: 'Open-back reference headphones for critical listening.',
    description:
      'The CS Studio Headphones Pro deliver a natural, open sound for mixing and mastering. Their open-back design creates an expansive soundstage, while the velour ear pads ensure comfort during long sessions.',
    images: [
      'https://images.pexels.com/photos/13354889/pexels-photo-13354889.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/13354888/pexels-photo-13354888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/2919003/pexels-photo-2919003.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Open-back design',
      'Velour ear pads',
      'Detachable cable',
      'Premium carrying case',
      'Replaceable ear pads',
    ],
    specifications: [
      { label: 'Driver', value: '45mm' },
      { label: 'Impedance', value: '80 Ohms' },
      { label: 'Frequency Response', value: '10Hz – 40kHz' },
      { label: 'Sensitivity', value: '102 dB' },
      { label: 'Weight', value: '320 g' },
    ],
    price: 15000,
    featured: false,
    relatedProducts: ['cs-studio-monitor-8', 'cs-condenser-mic-pro', 'cs-audio-interface-4x4'],
  },
  {
    id: 'cs-audio-interface-4x4',
    name: 'CS Audio Interface 4x4',
    category: 'Audio Accessories',
    shortDescription: '4-in/4-out USB audio interface for recording.',
    description:
      'The CS Audio Interface 4x4 provides pristine conversion and low-latency monitoring for home and project studios. Four inputs with premium preamps and four outputs give you the flexibility to record a full band.',
    images: [
      'https://images.pexels.com/photos/8690823/pexels-photo-8690823.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4481407/pexels-photo-4481407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8071904/pexels-photo-8071904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      '4 XLR/TRS combo inputs',
      '4 TRS outputs',
      'Hi-Z instrument input',
      '24-bit / 192kHz conversion',
      'USB-C connection',
    ],
    specifications: [
      { label: 'Inputs', value: '4x combo (XLR/TRS)' },
      { label: 'Outputs', value: '4x TRS' },
      { label: 'Sample Rate', value: 'Up to 192kHz' },
      { label: 'Bit Depth', value: '24-bit' },
      { label: 'Connection', value: 'USB-C' },
    ],
    price: 32000,
    featured: false,
    relatedProducts: ['cs-condenser-mic-pro', 'cs-studio-monitor-8', 'cs-headphone-studio-pro'],
  },
  {
    id: 'cs-pro-xlr-cable-20',
    name: 'CS Pro XLR Cable 20ft',
    category: 'Cables & Connectors',
    shortDescription: 'Premium balanced XLR cable with gold-plated connectors.',
    description:
      'The CS Pro XLR Cable is built for professional use. Oxygen-free copper conductors, double shielding, and gold-plated connectors ensure noise-free signal transmission for microphones and line-level sources.',
    images: [
      'https://images.pexels.com/photos/858598/pexels-photo-858598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/19962372/pexels-photo-19962372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7513422/pexels-photo-7513422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Oxygen-free copper',
      'Double shielding',
      'Gold-plated connectors',
      'Flexible jacket',
      'Lifetime warranty',
    ],
    specifications: [
      { label: 'Length', value: '20 ft (6m)' },
      { label: 'Connectors', value: '3-pin XLR M/F' },
      { label: 'Shielding', value: 'Double (foil + braid)' },
      { label: 'Jacket', value: 'PVC flexible' },
      { label: 'Gauge', value: '24 AWG' },
    ],
    price: 2500,
    featured: false,
    relatedProducts: ['cs-dynamic-mic-live', 'cs-condenser-mic-pro', 'cs-pa-system-bundle'],
  },
  {
    id: 'cs-trs-patch-cable-set',
    name: 'CS TRS Patch Cable Set',
    category: 'Cables & Connectors',
    shortDescription: 'Set of 6 color-coded TRS patch cables for studio routing.',
    description:
      'The CS TRS Patch Cable Set includes six color-coded 1/4" TRS cables for clean, organized studio routing. Short and flexible, they are ideal for connecting pedals, interfaces, and patchbays.',
    images: [
      'https://images.pexels.com/photos/19962372/pexels-photo-19962372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8690823/pexels-photo-8690823.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8071904/pexels-photo-8071904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      '6 color-coded cables',
      '1/4" TRS connectors',
      'Right-angle design',
      'Low-capacitance',
      'Durable molded plugs',
    ],
    specifications: [
      { label: 'Quantity', value: '6 cables' },
      { label: 'Length', value: '18 in (45cm) each' },
      { label: 'Connectors', value: '1/4" TRS right-angle' },
      { label: 'Colors', value: 'Red, blue, green, yellow, white, black' },
      { label: 'Gauge', value: '22 AWG' },
    ],
    price: 3500,
    featured: false,
    relatedProducts: ['cs-pro-xlr-cable-20', 'cs-audio-interface-4x4', 'cs-digital-mixer-32'],
  },
  {
    id: 'cs-event-sound-package',
    name: 'CS Event Sound Package',
    category: 'PA Systems',
    shortDescription: 'Complete sound reinforcement package for events and weddings.',
    description:
      'The CS Event Sound Package is designed for events, weddings, and corporate functions. It includes line array speakers, subwoofers, a digital mixer, wireless microphones, and all rigging. Our team handles delivery and setup.',
    images: [
      'https://images.pexels.com/photos/38954245/pexels-photo-38954245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4218027/pexels-photo-4218027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Line array + subwoofer system',
      'Digital mixer included',
      '4 wireless microphones',
      'Delivery and setup included',
      'Coverage up to 1000 people',
    ],
    specifications: [
      { label: 'Speakers', value: '8x line array + 4x subs' },
      { label: 'Mixer', value: '32-channel digital' },
      { label: 'Microphones', value: '4x wireless' },
      { label: 'Coverage', value: 'Up to 1000 people' },
      { label: 'Setup', value: 'Included' },
    ],
    price: 450000,
    featured: false,
    relatedProducts: ['cs-pa-system-bundle', 'cs-pro-line-array-speaker', 'cs-digital-mixer-32'],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedProducts
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(price: number): string {
  return `KSh ${price.toLocaleString('en-KE')}`;
}
