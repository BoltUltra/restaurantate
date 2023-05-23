import React from 'react'
import Image from "next/image";
import { client } from "../../lib/client";
import { useNextSanityImage } from "next-sanity-image";
import { Heading3, Heading4, SubPageTitle } from '.'

const HomeBlog = ({ blogData }) => {
  return (
    <section className='md:px-40 px-5 md:py-20 py-10'>
      <div className='text-center space-y-3'>
        <SubPageTitle title='Blog' color={'background'} />
        <Heading3 title={'Be First Who Read News'} />
        <p className='font-josefin text-sm'>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content making.</p>
      </div>
      <div className="grid md:grid-cols-2 md:gap-10 gap-5 mt-5">
        {blogData.slice(0, 2).map((item) =>
        (
          <BlogPosts item={item} />
        )

        )}
      </div>
    </section>
  )
}

const BlogPosts = ({ item }) => {
  const imageSrc = useNextSanityImage(client, item.image)
  return (
    <div className='border' key={item.title}>
      <Image
        src={imageSrc}
        className="w-full h-72 object-cover" alt={item.title}
      />
      <div className='p-5 space-y-3'>
        <div className="flex space-x-3">
          <SubPageTitle title={item.tag} color={'background'} />
          <SubPageTitle title={item.date} color={'background'} />
        </div>
        <Heading4 title={item.title} />
        <p className='font-josefin'>{item.content}</p>
      </div>
    </div>
  )
}

export default HomeBlog