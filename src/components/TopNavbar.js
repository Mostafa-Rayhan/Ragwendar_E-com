import React from 'react';

const TopNavbar = () => {
    return (
        <>
            <nav

                className="topNavbarIs " id="tab-color" color="blue">
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

        </>
    );
};

export default TopNavbar;