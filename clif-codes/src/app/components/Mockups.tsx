import Image from "next/image";

export default function Mockups() {
  return (
    <section id="mockup" className="w-[80%] mx-auto">
      <h3 className="text-center text-3xl font-bold sm:hidden">Responsive solutions for any device</h3>
      <h4 className="lg:hidden md:hidden font-bold text-left mb-16 text-2xl">Responsive Solutions</h4>
      <div className="flex flex-row justify-evenly mx-auto flex-wrap">
        <Image
          src="/desktopMockup.svg"
          alt="Clif Codes Portfolio on an iPhone mockup"
          height={600}
          width={600}
          className="sm:m"
        />
        <Image
          src="/iphoneMockup.svg"
          alt="Clif Codes Portfolio on an iPhone mockup"
          height={600}
          width={600}
        />

        <Image
          src="/tabletMockup.svg"
          alt="Clif Codes Portfolio on an iPhone mockup"
          height={600}
          width={600}
        />
      </div>
    </section>
  );
}
