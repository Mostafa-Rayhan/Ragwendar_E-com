import React from 'react'

const Product = () => {
  return (
    <section>
      <header className="container p-0">
        <div className="row m-0">
          <img src="https://images.bewakoof.com/uploads/category/desktop/Inside-Banner-desktop-Byou-1651213096.jpg"
            style={{ width: "100%", height: "fit-content" }} />
        </div>
      </header>

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
        <div className="row wrap"  style={{ maxHeight: "100%", minHeight: "484.2px",  position: "relative" }} >
          <div className="col-md-3  product-sidebar d-none d-md-block"> 
            <div className="sticky">
              <div className="box">
                <div className="filterHeading"> 
                  <h4>FILTERS</h4>
                </div>
                <div className="row w-100 m-0">
                  <button className="m-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse"
                    data-bs-target="#categoryCollapse" aria-expanded="false" aria-controls="categoryCollapse">
                    <span>Categories</span><i className="fa fa-angle-down" aria-hidden="true"></i>
                  </button>
                  <div className="collapse" id="categoryCollapse">
                    <ul className="p-0">
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">sweatshirt</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">Paijama</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">Hoodies</a>
                      </li>
                    </ul>
                  </div>
                  <hr/>
                  <button className="m-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse"
                    data-bs-target="#sizesCollapse" aria-expanded="false" aria-controls="sizesCollapse">
                    <span>Sizes</span><i className="fa fa-angle-down" aria-hidden="true"></i>
                  </button>
                  <div className="collapse" id="sizesCollapse">
                    <ul className="p-0">
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">S</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">M</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">L</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">XL</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">1XL</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">2XL</a>
                      </li>
                    </ul>
                  </div>
                  <hr/>
                  <button className="m-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse"
                    data-bs-target="#brandCollapse" aria-expanded="false" aria-controls="brandCollapse">
                    <span>Brand</span><i className="fa fa-angle-down" aria-hidden="true"></i>
                  </button>
                  <div className="collapse" id="brandCollapse">
                    <ul className="p-0">
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">bewakoof</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">Redwolf</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">Brown mocha</a>
                      </li>
                    </ul>
                  </div>
                  <hr/>
                  <button className="m-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse"
                    data-bs-target="#colorCollapse" aria-expanded="false" aria-controls="colorCollapse">
                    <span>Color</span><i className="fa fa-angle-down" aria-hidden="true"></i>
                  </button>
                  <div className="collapse" id="colorCollapse">
                    <ul className="p-0">
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">sweatshirt</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">Paijama</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">Hoodies</a>
                      </li>
                    </ul>
                  </div>
                  <hr/>
                  <button className="m-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse"
                    data-bs-target="#designCollapse" aria-expanded="false" aria-controls="designCollapse">
                    <span>Design</span><i className="fa fa-angle-down" aria-hidden="true"></i>
                  </button>
                  <div className="collapse" id="designCollapse">
                    <ul className="p-0">
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">Solid</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">Paint</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">Printed</a>
                      </li>
                    </ul>
                  </div>
                  <hr/>
                  <button className="m-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse"
                    data-bs-target="#offersCollapse" aria-expanded="false" aria-controls="offersCollapse">
                    <span>Offers</span><i className="fa fa-angle-down" aria-hidden="true"></i>
                  </button>
                  <div className="collapse" id="offersCollapse">
                    <ul className="p-0">
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">Bue 1 Get 1</a>
                      </li>
                    </ul>
                  </div>
                  <hr/>
                  <button className="m-0 d-flex justify-content-between" type="button" data-bs-toggle="collapse"
                    data-bs-target="#duscountCollapse" aria-expanded="false" aria-controls="duscountCollapse">
                    <span>Discounts</span><i className="fa fa-angle-down" aria-hidden="true"></i>
                  </button>
                  <div className="collapse" id="duscountCollapse">
                    <ul className="p-0">
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">10% More</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">20% More</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">30% More</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">40% More</a>
                      </li>
                      <li className="listType">
                        <a className="m-0 w-100 p-1 collapseBtn" aria-current="false" href="">50% More</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  <button className="btn btn-primary" type="button">Button with data-bs-target</button>
                </p>
                {/* <!-- <hr/> --> */}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-9 offset-md-3">   
              {/* offset-md-3 offset-lg-8 
            <div className="col-sm-12 col-md-12"> 
            <div className="shortingHeading">
                <select name="" id="sortPrice" onchange="sort()">
                  <option value="popular">Sort By: Popular</option>
                  <option value="new">New</option>
                  <option value="high">Price :High to Low</option>
                  <option value="low">Price :Low to High</option>
                </select>
              </div>  */}
            <div className="container p-0">
              <div className="row flex-wrap" id="produc-listng">
                <div className="col-6 col-md-6 col-lg-4 p-2">
                  <a href="/product_single.html">
                    <div className="productCardBox">
                      <div className="productCardImg false">
                        <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                          <img src="assets/productList/1.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div className="productCardDetail">
                          <div className="d-flex">
                            <div className="productNaming bkf-ellipsis">
                              <h3 className="brand-name">Bewakoof</h3>
                              <div className="clr-shade4 h3-p-name">
                                Customizable Men's White Round Neck T-Shirt
                              </div>
                            </div>
                          </div>
                          <div className="productPriceBox d-flex align-items-end">
                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                            <div className="actualPriceText clr-shade5">₹830</div>
                            <span className="sellingFastBox"></span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between loyalty-stock-wrap">
                            <div className="loyaltyPriceBox" style={{ width: "unset" }}>
                              <h6><b>₹449</b>For TriBe Members</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 p-2">
                  <a href="/product_single.html">
                    <div className="productCardBox">
                      <div className="productCardImg false">
                        <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                          <img src="assets/productList/2.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div className="productCardDetail">
                          <div className="d-flex">
                            <div className="productNaming bkf-ellipsis">
                              <h3 className="brand-name">Bewakoof</h3>
                              <div className="clr-shade4 h3-p-name">
                                Customizable Men's White Round Neck T-Shirt
                              </div>
                            </div>
                          </div>
                          <div className="productPriceBox d-flex align-items-end">
                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                            <div className="actualPriceText clr-shade5">₹830</div>
                            <span className="sellingFastBox"></span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between loyalty-stock-wrap">
                            <div className="loyaltyPriceBox" style={{ width: "unset" }}>
                              <h6><b>₹449</b>For TriBe Members</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 p-2">
                  <a href="/product_single.html">
                    <div className="productCardBox">
                      <div className="productCardImg false">
                        <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                          <img src="assets/productList/3.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div className="productCardDetail">
                          <div className="d-flex">
                            <div className="productNaming bkf-ellipsis">
                              <h3 className="brand-name">Bewakoof</h3>
                              <div className="clr-shade4 h3-p-name">
                                Customizable Men's White Round Neck T-Shirt
                              </div>
                            </div>
                          </div>
                          <div className="productPriceBox d-flex align-items-end">
                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                            <div className="actualPriceText clr-shade5">₹830</div>
                            <span className="sellingFastBox"></span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between loyalty-stock-wrap">
                            <div className="loyaltyPriceBox" style={{ width: "unset" }}>
                              <h6><b>₹449</b>For TriBe Members</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 p-2">
                  <a href="/product_single.html">
                    <div className="productCardBox">
                      <div className="productCardImg false">
                        <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                          <img src="assets/productList/4.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div className="productCardDetail">
                          <div className="d-flex">
                            <div className="productNaming bkf-ellipsis">
                              <h3 className="brand-name">Bewakoof</h3>
                              <div className="clr-shade4 h3-p-name">
                                Customizable Men's White Round Neck T-Shirt
                              </div>
                            </div>
                          </div>
                          <div className="productPriceBox d-flex align-items-end">
                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                            <div className="actualPriceText clr-shade5">₹830</div>
                            <span className="sellingFastBox"></span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between loyalty-stock-wrap">
                            <div className="loyaltyPriceBox" style={{ width: "unset" }}>
                              <h6><b>₹449</b>For TriBe Members</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 p-2">
                  <a href="/product_single.html">
                    <div className="productCardBox">
                      <div className="productCardImg false">
                        <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                          <img src="assets/productList/5.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div className="productCardDetail">
                          <div className="d-flex">
                            <div className="productNaming bkf-ellipsis">
                              <h3 className="brand-name">Bewakoof</h3>
                              <div className="clr-shade4 h3-p-name">
                                Customizable Men's White Round Neck T-Shirt
                              </div>
                            </div>
                          </div>
                          <div className="productPriceBox d-flex align-items-end">
                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                            <div className="actualPriceText clr-shade5">₹830</div>
                            <span className="sellingFastBox"></span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between loyalty-stock-wrap">
                            <div className="loyaltyPriceBox" style={{ width: "unset" }}>
                              <h6><b>₹449</b>For TriBe Members</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 p-2">
                  <a href="/product_single.html">
                    <div className="productCardBox">
                      <div className="productCardImg false">
                        <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                          <img src="assets/productList/6.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div className="productCardDetail">
                          <div className="d-flex">
                            <div className="productNaming bkf-ellipsis">
                              <h3 className="brand-name">Bewakoof</h3>
                              <div className="clr-shade4 h3-p-name">
                                Customizable Men's White Round Neck T-Shirt
                              </div>
                            </div>
                          </div>
                          <div className="productPriceBox d-flex align-items-end">
                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                            <div className="actualPriceText clr-shade5">₹830</div>
                            <span className="sellingFastBox"></span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between loyalty-stock-wrap">
                            <div className="loyaltyPriceBox" style={{ width: "unset" }}>
                              <h6><b>₹449</b>For TriBe Members</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 p-2">
                  <a href="/product_single.html">
                    <div className="productCardBox">
                      <div className="productCardImg false">
                        <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                          <img src="assets/productList/7.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div className="productCardDetail">
                          <div className="d-flex">
                            <div className="productNaming bkf-ellipsis">
                              <h3 className="brand-name">Bewakoof</h3>
                              <div className="clr-shade4 h3-p-name">
                                Customizable Men's White Round Neck T-Shirt
                              </div>
                            </div>
                          </div>
                          <div className="productPriceBox d-flex align-items-end">
                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                            <div className="actualPriceText clr-shade5">₹830</div>
                            <span className="sellingFastBox"></span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between loyalty-stock-wrap">
                            <div className="loyaltyPriceBox" style={{ width: "unset" }}>
                              <h6><b>₹449</b>For TriBe Members</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 p-2">
                  <a href="/product_single.html">
                    <div className="productCardBox">
                      <div className="productCardImg false">
                        <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                          <img src="assets/productList/8.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div className="productCardDetail">
                          <div className="d-flex">
                            <div className="productNaming bkf-ellipsis">
                              <h3 className="brand-name">Bewakoof</h3>
                              <div className="clr-shade4 h3-p-name">
                                Customizable Men's White Round Neck T-Shirt
                              </div>
                            </div>
                          </div>
                          <div className="productPriceBox d-flex align-items-end">
                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                            <div className="actualPriceText clr-shade5">₹830</div>
                            <span className="sellingFastBox"></span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between loyalty-stock-wrap">
                            <div className="loyaltyPriceBox" style={{ width: "unset" }}>
                              <h6><b>₹449</b>For TriBe Members</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 p-2">
                  <a href="/product_single.html">
                    <div className="productCardBox">
                      <div className="productCardImg false">
                        <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                          <img src="assets/productList/9.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div className="productCardDetail">
                          <div className="d-flex">
                            <div className="productNaming bkf-ellipsis">
                              <h3 className="brand-name">Bewakoof</h3>
                              <div className="clr-shade4 h3-p-name">
                                Customizable Men's White Round Neck T-Shirt
                              </div>
                            </div>
                          </div>
                          <div className="productPriceBox d-flex align-items-end">
                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                            <div className="actualPriceText clr-shade5">₹830</div>
                            <span className="sellingFastBox"></span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between loyalty-stock-wrap">
                            <div className="loyaltyPriceBox" style={{ width: "unset" }}>
                              <h6><b>₹449</b>For TriBe Members</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-6 col-md-6 col-lg-4 p-2">
                  <a href="/product_single.html">
                    <div className="productCardBox">
                      <div className="productCardImg false">
                        <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                          <img src="assets/productList/1.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div className="productCardDetail">
                          <div className="d-flex">
                            <div className="productNaming bkf-ellipsis">
                              <h3 className="brand-name">Bewakoof</h3>
                              <div className="clr-shade4 h3-p-name">
                                Customizable Men's White Round Neck T-Shirt
                              </div>
                            </div>
                          </div>
                          <div className="productPriceBox d-flex align-items-end">
                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                            <div className="actualPriceText clr-shade5">₹830</div>
                            <span className="sellingFastBox"></span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between loyalty-stock-wrap">
                            <div className="loyaltyPriceBox" style={{ width: "unset" }}>
                              <h6><b>₹449</b>For TriBe Members</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 p-2">
                  <a href="/product_single.html">
                    <div className="productCardBox">
                      <div className="productCardImg false">
                        <div className="productImg" style={{ width: "100%", position: "relative", background: "rgb(248, 249, 249)" }}>
                          <img src="assets/productList/2.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div className="productCardDetail">
                          <div className="d-flex">
                            <div className="productNaming bkf-ellipsis">
                              <h3 className="brand-name">Bewakoof</h3>
                              <div className="clr-shade4 h3-p-name">
                                Customizable Men's White Round Neck T-Shirt
                              </div>
                            </div>
                          </div>
                          <div className="productPriceBox d-flex align-items-end">
                            <div className="discountedPriceText clr-p-black"><span>₹</span>499</div>
                            <div className="actualPriceText clr-shade5">₹830</div>
                            <span className="sellingFastBox"></span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between loyalty-stock-wrap">
                            <div className="loyaltyPriceBox" style={{ width: "unset" }}>
                              <h6><b>₹449</b>For TriBe Members</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Product