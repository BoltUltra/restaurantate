import React from "react";
import Image from "next/image";
import { client } from "../../lib/client";
import { useNextSanityImage } from "next-sanity-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {
  Heading3,
  Heading4,
  ImageComponent,
  SubPageTitle,
  SecondaryButton,
} from ".";

const Team = ({ chefsData }) => {
  return (
    <section className="md:px-40 px-5 md:py-20 py-10">
      <div className="text-center space-y-3">
        <SubPageTitle title={"team"} />
        <Heading3 title={"Meet Our Professional Chefs"} />
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper md:py-5 py-10"
        >
          {chefsData.slice(0, 4).map((item) => (
            <SwiperSlide className="" key={item.name}>
              <div className="" key={item.name}>
                <ImageComponent
                  item={item}
                  className="bg-[#A0AEAF] h-64 w-full object-cover object-top px-2 pt-5"
                  alt={item.slug.current}
                />
                <div className="text-center">
                  <Heading4 title={item.name} />
                  <p className="font-josefin text-primary text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center mt-5">
          <SecondaryButton
            title="See all Chefs"
            link={"/chefs"}
            color={"primary font-josefin"}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
