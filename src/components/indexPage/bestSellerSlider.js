import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BestSellerSlider = () => {
  return (
    <section>
        <div className="container-fluid pt-4">
            <div className="row">
            <div className="col-xs-12">
                <div className="">
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
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
                      
                      className="focusSlider"
                    >
                      <div className="swiper-wrapper mySwiper main-slider">
                        <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/others/t-shirt.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/others/benchali.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/others/t-shirt2.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/others/t-shirt.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/others/benchali.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/others/t-shirt2.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/others/t-shirt.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/others/benchali.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/others/t-shirt2.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/others/t-shirt.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide><a className="swiper-slide"><img src="./assets/dresses/others/benchali.png" alt="" /></a></SwiperSlide>
                      </div>
                    </Swiper>    
                    {/* <div className="swiper focusSlider">
                    <div className="swiper-wrapper main-slider">  */}
                    {/* </div>
                </div> */}
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default BestSellerSlider;