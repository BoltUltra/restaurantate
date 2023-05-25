import React from 'react'
import { GiBerriesBowl, GiChefToque, GiFruitBowl } from 'react-icons/gi'
import { BsCupStraw } from 'react-icons/bs'
import { Heading4 } from '.'

const Counts = () => {
  return (
    <section className='md:px-40 px-5 md:py-20 py-10 counts'>
      <div className="grid md:grid-cols-4 md:gap-5 gap-5 text-white text-center md:divide-x">
        <div className='space-y-2 md:px-5 px-10'>
          <GiBerriesBowl className='text-primary text-5xl mx-auto' />
          <Heading4 title={'Fresh Product'} />
          <p className='font-josefin text-sm'>Professional consider everyone
            probls small niche friendly.</p>
        </div>
        <div className='space-y-2 md:px-5 px-10'>
          <GiChefToque className='text-primary text-5xl mx-auto' />
          <Heading4 title={'Skilled Chefs'} />
          <p className='font-josefin text-sm'>Professional consider everyone
            probls small niche friendly.</p>
        </div>
        <div className='space-y-2 md:px-5 px-10'>
          <BsCupStraw className='text-primary text-5xl mx-auto' />
          <Heading4 title={'Drinks & Juices'} />
          <p className='font-josefin text-sm'>Professional consider everyone
            probls small niche friendly.</p>
        </div>
        <div className='space-y-2 md:px-5 px-10'>
          <GiFruitBowl className='text-primary text-5xl mx-auto' />
          <Heading4 title={'Vegan Cuisine'} />
          <p className='font-josefin text-sm'>Professional consider everyone
            probls small niche friendly.</p>
        </div>
      </div>
    </section>
  )
}

export default Counts