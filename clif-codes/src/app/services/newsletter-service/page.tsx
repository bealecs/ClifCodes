import ServiceInfo from "../../components/ServiceInfo";

interface EmailService {
    serviceName: string;
    serviceDescription: string;
    serviceDescription2: string;
    serviceImageLink: string;
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const emailService: EmailService = {
        serviceName: "Newsletter and Email Setup",
        serviceDescription: "Newsletters and email subscriptions are essential components of many websites, allowing businesses and organizations to stay connected with their audience and share valuable content, updates, and promotions. As a web developer freelancer, integrating newsletter and email subscription functionality involves implementing features that enable users to sign up to receive periodic emails from the website or company. This typically includes designing and coding user interface elements such as signup forms and subscription buttons, as well as backend processes for storing subscriber information securely in a database.",
        serviceDescription2: "Once the subscription system is set up, web developer freelancers must implement mechanisms for managing email lists, handling subscriber preferences, and sending out newsletters or marketing emails. Freelancers may also need to ensure compliance with email regulations such as GDPR and CAN-SPAM by providing opt-in/opt-out options, honoring unsubscribe requests, and maintaining transparent data handling practices. By effectively implementing newsletters and email subscriptions, web developer freelancers help their clients build and nurture relationships with their audience, driving engagement and fostering customer loyalty.",
        serviceImageLink: "/newsletter.svg",
        serviceApplicableTechnologies: ["To be determined"]
    }
    
    return <ServiceInfo service={emailService.serviceName} imageSrc={emailService.serviceImageLink} description={emailService.serviceDescription} description2={emailService.serviceDescription2} technologies={emailService.serviceApplicableTechnologies}/>
}