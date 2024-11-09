import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
    <Header />
    <section className="min-h-[50vh]" id="contact-section">
      <div className="flex justify-around max-w-5xl m-auto pt-[4rem] items-center content-center sm:flex-col sm:pt-[2rem]">
        <div className="flex flex-col justify-between w-[50%] sm:w-[100%] sm:px-8">
          <h2 className="font-bold text-3xl">Point of Contact</h2>
          <p className="pt-[2rem]">
            I am Clif, a freelance web developer of three years. I like to
            solve problems and build new things. I am passionate about AI,
            accessibility, & performance. Reach out now to get started working
            towards your next solution.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="border-4 rounded-full border-black my-4 lg:my-0 w-fit">
          <Image src="/pfp.png" alt="Clifton Beale profile picture" height={100} width={200} className="rounded-full border-4 border-sky-400 object-cover h-[200px] w-[200px]" />
          </div>
          <h4 className="text-sky-500 pt-[1rem]">Freelance Web Developer</h4>
        </div>
      </div>
      <a href="/schedule" className="m-8 border-2 max-w-4xl text-center rounded p-4 transition duration-300 linear hover:bg-sky-500 hover:text-white hover:border-sky-400 border-2 border-sky-200 bg-sky-200 shadow-lg block lg:mx-auto">Schedule Consultation</a>
    </section>
    <Footer />
    </>
  );
}
