import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const data =
  [
    {
      id: 1,
      name: "product 1",
      image: "./assets/dresses/best-seller/best-seller.png",
      price: 500,
      discount: 20,
      sold: 30,

    },
    {
      id: 2,
      name: "product 2",
      image: "./assets/dresses/best-seller/best-seller2.png",
      price: 600,
      discount: 20,
      sold: 50,

    },
    {
      id: 3,
      name: "product 3",
      image: "./assets/dresses/best-seller/best-seller3.png",
      price: 300,
      discount: 20,
      sold: 10,

    },
    {
      id: 4,
      name: "product 4",
      image: "./assets/dresses/best-seller/best-seller4.png",
      price: 200,
      discount: 40,
      sold: 20,

    },
    {
      id: 5,
      name: "product 5",
      image: "./assets/dresses/best-seller/best-seller5.png",
      price: 500,
      discount: 30,
      sold: 10,

    },
    {
      id: 6,
      name: "product 6",
      image: "./assets/dresses/best-seller/best-seller2.png",
      price: 500,
      discount: 20,
      sold: 30,

    },
    {
      id: 7,
      name: "product 7",
      image: "./assets/dresses/best-seller/best-seller3.png",
      price: 500,
      discount: 10,
      sold: 70,

    },
    {
      id: 8,
      name: "product 8",
      image: "./assets/dresses/best-seller/best-seller4.png",
      price: 500,
      discount: 20,
      sold: 30,

    },
    {
      id: 9,
      name: "product 9",
      image: "./assets/dresses/best-seller/best-seller5.png",
      price: 100,
      discount: 40,
      sold: 10,

    },
  ]

const BestSellerMen = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(data)
  }, [])

  return (
    <section>
      <div className="container-fluid pt-4">
        <h2 id="main-popular-h3">BESTSELLER FOR MEN</h2>
        <div className="row mt-2">
          <div className="col-xs-12">
            {/* <div id="main-bestseller" className="swiper bestSellerSlider"> */}
            {/* <div className="swiper-wrapper"> */}
            <Swiper
              autoplay={
                {
                  delay: 5000,
                  disableOnInteraction: false,
                }
              }
              breakpoints={{
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

              {
                products?.map(p => {
                  return (
                    <>
                      <SwiperSlide>
                        <a href="" className="position-relative">
                          <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                            <img src={p.image} alt="" />
                            <div className="d-flex align-items-center pt-1">
                              <div className="price me-2"><span>₹</span>{p.price}</div>
                              <div className="vC5xLRnvYc text-decoration-line-through">
                                <span>₹{p.price*p.discount/100}</span> 
                              </div>
                            </div>
                          </div>
                        </a>
                      </SwiperSlide>
                    </>
                  )
                }) 
              }


              {/* <SwiperSlide>
                <a href="" className="position-relative">
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
                <a href="" className="position-relative">
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
                <a href="" className="position-relative">
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
                <a href="" className="position-relative">
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
                <a href="" className="position-relative">
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
                <a href="" className="position-relative">
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
                <a href="" className="position-relative">
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
                <a href="" className="position-relative">
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
              </SwiperSlide> */}

            </Swiper>

            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSellerMen;