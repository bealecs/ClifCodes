import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

interface Service {
  service: string;
  imageSrc: string;
  description: string;
  technologies: string[] | null;
}

export default function ServiceInfo(service: Service) {
  return (
    <div>
      <Header />
      <div className="flex">
        <Image
          src={service.imageSrc}
          alt={`Clip art image representation for ${service.service} service`}
          height={100}
          width={100}
          className="rounded-xl"
        />
        <h1>{service.service}</h1>
      </div>
      <div className="flex flex-col">
        <h4>What is {`${service.service}`}?</h4>
        <p>{service.description}</p>
      </div>
      <Footer />
    </div>
  );
}
