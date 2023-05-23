import React from 'react'
import Image from "next/image";
import { client } from "../../lib/client";
import { useNextSanityImage } from "next-sanity-image";
import { Heading3, Heading4, SecondaryButton, SubPageTitle } from '.';


const Popular = ({ popularData }) => {
  return (
    <section className='md:px-40 px-5 md:py-20 py-10'>
      <div className='text-center space-y-3'>
        <SubPageTitle title={'menu'} color={'background'} />
        <Heading3 title={'Popular Dishes'} />
        <p className='font-josefin md:text-base text-sm md:px-64'>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.</p>
      </div>
      <div className='grid md:grid-cols-4 md:gap-10 gap-5 mt-5'>
        {popularData.map((item) => (
          <div className='space-y-3 border'>
            <Image
              src={useNextSanityImage(client, item.image)}
              className="w-full h-64 object-cover" alt={item.dishName}
            />
            <div className='p-3 space-y-3'>
              <Heading4 title={item.dishName} />
              <p className='font-josefin'>{item.dishDetail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center mt-5'>
        <SecondaryButton title={'See all dishes'} color={'primary font-josefin text-center'} link={'/'} />
      </div>
    </section>
  )
}

export default Popular