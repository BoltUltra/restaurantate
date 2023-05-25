import React from "react";
import {
  Heading3,
  Heading4,
  ImageComponent,
  SecondaryButton,
} from "@component/components";
import Image from "next/image";
import { offerLine } from "../../public/images/homepage_images";
import { mainImg } from "../../public/images/menu_images";

const MenuMain = ({ mainDishData }) => {
  return (
    <section className="md:px-40 px-5 md:py-20 py-10">
      <div className="grid md:grid-cols-5 md:gap-10 gap-5 items-center">
        <div className="md:col-span-3 space-y-5">
          {/* Starters */}
          <div className="space-y-5">
            <Heading3 title={"Starters"} />
            {mainDishData.map((item) => {
              return (
                <div
                  className="flex items-center space-x-2"
                  key={item.dishName}
                >
                  <div>
                    <ImageComponent
                      item={item}
                      className="h-20 w-20 rounded-full object-cover"
                      alt={item.dishName}
                    />
                  </div>
                  <div>
                    <div>
                      <Heading4 title={item.dishName} />
                      <div className="flex md:items-center md:space-x-3">
                        <p className="font-josefin md:text-base text-sm md:w-auto w-full text-[#555555]">
                          {item.dishContent}
                        </p>
                        <div className="md:block hidden">
                          <Image
                            src={offerLine}
                            alt="line"
                            className={"w-32"}
                          />
                        </div>
                        <p className="font-bold md:text-3xl text-2xl font-garamond">
                          {item.dishPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <SecondaryButton
              link={"/"}
              title={"See all dishes"}
              color={"primary font-josefin"}
            />
          </div>
        </div>
        <div className="space-y-5 md:col-span-2">
          <Image src={mainImg} alt="Main" />
        </div>
      </div>
    </section>
  );
};

export default MenuMain;
