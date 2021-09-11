import React from "react";
import imgDeskotop from "../images/image-intro-desktop.jpg";
import imgMobile from "../images/image-intro-mobile.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen bg-blue-300 max-h-fulf">
      {/* atas 2xl */}
      <div className="hidden h-auto px-20 xl:block bg-dark_purple py-28">
        <div id="kiri" className="text-left text-white">
          <div
            id="garis"
            className="mb-16 bg-white"
            style={{ width: "15%", height: "1px" }}
          ></div>

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
        <div id="kanan" className="absolute top-0 right-0 pr-20 pt-28">
          <img src={imgDeskotop} alt="" />
        </div>
      </div>

      {/* mobile-sm */}
      <div
        className="h-auto "
        // style={{ backgroundImage: "" }}
      >
        <img className="w-full h-full md:hidden" src={imgMobile} alt="" />

        <div className="py-24 text-white bg-dark_purple px-7 bg-hero-mobile">
          <h1 className="text-4xl font-serif-display">
            Humanizing your insureance
          </h1>
          <p className="my-10 mt-6 text-gray-300">
            Get your life insureance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and and your loved ones are protected.
          </p>
          <a
            href="#"
            className="px-6 py-4 border hover:bg-white hover:text-gray-900"
          >
            VIEW PLANS
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
