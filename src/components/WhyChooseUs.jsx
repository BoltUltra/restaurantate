import React from "react";
import { Heading3, SubPageTitle } from "@component/components/index";
import Image from "next/image";
import { reservation1 } from "../../public/images/reservation_images";
import { IoMdPizza } from "react-icons/io";
import { BsTruck } from "react-icons/bs";
import { RxCountdownTimer } from "react-icons/rx";
import { AiOutlineCheckCircle } from "react-icons/ai";

const WhyChooseUs = () => {
  return (
    <section className="section-spacing">
      <div className="grid md:grid-cols-2 md:gap-10 gap-5 items-center">
        <div className="md:order-first order-last">
          <Image
            src={reservation1}
            alt={"reservation1"}
            className="md:h-[30rem] h-80 object-cover object-bottom"
          />
        </div>
        <div className="space-y-5">
          <div className="space-y-3 md:text-left text-center">
            <SubPageTitle title={"why choose us"} />
            <Heading3 title={"Why We Are The Best"} />
            <p className="font-josefin text-sm">
              Bring the table winwin survival strateges ensure proactive the
              domination the end of the day going forward new normal that has
              evolved froms generation on the runway heading towards streamlined
              cloud solution generated content in real times will have multiple
              touchpoints.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 font-josefin">
            <div className="flex items-center md:justify-start justify-center border shadow p-3 space-x-3">
              <IoMdPizza className="text-primary text-3xl" />
              <p>Fresh Food</p>
            </div>
            <div className="flex items-center md:justify-start justify-center border shadow p-3 space-x-3">
              <BsTruck className="text-primary text-3xl" />
              <p>Fast Delivery</p>
            </div>
            <div className="flex items-center md:justify-start justify-center border shadow p-3 space-x-3">
              <AiOutlineCheckCircle className="text-primary text-3xl" />
              <p>Quality Maintain</p>
            </div>
            <div className="flex items-center md:justify-start justify-center border shadow p-3 space-x-3">
              <RxCountdownTimer className="text-primary text-3xl" />
              <p>24/7 Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
