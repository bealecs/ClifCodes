import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-8">
      <h4 className="text-center text-3xl font-bold  sm:text-left sm:px-[1rem]">
        Core Services
      </h4>
      <div className="grid grid-cols-3 gap-4 w-7/12 mx-auto my-[3rem] md:flex md:flex-col md:w-[60%] sm:flex sm:flex-col sm:w-[90%]">
        <a href="/services/ui-service" id="ui" className="text-center py-4 rounded-lg hover:shadow-xl sm:text-left overflow-hidden">
          <Image
            src={"/uiDevelopment1.svg"}
            alt="Phone screen with a thumbs up over top of some UI"
            width={150}
            height={150}
            className="mx-auto sm:mx-0"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            UI Development
          </h2>
          <p className="text-gray-500 text-justify tracking-normal w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            Bring brilliant, vibrant ideas to life with my UI Development
            services. From designing simple components to full-on component
            libraries, I will surely make your page pop.
          </p>
        </a>
        <a href="/services/static-service" className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
          <Image
            src={"/static1.svg"}
            alt="A website with a couple of different static pages surrounding it"
            width={150}
            height={150}
            className="mx-auto sm:mx-0"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            Static Application
          </h2>
          <p className="text-gray-500 text-justify tracking-tight w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            Crafting static web applications tailored to your needs quickly and
            efficiently. Count on me to bring your vision to life with precision
            and creativity and responsiveness.
          </p>
        </a>
        <a href="/services/dynamic-service" className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
          <Image
            src={"/dynamic.svg"}
            alt="A crane holding up a frame of a website while some machinery works on the web page"
            width={150}
            height={150}
            className="mx-auto sm:mx-0"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            Dynamic Application
          </h2>
          <p className="text-gray-500 text-justify tracking-tighter w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            From interactive user experiences to seamless data integration, my
            services will transform your ideas into dynamic, feature-rich
            applications that captivate your audience.
          </p>
        </a>
        <a href="/services/database-service" className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
          <Image
            src={"/database.svg"}
            alt="Two machines that resemble humans with robot heads dancing gleefully as money prints from their mouths while the stocks rise on the screen in the back of the room"
            width={150}
            height={150}
            className="mx-auto sm:mx-0"
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
        </a>
        <a href="/services/userAuth-service" className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
          <Image
            src={"/userAuth.svg"}
            alt="A user sitting at a control center with an eye monocle on, focused for what they are doing"
            width={150}
            height={150}
            className="mx-auto sm:mx-0"
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
        </a>
        <a href="/services/newsletter-service" className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
          <Image
            src={"/newsletter.svg"}
            alt="Calendar, next to a screen with some rising stocks and piles of coins with $$"
            width={150}
            height={150}
            className="mx-auto sm:mx-0"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            Newsletter & Email Services
          </h2>
          <p className="text-gray-500 text-justify tracking-tight w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            Stay connected with your audience and drive engagement with my
            newsletter and emailing services. Whether crafting compelling
            email campaigns or setting up automated newsletters, I will help you
            effectively communicate with your subscribers and grow your brand
            presence.
          </p>
        </a>
        <a href="/services/metrics-service" className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
          <Image
            src={"/metrics.svg"}
            alt="Cash register printing off a long receipt. The screen on the cash register resembles a surprised/sad face from being overworked"
            width={150}
            height={150}
            className="mx-auto sm:mx-0"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            Site Metrics Enhancement
          </h2>
          <p className="text-gray-500 text-justify tracking-tighter w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            Gain valuable insights into your website performance and user
            behavior. From implementing analytics tools to interpreting data and
            providing actionable recommendations, I will help you optimize your
            online presence and drive results.
          </p>
        </a>
        <a href="/services/advocate-service" className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
          <Image
            src={"/devadvocate.svg"}
            alt="A robot teaching a class on what appears to be algebra. The robot is pointing a stick at a chalkboard that contains some different graphs. School setting."
            width={150}
            height={150}
            className="mx-auto sm:mx-0"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            Developer Advocate
          </h2>
          <p className="text-gray-500 text-justify tracking-normal w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            I took the plunge so you do not have to. I can teach you everything
            that I know, from principals of UI/UX design to Object Oriented
            Programming. I can help you to become a better developer.
          </p>
        </a>
        <a href="/services/random-service" className="text-center py-4 rounded-lg hover:shadow-lg sm:text-left overflow-hidden">
          <Image
            src={"/1off.svg"}
            alt="Website shattering while someone at a control desk is trying something to fix it"
            width={150}
            height={150}
            className="mx-auto sm:mx-0"
          />
          <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
            1-off Solutions
          </h2>
          <p className="text-gray-500 text-justify tracking-tight w-11/12 py-[1rem] h-[200px] mx-[1rem]">
            Have a unique problem or requirement? We can tackle it together -
            providing innovative and effective answers to your individual needs.
            Whether it be a custom feature or a technical hurdle, I am here to
            deliver bespoke solutions that exceed expectations.
          </p>
        </a>
      </div>
    </section>
  );
}
