import { randomUUID } from 'crypto';
import React from 'react';
import { Italianno } from 'next/font/google';

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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    technology: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    technology: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    technology: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    technology: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    technology: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    technology: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    technology: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    technology: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
];

export default function Carousel() {
  return (
    <div className="overflow-hidden m-auto mt-[3rem] w-7/12">
      <div className="flex">
        {mySkills.map((skill: Skill) => (
          <div key={randomUUID()} className="w-48 flex-none px-2">
            <img
              className="h-20 w-20 m-auto items-center content-center"
              src={skill.icon}
              alt={`Skill possessed by Clif, icon representing skill of: ${skill.technology}`}
            />
            <p className="font-sans text-1xl m-auto mt-[1rem] items-center content-center w-fit">{skill.technology}</p>
          </div>
        ))}
        {mySkills.map((skill: Skill) => (
          <div key={randomUUID()} className="w-48 flex-none px-2">
            <img
              className="h-20 w-20 m-auto items-center content-center"
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
