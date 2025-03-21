import React from "react";
import Info from "./info";
import Footer from "./footer";


function service(params) {
    return (
        <>
            <section class="service_section layout_padding">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Our Services
                        </h2>
                    </div>
                </div>
                <div class="container ">
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="box ">
                                <div class="img-box">
                                    <img src="images/s1.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h4>
                                        Shared Hosting
                                    </h4>
                                    <p>
                                        Generators on the Internet tend to repeat predefined chunks as necessary
                                    </p>
                                    <a href="">
                                        Read More
                                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="box ">
                                <div class="img-box">
                                    <img src="images/s2.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h4>
                                        Dedicated Hosting
                                    </h4>
                                    <p>
                                        Generators on the Internet tend to repeat predefined chunks as necessary
                                    </p>
                                    <a href="">
                                        Read More
                                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 ">
                            <div class="box ">
                                <div class="img-box">
                                    <img src="images/s3.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h4>
                                        Cloud Hosting
                                    </h4>
                                    <p>
                                        Generators on the Internet tend to repeat predefined chunks as necessary
                                    </p>
                                    <a href="">
                                        Read More
                                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="box ">
                                <div class="img-box">
                                    <img src="images/s4.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h4>
                                        VPS Hosting
                                    </h4>
                                    <p>
                                        Generators on the Internet tend to repeat predefined chunks as necessary
                                    </p>
                                    <a href="">
                                        Read More
                                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="box ">
                                <div class="img-box">
                                    <img src="images/s5.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h4>
                                        Wordpress Hosting
                                    </h4>
                                    <p>
                                        Generators on the Internet tend to repeat predefined chunks as necessary
                                    </p>
                                    <a href="">
                                        Read More
                                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="box ">
                                <div class="img-box">
                                    <img src="images/s6.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h4>
                                        Domain Name
                                    </h4>
                                    <p>
                                        Generators on the Internet tend to repeat predefined chunks as necessary
                                    </p>
                                    <a href="">
                                        Read More
                                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Info />
            <Footer/>
        </>
    );
} export default service;