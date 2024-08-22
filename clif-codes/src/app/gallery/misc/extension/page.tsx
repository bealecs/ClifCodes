import ProjectDisplay from "@/app/components/ProjectDisplay";

const description = "I always wanted to make my own extension for the Google Chrome browser, but was not sure how to do it. The idea was there, but the know-how was lacking. I finally had some free time and decided to watch a youtube video. I shortly realized that it was very simple to get an extension up and running. I decided to create a daily job scraper, all I have to do is one click on the extension and it will pull up a list of customly curated job listings that suit my needs. This tool has been a big feature in my job searching, and has helped me connect with multiple different recruiters. Job listings are pulled from large job boards like LinkedIn, ZipRecruiter, and Indeed.";
const missionStatement = "My mission with the Chrome extension was mainly to learn something new, however the tool offers some cool functionality. I have been able to connect with multiple job opportunities thanks to the custom curated job listings brought to me by my extension. The extension has saved me a lot of time in my job search, and has become an integral part of the process when looking for new work for myself."
const technologies = ["JavaScript", "TypeScript", "React", "Figma"];

export default function Extension() {
    return (
        <ProjectDisplay website={null} projectName="Google Chrome Extension" imageSrc="/extension.png" github="https://github.com/bealecs/chrome-extension" description={description} missionStatement={missionStatement} technologies={technologies}  />
    )
}