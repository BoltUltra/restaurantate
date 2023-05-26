import React from "react";
import {
  Heading3,
  Heading4,
  SecondaryButton,
  SubPageTitle,
} from "@component/components/index";
import Image from "next/image";
import { bestChef } from "../../public/images/chefs_images";

const BestChefs = () => {
  return (
    <section className="md:px-40 px-5 md:py-20 py-10">
      <div className="grid md:grid-cols-2 md:gap-20 gap-10 items-center">
        <div>
          <div className={"md:text-left text-center space-y-3"}>
            <SubPageTitle title={"best chefs"} />
            <Heading3 title={"Only Skilled Team"} />
            <p className={"font-josefin"}>
              Bring to the table survival strategies to ensured proactive
              domination At the end of the day, going forward, a new normal that
              has evolved from generation X is on the runway heading towards a
              streamlined touch-points for offshoring.
            </p>
          </div>
          <div className="mt-5 space-y-5">
            <div className={"space-y-2"}>
              <Heading4 title={"Experienced"} />
              <div className={"w-full bg-[#C4C4C4] h-1 rounded-full"}>
                <div className="w-[90%] bg-[#292E36] h-1 rounded-full"></div>
              </div>
            </div>
            <div className={"space-y-2"}>
              <Heading4 title={"Professionalism"} />
              <div className={"w-full bg-[#C4C4C4] h-1 rounded-full"}>
                <div className="w-[70%] bg-[#292E36] h-1 rounded-full"></div>
              </div>
            </div>
            <div className={"space-y-2"}>
              <Heading4 title={"Creative"} />
              <div className={"w-full bg-[#C4C4C4] h-1 rounded-full"}>
                <div className="w-[80%] bg-[#292E36] h-1 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center md:justify-start justify-center pt-5">
              <SecondaryButton
                title={"See all dishes"}
                link={"/"}
                color={"primary font-josefin"}
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src={bestChef}
            alt={"Chef Image"}
            className={"md:h-[35rem] w-full object-cover"}
          />
        </div>
      </div>
    </section>
  );
};

export default BestChefs;
