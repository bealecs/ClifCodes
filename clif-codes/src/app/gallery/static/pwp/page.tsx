import ProjectDisplay from "@/app/components/ProjectDisplay";

const description = "My first major project with React was developing a website for a friend who teaches forex trading courses. I crafted a dynamic and intuitive platform to support his educational content, making it easier for students to access course materials, track their progress, and engage with trading concepts. The website was designed to provide a seamless learning experience, reflecting the depth of knowledge and professionalism offered in the forex trading courses.";
const missionStatement = "My mission with the forex trading course website was to build an engaging and functional platform that supports learners in mastering trading strategies. I aimed to deliver an accessible and informative experience, enabling students to easily navigate course content and enhance their trading skills with confidence"
const technologies = ["JavaScript", "TypeScript", "React", "Figma", "Next.js", "Firebase"];

export default function CCLighting() {
    return (
        <ProjectDisplay website="https://cclighting.netlify.app/" projectName="Pips With Paul" imageSrc="/pwp.png" github="https://github.com/bealecs/pipswithpaul" description={description} missionStatement={missionStatement} technologies={technologies}  />
    )
}