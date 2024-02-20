import { randomUUID } from 'crypto';
import React from 'react';
import { Italianno } from 'next/font/google';
import Image from 'next/image';

const italianno = Italianno({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-italianno',
  weight: '400'
})

interface Skill {
  technology: string;
  icon: string;
}

const mySkills: Skill[] = [
  {
    technology: "JavaScript",
    icon: "/javascript.svg",
  },
  {
    technology: "React.js",
    icon: "/react.svg",
  },
  {
    technology: "Next.js",
    icon: "/nextjs.svg",
  },
  {
    technology: "Node.js",
    icon: "/nodejs.svg",
  },
  {
    technology: "TypeScript",
    icon: "/typescript.svg",
  },
  {
    technology: "HTML",
    icon: "/html5.svg",
  },
  {
    technology: "CSS",
    icon: "/css3.svg",
  },
  {
    technology: "Tailwind",
    icon: "/tailwindcss.svg",
  },
  {
    technology: "Supabase",
    icon: "/supabase.svg",
  },
];

export default function Carousel() {
  return (
    <div className="overflow-hidden m-auto my-[5rem] w-7/12 sm:w-full">
      <div className="flex">
        {mySkills.map((skill: Skill) => (
          <div key={randomUUID()} className="w-48 flex-none px-2">
            <Image
              className="m-auto items-center content-center"
              src={skill.icon}
              height={80}
              width={80}
              alt={`Skill possessed by Clif, icon representing skill of: ${skill.technology}`}
            />
            <p className="font-sans text-1xl m-auto mt-[1rem] items-center content-center w-fit">{skill.technology}</p>
          </div>
        ))}
        {mySkills.map((skill: Skill) => (
          <div key={randomUUID()} className="w-48 flex-none px-2">
            <Image
              height={80}
              width={80}
              className="m-auto items-center content-center"
              src={skill.icon}
              alt={`Skill possessed by Clif, icon representing skill of: ${skill.technology}`}
            />
            <p className="font-sans text-1xl m-auto mt-[1rem] items-center content-center w-fit">{skill.technology}</p>
          </div>
        ))}
      </div>

      {/* CSS animation */}
      <style>{`
        @keyframes animateCarousel {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-900%);
          }
        }

        .overflow-hidden .flex .w-48 {
          animation: animateCarousel 14s linear infinite;
        }
      `}</style>
    </div>
  );
}
