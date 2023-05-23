import React from 'react'
import { Heading3, SubPageTitle } from '.'
import { BsCalendar2Date } from 'react-icons/bs'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { RiEBike2Fill } from 'react-icons/ri'

const HomeServices = () => {
  return (
    <section className='md:px-40 px-5 md:py-20 py-10 bg-background text-white font-garamond text-center'>
      <div className="grid md:grid-cols-5 md:gap-10 gap-5 items-center">
        <div className="md:col-span-2 space-y-3 md:text-left">
          <SubPageTitle title={'what we offer'} color={'white'} />
          <Heading3 title={'Our Great Services'} />
          <p className="font-josefin text-sm font-light">Lorem Ipsum is that it has a more-or-less normal distribution content making it look like readable English.</p>
        </div>

        <div>
          <div className='bg-[#323841] p-3'>
            <div className='bg-background py-5'>
              <span className='text-primary text-3xl flex justify-center'><BsCalendar2Date /></span>
              <p>Opened 24/7</p>
            </div>
          </div>
        </div>
        <div>
          <div className='bg-[#323841] p-3'>
            <div className='bg-background py-5'>
              <span className='text-primary text-3xl flex justify-center'><GiForkKnifeSpoon /></span>
              <p>Special Menu</p>
            </div>
          </div>
        </div>
        <div>
          <div className='bg-[#323841] p-3'>
            <div className='bg-background py-5'>
              <span className='text-primary text-3xl flex justify-center'><RiEBike2Fill /></span>
              <p>Home Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeServices