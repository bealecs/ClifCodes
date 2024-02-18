import ServiceInfo from "../../components/ServiceInfo";

interface DatabaseService {
    serviceName: string,
    serviceDescription: string,
    serviceImageLink: string,
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const databaseService: DatabaseService = {
        serviceName: "Database Setup and Management",
        serviceDescription: "",
        serviceImageLink: "",
        serviceApplicableTechnologies: ["Supabase", "Firebase", "React", "Next.js", "Node.js", "Prisma"]
    }
    
    return <ServiceInfo service={databaseService.serviceName} imageSrc={databaseService.serviceImageLink} description={databaseService.serviceDescription} technologies={databaseService.serviceApplicableTechnologies}/>
}