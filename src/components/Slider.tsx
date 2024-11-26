"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

type Props = {};

const Slider = (props: Props) => {
  return (
    <Swiper
    breakpoints={{
        320: {
          slidesPerView: 1, 
          spaceBetween: 10, 
        },
        768: {
          slidesPerView: 3, 
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3, 
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 4, 
          spaceBetween: 40,
        },
      }}
      spaceBetween={30}
    //   centeredSlides={true}
      loop={true} 

      pagination={{
        clickable: true,
      }}
      className="mySwiper overflow-visible"
    >
      <SwiperSlide>
        <Image src={"/assets/images/slider/1.png"} alt="slider" width={300} height={300}/>
        <p className="heading-sm">
            Little Krazy
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/assets/images/slider/2.png"} alt="slider" width={300} height={300}/>
        <p className="heading-sm">
            Hawanim  Groves City
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/assets/images/slider/3.png"} alt="slider" width={300} height={300}/>
        <p className="heading-sm">
            Picnic Market
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/assets/images/slider/4.png"} alt="slider" width={300} height={300}/>
        <p className="heading-sm">
            Lucaword
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/assets/images/slider/1.png"} alt="slider" width={300} height={300}/>
        <p className="heading-sm">
            Little Krazy
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/assets/images/slider/2.png"} alt="slider" width={300} height={300}/>
        <p className="heading-sm">
            Hawanim  Groves City
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/assets/images/slider/3.png"} alt="slider" width={300} height={300}/>
        <p className="heading-sm">
            Picnic Market
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/assets/images/slider/4.png"} alt="slider" width={300} height={300}/>
        <p className="heading-sm">
            Lucaword
        </p>
      </SwiperSlide>

    </Swiper>
  );
};

export default Slider;
