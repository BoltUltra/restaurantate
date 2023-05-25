import PageTitle from "@component/components/PageTitle";
import { client } from "../../lib/client";
import {
  MenuDessert,
  MenuMain,
  MenuStarter,
  MenuSubHero,
  MenuSubHero2,
  Reservation,
} from "@component/components";
import React from "react";

export default function About({ startersData, mainDishData, dessertData }) {
  return (
    <>
      <PageTitle title={"Our Menu"} />
      <MenuStarter startersData={startersData} />
      <MenuSubHero />
      <MenuMain mainDishData={mainDishData} />
      <MenuSubHero2 />
      <MenuDessert dessertData={dessertData} />
      <Reservation />
    </>
  );
}

export const getServerSideProps = async () => {
  const startersData = await client.fetch(`*[_type == "starters"]`);
  const mainDishData = await client.fetch(`*[_type == "mainDish"]`);
  const dessertData = await client.fetch(`*[_type == "dessert"]`);

  return {
    props: {
      startersData,
      mainDishData,
      dessertData,
    },
  };
};
