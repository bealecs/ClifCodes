import ServiceInfo from "../../components/ServiceInfo";

interface DynamicService {
    serviceName: string;
    serviceDescription: string;
    serviceDescription2: string;
    serviceImageLink: string;
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const dynamicService: DynamicService = {
        serviceName: "Dynamic Web Application",
        serviceDescription: "Dynamic web application services are web applications that can change and adapt based on user input or data from other sources. They're the interactive parts of the internet that respond to what users do, like filling out a form or clicking a button. Unlike static websites, which always show the same content, dynamic web apps can fetch new information and update the page without needing to reload. They're like virtual assistants that can understand and respond to your needs in real-time.",
        serviceDescription2: "Creating dynamic web applications involves using more complex technologies like databases, servers, and tools such as Supabase, Firebase, or Prisma (with frameworks like Node.js & Next.js). These applications store and manage data, process requests from users, and generate customized content on the fly. For example, an online store's dynamic web app might show different products to different users based on their browsing history or preferences. Building dynamic web apps requires more coding and setup compared to static sites, but they offer greater flexibility and interactivity, making them ideal for tasks like e-commerce, social networking, and real-time collaboration.",
        serviceImageLink: "/dynamic.svg",
        serviceApplicableTechnologies: ["React", "Next.js", "Node.js", "Supabase", "Firebase", "Prisma"]
    }
    
    return <ServiceInfo service={dynamicService.serviceName} imageSrc={dynamicService.serviceImageLink} description={dynamicService.serviceDescription} description2={dynamicService.serviceDescription2} technologies={dynamicService.serviceApplicableTechnologies}/>
}