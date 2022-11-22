import React from 'react'
import { Link } from 'react-router-dom';

const ProductCustomize3 = () => {
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

    <div className="container p-3">
      <div className="customize-wrapper">
        <div className="nav-progress">
          <ul className="progressbar">
            <li className="completed">Pick Color</li>
            <li className="completed">Size</li>
            <li className="active">Design</li>
            <li className=" ">Preview</li>
          </ul>
        </div>
        <div className="section-body" style={{ overflow: "hidden" }}>
          <div className="wrap">
            <div className="main-tab d-flex justify-content-between">
              <button
                className="tab-btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#textCanvas"
                aria-controls="textCanvas"
              >
                <img
                  height="27"
                  src="https://images.bewakoof.com/web/tab-font--1629301087.png"
                  alt="Add Text"
                />
                <p>Add Text</p></button
              ><button
                className="tab-btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#uploadCanvas"
                aria-controls="uploadCanvas"
              >
                <img
                  height="27"
                  src="https://images.bewakoof.com/web/Camera-1631084161.png"
                  alt="Upload"
                />
                <p>Upload</p></button
              ><button
                className="tab-btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#galaryCanvas"
                aria-controls="galaryCanvas"
              >
                <img
                  height="27"
                  src="https://images.bewakoof.com/web/Gallery-1631084095.png"
                  alt="Gallery"
                />
                <p>Gallery</p>
              </button>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center cvp"
            style={{ position: "fixed", left: "0", right: "0", minHeight: "587px" }}
          >
            <div>
              <div className="canvas-wrap" id="capture">
                <div
                  id="final-img"
                  className="d-flex"
                  style={{ width: "480px", height: "480px", position: "relative" }}
                >
                  <button className="flip-btn z-99" onclick="capture()">
                    <img
                      src="https://images.bewakoof.com/web/flipImage-1629802868.png"
                      alt="flip image"
                    />Flip
                  </button>
                  <img
                    id="timg"
                    width="100%"
                    height="100%"
                    alt=""
                    src="https://images.bewakoof.com/web/white-front-v2-1646400293.jpg"
                  />
                  <div className="z-99" style={{ position: "absolute", top: "103px", left: "127px" }}>
                    <canvas
                      id="drawItem"
                      className="lower-canvas"
                      width="270"
                      height="303.75"
                      style={{
                        border: "1px dashed rgb(151, 151, 151)",
                        position: "absolute",
                        width: "216px",
                        height: "243px",
                        left: "0px",
                        top: "0px",
                        touchAction: "none",
                        userSelect: "none"
                        }}
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <script>
          // function capture() {
          //   html2canvas(document.querySelector('.canvas-wrap')).then(function (canvas) {
          //     // document.body.appendChild(canvas);
          //     return Canvas2Image.saveAsPNG(canvas);
          //   });
          // }
        </script> */}
        <div className="section-footer" id="canvasTab">
          <Link to="/productCustomize4" type="button" className="next-btn button">Next</Link>
          {/* <!-- Image offcanvas --> */}
          <div
            className="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="uploadCanvas"
            aria-labelledby="uploadCanvasLabel"
            style={{}}
          >
            <div className="offcanvas-header">
              <h5 className="" id="uploadCanvasLabel"></h5>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body small bg-white shadow-sm">
              <label className="upld-wrap d-flex align-items-center">
                <input
                  className="d-none formInput"
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, image/heic"
                />
                <img
                  width="35"
                  height="35"
                  src="https://images.bewakoof.com/web/tab-image-upload-1629301087.png"
                  alt="image upload"
                />
                <div className="ms-3 mt-1 text">
                  <p className="head m-0">Upload an image to place it on t-shirt</p>
                  <p className="desc m-0">Max. size should be 10 MB</p>
                </div>
              </label>
            </div>
          </div>
          {/* <!-- Text offcanvas --> */}
          <div
            className="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="textCanvas"
            aria-labelledby="textCanvasLabel"
            style={{}}
          >
            <div className="offcanvas-header">
              <h5 className="" id="textCanvasLabel"></h5>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body small bg-white shadow-sm">
              <label className="upld-wrap d-flex align-items-center">
                <input
                  className="d-none formInput"
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, image/heic"
                />
                <img
                  width="35"
                  height="35"
                  src="https://images.bewakoof.com/web/tab-image-upload-1629301087.png"
                  alt="image upload"
                />
                <div className="ms-3 mt-1 text">
                  <p className="head m-0">Upload an image to place it on t-shirt</p>
                  <p className="desc m-0">Max. size should be 10 MB</p>
                </div>
              </label>
            </div>
          </div>
          {/* <!-- Galary offcanvas --> */}
          <div
            className="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="galaryCanvas"
            aria-labelledby="galaryCanvasLabel"
            style={{}}
          >
            <div className="offcanvas-header">
              <h5 id="galaryCanvasLabel"></h5>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body small bg-white shadow-sm">
              <div className="container-fluid">
                <p className="headingGalary">Pick from These Trendy Images</p>
                <div className="row">
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/sports.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/virat.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/Don't-Look-Back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/msd/MSD-Forever_back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/sports.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/virat.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/Don't-Look-Back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/msd/MSD-Forever_back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/sports.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/virat.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/Don't-Look-Back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/msd/MSD-Forever_back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/sports.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/virat.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/Don't-Look-Back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/msd/MSD-Forever_back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/virat.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/Don't-Look-Back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductCustomize3;