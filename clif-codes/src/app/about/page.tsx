// pages/About.js

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="px-4 py-8 w-8/12">
          <div className="flex flex-wrap my-4 border-2 w-fit rounded-lg p-2 sm:px-0">
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
            <span className="sm:hidden">{"->"}</span>
            <p className="mx-2 text-sky-400 underline">About Me</p>
          </div>
          <h2 className="text-3xl font-bold  mb-4">About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            Hi there! I am Clif, a U.S. veteran turned freelance web developer specializing in full
            stack web development. I love crafting beautiful and functional
            websites using cutting-edge technologies.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            With three years of experience in the industry, I have a passion for
            keeping up to date with the latest technologies in order to continue building performant, user-friendly, scalable web applications.
          </p>
          <p className="text-lg text-gray-700">
            Some of the things I am passionate about include:
          </p>
          <ul className="list-disc ml-6 pb-6">
            <li>Accessability</li>
            <li>Web Performance</li>
            <li>Responsivity</li>
            <li>AI</li>
          </ul>
          <p className="text-lg pb-6">Lately I have been interested especially in working with AI. Inquire about integrating AI with your solution!</p>
          <p className="text-lg text-gray-700">My main skills include:</p>
          <ul className="list-disc ml-6 pb-6">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Supabase</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Figma</li>
          </ul>

          <p className="text-lg text-gray-700">
            If you are looking for a reliable and dedicated developer for your
            next project, feel free to{" "}
            <a href="/contact" className="text-sky-400 underline">
              reach out to me!
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
