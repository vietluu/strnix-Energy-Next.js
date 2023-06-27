'use client';
import Image from 'next/image';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Aos from 'aos';
import NavTop from './NavTop';
import SocialLink from '../SocialLink';
import Logo from '../Logo';
import Navpc from './Navpc';
import Navmobile from './Navmobile';
import CustomBtnHover from '../buttonCustom/CustomBtnHover';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { notification,message } from 'antd'
const Header = () => {
  const [menuMobile, setMenuMobile] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const [page, setPage] = useState(0);
  const searchRef = useRef(null)
  const router = useRouter()

  const isLoading = useAppSelector(
    (state: RootState) => state.formReducer.isLoading
  );
    const hasErr = useAppSelector((state: RootState) => state.formReducer.hasErr);
    
  useEffect(() => {
    isLoading
      ? message.loading({
          content: 'Sending..',
          duration: 0,
        })
      : message.destroy();
    hasErr &&
      notification.error({
        message: 'ERORR',
        description: 'There was an error sending!',
      });
  }, [isLoading, hasErr]);

  useLayoutEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 0,
      once: true, // whether animation should happen only once - while scrolling down
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    });
    window.addEventListener('scroll', scroll);
    setPage(window.scrollY);
  }, []);

  useEffect(() => {
    if (menuMobile || search) {
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.height = '';
      document.body.style.overflow = '';
    }
  }, [menuMobile, search]);

  // const handleShowDropdown = (e: any): void => {
  //   e.children[1].classList.toggle('activebtn');
  //   e.children[2].classList.toggle('open');
  // };
  const scroll = (): void => {
    setPage(window.scrollY);
  };

  return (
    <>
      {search && (
        <div className={`search-bar`}>
          <div className="close" onClick={(e) => setSearch(false)}>
            <i className="fas fa-times fa-2x"></i>
          </div>
          <div className="searchForm"> 
            <div className="search-elm">
              <fieldset>
                <input ref={searchRef} type="text" placeholder=" Search Here" />
                
                <input onClick={e => {
                  //@ts-ignore
                  router.push(`news?title=${searchRef?.current?.value}`), setSearch(false)
                }} value="SEARCH NOW!" className="theme" />
              </fieldset>
            </div>
          </div>
        </div>
      )}
      <header className="header">
        {page > 200 && <NavTop />}
        <div>
          <div className="banner-top clearfix">
            <div className="top-left">
              <div className="top-text">The Nagy Saving for us</div>
            </div>
            <div className="top-right">
              <div className=" mail ">
                <Link href="mailto:support@smartdatasoft.net ">
                  Email:support@smartdatasoft.net
                </Link>
              </div>
              <SocialLink />
            </div>
          </div>
          <div className="header-main  ">
            <div className="header-main-box row clearfix">
              <div className="logo ">
                <Logo />
              </div>
              <div className="right-content-header">
                <div className="info-contact">
                  <div className="info">
                    <div className="icon-img ">
                      <Image
                        width={40}
                        height={40}
                        priority
                        src="/assets/images/home/phone.svg"
                        alt="phone "
                      />
                    </div>
                    <strong>Mon to fri: 0800 - 1900</strong>
                    <div className="info-text ">
                      <p>+1-(222)-303-4500</p>
                    </div>
                  </div>

                  <div className="info ">
                    <div className="icon-img ">
                      <Image
                        width={40}
                        height={40}
                        priority
                        src="/assets/images/home/cooment.svg"
                        alt="cooment "
                      />
                    </div>
                    <strong>Mon to fri: 0800 - 1900</strong>
                    <div className="info-text ">
                      <p>+1-(222)-303-4500</p>
                    </div>
                  </div>
                </div>
                <div className="linkbox ">
                  <Link href="# " className="link ">
                    <CustomBtnHover text="Consultation Free" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="main-menu clearfix">
              <div className="nav-mobile">
                <div className="tabbar">
                  <div className="open-nav">
                    <span
                      className="menu-bar"
                      onClick={(e) => setMenuMobile(true)}
                    >
                      <i className="fas fa-bars"></i>
                    </span>
                  </div>
                  <div className="search">
                    <span onClick={(e) => setSearch(true)}>
                      <i className="fas fa-search "></i>
                    </span>
                  </div>
                </div>
              </div>

              <Navpc setSearch={setSearch} />
            </div>
          </div>
        </div>
        {menuMobile && <Navmobile setMenuMobile={setMenuMobile} />}
      </header>
    </>
  );
};
export default Header;
