import React from 'react'
import { Link } from 'react-router-dom';
import SmallNav from '../components/indexPage/smallNav';

const MyProfile = () => {
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
          <h1>My Profile</h1>
          <div></div>
        </div>
      </div>
    </div>
    <div className="p-4"></div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-5">
          <form action="">
            <form name="profileForm" className="accProfileForm" autocomplete="off" novalidate="">
              <div className="row">
                <div className="col-xs-12 col-sm-6 noPd">
                  <div className="inputgroup">
                    <input type="text" name="fname" maxlength="71" value="Reshav" /><span
                      className="bar"
                    ></span
                    ><label>First Name</label>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 noPdRight noPdXs">
                  <div className="inputgroup">
                    <input type="text" name="lname" /><span className="bar"></span
                    ><label>Last Name</label><span className="msgs visible-xs"></span>
                  </div>
                </div>
              </div>

              <div className="inputgroup">
                <input type="email" name="email" readonly="" value="rexnworld@gmail.com" /><span
                  className="bar"
                ></span
                ><label for="email">Email Id</label>
              </div>
              <div className="col-xs-12 col-sm-6 noPd">
                <div className="inputgroup" style={{ marginBottom: "60px" }}>
                  <input readonly="" value="******" style={{ letterSpacing: "2px" }} /><span
                    className="bar"
                  ></span
                  ><label>Password</label
                  ><a className="inputHelp" aria-current="false" href="#ChangePassword"
                    >Change Password</a
                  >
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 noPd clearLeft">
                <div className="inputgroup verifyPhoneInput veryfyMobileOuter">
                  <input
                    type="tel"
                    name="mobile"
                    maxlength="10"
                    readonly=""
                    value="9614464595"
                  /><span className="bar"></span><span className="countryCode">+91<span>|</span></span
                  ><label for="mobile">Phone Number</label>
                  <div className="verifyMobileBox veryfyMobile">
                    <p><i className="fa fa-check text-white" aria-hidden="true"></i></p>
                  </div>
                  <div className="inputHelp" style={{ cursor: "pointer" }}>Change Mobile Number</div>
                </div>
              </div>
              <div className="inputgroup" style={{ marginBottom: "60px" }}>
                <input
                  className=""
                  type="date"
                  name="date_of_birth"
                  id="DD/MM/YYYY"
                  value=""
                  style={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                    height: "25px"
                  }}
                /><span className="bar"></span
                ><span className="msgs"
                  ><div style={{ marginBottom: "10px" }}>
                    <span
                      className="msgs"
                      style={{ whiteSpace: "pre-wrap", position: "unset", fontSize: "10px" }}
                      >Share your DOB to get special gifts or offers on your special day</span
                    >
                  </div></span
                >
              </div>
              <div className="genderTabBox clearfix">
                <span className="addrTypeTitle">Gender</span>
                <div className="addrTypeList">
                  <div className="addrSubType">
                    <input type="radio" name="gender" id="male" value="male" /><label
                      for="male"
                      className="active"
                      >Male</label
                    >
                  </div>
                  <div className="addrSubType">
                    <input type="radio" name="gender" id="female" value="female" /><label
                      for="female"
                      className=""
                      >Female</label
                    >
                  </div>
                  <input type="hidden" value="" />
                </div>
              </div>
              <div className="wtsapp-tgl">
                <div className="selectCheckbox selectCustomCheckbox selectCheckbox-blue">
                  <input type="radio" style={{ opacity: "0" }} /><label></label>
                </div>
                <span>I want to receive order updates on Whatsapp</span>
              </div>
              <button type="submit" className="submit">SAVE CHANGES</button>
            </form>
          </form>
        </div>
      </div>
    </div>
    {/* <!-- section part --> */}

    <footer className="sticky-top bg-dark text-white text-center">@copyrights name</footer>
    </>
  )
}

export default MyProfile;