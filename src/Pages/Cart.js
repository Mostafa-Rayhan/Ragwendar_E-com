import React, { useEffect, useState } from 'react'
import TopNavbar from '../components/TopNavbar';

const data =
  [
    {
      id: 1,
       name: "Bewakoof",
      image: "https://images.bewakoof.com/t320/ice-water-blue-half-sleeve-t-shirt-men-s-plain-t-shirts-315183-1617628301.jpg",
      price: 500,
      discount: 20,
      sold: 30,
      title:"Ice Water Blue Half Sleeve T-shirt",
      description: "Ice Water Blue Half Sleeve T-shirt",

    },
    {
      id: 2,
       name: "Bewakoof",
      image: "https://images.bewakoof.com/t320/ice-water-blue-half-sleeve-t-shirt-men-s-plain-t-shirts-315183-1617628301.jpg",
      price: 600,
      discount: 20,
      sold: 50,
      title:"Ice Water Blue Half Sleeve T-shirt",
      description: "Customizable men's neck T shirt",

    },

  ]

const Cart = () => {

    const [products, setProducts] = useState([]) 
    const [shipping, setShipping]=useState(0)
    const [quantity, setQuantity]=useState([])

    useEffect(() => {
      setProducts(data)
    }, [])

    const totalPrice=(allProducts)=>{
        let prices=0
        allProducts.forEach(element => {
            prices=prices + element.price
            
        });
        return prices 
    }

    const discount=(allProducts)=>{
        let totalDiscount=0
        allProducts.forEach(element => {
            totalDiscount=totalDiscount + element.price*element.discount/100 
            
        });
        return totalDiscount ;
    }

    const getProductQuantity=(e, id)=>{
        // const newQuantity=e.target.value ;
        // const prevQuantity=quantity.find(q=>q.id==id)
        // if(prevQuantity){
        //     const remaining= quantity.filter(q=>q.id==id)
        //     const newQ={
        //         id:id,
        //         quantity:newQuantity
        //     }
        //     setQuantity([...remaining,newQ ])
        // }
        // else{
        //     const newQ={
        //         id:id,
        //         quantity:newQuantity
        //     }
        //     setQuantity([...quantity,newQ ])

        // }

        console.log(id);  

    }
    console.log(quantity); 

    return ( 
        <section>
            <div className="sticky-top">
                <TopNavbar />
                {/* <!-- Responsve --> */}
            </div>
            {/*  <!-- section part --> */}
            <div className="container">
                <p id="total-items-cart">My Bag 0 item(s)</p>
                <div className="p-4"></div>
                <div className="row p-0 m-0">
                    <div className="col-md-7 col-sm-12 m-0">
                        {/* <!-- <div className="df-wrap">
                <div className="df-inner" style="background-color: rgb(252, 255, 238); height: 50px">
                <img
                    className="truckmove df-img"
                    src="https://images.bewakoof.com/web/Red-truck.png"
                    alt="truck"
                    style="width: 19px; height: 12px; animation-duration: 2s"
                />
                <p className="pt-3" style="font-size: 12px; color: black; font-family: Montserrat">
                    Shop for <strong>₹50</strong> more to get <strong>FREE delivery</strong>!
                </p>
                </div>
            </div> --> */}

            {
                products?.map(p=>{
                    return(
                        <>
                        <div className="card p-3 pb-0 cardMedia mb-2">
                            <div className="card-body p-0">
                                <div className="prod-row">
                                    <div className="cartProdText">
                                        <span
                                        ><a
                                            className="uAdRROcivfJ5x1Rmvq1zZpZ5huFzyNmdumlq32TDDQ"
                                            aria-current="false"
                                            href="p/plain-half-sleeves-t-shirt-men-blue-114?src=cart"
                                        >{p.description}</a>
                                        </span>
                                        <div className="vq3wCE45Mr1b clearfix">
                                            <span className="nCO9izgeR4DFi5JOQSiMUfkaYFW9qhpE9RF3gpleowQ"><b>₹{p.price - p.price*p.discount/100}</b></span>
                                            <span className="AS6Jdr40MwTS">₹{p.price}</span>
                                        </div>
                                        <div className="Ad6f">You saved ₹{p.price*p.discount/100}!</div>
                                        <div className="KwIyuQ9G6E8ljOqwgozK6cup8Wa6NjVritWt844">
                                            <div className="fY9jTItCuJ9wIqYrPGZVU">
                                                <div className="CQ8wzZnxMzMzFcX1PFmTQqQXcedWShB49x8OPp38JY me-2">
                                                    <select className="form-select" aria-label="Selct size">
                                                        <option selected>Size</option>
                                                        <option value="S">S</option>
                                                        <option value="M">M</option>
                                                        <option value="L">L</option>
                                                        <option value="XL">XL</option>
                                                        <option value="2XL">2XL</option>
                                                        <option value="3XL">3XL</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="fY9jTItCuJ9wIqYrPGZVU">
                                                <div className="CQ8wzZnxMzMzFcX1PFmTQqQXcedWShB49x8OPp38JY">
                                                    <select className="form-select" aria-label="Selct size" onChange={()=>getProductQuantity(p.id)}>   
                                                        <option selected>Qty</option>
                                                        <option value="1">1</option> 
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- <div className="productPromoMsg pt-2">Hurry! Only 1 left!</div> --> */}
                                    </div>
                                    <div className="productImgTag">
                                        <a aria-current="false" href="p/plain-half-sleeves-t-shirt-men-blue-114?src=cart"
                                        ><img
                                                src={p.image}
                                                title={p.title}
                                                alt={p.title} 
                                            /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-white d-flex p-0">
                                <button className="rmv-action">Remove</button>
                                <button className="add-w-action">Move to Wishlist</button>
                            </div>
                        </div>
                        </>
                    )
                })
            }

                        
                         

                    </div>
                    <div className="col-md-5 col-sm-12 m-0">
                        {/* <!-- <button className="p-0 m-0 border-0 w-100 bg-white">
                <div className="cart-story-tribe" style="height: 50px">
                <div className="cart-story-tribe-text pt-3">
                    <p style="font-size: 14px; font-family: montserrat">
                    Save extra <strong style="font-family: montserrat-bold">₹60</strong> with TriBe
                    </p>
                </div>
                <div style="display: flex">
                    <div className="icon_next_one">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="icon_next_two">
                    <i className="fa fa-angle-right" aria-hidden="true" style="margin-left: -7px"></i>
                    </div>
                </div>
                </div>
            </button> --> */}
                        <div className="offerBox">
                            <div className="d-flex justify-content-start align-items-center mt-2 mb-2">
                                <img src="./assets/img/Screenshot_122.png" alt="" />
                                <p className="mb-0">Have a coupon/referral code ?</p>

                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control couponInput" placeholder="Enter code" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text couponBtn" id="basic-addon2">APPLY</span>
                            </div>
                        </div>

                        <div className="card cardMedia">
                            {/* <!-- <button className="p-2 m-0 border-0 w-100 bg-white">
                <div
                    className="cart-story-tribe px-3 m-0"
                    style="height: 32px; background-color: rgba(66, 162, 160, 0.1); color: #42a2a2"
                >
                    <div className="cart-story-tribe-text">
                    <small>Have a Coupon / Referral / Gift Card ?</small>
                    </div>
                    <div style="display: flex">
                    <div className="icon_next_one">
                        <span className="reedem-text">Redeem</span>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="icon_next_two">
                        <i className="fa fa-angle-right" aria-hidden="true" style="margin-left: -7px"></i>
                    </div>
                    </div>
                </div>
                </button> --> */}
                            {/* <!-- <div className="card-header border-0 border-top" style="font-weight: bold; font-size: 16px">
                <span className="reedem-heading">PRICE SUMMARY</span>
                </div> --> */}

                            <div className="card-body p-3">
                                <div>
                                    <h6 className="mb-2 fw-semibold">PRICE DETAILS</h6>
                                    <hr className="mb-4 mt-0" />
                                </div>
                                <div className="row container">
                                    <div className="d-flex justify-content-between p-2">
                                        <div className="summary_text">Total MRP (Incl. of taxes)</div>
                                        <div className="summary_text">₹ {totalPrice(products)}</div>
                                    </div>
                                    <div className="d-flex justify-content-between p-2">
                                        <div className="summary_text">Beyoung Discount</div>
                                        <div className="summary_text">- ₹ {discount(products)}</div> 
                                    </div>
                                    <div className="d-flex justify-content-between p-2">
                                        <div className="summary_text">Shipping</div>
                                        <div className="summary_text" style={{ color: "rgb(29, 136, 2)" }}>FREE</div>
                                    </div>
                                    <div className="d-flex justify-content-between p-2">
                                        <div className="summary_text">Cart Total</div> 
                                        <div className="summary_text">₹ {totalPrice(products) - discount(products)}</div>
                                    </div>
                                    <hr className="mb-0 pb-0" />
                                    <div className="d-flex justify-content-between p-2 pt-0 mb-4">
                                        <div className="summary_text fw-bold">Total Amount</div>
                                        <div className="summary_text fw-bold">₹ {totalPrice(products) - discount(products) + shipping}</div>
                                    </div>
                                </div>
                                <div className="row container ">
                                    <div
                                        className="col-12  mb-3 mt-2 savingLabel_cart"
                                        style={{ backgroundColor: "#4CAF53", color: "white" }}
                                    >
                                        You saved ₹ {discount(products)} on this order 
                                    </div>
                                </div>
                                <div className="row container ">
                                    <div
                                        className="col-12  mb-3 mt-2 order_cart"

                                    >
                                        Place Order
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <div className="card-footer bg-white d-flex justify-content-between">
                <div className="sub_total ps-2">
                    <span>Total</span>
                    <p>₹ 1597</p>
                </div>
                <button
                    className="add_address w-75"
                    style="
                    background-color: rgb(66, 162, 162);
                    border-color: rgb(66, 162, 162);
                    color: white;
                    "
                >
                    ADD ADDRESS
                </button>
                </div> --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- section part --> */}
            </div>
            <div className="p-4"></div>


            <footer className="m-auto d-flex justify-content-center">
                <div tabIndex="0" role="contentinfo" className="bank-img p-4"
                    aria-label="We accept PayPal, Visa, Mastercard, Maestro, and more.">
                    <img aria-hidden="true" tabIndex="-1"
                        data-src="//img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.png"
                        className="c-img-con-m px-2 j-verlok-lazy loaded"
                        data-lazy-src="//img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.png"
                        src="//img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.png"
                        data-was-processed="true" />
                    <img aria-hidden="true" tabIndex="-1"
                        data-src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732983375743706.png"
                        className="c-img-con-m px-2 j-verlok-lazy loaded"
                        data-lazy-src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732983375743706.png"
                        src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732983375743706.png" data-was-processed="true" />

                    <img aria-hidden="true" tabIndex="-1"
                        data-src="//img.ltwebstatic.com/images2_pi/2018/06/06/1528273151799711689.png"
                        className="c-img-con-m px-2 j-verlok-lazy loaded"
                        data-lazy-src="//img.ltwebstatic.com/images2_pi/2018/06/06/1528273151799711689.png"
                        src="//img.ltwebstatic.com/images2_pi/2018/06/06/1528273151799711689.png" data-was-processed="true" />
                    <img aria-hidden="true" tabIndex="-1"
                        data-src="//img.ltwebstatic.com/images3_pi/2020/09/23/16008293560df34023305e4c8617d6886e33b59531.png"
                        className="c-img-con-m px-2 j-verlok-lazy loaded"
                        data-lazy-src="//img.ltwebstatic.com/images3_pi/2020/09/23/16008293560df34023305e4c8617d6886e33b59531.png"
                        src="//img.ltwebstatic.com/images3_pi/2020/09/23/16008293560df34023305e4c8617d6886e33b59531.png"
                        data-was-processed="true" />
                    <img aria-hidden="true" tabIndex="-1"
                        data-src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282733431754785346.png"
                        className="c-img-con-m px-2 j-verlok-lazy loaded"
                        data-lazy-src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282733431754785346.png"
                        src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282733431754785346.png" data-was-processed="true" />
                    <img aria-hidden="true" tabIndex="-1"
                        data-src="//img.ltwebstatic.com/images3_pi/2021/01/15/1610701410b3781f00695b77b833e6b6a5e38331a3.png"
                        className="c-img-con-m px-2 j-verlok-lazy loaded"
                        data-lazy-src="//img.ltwebstatic.com/images3_pi/2021/01/15/1610701410b3781f00695b77b833e6b6a5e38331a3.png"
                        src="//img.ltwebstatic.com/images3_pi/2021/01/15/1610701410b3781f00695b77b833e6b6a5e38331a3.png"
                        data-was-processed="true" />
                </div>
            </footer>
        </section>

    );
}

export default Cart;