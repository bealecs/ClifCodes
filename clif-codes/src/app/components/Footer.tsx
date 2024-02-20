import React from "react";

const Footer = () => {
  return (
    <footer className="pt-16 sm:hidden">
      <div className="container mx-auto">
        <div className="flex justify-between content-center">
          {/* Column 1: Logo and copyright */}
          <div className="inline-block sm:block">
            <div className="flex mb-8">
              <a href="/" className="font-mono text-black-400 pr-2 text-4xl">Clif</a>
              <a href="/" className="font-mono text-sky-400 text-4xl">Codes</a>
            </div>
            <p className="text-sm sm:text-base">
              © 2024 Clif Codes, LLC. All Rights Reserved.
            </p>
          </div>

          {/* Column 2: Legal */}
          <div className="inline-block sm:block">
            <h3 className="font-bold text-sm sm:text-base mb-2">Legal</h3>
            <ul className="text-sm leading-8 sm:text-base">
              <li>
                <a href="/terms" className="transition duration-300 ease-out hover:text-sky-400 py-4">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="inline-block sm:block">
            <h3 className="font-bold text-sm sm:text-base mb-2">Navigation</h3>
            <ul className="text-sm leading-8 sm:text-base">
              <li>
                <a href="/schedule" className="transition duration-300 ease-out hover:text-sky-400">
                  Schedule Consult
                </a>
              </li>
              <li>
                <a href="/contact" className="transition duration-300 ease-out hover:text-sky-400">
                  Contact Clif
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="inline-block sm:block">
            <h3 className="font-bold text-sm sm:text-base mb-2">Find Me</h3>
            <ul className="text-sm leading-8 sm:text-base">
              <li>
                <a href="https://linkedin.com/in/clif-beale" target="_blank" className="transition duration-300 ease-out hover:text-sky-400">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.upwork.com/freelancers/~0180b9bc5164c60130?mp_source=share" target="_blank" className="transition duration-300 ease-out hover:text-sky-400">
                  UpWork
                </a>
              </li>
              <li>
                <a href="https://discord.com/users/367069635083894784" target="_blank" className="transition duration-300 ease-out hover:text-sky-400">
                  Discord
                </a>
              </li>
            </ul>
          </div>

            {/*My Stuff*/}
          <div className="inline-block sm:block">
            <h3 className="font-bold text-sm sm:text-base mb-2">Company</h3>
            <ul className="text-sm leading-8 sm:text-base">
              <li>
                <a href="https://dev.to/bealecs" target="_blank" className="transition duration-300 ease-out hover:text-sky-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://clif.codes" target="_blank" className="transition duration-300 ease-out hover:text-sky-400">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about" className="transition duration-300 ease-out hover:text-sky-400">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
