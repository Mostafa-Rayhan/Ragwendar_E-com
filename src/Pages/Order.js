import React from 'react'


// import styles from './src/Pages/order.module.css'; 

const Order = () => {
  return (
    


    <>
    {/* Navbar */}

    <nav classNames="d-none d-md-block" id="tab-color" color="blue">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="nav-tab-color nav-font w-50 d-flex justify-content-between align-items-center ">
            <a href="" className="text-reset text-decoration-none p-2 top-h-i">
              <i className='bx bx-map'></i> YOUR LOCATION</a>
            <div className="d-flex text-center">
              <a href="/index.html" className="text-reset text-decoration-none pt-2 px-3 btn-tab active top-h">
                <h5 className="m-0">YOUR TAILOR</h5><span>Custom Products</span>
              </a>
              <a href="/index-2.html" className="text-reset text-decoration-none pt-2 px-3 btn-tab-2 top-h ">
                <h5 className="m-0">SHOP</h5><span>Ready Products</span>
              </a>
            </div>
          </div>
          <div className="nav-tab-color">
            <a href="" className="text-reset text-decoration-none p-2"><i className='bx bx-mobile'></i> DOWNLOAD APP</a>
            <a href="" className="text-reset text-decoration-none p-2">HELP</a>
          </div>
        </div>
      </div>
    </nav>

    {/* // <!-- ==========================
    //             User Name
    // ========================== --> */}

    <section>
        <div className="container mt-3 mb-3">
            <h6 className="text-end">USER NAME V</h6>
        </div>
        <hr />
    </section>

    {/* //  <!-- ==========================
    //             Payment
    // ========================== --> */}

    <section>
        <div className="container mb-3">
            <div className="row g-2">
              <div className="col-md-8">
                <div className="p-3 border">
                    <div className="row g-2">
                        <div className="col-md-6">
                        <div className="p-3">
                            <p>Men's Blue T-Shirt</p>    
                            <p><b>₹349</b>  <strike>₹1199</strike></p>
                            <p style={{ color: "green" }}>You Saved ₹850!</p>


                            <div className="row g-2">
                                <div className="col-md-3">
                                  <select className="form-select" aria-label="Default select example">
                                        <option selected>Size:L</option>
                                        <option value="1">L</option>
                                        <option value="2">M</option>
                                        <option value="3">XL</option>
                                        <option value="4">XXL</option>
                                    </select>
                                </div>

                                <div className="col-md-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Qty:1</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                      </div>
                      <div className="col-md">
                        <div className="p-3 text-end">
                            <img src="./assets/img/order/best-seller.png" style={{ borderRadius: "8px" }} height="150px" width="100px" alt="" />
                        </div>
                      </div>
                    </div>
                    
                </div>


                {/* <!-- payment system start  --> */}


                <div className="p-3 border mt-2">
                  <h5>Choose your payment method</h5>
                  <div className="container overflow-hidden">
                      <div className="row gx-5">

                        <div className="col-md-4 tns">
                         <div className="p-3 bg-light">
                          <p><i className="fa-solid fa-credit-card"></i> <b> Debit/Credit Card</b></p>
                          <hr />
                          <p><i className="fa-solid fa-wallet"></i> Wallet</p>
                          <hr />
                          <p><i className="fa-solid fa-play"></i> UPI</p>
                          <hr />
                          <p><i className="fa-solid fa-building-columns"></i> Net banking</p>
                          <hr />
                          <p><i className="fa-solid fa-indian-rupee-sign"></i> Cash On Delivery</p>
                          <hr />
                          <p><i className="fa-solid fa-credit-card"></i> Buy Now Pay Later</p>
                         </div>
                        </div>

                        <div className="col-md-8 trns">
                          <div className="p-3 icon-design">
                              <div className="">
                                  <i className="fa-brands fa-cc-visa" style={{ marginRight: "5px" }}></i>
                                  {/* <!-- <img src="https://img.icons8.com/ios-filled/50/000000/rupay.png"/> --> */}
                                  <i  className="fa-brands fa-cc-paypal" style={{ marginRight: "5px" }}></i>
                                  <i className="fa-brands fa-cc-mastercard"></i>

                              </div>
                              <div>
                                  <div className="mb-3">
                                      {/* <!-- <label for="formGroupExampleInput" className="form-label">Example label</label> --> */}
                                      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Card Number" />
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <input type="text" className="form-control" placeholder="Valid through (MM/YY)" aria-label="MM" />
                                      </div>
                                      <div className="col mb-3">
                                        <input type="text" className="form-control" placeholder="CVV" aria-label="cvv" />
                                      </div>
                                    </div>
                                    <div className="mb-3">
                                      {/* <!-- <label for="formGroupExampleInput" className="form-label">Example label</label> --> */}
                                      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name on card" />
                                    </div>
                                    <div className="col-12">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" for="gridCheck">
                                          <b>Save card details for later</b> 
                                        </label>
                                      </div>
                                          <p>This transaction you make is totally secure. You don't save your CVV number.</p>
                                      </div>
                                      <div className="d-grid gap-2">
                                          <button className="btn btn-lg" style={{ backgroundColor: "#e6e6fa" }} type="button">Pay ₹379</button>
                                      </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                           
              </div>
                {/* <!-- payment system end  --> */}
              </div>


              
            {/* <!-- ==========================
                        Coupon
            ========================== --> */}

              <div className="col-md-4">
                <div className="p-3 border">
                    <p><img src="./assets/img/order/icons8-coupon-64.png" height="25px" width="30px" alt="" /> Have a coupon/referral code?</p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control bg-light" placeholder="Enter Code" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-secondary" style={{ backgroundColor: "#32c1c0" }}  type="button" id="button-addon2">Apply</button>
                    </div>

                </div>

              {/* <!-- ================================ -->
                          Product Details
              <!-- ================================ --> */}

              <div className="p-3 border mt-3 dsn">
                <p>PRODUCT DETAILS</p>
                <hr />
                <div className="row">
                    <div className="col-9">
                        <p>Total MRP (inc. of Taxes)</p>
                    </div>
                    <div className="col-3">
                        ₹549
                    </div>
                </div>

                <div className="row">
                  <div className="col-9">
                      <p>Beyoun Discount</p>
                  </div>
                  <div className="col-3">
                    -₹190
                  </div>
                </div>

                <div className="row">
                  <div className="col-9">
                      <p>Shipping</p>
                  </div>
                  <div className="col-3" style={{ color: "green" }}>
                    Free
                  </div>
                </div>

                <div className="row">
                  <div className="col-9">
                      <p>Cart Total</p>
                  </div>
                  <div className="col-3">
                    ₹359
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-9">
                      <p><b>Total Amount</b></p>
                  </div>
                  <div className="col-3">
                    <b>₹359</b>
                  </div>
                </div>
                {/* <!-- <p> <span className="text-end "> <span></p> --> */}
                
                
                <div className="d-grid gap-2">
                    <button className="btn btn-success" type="button">You Saved ₹190 on this order</button>
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-lg" style={{ backgroundColor: "#22263b", color: "white" }} type="button">PLACE ORDER</button>
                </div>
              </div>
                          


              </div>            
              
            </div>
          </div>
    </section>
    </>
  )
}

export default Order;