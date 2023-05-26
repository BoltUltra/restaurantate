import React from "react";
import Image from "next/image";
import { Heading3, Heading4, SubPageTitle, ImageComponent } from ".";
import { burgerBG, pizzaBG } from "../../public/images/homepage_images";

const Offer = ({ specialOfferData }) => {
  return (
    <section className="md:px-40 px-5 md:py-20 py-10">
      <div className="text-center space-y-3">
        <SubPageTitle title={"offer"} color={"background"} />
        <Heading3 title={"Our special offers dishes"} />
        <p className="font-josefin md:text-base text-sm md:font-normal font-light">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content making.
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:gap-10 gap-5 md:mt-7 mt-4 items-center">
        {specialOfferData.map((item) => (
          <div
            className={`${
              item.dishName === "Chicken Burger"
                ? "bg-[#C6EAF2]"
                : "bg-[#D7D7D7]"
            } p-5 rounded-md`}
            key={item.dishName}
          >
            <div className="grid grid-cols-2 items-center">
              <div>
                <div className="relative">
                  {item.dishName === "Chicken Burger" ? (
                    <Image src={burgerBG} alt="Chicken Burger" />
                  ) : (
                    <Image src={pizzaBG} alt="Chicken Pizza" />
                  )}
                  <div className="absolute top-10 left-9 text-center uppercase -rotate-45">
                    {item.dishName === "Chicken Burger" ? (
                      <div className="">
                        <p className="uppercase font-josefin">only</p>
                        <p className="font-bold font-serif text-4xl">
                          ${item.price}
                        </p>
                      </div>
                    ) : (
                      <div className="text-white">
                        <p className="uppercase font-josefin">only</p>
                        <p className="font-bold font-serif text-4xl">
                          ${item.price}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2 mt-3">
                  <div className="flex">
                    <p className="border-y border-y-background uppercase text-xs font-josefin tracking-widest">
                      {item.percentage}% offer going
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Heading4 title={item.dishName} />
                    <p className="font-josefin text-sm font-light">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <ImageComponent item={item} className="" alt={item.dishName} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
