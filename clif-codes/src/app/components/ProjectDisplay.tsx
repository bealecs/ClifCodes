import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

interface Project {
  projectName: string;
  imageSrc: string;
  description: string;
  missionStatement: string;
  technologies: string[];
  github: string | null;
  website: string | null;
  webMockupImg: string | null;
}

export default function ProjectDisplay(project: Project) {
  return (
    <div className="h-[100%]">
      <Header />
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden mr-4">
            <Image
              src={project.imageSrc}
              alt={`Clip art image representation for ${project.projectName} project`}
              height={100}
              width={100}
              className="rounded-full"
            />
          </div>
          <h1 className="text-3xl font-bold">{project.projectName}</h1>
        </div>
      </div>
      <div className="border-b border-gray-300 mt-4"></div>
      <div className="mt-8 px-4 min-h-[48vh] leading-10 text-lg w-8/12 mx-auto sm:w-full sm:mx-0">
        <div className="flex flex-col">
          <div className="flex flex-wrap my-4 border-2 w-fit rounded-lg px-4 sm:px-0 ">
            <a href="/" className="items-center content-center m-auto mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </a>
            <span>{"->"}</span>
            <a href="/gallery" className="mx-2">Gallery</a>
            <span>{"->"}</span>
            <p className="mx-2 text-sky-500 underline">{project.projectName}</p>
          </div>
          
           <h4 className="text-xl font-bold my-4">Technologies Used:</h4>
           <div className="flex flex-wrap justify-start">
            {project.technologies.map((technology) => {
              return (
                <ul key={technology}>
                  <li className="w-fit mr-4 font-semibold border-2 rounded p-2 my-2 bg-gray-200 text-sm">{technology}</li>
                </ul>
              );
            })}
          </div>
          {/* <div className="w-fit mx-auto">
            <Image src={project.webMockupImg} alt={`Mockup for ${project.projectName}`} width={1050} height={450} />
          </div> */}
          <h4 className="text-2xl font-bold mt-4">What is {project.projectName}?</h4>
          {project.website != null && <a href={project.website} target="_blank" rel="noopener noreffer" className="text-sky-400 underline mb-4 ">Visit the website</a>}
          <p>{project.missionStatement}</p>
          <p className="mt-4 sm:mt-8">{project.description}</p>
        <h4 className="font-semibold text-xl my-4">How can I access {project.projectName}?</h4>
        {project.website != null && <a href={project.website} target="_blank" rel="noopener noreffer" className="text-sky-400 underline">Visit the {project.projectName} Website</a>}
        {project.github !== null && <a href={project.github} target="_blank" rel="noopener noreffer" className="text-sky-400 underline">Visit the GitHub repo</a>}
         
        </div>
      </div>
      <Footer />
    </div>
  );
}
