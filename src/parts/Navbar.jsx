import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="">
        <div className="fixed z-50 w-full px-6 mx-auto bg-white">
          <div className="flex items-center justify-between h-16 mx-auto text-gray-700 xl:w-xl">
            <div className="flex items-center justify-between w-full ">
              <div className="flex-shrink-0">
                <img className="h-4" src={Logo} alt="Workflow" />
              </div>

              {/* Deskotp */}
              <div className="hidden md:block">
                <div className="flex items-baseline justify-end ml-10 space-x-6">
                  {data.map((item, index) => (
                    <a
                      href={item.href}
                      className="px-3 py-2 text-gray-700 rounded-md hover:bg-gray-700 font-karla"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center text-gray-400 hover:text-white "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {/* classname : focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white buat outer */}
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <img src={Hamburger} alt="Hamburger Button" />
                ) : (
                  <img src={Close} alt="Close Button" />
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="fixed w-screen h-screen mt-16 md:hidden"
              id="mobile-menu"
              style={{ zIndex: 999, backgroundColor: "#2B282F" }}
            >
              {/* mobile menu wrapper */}

              <div
                ref={ref}
                className="px-2 pt-2 pt-12 pb-3 space-y-10 sm:px-3"
              >
                {data.map((item, idx) => (
                  <a
                    key={"Mobile" + item.title}
                    href="#"
                    className={classNames(
                      item.isActive == true ? "border" : "",
                      `block py-4 mx-4 text-base font-medium 
                      text-gray-300  hover:bg-gray-700 hover:text-white`
                    )}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;

const data = [
  {
    title: "HOW WE WORK",
    href: "#",
    isActive: false,
  },
  {
    title: "BLOG",
    href: "#",
    isActive: true,
  },
  {
    title: "ACCOUNT",
    href: "#",
    isActive: false,
  },
  {
    title: "VIEW PLANS",
    href: "#",
    isActive: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
