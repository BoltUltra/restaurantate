import React from 'react'
import Link from "next/link";

const PrimaryButton = ({ title, link }) => {
  return (
    <button className="text-background bg-primary px-10 py-2 font-bold">
      <Link href={link}>{title}</Link>
    </button>
  )
}

export default PrimaryButton