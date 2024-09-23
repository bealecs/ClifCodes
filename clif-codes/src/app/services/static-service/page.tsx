import ServiceInfo from "../../components/ServiceInfo";

interface StaticService {
    serviceName: string;
    serviceDescription: string;
    serviceDescription2: string;
    serviceImageLink: string;
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const staticService: StaticService = {
        serviceName: "Static Web Application",
        serviceDescription: "Static web applications are websites where the content is fixed and doesn't change often. They're like posters you hang on the wall—they're already made and don't need to be created each time someone looks at them. These websites are built with basic languages like HTML, CSS, and JavaScript, and they don't need a fancy server to run. They're great for things like showing your portfolio, writing blogs, or displaying information that doesn't change much, because they're simple to build and fast to load.",
        serviceDescription2: "To make a static website, I need only a couple of things: any text to be featured on the website, images, videos, predesigned mockups, and any important links. If you don't have any of that, don't worry. I communicate throughout the build process to ensure we are getting all of the details just right. I have built static websites for a number of different businesses, from small businesses to non-profits and even large businesses. Static websites are a great choice for getting your brand some online presence!",
        serviceImageLink: "/static1.svg",
        serviceApplicableTechnologies: ["React", "HTML", "CSS", "Parcel", "TypeScript", "Tailwind CSS"]
    }
    
    return <ServiceInfo service={staticService.serviceName} imageSrc={staticService.serviceImageLink} description={staticService.serviceDescription} description2={staticService.serviceDescription2} technologies={staticService.serviceApplicableTechnologies}/>
}