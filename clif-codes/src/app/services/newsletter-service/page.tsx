import ServiceInfo from "../../components/ServiceInfo";

interface EmailService {
    serviceName: string,
    serviceDescription: string,
    serviceImageLink: string,
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const emailService: EmailService = {
        serviceName: "Newsletter and Email Setup",
        serviceDescription: "",
        serviceImageLink: "",
        serviceApplicableTechnologies: null
    }
    
    return <ServiceInfo service={emailService.serviceName} imageSrc={emailService.serviceImageLink} description={emailService.serviceDescription} technologies={emailService.serviceApplicableTechnologies}/>
}