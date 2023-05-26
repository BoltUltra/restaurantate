import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchChefs } from "@component/lib/fetchChefs";
import {
  Heading3,
  Heading4,
  ImageComponent,
  PageTitle,
  Reservation,
  SubPageTitle,
} from "@component/components/index";
import {
  BsBriefcase,
  BsFacebook,
  BsPinterest,
  BsTelephone,
} from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoLocation } from "react-icons/go";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const ChefDetail = () => {
  const router = useRouter();
  const [chef, setChef] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const chefs = await fetchChefs();
      const chefId = router.query.id;
      const selectedChef = chefs.find((chef) => chef._id === chefId);

      if (selectedChef) {
        setChef(selectedChef);
      } else {
        setChef(null);
      }
    }

    fetchData();
  }, [router.query.id]);

  if (!chef) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <PageTitle title={chef.name} />
        <section className="md:px-40 px-5 md:py-20 py-10">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <ImageComponent
                item={chef}
                className={
                  "bg-[#A0AEAF] h-96 w-full object-cover object-top pt-5"
                }
                alt={chef.slug.current}
              />
            </div>
            <div className="md:col-span-3 space-y-3">
              <Heading4 title={chef.name} />
              <p className="font-josefin text-primary">{chef.title}</p>
              <p className="font-josefin text-sm text-justify">
                {chef.description}
              </p>
              <div className="grid md:grid-cols-2 md:gap-7 gap-3 pt-5">
                <div className="flex items-center space-x-3">
                  <div className="text-white bg-black text-2xl p-2 rounded-full">
                    <BsBriefcase />
                  </div>
                  <div className="">
                    <h4 className="font-garamond text-lg font-bold">
                      Experience
                    </h4>
                    <p className="font-josefin">
                      {chef.experience} years of experience
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-white bg-black text-2xl p-2 rounded-full">
                    <RxEnvelopeClosed />
                  </div>
                  <div className="">
                    <h4 className="font-garamond text-lg font-bold">Mail</h4>
                    <p className="font-josefin">{chef.mail}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-white bg-black text-2xl p-2 rounded-full">
                    <BsTelephone />
                  </div>
                  <div className="">
                    <h4 className="font-garamond text-lg font-bold">
                      Contact Us
                    </h4>
                    <p className="font-josefin">{chef.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-white bg-black text-2xl p-2 rounded-full">
                    <GoLocation />
                  </div>
                  <div className="">
                    <h4 className="font-garamond text-lg font-bold">
                      Locate Us
                    </h4>
                    <p className="font-josefin">{chef.address}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-5 pt-5">
                <AiOutlineInstagram />
                <BsFacebook />
                <AiOutlineTwitter />
                <BsPinterest />
              </div>
            </div>
          </div>
        </section>
        <section className="md:px-40 px-5 md:py-20 py-10 md:mb-20 mb-10  bg-background text-white">
          <div className="text-center space-y-3">
            <SubPageTitle title={"Promo"} />
            <Heading3 title={"My Promo Video"} />
          </div>
          <div className="mt-10">
            <iframe
              className="w-full h-96"
              src="https://www.youtube-nocookie.com/embed/6wuq327NLpc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <Reservation />
      </>
    );
  }
};

export default ChefDetail;
