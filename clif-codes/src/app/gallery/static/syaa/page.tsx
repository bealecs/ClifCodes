import ProjectDisplay from "@/app/components/ProjectDisplay";

const description = "SYAA is dedicated to creating a love of sports and community engagement through their comprehensive sports programs. Their website serves as a hub for information, registration, and updates on various athletic activities and events. With a focus on inclusivity and development, SYAA provides a platform where athletes of all ages can connect, grow, and participate in a wide range of sports, promoting health, teamwork, and local pride.";
const missionStatement = "The mission of SYAA is to enhance community involvement and personal development through accessible and inclusive sports programs, fostering a positive environment where athletes can thrive and build lifelong connections."
const technologies = ["JavaScript", "TypeScript", "React", "Tailwind CSS", "Next.js", "Canva", "Figma"];

export default function SYAA() {
    return (
        <ProjectDisplay website="https://syaa-clifcodes.vercel.app" projectName="SYAA" imageSrc="/syaa.png" github="https://github.com/bealecs/syaa" description={description} missionStatement={missionStatement} technologies={technologies}  />
    )
}