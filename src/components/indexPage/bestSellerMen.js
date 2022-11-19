import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BestSellerMen = () => {
  return (
    <section>
    <div className="container-fluid pt-4">
      <h2 id="main-popular-h3">BESTSELLER FOR MEN</h2>
      <div className="row mt-2">
        <div className="col-xs-12">
          <div id="main-bestseller" className="swiper bestSellerSlider">
            <div className="swiper-wrapper">
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              
              className="mySwiper"
            >

              <SwiperSlide>
              <a href="" className="swiper-slide position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="./assets/dresses/best-seller/best-seller.png" alt="" />
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="" className="swiper-slide position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="./assets/dresses/best-seller/best-seller2.png" alt="" />
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="" className="swiper-slide position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="./assets/dresses/best-seller/best-seller3.png" alt="" />
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="" className="swiper-slide position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="./assets/dresses/best-seller/best-seller4.png" alt="" />
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="" className="swiper-slide position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="./assets/dresses/best-seller/best-seller5.png" alt="" />
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="" className="swiper-slide position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="./assets/dresses/best-seller/best-seller.png" alt="" />
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="" className="swiper-slide position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="./assets/dresses/best-seller/best-seller2.png" alt="" />
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="" className="swiper-slide position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="./assets/dresses/best-seller/best-seller3.png" alt="" />
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="" className="swiper-slide position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="./assets/dresses/best-seller/best-seller4.png" alt="" />
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                </div>
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

export default BestSellerMen;