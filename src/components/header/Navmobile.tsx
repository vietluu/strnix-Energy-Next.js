import Link from "next/link";
import Logo from "../Logo";
export default function Navmobile({setMenuMobile}: any) {
   


    const handleShowDropdown = (e: any): void => {
        e.children[1].classList.toggle('activebtn');
        e.children[2].classList.toggle('open');
    
      };
    return ( 
        <nav className='mobile-menu'>
        <div className='dropdownnav-menu'>
          <ul id='dropdown'>
            <li id='menu-img' onClick={(e) => setMenuMobile(false)}>
              <Logo option='light'/>
            </li>

            <li
              id='first'
              onClick={(e) => handleShowDropdown(e.currentTarget)}
            >
              <Link onClick={(e) => setMenuMobile(false)} href='/'>
                <strong>HOME</strong>
                </Link>
                <div className='dropdown-icon'>
                  
                  <span className='fa fa-angle-right'></span>
                </div>
              

              <ul className='nav-mobile'>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Home Solar Energy
                  </Link>
                </li>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Home Wind Power
                  </Link>
                </li>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Home Bio Power
                  </Link>
                </li>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Home Fuel Power
                  </Link>
                </li>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Home Hydro Power
                  </Link>
                </li>
              </ul>
            </li>
            <li
              id='sercond'
              onClick={(e) => handleShowDropdown(e.currentTarget)}
            >
              <Link onClick={(e) => setMenuMobile(false)} href='about'>
                <strong>ABOUT US</strong>
                </Link>
                <div className='dropdown-icon'>
                  <span className='fa fa-angle-right'></span>
                </div>
             
              <ul className='nav-mobile'>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='about'>
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                  {"FAQ's"}
                  </Link>
                </li>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Delicated Project
                  </Link>
                </li>
              </ul>
            </li>
            <li
              id='third'
              onClick={(e) => handleShowDropdown(e.currentTarget)}
            >
              <Link onClick={(e) => setMenuMobile(false)} href='services'>
                <strong>SERVICES</strong>
              </Link>
                <div className='dropdown-icon'>
                  <span className='fa fa-angle-right'></span>
                </div>
              <ul className='nav-mobile'>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Commercial Services
                  </Link>
                </li>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Panel Installation
                  </Link>
                </li>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Replacement Upgrade
                  </Link>
                </li>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Residential EV Charges
                  </Link>
                </li>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Solar Maintenance
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link onClick={(e) => setMenuMobile(false)} href='projects'>
                <strong>PROJECTS</strong>
              </Link>
            </li>
            <li onClick={(e) => handleShowDropdown(e.currentTarget)}>
              <Link onClick={(e) => setMenuMobile(false)} href='news'>
                <strong>NEWS</strong>
              </Link>
                <div className='dropdown-icon'>
                  <span className='fa fa-angle-right'></span>
                </div>
              <ul className='nav-mobile'>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Blog Grid Style
                  </Link>
                </li>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Blog with Sidebar
                  </Link>
                </li>
                <li>
                  <Link onClick={(e) => setMenuMobile(false)} href='# '>
                    Blog Post Details
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link onClick={(e) => setMenuMobile(false)} href='contact'>
                <strong>CONTACT</strong>
              </Link>
            </li>
          </ul>
          <div className='btn-close' onClick={(e) => setMenuMobile(false)}>
            <i className='fa fa-times fa-2x'></i>
          </div>
        </div>
      </nav>
    );
}
