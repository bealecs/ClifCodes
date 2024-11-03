import Image from "next/image";
import Star from "./StarSVG";

export default function Reviews() {
  return (
    <section>
      <div className="mx-auto w-fit">
        <Star />
      </div>
      <h4 className="text-3xl text-center my-8">What do my clients say?</h4>
      <div className="m-4 lg:w-10/12 lg:mx-auto block bg-slate-200 p-4 mb-8 rounded">
        <p>
          &quot;Clif has been a part of the SYAA family for over a decade. From playing baseball as a kid to volunteering throughout the years, his dedication to our community has always been clear. As a teenager, Clif also worked as an umpire, helping to keep the games running smoothly. When we needed a new website to better serve our players and families, Clif stepped up without hesitation, offering to volunteer his time and expertise to make it happen.

The new site has been a game-changer for SYAA. It&apos;s easy for our users to navigate and makes communication with our players and their families much more efficient. We couldn&apos;t be more grateful for Clif&apos;s hard work and continued support over the years.&quot;
        </p>
        <div className="flex items-center my-4">
          <Image
            src={"/syaa.png"}
            alt="Icon for SYAA"
            height={75}
            width={75}
            className="rounded-full"
          />
          <h4 className="font-bold text-2xl mx-4">SYAA Board of Commissioners</h4>
        </div>{" "}
      </div>
      <div className="m-4 lg:w-10/12 lg:mx-auto block bg-slate-200 p-4 mb-8 rounded">
        <p>
          &quot;Clif did a fantastic job updating our website here at The Manor Golf Course. We were on a tight timeline, but they made sure everything was finished ahead of schedule. He also managed to integrate all the info from our old site, which was a big relief, because we were able to save all of our previous user information. The new site is much easier to navigate, and it really gives us a fresh, modern look. Overall, Clif was easy to work with, quick to respond, and got the job done right. We highly recommend working with Clif. 10/10&quot;
        </p>
        <div className="flex items-center my-4">
          <Image
            src={"/manor.png"}
            alt="Icon for SYAA"
            height={75}
            width={75}
            className="rounded-full"
          />
          <h4 className="font-bold text-2xl mx-4">The Manor Golf Course</h4>
        </div>
      </div>
      <div className="m-4 lg:w-10/12 lg:mx-auto block bg-slate-200 p-4 mb-8 rounded">
        <p>
          &quot;Clif did a great job building my website, making it look nice and professional. He was able to deliver on exactly what I needed. He even helped out with logos and business cards. I would recommend Clif&apos;s services to anyone that needs a professional site&quot;
        </p>
        <div className="flex items-center my-4">
          <Image
            src={"/sfrSolutions.png"}
            alt="Icon for SYAA"
            height={75}
            width={75}
            className="rounded-full h-[75px] "
          />
          <h4 className="font-bold text-2xl mx-4">SFR Solutions</h4>
        </div>
      </div>
      <div className="m-4 lg:w-10/12 lg:mx-auto block bg-slate-200 p-4 mb-8 rounded">
        <p>
          &quot;Working with Clif was smooth and efficient. He delivered a clean, functional website for our business that met our needs perfectly. Highly recommend for your website!&quot;
        </p>
        <div className="flex items-center my-4">
          <Image
            src={"/cclighting.png"}
            alt="Icon for SYAA"
            height={75}
            width={75}
            className="rounded-full"
          />
          <h4 className="font-bold text-2xl mx-4">CC Lighting</h4>
        </div>
      </div>
    </section>
  );
}
