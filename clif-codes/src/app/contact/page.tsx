import Image from "next/image";
import Header from "../components/Header";
import { SocialIcon } from "react-social-icons";
import Footer from "../components/Footer";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="flex justify-around max-w-5xl m-auto pt-[4rem] items-center content-center sm:flex-col sm:pt-[2rem]">
        <div className="flex flex-col justify-between w-[50%] sm:w-[75%]">
          <h2 className="font-bold text-3xl">Point of Contact</h2>
          <p className="pt-[2rem]">
            I am Clif, a passionate web developer of three years. I like to
            solve problems and build new things. I am passionate about AI,
            accessability, & performance. Reach out now to get started working
            towards your next solution.
          </p>
        </div>
        <div className="flex flex-col">
          <Image
            src="/pfp.webp"
            alt="profile photo shot of Clif"
            className="rounded-[50%] pt-[1rem] m-auto"
            width={150}
            height={150}
          />
          <h4 className="text-sky-400 pt-[1rem]">Freelance Web Developer</h4>
        </div>
      </div>
      <aside className="text-gray-500 text-center py-4 underline italic">Note: The buttons below are external links</aside>
      <div className="flex pt-8 pb-[6rem] w-[50%] mx-auto justify-evenly sm:pt-[2rem]">
        <SocialIcon
          bgColor="rgb(56 189 248)"
          className="transition duration-300 ease-in-out border-[0.12rem] rounded-[100%] border-black hover:scale-125"
          target="_blank"
          url="https://linkedin.com/in/clif-beale"
        />
        <SocialIcon
          bgColor="rgb(56 189 248)"
          href="mailto:cliftonscottbeale@gmail.com"
          className="transition duration-300 ease-in-out border-[0.12rem] rounded-[100%] border-black hover:scale-125"
          target="_blank"
          network="email"
        />
        <SocialIcon
          bgColor="rgb(56 189 248)"
          href="https://discord.com/users/367069635083894784"
          className="transition duration-300 ease-in-out border-[0.12rem] rounded-[100%] border-black hover:scale-125 "
          target="_blank"
          network="discord"
        />
      </div>
      <h4 className="text-center text-2xl font-medium">
        Anonymous Feedback
      </h4>
      <ContactForm />
      <Footer />
    </>
  );
}
