import React from "react";
import {
  Heading3,
  Heading4,
  ImageComponent,
  SubPageTitle,
} from "@component/components/index";

const ChefsTeam = ({ chefsData }) => {
  return (
    <section className="md:px-40 px-5 md:py-20 py-10">
      <div className="text-center space-y-3">
        <SubPageTitle title={"team"} />
        <Heading3 title={"Meet Our Professional Chefs"} />
      </div>
      <div>
        <div className="md:py-5 py-10 grid md:grid-cols-3 gap-10">
          {chefsData.map((item) => (
            <div className="" key={item.name}>
              <ImageComponent
                item={item}
                className="bg-[#A0AEAF] h-64 w-full object-cover object-top px-2 pt-5"
                alt={item.slug.current}
              />
              <div className="text-center">
                <Heading4 title={item.name} />
                <p className="font-josefin text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsTeam;
