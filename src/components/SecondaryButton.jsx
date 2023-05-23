import React from 'react'
import Link from "next/link";

const SecondaryButton = ({ title, link, color }) => {
  return (
    <button className={`text-${color} border border-primary px-10 py-2 font-bold`}>
      <Link href={link}>{title}</Link>
    </button>
  )
}

export default SecondaryButton
