'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import './swiperVideo.scss';

export default function SwiperVideo({ data }: { data: any[] }) {
  useEffect(() => {}, []);

  return (
    <div className="SwiperVideo">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        navigation={true}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            {item ? <video className="video" src={item} autoPlay></video> : null}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
