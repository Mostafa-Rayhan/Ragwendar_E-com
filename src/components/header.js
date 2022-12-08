import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/style.css"
import pharmacy from "../assets/img/logo.png"
import axiosInstance from '../axios';
import TopNavbar from './TopNavbar';

function Header() {

  const [category, setCategory] = useState([])
  const [category2, setCategory2] = useState([])
  const [filteredCategory, setFilteredCategory] = useState(1)
  const [filtered2Category, setFiltered2Category] = useState()

  useEffect(() => {
    axiosInstance.get("/category")
      .then(data => {
        // const filterCategory = data.data.filter(c => c.parent_id == 0)
        setCategory(data.data);
      })
      .catch(err => {
        console.log(err);
      })

  }, [])


  const mainCategory = (id) => {
    setFilteredCategory(id)

  }


  return (
    <section>
      <div class="sticky-top" >

        <TopNavbar />

        <nav className="navbar navbar-expand-lg bg-white shadow-sm py-0 pt-1">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
              <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation"
                className="navbar-toggler border-0 d-md-none order-0">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>

              <a href="index.html" className="navbar-brand brand-style">
                <img src={pharmacy} alt="e-Pharmacy"
                  height="30" srcset="" className="d-inline-block align-text-top logo-navbar order-md-1 order-1" />
              </a>

              <div className="menus order-md-2 order-3" style={{ overflow: "auto" }}>
                <div className="header-nav d-flex">
                  {
                    category?.map((c, index) => {
                      if (c.parent_id == 0) {
                        return (

                          <a className="text-decoration-none text-uppercase tab-man text-center mx-2 active cursor-pointer" aria-current="page" onClick={() => { mainCategory(c.category_id) }}
                          >{c.name}</a>


                        )

                      }

                    })
                  }

                  {/* <a className="text-decoration-none text-uppercase tab-man text-center mx-2 active" aria-current="page"
                    href="#">Man</a>
                  <a className="text-decoration-none text-uppercase tab-woman text-center mx-2" aria-current="page"
                    href="#">Women</a>
                  <a className="text-decoration-none text-uppercase tab-kids text-center mx-2" aria-current="page"
                    href="#">Kids</a>
                  <a className="text-decoration-none text-uppercase tab-accessories text-center mx-2" aria-current="page"
                    href="#">Accessories</a>  */}
                </div>
              </div>

              <div className="d-flex align-items-center order-md-3 order-2">
                <div className="d-none d-md-inline">
                  <div className="input-group">
                    <span className="input-group-text"><i className='bx bx-search-alt-2'></i></span>
                    <input className="form-control inputb" type="search" placeholder="Search for products..."
                      aria-label="Search" />
                  </div>
                </div>
                <div className="m-3 vr d-none d-md-inline"></div>
                <ul className="navbar-nav">
                  <li className="nav-item">


                    <button type="button" className="loginBtn" data-bs-toggle="modal" data-bs-target="#loginmodal">
                      Login
                    </button>

                    <button type="button" className="loginBtn signUpBtn" data-bs-toggle="modal" data-bs-target="#signupmodal">
                      Sign up
                    </button>

                    <a className="p-1 btn d-md-none" href="#">
                      <span className="p-1 btn-link"><i className="fa fa-search" style={{ fontSize: "20px" }}></i> </span>
                    </a>
                    <a className="p-1 btn" href="#">
                      <span className="position-relative"><i className="bx bx-heart fs-4" style={{ fontSize: "20px" }}></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
                          style={{ fontSize: "10px" }}>9</span></span>
                    </a>
                    <Link className="p-1 btn" to="cart">
                      <span className="position-relative"><i className="bx bx-cart fs-4" style={{ fontSize: "20px" }}></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
                          style={{ fontSize: "10px" }}>9</span></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="container-fluid bg-light">
          <div className="sub-header-nav justify-content-center d-none d-md-flex" id="navbarExample4">


            {
              category?.map((c, index) => {
                if (c.parent_id == filteredCategory) {
                  return (
                    <a className="sub-menu text-decoration-none text-uppercase text-center mx-2 sp" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#"
                      onClick={() => { setFiltered2Category(c.category_id) }}>{c.name}</a>

                  )

                }

              })
            }
            {/* <a className="sub-menu text-decoration-none text-uppercase text-center mx-2 sp" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" href="#">Self</a>
            <a className="sub-menu text-decoration-none text-uppercase text-center mx-2" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" href="#">New In</a>
            <a className="sub-menu text-decoration-none text-uppercase text-center mx-2" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" href="#">All Clothing</a>
            <a className="sub-menu text-decoration-none text-uppercase text-center mx-2" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" href="#">Plus</a>
            <a className="sub-menu text-decoration-none text-uppercase text-center mx-2" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" href="#">Men</a>
            <a className="sub-menu text-decoration-none text-uppercase text-center mx-2" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" href="#">Men Fasion</a>
            <a className="sub-menu text-decoration-none text-uppercase text-center mx-2" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" href="#">Summer Men</a>
            <a className="sub-menu text-decoration-none text-uppercase text-center mx-2" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" href="#">Men Out Fit</a>
            <a className="sub-menu text-decoration-none text-uppercase text-center mx-2" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" href="#">All Men</a>
            <a className="sub-menu text-decoration-none text-uppercase text-center mx-2" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" href="#">Regional</a> */}


            <div className="dropdown-menu cCuVas w-100 m-0" aria-labelledby="navbarDropdown"
              style={{ borderTopLeftRadius: "0", borderTopRightRadius: "0" }}>
              <div className="container">
                <div className="d-md-flex d-sm-block my-3 justify-content-evenly">

                  {/* {
              category?.map((c, index) => {
                if (c.parent_id == filteredCategory) { 
                  return (
                    <></>

                  )

                }

              }) 
            } */}
                  <div className=" mb-3 mb-xl-0">
                    <a className="mega-menu-s" href="">View All</a>

                    {
                      category?.map((c, index) => {
                        if (c.parent_id == filtered2Category) {
                          return (
                            <a className="mega-menu-s mt-4" href="">{c.name}</a> 

                          )

                        }

                      })
                    }

                    <a className="mega-menu-s mt-4" href="">New in</a>

                    <a className="mega-menu-s mt-4" href="">Top Rated</a>

                    <a className="mega-menu-s mt-4" href="">Tops</a>
                    <a className="mega-menu-a mt-2" href="">Tees & Tank</a>
                    <a className="mega-menu-a mt-2" href="">Shirts</a>
                    <a className="mega-menu-a mt-2" href="">Polo Shirts</a>

                    <a className="mega-menu-s mt-4" href="">Bottoms</a>
                    <a className="mega-menu-a mt-2" href="">Pants</a>
                    <a className="mega-menu-a mt-2" href="">Sweatpants</a>
                    <a className="mega-menu-a mt-2" href="">Shorts</a>
                  </div>
                  <div className=" mb-3 mb-xl-0">
                    <a className="mega-menu-s" href="">Two Piece Sets</a>

                    <a className="mega-menu-s mt-4" href="">Denim</a>
                    <a className="mega-menu-a mt-2" href="">Denim Jackets</a>
                    <a className="mega-menu-a mt-2" href="">Jeans</a>
                    <a className="mega-menu-a mt-2" href="">Denim Shirts</a>
                    <a className="mega-menu-a mt-2" href="">Denim Shorts</a>

                    <a className="mega-menu-s mt-4" href="">Hoodies & Sweatshirts</a>
                    <a className="mega-menu-a mt-2" href="">Sweatshirts</a>
                    <a className="mega-menu-a mt-2" href="">Hoodies</a>

                    <a className="mega-menu-s mt-3" href="">Swimwear</a>
                    <a className="mega-menu-s mt-3" href="">Lookbook</a>
                  </div>
                  <div className=" mb-3 mb-md-0">
                    <a className="mega-menu-s" href="">Underware & Loungewear</a>
                    <a className="mega-menu-a mt-2" href="">Men Loungewear Robes</a>
                    <a className="mega-menu-a mt-2" href="">Men Underware</a>
                    <a className="mega-menu-a mt-2" href="">Men Loungewear Bottoms</a>
                    <a className="mega-menu-a mt-2" href="">Men Loungewear Sets</a>
                    <a className="mega-menu-a mt-2" href="">Men Loungewear Onepieces</a>
                    <a className="mega-menu-a mt-2" href="">Men Loungewear Tops</a>
                    <a className="mega-menu-a mt-2" href="">Men Socks</a>

                    <a className="mega-menu-s mt-4" href="">Knitwear</a>
                    <a className="mega-menu-s mt-4" href="">Outerwear</a>
                    <a className="mega-menu-s mt-4" href="">activewear</a>
                    <a className="mega-menu-s mt-4" href="">Suits & Separates</a>
                  </div>
                  <div className="mb-3 mb-md-0">
                    <a className="mega-menu-s" href="">Collection</a>
                    <a className="mega-menu-e mt-2" href="">Shein Basics</a>
                    <a className="mega-menu-e mt-2" href="">Shein Unisex</a>
                    <a className="mega-menu-e mt-2" href="">Y2k Rewind</a>
                    <a className="mega-menu-e mt-2" href="">Youth Parade</a>
                    <a className="mega-menu-e mt-2" href="">Gentleman</a>
                    <a className="mega-menu-e mt-2" href="">Modern Business</a>
                    <a className="mega-menu-e mt-2" href="">Extended Sizes</a>
                    <a className="mega-menu-e mt-2" href="">Sportlife</a>
                    <a className="mega-menu-e mt-2" href="">Swag City</a>
                  </div>

                  <div className="mb-3 mb-md-0">
                    <div className="d-flex">
                      <a href="" className="p-1">
                        <img src="https://images.bewakoof.com/uploads/grid/app/buy-3-men-oof-1641996155.jpg" height={120}
                          alt="" />
                      </a>
                      <a href="" className="p-1">
                        <img src="https://images.bewakoof.com/uploads/grid/app/buy-3-men-oof-1641996155.jpg" height={120}
                          alt="" />
                      </a>
                    </div>
                    <div className="d-flex">
                      <a href="" className="p-1">
                        <img src="https://images.bewakoof.com/uploads/grid/app/buy-3-men-oof-1641996155.jpg" height={120}
                          alt="" />
                      </a>
                      <a href="" className="p-1">
                        <img src="https://images.bewakoof.com/uploads/grid/app/buy-3-men-oof-1641996155.jpg" height={120} alt="" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="offcanvas offcanvas-start" style={{ width: "270px" }} tabindex="-1" id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Welcome Guest
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body p-0">
            <div className="border-bottom p-2 mx-2 d-flex justify-content-start">
              {/* <a href="" className="text-decoration-none">Login</a>
              <a href=" " className="text-decoration-none">Sign up</a>  */}
              <button type="button" className="loginBtn" data-bs-toggle="modal" data-bs-target="#loginmodal">
                Login
              </button>

              <button type="button" className="loginBtn signUpBtn" data-bs-toggle="modal" data-bs-target="#signupmodal">
                Sign up
              </button>
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
      </div>
    </section>


  )
}

export default Header;
