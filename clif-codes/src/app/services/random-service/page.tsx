import ServiceInfo from "../../components/ServiceInfo";

interface RandomService {
    serviceName: string,
    serviceDescription: string,
    serviceImageLink: string,
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const randomService: RandomService = {
        serviceName: "1-Off Solutions",
        serviceDescription: "",
        serviceImageLink: "",
        serviceApplicableTechnologies: null
    }
    
    return <ServiceInfo service={randomService.serviceName} imageSrc={randomService.serviceImageLink} description={randomService.serviceDescription} technologies={randomService.serviceApplicableTechnologies}/>
}