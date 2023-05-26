import React from "react";
import Image from "next/image";
import { reservation2 } from "../../public/images/reservation_images";
import {
  Heading3,
  SecondaryButton,
  SubPageTitle,
} from "@component/components/index";

const ReservationBooking = () => {
  return (
    <section className="section-spacing">
      <div className="grid md:grid-cols-2 md:gap-10 gap-5 items-center">
        <div className="space-y-5">
          <div className="space-y-3 md:text-left text-center">
            <SubPageTitle title={"reservation"} />
            <Heading3 title={"Book your table now"} />
            <p className="font-josefin text-sm">
              The people, food and the prime locations make Rodich the perfect
              place good friends & family to come together and have great time.
            </p>
          </div>

          <form className="grid md:grid-cols-2 gap-5 font-josefin">
            <input
              type="text"
              name="name"
              id="name"
              className="booking-input"
              placeholder="Name"
            />

            <input
              type="email"
              name="email"
              id="email"
              className="booking-input"
              placeholder="Email"
            />

            <input
              type="text"
              name="phone"
              id="phone"
              className="booking-input"
              placeholder="Phone"
            />

            <input
              type="text"
              name="date"
              id="date"
              className="booking-input"
              placeholder="Date"
            />

            <input
              type="text"
              name="time"
              id="time"
              className="booking-input"
              placeholder="Time"
            />

            <input
              type="text"
              name="persons"
              id="persons"
              className="booking-input"
              placeholder="No of persons"
            />
          </form>
          <div className="flex md:justify-start justify-center">
            <SecondaryButton
              title={"Book a table"}
              link={"/"}
              color={"primary font-josefin"}
            />
          </div>
        </div>
        <div>
          <Image
            src={reservation2}
            alt={"reservation2"}
            className="md:h-[30rem] h-80 object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default ReservationBooking;
