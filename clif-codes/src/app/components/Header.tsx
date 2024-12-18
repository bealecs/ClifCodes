"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  BarsArrowDownIcon,
  ClipboardIcon,
} from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "/services/metrics-service",
    icon: ChartPieIcon,
  },
  {
    name: "UI Design",
    description: "Bring your site to life with cutting-edge UI development",
    href: "/services/ui-service",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "User Authentication Services",
    description: "Allow users sign in or create accounts",
    href: "/services/userAuth-service",
    icon: FingerPrintIcon,
  },
  {
    name: "Database Setup & Management",
    description:
      "Manage your data & information in a safe and secure environment",
    href: "/services/database-service",
    icon: SquaresPlusIcon,
  },
  {
    name: "Email & Subscription Services",
    description:
      "Get set up with newsletter & subscription services for your users",
    href: "/services/newsletter-service",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Terms of Service", href: "/terms", icon: ClipboardIcon },
  { name: "All Services", href: "/#services", icon: BarsArrowDownIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="bg-white"
      style={{ position: "sticky", top: 0, zIndex: 10 }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center content-center justify-between p-6 lg:px-8 sticky top-0 bg-white z-10"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="font-mono text-black-400 pr-2 text-[2.5rem]">
            Clif
          </a>
          <a href="/" className="font-mono text-sky-500 text-[2.5rem]">
            Codes
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-900">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            className="text-base font-semibold leading-6 text-gray-900"
            href={pathname === "/gallery" ? "/" : "/gallery"}
          >
            {pathname === "/gallery" ? "Home Page" : "Gallery"}
          </a>
          <a
            href={pathname === "/contact" ? "/" : "/contact"}
            className="text-base font-semibold leading-6 text-gray-900"
          >
            {pathname === "/contact" ? "Home Page" : "Contact"}
          </a>
          <a
            href={pathname === "/about" ? "/" : "/about"}
            className="text-base font-semibold leading-6 text-gray-900"
          >
            {pathname === "/about" ? "Home Page" : "About Clif"}
          </a>
          {/* <a
            href={pathname === "/blog" ? "/" : "/blog"}
            className="text-base font-semibold leading-6 text-gray-900"
          >
            {pathname === "/blog" ? "Home Page" : "Blog"}
          </a> */}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-between">
            <div className="flex">
              <h1 className="font-mono text-black-400 pr-2 text-4xl">Clif</h1>
              <h1 className="font-mono text-sky-500 text-4xl">Codes</h1>
            </div>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <a
                  href={pathname === "/blog" ? "/" : "/blog"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {pathname === "/blog" ? "Home Page" : "Blog"}
                </a> */}
                <a
                  href={pathname === "/gallery" ? "/" : "/gallery"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {pathname === "/gallery" ? "Home Page" : "Gallery"}
                </a>
                <a
                  href={pathname === "/contact" ? "/" : "/contact"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {pathname === "/contact" ? "Home Page" : "Contact"}
                </a>
                <a
                  href={pathname === "/about" ? "/" : "/about"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {pathname === "/schedule" ? "Home Page" : "About Clif"}
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            <b>- </b>{item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
