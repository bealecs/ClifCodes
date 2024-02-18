import ServiceInfo from "../../components/ServiceInfo";

interface StaticService {
    serviceName: string,
    serviceDescription: string,
    serviceImageLink: string,
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const staticService: StaticService = {
        serviceName: "Static Web Application",
        serviceDescription: "",
        serviceImageLink: "",
        serviceApplicableTechnologies: ["React", "HTML", "CSS", "Parcel", "TypeScript", "Tailwind CSS"]
    }
    
    return <ServiceInfo service={staticService.serviceName} imageSrc={staticService.serviceImageLink} description={staticService.serviceDescription} technologies={staticService.serviceApplicableTechnologies}/>
}