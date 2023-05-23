import React from "react";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import { MdEditNote } from "react-icons/md";

const HomeContact = () => {
  return (
    <section className="grid md:grid-cols-3 md:gap-5 gap-10 md:px-40 px-5 md:py-20 py-10 bg-[#FFF8F5]">
      <div className="flex items-center space-x-3">
        <div className="md:text-3xl text-xl p-3 bg-background text-white text-center rounded-full">
          <CiLocationOn />
        </div>
        <div>
          <p className="font-garamond font-bold md:text-2xl text-xl">
            Locate Us
          </p>
          <p className="font-josefin font-light md:text-base text-sm">
            Riverside 25, San Francisco, California
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="md:text-3xl text-xl p-3 bg-background text-white text-center rounded-full">
          <CiTimer />
        </div>
        <div>
          <p className="font-garamond font-bold md:text-2xl text-xl">
            Open Hours
          </p>
          <p className="font-josefin font-light md:text-base text-sm">
            Mon To Fri 9:00 AM - 9:00 PM
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="md:text-3xl text-xl p-3 bg-background text-white text-center rounded-full">
          <MdEditNote />
        </div>
        <div>
          <p className="font-garamond font-bold md:text-2xl text-xl">
            Reservation
          </p>
          <p className="font-josefin font-light md:text-base text-sm">
            mayowa77@yahoo.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
