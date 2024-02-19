import ServiceInfo from "../../components/ServiceInfo";

interface RandomService {
    serviceName: string;
    serviceDescription: string;
    serviceDescription2: string;
    serviceImageLink: string;
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const randomService: RandomService = {
        serviceName: "1-Off Solutions",
        serviceDescription: "A one-off solution, particularly for a web developer freelancer, refers to a custom solution or project that is developed to address a specific need or problem for a client on a one-time basis. This could be a unique website, web application, or feature that is designed and built to meet the client's specific requirements, but is not intended for ongoing maintenance or updates.",
        serviceDescription2: "These one-off solutions are typically scoped, designed, developed, and delivered as standalone projects, without the expectation of continuous support or future iterations. As a freelancer, my role is to understand the client's needs, propose a tailored solution, execute the project within the agreed-upon timeframe and budget, and deliver a final product that meets or exceeds the client's expectations.",
        serviceImageLink: "/1off.svg",
        serviceApplicableTechnologies: ["Depends on the issue"]
    }
    
    return <ServiceInfo service={randomService.serviceName} imageSrc={randomService.serviceImageLink} description={randomService.serviceDescription} description2={randomService.serviceDescription2} technologies={randomService.serviceApplicableTechnologies}/>
}