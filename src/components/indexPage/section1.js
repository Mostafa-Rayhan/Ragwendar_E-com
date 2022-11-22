import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

// import "./styles.css";

// import required modules
// import { Pagination, Navigation } from "swiper";

const Section1 = () => {
  return (
    <section>
    <div className="container pt-4">
      <div className="row">
        <div className="col-xs-12">
          <div id="main-offers" className="swiper swiperSecTwo">
            <div className="swiper-wrapper">
            <Swiper
              slidesPerView={9}
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
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 9,
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
              <SwiperSlide>
                <Link to="product" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop.png" alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="product" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop2.png" alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="product" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop3.png" alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="product" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop4.png" alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="product" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop5.png" alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="product" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop6.png" alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="product" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop6.png" alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="product" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop6.png" alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="product" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop6.png" alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="product" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop7.png" alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="product" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop8.png" alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="product" className="SwiperSlide">
                  <img src="./assets/dresses/afterNavbar/shop9.png" alt="" />
                </Link>
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