import React from 'react'
import SmallNav from '../components/indexPage/smallNav';

const MyAccountPayment = () => {
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
        <a href="myaccount.html"><i className="fa fa-angle-left fa-fw"></i>Back To My Account</a>
      </div>
      <div className="mainHeading">
        <div className="headingInner">
          <h1>My Payments</h1>
          <div></div>
        </div>
      </div>
    </div>
    <div className="p-4"></div>
    <div className="container">
      <div className="card p-4 paymentCard">
        <div className="card-body">
          <span>debit/credit card</span>
          <div href="#" className="d-flex border rounded p-4" style={{ alignItems: "center" }}>
            <div className="paymentImage me-4">
              <img src="https://images.bewakoof.com/web/no-card-1611246110.png" alt="" />
            </div>
            <p className="m-0">No Debit/Credit Card saved</p>
          </div>
          <div className="p-4"></div>
          <span>upi</span>
          <a
            href="#"
            className="d-flex border rounded p-4"
            style={{ alignAtems: "center", textDecoration: "none" }}
          >
            <div className="paymentImage me-4">
              <img src="https://images.bewakoof.com/web/upi-logo.png" alt="" />
            </div>
            <p className="m-0">Add UPI ID</p>
          </a>
        </div>
      </div>
    </div>
    {/* <!-- section part --> */}

    <footer className="fixed-bottom bg-dark text-white text-center">@copyrights name</footer>
    </>
  )
}

export default MyAccountPayment;