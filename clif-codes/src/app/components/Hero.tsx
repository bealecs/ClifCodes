import { Sometype_Mono } from "next/font/google";
import Image from "next/image";
import TypingEffect from "./TypingEffect";

const font = Sometype_Mono({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="flex justify-between w-full lg:w-7/12 pb-8 m-auto pt-[4rem] sm:flex-col sm:pt-0">
      <div className="flex flex-col lg:hidden block">
        <div>
          <Image
            src="/ClifAI.webp"
            alt="Clifton Beale profile picture"
            height={275}
            width={275}
            className="rounded-full mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full lg:w-fit sm:items-center lg:items-start my-4 lg:my-0">
      <aside className="text-sky-500 lg:text-xl font-semibold">U.S. Veteran Operated</aside>
        <TypingEffect />
        <p className="lg:text-2xl text-xl text-gray-500 italic">
          Get more done, <span className="font-semibold underline">faster</span>
        </p>
        <div className="flex items-start mt-8 lg:my-0">
          <a href="/gallery" className="transition duration-300 linear hover:bg-sky-500 hover:text-white hover:border-sky-400 border-2 border-sky-200 bg-sky-200 w-fit border-black p-4 mr-4 rounded shadow-lg">
            View Gallery
          </a>
          <a href="/#services" className="transition duration-300 linear hover:bg-sky-500 hover:text-white hover:border-sky-400 border-2 border-sky-200 bg-sky-200 w-fit border-black ml-4 p-4 rounded shadow-lg">
            Services
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:block hidden">
        <div>
          <Image
            src="/ClifAI.webp"
            alt="Clifton Beale profile picture"
            height={325}
            width={325}
            className="rounded mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
