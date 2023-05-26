'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider, { Settings } from 'react-slick';
export default function Services() {
  const setting: Settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: 'dots',
    customPaging: (index) => {
      return <span></span>;
    },
  };
  return (
    <>
      <div
        className='page-baner banner-title'
        style={{
          backgroundImage: 'url(/assets/images/services/banner-bg-2.jpg)',
        }}
      >
        <div className='mt-11 pt-8 font-weight-bold'>
          <h5>
            {"strnix world's energy "}
            {'  →  Our Services'}
          </h5>
          <h1 className='text-6xl mt-4'>Our Services</h1>
        </div>
      </div>
      <div className='smart-solving bg-[#f9f9f9]'>
        <div className='container-lg py-[120px]'>
          <div
            className='titleprogram text-center'
            data-aos='fade-right'
            data-aos-duration='2000'
          >
            <h2>A Smarter Way Of Solving The Challenges</h2>
            <div className='subtext '>
              <p>And For Controling Your Energy Production Worldwide</p>
            </div>
            <div className='bottomtitle2 '>
              <span className='line '></span>
              <span className='dottitle '></span>
              <span className='dottitle '></span>
              <span className='dottitle '></span>
            </div>
          </div>
          <div className='text-center py-5'>
            <p>
              Nunc quam arcu, pretium quis quam sed, laoreet efficitur leo.
              Aliquam era volutpat. Integer lobortis
            </p>
            <p>
              sem consequat imperdiet. In nulla sed viverra lorem dapibus
              consectetur diam. Nunc bibendum imperdiet
            </p>
            <p>
              condimentum. Duis lacinia pulvinar turpis lacinia feugiat. Vivamus
              tellus enim, euismod euismod laoreet nec, aliquet ut metus.
            </p>{' '}
          </div>
          <div className='row flex-wrap '>
            <div
              className='mt-[60px] p-3  col-sm-12 col-md-6 col-lg-4 '
              data-aos='fade-up'
            >
              <div className='border-solid box-card  border-[9px] border-white'>
                <div className='image-box'>
                  <Image
                    src='/assets/images/services/featured-image-18.jpg'
                    loading='lazy'
                    className='aspect-[1/1]'
                    width={500}
                    height={500}
                    alt='qualiti assessment'
                  />
                  <div className='hover-box text-center text-white px-3 pt-12'>
                    <div className='inner-box'>
                      <p>
                        Aliquam sed era volutpat teger lobort consequat
                        imperdiet nulla ipsum sedvie consectetur bibenydum.
                      </p>
                      <div className='inner-link py-3'>
                        <Link
                          className='text-[#e85728] text-xl hover:text-white hover:underline underline-offset-8'
                          href='#'
                        >
                          Read more
                        </Link>
                        <span className='px-2 flaticon-arrows-11'></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='title-box row h-[80px]'>
                  <span className=' text-white col-3 h-full text-center pt-[20px]  d-inline-block text-4xl bg-blue-700 flaticon-settings'></span>
                  <Link
                    className='bg-white font-bold text-xl pt-[30px] text-center col-9 h-full  d-inline-block'
                    href='#'
                  >
                    Quality Assessment
                  </Link>
                </div>
              </div>
            </div>
            <div
              className='mt-[60px] p-3  col-sm-12 col-md-6 col-lg-4 '
              data-aos='fade-up'
              data-aos-delay={500}
            >
              <div className='border-solid box-card  border-[9px] border-white'>
                <div className='image-box'>
                  <Image
                    src='/assets/images/services/featured-image-19.jpg'
                    loading='lazy'
                    className='aspect-[1/1]'
                    width={500}
                    height={500}
                    alt='qualiti assessment'
                  />
                  <div className='hover-box text-center text-white px-3 pt-12'>
                    <div className='inner-box'>
                      <p>
                        Aliquam sed era volutpat teger lobort consequat
                        imperdiet nulla ipsum sedvie consectetur bibenydum.
                      </p>
                      <div className='inner-link py-3'>
                        <Link
                          className='text-[#e85728] text-xl hover:text-white hover:underline underline-offset-8'
                          href='#'
                        >
                          Read more
                        </Link>
                        <span className='px-2 flaticon-arrows-11'></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='title-box row h-[80px]'>
                  <span className=' text-white col-3 h-full text-center pt-[20px]  d-inline-block text-4xl bg-blue-700 flaticon-settings'></span>
                  <Link
                    className='bg-white font-bold text-xl pt-[30px] text-center col-9 h-full  d-inline-block'
                    href='#'
                  >
                    Energy Storage
                  </Link>
                </div>
              </div>
            </div>
            <div
              className='mt-[60px] p-3  col-sm-12 col-md-6 col-lg-4 '
              data-aos='fade-up'
              data-aos-delay={1000}
            >
              <div className='border-solid box-card  border-[9px] border-white'>
                <div className='image-box'>
                  <Image
                    src='/assets/images/services/featured-image-20.jpg'
                    loading='lazy'
                    className='aspect-[1/1]'
                    width={500}
                    height={500}
                    alt='qualiti assessment'
                  />
                  <div className='hover-box text-center text-white px-3 pt-12'>
                    <div className='inner-box'>
                      <p>
                        Aliquam sed era volutpat teger lobort consequat
                        imperdiet nulla ipsum sedvie consectetur bibenydum.
                      </p>
                      <div className='inner-link py-3'>
                        <Link
                          className='text-[#e85728] text-xl hover:text-white hover:underline underline-offset-8'
                          href='#'
                        >
                          Read more
                        </Link>
                        <span className='px-2 flaticon-arrows-11'></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='title-box row h-[80px]'>
                  <span className=' text-white col-3 h-full text-center pt-[20px]  d-inline-block text-4xl bg-blue-700 flaticon-settings'></span>
                  <Link
                    className='bg-white font-bold text-xl pt-[30px] text-center col-9 h-full  d-inline-block'
                    href='#'
                  >
                    Renewable Energy
                  </Link>
                </div>
              </div>
            </div>
            <div
              className='mt-[60px] p-3  col-sm-12 col-md-6 col-lg-4 '
              data-aos='fade-up'
            >
              <div className='border-solid box-card  border-[9px] border-white'>
                <div className='image-box'>
                  <Image
                    src='/assets/images/services/featured-image-21.jpg'
                    loading='lazy'
                    className='aspect-[1/1]'
                    width={500}
                    height={500}
                    alt='qualiti assessment'
                  />
                  <div className='hover-box text-center text-white px-3 pt-12'>
                    <div className='inner-box'>
                      <p>
                        Aliquam sed era volutpat teger lobort consequat
                        imperdiet nulla ipsum sedvie consectetur bibenydum.
                      </p>
                      <div className='inner-link py-3'>
                        <Link
                          className='text-[#e85728] text-xl hover:text-white hover:underline underline-offset-8'
                          href='#'
                        >
                          Read more
                        </Link>
                        <span className='px-2 flaticon-arrows-11'></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='title-box row h-[80px]'>
                  <span className=' text-white col-3 h-full text-center pt-[20px]  d-inline-block text-4xl bg-blue-700 flaticon-settings'></span>
                  <Link
                    className='bg-white font-bold text-xl pt-[30px] text-center col-9 h-full  d-inline-block'
                    href='#'
                  >
                    Large Scale Dams
                  </Link>
                </div>
              </div>
            </div>
            <div
              className='mt-[60px] p-3  col-sm-12 col-md-6 col-lg-4 '
              data-aos='fade-up'
              data-aos-delay={500}
            >
              <div className='border-solid box-card  border-[9px] border-white'>
                <div className='image-box'>
                  <Image
                    src='/assets/images/services/featured-image-22.jpg'
                    loading='lazy'
                    className='aspect-[1/1]'
                    width={500}
                    height={500}
                    alt='qualiti assessment'
                  />
                  <div className='hover-box text-center text-white px-3 pt-12'>
                    <div className='inner-box'>
                      <p>
                        Aliquam sed era volutpat teger lobort consequat
                        imperdiet nulla ipsum sedvie consectetur bibenydum.
                      </p>
                      <div className='inner-link py-3'>
                        <Link
                          className='text-[#e85728] text-xl hover:text-white hover:underline underline-offset-8'
                          href='#'
                        >
                          Read more
                        </Link>
                        <span className='px-2 flaticon-arrows-11'></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='title-box row h-[80px]'>
                  <span className=' text-white col-3 h-full text-center pt-[20px]  d-inline-block text-4xl bg-blue-700 flaticon-settings'></span>
                  <Link
                    className='bg-white font-bold text-xl pt-[30px] text-center col-9 h-full  d-inline-block'
                    href='#'
                  >
                    Powerful Ecology
                  </Link>
                </div>
              </div>
            </div>
            <div
              className='mt-[60px] p-3  col-sm-12 col-md-6 col-lg-4 '
              data-aos='fade-up'
              data-aos-delay={1000}
            >
              <div className='border-solid box-card  border-[9px] border-white'>
                <div className='image-box'>
                  <Image
                    src='/assets/images/services/featured-image-23.jpg'
                    loading='lazy'
                    className='aspect-[1/1]'
                    width={500}
                    height={500}
                    alt='qualiti assessment'
                  />
                  <div className='hover-box text-center text-white px-3 pt-12'>
                    <div className='inner-box'>
                      <p>
                        Aliquam sed era volutpat teger lobort consequat
                        imperdiet nulla ipsum sedvie consectetur bibenydum.
                      </p>
                      <div className='inner-link py-3'>
                        <Link
                          className='text-[#e85728] text-xl hover:text-white hover:underline underline-offset-8'
                          href='#'
                        >
                          Read more
                        </Link>
                        <span className='px-2 flaticon-arrows-11'></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='title-box row h-[80px]'>
                  <span className=' text-white col-3 h-full text-center pt-[20px]  d-inline-block text-4xl bg-blue-700 flaticon-settings'></span>
                  <Link
                    className='bg-white font-bold text-xl pt-[30px] text-center col-9 h-full  d-inline-block'
                    href='#'
                  >
                    Plant Construction
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='row py-[40px]'>
            <div className='text-center text-xl' data-aos='fade-up'>
              <p>
                {
                  ' We’re Renewable Energy Generation Compant - Need Emergency Help?'
                }
              </p>
              <p>
                Call or email us 24/7 support team at{' '}
                <Link
                  className='text-[#e85728] hover:underline underline-offset-4 font-bold hover:text-[#e85728]'
                  href='tel:+8419008198'
                >
                  +1 (222) 303 4500
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='installation'>
        <div className='installation-container '>
          <div className='patternimgleft '>
            <Image
              fill
              loading='lazy'
              src='/assets/images/home/pattern-image-1.png'
              alt='strnix image'
            />
          </div>
          <div className='patternimgright '>
            <Image
              fill
              loading='lazy'
              src='/assets/images/home/pattern-image-2.png'
              alt='strnix image'
            />
          </div>
          <div className='main-installation'>
            <div className='services '>
              <div className='mainsevices row'>
                <div
                  className='imgelmleft col-lg-5 col-md-6 col-sm-12 '
                  data-aos='fade-left'
                >
                  <div className='imgdemo '>
                    <Image
                      fill
                      loading='lazy'
                      src='/assets/images/home/featured-image-3.jpg'
                      alt='strnix image'
                    />
                    <div
                      className='imgcircle'
                      data-aos='spin'
                      data-aos-duration='2000'
                    >
                      <Image
                        fill
                        loading='lazy'
                        src='/assets/images/home/homepanel.svg'
                        alt='strnix image'
                      />
                    </div>
                  </div>
                </div>
                <div
                  className=' textright col-lg-7 col-md-6 col-sm-12'
                  data-aos='fade-right'
                >
                  <div className='textsub '>
                    <h2>
                      <strong>Solar Panels Installation</strong>
                    </h2>
                    <div className='wraptext '>
                      <p>WITH MOST SUNLIGHT CONVERSION EFICIENCY</p>
                    </div>
                    <div className='contenttext '>
                      <p>
                        Aenean volutpat, sem sit amet ullamcorper gravida,
                        tortor arcu molestie risus, ut bibendum urna enim nulla.
                        Pellentesque porta arcu velit, faucibus kodales dolor
                        rhoncus sed. Curabitur lacinia massa vitae efficitur
                        porttitor. Sed scelerisque vestibulum lectus, at egestas
                        erat varius.
                      </p>
                    </div>
                    <span className='getstart'>
                      <a href='# '>
                        GET STARTED<i className='fas fa-arrow-right '></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className='row mainsevices '>
                <div
                  className='textleft col-lg-7 col-md-6 col-sm-12'
                  data-aos='fade-left'
                >
                  <div className='textsub '>
                    <h2>
                      <strong>Solar Panels Installation</strong>
                    </h2>
                    <div className='wraptext '>
                      <p>WITH MOST SUNLIGHT CONVERSION EFICIENCY</p>
                    </div>
                    <div className='contenttext '>
                      <p>
                        Aenean volutpat, sem sit amet ullamcorper gravida,
                        tortor arcu molestie risus, ut bibendum urna enim nulla.
                        Pellentesque porta arcu velit, faucibus kodales dolor
                        rhoncus sed. Curabitur lacinia massa vitae efficitur
                        porttitor. Sed scelerisque vestibulum lectus, at egestas
                        erat varius.
                      </p>
                    </div>
                    <span className='getstart'>
                      <a href='# '>
                        GET STARTED<i className='fas fa-arrow-right '></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className='imgelmright col-lg-5 col-md-6 col-sm-12'
                  data-aos='fade-right'
                >
                  <div className='imgdemo '>
                    <Image
                      fill
                      loading='lazy'
                      src='/assets/images/home/featured-image-4.jpg'
                      alt='strnix image'
                    />
                    <div
                      className='imgcircle'
                      data-aos='spin'
                      data-aos-duration='2000'
                    >
                      <Image
                        fill
                        loading='lazy'
                        src='/assets/images/home/energy.svg'
                        alt='strnix image'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mainsevices '>
                <div
                  className='imgelmleft col-lg-5 col-md-6 col-sm-12'
                  data-aos='fade-left'
                >
                  <div className='imgdemo '>
                    <Image
                      fill
                      loading='lazy'
                      src='/assets/images/home/featured-image-5.jpg'
                      alt='strnix image'
                    />
                    <div
                      className='imgcircle'
                      data-aos='spin'
                      data-aos-duration='2000'
                    >
                      <Image
                        fill
                        loading='lazy'
                        src='/assets/images/home/electricsvg.svg'
                        alt='strnix image'
                      />
                    </div>
                  </div>
                </div>
                <div
                  className=' textright col-lg-7 col-md-6 col-sm-12 '
                  data-aos='fade-right'
                >
                  <div className='textsub '>
                    <h2>
                      <strong>Upgrade Or Replacement</strong>
                    </h2>
                    <div className='wraptext '>
                      <p>GET YOUR PANELS IN GOOD SHAPE REGULARLY</p>
                    </div>
                    <div className='contenttext '>
                      <p>
                        Aenean volutpat, sem sit amet ullamcorper gravida,
                        tortor arcu molestie risus, ut bibendum urna enim nulla.
                        Pellentesque porta arcu velit, faucibus kodales dolor
                        rhoncus sed. Curabitur lacinia massa vitae efficitur
                        porttitor. Sed scelerisque vestibulum lectus, at egestas
                        erat varius.
                      </p>
                    </div>
                    <span className='getstart'>
                      <a href='# '>
                        GET STARTED<i className='fas fa-arrow-right '></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='consultation-form'>
        <div className='bgimg '></div>
        <div className='consultation-container '>
          <div className='elmif ' data-aos='fade-right'>
            <div className='title-text '>
              <p>
                WHO ARE STRNIX <i className='fas fa-bolt '></i>
              </p>
            </div>
            <h2>Get Free Consultation</h2>
            <div className='subtext '>
              <p>For Controling Your Energy Production</p>
            </div>
            <div className='bottomtitle2 '>
              <span className='line '></span>
              <span className='dottitle '></span>
              <span className='dottitle '></span>
              <span className='dottitle '></span>
            </div>
          </div>
          <div className='support '>
            <div className='form-request ' data-aos='fade-up'>
              <form>
                <div className='row-input clearfix '>
                  <div className='form-group col-lg-4 col-md-6 col-sm-12'>
                    <input
                      type='text'
                      name='name '
                      placeholder='Your Name '
                      required
                    />
                  </div>
                  <div className='form-group  col-lg-4 col-md-6 col-sm-12'>
                    <input
                      type='email'
                      name='email '
                      placeholder='Email '
                      required
                    />
                  </div>
                  <div className='form-group  col-lg-4 col-md-12 col-sm-12'>
                    <input
                      type='tel '
                      name='phone-number '
                      placeholder='Phone '
                      pattern='[0-9]{4}[0-9]{3}[0-9]{3}'
                      required
                    />
                  </div>
                  <div className='form-group  col-xl-12'>
                    <select className='custom-select-box ' name='field-name '>
                      <option>Subject / Discuss About Service</option>
                      <option>Installation</option>
                      <option>Maintenance</option>
                      <option>Replacement</option>
                    </select>
                  </div>
                  <div className='linkbox '>
                    <button type='submit' className='link-text effect '>
                      <span className='btn-txt '>Send Request</span>
                      <span className='btn-icon '>
                        <i className='fas fa-arrow-right '></i>{' '}
                      </span>
                    </button>
                  </div>
                </div>
              </form>

              <div className='response '>
                <p>Thank you for your messeage. It has been sent.</p>
              </div>

              <div className='textcontent '>
                <div className='sub-titletext '>
                  <span className='txt '>OR IF YOU NEED QUICK ASSISTANCE</span>
                </div>
                <div className='info-support '>
                  Call Us 24/7 For Customer Support At{' '}
                  <span className='icon '></span>
                  <a href='# '>
                    <Image
                      width={50}
                      height={50}
                      loading='lazy'
                      src='/assets/images/home/phone.svg'
                      alt='phone '
                    />
                    (222)-303-4500
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='clients-slide'>
        <div className='client-box container-md py-[120px]'>
          <div
            className='titleprogram text-center'
            data-aos='fade-right'
            data-aos-duration='2000'
          >  <div className='title-text '>
          <p>
          For Controling Your Energy Production
          </p>
        </div>
            <h2>What Clients Saying</h2>
            
            <div className='bottomtitle2 '>
              <span className='line '></span>
              <span className='dottitle '></span>
              <span className='dottitle '></span>
              <span className='dottitle '></span>
            </div>
          </div>
          <Slider {...setting} className='py-[40px]'>
            <div className='client-inner'>
              <div className='row'>
                <div className='client d-inline-flex items-center'>
                  <span className=' px-5 text-[40px] text-[#dde0e8] d-block flaticon-blocks-with-angled-cuts'></span>

                  <Image
                    
                    className='aspect-[1/1] rounded-full'
                    width={125}
                    height={125}
                    src='/assets/images/services/author-thumb-6.jpg'
                    alt='user'
                  />
                  <span className='px-5 text-[40px] text-[#dde0e8] d-block flaticon-straight-quotes'></span>
                </div>
              </div>
              <div className='text-center py-6 px-5'>
                <div className="text py-3 font-weight-[500] text-xl font-['Merriweather',serif]">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea comod duis aute irure dolor reprehenderit velit esse cillum
                  dolore fugiat ipsum nulla pariatur eaxcepteur sint occaecat
                  cupidatat non proident sunt in culpa enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris aliquip.
                </div>
                <div className='client-info text-xl py-3'>Camron White</div>
              </div>
            </div>
            <div className='client-inner'>
              <div className='row'>
                <div className='client d-inline-flex items-center'>
                  <span className=' px-5 text-[40px] text-[#dde0e8] d-block flaticon-blocks-with-angled-cuts'></span>

                  <Image
                    
                    className='aspect-[1/1] rounded-full'
                    width={125}
                    height={125}
                    src='/assets/images/services/author-thumb-6.jpg'
                    alt='user'
                  />
                  <span className='px-5 text-[40px] text-[#dde0e8] d-block flaticon-straight-quotes'></span>
                </div>
              </div>
              <div className='text-center py-6 px-5'>
                <div className="text py-3 font-weight-[500] text-xl font-['Merriweather',serif]">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea comod duis aute irure dolor reprehenderit velit esse cillum
                  dolore fugiat ipsum nulla pariatur eaxcepteur sint occaecat
                  cupidatat non proident sunt in culpa enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris aliquip.
                </div>
                <div className='client-info text-xl py-3'>Camron White</div>
              </div>
            </div>
            <div className='client-inner'>
              <div className='row'>
                <div className='client d-inline-flex items-center'>
                  <span className=' px-5 text-[40px] text-[#dde0e8] d-block flaticon-blocks-with-angled-cuts'></span>

                  <Image
                    
                    className='aspect-[1/1] rounded-full'
                    width={125}
                    height={125}
                    src='/assets/images/services/author-thumb-6.jpg'
                    alt='user'
                  />
                  <span className='px-5 text-[40px] text-[#dde0e8] d-block flaticon-straight-quotes'></span>
                </div>
              </div>
              <div className='text-center py-6 px-5'>
                <div className="text py-3 font-weight-[500] text-xl font-['Merriweather',serif]">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea comod duis aute irure dolor reprehenderit velit esse cillum
                  dolore fugiat ipsum nulla pariatur eaxcepteur sint occaecat
                  cupidatat non proident sunt in culpa enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris aliquip.
                </div>
                <div className='client-info text-xl py-3'>Camron White</div>
              </div>
            </div>
            <div className='client-inner'>
              <div className='row'>
                <div className='client d-inline-flex items-center'>
                  <span className=' px-5 text-[40px] text-[#dde0e8] d-block flaticon-blocks-with-angled-cuts'></span>

                  <Image
                    
                    className='aspect-[1/1] rounded-full'
                    width={125}
                    height={125}
                    src='/assets/images/services/author-thumb-6.jpg'
                    alt='user'
                  />
                  <span className='px-5 text-[40px] text-[#dde0e8] d-block flaticon-straight-quotes'></span>
                </div>
              </div>
              <div className='text-center py-6 px-5'>
                <div className="text py-3 font-weight-[500] text-xl font-['Merriweather',serif]">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea comod duis aute irure dolor reprehenderit velit esse cillum
                  dolore fugiat ipsum nulla pariatur eaxcepteur sint occaecat
                  cupidatat non proident sunt in culpa enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris aliquip.
                </div>
                <div className='client-info text-xl py-3'>Camron White</div>
              </div>
            </div>
            <div className='client-inner'>
              <div className='row'>
                <div className='client d-inline-flex items-center'>
                  <span className=' px-5 text-[40px] text-[#dde0e8] d-block flaticon-blocks-with-angled-cuts'></span>

                  <Image
                    
                    className='aspect-[1/1] rounded-full'
                    width={125}
                    height={125}
                    src='/assets/images/services/author-thumb-6.jpg'
                    alt='user'
                  />
                  <span className='px-5 text-[40px] text-[#dde0e8] d-block flaticon-straight-quotes'></span>
                </div>
              </div>
              <div className='text-center py-6 px-5'>
                <div className="text py-3 font-weight-[500] text-xl font-['Merriweather',serif]">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea comod duis aute irure dolor reprehenderit velit esse cillum
                  dolore fugiat ipsum nulla pariatur eaxcepteur sint occaecat
                  cupidatat non proident sunt in culpa enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris aliquip.
                </div>
                <div className='client-info text-xl py-3'>Camron White</div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
