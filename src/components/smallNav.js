import React from 'react'

const SmallNav = () => {
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
    </>
  )
}

export default SmallNav;