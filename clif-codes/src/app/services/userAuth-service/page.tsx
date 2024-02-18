import ServiceInfo from "../../components/ServiceInfo";

interface UserAuthService {
    serviceName: string,
    serviceDescription: string,
    serviceImageLink: string,
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const userAuthService: UserAuthService = {
        serviceName: "User Authentication and Management",
        serviceDescription: "",
        serviceImageLink: "",
        serviceApplicableTechnologies: ["OAuth", "Supabase", "Firebase", "React", "Next.js", "Node.js", "Prisma"]
    }
    
    return <ServiceInfo service={userAuthService.serviceName} imageSrc={userAuthService.serviceImageLink} description={userAuthService.serviceDescription} technologies={userAuthService.serviceApplicableTechnologies}/>
}