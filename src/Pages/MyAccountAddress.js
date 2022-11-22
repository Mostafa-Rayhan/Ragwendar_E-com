import React from 'react'
import { Link } from 'react-router-dom';
import SmallNav from '../components/indexPage/smallNav';

const MyAccountAddress = () => {
  return (
    <>
    <SmallNav />
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

    <div className="container pt-5">
      <div className="row pb-5 bakToMyorder">
        <Link to="/myAccount"><i className="fa fa-angle-left fa-fw"></i>Back To My Account</Link>
      </div>
      <div className="mainHeading">
        <div className="headingInner">
          <h1>My Address</h1>
          <div></div>
        </div>
      </div>
    </div>
    <div className="p-4"></div>
    <div className="container">
      <div className="row optionRow">
        <div
          className="emptycartwish emptyPage d-flex justify-content-center"
          style={{ padding: "10px 0px 0px" }}
        >
          <div>
            <div className="clearfix pb-2" style={{ color: "rgba(24, 24, 24, 0.6)", fontSize: "20px" }}>
              Sadly, you haven't placed any orders till now.
            </div>
            <img
              src="https://images.bewakoof.com/sizeguide/no-orders.png"
              title="Empty Cart Page Doodle"
              alt="Empty Cart Page Doodle"
              width="150px"
            />
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
                    textTecoration: "none"
                  }}
                >Continue Shopping</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- section part --> */}

    <footer className="fixed-bottom bg-dark text-white text-center">@copyrights name</footer>
    </>
  )
}

export default MyAccountAddress;