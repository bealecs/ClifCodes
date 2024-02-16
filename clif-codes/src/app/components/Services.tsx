import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-8">
      <h4 className="text-center text-3xl font-bold my-[2rem] sm:text-left sm:px-[1rem]">
        Core Services
      </h4>
      <div className="grid grid-cols-3 gap-4 w-7/12 mx-auto my-[3rem] md:flex md:flex-col md:w-[60%] sm:flex sm:flex-col sm:w-[90%]">
        <div className="text-center py-4 rounded-lg hover:shadow-xl sm:text-left overflow-hidden">
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
            Bring brilliant, vibrant ideas to life with my UI Development
            services. From designing simple components to full-on component
            libraries, I will surely make your page pop.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
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
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
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
          <p className="text-gray-500 text-justify tracking-tighter w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            From interactive user experiences to seamless data integration, my
            services will transform your ideas into dynamic, feature-rich
            applications that captivate your audience.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
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
            Need a robust database solution for your project? I offer
            comprehensive database setup and management services, ensuring
            efficient data organization, storage, and retrieval. Trust me to
            optimize your database performance and streamline your data
            management processes.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
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
          <p className="text-gray-500 text-justify tracking-tight w-11/12 py-[1rem] h-[200px] mx-[1rem] md:tracking-tighter">
            Protect your users and streamline access to your platform with my
            user authentication and management services. From secure login
            systems to user profile management, I will implement reliable
            solutions that prioritize security and usability, enhancing the
            overall user experience.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
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
          <p className="text-gray-500 text-justify tracking-tight w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            Stay connected with your audience and drive engagement with my
            newsletter and emailing services. Whether it's crafting compelling
            email campaigns or setting up automated newsletters, I'll help you
            effectively communicate with your subscribers and grow your brand
            presence.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
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
          <p className="text-gray-500 text-justify tracking-tighter w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            Gain valuable insights into your website's performance and user
            behavior. From implementing analytics tools to interpreting data and
            providing actionable recommendations, I'll help you optimize your
            online presence and drive results.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
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
            I took the plunge so you do not have to. I can teach you everything
            that I know, from principals of UI/UX design to Object Oriented
            Programming. I can help you to become a better developer.
          </p>
        </div>
        <div className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
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
          <p className="text-gray-500 text-justify tracking-tight w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            Have a unique problem or requirement? Let's tackle it together -
            providing innovative and effective answers to your individual needs.
            Whether it's a custom feature or a technical hurdle, I'm here to
            deliver bespoke solutions that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
