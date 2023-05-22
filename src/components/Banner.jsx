import React from "react";
import SecondaryButton from "./SecondaryButton";
import { client } from "../../lib/client";

const Banner = ({ bannerData }) => {
  return (
    <>
      {console.log(bannerData)}
      <section className="bg-background grid md:grid-cols-2 md:py-20 py-10 md:text-left text-center md:px-40 px-5 gap-5">
        <div className="space-y-5 font-josefin">
          <h3 className="text-white font-bold md:text-5xl text-3xl font-garamond">
            {bannerData[0].bannerTitle}
          </h3>
          <p className="text-[#dfdfdf] font-josefin">
            {bannerData[0].bannerSubText}
          </p>
          <SecondaryButton link={"/"} title={bannerData[0].bannerButton} />
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Banner;
