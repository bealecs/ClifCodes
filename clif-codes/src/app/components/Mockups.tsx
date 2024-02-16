import Image from "next/image";

export default function Mockups() {
  return (
    <section id="mockup" className="w-[80%] mx-auto">
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
