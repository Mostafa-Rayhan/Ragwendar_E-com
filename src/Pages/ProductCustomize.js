import React from 'react'
import { Link } from 'react-router-dom';

const ProductCustomize = () => {
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
    {/* <!-- Responsve --> */}

    {/* <!-- The sidebar for Mobile Phones --> */}
    <div
      className="offcanvas offcanvas-start"
      style={{ width: "270px" }}
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          {/* <!-- {% isAuth query if true%} -->
          <!-- Hello name -->
          <!-- {% else %} --> */}
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
        {/* <!-- {% isAuth query if true%} --> */}
        <div className="border-bottom p-2 mx-4 d-flex justify-content-evenly">
          <a href="" className="text-decoration-none">Login</a>/<a href=" " className="text-decoration-none"
            >Sign up</a
          >
        </div>
        {/* <!-- {% else %} --> */}
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

    <div className="container p-3">
      <div className="customize-wrapper">
        <div className="nav-progress">
          <ul className="progressbar">
            <li className="active">Pick Color</li>
            <li className="">Size</li>
            <li className="">Design</li>
            <li className=" ">Preview</li>
          </ul>
        </div>
        <div className="section-body pt-5">
          <p className="customize-title pt-2">Select Color</p>
          <div className="swiper colorSwiper text-center">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row p-2">
                  <div className="col-4 pb-4">
                    <input type="radio" className="btn-check" name="ProductColor" id="color1" checked />
                    <label className="inputColorSelect" style={{ backgroundColor: "#171612"}} for="color1" 
                      >&nbsp;</label
                    >
                  </div>
                  <div className="col-4 pb-4">
                    <input
                      type="radio"
                      className="btn-check"
                      name="ProductColor"
                      id="color2"
                      autocomplete="off"
                    />
                    <label className="inputColorSelect" style={{ backgroundColor: "#f9f9f8"}} for="color2" 
                      >&nbsp;</label
                    >
                  </div>
                  <div className="col-4 pb-4">
                    <input
                      type="radio"
                      className="btn-check"
                      name="ProductColor"
                      id="color3"
                      autocomplete="off"
                    />
                    <label className="inputColorSelect" style={{ backgroundColor: "#a8020f" }} for="color3"
                      >&nbsp;</label
                    >
                  </div>
                  <div className="col-4 pb-4">
                    <input
                      type="radio"
                      className="btn-check"
                      name="ProductColor"
                      id="color4"
                      autocomplete="off"
                    />
                    <label className="inputColorSelect" style={{ backgroundColor: "#e6de95" }} for="color4"
                      >&nbsp;</label
                    >
                  </div>
                  <div className="col-4 pb-4">
                    <input
                      type="radio"
                      className="btn-check"
                      name="ProductColor"
                      id="color5"
                      autocomplete="off"
                    />
                    <label className="inputColorSelect" style={{ backgroundColor: "#cfd46b" }} for="color5"
                      >&nbsp;</label
                    >
                  </div>
                  <div className="col-4 pb-4">
                    <input
                      type="radio"
                      className="btn-check"
                      name="ProductColor"
                      id="color5"
                      autocomplete="off"
                    />
                    <label className="inputColorSelect" style={{ backgroundColor: "#242508" }} for="color5"
                      >&nbsp;</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div className="section-footer">
          <Link to="/productCustomize2" type="button" className="next-btn button">Next</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductCustomize;