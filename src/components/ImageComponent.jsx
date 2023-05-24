import React from 'react'
import Image from "next/image";
import { client } from "../../lib/client";
import { useNextSanityImage } from "next-sanity-image";

const ImageComponent = ({ item, className, alt}) => {
  const imageSrc = useNextSanityImage(client, item.image)
  return (
    <Image
      src={imageSrc}
      className={className}
      alt={alt}
    />
  )
}

export default ImageComponent