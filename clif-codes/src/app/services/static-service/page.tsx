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
        serviceDescription2: "To make a static web application, you just write the code for what you want the website to look like and do. You don't need to worry about complicated databases or fancy server technology. There are tools that help speed up the process, like templates and frameworks, but at the end of the day, you're just creating a bunch of files that contain your website's content. Once it's ready, you can put it on the internet for everyone to see. Static websites are easy to maintain and can be hosted on different platforms, making them a popular choice for many types of projects.",
        serviceImageLink: "/static1.svg",
        serviceApplicableTechnologies: ["React", "HTML", "CSS", "Parcel", "TypeScript", "Tailwind CSS"]
    }
    
    return <ServiceInfo service={staticService.serviceName} imageSrc={staticService.serviceImageLink} description={staticService.serviceDescription} description2={staticService.serviceDescription2} technologies={staticService.serviceApplicableTechnologies}/>
}