import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    name: "image1",
    url: "./assets/dresses/afterNavbar/shop.png"
  },
  {
    id: 2,
    name: "image2",
    url: "./assets/dresses/afterNavbar/shop2.png"
  },
  {
    id: 3,
    name: "image3",
    url: "./assets/dresses/afterNavbar/shop3.png"
  },
  {
    id: 4,
    name: "4",
    url: "./assets/dresses/afterNavbar/shop4.png"
  },
  {
    id: 5,
    name: "5",
    url: "./assets/dresses/afterNavbar/shop5.png"
  },
  {
    id: 6,
    name: "image6",
    url: "./assets/dresses/afterNavbar/shop6.png"
  },
  {
    id: 7,
    name: "image7",
    url: "./assets/dresses/afterNavbar/shop7.png"
  },
  {
    id: 8,
    name: "image8",
    url: "./assets/dresses/afterNavbar/shop8.png"
  },
  {
    id: 9,
    name: "image9",
    url: "./assets/dresses/afterNavbar/shop9.png"
  },
]

const Section1 = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(data)
  }, [])

  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-xs-12">
            <Swiper
              breakpoints={
                {
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
                    slidesPerView: 9,
                  },
                }
              }
              loop={true}
              pagination={{
                clickable: true,
              }}
              className="offerSwiper"
            >
              {
                products?.map(product => {
                  return (
                    <>
                      <SwiperSlide>
                        <Link to="product">
                          <img src={product.url} alt="" /> 
                        </Link>
                      </SwiperSlide>

                    </> 
                  )
                })
              }



            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1;