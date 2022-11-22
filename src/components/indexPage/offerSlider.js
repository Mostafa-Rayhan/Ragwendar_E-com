import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OfferSlider = () => {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12">
        <div className="">
          <div className="swiper focusSlider">
            <div className="swiper-wrapper main-slider">
            <Swiper
              slidesPerView={3}
              // spaceBetween={30}
              autoplay= {
                {delay: 2500,
                disableOnInteraction: false,
              }
              }
              breakpoints= {
                {200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                500: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }
              }
              loop={true}
              loopFillGroupWithBlank={true}
              
              pagination={{
                clickable: true,
              }}
              
              className="mySwiper"
            >
              <div className="swiper-wrapper mySwiper main-slider">
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
              </div>
            </Swiper>
       
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default OfferSlider;