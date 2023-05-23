import Image from 'next/image'
import React from 'react'
import { homeSubHero } from '../../public/images/homepage_images'

const SubHero = () => {
  return (
    <section className='md:h-96 h-44 overflow-hidden'>
      <Image src={homeSubHero} className='w-full object-cover object-center' alt='Sub Hero Image' />
    </section>
  )
}

export default SubHero