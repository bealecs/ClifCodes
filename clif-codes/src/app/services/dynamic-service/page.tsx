import ServiceInfo from "../../components/ServiceInfo";

interface DynamicService {
    serviceName: string,
    serviceDescription: string,
    serviceImageLink: string,
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const dynamicService: DynamicService = {
        serviceName: "Dynamic Web Application",
        serviceDescription: "",
        serviceImageLink: "",
        serviceApplicableTechnologies: ["React", "Next.js", "Node.js", "Supabase", "Firebase", "Prisma"]
    }
    
    return <ServiceInfo service={dynamicService.serviceName} imageSrc={dynamicService.serviceImageLink} description={dynamicService.serviceDescription} technologies={dynamicService.serviceApplicableTechnologies}/>
}