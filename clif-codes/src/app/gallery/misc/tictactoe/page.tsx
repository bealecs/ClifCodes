import ProjectDisplay from "@/app/components/ProjectDisplay";

const description = "In my early days of coding, some good practice was creating this tic tac toe board from scratch. In doing so, I was able to get a better foundational understanding of JavaScript, play around with CSS styling, and learn more about deployment of a website.";
const missionStatement = "My mission in this project was to learn more, mostly in regards to JavaScript. The board's functionality relies heavily on the usage of JavaScript, and this project is a monumental landmark from my early days of learning."
const technologies = ["JavaScript", "HTML", "CSS"];

export default function TicTacToe() {
    return (
        <ProjectDisplay website="https://clifs-tic-tac-toe.netlify.app/" projectName="Tic Tac Toe" imageSrc="/XO.png" github={null} description={description} missionStatement={missionStatement} technologies={technologies}  />
    )
}