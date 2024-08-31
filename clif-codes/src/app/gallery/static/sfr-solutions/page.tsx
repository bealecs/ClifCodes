import ProjectDisplay from "@/app/components/ProjectDisplay";

const description = "SFR Solutions serves as a trusted manufacturer's representative to Motion Industries, specializing in delivering high-quality products and innovative solutions tailored to meet the needs of various industrial sectors. With a commitment to excellence, SFR Solutions bridges the gap between manufacturers and customers, ensuring seamless integration of products and services for enhanced operational efficiency and performance.";
const missionStatement = "My mission in developing the SFR Solutions website was to create a digital platform that effectively represents their commitment to quality and innovation as a manufacturer's representative to Motion Industries. By focusing on a user-friendly design, seamless navigation, and clear communication of their offerings, my goal was to enhance the online presence of SFR Solutions, making it easier for customers to connect with and benefit from their industry-leading products and services."
const technologies = ["Figma", "HTML", "CSS"];

export default function SFRSolutions() {
    return (
        <ProjectDisplay website="https://sfr-solutions.netlify.app/" projectName="SFR Solutions" imageSrc="/sfrSolutions.png" github="https://github.com/bealecs/sfr-solutions" description={description} missionStatement={missionStatement} technologies={technologies}  />
    )
}