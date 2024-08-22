import ProjectDisplay from "@/app/components/ProjectDisplay";

const description = "Working on the Manor Golf Course website was a fantastic opportunity to showcase a premier golfing destination. I designed the site to highlight the beautifully maintained greens and the serene atmosphere of the course. The platform makes it easy for visitors to book tee times, explore course features, and keep up with the latest events and promotions. My goal was to capture the essence of Manor Golf Course and make it a seamless experience for golfers.";
const missionStatement = "My mission with the Manor Golf Course website was to create an inviting and user-friendly platform that reflects the course's exceptional quality and atmosphere. I aimed to enhance the experience for golfers by providing easy access to booking, course information, and updates, ensuring that every visit is as enjoyable as possible."
const technologies = ["JavaScript", "TypeScript", "React", "Tailwind CSS", "Next.js", "Canva", "Figma"];

export default function Manor() {
    return (
        <ProjectDisplay website="https://golf-the-manor.vercel.app" projectName="The Manor Golf Course" imageSrc="/manor.png" github="https://github.com/bealecs/golf-the-manor" description={description} missionStatement={missionStatement} technologies={technologies}  />
    )
}