'use client'
export const Footer = () => {
    const goToTop = ():void => {
        if (typeof window != 'undefined') {
            window.scrollTo(0,0)
        }
    }
    return (
        <footer>
            <div className="ten-body ">
                <div className="ten-container ">
                    <div className="row-list ">
                        <div className="info-link ">
                        <i aria-hidden="true" className=" flaticon-renewable-energy"></i>
                            <a href=" # ">ENERGY EFFICIENCY SOLUTIONS</a>
                        </div>
                        <div className="info-link ">
                        <i aria-hidden="true" className=" flaticon-power-7"></i>
                            <a href="# ">SOLAR PANEL COMMISSIONING</a>
                        </div>
                        <div className="social-logo ">
                            <a href="# "><img src="/assets/images/home/logo.svg " alt="Logo " />
                            </a>
                            <ul className="social-comunity ">
                                <li>
                                    <a href="# "><i className="fab fa-twitter "></i></a>
                                </li>
                                <li>
                                    <a href="# "><i className="fab fa-facebook-f "></i></a>
                                </li>
                                <li><a href="# "><i className="fab fa-instagram "></i></a>
                                </li>
                                <li>
                                    <a href="# "><i className="fab fa-linkedin-in "></i></a>
                                </li>
                                <li><a href="# "><i className="fab fa-pinterest-p "></i></a>
                                </li>
                            </ul>

                        </div>
                        <div className="info-link ">
                        <i aria-hidden="true" className=" flaticon-car-battery"></i>
                            <a href=" # ">BATTERY BACKUP GENERATOR</a>
                        </div>
                        <div className="info-link ">
                        <i aria-hidden="true" className=" flaticon-solar-energy-2"></i>
                            <a href=" # ">WHOLE HOUSE SURGE PROTECTION</a>
                        </div>

                    </div>
                    <div className="row-services ">
                        <div className="contact-elm clearfix ">
                            <h3>Contact Us</h3>



                            <div className="info ">
                                <div className="icon-img ">
                                    <img src="/assets/images/home/cooment.svg " alt="cooment " />


                                </div>
                                <strong>Visit The Office</strong>
                                <div className="info-text ">

                                    <p> 102 Taily End Rd, NY</p>
                                </div>
                            </div>
                            <div className="info ">
                                <div className="icon-img ">
                                    <img src="/assets/images/home/icon-mail-1.png " alt="image " />

                                </div>
                                <strong>Send Email</strong>
                                <div className="info-text ">

                                    <p><a href="# "> info@domain.com</a></p>
                                </div>
                            </div>
                            <div className="info ">
                                <div className="icon-img ">
                                    <img src="http://smartdemowp.com/strnix/wp-content/uploads/2020/06/phone.svg " alt="phone " />
                                </div>
                                <strong>Phone Inquiry</strong>
                                <div className="info-text ">

                                    <p><a href="# "> (222) 303 4500 </a></p>
                                </div>

                            </div>
                        </div>
                        <div className="contact-elm ">
                            <div className="contact ">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  About StrnixStrnix</a>
                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  News Blog</a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  Careers</a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  Case Studies</a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  Meet Our Team</a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  TestimonialsTestimonials</a>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-elm ">
                            <h3>Our Services</h3>
                            <div className="contact ">

                                <ul>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i> Stallation & Monitoring </a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  After Sales Service</a>

                                    </li>
                                    <li>

                                        <a href="# "><i className="fas fa-arrow-right "></i>  Free Replacemrnt</a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  Warrenty Claims</a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  Energy Equipments</a>

                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="contact-elm ">
                            <div className="contact-logo ">
                                <a href="# "><img src="/assets/images/home/logo.svg " alt="Logo " />
                                </a>
                                <p>Integer lobortis sem consequat imperdiet In nulla viverra ut lorem ut, dapibus conse etur diam. Nun bibendum diet condiment sed ipsum duis lacinia.</p>
                                <ul className="social-comunity ">
                                    <li>
                                        <a href="# "><i className="fab fa-twitter "></i></a>
                                    </li>
                                    <li>
                                        <a href="# "><i className="fab fa-facebook-f "></i></a>
                                    </li>
                                    <li><a href="# "><i className="fab fa-instagram "></i></a>
                                    </li>
                                    <li>
                                        <a href="# "><i className="fab fa-linkedin-in "></i></a>
                                    </li>
                                    <li><a href="# "><i className="fab fa-pinterest-p "></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer clearfix ">
                <div className="footer-container clearfix ">
                    <div className="footer-left ">
                        <span>&#169; Copyright 2019 by </span><span> <a href="# "><strong>Strnix</strong></a></span>
                    </div>
                    <div className="footer-right ">
                        <a href="# ">Privacy Policy </a><span> | </span><a href="# "> Sitemap </a><span> | </span><a href="# "> Terms & Conditions</a>
                    </div>
                </div>
                <div className="go-back" >
                    <span onClick={goToTop }><i className="fas fa-arrow-up "></i></span>
                </div>
            </div>
        </footer>
    )
}