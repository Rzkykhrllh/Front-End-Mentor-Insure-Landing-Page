import React from "react";
import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Instagram from "../images/icon-instagram.svg";
import Pinterest from "../images/icon-pinterest.svg";

function Footer() {
  return (
    <section className="">
      {/* content */}
      <div className="py-16 mx-auto xl:w-xl">
        {/* atas */}
        <div className="flex justify-between bg-red-200">
          <img src={Logo} alt="" />

          {/* sosmed */}
          <div className="flex space-x-5 ">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Pinterest} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>

        {/* garis */}
        <div className="mt-8 mb-12 bg-garis" style={{ height: "1px" }} />

        {/* bawah */}
        <div className="flex justify-between text-left ">
          {footer.map((group, idx) => (
            <div id="ourcompany" className="space-y-5 mr-44">
              <p className=" text-garis">{group.title}</p>
              {group.item.map((link, idx) => (
                <p key={group.item + idx}>{link.text}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;

const footer = [
  {
    title: "OUR COMPANY",
    item: [
      { text: "HOW WE WORK" },
      { text: "WHY INSURE?" },
      { text: "VIEW PLANS" },
      { text: "REVIEWS" },
    ],
  },

  {
    title: "HELP ME",
    item: [
      { text: "FAQ" },
      { text: "TERMS OF USE" },
      { text: "PRIVACY POLICY" },
      { text: "COOKIES" },
    ],
  },

  {
    title: "CONTACT",
    item: [{ text: "SALES" }, { text: "SUPPORT" }, { text: "LIVE CHAT" }],
  },
  {
    title: "OTHER",
    item: [{ text: "CAREERS" }, { text: "PRESS" }, { text: "LICENSES" }],
  },
];
