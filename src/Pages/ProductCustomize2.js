import React from 'react'
import { Link } from 'react-router-dom';

const ProductCustomize2 = () => {
  return (
    <>
    <div className="sticky-top">
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
    </div>
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

    <div className="container">
      <div className="customize-wrapper">
        <div className="nav-progress pt-3 bg-white">
          <ul className="progressbar">
            <li className="completed">Pick Color</li>
            <li className="active">Size</li>
            <li className="">Design</li>
            <li className=" ">Preview</li>
          </ul>
        </div>
        <div className="section-body pt-5">
          <p className="customize-title pt-4">Required Measurement:</p>
          <div className="swiper colorSwiper text-center">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row p-2">
                  <div className="input-group mb-3">
                    <label className="inputa w-25 m-0">
                      <input
                        className="input__field border-end-0"
                        type="text"
                        placeholder=" "
                        value="42"
                      />
                      <span className="input__label">Neck (Inches)</span>
                    </label>
                    <div className="input-group-append w-75 customize-btn rounded-end">
                      <button
                        className="w-100 p-2"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#addMesurement"
                        aria-controls="addMesurement"
                      >
                        Add Measurement
                      </button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label className="inputa w-25 m-0">
                      <input
                        className="input__field border-end-0"
                        type="text"
                        placeholder=" "
                        value="42"
                      />
                      <span className="input__label">Shoulder (Inches)</span>
                    </label>
                    <div className="input-group-append w-75 customize-btn rounded-end">
                      <button
                        className="w-100 p-2"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#addMesurement"
                        aria-controls="addMesurement"
                      >
                        Add Measurement
                      </button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label className="inputa w-25 m-0">
                      <input
                        className="input__field border-end-0"
                        type="text"
                        placeholder=" "
                        value="42"
                      />
                      <span className="input__label">Arm Hole (Inches)</span>
                    </label>
                    <div className="input-group-append w-75 customize-btn rounded-end">
                      <button
                        className="w-100 p-2"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#addMesurement"
                        aria-controls="addMesurement"
                      >
                        Add Measurement
                      </button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label className="inputa w-25 m-0">
                      <input
                        className="input__field border-end-0"
                        type="text"
                        placeholder=" "
                        value="42"
                      />
                      <span className="input__label">Sleeve (Inches)</span>
                    </label>
                    <div className="input-group-append w-75 customize-btn rounded-end">
                      <button
                        className="w-100 p-2"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#addMesurement"
                        aria-controls="addMesurement"
                      >
                        Add Measurement
                      </button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label className="inputa w-25 m-0">
                      <input
                        className="input__field border-end-0"
                        type="text"
                        placeholder=" "
                        value="42"
                      />
                      <span className="input__label">Sleeve (Inches)</span>
                    </label>
                    <div className="input-group-append w-75 customize-btn rounded-end">
                      <button
                        className="w-100 p-2"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#addMesurement"
                        aria-controls="addMesurement"
                      >
                        Add Measurement
                      </button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label className="inputa w-25 m-0">
                      <input
                        className="input__field border-end-0"
                        type="text"
                        placeholder=" "
                        value="42"
                      />
                      <span className="input__label">Sleeve (Inches)</span>
                    </label>
                    <div className="input-group-append w-75 customize-btn rounded-end">
                      <button
                        className="w-100 p-2"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#addMesurement"
                        aria-controls="addMesurement"
                      >
                        Add Measurement
                      </button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label className="inputa w-25 m-0">
                      <input
                        className="input__field border-end-0"
                        type="text"
                        placeholder=" "
                        value="42"
                      />
                      <span className="input__label">Sleeve (Inches)</span>
                    </label>
                    <div className="input-group-append w-75 customize-btn rounded-end">
                      <button
                        className="w-100 p-2"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#addMesurement"
                        aria-controls="addMesurement"
                      >
                        Add Measurement
                      </button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label className="inputa w-25 m-0">
                      <input
                        className="input__field border-end-0"
                        type="text"
                        placeholder=" "
                        value="42"
                      />
                      <span className="input__label">Sleeve (Inches)</span>
                    </label>
                    <div className="input-group-append w-75 customize-btn rounded-end">
                      <button
                        className="w-100 p-2"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#addMesurement"
                        aria-controls="addMesurement"
                      >
                        Add Measurement
                      </button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label className="inputa w-25 m-0">
                      <input
                        className="input__field border-end-0"
                        type="text"
                        placeholder=" "
                        value="42"
                      />
                      <span className="input__label">Sleeve (Inches)</span>
                    </label>
                    <div className="input-group-append w-75 customize-btn rounded-end">
                      <button
                        className="w-100 p-2"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#addMesurement"
                        aria-controls="addMesurement"
                      >
                        Add Measurement
                      </button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label className="inputa w-25 m-0">
                      <input
                        className="input__field border-end-0"
                        type="text"
                        placeholder=" "
                        value="42"
                      />
                      <span className="input__label">Sleeve (Inches)</span>
                    </label>
                    <div className="input-group-append w-75 customize-btn rounded-end">
                      <button
                        className="w-100 p-2"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#addMesurement"
                        aria-controls="addMesurement"
                      >
                        Add Measurement
                      </button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label className="inputa w-25 m-0">
                      <input
                        className="input__field border-end-0"
                        type="text"
                        placeholder=" "
                        value="42"
                      />
                      <span className="input__label">Sleeve (Inches)</span>
                    </label>
                    <div className="input-group-append w-75 customize-btn rounded-end">
                      <button
                        className="w-100 p-2"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#addMesurement"
                        aria-controls="addMesurement"
                      >
                        Add Measurement
                      </button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label className="inputa w-25 m-0">
                      <input
                        className="input__field border-end-0"
                        type="text"
                        placeholder=" "
                        value="42"
                      />
                      <span className="input__label">Sleeve (Inches)</span>
                    </label>
                    <div className="input-group-append w-75 customize-btn rounded-end">
                      <button
                        className="w-100 p-2"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#addMesurement"
                        aria-controls="addMesurement"
                      >
                        Add Measurement
                      </button>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label className="inputa w-25 m-0">
                      <input
                        className="input__field border-end-0"
                        type="text"
                        placeholder=" "
                        value="42"
                      />
                      <span className="input__label">Sleeve (Inches)</span>
                    </label>
                    <div className="input-group-append w-75 customize-btn rounded-end">
                      <button
                        className="w-100 p-2"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#addMesurement"
                        aria-controls="addMesurement"
                      >
                        Add Measurement
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div className="section-footer" id="measureMentTab">
          <Link to="/productCustomize3" type="button" className="next-btn button">Next</Link>
          <div
            className="offcanvas offcanvas-bottom bg-dark"
            tabindex="-1"
            id="addMesurement"
            aria-labelledby="addMesurementLabel"
          >
            <div className="offcanvas-header border-bottom py-1">
              <h5 className="text-white" style={{ fontFamily: "var(--lg-font)" }} id="addMesurementLabel">
                Necks (Inches)
              </h5>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body small bg-white shadow-sm">
              <div className="border" style={{ height: "215px", width: "fit-content", margin: "auto" }}>
                <img
                  src="https://cdn11.bigcommerce.com/s-rv7a5cckjq/product_images/uploaded_images/measure-neck.jpg?t=1552584658&_ga=2.108566146.185726824.1552313597-1603589928.1551783362/"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                  className=""
                />
              </div>
              <div style={{ width: "fit-content" }} className="m-2">
                <img
                  src="https://cdn.shopify.com/s/files/1/0415/7737/files/BW_Womens_Measuring_Guide-19_large.jpg?2939959681708555958"
                  alt=""
                  className="p-2 border"
                  width="100"
                  height="100"
                />
                <img
                  src="https://www.wikihow.com/images/thumb/d/df/Calculate-Body-Fat-With-a-Tape-Measure-Step-1-Version-3.jpg/aid1450359-v4-728px-Calculate-Body-Fat-With-a-Tape-Measure-Step-1-Version-3.jpg"
                  alt=""
                  className="p-2 border"
                  width="100"
                  height="100"
                />
              </div>
              <div className="ms-3 mt-1 text">
                <p className="head m-0">Instruction</p>
                <ul>
                  <li>
                    <p className="desc m-0">
                      Run the measuring around your neck where the collar normally rests. To give
                      you an idea it is normally bellow Adam's apple and adove the collar bone
                    </p>
                  </li>
                  <li>
                    <p className="desc m-0">
                      Put one finger between the measuring tape and neck to make sure it is not too
                      tight and take the measurement.
                    </p>
                  </li>
                </ul>
              </div>
              <label className="inputa w-100">
                <input className="input__field" type="text" placeholder="Type your value here" />
                <span className="input__label">Sleeve (Inches)</span>
              </label>
              <div className="input-group-append customize-btn rounded">
                <button
                  className="w-100 p-2"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#addMesurement"
                  aria-controls="addMesurement"
                >
                  Add Measurement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductCustomize2;