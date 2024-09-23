import ServiceInfo from "../../components/ServiceInfo";

interface UIService {
    serviceName: string;
    serviceDescription: string;
    serviceDescription2: string;
    serviceImageLink: string;
    serviceApplicableTechnologies: string[] | null;
}
export default function Page() {

    const uiService: UIService = {
        serviceName: "UI Development",
        serviceDescription: "UI development involves crafting the visual elements and interactive features that users encounter when interacting with digital products such as websites, applications, and software interfaces. As I develop a beautiful user interface, my primary focus is on creating intuitive, aesthetically pleasing, and user-friendly designs that enhance the overall user experience. This process entails translating design mockups and wireframes into functional and responsive layouts using a combination of tools. I ensure that the interface design is faithfully implemented and seamlessly integrates with the underlying functionality.",
        serviceDescription2: "In addition to creating visually appealing interfaces, UI development also involves optimizing performance, accessibility, and cross-browser compatibility to ensure a consistent experience across different devices and platforms. This includes implementing responsive design techniques to adapt the interface layout to various screen sizes and resolutions, as well as optimizing asset loading and rendering to minimize load times and enhance usability. UI developers also play a crucial role in ensuring that the interface complies with accessibility standards, making it accessible to users with disabilities and improving overall inclusivity. By combining creativity with technical expertise, UI developers contribute to the success of digital products by delivering engaging and user-centric interfaces that delight users and drive positive interactions.",
        serviceImageLink: "/uiDevelopment1.svg",
        serviceApplicableTechnologies: ["Figma", "Adobe PhotoShop", "Canva", "React", "CSS", "HTML", "Tailwind CSS"]
    }
    
    return <ServiceInfo service={uiService.serviceName} imageSrc={uiService.serviceImageLink} description={uiService.serviceDescription} description2={uiService.serviceDescription2} technologies={uiService.serviceApplicableTechnologies}/>
}