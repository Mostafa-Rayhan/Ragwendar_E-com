import React from 'react'

import Header from '../components/indexPage/header';
import About from '../components/indexPage/about';
import Footer from '../components/indexPage/footer';

const LandingPage = () => {
  return (
    <>
        <Header />
        <section>
            <div className="container-fluid daily-drops">
            
            <div className="row">
                <div className="col-6 p-1" id="main-discount">
                <a href="">
                    <img src="./assets/dresses/daily-props/daily.png" alt="" />
                </a>
                </div>
                <div className="col-6 p-1" id="main-discount">
                <a href="">
                    <img src="./assets/dresses/daily-props/daily2.png" alt="" />
                </a>
                </div>
            </div>
            </div>
        </section>
        <About />
        <Footer />
    </>
  )
}

export default LandingPage;