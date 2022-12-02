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
          {/* <div className="swiper focusSlider"> */}
            {/* <div className="swiper-wrapper main-slider"> */}
            <Swiper
              autoplay= {
                {
                  delay: 2500,
                  disableOnInteraction: false,
                }
              }
              breakpoints= {{
                200: {
                  slidesPerView: 3,
                },
                500: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              className="my-offer"
            >
                <SwiperSlide>
                  <a href="#"><img src="./assets/dresses/offer-zone/offer3.png" alt="" height="900" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="./assets/dresses/offer-zone/offer4.png" alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="./assets/dresses/offer-zone/offer5.png" alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="./assets/dresses/offer-zone/offer3.png" alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="./assets/dresses/offer-zone/offer4.png" alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="./assets/dresses/offer-zone/offer5.png" alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="./assets/dresses/offer-zone/offer3.png" alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="./assets/dresses/offer-zone/offer4.png" alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="./assets/dresses/offer-zone/offer5.png" alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="./assets/dresses/offer-zone/offer3.png" alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#"><img src="./assets/dresses/offer-zone/offer4.png" alt="" /></a>
                </SwiperSlide>
            </Swiper>
       
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default OfferSlider;