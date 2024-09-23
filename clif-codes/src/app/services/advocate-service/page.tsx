import ServiceInfo from "../../components/ServiceInfo";

interface AdvocateService {
    serviceName: string;
    serviceDescription: string;
    serviceDescription2: string;
    serviceImageLink: string;
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const advocateService: AdvocateService = {
        serviceName: "Developer Advocate",
        serviceDescription: "A developer advocate, especially for a web developer freelancer, is someone who bridges the gap between developers and the products, services, or technologies they use. As a freelancer, this role often involves advocating for tools, frameworks, or platforms that I find valuable in my own work and sharing my experiences and insights. Developer advocates typically engage in activities such as creating tutorials, writing blog posts, giving talks at conferences or meetups, and participating in online forums or social media discussions to educate and empower other developers.",
        serviceDescription2: "Furthermore, as a web developer freelancer, being a developer advocate can also mean advocating for yourself and your skills. This may involve promoting your services, showcasing your portfolio of work, and actively networking with potential clients or collaborators. By serving as both an advocate for the tools and technologies you use and for your own expertise and services, you can establish yourself as a trusted authority in the developer community and attract new opportunities for growth and collaboration.",
        serviceImageLink: "/devadvocate.svg",
        serviceApplicableTechnologies: ["JavaScript", "TypeScript", "HTML", "CSS", "JavaScript Libraries + frameworks"]
    }
    
    return <ServiceInfo service={advocateService.serviceName} imageSrc={advocateService.serviceImageLink} description={advocateService.serviceDescription} description2={advocateService.serviceDescription2} technologies={advocateService.serviceApplicableTechnologies}/>
}