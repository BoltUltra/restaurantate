import { client } from "../../lib/client";
import {
  Testimonials,
  Menu,
  TheStory,
  HomeContact,
  Banner,
  SubHero,
  Offer,
  Popular,
  HomeServices,
  HomeBlog,
  Reservation,
} from "@component/components";

export default function Home({
  bannerData,
  startersData,
  mainDishData,
  dessertData,
  testimonialData,
  specialOfferData,
  popularData,
  blogData,
}) {
  return (
    <>
      <Banner bannerData={bannerData} />
      <HomeContact />
      <TheStory />
      <Menu
        startersData={startersData}
        mainDishData={mainDishData}
        dessertData={dessertData}
      />
      <Testimonials testimonialData={testimonialData} />
      <SubHero />
      <Offer specialOfferData={specialOfferData} />
      <Popular popularData={popularData} />
      <HomeServices />
      <HomeBlog blogData={blogData} />
      <Reservation />
    </>
  );
}

export const getServerSideProps = async () => {
  const bannerData = await client.fetch(`*[_type == "banner"]`);
  const startersData = await client.fetch(`*[_type == "starters"]`);
  const mainDishData = await client.fetch(`*[_type == "mainDish"]`);
  const dessertData = await client.fetch(`*[_type == "dessert"]`);
  const testimonialData = await client.fetch(`*[_type == "testimonials"]`);
  const specialOfferData = await client.fetch(`*[_type == "specialOffer"]`);
  const popularData = await client.fetch(`*[_type == "popular"]`);
  const blogData = await client.fetch(`*[_type == "blogPosts"]`);

  return {
    props: {
      bannerData,
      startersData,
      mainDishData,
      dessertData,
      testimonialData,
      specialOfferData,
      popularData,
      blogData,
    },
  };
};
