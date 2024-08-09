import React from 'react'
import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './style.css'

import { Autoplay } from 'swiper/modules';
const RightScroller = () => {
  return (
    <div className='w-[70%] h-full ml-2'>
        <Swiper
       direction={'vertical'}
       slidesPerView={'auto'}
       freeMode={true}
       autoplay={true}
       scrollbar={{ draggable: true }}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       loop={true}
       modules={[Autoplay]}
      >
        <SwiperSlide className='bg-red-950 '>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}
export default RightScroller
