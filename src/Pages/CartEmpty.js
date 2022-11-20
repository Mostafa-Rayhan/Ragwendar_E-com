import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CartEmpty = () => {
  return (
    <>
    <nav className="bg-dark p-2 d-none d-md-block">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="nav-color">
            <a href="" className="text-reset text-decoration-none fst-italic">Free Shipping</a>
            <div className="vr text-white"></div>
            <a href="" className="text-reset text-decoration-none fst-italic">Download App</a>
          </div>
          <div className="nav-color">
            <a href="" className="text-reset text-decoration-none fst-italic">Contact Us</a>
            <div className="vr text-white"></div>
            <a href="" className="text-reset text-decoration-none fst-italic">Help</a>
          </div>
        </div>
      </div>
    </nav>
    <nav className="navbar sticky-top navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler border-0 d-md-none"
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>

        <a href="/" className="navbar-brand brand-style"
          ><img
            src="assets/img/logo.png"
            alt="e-Pharmacy"
            height="30"
            srcset=""
            className="d-inline-block align-text-top logo-navbar"
        /></a>

        <ul className="navbar-nav d-md-none">
          <li className="nav-item">
            <a className="btn" href="#">
              <span className="btn-link"><i className="fa fa-search" style={{ fontSize: "20px" }}></i> </span>
            </a>
            <a className="btn" href="#">
              <span className="position-relative"
                ><i className="fa fa-heart" style={{ fontSize: "20px" }}></i>
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
                  style={{ fontSize: "10px" }}
                  >9</span
                ></span
              >
            </a>
            <a className="btn" href="#">
              <span className="position-relative"
                ><i className="fa fa-shopping-cart" style={{ fontSize: "20px" }}></i>
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
                  style={{ fontSize: "10px" }}
                  >9</span
                ></span
              >
            </a>
          </li>
        </ul>
        {/* <!-- Search Bar --> */}
        <div className="collapse navbar-collapse">
          <div className="ms-auto">
            <div className="input-group">
              <span className="input-group-text dropdown-toggle"
                ><i className="fa fa-map-marker" aria-hidden="true"> Kolkata</i>
              </span>
              <div className="vr"></div>
              <input
                className="form-control"
                type="search"
                placeholder="Search for products..."
                aria-label="Search"
              />
            </div>
          </div>
          <div className="me-0 m-2 vr"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="btn" href="#">
                <span className="position-relative btn-link me-2" style={{ textDecoration: "none" }}
                  ><i className="fa fa-heart" style={{ fontSize: "20px" }}></i
                  ><span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
                    style={{ fontSize: "10px" }}
                    >9</span
                  ></span
                >
              </a>
            </li>
            <li className="nav-item">
              <a className="btn" href="#">
                <span className="position-relative btn-link me-2"
                  ><i className="fa fa-shopping-cart" style={{ fontSize: "20px" }}></i
                  ><span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
                    style={{ fontSize: "10px" }}
                    >9</span
                  ></span
                >
              </a>
            </li>
            <li className="nav-item">
              <a className="btn" href="#">
                <span className="btn-link me-2"
                  ><i className="fa fa-user" style={{ fontSize: "20px" }}></i
                ></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* <!-- Responsve -->

    <!-- The sidebar for Mobile Phones --> */}
    <div
      className="offcanvas offcanvas-start"
      style={{ width: "270px" }}
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">

          Welcome Guest
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body p-0">

        <div className="border-bottom p-2 mx-4 d-flex justify-content-evenly">
          <a href="" className="text-decoration-none">Login</a>/<a href=" " className="text-decoration-none"
            >Sign up</a
          >
        </div>

        <ul className="navbar-nav p-4">
          <p className="text-uppercase fw-bold text-muted text-light border-bottom m-0">Menu</p>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Man</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Women</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Accessories</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Customise products</a>
          </li>
        </ul>
        <ul className="navbar-nav bg-light p-4">
          <p className="text-uppercase fw-bold text-muted text-light border-bottom m-0">Profile</p>
          <li className="nav-item col">
            <a className="nav-link" aria-current="page" href="#">Profile</a>
          </li>
          <li className="nav-item col">
            <a className="nav-link" aria-current="page" href="#">Women</a>
          </li>
          <li className="nav-item col">
            <a className="nav-link" aria-current="page" href="#">Accessories</a>
          </li>
          <li className="nav-item col">
            <a className="nav-link" aria-current="page" href="#">Customise products</a>
          </li>
        </ul>
      </div>
    </div>
    {/* <!-- section part --> */}
    <div className="p-4"></div>
    <div
      className="emptycartwish emptyPage d-flex justify-content-center"
      style={{ padding: "30px 0px 0px" }}
    >
      <div>
        <img
          src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
          title="Empty Cart Page Doodle"
          alt="Empty Cart Page Doodle"
          width="150px"
        />
        <div className="clearfix">Nothing in the bag</div>
        <div className="clearfix">
          <a
            className="success"
            hreflang="en-in"
            href="/"
            style={{
              padding: "10px",
              border: "2px solid",
              borderRadius: "5px",
              display: "inline-block",
              marginTop: "15px",
              textDecoration: "none",
            }}
            >Continue Shopping</a
          >
        </div>
      </div>
      {/* <!-- section part --> */}
    </div>
    <div className="p-2"></div>
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-3"></div>
          <div className="col-xs-12 col-sm-6">
            <h2 id="main-popular-h2" className="text-start">My Wishlist</h2>
            <div id="main-bestseller" className="swiper bestSellerSlider">
              <div className="swiper-wrapper">
                <Swiper
                slidesPerView={3}
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
                            <img
                            src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-discount-1637307127-1640757473.jpg"
                            alt=""
                            />
                            <div className="tag-container">
                            <div className="d-flex tag-wrapper" style={{ minHeight: "15px" }}>
                                <div
                                className="d-flex align-items-center tag-row p-tag"
                                style={{ background: "rgba(82, 82, 82, 0.8)" }}
                                >
                                <span className="plp" style={{color: "rgb(255, 255, 255)" }}>DEGITAL PRINT</span>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex pt-2">
                            <div className="price me-2"><span>₹</span>526</div>
                            <div
                                className="SUUMMjyNMKjvEfEyQ4gAkofxj23KSP text-decoration-line-through fw-light text-muted"
                            >
                                <span>₹152</span>
                            </div>
                            </div>
                        </div>
                    </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="" className="swiper-slide position-relative"
                        ><div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                            <img
                            src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-collab-store-1637307127.jpg"
                            alt=""
                            />
                            <div className="tag-container">
                            <div className="d-flex tag-wrapper" style={{ minHeight: "15px" }}>
                                <div
                                className="d-flex align-items-center tag-row p-tag"
                                style={{ background: "rgba(82, 82, 82, 0.8)" }}
                                >
                                <span className="plp" style={{color: "rgb(255, 255, 255)" }}>DEGITAL PRINT</span>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex pt-2">
                            <div className="price me-2"><span>₹</span>526</div>
                            <div
                                className="SUUMMjyNMKjvEfEyQ4gAkofxj23KSP text-decoration-line-through fw-light text-muted"
                            >
                                <span>₹152</span>
                            </div>
                            </div>
                        </div>
                    </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href="" className="swiper-slide position-relative">
                        <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                            <img
                            src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-best-seller-1637307127.jpg"
                            alt=""
                            />
                            <div className="tag-container">
                            <div className="d-flex tag-wrapper" style={{ minHeight: "15px" }}>
                                <div
                                className="d-flex align-items-center tag-row p-tag"
                                style={{ background: "rgba(82, 82, 82, 0.8)" }}
                                >
                                <span className="plp" style={{color: "rgb(255, 255, 255)" }}>DEGITAL PRINT</span>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex pt-2">
                            <div className="price me-2"><span>₹</span>526</div>
                            <div
                                className="SUUMMjyNMKjvEfEyQ4gAkofxj23KSP text-decoration-line-through fw-light text-muted"
                            >
                                <span>₹152</span>
                            </div>
                            </div>
                        </div>
                    </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href="" className="swiper-slide position-relative">
                        <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                            <img
                            src="https://images.bewakoof.com/uploads/grid/app/vote-for-design-1641715844.jpg"
                            alt=""
                            />
                            <div className="tag-container">
                            <div className="d-flex tag-wrapper" style={{ minHeight: "15px" }}>
                                <div
                                className="d-flex align-items-center tag-row p-tag"
                                style={{ background: "rgba(82, 82, 82, 0.8)" }}
                                >
                                <span className="plp" style={{color: "rgb(255, 255, 255)" }}>DEGITAL PRINT</span>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex pt-2">
                            <div className="price me-2"><span>₹</span>526</div>
                            <div
                                className="SUUMMjyNMKjvEfEyQ4gAkofxj23KSP text-decoration-line-through fw-light text-muted"
                            >
                                <span>₹152</span>
                            </div>
                            </div>
                        </div>
                    </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href="" className="swiper-slide position-relative">
                        <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                            <img
                            src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-1637307130.jpg"
                            alt=""
                            />
                            <div className="tag-container">
                            <div className="d-flex tag-wrapper" style={{ minHeight: "15px" }}>
                                <div
                                className="d-flex align-items-center tag-row p-tag"
                                style={{ background: "rgba(82, 82, 82, 0.8)" }}
                                >
                                <span className="plp" style={{color: "rgb(255, 255, 255)" }}>DEGITAL PRINT</span>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex pt-2">
                            <div className="price me-2"><span>₹</span>526</div>
                            <div
                                className="SUUMMjyNMKjvEfEyQ4gAkofxj23KSP text-decoration-line-through fw-light text-muted"
                            >
                                <span>₹152</span>
                            </div>
                            </div>
                        </div>
                    </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href="" className="swiper-slide position-relative">
                        <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                            <img
                            src="https://images.bewakoof.com/uploads/grid/app/new-tod-thumbnail-cosmos-1--1--1640666014.jpg"
                            alt=""
                            />
                            <div className="tag-container">
                            <div className="d-flex tag-wrapper" style={{ minHeight: "15px" }}>
                                <div
                                className="d-flex align-items-center tag-row p-tag"
                                style={{ background: "rgba(82, 82, 82, 0.8)" }}
                                >
                                <span className="plp" style={{color: "rgb(255, 255, 255)" }}>DEGITAL PRINT</span>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex pt-2">
                            <div className="price me-2"><span>₹</span>526</div>
                            <div
                                className="SUUMMjyNMKjvEfEyQ4gAkofxj23KSP text-decoration-line-through fw-light text-muted"
                            >
                                <span>₹152</span>
                            </div>
                            </div>
                        </div>
                    </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href="" className="swiper-slide position-relative">
                        <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                            <img
                            src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-plus-size-1637307128.jpg"
                            alt=""
                            />
                            <div className="tag-container">
                            <div className="d-flex tag-wrapper" style={{ minHeight: "15px" }}>
                                <div
                                className="d-flex align-items-center tag-row p-tag"
                                style={{ background: "rgba(82, 82, 82, 0.8)" }}
                                >
                                <span className="plp" style={{color: "rgb(255, 255, 255)" }}>DEGITAL PRINT</span>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex pt-2">
                            <div className="price me-2"><span>₹</span>526</div>
                            <div
                                className="SUUMMjyNMKjvEfEyQ4gAkofxj23KSP text-decoration-line-through fw-light text-muted"
                            >
                                <span>₹152</span>
                            </div>
                            </div>
                        </div>
                    </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href="" className="swiper-slide position-relative">
                        <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                            <img
                            src="https://images.bewakoof.com/uploads/grid/app/last-sizes-left-1639915515.jpg"
                            alt=""
                            />
                            <div className="tag-container">
                            <div className="d-flex tag-wrapper" style={{ minHeight: "15px" }}>
                                <div
                                className="d-flex align-items-center tag-row p-tag"
                                style={{ background: "rgba(82, 82, 82, 0.8)" }}
                                >
                                <span className="plp" style={{color: "rgb(255, 255, 255)" }}>DEGITAL PRINT</span>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex pt-2">
                            <div className="price me-2"><span>₹</span>526</div>
                            <div
                                className="SUUMMjyNMKjvEfEyQ4gAkofxj23KSP text-decoration-line-through fw-light text-muted"
                            >
                                <span>₹152</span>
                            </div>
                            </div>
                        </div>
                    </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href="" className="swiper-slide position-relative">
                        <div className="wZd7LROynlc3sM2R4u2wJWSddETIfR2C">
                            <img
                            src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-essentials-1637307130.jpg"
                            alt=""
                            />
                            <div className="tag-container">
                            <div className="d-flex tag-wrapper" style={{ minHeight: "15px" }}>
                                <div
                                className="d-flex align-items-center tag-row p-tag"
                                style={{ background: "rgba(82, 82, 82, 0.8)" }}
                                >
                                <span className="plp" style={{color: "rgb(255, 255, 255)" }}>DEGITAL PRINT</span>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex pt-2">
                            <div className="price me-2"><span>₹</span>526</div>
                            <div
                                className="SUUMMjyNMKjvEfEyQ4gAkofxj23KSP text-decoration-line-through fw-light text-muted"
                            >
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
          <div className="col-xs-12 col-sm-3"></div>
        </div>
      </div>
      <div className="" style={{ margin: "0px auto", textAlign: "center", padding: "30px 6px 0 6px" }}>
        <a href="" id="main-view-all"> VIEW ALL </a>
      </div>
    </section>
    </>
  )
}

export default CartEmpty;