import React from "react";
import SecondaryButton from "./SecondaryButton";
import { client } from "../../lib/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

const Banner = ({ bannerData }) => {
  const imageProps = useNextSanityImage(client, bannerData[0].image);

  return (
    <>
      <section className="bg-background grid md:grid-cols-2 md:py-20 py-10 md:text-left text-center md:px-40 px-5 gap-5 items-center">
        <div className="space-y-5 font-josefin">
          <h3 className="text-white font-bold md:text-5xl text-3xl font-garamond">
            {bannerData[0].bannerTitle}
          </h3>
          <p className="text-[#dfdfdf] font-josefin">
            {bannerData[0].bannerSubText}
          </p>
          <SecondaryButton link={"/"} title={bannerData[0].bannerButton} color={'white'} />
        </div>
        <div>
          <Image
            {...imageProps}
            style={{ width: "100%", height: "auto" }}
            className="md:mx-0 mx-auto" alt="Banner Image"
          />
        </div>
      </section>
    </>
  );
};

export default Banner;
