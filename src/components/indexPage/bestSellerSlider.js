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
                      breakpoints= {
                        {200: {
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
                      }
                      }
                      loop={true}
                      loopFillGroupWithBlank={true}
                      pagination={{
                        clickable: true,
                      }}
                      
                      className="my-offer"
                    >
                        <SwiperSlide>
                          <a href='#a'><img src="./assets/dresses/others/t-shirt.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide>
                          <a href='#a'><img src="./assets/dresses/others/benchali.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide>
                          <a href='#a'><img src="./assets/dresses/others/t-shirt2.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide>
                          <a href='#a'><img src="./assets/dresses/others/t-shirt.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide>
                          <a href='#a'><img src="./assets/dresses/others/benchali.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide>
                          <a href='#a'><img src="./assets/dresses/others/t-shirt2.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide>
                          <a href='#a'><img src="./assets/dresses/others/t-shirt.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide>
                          <a href='#a'><img src="./assets/dresses/others/benchali.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide>
                          <a href='#a'><img src="./assets/dresses/others/t-shirt2.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide>
                          <a href='#a'><img src="./assets/dresses/others/t-shirt.png" alt="" /></a></SwiperSlide>
                        <SwiperSlide>
                          <a href='#a'><img src="./assets/dresses/others/benchali.png" alt="" /></a></SwiperSlide>
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