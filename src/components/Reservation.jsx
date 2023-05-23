import React from 'react'
import { Heading3, SecondaryButton, SubPageTitle } from '.'

const Reservation = () => {
  return (
    <section className='reservation h-screen flex items-center justify-center text-white'>
      <div className='bg-[#292E36F2] w-full md:mx-64 mx-5 md:p-20 p-5 text-center'>
        <SubPageTitle title={'reservation'} color={'white'} />
        <Heading3 title={'Book your table now'} />
        <form className="font-josefin mt-10 space-y-5">
          <div className="grid md:grid-cols-2 md:gap-10 gap-5">
            <input type="text" name="name" id="name" placeholder='Name' className='border border-[#858585] bg-transparent outline-none p-3' />
            <input type="email" name="email" id="email" placeholder='Email' className='border border-[#858585] bg-transparent outline-none p-3' />
          </div>
          <div className="grid md:grid-cols-3 md:gap-10 gap-5">
            <input type="text" name="name" id="name" placeholder='Number of Persons' className='border border-[#858585] bg-transparent outline-none p-3' />
            <input type="text" name="time" id="time" placeholder='Time' className='border border-[#858585] bg-transparent outline-none p-3 w-full' />
            <input type="text" name="date" id="date" placeholder='Date' className='border border-[#858585] bg-transparent outline-none p-3 w-full' />
          </div>
          <SecondaryButton title={'Book a Table'} link={'/'} color={'background bg-white border-none'} />
        </form>
      </div>
    </section>
  )
}

export default Reservation