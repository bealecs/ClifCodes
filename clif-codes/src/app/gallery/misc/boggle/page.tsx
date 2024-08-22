import ProjectDisplay from "@/app/components/ProjectDisplay";

const description = "Boggle is a classic, wordy board game that is great to play with family or friends. My family and I have played Boggle for years, and it is typically our go-to board game if we are hanging around the house. There is a downside, however, to Boggle. When re-arranging the board, you have to shake the container with the pieces and let new pieces fall into combination. This process is typically pretty loud, and as a new parent was a little off putting. In an effort to keep the games rolling, quietly, I created an online Boggle board that is free to access and use. The board uses algorithms to reproduce random outcomes to imitate shaking the board.  ";
const missionStatement = "My mission with the creation of this online board game was mainly to eliminate unwanted noise from the physical board game. With the online version I created, I was definitely able to eliminate the risk of waking up the baby on game night.  "
const technologies = ["JavaScript", "TypeScript", "React", "Figma"];

export default function Boggle() {
    return (
        <ProjectDisplay website="https://clifs-boggle.vercel.app/" projectName="Boggle" imageSrc="/boggle.png" github="https://github.com/bealecs/sourceBoggle" description={description} missionStatement={missionStatement} technologies={technologies}  />
    )
}