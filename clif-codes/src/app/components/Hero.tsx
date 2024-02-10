import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Full Stack Web Application Solutions",
    description:
      "Clif Codes offers a range of solutions, from static, single-page web applications to dynamic full-stack applications. Schedule a consult to find your solution.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Optimized Performance, Accessibility, and SEO",
    description:
      "No matter your needs, Clif Codes develops with Accessibility, Performance, and SEO at the forefront of every solution.",
    icon: LockClosedIcon,
  },
  {
    name: "Cost Effective Solutions",
    description:
      "Clif Codes works quickly and efficiently, while using the most up-to-date technologies. In doing so, we ensure that our clients get lower prices for better solutions",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                I do it better
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Guaranteed Satisfaction
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I care deeply about my work, and won't stop until I get the
                perfect solution for your needs.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex justify-center p-8">
            <img
              src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=1380&t=st=1707525998~exp=1707526598~hmac=62c7cf4dcd525d8dae5205765ee0094fd326da4e1dbd811765c03b6c18985e77"
              alt="Screenshot of someone coding"
              className="rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
