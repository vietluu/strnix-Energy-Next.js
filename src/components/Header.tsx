"use client"
import Image from "next/image"
import React, { useEffect, useLayoutEffect, useState } from "react"
const Header = () => {
    const [mobile, setMobile] = useState(false)
    const [search, setSearch] = useState(false)
    const [page, setPage] = useState(0);
    
    useLayoutEffect(() => {
        window.addEventListener('scroll', scroll);

  },[])

    useEffect(() => {
        if (mobile || search) {
            document.body.style.height = "100vh";
            document.body.style.overflow="hidden"
        }
        else {
            document.body.style.height = "";
            document.body.style.overflow=""

        }
    }, [mobile,search])
    const handleShowDropdown = (e: any):void => {
     e.children[0].children[1].classList.toggle('activebtn')
       e.children[1].classList.toggle('open')
    }
    const scroll = ():void => {
        
            setPage(window.scrollY)
        
    }
    return <>
        {search && <div className={`search-bar`}>
            <div className="close" onClick={e => setSearch(false)}>
            <i className="fas fa-times fa-2x"></i>
          </div>
            <form action="#" method="POST" className="searchForm">
                <div className="search-elm">
                    <fieldset>
                        <input type="text" placeholder=" Search Here" required/>
                        <input type="submit" value="SEARCH NOW!" className="theme"/>
                    </fieldset>
                </div>
            </form>
        </div>}
        <div className="header">

           {page > 200 && <div className="header-top clearfix">
                <div className="logo-top"><Image width={136} height={50} priority  src="/assets/images/home/sticky-logo.png" alt="Logo"/></div>
                <div className="main-menu clearfix">
                    <ul className="menu ">
                        <li><a href="# " className="hover1 "><strong>HOME</strong></a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="# ">Home Solar Energy</a>
                                </li>
                                <li>
                                    <a href="# ">Home Wind Power</a>
                                </li>
                                <li>
                                    <a href="# ">Home Bio Power</a>
                                </li>
                                <li>
                                    <a href="# ">Home Fuel Power</a>
                                </li>
                                <li>
                                    <a href="# ">Home Hydro Power</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="# " className="hover1 "><strong>ABOUT US</strong></a>
                            <ul className="sub-menu ">
                                <li>
                                    <a href="# ">ABOUT US</a>
                                </li>
                                <li>
                                    <a href="# ">FAQ's</a>
                                </li>
                                <li>
                                    <a href="# ">Delicated Project</a>
                                </li>

                            </ul>
                        </li>
                        <li><a href="# " className="hover1"><strong>SERVICES</strong></a>
                            <ul className="sub-menu ">
                                <li>
                                    <a href="# ">Our Services</a>
                                </li>
                                <li>
                                    <a href="# ">Commercial Services</a>
                                </li>
                                <li>
                                    <a href="# ">Panel Installation</a>
                                </li>
                                <li>
                                    <a href="# ">Replacement Upgrade</a>
                                </li>
                                <li>
                                    <a href="# ">Residential EV Charges</a>
                                </li>
                                <li>
                                    <a href="# ">Solar Maintenance</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="# " className="hover1 "><strong>PROJECTS</strong></a></li>
                        <li><a href="# " className="hover1 "><strong>NEWS</strong></a>
                            <ul className="sub-menu ">
                                <li>
                                    <a href="# ">Blog Grid Style</a>
                                </li>
                                <li>
                                    <a href="# ">Blog with Sidebar</a>
                                </li>
                                <li>
                                    <a href="# ">Blog Post Details</a>
                                </li>

                            </ul>
                        </li>
                        <li><a href="# " className="hover1 "><strong>CONTACT</strong></a></li>
                    </ul>
                </div>
            </div>}
            <div className="banner-top  clearfix">
                <div className="top-left">
                    <div className="top-text">The Nagy Saving for us</div>
                </div>
                <div className="top-right">
                    <div className=" mail ">
                        <a href="mailto:support@smartdatasoft.net ">Email:support@smartdatasoft.net</a>
                    </div>
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
            <div className="header-main  ">

                <div className="header-main-box row clearfix">
                    <div className="logo ">
                        <a href="https://smartdemowp.com/strnix/">
                            <Image width={164} height={66} priority  src="/assets/images/home/logo.svg" alt="Logo" />
                        </a>
                    </div>
                    <div className="right-content-header">
                        <div className="info-contact">
                            <div className="info ">
                                <div className="icon-img ">
                                    <Image width={40} height={40} priority  src="/assets/images/home/phone.svg" alt="phone "/>
                                </div>
                                <strong>Mon to fri: 0800 - 1900</strong>
                                <div className="info-text ">

                                    <p>+1-(222)-303-4500</p>
                                </div>
                            </div>


                            <div className="info ">
                                <div className="icon-img ">
                                    <Image width={40} height={40} priority  src="/assets/images/home/cooment.svg" alt="cooment "/>
                                </div>
                                <strong>Mon to fri: 0800 - 1900</strong>
                                <div className="info-text ">

                                    <p>+1-(222)-303-4500</p>
                                </div>
                            </div>
                        </div>
                        <div className="linkbox ">
                            <a href="# " className="link ">
                                <div className="link-text effect ">
                                    <span className="btn-txt ">Free Consultation</span>
                                    <span className="btn-icon "><i className="fas fa-arrow-right "></i> </span>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="main-menu clearfix">
                    <ul className="menu ">
                        <li><a href="# " className="hover1 "><strong>HOME</strong></a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="# ">Home Solar Energy</a>
                                </li>
                                <li>
                                    <a href="# ">Home Wind Power</a>
                                </li>
                                <li>
                                    <a href="# ">Home Bio Power</a>
                                </li>
                                <li>
                                    <a href="# ">Home Fuel Power</a>
                                </li>
                                <li>
                                    <a href="# ">Home Hydro Power</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="# " className="hover1 "><strong>ABOUT US</strong></a>
                            <ul className="sub-menu ">
                                <li>
                                    <a href="# ">ABOUT US</a>
                                </li>
                                <li>
                                    <a href="# ">FAQ's</a>
                                </li>
                                <li>
                                    <a href="# ">Delicated Project</a>
                                </li>

                            </ul>
                        </li>
                        <li><a href="# " className="hover1 "><strong>SERVICES</strong></a>
                            <ul className="sub-menu ">
                                <li>
                                    <a href="# ">Our Services</a>
                                </li>
                                <li>
                                    <a href="# ">Commercial Services</a>
                                </li>
                                <li>
                                    <a href="# ">Panel Installation</a>
                                </li>
                                <li>
                                    <a href="# ">Replacement Upgrade</a>
                                </li>
                                <li>
                                    <a href="# ">Residential EV Charges</a>
                                </li>
                                <li>
                                    <a href="# ">Solar Maintenance</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="# " className="hover1 "><strong>PROJECTS</strong></a></li>
                        <li><a href="# " className="hover1 "><strong>NEWS</strong></a>
                            <ul className="sub-menu ">
                                <li>
                                    <a href="# ">Blog Grid Style</a>
                                </li>
                                <li>
                                    <a href="# ">Blog with Sidebar</a>
                                </li>
                                <li>
                                    <a href="# ">Blog Post Details</a>
                                </li>

                            </ul>
                        </li>
                        <li><a href="# " className="hover1 "><strong>CONTACT</strong></a></li>
                    </ul>
                    <div className="tabbar">
                        <div className="search">
                            <span onClick={e => setSearch(true)}><i className="fas fa-search "></i></span>
                        </div>
                        <div className="navmoblie" >
                            <span className="menu-bar" onClick={e => setMobile(true)}><i className="fas fa-bars"></i></span>
                        </div>
                    </div>

                </div>


            </div>
           {mobile && <div className="mobile-menu">

                <div className="dropdownnav-menu">
                    <ul id="dropdown">
                        <li id="menu-img">
                            <a href="#"><Image alt="" priority width={150} height={90}  src="/assets/images/home/logo-3.png" className="mCS_img_loaded"/></a>
                        </li>


                        <li id='first' onClick={e => handleShowDropdown(e.currentTarget)}><a href="# "><strong>HOME</strong><div className="dropdown-icon"><span className="fa fa-angle-right"></span></div></a>


                            <ul className="nav-mobile">

                                <li>
                                    <a href="# ">Home Solar Energy</a>
                                </li>
                                <li>
                                    <a href="# ">Home Wind Power</a>
                                </li>
                                <li>
                                    <a href="# ">Home Bio Power</a>
                                </li>
                                <li>
                                    <a href="# ">Home Fuel Power</a>
                                </li>
                                <li>
                                    <a href="# ">Home Hydro Power</a>
                                </li>
                            </ul>
                            
                        </li>
                        <li id="sercond" onClick={e => handleShowDropdown(e.currentTarget)}><a href="# "><strong>ABOUT US</strong><div className="dropdown-icon"><span className="fa fa-angle-right"></span></div></a>
                            <ul className="nav-mobile">
                                <li>
                                    <a href="# ">ABOUT US</a>
                                </li>
                                <li>
                                    <a href="# ">FAQ's</a>
                                </li>
                                <li>
                                    <a href="# ">Delicated Project</a>
                                </li>

                            </ul>

                        </li>
                        <li id='third' onClick={e => handleShowDropdown(e.currentTarget)}><a href="# "><strong>SERVICES</strong><div className="dropdown-icon"><span className="fa fa-angle-right"></span></div></a>
                            <ul className="nav-mobile">
                                <li>
                                    <a href="# ">Our Services</a>
                                </li>
                                <li>
                                    <a href="# ">Commercial Services</a>
                                </li>
                                <li>
                                    <a href="# ">Panel Installation</a>
                                </li>
                                <li>
                                    <a href="# ">Replacement Upgrade</a>
                                </li>
                                <li>
                                    <a href="# ">Residential EV Charges</a>
                                </li>
                                <li>
                                    <a href="# ">Solar Maintenance</a>
                                </li>
                            </ul>

                        </li>
                        <li><a href="# "><strong>PROJECTS</strong></a></li>
                        <li onClick={e => handleShowDropdown(e.currentTarget)}><a href="# "><strong>NEWS</strong><div className="dropdown-icon"><span className="fa fa-angle-right"></span></div></a>
                            <ul className="nav-mobile">
                                <li>
                                    <a href="# ">Blog Grid Style</a>
                                </li>
                                <li>
                                    <a href="# ">Blog with Sidebar</a>
                                </li>
                                <li>
                                    <a href="# ">Blog Post Details</a>
                                </li>

                            </ul>

                        </li>
                        <li><a href="# "><strong>CONTACT</strong></a></li>
                    </ul>
                    <div className="close" onClick={e => setMobile(false)}>
                        <i className="fas fa-times fa-2x"></i>
                    </div>

                </div>


            </div>}

        </div>
    </>
}
export default Header