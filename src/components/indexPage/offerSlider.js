import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OfferSlider = () => {
  return (
    <section>
    <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12">
        <div className="">
          <div className="swiper focusSlider">
            <div className="swiper-wrapper main-slider">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              
              loop={true}
              loopFillGroupWithBlank={true}
              
              pagination={{
                clickable: true,
              }}
              
              className="mySwiper"
            >

              <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/offer-zone/offer3.png" alt="" /></a></SwiperSlide>
              <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/offer-zone/offer4.png" alt="" /></a></SwiperSlide>
              <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/offer-zone/offer5.png" alt="" /></a></SwiperSlide>
              <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/offer-zone/offer3.png" alt="" /></a></SwiperSlide>
              <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/offer-zone/offer4.png" alt="" /></a></SwiperSlide>
              <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/offer-zone/offer5.png" alt="" /></a></SwiperSlide>
              <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/offer-zone/offer3.png" alt="" /></a></SwiperSlide>
              <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/offer-zone/offer4.png" alt="" /></a></SwiperSlide>
              <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/offer-zone/offer5.png" alt="" /></a></SwiperSlide>
              <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/offer-zone/offer3.png" alt="" /></a></SwiperSlide>
              <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/offer-zone/offer4.png" alt="" /></a></SwiperSlide>

            </Swiper>
       
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  )
}

export default OfferSlider;