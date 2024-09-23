import { randomUUID } from "crypto";
import Image from "next/image";
import React from "react";

interface Service {
  serviceName: string;
  serviceDescription: string;
  serviceImageLink: string;
  serviceAltText: string;
  serviceRedirectLink: string;
}
export default function Services() {
  const arrayOfServices: Service[] = [
    {
      serviceName: "UI Development",
      serviceDescription:
        "Bring brilliant, vibrant ideas to life with my UI Development services. From designing simple components to full-on component libraries, I will surely make your page pop.",
      serviceImageLink: "/uiDevelopment1.svg",
      serviceAltText: "Phone screen with a thumbs up over top of some UI",
      serviceRedirectLink: "/services/ui-service",
    },
    {
      serviceName: "Static Application",
      serviceDescription:
        "Crafting static web applications tailored to your needs quickly and efficiently. Count on me to bring your vision to life with precision and creativity and responsiveness.",
      serviceImageLink: "/static1.svg",
      serviceAltText:
        "A website with a couple of different static pages surrounding it",
      serviceRedirectLink: "/services/static-service",
    },
    {
      serviceName: "Dynamic Application",
      serviceDescription:
        "From interactive user experiences to seamless data integration, my services will transform your ideas into dynamic, feature-rich applications that captivate your audience.",
      serviceImageLink: "/dynamic.svg",
      serviceAltText:
        "A crane holding up a frame of a website while some machinery works on the web page",
      serviceRedirectLink: "/services/dynamic-service",
    },
    {
      serviceName: "Database Setup and Management",
      serviceDescription:
        "Need a robust database solution for your project? I offer comprehensive database setup and management services, ensuring efficient data organization, storage, and retrieval. Trust me to optimize your database performance and streamline your data management processes.",
      serviceImageLink: "/database.svg",
      serviceAltText:
        "Two machines that resemble humans with robot heads dancing gleefully as money prints from their mouths while the stocks rise on the screen in the back of the room",
      serviceRedirectLink: "/services/database-service",
    },
    {
      serviceName: "User Auth and Management",
      serviceDescription:
        "Protect your users and streamline access to your platform with my user authentication and management services. From secure login systems to user profile management, I will implement reliable solutions that prioritize security and usability, enhancing the overall user experience.",
      serviceImageLink: "/userAuth.svg",
      serviceAltText:
        "A user sitting at a control center with an eye monocle on, focused for what they are doing",
      serviceRedirectLink: "/services/userAuth-service",
    },
    {
      serviceName: "Newsletter and Email Services",
      serviceDescription:
        "Stay connected with your audience and drive engagement with my newsletter and emailing services. Whether crafting compelling email campaigns or setting up automated newsletters, I will help you effectively communicate with your subscribers and grow your brand presence.",
      serviceImageLink: "/newsletter.svg",
      serviceAltText:
        "Calendar, next to a screen with some rising stocks and piles of coins with $$",
      serviceRedirectLink: "/services/newsletter-service",
    },
    {
      serviceName: "Metrics Analyzation",
      serviceDescription:
        "Gain valuable insights into your website performance and user behavior. From implementing analytics tools to interpreting data and providing actionable recommendations, I will help you optimize your online presence and drive results.",
      serviceImageLink: "/metrics.svg",
      serviceAltText:
        "Cash register printing off a long receipt. The screen on the cash register resembles a surprised/sad face from being overworked",
      serviceRedirectLink: "/services/metrics-service",
    },
    {
      serviceName: "Developer Advocate",
      serviceDescription:
        "I took the plunge so you do not have to. I can teach you everything that I know, from principals of UI/UX design to Object Oriented Programming. I can help you to become a better developer.",
      serviceImageLink: "/devadvocate.svg",
      serviceAltText:
        "A robot teaching a class on what appears to be algebra. The robot is pointing a stick at a chalkboard that contains some different graphs. School setting.",
      serviceRedirectLink: "/services/advocate-service",
    },
    {
      serviceName: "1-Off Solution",
      serviceDescription:
        "Have a unique problem or requirement? We can tackle it together - providing innovative and effective answers to your individual needs. Whether it be a custom feature or a technical hurdle, I am here to deliver bespoke solutions that exceed expectations.",
      serviceImageLink: "/1off.svg",
      serviceAltText:
        "Website shattering while someone at a control desk is trying something to fix it",
      serviceRedirectLink: "/services/random-service",
    },
  ];

  return (
    <section id="services" className="py-8">
      <h3 className="text-center text-3xl font-bold  sm:text-left sm:px-[1rem]">
        Core Services
      </h3>
      <div className="grid grid-cols-3 gap-4 w-7/12 mx-auto my-[3rem] md:flex md:flex-col md:w-[60%] sm:flex sm:flex-col sm:w-[90%]">
        {arrayOfServices.map((service) => {
          return (
            <a
              key={randomUUID()}
              href={service.serviceRedirectLink}
              id={service.serviceName}
              className="text-center py-4 rounded-lg hover:shadow-xl sm:text-left overflow-hidden"
            >
              <Image
                src={service.serviceImageLink}
                alt={service.serviceAltText}
                width={150}
                height={150}
                className="mx-auto sm:mx-0"
              />
              <h2 className="font-bold text-[1.2rem] sm:px-[1rem]">
                {service.serviceName}
              </h2>
              <p className="text-gray-500 text-start tracking-tighter w-11/12 py-[1rem] h-[200px] mx-[1rem] sm:tracking-tight">
                {service.serviceDescription}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
