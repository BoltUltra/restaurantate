import React from 'react'
import { Heading3, Heading4, SubPageTitle } from '.'
import Image from 'next/image'
import { homeSignature } from '../../public/images/homepage_images'
import { aboutHero, manager, pattern } from '../../public/images/about_images'
import { AiFillStar } from 'react-icons/ai'

const AboutHero = () => {
  return (
    <section className='md:px-40 px-5 md:py-44 py-10 pb-16'>
      <div className="grid md:grid-cols-2 md:gap-0 gap-10 items-center">
        <div className='md:text-left text-center space-y-5'>
          <div className='space-y-3'>
            <SubPageTitle title={'About us'} />
            <Heading3 title={'Quality and Tradition'} />
            <p className='font-josefin md:text-base text-sm'>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content gfshere making look like readable English. Many desktop publishing packages.</p>
          </div>
          <div className='text-left font-josefin space-y-2'>
            <p className='uppercase md:text-base text-sm'>Josefine</p>
            <Image src={homeSignature} alt="signature" className="md:w-32 w-20" />
          </div>
        </div>
        <div className='relative'>
          <Image src={aboutHero} className='h-96 object-cover md:w-80 w-72 rounded-tr-[10rem] mx-auto' alt='hero-image' />
          <Image src={pattern} className='absolute top-0 right-0 -z-10 md:w-56 w-44 opacity-30' alt='pattern' />
          <div className='absolute bg-white shadow p-5 md:-bottom-32 -bottom-10 space-y-5 md:mr-64 mr-10'>
            <div className='flex items-center space-x-5'>
              <Image src={manager} className='w-14 h-14 rounded-full object-cover object-top' alt='Manager Image (Jojo)' />
              <div className='space-y-2'>
                <Heading4 title={'Jojo'} />
                <p className="font-josefin text-sm font-light">CEO and Founder</p>
              </div>

            </div>
            <div className='font-josefin font-light space-y-3'>
              <p>Capitalize on low hanging fruit
                to identify a ballpark</p>
              <p className="flex space-x-1 text-primary">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero