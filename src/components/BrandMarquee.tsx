const brands = [
  { name: 'Dbx', file: 'dbx.png' },
  { name: 'Martin Audio', file: 'martin-audio.png' },
  { name: 'Soundcraft', file: 'soundcraft.png' },
  { name: 'Ibanez', file: 'ibanez.png' },
  { name: 'Fender', file: 'fender.png' },
  { name: 'NUX', file: 'nux.webp' },
  { name: 'Pearl', file: 'pearl.webp' },
  { name: 'Line 6', file: 'line-6.webp' },
  { name: 'Power Dynamics', file: 'pd.png' },
  { name: 'Eminence', file: 'eminence.png' },
  { name: 'Fane Audio', file: 'fane-audio.jpg' },
  { name: 'Sennheiser', file: 'sennheiser.png' },
  { name: 'RCF', file: 'rcf.jpg' },
  { name: 'QSC', file: 'qsc.png' },
  { name: 'Peavey', file: 'peavey.png' },
  { name: 'Crest Audio', file: 'crest-audio.webp' },
  { name: 'Wharfedale Pro', file: 'wharfedale-pro.png' },
  { name: 'Yamaha', file: 'yamaha.png' },
  { name: 'Ahuja', file: 'ahuja.png' },
  { name: 'Shure', file: 'shure.jpg' },
  { name: 'JBL', file: 'jbl.webp' },
  { name: 'Behringer', file: 'behringer.jpg' },
  { name: 'Pioneer DJ', file: 'pioneer-dj.png' },
  { name: 'NEXO', file: 'nexo.png' },
  { name: 'Electro Voice', file: 'electro-voice.jpg' },
];

interface BrandMarqueeProps {
  title?: string;
  subtitle?: string;
  bg?: string;
}

export default function BrandMarquee({
  title = 'Certified Dealer For',
  subtitle = 'We stock and support genuine equipment from the world\u2019s leading audio brands.',
  bg = 'bg-white',
}: BrandMarqueeProps) {
  const looped = [...brands, ...brands];

  return (
    <section className={`py-14 lg:py-20 overflow-hidden ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <span className="text-sm font-bold text-[#E50914] uppercase tracking-wider">{title}</span>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">{subtitle}</p>
      </div>
      <div className="relative">
        <div className={`pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r ${bg === 'bg-white' ? 'from-white' : 'from-[#F5F5F5]'} to-transparent z-10`} />
        <div className={`pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l ${bg === 'bg-white' ? 'from-white' : 'from-[#F5F5F5]'} to-transparent z-10`} />
        <div className="brand-marquee flex w-max items-center gap-12">
          {looped.map((brand, index) => (
            <div
              key={`${brand.file}-${index}`}
              className="flex h-16 w-32 shrink-0 items-center justify-center grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/logos/dealers/${brand.file}`}
                alt={brand.name}
                className="max-h-14 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
