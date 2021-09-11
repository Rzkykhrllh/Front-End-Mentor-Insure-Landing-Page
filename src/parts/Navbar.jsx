import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";

import BgPattern from "../images/bg-pattern-mobile-nav.svg";

import "./index.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="fixed z-50">
        <div className="w-screen bg-white" id="nav-bg">
          <div className="mx-auto xl:w-xl xl:px-0" id="container">
            <div className="flex items-center justify-between h-16 px-5 mx-auto text-gray-700 ">
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
                        className="px-3 py-2 font-medium text-gray-500 hover:text-black font-karla"
                      >
                        {item.title}
                      </a>
                    ))}
                    <a
                      href="#"
                      className="px-3 py-2 font-medium text-gray-900 view-plans font-karla"
                    >
                      VIEW PLANS
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex md:hidden">
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
                className="relative w-screen h-screen md:hidden"
                id="mobile-menu"
                style={{ zIndex: 999, backgroundColor: "#2B282F" }}
              >
                {/* mobile menu wrapper */}

                <div ref={ref} className="px-2 pt-12 pb-3 space-y-10 sm:px-3">
                  {dataMobile.map((item, idx) => (
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

                <div id="bg-pattern-nav-mobile" className="absolute">
                  <img src={BgPattern} />
                </div>
              </div>
            )}
          </Transition>
        </div>
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
    isActive: false,
  },
  {
    title: "ACCOUNT",
    href: "#",
    isActive: false,
  },
];

const dataMobile = [
  {
    title: "HOW WE WORK",
    href: "#",
    isActive: false,
  },
  {
    title: "BLOG",
    href: "#",
    isActive: false,
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
