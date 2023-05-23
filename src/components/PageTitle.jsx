import React from 'react'

const PageTitle = ({ title }) => {
  return (
    <div className="bg-background text-center md:py-20 py-10 font-garamond text-[#dfdfdf] font-bold md:text-5xl text-3xl">
      <span className='border-y border-primary'>{title}</span>
    </div>
  )
}

export default PageTitle