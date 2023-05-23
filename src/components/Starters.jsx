import React from 'react';
import Image from "next/image";
import { client } from "../../lib/client";
import { useNextSanityImage } from "next-sanity-image";
import { offerLine } from '../../public/images/homepage_images';
import Heading4 from './Heading4';


const Starters = ({ item }) => {
  const imageSrc = useNextSanityImage(client, item.image)
  return (
    <div className="flex items-center space-x-2" key={item.dishName}>
      <div>
        <Image
          src={imageSrc}
          className="h-20 w-20 rounded-full object-cover"
          alt={item.dishName}
        />
      </div>
      <div>
        <div>
          <Heading4 title={item.dishName} />
          <div className="flex md:items-center md:space-x-3">
            <p className="font-josefin md:text-base text-sm w-full text-[#555555]">
              {item.dishContent}
            </p>
            <div className="md:block hidden">
              <Image src={offerLine} alt="line" />
            </div>
            <p className="font-bold md:text-3xl text-2xl font-garamond">
              {item.dishPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Starters