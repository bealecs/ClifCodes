import ProjectDisplay from "@/app/components/ProjectDisplay";

const description = "One of my earlier projects involved designing a website for my brother and his friend's exterior lighting company. I focused on creating a visually appealing and user-friendly site that showcased their expertise in illuminating outdoor spaces. The website highlighted their range of services, from residential to commercial lighting solutions, and aimed to make it easy for potential clients to explore their offerings and get in touch.";
const missionStatement = "My mission with the exterior lighting company website was to capture their craftsmanship and commitment to quality through a well-designed platform. I aimed to provide a seamless experience for visitors, making it simple to understand their services and connect with them, reflecting the professionalism and expertise they bring to every project."
const technologies = ["JavaScript", "TypeScript", "React", "Figma"];

export default function CCLighting() {
    return (
        <ProjectDisplay website="https://cclighting.netlify.app/" projectName="Cross & Carlile Lighting" imageSrc="/cclighting.png" github="https://github.com/bealecs/cclighting" description={description} missionStatement={missionStatement} technologies={technologies}  />
    )
}