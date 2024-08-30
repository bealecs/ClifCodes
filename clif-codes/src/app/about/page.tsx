import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="px-4 py-8 lg:w-8/12">
          <div className="flex flex-wrap my-4 border-2 w-fit rounded-lg p-2">
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
            <p className="mx-2 text-sky-400 underline">About Me</p>
          </div>
          <Image src="/pfp.webp" alt="Clifton Beale profile picture" height={200} width={200} className="rounded-xl" />
          <h2 className="text-3xl font-bold  my-4">Hi, I&apos;m Clif :)</h2>
          <p className="text-xl font-semibold">
            I specialize in crafting stunning experiences on the web.
          </p>
          <p className="text-lg font-semibold mt-4">
            My preferred tech stack includes (but is not limited to):
          </p>
          <div className="flex text-lg">
            <ul className="list-disc mx-6">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS/Tailwind</li>
              <li>AWS Infrastructure</li>
            </ul>
            <ul className="list-disc mx-4 text-lg">
              <li>React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>PostgresQL</li>
            </ul>
          </div>
          <div className="my-4">
            <p className="text-lg mb-6 leading-loose">
              I began to learn how to code while I was in the military. I served
              4 years in the U.S. Air Force. Throughout my time in the service,
              I would spend my free time learning how to program with JavaScript
              and HTML to static websites. Fast forward several years, and I
              have learned so much. I have built so many websites and even had
              some amazing personal projects that I was able to bring to life.
            </p>
            <p className="text-lg mb-6 leading-loose">
              Now, I focus most of my time building with the latest and greatest technologies. I prefer to scaffold my work with AWS infrastructure, as it is a very reliable cloud service that scales as needed.
              I can quickly build out my front ends with React and and Tailwind CSS while leveraging AWS for my backend services like Lambda functions, storage, authentication, and database. 
            </p>
            <p className="text-lg mb-6 font-semibold">
              Coding is not only a job for me, but also a long-time hobby.
            </p>
          </div>

          <p className="text-lg">
            Some of the things I am passionate about include:
          </p>
          <ul className="list-disc ml-6 pb-6">
            <li className="italic text-lg my-2">
              Keeping up-to-date with industry accessibility standards
            </li>
            <li className="italic text-lg my-2">
              Maintaining peak performance metrics
            </li>
            <li className="italic text-lg my-2">Stunning UI/UX on any device</li>
            <li className="italic text-lg my-2">
              Innovation and invention - bringing ideas to life
            </li>
          </ul>
          <p className="text-lg pb-6">
            Lately, I&apos;ve been particularly interested in working with AI. As
            technology advances, I believe it&apos;s crucial to stay updated with
            these changes. AI introduces an exciting new focal point for
            building projects and bringing ideas to life.
          </p>

          <p className="text-lg">
            If you are looking for a reliable and dedicated developer for your
            next project, look no further!{" "}
            <a href="/contact" className="text-sky-400 underline">
              Reach out to me
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
