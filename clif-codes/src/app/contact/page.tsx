import Image from "next/image";
import Header from "../components/Header";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="flex justify-around max-w-5xl m-auto pt-[4rem] items-center content-center sm:flex-col sm:pt-[2rem]">
        <div className="flex flex-col justify-between w-[50%] sm:w-[75%]">
          <h2 className="font-bold text-3xl">Point of Contact</h2>
          <p className="text-gray-500 pt-[2rem]">
            I am Clif, a passionate web developer of three years. I like to
            solve problems and build new things. I am passionate about
            accessability & performance. Reach out now to get started working
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
      <div className="flex py-[6rem] w-[50%] mx-auto justify-evenly sm:pt-[2rem]">
        <SocialIcon
          bgColor="rgb(56 189 248)"
          target="_blank"
          url="https://linkedin.com/in/clif-beale"
        />
        <SocialIcon
          bgColor="rgb(56 189 248)"
          href="mailto:cliftonscottbeale@gmail.com"
          target="_blank"
          network="email"
        />
        <SocialIcon
          bgColor="rgb(56 189 248)"
          href="https://discord.com/users/367069635083894784"
          target="_blank"
          network="discord"
        />
      </div>
      <h4 className="text-center text-2xl font-medium">
        Anonymous Feedback
      </h4>
      <form className="flex flex-col max-w-2xl mt-[3rem] m-auto sm:mx-4">
        <label>Type here:</label>
        <textarea
          placeholder="Enter your feedback..."
          className="border-solid border-2 rounded-lg p-1 m-1 border-gray-400 h-20"
        />
        <button
          type="submit"
          className="transition duration-300 ease-in-out mt-[2rem] border-[0.12rem] border-gray-600 rounded-lg w-fit m-auto p-[0.5rem] bg-sky-400 hover:bg-sky-600 text-white"
        >
          Submit Feedback
        </button>
      </form>
    </>
  );
}
