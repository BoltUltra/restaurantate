import React from "react";
import Image from "next/image";
import { client } from "../../lib/client";
import { useNextSanityImage } from "next-sanity-image";
import {
  homeSpecialOffers,
  offerLine,
} from "../../public/images/homepage_images";
import { Heading3, Heading4, SecondaryButton, SubPageTitle } from "./";

const Menu = ({ startersData, mainDishData, dessertData }) => {
  return (
    <section className="md:px-40 px-5 md:py-20 py-10">
      <SubPageTitle title={"Menu"} color={'background'} />
      <div className="grid md:grid-cols-3 md:gap-10 gap-5">
        <div className="space-y-5">
          <div className="space-y-3">
            <Heading3 title={'Try Our Special Offers'} />
            <p className="font-josefin md:text-base text-sm">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using &apos;Content here, content making it look
              like readable English.
            </p>
          </div>
          <Image src={homeSpecialOffers} alt="Special Offer" />
          <SecondaryButton link={"/"} title={'See all dishes'} color={'primary font-josefin'} />
        </div>
        <div className="md:col-span-2 space-y-5">
          {/* Starters */}
          <div className="space-y-5">
            <Heading3 title={'Starters'} />
            {startersData.map((item) => {
              const imageSrc = useNextSanityImage(client, item.image)
              return (
                <div className="flex items-center space-x-2" key={item.dishName}>
                  <div>
                    <Image
                      src={imageSrc}
                      className="h-20 w-20 rounded-full object-cover"
                      alt={item.dishName}
                    />
                  </div>
                  <div>
                    <div>
                      <Heading4 title={item.dishName} />
                      <div className="flex md:items-center md:space-x-3">
                        <p className="font-josefin md:text-base text-sm w-full text-[#555555]">
                          {item.dishContent}
                        </p>
                        <div className="md:block hidden">
                          <Image src={offerLine} alt="line" />
                        </div>
                        <p className="font-bold md:text-3xl text-2xl font-garamond">
                          {item.dishPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {/* Main Dish */}
          <div className="space-y-5">
            <Heading3 title={'Main Dish'} />
            {mainDishData.map((item) => {
              const imageSrc = useNextSanityImage(client, item.image)
              return (
                <div className="flex items-center space-x-2" key={item.dishName}>
                  <div>
                    <Image
                      src={imageSrc}
                      className="h-20 w-20 rounded-full object-cover" alt={item.dishName}
                    />
                  </div>
                  <div>
                    <div>
                      <Heading4 title={item.dishName} />
                      <div className="flex md:items-center md:space-x-3">
                        <p className="font-josefin md:text-base text-sm w-full text-[#555555]">
                          {item.dishContent}
                        </p>
                        <div className="md:block hidden">
                          <Image src={offerLine} alt="line" />
                        </div>
                        <p className="font-bold md:text-3xl text-2xl font-garamond">
                          {item.dishPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {/* Dessert */}
          <div className="space-y-5">
            <Heading3 title={'Dessert'} />
            {dessertData.map((item) => {
              const imageSrc = useNextSanityImage(client, item.image)
              return (
                <div className="flex items-center space-x-2" key={item.dishName}>
                  <div>
                    <Image
                      src={imageSrc}
                      className="h-20 w-20 rounded-full object-cover" alt={item.dishName}
                    />
                  </div>
                  <div>
                    <div>
                      <Heading4 title={item.dishName} />
                      <div className="flex md:items-center md:space-x-3">
                        <p className="font-josefin md:text-base text-sm w-full text-[#555555]">
                          {item.dishContent}
                        </p>
                        <div className="md:block hidden">
                          <Image src={offerLine} alt="line" />
                        </div>
                        <p className="font-bold md:text-3xl text-2xl font-garamond">
                          {item.dishPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
