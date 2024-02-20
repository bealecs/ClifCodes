import {
  InboxIcon,
  ComputerDesktopIcon,
  FingerPrintIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "UI Design Services",
    description:
      "Full application design & individual component designs / templates",
    icon: ComputerDesktopIcon,
    href: "/services/ui-service",
  },
  {
    name: "Full Stack Solutions",
    description:
      "From static single page web applications to dynamic with a database and user management",
    icon: CommandLineIcon,
    href: "/services/dynamic-service",
  },
  {
    name: "Newsletter & Email Services",
    description:
      "Set up your users to get your latest updates and information, automated through email",
    icon: InboxIcon,
    href: "/services/newsletter-service",
  },
  {
    name: "User Authentication & Management",
    description:
      "Bring account creation to your users and manage account features / tools",
    icon: FingerPrintIcon,
    href: "/services/userAuth-service",
  },
];

export default function Hero() {
  return (
    <div className="bg-white py-8 sm:py-4">
      <div className="mx-auto w-7/12 sm:w-[100%] px-6 lg:px-8">
  <div className="mx-auto max-w-2xl lg:text-center">
    <h2 className="text-2xl font-semibold leading-7 text-sky-500">
      Veteran owned & operated
    </h2>
    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    Elevate Your Strategy with Premium Solutions
    </p>
    <p className="mt-6 text-lg leading-8 text-gray-600">
      Delivering high quality, performant results. View some of our solutions below
    </p>
  </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <div className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </div>
                <div className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </div>
                <a href={feature.href} className="text-sm text-sky-500 hover:text-sky-600">View Service</a>
              </div>
            ))}
          </div>
          <div className="flex justify-evenly pt-20">
            <a
              href="/schedule"
              className="transition duration-300 ease-in-out bg-sky-500 text-white hover:bg-sky-600 border-[0.12rem] border-black p-4 rounded-lg"
            >
              Schedule
            </a>
            <a
              href="/contact"
              className="transition duration-300 ease-in-out bg-sky-500 text-white hover:bg-sky-600 border-[0.12rem] border-black p-4 rounded-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
