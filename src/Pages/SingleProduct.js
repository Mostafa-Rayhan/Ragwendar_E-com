
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../styles/style.css"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const SingleProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const prevButton=()=>{
        document.querySelector(".firstSwipper .swiper-button-prev").click();
    }
    const nextButton=()=>{
        document.querySelector(".firstSwipper .swiper-button-next").click();
    }
    return (
        <section>
            <div className="container">
                <nav aria-label="breadcrumb" className="py-3">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-dark">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item text-dark">
                            <a href="#">Library</a>
                        </li>
                        <li className="breadcrumb-item text-darkactive" aria-current="page">Data</li>
                    </ol>
                </nav>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="row">
                            <div className="col-xs-12 col-sm-2 col-md-2 d-none d-sm-block" style={{ height: "fit-content !important" }}> 
                                <div className="swiper swiperThumb sliderWrpr" style={{ height: "30%" }}>
                                    <div style={{
                                        position: "relative", 
                                        textAlign: "center",
                                        marginBottom: "10px",
                                        background: "#fff",
                                        zIndex: "999"
                                    }}
                                        className="slickUparrow " onClick={prevButton}>
                                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                                    </div>
                                    <div className="swiper-wrapper thumbSliderWrapperclassName firstSwipper">
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            loop={true}
                                            spaceBetween={10}
                                            slidesPerView={1} 
                                            navigation={true}
                                            direction={"vertical"}
                                            freeMode={true}
                                            watchSlidesProgress={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper "
                                            // thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                        >
                                            <SwiperSlide>
                                                <img src="https://images.bewakoof.com/t540/black-men-s-solid-jogger-451582-1646674694-1.jpg"
                                                    title="Men's Black Joggers-Front Bewakoof" alt="Shop Men's Black Joggers-Front" width="100"
                                                    className="productThumbImage" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://images.bewakoof.com/t540/black-men-s-solid-jogger-451582-1646674698-2.jpg"
                                                    title="Men's Black Joggers-Front Bewakoof" alt="Shop Men's Black Joggers-Front" width="100%"
                                                    className="productThumbImage" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://images.bewakoof.com/t540/black-men-s-solid-jogger-451582-1646674702-3.jpg"
                                                    title="Men's Black Joggers-Front Bewakoof" alt="Shop Men's Black Joggers-Front" width="100%"
                                                    className="productThumbImage" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://images.bewakoof.com/t540/black-men-s-solid-jogger-451582-1646674715-6.jpg"
                                                    title="Men's Black Joggers-Front Bewakoof" alt="Shop Men's Black Joggers-Front" width="100%"
                                                    className="productThumbImage" />
                                            </SwiperSlide>

                                        </Swiper>

                                    </div>
                                    {/* <div className="slickDownarrow" style={{
                                        background: "#fff",
                                        zIndex: "9999",
                                        position: "relative",
                                        textAlign: "center",
                                        marginTop: "10px"
                                    }}
                                    >
                                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </div> */}

                                    <div style={{
                                        position: "", 
                                        textAlign: "center",
                                        marginBottom: "10px",
                                        background: "#fff",
                                        zIndex: "1000", 
                                        color:"red" 
                                    }}
                                        className="slickUparrow" onClick={nextButton}> 
                                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                                    </div>
                                    <div style={{color:"red", position:"absolute"}}>dkfjsdkfjsdjf</div>


                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-10 col-md-10 p-0 m-0" style={{ height: "80vh" }}>
                                <div thumbsSlider="" className="swiper swiperPruduct">
                                    <div className="swiper-wrapper">

                                        <Swiper
                                            style={{
                                                "--swiper-navigation-color": "#fff",
                                                "--swiper-pagination-color": "#fff",
                                            }}
                                            loop={true}
                                            spaceBetween={10}
                                            slidesPerView={1}  
                                            navigation={true} 
                                            // thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper2"
                                        >

                                            <SwiperSlide>
                                                <img src="https://images.bewakoof.com/t540/black-men-s-solid-jogger-451582-1646674694-1.jpg"
                                                    title="Men's Black Joggers-Front Bewakoof" alt="Shop Men's Black Joggers-Front" width="100%"
                                                    className="productThumbImage" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://images.bewakoof.com/t540/black-men-s-solid-jogger-451582-1646674698-2.jpg"
                                                    title="Men's Black Joggers-Front Bewakoof" alt="Shop Men's Black Joggers-Front" width="100%"
                                                    className="productThumbImage" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://images.bewakoof.com/t540/black-men-s-solid-jogger-451582-1646674702-3.jpg"
                                                    title="Men's Black Joggers-Front Bewakoof" alt="Shop Men's Black Joggers-Front" width="100%"
                                                    className="productThumbImage" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://images.bewakoof.com/t540/black-men-s-solid-jogger-451582-1646674715-6.jpg"
                                                    title="Men's Black Joggers-Front Bewakoof" alt="Shop Men's Black Joggers-Front" width="100%"
                                                    className="productThumbImage" />
                                            </SwiperSlide>
                                        </Swiper> 

                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 product-details">
                        <h3>Garfield: Lasagna</h3>
                        <h1>Women's Blue Boyfriend T-shirt</h1>
                        {/* <!-- <div type="button" className="rating">
                    <span>4.2</span>
                    <i className="fa fa-star" style="color: orange"></i>
                </div> -->
                <!-- <br /> --> */}
                        <br />
                        <p className="">By Garfield</p>
                        <div className="d-flex">
                            <div className="price me-2"><span>₹</span>349</div>
                            <div className="actialPrice me-2 text-decoration-line-through fw-light text-muted">
                                <span>₹999</span>
                            </div>
                            <div className="offer">
                                <span>65% OFF</span>
                            </div>
                        </div>
                        <span className="inclusiveOfAllTaxes mb-1">inclusive of all taxes</span>
                        <div className="d-fit-tags-ctr w100 clear">
                            <div className="tags-wrapper">
                                <div className="tags-rect d-flex flex-column" style={{
                                    backgroundColor: "rgba(0, 184, 82, 0.8)",
                                    color: "rgb(255, 255, 255)",
                                    border: "none"
                                }}
                                >
                                    <p>BUY 2 FOR 599</p>
                                </div>
                            </div>
                        </div>
                        <div className="tribeContainer col-xs-12 exchangeSizeWrapper">
                            <div className="tribeMsgWrpr">
                                <span className="tribeMsg">TriBe members get an extra discount of <b>₹20</b> and FREE shipping.</span><span
                                    className="tribeLearnMore">Learn more</span>
                            </div>
                        </div>
                        {/* <!-- COLOR OPTIONS --> */}
                        <div className="container exchangeSizeWrapper">
                            <span className="selectSizeTitle">COLOR OPTIONS</span>
                            <div className="row d-flex justify-content-start p-2 btnColorPickerRow colorPickerBtnDiv">
                                <input type="radio" className="btn-check" name="color1" id="filter-color-1" />
                                <label className="col-1 m-1 p-4 bg-secondary rounded btnColorPicker" htmlFor="filter-color-1"></label>
                                <input type="radio" className="btn-check" name="color1" id="filter-color-2" />
                                <label className="col-1 m-1 p-4 bg-white rounded btnColorPicker" htmlFor="filter-color-2"></label>
                                <input type="radio" className="btn-check" name="color1" id="filter-color-3" />
                                <label className="col-1 m-1 p-4 bg-dark rounded btnColorPicker" htmlFor="filter-color-3"></label>
                                <input type="radio" className="btn-check" name="color1" id="filter-color-4" />
                                <label className="col-1 m-1 p-4 bg-info rounded btnColorPicker" htmlFor="filter-color-4"></label>
                                <input type="radio" className="btn-check" name="color1" id="filter-color-5" />
                                <label className="col-1 m-1 p-4 bg-light rounded btnColorPicker" htmlFor="filter-color-5"></label>
                                <input type="radio" className="btn-check" name="color1" id="filter-color-6" />
                                <label className="col-1 m-1 p-4 bg-warning rounded btnColorPicker" htmlFor="filter-color-6"></label>
                                <input type="radio" className="btn-check" name="color1" id="filter-color-7" />
                                <label className="col-1 m-1 p-4 bg-danger rounded btnColorPicker" htmlFor="filter-color-7"></label>
                            </div>
                        </div>
                        {/* <!-- Select Size --> */}
                        <div className="sizeBlock col-xs-12">
                            <div className="sizeWrapper exchangeSizeWrapper">
                                <div className="sizeOuterWrapper">
                                    <div className="selectSizeLeft">
                                        <div className="col-xs-12 noPd">
                                            <span className="selectSizeTitle">Select Size</span><span className="sizeQtyError"></span>
                                        </div>
                                    </div>
                                    <div className="sizeGuidRight">
                                        <div className="sizeChartDiv" id="testSizeChart">
                                            <span className="sizeChart">Size Guide</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="selectSize">
                                    <input type="radio" className="btn-check" name="size1" id="filter-size-1" />
                                    <label htmlFor="filter-size-1" className="eachSize disableSizeV3"><span>S</span></label>

                                    <input type="radio" className="btn-check" name="size1" id="filter-size-2" />
                                    <label htmlFor="filter-size-2" className="eachSize disableSizeV3"><span>M</span></label>

                                    <input type="radio" className="btn-check" name="size1" id="filter-size-3" />
                                    <label htmlFor="filter-size-3" className="eachSize disableSizeV3"><span>L</span></label>

                                    <input type="radio" className="btn-check" name="size1" id="filter-size-4" />
                                    <label htmlFor="filter-size-4" className="eachSize disableSizeV3"><span>XL</span></label>

                                    <input type="radio" className="btn-check" name="size1" id="filter-size-5" />
                                    <label htmlFor="filter-size-5" className="eachSize disableSizeV3"><span>2XL</span></label>

                                    <input type="radio" className="btn-check" name="size1" id="filter-size-6" />
                                    <label htmlFor="filter-size-6" className="eachSize disableSizeV3"><span>3XL</span></label>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ? -->
                <!-- <hr /> -->
                <!-- <h6 style="color: #f00">Few Left</h6> --> */}
                        <div className="container ">
                            <div className="row pt-4 pb-3">
                                <div className="col-3 col-md-3 col-lg-2 d-grid p-0 ">
                                    <div className="d-flex align-items-center w-100">
                                        Qty&nbsp;<div className="d-flex align-items-center w-100 justify-content-around p-0 py-2 itemCount">
                                            <p onClick="decrease()">-</p>
                                            <span className="mb-0 fw-bold priceValue">1</span>
                                            <p onClick="increase()">+</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-9 col-md-9 col-lg-10 d-grid">
                                    <button className="btn btn-warning p-2 py-3 btnProductPage">
                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div className="row p-2 mb-5">
                                <button className="py-3 btnProductPage2">
                                    BUY IT NOW
                                </button>
                            </div>
                        </div>
                        <hr />

                        <div className="accordion accordion-flush my-2" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed text-uppercase fw-bold" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Save extra 1 offer
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse fw-bold" aria-labelledby="flush-headingOne"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                        <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed text-uppercase fw-bold" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Product description
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                        <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being
                                        filled with some actual content.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed text-uppercase fw-bold" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        15 days return and exchange
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                        <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting
                                        happening here in terms of content, but just filling up the space to make it look, at least at first
                                        glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed text-uppercase fw-bold" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFourFour" aria-expanded="false" aria-controls="flush-collapseFourFour">
                                        Get this by 21st steps
                                    </button>
                                </h2>
                                <div id="flush-collapseFourFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                        <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting
                                        happening here in terms of content, but just filling up the space to make it look, at least at first
                                        glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- rating and reviews  --> */}

                        <div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <h5 className="fw-bold">Rating and reviews</h5>
                                <button className="rateBtn">Rate product</button>
                            </div>

                            <div className="mx-4">
                                <div className=" ratingDiv py-2">
                                    <h2 className="ratingText">4.3</h2>
                                    <p className="mt-1">Base on <br /> 1k rating and 300 review</p>
                                </div>
                                <div className="d-flex align-items-start justify-content-start ratingDiv ">
                                    <p className="me-2"><i className="fa-solid fa-thumbs-up"></i></p>
                                    <p className="p-0">84% customer liked this product</p>
                                </div>
                                <div className="container">
                                    <div className="row starRow">
                                        <div className="col-2 p-0 starText">5 <i className="fa-sharp fa-solid fa-star"></i></div>
                                        <div className="col">
                                            <div className="progress progressBar">
                                                <div className="text-bg-dark w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="col-1 p-0">726</div>
                                    </div>
                                    <div className="row starRow">
                                        <div className="col-2 p-0 starText">4 <i className="fa-sharp fa-solid fa-star"></i></div>
                                        <div className="col">
                                            <div className="progress progressBar">
                                                <div className="text-bg-dark fourStar" role="progressbar" aria-label="Basic example" aria-valuenow="40"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="col-1 p-0">172</div>
                                    </div>
                                    <div className="row starRow">
                                        <div className="col-2 p-0 starText">3 <i className="fa-sharp fa-solid fa-star"></i></div>
                                        <div className="col">
                                            <div className="progress progressBar">
                                                <div className="text-bg-dark threeStar" role="progressbar" aria-label="Basic example" aria-valuenow="23"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="col-1 p-0">62</div>
                                    </div>
                                    <div className="row starRow">
                                        <div className="col-2 p-0 starText">2 <i className="fa-sharp fa-solid fa-star"></i></div>
                                        <div className="col">
                                            <div className="progress progressBar">
                                                <div className="text-bg-dark twoStar" role="progressbar" aria-label="Basic example" aria-valuenow="15"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="col-1 p-0">34</div>
                                    </div>
                                    <div className="row starRow">
                                        <div className="col-2 p-0 starText">1 <i className="fa-sharp fa-solid fa-star"></i></div>
                                        <div className="col">
                                            <div className="progress progressBar">
                                                <div className="text-bg-dark oneStar" role="progressbar" aria-label="Basic example" aria-valuenow="30"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="col-1 p-0">77</div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {/* </section>
    

    <section> */}
            <div className="container p-0">
                <h3 className="similar-product-text mb-4">SIMILAR PRODUCTS</h3>
                <div className="row flex-wrap" id="produc-listng">
                    <div className="col-6 col-md-6 col-lg-3 p-2">
                        <a href="/product_single.html">
                            <div className="productCardBox">
                                <div className="productCardImg false">
                                    <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                                        <img src="./assets/productList/1.jpg" alt="" width="100%" height="100%" />
                                    </div>
                                    <div className="productCardDetail">
                                        <div className="d-flex">
                                            <div className="productNaming bkf-ellipsis">
                                                <h3 className="brand-name">Kasar Ganta T-Shirt For Men</h3>
                                            </div>
                                        </div>
                                        <div className="productPriceBox d-flex align-items-end">
                                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                                            <div className="actualPriceText clr-shade5">₹830</div>
                                            <span className="sellingFastBox"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 col-md-6 col-lg-3 p-2">
                        <a href="/product_single.html">
                            <div className="productCardBox">
                                <div className="productCardImg false">
                                    <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                                        <img src="./assets/productList/2.jpg" alt="" width="100%" height="100%" />
                                    </div>
                                    <div className="productCardDetail">
                                        <div className="d-flex">
                                            <div className="productNaming bkf-ellipsis">
                                                <h3 className="brand-name">Tag Duma T-Shirt For Men</h3>
                                            </div>
                                        </div>
                                        <div className="productPriceBox d-flex align-items-end">
                                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                                            <div className="actualPriceText clr-shade5">₹830</div>
                                            <span className="sellingFastBox"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 col-md-6 col-lg-3 p-2">
                        <a href="/product_single.html">
                            <div className="productCardBox">
                                <div className="productCardImg false">
                                    <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                                        <img src="./assets/productList/3.jpg" alt="" width="100%" height="100%" />
                                    </div>
                                    <div className="productCardDetail">
                                        <div className="d-flex">
                                            <div className="productNaming bkf-ellipsis">
                                                <h3 className="brand-name">Uma T-Shirt For Men</h3>
                                            </div>
                                        </div>
                                        <div className="productPriceBox d-flex align-items-end">
                                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                                            <div className="actualPriceText clr-shade5">₹830</div>
                                            <span className="sellingFastBox"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 col-md-6 col-lg-3 p-2">
                        <a href="/product_single.html">
                            <div className="productCardBox">
                                <div className="productCardImg false">
                                    <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                                        <img src="./assets/productList/4.jpg" alt="" width="100%" height="100%" />
                                    </div>
                                    <div className="productCardDetail">
                                        <div className="d-flex">
                                            <div className="productNaming bkf-ellipsis">
                                                <h3 className="brand-name">Kasar Ganta T-Shirt For Men</h3>
                                            </div>
                                        </div>
                                        <div className="productPriceBox d-flex align-items-end">
                                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                                            <div className="actualPriceText clr-shade5">₹830</div>
                                            <span className="sellingFastBox"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleProduct;