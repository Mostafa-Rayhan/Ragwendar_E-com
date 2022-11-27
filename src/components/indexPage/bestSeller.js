import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BestSeller = () => {
  return (
    <section>
    <div className="container-fluid">
      <div className="d-block d-md-flex justify-content-between align-items-center mb-2">
        <h2 id="main-popular-h2">FLASH SALE</h2>
        <div className="sale-timer">
          <span className="d-none d-md-block">Ends in&nbsp;</span>
          <div className="timer">
            <span>0</span><span>0</span>:<span>0</span><span>0</span>:<span>0</span><span>0</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          {/* <div id="main-bestseller" className="swiper bestSellerSlider"> */}
            {/* <div className="swiper-wrapper"> */}
            <Swiper
              autoplay= {{
                  delay: 2500,
                  disableOnInteraction: false,
              }}
              breakpoints= {{
                200: {
                  slidesPerView: 3,
                },
                500: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >

              <SwiperSlide>
              <a href="#flashSale" className="position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-discount-1637307127-1640757473.jpg"
                    alt="" />
                  <div className="tag-container">
                    <div className="d-none d-md-flex tag-wrapper" style={{ minHeight: "15px" }}>
                      <div className="d-flex align-items-center tag-row p-tag" style={{ background: "#facf19" }}>
                        <span className="plp" style={{ color: "#242022" }}><i className="fa fa-bolt"
                            aria-hidden="true"></i><br />-20%</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                  <div className="bar pt-2">
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" aria-label="Discount rate"
                        style={{ width: "30%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    20% Sold
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="#flashSale" className="position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-collab-store-1637307127.jpg"
                    alt="" />
                  <div className="tag-container">
                    <div className="d-none d-md-flex tag-wrapper" style={{ minHeight: "15px" }}>
                      <div className="d-flex align-items-center tag-row p-tag" style={{ background: "#facf19" }}>
                        <span className="plp" style={{ color: "#242022" }}><i className="fa fa-bolt"
                            aria-hidden="true"></i><br />-20%</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                  <div className="bar pt-2">
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" aria-label="Discount rate"
                        style={{ width: "30%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    20% Sold
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="#flashSale" className="position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-best-seller-1637307127.jpg"
                    alt="" />
                  <div className="tag-container">
                    <div className="d-none d-md-flex tag-wrapper" style={{ minHeight: "15px" }}>
                      <div className="d-flex align-items-center tag-row p-tag" style={{ background: "#facf19" }}>
                        <span className="plp" style={{ color: "#242022" }}><i className="fa fa-bolt"
                            aria-hidden="true"></i><br />-20%</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                  <div className="bar pt-2">
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" aria-label="Discount rate"
                        style={{ width: "30%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    20% Sold
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="#flashSale" className="position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="https://images.bewakoof.com/uploads/grid/app/vote-for-design-1641715844.jpg" alt="" />
                  <div className="tag-container">
                    <div className="d-none d-md-flex tag-wrapper" style={{ minHeight: "15px" }}>
                      <div className="d-flex align-items-center tag-row p-tag" style={{ background: "#facf19" }}>
                        <span className="plp" style={{ color: "#242022" }}><i className="fa fa-bolt"
                            aria-hidden="true"></i><br />-20%</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                  <div className="bar pt-2">
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" aria-label="Discount rate"
                        style={{ width: "30%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    20% Sold
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="#flashSale" className="position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-1637307130.jpg"
                    alt="" />
                  <div className="tag-container">
                    <div className="d-none d-md-flex tag-wrapper" style={{ minHeight: "15px" }}>
                      <div className="d-flex align-items-center tag-row p-tag" style={{ background: "#facf19" }}>
                        <span className="plp" style={{ color: "#242022" }}><i className="fa fa-bolt"
                            aria-hidden="true"></i><br />-20%</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                  <div className="bar pt-2">
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" aria-label="Discount rate"
                        style={{ width: "30%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    20% Sold
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="#flashSale" className="position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="https://images.bewakoof.com/uploads/grid/app/new-tod-thumbnail-cosmos-1--1--1640666014.jpg"
                    alt="" />
                  <div className="tag-container">
                    <div className="d-none d-md-flex tag-wrapper" style={{ minHeight: "15px" }}>
                      <div className="d-flex align-items-center tag-row p-tag" style={{ background: "#facf19" }}>
                        <span className="plp" style={{ color: "#242022" }}><i className="fa fa-bolt"
                            aria-hidden="true"></i><br />-20%</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                  <div className="bar pt-2">
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" aria-label="Discount rate"
                        style={{ width: "30%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    20% Sold
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="#flashSale" className="position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-plus-size-1637307128.jpg"
                    alt="" />
                  <div className="tag-container">
                    <div className="d-none d-md-flex tag-wrapper" style={{ minHeight: "15px" }}>
                      <div className="d-flex align-items-center tag-row p-tag" style={{ background: "#facf19" }}>
                        <span className="plp" style={{ color: "#242022" }}><i className="fa fa-bolt"
                            aria-hidden="true"></i><br />-20%</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                  <div className="bar pt-2">
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" aria-label="Discount rate"
                        style={{ width: "30%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    20% Sold
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="#flashSale" className="position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="https://images.bewakoof.com/uploads/grid/app/last-sizes-left-1639915515.jpg" alt="" />
                  <div className="tag-container">
                    <div className="d-none d-md-flex tag-wrapper" style={{ minHeight: "15px" }}>
                      <div className="d-flex align-items-center tag-row p-tag" style={{ background: "#facf19" }}>
                        <span className="plp" style={{ color: "#242022" }}><i className="fa fa-bolt"
                            aria-hidden="true"></i><br />-20%</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                  <div className="bar pt-2">
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" aria-label="Discount rate"
                        style={{ width: "30%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    20% Sold
                  </div>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="#flashSale" className="position-relative">
                <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                  <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-essentials-1637307130.jpg"
                    alt="" />
                  <div className="tag-container">
                    <div className="d-none d-md-flex tag-wrapper" style={{ minHeight: "15px" }}>
                      <div className="d-flex align-items-center tag-row p-tag" style={{ background: "#facf19" }}>
                        <span className="plp" style={{ color: "#242022" }}><i className="fa fa-bolt"
                            aria-hidden="true"></i><br />-20%</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="price me-2"><span>₹</span>526</div>
                    <div className="vC5xLRnvYc text-decoration-line-through">
                      <span>₹152</span>
                    </div>
                  </div>
                  <div className="bar pt-2">
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" aria-label="Discount rate"
                        style={{ width: "30%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    20% Sold
                  </div>
                </div>
              </a>
              </SwiperSlide>

            </Swiper>
                        
              
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  </section>
  )
}

export default BestSeller;