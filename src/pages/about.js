import { AboutHero, Counts, Team, Testimonials, AboutGallery } from "@component/components";
import PageTitle from "@component/components/PageTitle";
import { client } from "../../lib/client";

export default function About({ chefsData, testimonialData, galleryData }) {
  return (
    <>
      <PageTitle title={"About"} />
      <AboutHero />
      <Counts />
      <Team chefsData={chefsData} />
      <Testimonials testimonialData={testimonialData} />
      <AboutGallery galleryData={galleryData}/>
    </>
  );
}

export const getServerSideProps = async () => {
  const chefsData = await client.fetch(`*[_type == "chefs"]`);
  const testimonialData = await client.fetch(`*[_type == "testimonials"]`);
  const galleryData = await client.fetch(`*[_type == "galleryImages"]`);

  return {
    props: {
      chefsData, testimonialData, galleryData
    },
  };
};
