import ServiceInfo from "../../components/ServiceInfo";

interface UserAuthService {
    serviceName: string;
    serviceDescription: string;
    serviceDescription2: string;
    serviceImageLink: string;
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const userAuthService: UserAuthService = {
        serviceName: "User Authentication and Management",
        serviceDescription: "User authentication and management are essential aspects of web development. Authentication involves verifying the identity of users to ensure they are who they claim to be. This process typically involves prompting users to provide credentials, such as a username and password, and then comparing these against stored credentials in a database. Implementing secure authentication mechanisms, such as hashing passwords and using encryption protocols like HTTPS, is crucial to protect user data and prevent unauthorized access.",
        serviceDescription2: "In addition to authentication, user management encompasses various tasks related to managing user accounts throughout their lifecycle. This includes functionalities such as user registration, login, password reset, and account deletion. Managers often implement features to allow users to update their profiles, manage preferences, and control access permissions. Effective user management also involves enforcing security measures like password policies and implementing multi-factor authentication for added security. By prioritizing robust user authentication and management systems, user managers can ensure their web applications are secure and user-friendly.",
        serviceImageLink: "/userAuth.svg",
        serviceApplicableTechnologies: ["OAuth", "Supabase", "Firebase", "React", "Next.js", "Node.js", "Prisma"]
    }
    
    return <ServiceInfo service={userAuthService.serviceName} imageSrc={userAuthService.serviceImageLink} description={userAuthService.serviceDescription} description2={userAuthService.serviceDescription2} technologies={userAuthService.serviceApplicableTechnologies}/>
}