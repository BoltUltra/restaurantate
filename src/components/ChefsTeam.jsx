import React, { useEffect, useState } from "react";
import {
  Heading3,
  Heading4,
  ImageComponent,
  SubPageTitle,
} from "@component/components/index";
import Link from "next/link";
import { fetchChefs } from "@component/lib/fetchChefs";

const ChefsTeam = ({ chefsData }) => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedChefs = await fetchChefs();
      setChefs(fetchedChefs);
    }

    fetchData();
  }, []);
  return (
    <section className="md:px-40 px-5 md:py-20 py-10">
      <div className="text-center space-y-3">
        <SubPageTitle title={"team"} />
        <Heading3 title={"Meet Our Professional Chefs"} />
      </div>
      <div>
        <div className="md:py-5 py-10 grid md:grid-cols-3 gap-10">
          {chefs.map((item) => (
            <div className="" key={item._id}>
              <Link href={`/chefs/${item._id}`}>
                <ImageComponent
                  item={item}
                  className="bg-[#A0AEAF] h-64 w-full object-cover object-top px-2 pt-5"
                  alt={item.slug.current}
                />
                <div className="text-center mt-3">
                  <Heading4 title={item.name} />
                  <p className="font-josefin text-sm">{item.role}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsTeam;

// [
//   {
//     _type: "chefs",
//     _createdAt: "2023-05-24T11:11:14Z",
//     role: "Senior Chef",
//     phone: "800-234-567",
//     name: "Marco De Luca",
//     _id: "3d0aa719-d135-4a82-9952-005883198983",
//     _updatedAt: "2023-05-24T11:12:16Z",
//     _rev: "530ao4VicrLwZOPi6YQoYD",
//     mail: "lucamarco@gmail.com",
//     experience: "7",
//     address: "Riverside 25, San Francisco, California",
//     description:
//       "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divid with additional clickthroughs from Nanotechnology immersion along the information highway will close the loop on focusing solely the bottom line.",
//     slug: {
//       current: "marco-de-luca",
//       _type: "slug",
//     },
//     image: {
//       _type: "image",
//       asset: {
//         _ref: "image-7b297fe13d4319abd9b9d21d36d6454ece356fc9-2691x3997-webp",
//         _type: "reference",
//       },
//     },
//   },
// ];
