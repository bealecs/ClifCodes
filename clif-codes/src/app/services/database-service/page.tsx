import ServiceInfo from "../../components/ServiceInfo";

interface DatabaseService {
    serviceName: string;
    serviceDescription: string;
    serviceDescription2: string;
    serviceImageLink: string;
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const databaseService: DatabaseService = {
        serviceName: "Database Setup and Management",
        serviceDescription: "Setting up and managing databases involves creating and organizing digital storage spaces for your application's data. It's like setting up a digital warehouse where you can store all kinds of information your application needs to function, such as user profiles, product details, or messages.",
        serviceDescription2: "Once the database is set up, it must be managed effectively to ensure its reliability, performance, and security. This entails performing routine maintenance tasks such as database backups, monitoring for performance issues, and optimizing queries to improve efficiency. Additionally, handling tasks related to data migration, schema changes, and user access permissions as the project evolves over time. By maintaining a well-organized and properly managed database, site managers can ensure that their web applications operate smoothly, providing users with a seamless and reliable experience while safeguarding the integrity and security of the stored data.",
        serviceImageLink: "/database.svg",
        serviceApplicableTechnologies: ["Supabase", "Firebase", "React", "Next.js", "Node.js", "Prisma"]
    }
    
    return <ServiceInfo service={databaseService.serviceName} imageSrc={databaseService.serviceImageLink} description={databaseService.serviceDescription} description2={databaseService.serviceDescription2} technologies={databaseService.serviceApplicableTechnologies}/>
}