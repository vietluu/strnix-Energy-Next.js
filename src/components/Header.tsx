"use client"
import Image from "next/image"
import React, { useEffect, useLayoutEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { isMobile } from "react-device-detect"

const Header = () => {
    const [mobile, setMobile] = useState(false)
    const [search, setSearch] = useState(false)
    const [page, setPage] = useState(0);
    const router = useRouter();
    useLayoutEffect(() => {
        window.addEventListener('scroll', scroll);
        setPage(window.scrollY)
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
        <header className="header">

           {page > 200 && <div className="header-top clearfix">
                <div className="logo-top"><Image width={136} height={50} priority  src="/assets/images/home/sticky-logo.png" alt="Logo"/></div>
                <div className="main-menu clearfix">
                    <ul className="menu ">
                        <li><Link href="/" className="hover1 "><strong>HOME</strong></Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link href="# ">Home Solar Energy</Link>
                                </li>
                                <li>
                                    <Link href="# ">Home Wind Power</Link>
                                </li>
                                <li>
                                    <Link href="# ">Home Bio Power</Link>
                                </li>
                                <li>
                                    <Link href="# ">Home Fuel Power</Link>
                                </li>
                                <li>
                                    <Link href="# ">Home Hydro Power</Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="about" className="hover1 "><strong>ABOUT US</strong></Link>
                            <ul className="sub-menu ">
                                <li>
                                    <Link href="# ">ABOUT US</Link>
                                </li>
                                <li>
                                    <Link href="# ">FAQ's</Link>
                                </li>
                                <li>
                                    <Link href="# ">Delicated Project</Link>
                                </li>

                            </ul>
                        </li>
                        <li><Link href="# " className="hover1"><strong>SERVICES</strong></Link>
                            <ul className="sub-menu ">
                                <li>
                                    <Link href="# ">Our Services</Link>
                                </li>
                                <li>
                                    <Link href="# ">Commercial Services</Link>
                                </li>
                                <li>
                                    <Link href="# ">Panel Installation</Link>
                                </li>
                                <li>
                                    <Link href="# ">Replacement Upgrade</Link>
                                </li>
                                <li>
                                    <Link href="# ">Residential EV Charges</Link>
                                </li>
                                <li>
                                    <Link href="# ">Solar Maintenance</Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="# " className="hover1 "><strong>PROJECTS</strong></Link></li>
                        <li><Link href="# " className="hover1 "><strong>NEWS</strong></Link>
                            <ul className="sub-menu ">
                                <li>
                                    <Link href="# ">Blog Grid Style</Link>
                                </li>
                                <li>
                                    <Link href="# ">Blog with Sidebar</Link>
                                </li>
                                <li>
                                    <Link href="# ">Blog Post Details</Link>
                                </li>

                            </ul>
                        </li>
                        <li><Link href="# " className="hover1 "><strong>CONTACT</strong></Link></li>
                    </ul>
                </div>
            </div>}
            <div  data-aos="custom-center" data-aos-duration="500">
                
            <div className="banner-top  clearfix">
                <div className="top-left">
                    <div className="top-text">The Nagy Saving for us</div>
                </div>
                <div className="top-right">
                    <div className=" mail ">
                        <Link href="mailto:support@smartdatasoft.net ">Email:support@smartdatasoft.net</Link>
                    </div>
                    <ul className="social-comunity ">
                        <li>
                            <Link href="# "><i className="fab fa-twitter "></i></Link>
                        </li>
                        <li>
                            <Link href="# "><i className="fab fa-facebook-f "></i></Link>
                        </li>
                        <li><Link href="# "><i className="fab fa-instagram "></i></Link>
                        </li>
                        <li>
                            <Link href="# "><i className="fab fa-linkedin-in "></i></Link>
                        </li>
                        <li><Link href="# "><i className="fab fa-pinterest-p "></i></Link>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="header-main  ">

                <div className="header-main-box row clearfix">
                    <div className="logo ">
                        <Link href="https://smartdemowp.com/strnix/">
                            <Image width={164} height={66} priority  src="/assets/images/home/logo.svg" alt="Logo" />
                        </Link>
                    </div>
                    <div className="right-content-header">
                        <div className="info-contact">
                            <div className="info">
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
                            <Link href="# " className="link ">
                                <div className="link-text effect ">
                                    <span className="btn-txt ">Free Consultation</span>
                                    <span className="btn-icon "><i className="fas fa-arrow-right "></i> </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="main-menu clearfix">
                    
                        {isMobile ? <div className="tabbar">
                        <div className="navmoblie" >
                            <span className="menu-bar" onClick={e => setMobile(true)}><i className="fas fa-bars"></i></span>
                        </div>
                        <div className="search">
                            <span onClick={e => setSearch(true)}><i className="fas fa-search "></i></span>
                        </div>
                        
                        </div> 
                            :
                            <>
                            <ul className="menu ">
                        <li><Link href="/" className="hover1 "><strong>HOME</strong></Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link href="# ">Home Solar Energy</Link>
                                </li>
                                <li>
                                    <Link href="# ">Home Wind Power</Link>
                                </li>
                                <li>
                                    <Link href="# ">Home Bio Power</Link>
                                </li>
                                <li>
                                    <Link href="# ">Home Fuel Power</Link>
                                </li>
                                <li>
                                    <Link href="# ">Home Hydro Power</Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="about" className="hover1 "><strong>ABOUT US</strong></Link>
                            <ul className="sub-menu ">
                                <li>
                                    <Link href="# ">ABOUT US</Link>
                                </li>
                                <li>
                                    <Link href="# ">FAQ's</Link>
                                </li>
                                <li>
                                    <Link href="# ">Delicated Project</Link>
                                </li>

                            </ul>
                        </li>
                        <li><Link href="# " className="hover1 "><strong>SERVICES</strong></Link>
                            <ul className="sub-menu ">
                                <li>
                                    <Link href="# ">Our Services</Link>
                                </li>
                                <li>
                                    <Link href="# ">Commercial Services</Link>
                                </li>
                                <li>
                                    <Link href="# ">Panel Installation</Link>
                                </li>
                                <li>
                                    <Link href="# ">Replacement Upgrade</Link>
                                </li>
                                <li>
                                    <Link href="# ">Residential EV Charges</Link>
                                </li>
                                <li>
                                    <Link href="# ">Solar Maintenance</Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="# " className="hover1 "><strong>PROJECTS</strong></Link></li>
                        <li><Link href="# " className="hover1 "><strong>NEWS</strong></Link>
                            <ul className="sub-menu ">
                                <li>
                                    <Link href="# ">Blog Grid Style</Link>
                                </li>
                                <li>
                                    <Link href="# ">Blog with Sidebar</Link>
                                </li>
                                <li>
                                    <Link href="# ">Blog Post Details</Link>
                                </li>

                            </ul>
                        </li>
                        <li><Link href="# " className="hover1 "><strong>CONTACT</strong></Link></li>
                        </ul>
                        <div className="search">
                            <span onClick={e => setSearch(true)}><i className="fas fa-search "></i></span>
                        </div>
                            </>
                    }

                </div>


            </div>
            </div>
           {mobile && <div className="mobile-menu">

                <div className="dropdownnav-menu">
                    <ul id="dropdown">
                        <li id="menu-img">
                            <Link href="/"><Image alt="" priority width={130} height={60}  src="/assets/images/home/logo-3.png" className="mCS_img_loaded"/></Link>
                        </li>


                        <li id='first' onClick={e => handleShowDropdown(e.currentTarget)}><Link href="/"><strong>HOME</strong><div className="dropdown-icon"><span className="fa fa-angle-right"></span></div></Link>


                            <ul className="nav-mobile">

                                <li>
                                    <Link href="# ">Home Solar Energy</Link>
                                </li>
                                <li>
                                    <Link href="# ">Home Wind Power</Link>
                                </li>
                                <li>
                                    <Link href="# ">Home Bio Power</Link>
                                </li>
                                <li>
                                    <Link href="# ">Home Fuel Power</Link>
                                </li>
                                <li>
                                    <Link href="# ">Home Hydro Power</Link>
                                </li>
                            </ul>
                            
                        </li>
                        <li id="sercond" onClick={e => handleShowDropdown(e.currentTarget)}><Link href="# "><strong>ABOUT US</strong><div className="dropdown-icon"><span className="fa fa-angle-right"></span></div></Link>
                            <ul className="nav-mobile">
                                <li>
                                    <Link href="# ">ABOUT US</Link>
                                </li>
                                <li>
                                    <Link href="# ">FAQ's</Link>
                                </li>
                                <li>
                                    <Link href="# ">Delicated Project</Link>
                                </li>

                            </ul>

                        </li>
                        <li id='third' onClick={e => handleShowDropdown(e.currentTarget)}><Link href="# "><strong>SERVICES</strong><div className="dropdown-icon"><span className="fa fa-angle-right"></span></div></Link>
                            <ul className="nav-mobile">
                                <li>
                                    <Link href="# ">Our Services</Link>
                                </li>
                                <li>
                                    <Link href="# ">Commercial Services</Link>
                                </li>
                                <li>
                                    <Link href="# ">Panel Installation</Link>
                                </li>
                                <li>
                                    <Link href="# ">Replacement Upgrade</Link>
                                </li>
                                <li>
                                    <Link href="# ">Residential EV Charges</Link>
                                </li>
                                <li>
                                    <Link href="# ">Solar Maintenance</Link>
                                </li>
                            </ul>

                        </li>
                        <li><Link href="# "><strong>PROJECTS</strong></Link></li>
                        <li onClick={e => handleShowDropdown(e.currentTarget)}><Link href="# "><strong>NEWS</strong><div className="dropdown-icon"><span className="fa fa-angle-right"></span></div></Link>
                            <ul className="nav-mobile">
                                <li>
                                    <Link href="# ">Blog Grid Style</Link>
                                </li>
                                <li>
                                    <Link href="# ">Blog with Sidebar</Link>
                                </li>
                                <li>
                                    <Link href="# ">Blog Post Details</Link>
                                </li>

                            </ul>

                        </li>
                        <li><Link href="# "><strong>CONTACT</strong></Link></li>
                    </ul>
                    <div className="close" onClick={e => setMobile(false)}>
                        <i className="fas fa-times fa-2x"></i>
                    </div>

                </div>


            </div>}

        </header>
    </>
}
export default Header