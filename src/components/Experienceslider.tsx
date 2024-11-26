"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";

type Props = {};

const Experienceslider = (props: Props) => {
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
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mySwiper2 overflow-lg-hidden"
    >
      <SwiperSlide>
        <Image
          src={"/assets/images/slider/5.png"}
          alt="slider"
          width={300}
          height={300}
        />
        <p className="heading-sm">Resturants</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/images/slider/6.png"}
          alt="slider"
          width={300}
          height={300}
        />
        <p className="heading-sm">Experiences</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/images/slider/7.png"}
          alt="slider"
          width={300}
          height={300}
        />
        <p className="heading-sm">Events</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/images/slider/5.png"}
          alt="slider"
          width={300}
          height={300}
        />
        <p className="heading-sm">Resturants</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/images/slider/6.png"}
          alt="slider"
          width={300}
          height={300}
        />
        <p className="heading-sm">Experiences</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/images/slider/7.png"}
          alt="slider"
          width={300}
          height={300}
        />
        <p className="heading-sm">Events</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Experienceslider;
