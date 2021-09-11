import React from "react";
import imgDeskotop from "../images/image-intro-desktop.jpg";
import imgMobile from "../images/image-intro-mobile.jpg";

import patternRightDesktop from "../images/bg-pattern-intro-right-desktop.svg";
import patternLeftDesktop from "../images/bg-pattern-intro-left-desktop.svg";
import patternRightMobile from "../images/bg-pattern-intro-right-desktop.svg";
import patternLefttMobile from "../images/bg-pattern-intro-left-desktop.svg";

import "./index.css";

function Hero() {
  return (
    <section className="relative w-full max-h-full min-h-screen ">
      {/* atas lg */}
      <div className="w-full bg-dark_purple">
        <div className="relative hidden h-auto px-5 mx-auto lg:block xl:w-xl bg-dark_purple py-28 xl:mx-auto">
          <div id="kiri" className="text-left text-white">
            <div id="garis" className="h-px mb-16 bg-white w-36"></div>
            <h1 className=" font-serif-display text-7xl">
              Humanazing
              <br />
              your Insurance.
            </h1>
            <p className="mt-6 mb-10" style={{ width: "534px" }}>
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to hel you find the plan that's right for
              you. Ensure you and your loved ones are protected.
            </p>

            <button className="py-4 border px-7 hover:bg-white hover:text-gray-900">
              VIEW PLANS
            </button>
          </div>

          <div
            id="kanan"
            className="absolute right-0 pr-5"
            style={{ top: "112px" }}
          >
            <img src={imgDeskotop} alt="" className="img-hero" />
          </div>
        </div>

        {/* mobile-lg */}
        <div
          className="h-auto lg:hidden"
          // style={{ backgroundImage: "" }}
        >
          <img className="w-full h-full " src={imgMobile} alt="" />

          <div className="py-24 text-white bg-dark_purple px-7 bg-hero-mobile">
            <h1 className="text-4xl font-serif-display">
              Humanizing your insureance
            </h1>
            <p className="my-10 mt-6 text-gray-300">
              Get your life insureance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and and your loved ones are protected.
            </p>
            <a
              href="#"
              className="px-6 py-4 border hover:bg-white hover:text-gray-900"
            >
              VIEW PLANS
            </a>
          </div>
        </div>
      </div>

      {/* pattern */}
      <div
        id="pattern-right-desktop"
        className="absolute top-0 right-0 hidden lg:block"
        style={{ width: "310px" }}
      >
        <img src={patternRightDesktop} />
      </div>

      <div
        id="pattern-left-desktop"
        className="absolute left-0 hidden lg:block"
        style={{ bottom: "-100px" }}
      >
        <img
          src={patternLeftDesktop}
          style={{ width: "150px", height: "400px" }}
        />
      </div>

      <div
        id="pattern-left-desktop"
        className="absolute right-0 z-40 lg:hidden"
        style={{ width: "130px", bottom: "-150px" }}
      >
        <img src={patternRightMobile} />
      </div>
    </section>
  );
}

export default Hero;
