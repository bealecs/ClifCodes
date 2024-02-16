import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-8">
      <h4 className="text-center text-3xl font-bold my-[2rem] sm:text-left sm:px-[1rem]">
        Core Services
      </h4>
      <div className="grid grid-cols-3 gap-4 w-7/12 mx-auto mb-[3rem] md:flex md:flex-col md:w-[60%] sm:flex sm:flex-col sm:w-[90%]">
        <div className="text-center py-4 rounded-lg hover:shadow-xl sm:text-left">
          <Image
            src={"/uiDevelopment1.svg"}
            alt="clipart of a paint brush painting on a computer screen"
            width={150}
            height={150}
            className="mx-auto"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            UI Development
          </h2>
          <p className="text-gray-500 text-justify tracking-normal w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            I can assist you in building single components, or full-scale
            component libraries - and everything in between, of course.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left">
          <Image
            src={"/static1.svg"}
            alt=""
            width={150}
            height={150}
            className="mx-auto"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            Static Application
          </h2>
          <p className="text-gray-500 text-justify tracking-tight w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            Crafting static web applications tailored to your needs quickly and
            efficiently. Count on me to bring your vision to life with precision
            and creativity and responsiveness.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left">
          <Image
            src={"/dynamic.svg"}
            alt=""
            width={150}
            height={150}
            className="mx-auto"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            Dynamic Application
          </h2>
          <p className="text-gray-500 text-justify tracking-tight w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            From interactive user experiences to seamless data integration, my
            services will transform your ideas into dynamic, feature-rich
            applications that captivate your audience.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left">
          <Image
            src={"/database.svg"}
            alt=""
            width={150}
            height={150}
            className="mx-auto"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            Database Setup & Management
          </h2>
          <p className="text-gray-500 text-justify tracking-tight w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            Need a robust database solution for your project? I
            offer comprehensive database setup and management services, ensuring
            efficient data organization, storage, and retrieval. Trust me to
            optimize your database performance and streamline your data
            management processes.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left">
          <Image
            src={"/userAuth.svg"}
            alt=""
            width={150}
            height={150}
            className="mx-auto"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            User Authentication & Management
          </h2>
          <p className="text-gray-500 text-justify tracking-normal w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            I can assist you in building single components, or full-scale
            component libraries - and everything in between, of course.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left">
          <Image
            src={"/newsletter.svg"}
            alt=""
            width={150}
            height={150}
            className="mx-auto"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            Newsletter & Email Services
          </h2>
          <p className="text-gray-500 text-justify tracking-normal w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            I can assist you in building single components, or full-scale
            component libraries - and everything in between, of course.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left">
          <Image
            src={"/metrics.svg"}
            alt=""
            width={150}
            height={150}
            className="mx-auto"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            Site Metrics Enhancement
          </h2>
          <p className="text-gray-500 text-justify tracking-normal w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            I can assist you in building single components, or full-scale
            component libraries - and everything in between, of course.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left">
          <Image
            src={"/devadvocate.svg"}
            alt=""
            width={150}
            height={150}
            className="mx-auto"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            Developer Advocate
          </h2>
          <p className="text-gray-500 text-justify tracking-normal w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            I can assist you in building single components, or full-scale
            component libraries - and everything in between, of course.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left">
          <Image
            src={"/1off.svg"}
            alt=""
            width={150}
            height={150}
            className="mx-auto"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            1-off Solutions
          </h2>
          <p className="text-gray-500 text-justify tracking-normal w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            I can assist you in building single components, or full-scale
            component libraries - and everything in between, of course.
          </p>
        </div>
      </div>
    </section>
  );
}
