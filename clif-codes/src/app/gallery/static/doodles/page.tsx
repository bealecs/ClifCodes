import ProjectDisplay from "@/app/components/ProjectDisplay";

const description = "My wife and I decided to breed our dogs, Max and Nymeria, because they are such great dogs. We never had them fixed because we always had the thought of potentially breeding them. Over the years, they have become such great dogs and we felt we wanted to breed them. We wanted to keep 1 or 2 of the litter, and find excellent homes for the rest of the bunch once some time passed. This site was created to advertise the litter so that we could find the right home for each pup.";
const missionStatement = "My mission with the website was to find the right home for the new litter of pups. I aimed to provide an appealing site, making it easy to quickly navigate through each pup we have to offer. The website also highlights some important information regarding the parents of the pups, Max and Nymeria. Users of the website can promptly read a little about each puppy and view the cost associated."
const technologies = ["TypeScript", "React", "Tailwind CSS", "Next.js"];

export default function DoodlesForSale() {
    return (
        <ProjectDisplay website="https://puppies4sale.vercel.app" projectName="Golden Doodle Pups" imageSrc="/doodles.png" github={null} description={description} missionStatement={missionStatement} technologies={technologies}  />
    )
}