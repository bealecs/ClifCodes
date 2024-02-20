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
        serviceName: "AI Integration Services",
        serviceDescription: "AI integration solutions with the OpenAI API and Vercel AI SDK involve leveraging artificial intelligence capabilities to enhance web applications. As a web developer freelancer, this process starts with integrating the OpenAI API, which provides access to powerful natural language processing models. This allows you to incorporate advanced language understanding and generation features into your applications, such as chatbots, content summarization, or language translation. Additionally, the Vercel AI SDK can be employed to integrate machine learning models directly into the frontend of web applications hosted on Vercel, enabling seamless execution of AI-powered functionalities on the client side.",
        serviceDescription2: "Proper error handling, security measures, and performance optimizations are crucial considerations in the development process. By mastering the integration of these AI tools, Clif Codes can offer clients cutting-edge, intelligent features that enhance user engagement and provide valuable functionality within their web applications.",
        serviceImageLink: "/robot.svg",
        serviceApplicableTechnologies: ["Vercel AI SDK", "OpenAI API"]
    }
    
    return <ServiceInfo service={advocateService.serviceName} imageSrc={advocateService.serviceImageLink} description={advocateService.serviceDescription} description2={advocateService.serviceDescription2} technologies={advocateService.serviceApplicableTechnologies}/>
}