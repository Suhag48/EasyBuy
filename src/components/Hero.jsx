import { Link } from "react-router-dom";

import slideOne from "../images/img1.jpg"
import slideTwo from "../images/img3.jpg"
import slideThree from "../images/img5.jpg"
import slideFour from "../images/img6.jpg"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "swiper/css/autoplay"

const Hero = () => {
  return (
    <div className="flex py-16 md:py-24 md:container md:mx-auto px-8">
      {/* sidebar */}
      <div className="hidden md:flex flex-col w-full md:w-3/4 lg:w-1/2 md:gap-4 lg:gap-6 border-r-2">
        <Link>Mens Fashion</Link>
        <Link>Mens Fashion</Link>
        <Link>Mens Fashion</Link>
        <Link>Mens Fashion</Link>
        <Link>Mens Fashion</Link>
        <Link>Mens Fashion</Link>
      </div>
      {/* slide */}
      <Swiper className="flex justify-center md:ml-8 lg:ml-10"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
    
      autoplay={{delay: 3000}}
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={slideOne} alt="" className="w-full h-full" />
      </SwiperSlide>
      <SwiperSlide><img src={slideTwo} alt="" className="w-full h-full"/></SwiperSlide>
      <SwiperSlide><img src={slideThree} alt="" className="w-full h-full" /></SwiperSlide>
      <SwiperSlide><img src={slideFour} alt="" className="w-full h-full" /></SwiperSlide>
    </Swiper>
     
     
    </div>
  );
};

export default Hero;
