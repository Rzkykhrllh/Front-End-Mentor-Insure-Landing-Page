import React from "react";
import "./index.css";

function FindOut() {
  return (
    <section className="mx-5 xl:mx-auto py-36 xl:w-xl">
      {/* content */}

      <div className="flex flex-col justify-between px-10 py-20 text-white bg-no-repeat md:px-16 lg:px-20 md:flex-row gap-y-10 bg-findout">
        <h3 className="text-3xl md:text-5xl md:text-left font-serif-display">
          Find out more <br className="hidden md:block" />
          about how we work
        </h3>

        <div className="flex justify-center my-auto">
          <a
            href="#"
            className="px-5 py-3 border md:py-4 hover:bg-white hover:text-gray-900"
          >
            HOW WE WORK
          </a>
        </div>
        {/*  */}
      </div>
    </section>
  );
}

export default FindOut;
