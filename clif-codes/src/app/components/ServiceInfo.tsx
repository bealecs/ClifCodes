import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

interface Service {
  service: string;
  imageSrc: string;
  description: string;
  description2: string | null;
  technologies: string[] | null;
}

export default function ServiceInfo(service: Service) {
  return (
    <div className="h-[100%]">
      <Header />
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden mr-4">
            <Image
              src={service.imageSrc}
              alt={`Clip art image representation for ${service.service} service`}
              height={100}
              width={100}
              className="rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold">{service.service}</h1>
        </div>
      </div>
      <div className="border-b border-gray-300 mt-4"></div>
      <div className="mt-8 px-4 min-h-[48vh] leading-10 text-lg w-8/12 mx-auto sm:w-full sm:mx-0">
        <div className="flex flex-col">
          <div className="flex flex-wrap my-4 border-2 w-fit rounded-lg px-4 sm:px-0">
            <a href="/" className="items-center content-center m-auto mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </a>
            <span className="sm:hidden">{"->"}</span>
            <a href="/#services" className="mx-2 sm:hidden">Services</a>
            <span>{"->"}</span>
            <p className="mx-2 text-sky-500 underline">{service.service}</p>
          </div>
          <h4 className="text-xl font-bold">What is {service.service}?</h4>
          <p className="mt-4 sm:mt-8">{service.description}</p>
          <p className="mt-4 sm:mt-8">{service.description2}</p>
          
          <h4 className="text-xl font-bold my-8">Technologies Used:</h4>
          <div className="flex flex-wrap justify-start">
            {service.technologies.map((technology) => {
              return (
                <ul key={technology}>
                  <li className="w-fit mr-8">{technology}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
