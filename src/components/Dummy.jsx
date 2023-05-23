import { useNextSanityImage } from 'your-sanity-image-library'; // Replace 'your-sanity-image-library' with the actual library you're using

const Testimonials = ({ testimonialData }) => {
  return (
    <section className="">
      {/* ... */}
      <div className="">
        <Swiper>
          {testimonialData.map((item) => (
            <TestimonialSlide key={item.name} item={item} />
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const TestimonialSlide = ({ item }) => {
  const imageSrc = useNextSanityImage(client, item.image);

  return (
    <SwiperSlide>
      <div>
        <div>
          <Image src={imageSrc} className="" alt={item.name} />
          <Image src={testimonialQuote} className="" alt="quotation mark" />
        </div>
        <div>
          <Heading4 title={item.name} />
          <p className=''>{item.city}</p>
        </div>
      </div>
      <div>
        <p className="">{item.testimonial}</p>
      </div>
    </SwiperSlide>
  );
};

export default Testimonials;
