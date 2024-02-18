import ServiceInfo from "../../components/ServiceInfo";

interface MetricService {
    serviceName: string,
    serviceDescription: string,
    serviceImageLink: string,
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const metricService: MetricService = {
        serviceName: "Site Metrics Analyzation and Enhancement",
        serviceDescription: "",
        serviceImageLink: "",
        serviceApplicableTechnologies: ["Google Analytics"]
    }
    
    return <ServiceInfo service={metricService.serviceName} imageSrc={metricService.serviceImageLink} description={metricService.serviceDescription} technologies={metricService.serviceApplicableTechnologies}/>
}