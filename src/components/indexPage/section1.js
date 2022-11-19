import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
// import { Pagination, Navigation } from "swiper";

const Section1 = () => {
  return (
    <section>
    <div className="container pt-4">
      <div className="row">
        <div className="col-xs-12">
          <div id="main-offers" className="Swiper swiperSecTwo">
            <div className="swiper-wrapper">
            <Swiper
              slidesPerView={9}
              spaceBetween={30}
              
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              
              className="mySwiper"
            >
              <SwiperSlide>
                <a href="product.html" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop.png" alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop2.png" alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="product.html" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop3.png" alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="product.html" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop4.png" alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="product.html" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop5.png" alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="product.html" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop6.png" alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="product.html" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop6.png" alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="product.html" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop6.png" alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="product.html" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop6.png" alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="product.html" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop7.png" alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="product.html" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop8.png" alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="product.html" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop9.png" alt="" />
                </a>
              </SwiperSlide>
               
            </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section1;