import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReviewCards from './ClientReviewCards';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const ReviewSlider = () => {
  return (
    <Carousel 
    responsive={responsive}
    additionalTransfrom={0} 
    arrows={true} 
    autoPlay={true} 
    autoPlaySpeed={5000} 
    centerMode={false} 
    infinite 
    itemClass="items"
    >
      <ClientReviewCards image="/image/user1.jpg" user="Junaid" role="Web Developer"  />
      <ClientReviewCards image="/image/user2.jpg" user="Andrian" role="Express js Developer"  />
      <ClientReviewCards image="/image/user3.jpg" user="Fahim" role="PHP Developer"  />
      <ClientReviewCards image="/image/user4.jpg" user="Sowrob" role="Full-Stack Developer"  />
      <ClientReviewCards image="/image/user5.jpg" user="Nadim" role="MERN Developer"  />
      <ClientReviewCards image="/image/user1.jpg" user="Shadin" role="Laravel Developer"  />
      <ClientReviewCards image="/image/user7.jpg" user="Plabon" role="Vue js Developer"  />
      <ClientReviewCards image="/image/user8.jpg" user="Khayrul" role="React js Developer"  />
      <ClientReviewCards image="/image/user11.jpg" user="Vubon" role="Node js Developer"  />
    </Carousel>
    

    
  )
}

export default ReviewSlider;