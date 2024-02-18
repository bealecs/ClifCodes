import ServiceInfo from "../../components/ServiceInfo";

interface UIService {
    serviceName: string,
    serviceDescription: string,
    serviceImageLink: string,
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const uiService: UIService = {
        serviceName: "UI Development",
        serviceDescription: "",
        serviceImageLink: "",
        serviceApplicableTechnologies: ["Figma", "Adobe PhotoShop", "Canva", "React", "CSS", "HTML", "Tailwind CSS"]
    }
    
    return <ServiceInfo service={uiService.serviceName} imageSrc={uiService.serviceImageLink} description={uiService.serviceDescription} technologies={uiService.serviceApplicableTechnologies}/>
}