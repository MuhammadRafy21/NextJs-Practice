
import React from 'react';

export default function LogoSection() {
  const logos = [
    { name: 'AngelList', src: '/logos/angellist.png' }, // Apne public folder ke mutabiq path den
    { name: 'Loom', src: '/logos/loom.png' },
    { name: 'Retool', src: '/logos/retool.png' },
    { name: 'Ramp', src: '/logos/ramp.png' },
    { name: 'Monzo', src: '/logos/monzo.png' },
    { name: 'AGICAP', src: '/logos/agicap.png' },
    { name: 'Humaans', src: '/logos/humaans.png' },
    { name: 'Zapier', src: '/logos/zapier.png' },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <p className="text-center text-gray-500 text-sm font-medium mb-12 tracking-wide">
          Trusted by beloved partner and customer
        </p>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20">
          {logos.map((logo) => (
            <div key={logo.name} className="transition-all duration-300">
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-7 md:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}