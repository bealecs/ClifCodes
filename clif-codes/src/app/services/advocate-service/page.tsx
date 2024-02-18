import ServiceInfo from "../../components/ServiceInfo";

interface AdvocateService {
    serviceName: string,
    serviceDescription: string,
    serviceImageLink: string,
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const advocateService: AdvocateService = {
        serviceName: "Developer Advocate",
        serviceDescription: "",
        serviceImageLink: "",
        serviceApplicableTechnologies: null
    }
    
    return <ServiceInfo service={advocateService.serviceName} imageSrc={advocateService.serviceImageLink} description={advocateService.serviceDescription} technologies={advocateService.serviceApplicableTechnologies}/>
}