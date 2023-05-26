import React from "react";
import { client } from "../../../lib/client";
import {
  BestChefs,
  ChefsTeam,
  PageTitle,
  Reservation,
  Testimonials,
} from "@component/components";

export default function About({ chefsData, testimonialData }) {
  return (
    <>
      <PageTitle title={"Our Chefs"} />
      <ChefsTeam chefsData={chefsData} />
      <Testimonials testimonialData={testimonialData} />
      <BestChefs />
      <Reservation />
    </>
  );
}

export const getServerSideProps = async () => {
  const chefsData = await client.fetch(`*[_type == "chefs"]`);
  const testimonialData = await client.fetch(`*[_type == "testimonials"]`);

  return {
    props: { chefsData, testimonialData },
  };
};
