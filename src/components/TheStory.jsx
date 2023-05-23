import React from "react";
import {
  homeSignature,
  homeStoryImage,
} from "../../public/images/homepage_images";
import Image from "next/image";
import { Heading3 } from ".";

const TheStory = () => {
  return (
    <section className="md:px-40 px-5 md:py-20 py-10 grid md:grid-cols-2 bg-[#FFF8F5]">
      <div className="md:pr-10 md:border-r md:border-r-[#B29A90]">
        <Image src={homeStoryImage} alt="Home Story Image" />
      </div>
      <div className="md:pl-10 md:mt-0 mt-5">
        <div className="space-y-2">
          <Heading3 title={"The Story"} />
          <p className="font-josefin md:text-base text-sm font-light">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using &apos;Content here, content gfshere',
            makinlook like readable English. Many desktop publishing packages.
          </p>
        </div>
        <div className="grid grid-cols-2 md:gap-10 gap-3 md:my-5 my-3">
          <div className="space-y-2">
            <Heading3 title={"1996"} />
            <p className="font-josefin md:text-base text-sm font-light">
              Lorem Ipsum is that it has a more-or-less normal distribution
            </p>
          </div>
          <div className="space-y-2">
            <Heading3 title={"2000"} />
            <p className="font-josefin md:text-base text-sm font-light">
              Lorem Ipsum is that it has a more-or-less normal Content content
            </p>
          </div>
        </div>
        <div className="uppercase font-josefin space-y-2">
          <p>josefine</p>
          <Image src={homeSignature} alt="signature" className="md:w-32 w-20" />
        </div>
      </div>
    </section>
  );
};

export default TheStory;
