import { randomUUID } from 'crypto';
import React from 'react';
import { Sometype_Mono } from 'next/font/google';

interface Carousel {
  quip: string;
}

const font = Sometype_Mono({
    weight: "500",
    subsets: ["latin"]
});

const myQuips: Carousel[] = [
  { quip: "Performant Solutions" },
  { quip: "SEO Optimized" },
  { quip: "Responsive Design" },
  { quip: "Scalable Applications" },
  { quip: "Cross-Browser Compatibility" },
  { quip: "Accessible Features" },
  { quip: "Secure Cloud Integration" },
];

export default function HeroCarousel() {
  return (
    <div className="overflow-hidden m-auto h-[200px] lg:h-[250px] content-center w-7/12 sm:w-full">
      <div className="flex animate-carousel whitespace-nowrap">
        {myQuips.map((quip: Carousel) => (
          <div key={randomUUID()} className="flex-none">
            <p className={`inline ${font.className} text-lg m-auto items-center`}>
              {quip.quip}
              <span className="mx-4">|</span> {/* Add bullet except for the last quip */}
            </p>
          </div>
        ))}
        {/* Duplicate quips for continuous loop */}
        {myQuips.map((quip: Carousel) => (
          <div key={randomUUID()} className="flex-none">
            <p className={`inline ${font.className} text-lg m-auto items-center`}>
            {quip.quip}
              <span className="mx-4">|</span>
            </p>
          </div>
        ))}
      </div>

      {/* CSS animation */}
      <style>{`
        @keyframes animateCarousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-110rem);
          }
        }

        .animate-carousel {
          display: flex;
          animation: animateCarousel 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
