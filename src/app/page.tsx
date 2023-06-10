'use client';
import { Rate, Tabs, Form, Input, Select, notification, message, } from 'antd';
import Image from 'next/image';
import React, { useEffect }  from 'react';
import Slider, { Settings } from 'react-slick';
import { isMobile, isTablet } from 'react-device-detect';
import CountUp from 'react-countup';
import CustomButtonSlide from '@/components/buttonCustom/CustomButtonSlide';
import CustomBtnHover from '@/components/buttonCustom/CustomBtnHover';
import { emailValiate, phoneValidate } from '@/utils/validate';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { sendForm } from '@/redux/formSlice/formSlice';
const Homepage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state:RootState) => 
    state.formReducer.isLoading
  );
  const hasErr = useAppSelector((state:RootState) => 
    state.formReducer.hasErr
  );
  useEffect(() => {
    isLoading ?   message.loading({
     content: "Sending..",
     duration:0,
    }) : message.destroy();
    hasErr &&  notification.error({
        message: 'ERORR',
      description:
        'There was an error sending!',
      });
  }, [isLoading, hasErr]);
  const sendFormRequest = async (value:any) => {
   
    const res = await dispatch(sendForm(value));
    if (res.payload) {
      notification.success({
        message: 'Success',
      description:
        'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      });
    }
   
  };
  const setting: Settings = {
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    useTransform: false,
    dotsClass: 'owl-dots',
    customPaging: (index) => {
      return <span></span>;
    },
  };
  const reviewSlide: Settings = {
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    useTransform: false,
    speed: 500,
    autoplaySpeed: 3000,
    nextArrow: <CustomButtonSlide position = 'right'/>,
    prevArrow: <CustomButtonSlide position='left'/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slide: Settings = {
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    useTransform: false,
    speed: 500,
    autoplaySpeed: 3000,
    nextArrow: <CustomButtonSlide position ='right'/>,
    prevArrow: <CustomButtonSlide position='left'/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const dataTabs: any[] = [
    {
      label: 'Raymond Era',
      sublabel: '5.2KW SYSTEM',
      image: '/assets/images/home/featured-image-6.jpg',
    },
    {
      label: 'House Villa',
      sublabel: '5.2KW SYSTEM',
      image: '/assets/images/home/featured-image-7.jpg',
    },
    {
      label: 'Agri Lounge',
      sublabel: '5.2KW SYSTEM',
      image: '/assets/images/home/featured-image-8.jpg',
    },
  ];
  return (
    <>
      <div
        className='page-baner'
    
      >
        <Slider {...setting}>
          <div className='header-slides '>
            <div
              className='img-slide slide'
              style={{ backgroundImage: 'url(/assets/images/home/slide1.jpg)' }}
            ></div>
            <div className='image-layer '>
              <div className='text-img '>
                <span>
                  {' '}
                  <i className='fas fa-solar-panel '></i> W E L C O M E T O S T
                  R N I X <i className='fas fa-solar-panel '></i>
                </span>
              </div>
              <div className='text-info '>
                <h1>Take Your Building Or Home Off The Grid By Solar</h1>
              </div>
            </div>
          </div>
          <div className='header-slides '>
            <div
              className='img-slide slide'
              style={{ backgroundImage: 'url(/assets/images/home/slide1.jpg)' }}
            ></div>
            <div className='image-layer '>
              <div className='text-img '>
                <span>
                  {' '}
                  <i className='fas fa-solar-panel '></i> W E L C O M E T O S T
                  R N I X <i className='fas fa-solar-panel '></i>
                </span>
              </div>
              <div className='text-info '>
                <h1>Take Your Building Or Home Off The Grid By Solar</h1>
              </div>
            </div>
          </div>
          <div className='header-slides '>
            <div
              className='img-slide slide'
              style={{ backgroundImage: 'url(/assets/images/home/slide1.jpg)' }}
            ></div>
            <div className='image-layer '>
              <div className='text-img '>
                <span>
                  {' '}
                  <i className='fas fa-solar-panel '></i> W E L C O M E T O S T
                  R N I X <i className='fas fa-solar-panel '></i>
                </span>
              </div>
              <div className='text-info '>
                <h1>Take Your Building Or Home Off The Grid By Solar</h1>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className='solar-Solutions'>
        <div className='solar-Solutions-elm clearfix '>
          <div className='elm-left col-lg-6 col-md-12 col-sm-12 '>
            <div className='imgelm '>
              <div className='img-left' data-aos='fade-right'>
                <Image
                  fill
                  loading='lazy'
                  src='/assets/images/home/featured-image-1.jpg'
                  alt='strnix image'
                />
              </div>
            </div>
            <div className='img-bottom ' data-aos='fade-left'>
              <Image
                fill
                loading='lazy'
                src='/assets/images/home/featured-image-2.jpg'
                alt='strnix image'
              />
            </div>
          </div>
          <div className='elm-right col-lg-6 col-md-12 col-sm-12'>
            <div className='elmif' data-aos='fade-right'>
              <div className='title-text'>
                <p>
                  WHO ARE STRNIX <i className='fas fa-bolt'></i>
                </p>
              </div>
              <h2>Integrated Solar Solutions</h2>
              <div className='subtext'>
                <p>For Controling Your Energy Production</p>
              </div>
              <div className='bottomtitle clearfix'>
                <span className='line '></span>
                <span className='dottitle '></span>
                <span className='dottitle '></span>
                <span className='dottitle '></span>
              </div>
            </div>
            <div className='elmtextinfo '>
              <p>
                Nunc quam arcu, pretium quis quam sed, laoreet efficitur leo.
                Aliquam era volutpat. Integer lobortis sem consequat consequat
                imperdiet. In nulla sed viverra ut lorem ut, dapibus consectetur
                diam. Nunc bibendum imperdiet condimentum. Duis lacinia pulvinar
                turpis lacinia feugiat.
              </p>
              <div className='texteffect '>
                <p>
                  Vivamus tellus enim, euismod euismod laoreet nec, aliquet ut
                  metus. Cras feugiat turpis varius pellentesque eleifend.
                  Vivamus porta ipsum diamy ac congue felis imperdiet vitae duis
                  porttitor.
                </p>
              </div>
            </div>
            <div className='iconenergy '>
              <div className='icon ' data-aos='fade-up'>
                <div className='img-solar  '>
                  <i aria-hidden='true' className='flaticon-solar-energy'></i>
                  <p>
                    <strong>SAVE ENERGY FOR WORLD</strong>{' '}
                  </p>
                </div>

                <div className=' img-solar'>
                  <i aria-hidden='true' className='flaticon-solar-panel'></i>
                  <p>
                    <strong> RESIDENTIALS SOLUTIONS</strong>
                  </p>
                </div>
                <div className='img-solar '>
                  <i aria-hidden='true' className=' flaticon-forest'></i>
                  <p>
                    <strong>GET ENERGY FORESTS</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='comprehensive-programs'>
        <div className='elmprogram'>
          <div
            className='titleprogram'
            data-aos='fade-right'
            data-aos-duration='2000'
          >
            <div className='title-text '>
              <p>
                STRINIX IS IMPORTANT <i className='fas fa-bolt '></i>
              </p>
            </div>
            <h2>Comprehensive Programs</h2>
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
          <div className='imgprogram'>
            <Slider {...slide}>
              <div className='imglinkcontent '>
                <div className='imgobject hoverimg '>
                  <Image
                    loading='lazy'
                    fill
                    src='/assets/images/home/program-image-3.jpg'
                    alt='work '
                  />
                  <div className='hidentext '>
                    <div className='elmhiden '>
                      <div className='flation'>
                        <i aria-hidden='true' className='flaticon-chimney'></i>
                      </div>
                      <p>
                        Integer lobortisy consequat consequat imperdiet sed
                        nulla sed viverra ut lorem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=' linkimg '>
                  <strong>
                    <a href='# '>Solar Thermal Systems</a>
                  </strong>
                </div>
              </div>
              <div className='imglinkcontent '>
                <div className='imgobject hoverimg'>
                  <Image
                    loading='lazy'
                    fill
                    src='/assets/images/home/program-image-4.jpg'
                    alt='charges '
                  />
                  <div className='hidentext '>
                    <div className='elmhiden '>
                      <div className='flation '>
                        <i aria-hidden='true' className=' flaticon-chimney'></i>{' '}
                      </div>
                      <p>
                        Integer lobortisy consequat consequat imperdiet sed
                        nulla sed viverra ut lorem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=' linkimg '>
                  <strong>
                    <a href='# '>Residential EV Chanrgersrs </a>
                  </strong>
                </div>
              </div>
              <div className='imglinkcontent '>
                <div className='imgobject hoverimg '>
                  <Image
                    fill
                    loading='lazy'
                    src='/assets/images/home/program-image-2.jpg'
                    alt='strnix image'
                  />
                  <div className='hidentext '>
                    <div className='elmhiden '>
                      <div className='flation '>
                        <i aria-hidden='true' className=' flaticon-chimney'></i>{' '}
                      </div>
                      <p>
                        Integer lobortisy consequat consequat imperdiet sed
                        nulla sed viverra ut lorem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=' linkimg '>
                  <strong>
                    <a href='# '>Commercial Solutions</a>
                  </strong>
                </div>
              </div>
              <div className='imglinkcontent '>
                <div className='imgobject hoverimg '>
                  <Image
                    loading='lazy'
                    fill
                    src='/assets/images/home/program-image-1.jpg'
                    alt='strnix image'
                  />
                  <div className='hidentext '>
                    <div className='elmhiden '>
                      <div className='flation '>
                        <i aria-hidden='true' className=' flaticon-chimney'></i>{' '}
                      </div>
                      <p>
                        Integer lobortisy consequat consequat imperdiet sed
                        nulla sed viverra ut lorem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=' linkimg '>
                  <strong>
                    <a href='# '>Solar Thermal Systems</a>
                  </strong>
                </div>
              </div>
              <div className='imglinkcontent '>
                <div className='imgobject hoverimg '>
                  <Image
                    fill
                    loading='lazy'
                    src='/assets/images/home/program-image-3.jpg'
                    alt='work '
                  />
                  <div className='hidentext '>
                    <div className='elmhiden '>
                      <div className='flation '>
                        <i aria-hidden='true' className=' flaticon-chimney'></i>
                      </div>
                      <p>
                        Integer lobortisy consequat consequat imperdiet sed
                        nulla sed viverra ut lorem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=' linkimg '>
                  <strong>
                    <a href='# '>Solar Thermal Systems</a>
                  </strong>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className='register-cleaner'>
        <div className='auto-container'>
          <div className='panel '>
            <span className='flaticon-solar-panel'></span>
          </div>
          <div className='row clearfix row-text'>
            <div className='row-content col-xl-4 col-lg-12 col-md-12 '>
              <h2 data-aos='fade-right'>
                {"We're Dedicated To "}<br /> Build A Cleaner Future
              </h2>
            </div>
            <Form  onFinish={(value: any) => sendFormRequest(value)} onFinishFailed={(err:any)=>console.log(err)} className='form col-xl-8 col-lg-12 col-md-12 '>
              <div className='elm-form row clearfix'>
                <div className='form-group  inputform col-lg-4 col-md-6 col-sm-12'>
                  <Form.Item
                  name='name'
                  >
                  <Input
                    id='text'    
                    prefix={<i className='fas fa-user '></i>}  
                    placeholder='Your Name '
                  />                   
                 </Form.Item>
                </div>

                <div className=' form-group inputform col-lg-4 col-md-6 col-sm-12'>
               
                  <Form.Item
                    
                    name='email'
                    rules={[{
                      validator: (_, value) => {
                        if (!value || value.trim() === '') {
                          return Promise.reject('The field is required.');
                         }
                         if (!emailValiate(value)) {
                           return Promise.reject('The e-mail address entered is invalid.');
                         }
                         return Promise.resolve();
                      }
                    }]}
                  >
               
                    <Input
                    prefix={<i className='fas fa-envelope-open'></i>}
                    id='text'
                    placeholder='Your Email '
                  />
                 </Form.Item>
                </div>
                <button className='form-group  btnbox inputform col-lg-4 col-md-6 col-sm-12'>
                  <CustomBtnHover text='Get More Info'/>
                </button>
              </div>
              <div className='noti'>
                <p>Thank you for your message. It has been sent.</p>
              </div>
            </Form>
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
      <div className='recent-projects'>
        <div className='bgfirst '></div>
        <div className='recent-projects-main '>
          <div className='five-elm row clearfix '>
            <div className='elmfiveleft col-xl-5 col-lg-5 col-sm-12 '>
              <div className='content' data-aos='fade-right'>
                <div className='elmif '>
                  <div className='title-text '>
                    <p>
                      WHO ARE STRNIX <i className='fas fa-bolt '></i>
                    </p>
                  </div>
                  <h2>The Recent Projects</h2>
                  <div className='subtext '>
                    <p>For Controling Your Energy Production</p>
                  </div>
                  <div className='bottomtitle clearfix '>
                    <span className='line '></span>
                    <span className='dottitle '></span>
                    <span className='dottitle '></span>
                    <span className='dottitle '></span>
                  </div>
                </div>
                <div className='elmtextinfo '>
                  <p>
                    Aliquam era volutpat. Integer lobortis sem consequat
                    consequat imperdiet. In nulla sed viverra ut lorem dapib
                    consectetur bibendum imperdiets.
                  </p>
                </div>
                <div className='linkbox '>
                  <a href='# ' className='link '>
                    <CustomBtnHover text='View All Work'/>
                  </a>
                </div>
              </div>
            </div>
            <div className='elm-five-right col-xl-7 col-lg-7 col-sm-12 '>
              <div className='fivecontent ' id='tabs' data-aos='fade-left'>
                <Tabs type='card' tabPosition={isMobile || isTablet ? 'top' : 'bottom'}>
                  {dataTabs.map((value, index) => {
                    return (
                      <Tabs.TabPane key={index} tab={value.label}>
                        {
                          <div className='tab'>
                            <Image
                              fill
                              loading='lazy'
                              src={value.image}
                              alt='strnix image'
                            />
                            <div className='subimg '>COMMERCIAL</div>
                          </div>
                        }
                      </Tabs.TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <div className='sub-recent-projects '>
          <div className='bgsecond '></div>

          <div className='content '>
            <div className='method ' data-aos='fade-up'>
              <ul>
                <li className='col-lg-3 col-md-6 col-sm-12'>
                  <span className='method-icon '>
                    <i className='fas fa-bolt '></i>
                  </span>
                  <h2>
                    {
                      <CountUp
                        className='counter'
                        redraw
                        start={0}
                        enableScrollSpy={true}
                        scrollSpyDelay={0}
                        end={24}
                        duration={3}
                        scrollSpyOnce={true}
                      />
                    }

                    {'+ Years'}
                  </h2>
                  <p>Of Experience & Record</p>
                </li>

                <li className='col-lg-3 col-md-6 col-sm-12'>
                  <span className='method-icon '>
                    <i className='fas fa-bolt '></i>
                  </span>
                  <h2>
                    {
                      <CountUp
                        className='counter'
                        redraw
                        start={0}
                        enableScrollSpy={true}
                        scrollSpyDelay={0}
                        end={3500}
                        duration={3}
                        scrollSpyOnce={true}
                      />
                    }

                    {'+'}
                  </h2>
                  <p>System Installed</p>
                </li>
                <li className='col-lg-3 col-md-6 col-sm-12'>
                  <span className='method-icon '>
                    <i className='fas fa-bolt '></i>
                  </span>
                  <h2>
                    {
                      <CountUp
                        className='counter'
                        redraw
                        start={0}
                        enableScrollSpy={true}
                        scrollSpyDelay={0}
                        end={6.5}
                        decimals={1}
                        duration={3}
                        scrollSpyOnce={true}
                      />
                    }

                    {'k Watt'}
                  </h2>
                  <p>Energy Financing Done</p>
                </li>
                <li className='col-lg-3 col-md-6 col-sm-12'>
                  <span className='method-icon '>
                    <i className='fas fa-bolt '></i>
                  </span>
                  <h2>
                    {
                      <CountUp
                        className='counter'
                        redraw
                        start={0}
                        enableScrollSpy={true}
                        scrollSpyDelay={0}
                        end={2700}
                        duration={3}
                        scrollSpyOnce={true}
                      />
                    }

                    {'+'}
                  </h2>
                  <p>Hours Of Inspection</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='client-reviews'>
        <div className='imgbg '></div>
        <div className='main-client-reviews '>
          <div className='elmif ' data-aos='fade-right'>
            <div className='title-text '>
              <p>
                WHO ARE STRNIX <i className='fas fa-bolt '></i>
              </p>
            </div>
            <h2>{ "Client's Reviews"}</h2>
            <div className='subtext '>
              <p>Company Testimonials</p>
            </div>
            <div className='bottomtitle2 '>
              <span className='line '></span>
              <span className='dottitle '></span>
              <span className='dottitle '></span>
              <span className='dottitle '></span>
            </div>
          </div>
          <div className='container slides-comment' data-aos='fade-up'>
            <Slider {...reviewSlide}>
              <div className='vote'>
                <div className='elm-cmt'>
                  <div className='quote '>
                    <i aria-hidden='true' className=' flaticon-quote-1'></i>{' '}
                  </div>
                  <Rate value={5} disabled />
                  <div className='text '>
                    <p>
                      Integer lobortis sem consequat consequat imperdiet. In
                      nulla sed viverra ut lorem dap ib consectetur bibendum
                      imperdiets. Aliquam era volutpat dolore eu fugiat nulla
                      pariatur excepteur sint occaecat.
                    </p>
                  </div>
                  <div className='user '>
                    <div className='user-avt '>
                      <Image
                        fill
                        loading='lazy'
                        src='/assets/images/home/author-thumb-1.jpg'
                        alt='strnix image'
                      />
                    </div>

                    <p className='name '>Erina Soulasd</p>
                    <p className='address '>Florida, USA</p>
                  </div>
                </div>
              </div>
              <div className='vote'>
                <div className='elm-cmt'>
                  <div className='quote '>
                    <i aria-hidden='true' className=' flaticon-quote-1'></i>{' '}
                  </div>
                  <Rate value={5} disabled />
                  <div className='text '>
                    <p>
                      Integer lobortis sem consequat consequat imperdiet. In
                      nulla sed viverra ut lorem dap ib consectetur bibendum
                      imperdiets. Aliquam era volutpat dolore eu fugiat nulla
                      pariatur excepteur sint occaecat.
                    </p>
                  </div>
                  <div className='user '>
                    <div className='user-avt '>
                      <Image
                        fill
                        loading='lazy'
                        src='/assets/images/home/author-thumb-2.jpg'
                        alt='strnix image'
                      />
                    </div>

                    <p className='name '>Noal Hsuat</p>
                    <p className='address '>Florida, USA</p>
                  </div>
                </div>
              </div>
              <div className='vote'>
                <div className='elm-cmt'>
                  <div className='quote '>
                    <i aria-hidden='true' className=' flaticon-quote-1'></i>{' '}
                  </div>
                  <Rate value={5} disabled />
                  <div className='text '>
                    <p>
                      Integer lobortis sem consequat consequat imperdiet. In
                      nulla sed viverra ut lorem dap ib consectetur bibendum
                      imperdiets. Aliquam era volutpat dolore eu fugiat nulla
                      pariatur excepteur sint occaecat.
                    </p>
                  </div>
                  <div className='user '>
                    <div className='user-avt '>
                      <Image
                        fill
                        loading='lazy'
                        src='/assets/images/home/author-thumb-1.jpg'
                        alt='strnix image'
                      />
                    </div>

                    <p className='name '>Erina Soulasd</p>
                    <p className='address '>Florida, USA</p>
                  </div>
                </div>
              </div>
              <div className='vote'>
                <div className='elm-cmt'>
                  <div className='quote '>
                    <i aria-hidden='true' className=' flaticon-quote-1'></i>{' '}
                  </div>
                  <Rate value={5} disabled />
                  <div className='text '>
                    <p>
                      Integer lobortis sem consequat consequat imperdiet. In
                      nulla sed viverra ut lorem dap ib consectetur bibendum
                      imperdiets. Aliquam era volutpat dolore eu fugiat nulla
                      pariatur excepteur sint occaecat.
                    </p>
                  </div>
                  <div className='user '>
                    <div className='user-avt '>
                      <Image
                        fill
                        loading='lazy'
                        src='/assets/images/home/author-thumb-2.jpg'
                        alt='strnix image'
                      />
                    </div>

                    <p className='name '>Noal Hsuat</p>
                    <p className='address '>Florida, USA</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className='pricing-structure'>
        <div className='body-container'>
          <div className='row-info clearfix '>
            <div className='elmif ' data-aos='fade-right'>
              <div className='title-text '>
                <p>
                  WHO ARE STRNIX <i className='fas fa-bolt '></i>
                </p>
              </div>
              <h2>Pricing Structure</h2>
              <div className='subtext '>
                <p>Transparent & Flexible Pricing</p>
              </div>
              <div className='bottomtitle '>
                <span className='line '></span>
                <span className='dottitle '></span>
                <span className='dottitle '></span>
                <span className='dottitle '></span>
              </div>
            </div>
            <div className='btn-show '>
              <span className='btn-check active '>Monthly</span>
              <span className='btn-check '>yearly</span>
            </div>
          </div>
          <div className='row clearfix'>
            <div className='tab col-xl-4 col-md-6 col-sm-12 '>
              <div className='tab-element' data-aos='fade-up'>
                <i aria-hidden='true' className='flaticon-power-7'></i>{' '}
                <div className='img-name '>SEAMLESS COSTT</div>
                <h2>Residential Area</h2>
                <div className='icon-flash '>
                  <i className='fas fa-bolt '></i>
                </div>
                <div className='cost '>
                  <span className='curency '>$</span>
                  <span className='money '>14.30</span>
                </div>
                <div className='cost-w '>PER WATT</div>
                <p>Eco-Packing Systems</p>
                <p>Minimal Energy Waste</p>
                <p>High Density Cells</p>
                <p>Environmental Frendly</p>
                <p>Monitoring & Maintaince</p>
                <div className='linkbox '>
                  <a href='# ' className='link '>
                   <CustomBtnHover text='Get started'/>
                  </a>
                </div>
              </div>
            </div>

            <div className='tab col-xl-4 col-md-6 col-sm-12'>
              <div className='tab-element view ' data-aos='fade-down'>
                <i aria-hidden='true' className='flaticon-nuclear-power'></i>
                <div className=' img-name '>SEAMLESS COSTT</div>
                <h2>Commercial Area</h2>
                <div className='icon-flash '>
                  <i className='fas fa-bolt'></i>
                </div>
                <div className='cost '>
                  <span className='curency '>$</span>
                  <span className='money '>25.08</span>
                </div>
                <div className='cost-w '>PER WATT</div>
                <p>Eco-Packing Systems</p>
                <p>Minimal Energy Waste</p>
                <p>High Density Cells</p>
                <p>Environmental Frendly</p>
                <p>Monitoring & Maintaince</p>
                <div className='linkbox '>
                  <a href='# ' className='link '>
                  <CustomBtnHover text='Get started'/>
                  </a>
                </div>
              </div>
            </div>
            <div className='tab col-xl-4 col-md-6 col-sm-12'>
              <div className='tab-element ' data-aos='fade-up'>
                <i aria-hidden='true' className=' flaticon-solar-panel-1'></i>
                <div className=' img-name '>SEAMLESS COSTT</div>
                <h2>Agricultral Area</h2>
                <div className='icon-flash '>
                  <i className='fas fa-bolt '></i>
                </div>
                <div className='cost '>
                  <span className='curency '>$</span>
                  <span className='money '>14.30</span>
                </div>
                <div className='cost-w '>PER WATT</div>
                <p>Eco-Packing Systems</p>
                <p>Minimal Energy Waste</p>
                <p>High Density Cells</p>
                <p>Environmental Frendly</p>
                <p>Monitoring & Maintaince</p>
                <div className='linkbox '>
                  <a href='# ' className='link '>
                  <CustomBtnHover text='Get started'/>
                  </a>
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
              <Form  onFinish={(value:any)=> sendFormRequest(value)} onFinishFailed={(err:any)=>{ console.log(err); }}>
                <div className='row-input clearfix '>
                  <div className='form-group col-lg-4 col-md-6 col-sm-12'>
                    <Form.Item
                      name='name'
                      rules={[{
                        required: true,
                        message:"The field is required"
                      }]}
                    >
                    <Input
                      
                      placeholder='Your Name '
                      
                    />
                    </Form.Item>
                  </div>
                  <div className='form-group  col-lg-4 col-md-6 col-sm-12'>
                    <Form.Item
                      name='email'
                      rules={[{
                        validator: (_, value) => {
                          if (!value || value.trim() === '') {
                            return Promise.reject('The field is required.');
                           }
                           if (!emailValiate(value)) {
                             return Promise.reject('The e-mail address entered is invalid.');
                           }
                           return Promise.resolve();
                        }
                      }]}
                    >
                    <Input
                      
                      placeholder='Email '
                      
                    />
                   </Form.Item>
                  </div>
                  <div className='form-group  col-lg-4 col-md-12 col-sm-12'>
                    <Form.Item
                      name='phone'
                  
                      rules={[{
                        validator: (_, value) => {
                          if (!value || value.trim() === '') {
                            return Promise.reject('The field is required.');
                           }
                           if (!phoneValidate(value)) {
                             return Promise.reject('The phone number entered is invalid.');
                           }
                           return Promise.resolve();
                        }
                      }]}
                    >
                    <Input
                   placeholder='Phone '
                   
                 />
                   </Form.Item>
                  </div>
                  <div className='form-group  col-xl-12'>
                    {/* <select className='custom-select-box ' name='field-name '>
                      <option>Subject / Discuss About Service</option>
                      <option>Installation</option>
                      <option>Maintenance</option>
                      <option>Replacement</option>
                    </select> */}
                    <Form.Item
                      name='select'
                      rules={[{
                        required: true,
                        message:"The field is required"
                      }]}
                    >
                      <Select
                      
                        placeholder='Subject / Discuss About Service'
                        options={[{
                          value: 'Installation',
                          label:'Installation'
                          
                        },
                          {
                            value: 'Maintenance',
                          label:'Maintenance'
                          },
                         { value: 'Replacement',
                          label:'Replacement'}
                        
                        ]}
                        allowClear
                      />
                
                    </Form.Item>
                  </div>
                  <div className='linkbox '>
                    <button type='submit'>
                    <CustomBtnHover text='Send Request'/>
                    </button>
                  </div>
                </div>
              </Form>

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
      <div className='strnix-news'>
        <div className='news-container '>
          <div className='elmif ' data-aos='fade-right'>
            <div className='title-text '>
              <p>
                STRNIX IS IMPORTANT <i className='fas fa-bolt '></i>
              </p>
            </div>
            <h2>Latest Company News</h2>
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
          <div className='body-container'>
            <div className='row clearfix '>
              <div
                className='tab col-lg-4 col-md-6 col-sm-12'
                data-aos='fade-down'
              >
                <div className='news '>
                  <div className='img-date '>
                    <a href='# '>
                      <Image
                        priority
                        width='773'
                        height='451'
                        src='/assets/images/home/Artboard-–-1-4.png'
                        alt='strnix'
                      />
                    </a>
                    <div className='date '>
                      <h2>17</h2>
                      <p>DEC</p>
                    </div>
                  </div>
                  <div className='text-box '>
                    <h4>Mead Before And After The Epic Etars</h4>
                    <div className='text-content '>
                      By{' '}
                      <span>
                        <a href='# '>admin </a>
                      </span>{' '}
                      |{' '}
                      <span>
                        <a href='# '> Commercial Services</a>
                      </span>
                      ,{' '}
                      <span>
                        <a href='# '>Panels Installation</a>
                      </span>
                    </div>
                    <div className='text-link-elm '>
                      <a href='# '>
                        <span className='linkt '>Read More</span>
                        <span className='iconx '>
                          <i className='fas fa-arrow-right '></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab col-lg-4 col-md-6 col-sm-12'
                data-aos='fade-up'
              >
                <div className='news '>
                  <div className='img-date '>
                    <Image
                      priority
                      width='773'
                      height='451'
                      src='/assets/images/home/Artboard-–-1-3.png'
                      alt='strnix'
                    />

                    <div className='date '>
                      <h2>17</h2>
                      <p>DEC</p>
                    </div>
                  </div>
                  <div className='text-box '>
                    <h4>The Amin Gaisame Toren Maintenance</h4>
                    <div className='text-content '>
                      By{' '}
                      <span>
                        <a href='# '>admin </a>
                      </span>{' '}
                      |{' '}
                      <span>
                        <a href='# '> Commercial Services</a>
                      </span>
                      ,{' '}
                      <span>
                        <a href='# '>Panels Installation</a>
                      </span>
                    </div>
                    <div className='text-link-elm '>
                      <a href='# '>
                        <span className='linkt '>Read More</span>
                        <span className='iconx '>
                          <i className='fas fa-arrow-right '></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab col-lg-4 col-md-6 col-sm-12'
                data-aos='fade-down'
              >
                <div className='news '>
                  <div className='img-date '>
                    <Image
                      priority
                      width='779'
                      height='451'
                      src='/assets/images/home/Artboard-–-1-2.png'
                      alt='strnix'
                    />

                    <div className='date '>
                      <h2>15</h2>
                      <p>DEC</p>
                    </div>
                  </div>
                  <div className='text-box '>
                    <h4>Newly Built Customized Hydro Plants</h4>
                    <div className='text-content '>
                      By{' '}
                      <span>
                        <a href='# '>admin </a>
                      </span>{' '}
                      |{' '}
                      <span>
                        <a href='# '> Commercial Services</a>
                      </span>
                      ,{' '}
                      <span>
                        <a href='# '>Panels Installation</a>
                      </span>
                    </div>
                    <div className='text-link-elm '>
                      <a href='# '>
                        <span className='linkt'>Read More</span>
                        <span className='iconx '>
                          <i className='fas fa-arrow-right '></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
