import Banner from "@component/components/Banner";
import PrimaryButton from "@component/components/PrimaryButton";
import { client } from "../../lib/client";

export default function Home({bannerData}) {
  return (
    <>
    
      <Banner bannerData={bannerData}/>
    </>
  );
}

export const getServerSideProps = async () => {
  const bannerData = await client.fetch(`*[_type == "banner"]`)

  return {
    props:{bannerData}
  }
}
