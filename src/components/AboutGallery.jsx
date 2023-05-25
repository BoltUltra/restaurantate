import React from 'react'
import { ImageComponent, SubPageTitle, Heading4 } from './'

const AboutGallery = ({ galleryData }) => {
  return (
    <section className='md:px-40 px-5 md:py-20 py-10 space-y-5'>
      <div className='text-center space-y-2'>

        <SubPageTitle title={'gallery'} />
        <Heading4 title={'What We Make'} />
      </div>
      <div className='grid grid-cols-3'>
        {galleryData.map((item) => (
          <div className='imaage' key={item.caption}>
            <ImageComponent item={item} className='md:h-72 h-32 w-full object-cover' key={item.caption} alt={item.caption} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutGallery