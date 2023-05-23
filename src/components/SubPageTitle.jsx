import React from 'react'

const SubPageTitle = ({ title, color }) => {
  return (
    <div className={`font-josefin text-${color} uppercase text-sm py-1 font-light`}>
      <span className="border-y border-primary py-0.5 tracking-widest">
        {title}
      </span>
    </div>
  )
}

export default SubPageTitle
