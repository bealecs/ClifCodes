import { InboxIcon, ComputerDesktopIcon, FingerPrintIcon, CommandLineIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'UI Design Services',
    description:
      'Full application design & individual component designs / templates',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Full Stack Solutions',
    description:
      'From static single page web applications to dynamic with a database and user management',
    icon: CommandLineIcon,
  },
  {
    name: 'Newsletter & Email Services',
    description:
      'Set up your users to get your latest updates and information, automated through email',
    icon: InboxIcon,
  },
  {
    name: 'User Authentication & Management',
    description:
      'Bring account creation to your users and manage account features / tools',
    icon: FingerPrintIcon,
  },
]

export default function Hero() {
  return (
    <div className="bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-400">Deploy faster with quality solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Satisfaction guarenteed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Check out some of our solutions below for a glimpse at what we can do for you 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <div className='flex justify-evenly pt-20'>
            <button className='transition duration-300 ease-in-out bg-sky-400 text-black hover:text-white border-black border-2 hover:bg-sky-600 p-4 rounded-lg'>
              View Services
            </button>
            <button className='transition duration-300 ease-in-out bg-sky-400 text-black hover:text-white hover:bg-sky-600 border-black border-2 p-4 rounded-lg'>
              Contact Clif
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
