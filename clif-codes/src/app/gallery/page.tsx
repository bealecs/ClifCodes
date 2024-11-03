import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Carousel from "../components/Carousel";

const Gallery = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="px-4 py-8 lg:w-8/12">
          <div className="hidden lg:flex flex-wrap my-4 border-2 w-fit rounded-lg p-2 sm:px-0">
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
            <p className="mx-2 text-sky-400 underline">Gallery</p>
          </div>
          <h2 className="text-5xl text-sky-400 mb-8 font-semibold italic text-center">
            CHECK OUT MY WORK
          </h2>
          <div>
            {/* <select className="p-2 border-2 border-sky-400 rounded-lg block w-fit mx-auto">
              <option value="">Choose a display</option>
              <option>Full-Stack</option>
              <option>Static Websites</option>
              <option>Games/Misc.</option>
            </select> */}
            <h4 className="font-semibold text-2xl italic mt-4 mx-6 lg:mx-0">
              Full-stack Web Applications
            </h4>
            <div className="sm:flex sm:flex-wrap sm:justify-evenly lg:flex">
              <a
                href="/gallery/full-stack/cart-dart"
                className="flex border-2 lg:w-fit w-5/12 my-4 lg:mr-4 transition duration-300 ease-out hover:shadow-2xl"
              >
                <Image
                  height={500}
                  width={500}
                  alt="icon displaying the logo for Cart Dart"
                  src={"/CartDart.png"}
                />
              </a>
              <a
                href="/gallery/full-stack/next-meal"
                className="flex border-2 lg:w-fit w-5/12 my-4 lg:mx-4  transition duration-300 ease-out hover:shadow-2xl"
              >
                <Image
                  height={500}
                  width={500}
                  alt="icon display a logo for Next Meal"
                  src={"/NextMeal.png"}
                />
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-2xl italic mt-4 mx-6 lg:mx-0">
                Static Websites
              </h4>
              <div className="sm:flex sm:flex-wrap justify-evenly lg:flex">
                <a
                  href="/gallery/static/syaa"
                  className="flex border-2 lg:w-fit w-5/12 my-4 lg:mr-4 transition duration-300 ease-out hover:shadow-2xl"
                >
                  <Image
                    height={500}
                    width={500}
                    alt="icon"
                    src={"/syaa.png"}
                  />
                </a>
                <a
                  href="/gallery/static/manor"
                  className="flex border-2 lg:w-fit w-5/12 my-4 lg:mx-4 transition duration-300 ease-out hover:shadow-2xl"
                >
                  <Image
                    height={500}
                    width={500}
                    alt="icon"
                    src={"/manor.png"}
                  />
                </a>
                <a
                  href="/gallery/static/sfr-solutions"
                  className="flex border-2 lg:w-fit w-5/12 rounded my-4 lg:ml-4 transition duration-300 ease-out hover:shadow-2xl"
                >
                  <Image height={500} width={500} alt="icon" src={"/SFR.png"} />
                </a>
                <a
                  href="/gallery/static/doodles"
                  className="flex border-2 lg:w-fit w-5/12 rounded my-4 lg:mx-4 transition duration-300 ease-out hover:shadow-2xl"
                >
                  <Image
                    height={500}
                    width={500}
                    alt="icon"
                    src={"/doodles.png"}
                  />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-2xl italic mt-4 mx-6 lg:mx-0">
                Games/Misc.
              </h4>
              <div className="sm:flex sm:flex-wrap justify-evenly lg:flex">
                <a
                  href="/gallery/misc/boggle"
                  className="flex border-2 lg:w-fit w-5/12 my-4 lg:mr-4 transition duration-300 ease-out hover:shadow-2xl"
                >
                  <Image
                    height={500}
                    width={500}
                    alt="icon"
                    src={"/boggle.png"}
                  />
                </a>
                <a
                  href="/gallery/misc/tictactoe"
                  className="flex border-2 lg:w-fit w-5/12 my-4 lg:mx-4 transition duration-300 ease-out hover:shadow-2xl"
                >
                  <Image height={500} width={500} alt="icon" src={"/XO.png"} />
                </a>
                <a
                  href="/gallery/misc/extension"
                  className="flex border-2 lg:w-fit w-5/12 rounded my-4 lg:mx-4 transition duration-300 ease-out hover:shadow-2xl"
                >
                  <Image
                    height={500}
                    width={500}
                    alt="icon"
                    src={"/extension.png"}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-sky-400 text-4xl text-center italic font-semibold">
        My Tech Stack
      </h4>
      <Carousel />
      <Footer />
    </>
  );
};

export default Gallery;
