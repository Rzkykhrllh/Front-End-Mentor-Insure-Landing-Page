import React from "react";

function Differences() {
  return (
    <section className="mx-5 md:text-left xl:mx-auto xl:w-xl pt-36">
      <div className="h-px mx-auto mb-10 bg-gray-900 w-36 md:ml-0" />
      <h2
        className="mb-20 text-4xl md:text-6xl font-serif-display"
        style={{ color: "#2c2640" }}
      >
        We're Different
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
        {data.map((item, idx) => (
          <div key={"testi" + idx} className="">
            <img src={item.img} className="mx-auto md:ml-0" />
            <h3
              className="mt-10 mb-5 text-2xl font-serif-display"
              style={{ color: "#2c2640" }}
            >
              {item.title}
            </h3>
            <p className="mx-auto text-gray-400 w-80 md:w-auto md:ml-0">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    img: "/images/icon-snappy-process.svg",
    title: "Snappy Process",
    text: "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.",
  },
  {
    img: "/images/icon-affordable-prices.svg",
    title: "Afforadble Price",
    text: "We don't want you worrying about high monthly consts. Our prices may be low, but we still offer the best coverage possible.",
  },
  {
    img: "/images/icon-people-first.svg",
    title: "People First",
    text: "Our plans aren;t full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
  },
];

export default Differences;
