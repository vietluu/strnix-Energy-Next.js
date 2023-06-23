'use client';
import Image from 'next/image';
import Link from 'next/link';
import Slider, { Settings } from 'react-slick';
import CustomButtonSlide from '../../components/buttonCustom/CustomButtonSlide';
import CustomBtnHover from '../../components/buttonCustom/CustomBtnHover';
import BannerBreadcrumbs from '@/components/banner/BannerBreadcrumbs';
import RegisterForm from '@/components/form/RegisterForm';
import CounterUp from '@/components/CounterUp';
const About = () => {
  const setting: Settings = {
    arrows: true,
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2500,
    nextArrow: <CustomButtonSlide position="right" />,
    prevArrow: <CustomButtonSlide position="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
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

  return (
    <>
      <BannerBreadcrumbs
        title="About Us"
        url="/assets/images/about/banner-bg-1.jpg"
      />

      <div className="strnix-smart-company py-5">
        <div className="body-container">
          <div className="row py-16 mt-10">
            <div className="col-md-12 col-lg-6 col-sm-12 pr-10">
              <div className="content" data-aos="fade-right">
                <div className="elmif ">
                  <div className="title-text ">
                    <p>
                      WHO ARE STRNIX <i className="fas fa-bolt "></i>
                    </p>
                  </div>
                  <h2>
                    Helping Smart Comapnies With Better Integrated Solar
                    Solutions
                  </h2>
                  <div className="subtext ">
                    <p>For Controling Your Energy Production</p>
                  </div>
                  <div className="bottomtitle clearfix ">
                    <span className="line "></span>
                    <span className="dottitle "></span>
                    <span className="dottitle "></span>
                    <span className="dottitle "></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-sm-12" data-aos="fade-left">
              <p className="mt-[25px] mb-6">
                Nunc quam arcu, pretium quis quam sed, laoreet efficitur leo.
                Aliquam era volutpat. Integer lobortis sem consequat consequat
                imperdiet. In nulla sed viverra ut lorem ut dapibus consectetur
                diam. Nunc bibendum imperdiet condimentum. Duis lacinia pulvinar
                turpis lacinia feugiat tellus euismod.
              </p>
              <p className="mb-12">
                Laoreet nec aliquet ut metus. Cras feugiat turpis varius
                pellentesque eleifend ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <strong>Tunders daumoty</strong>
            </div>
          </div>
          <div className="row mb-3" data-aos="fade-right">
            <div className="col-sm-12 col-md-4 px-2 mb-3">
              <Link href="#">
                <Image
                  className="aspect-[13/9]"
                  quality={100}
                  priority
                  width={370}
                  height={257}
                  src="/assets/images/about/program-image-1.jpg"
                  sizes="cover"
                  alt="strnix image"
                />
              </Link>
              <div className="lower-box px-3 text-center">
                <Link
                  className="block mb-4 mt-5 text-2xl font-weight-bold"
                  href="#"
                >
                  Residential Solutions
                </Link>
                <div className="box-description">
                  Pellentesque porta velit faucibs kodales dolor rhoncus sed
                  curabitur
                </div>
                <div className="count">01</div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 px-2 mb-3">
              <Link href="#">
                <Image
                  className="aspect-[13/9]"
                  priority
                  quality={100}
                  width={370}
                  height={257}
                  src="/assets/images/about/program-image-2.jpg"
                  sizes="cover"
                  alt="strnix image"
                />
              </Link>
              <div className="lower-box px-3 text-center">
                <Link
                  className=" block mb-4 mt-5 text-2xl font-weight-bold"
                  href="#"
                >
                  Residential Solutions
                </Link>
                <div className="box-description">
                  Pellentesque porta velit faucibs kodales dolor rhoncus sed
                  curabitur
                </div>
                <div className="count">02</div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 px-2 mb-3">
              <Link href="#">
                <Image
                  className="aspect-[13/9]"
                  priority
                  width={370}
                  height={257}
                  src="/assets/images/about/program-image-4.jpg"
                  quality={100}
                  sizes="cover"
                  alt="strnix image"
                />
              </Link>
              <div className="lower-box px-3 text-center">
                <Link
                  className=" block mb-4 mt-5 text-2xl font-weight-bold"
                  href="#"
                >
                  Residential Solutions
                </Link>
                <div className="box-description">
                  Pellentesque porta velit faucibs kodales dolor rhoncus sed
                  curabitur
                </div>
                <div className="count">03</div>
              </div>
            </div>
          </div>
        </div>
        <div className="patternimgleft ">
          <Image
            fill
            priority
            src="/assets/images/home/pattern-image-1.png"
            alt="strnix image"
          />
        </div>
        <div className="patternimgright ">
          <Image
            fill
            priority
            src="/assets/images/home/pattern-image-2.png"
            alt="strnix image"
          />
        </div>
      </div>
      <div className="works-matter row ">
        <div
          className="col-lg-6 col-md-12 text-white"
          style={{ background: '#24345d' }}
        >
          <div
            className="py-[60px] px-[120px] max-lg:px-4"
            data-aos="fade-right"
          >
            <div className="title">
              <div className="sub-title">
                <i aria-hidden="true" className="fas fa-fan"></i> Projects For
                World
              </div>
              <h2 className="text-4xl py-4">Works That Matters</h2>
            </div>
            <div>
              Integer lobortis sem consequat consequat imperdiet In nulla
              viverra ut lorem ut, dapibus consectetur diam. Nun bibendum diet
              condiment sed ipsum duis lacinia pulvinar dolar turpis.
            </div>
            <div className="py-5">
              <ul>
                <li className="py-2">
                  <i aria-hidden="true" className="fas fa-wrench"></i> Flexible
                  Cost-Effective Solutions
                </li>
                <li className="py-2">
                  <i aria-hidden="true" className="far fa-star-half"></i>{' '}
                  Produce Innovative Design Futuristic Blades
                </li>
                <li className="py-2">
                  <i aria-hidden="true" className=" flaticon-world"></i> We
                  Tailored For Specific Client’s Needs
                </li>
              </ul>
            </div>
            <div className="linkbox ">
              <a href="# " className="link ">
                <CustomBtnHover text="View all work" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="content-box text-col col-lg-3 d-lg-block  d-md-none position-relative px-0"
          style={{
            backgroundImage: 'url(/assets/images/about/bg-image-15.jpg)',
          }}
        >
          <div className="title position-absolute bottom-3 left-[33%] text-2xl text-white d-none d-lg-block">
            <i aria-hidden="true" className=" flaticon-solar-panel"></i>{' '}
            <span>Our Mission</span>
          </div>{' '}
          <div className="inner-content">
            <div className="over-inner text-white">
              <div className=" text-5xl">
                <i aria-hidden="true" className=" flaticon-solar-panel"></i>{' '}
              </div>
              <h3>
                <a
                  href="#"
                  className="text-3xl py-[20px] block hover:text-white "
                >
                  our Mission
                </a>
              </h3>
              <div className="text">
                Aenean volutpa sem sit amet ullamcorper grav datortor arcu
                molestie risusut bibendum urna enim nulla. Pellentesque porta
                arc velit faucibus kodales dolor rhoncus curabitur lacinia sed
                massa vitae efficitur.
              </div>
            </div>
          </div>
        </div>
        <div
          className=" content-box text-col col-lg-3 d-lg-block d-md-none position-relative px-0"
          style={{
            backgroundImage: 'url(/assets/images/about/bg-image-16.jpg)',
          }}
        >
          <div className="title position-absolute bottom-3 left-[33%]  text-2xl text-white d-none d-lg-block">
            <i aria-hidden="true" className=" flaticon-dam"></i>{' '}
            <span>INNOVATION</span>
          </div>
          <div className="inner-content">
            <div className="over-inner text-white">
              <div className=" text-5xl">
                <i aria-hidden="true" className=" flaticon-dam"></i>{' '}
              </div>
              <h3>
                <a
                  href="#"
                  className="text-3xl py-[20px] block hover:text-white"
                >
                  INNOVATION
                </a>
              </h3>
              <div className="text">
                Aenean volutpa sem sit amet ullamcorper grav datortor arcu
                molestie risusut bibendum urna enim nulla. Pellentesque porta
                arc velit faucibus kodales dolor rhoncus curabitur lacinia sed
                massa vitae efficitur.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="company-history py-[90px]">
        <div className="titleprogram text-center" data-aos="fade-right">
          <div className="title-text ">
            <p>
              STRINIX IS IMPORTANT <i className="fas fa-bolt "></i>
            </p>
          </div>
          <h2>Comprehensive Programs</h2>
          <div className="subtext ">
            <p>For Controling Your Energy Production</p>
          </div>
          <div className="bottomtitle2 ">
            <span className="line "></span>
            <span className="dottitle "></span>
            <span className="dottitle "></span>
            <span className="dottitle "></span>
          </div>
        </div>
        <div className="container-xl py-[90px]">
          <Slider {...setting}>
            <div className="history-block">
              <div className="date">2015</div>
              <div className="round-dot"></div>
              <div className="title">got best tech award</div>
              <div className="text">
                Pellentesque porta arcu velit faucibs kodales dolor rhoncus sed.
                Curabitur lacinia masysa vitae sed.
              </div>
            </div>
            <div className="history-block">
              <div className="date">2018</div>
              <div className="round-dot"></div>
              <div className="title">Features &amp; add-ons</div>
              <div className="text">
                Pellentesque porta arcu velit faucibs kodales dolor rhoncus sed.
                Curabitur lacinia masysa vitae sed.
              </div>
            </div>
            <div className="history-block">
              <div className="date">2019</div>
              <div className="round-dot"></div>
              <div className="title">Temtaris daspo</div>
              <div className="text">
                Pellentesque porta arcu velit faucibs kodales dolor rhoncus sed.
                Curabitur lacinia masysa vitae sed.
              </div>
            </div>
            <div className="history-block">
              <div className="date">2019</div>
              <div className="round-dot"></div>
              <div className="title">Temtaris daspo</div>
              <div className="text">
                Pellentesque porta arcu velit faucibs kodales dolor rhoncus sed.
                Curabitur lacinia masysa vitae sed.
              </div>
            </div>
            <div className="history-block">
              <div className="date">2015</div>
              <div className="round-dot"></div>
              <div className="title">got best tech award</div>
              <div className="text">
                Pellentesque porta arcu velit faucibs kodales dolor rhoncus sed.
                Curabitur lacinia masysa vitae sed.
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <RegisterForm />
      <div className="Team-members py-[100px] bg-[#eef6f9]">
        <div className="container-lg">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="content" data-aos="fade-right">
                <div className="elmif ">
                  <div className="title-text ">
                    <p>Offering Great Job With Good Hands</p>
                  </div>
                  <h2>Dedicated Team Members</h2>

                  <div className="bottomtitle clearfix ">
                    <span className="line "></span>
                    <span className="dottitle "></span>
                    <span className="dottitle "></span>
                    <span className="dottitle "></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 text-right items-center d-flex">
              <Link className="mr-0 " href="#">
                <span className="text underline ">View All Team</span>{' '}
                <span className="flaticon-arrows-11"></span>{' '}
              </Link>
            </div>
          </div>
          <div className="row py-5" data-aos="fade-up">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="image-box">
                <Link href="#">
                  <Image
                    className="aspect-[1/1]"
                    src="/assets/images/about/team-image-1.jpg"
                    alt="strnix image"
                    priority
                    width={370}
                    height={270}
                  />
                </Link>
                <div className="social-links">
                  <ul>
                    <li>
                      <Link href="#">
                        <span className="fab fa-twitter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-instagram"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-linkedin-in"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-facebook-f"></span>
                      </Link>
                    </li>{' '}
                  </ul>
                </div>
              </div>
              <div className="lower-box text-center py-4">
                <Link className="block py-2 font-bold text-xl" href="#">
                  CHARLES HENRY
                </Link>
                <span className="text-sm text-slate-500">CEO | Founder</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="image-box">
                <Link href="#">
                  <Image
                    className="aspect-[1/1]"
                    src="/assets/images/about/team-image-2.jpg"
                    alt="strnix image"
                    priority
                    width={370}
                    height={270}
                  />
                </Link>
                <div className="social-links">
                  <ul>
                    <li>
                      <Link href="#">
                        <span className="fab fa-twitter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-instagram"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-linkedin-in"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-facebook-f"></span>
                      </Link>
                    </li>{' '}
                  </ul>
                </div>
              </div>
              <div className="lower-box text-center py-4">
                <Link className="block py-2 font-bold text-xl" href="#">
                  EDWARD MATTHEW
                </Link>
                <span className="text-sm text-slate-500">CEO | Founder</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="image-box">
                <Link href="#">
                  <Image
                    className="aspect-[1/1]"
                    src="/assets/images/about/team-image-3.jpg"
                    alt="strnix image"
                    priority
                    width={370}
                    height={270}
                  />
                </Link>
                <div className="social-links">
                  <ul>
                    <li>
                      <Link href="#">
                        <span className="fab fa-twitter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-instagram"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-linkedin-in"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-facebook-f"></span>
                      </Link>
                    </li>{' '}
                  </ul>
                </div>
              </div>
              <div className="lower-box text-center py-4">
                <Link className="block py-2 font-bold text-xl" href="#">
                  BEN CHRISTOPHER
                </Link>
                <span className="text-sm text-slate-500">Senior Engineer</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="image-box">
                <Link href="#">
                  <Image
                    className="aspect-[1/1]"
                    src="/assets/images/about/team-image-4.jpg"
                    alt="strnix image"
                    priority
                    width={370}
                    height={270}
                  />
                </Link>
                <div className="social-links">
                  <ul>
                    <li>
                      <Link href="#">
                        <span className="fab fa-twitter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-instagram"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-linkedin-in"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-facebook-f"></span>
                      </Link>
                    </li>{' '}
                  </ul>
                </div>
              </div>
              <div className="lower-box text-center py-4">
                <Link className="block py-2 font-bold text-xl" href="#">
                  LINDYS THOMAS
                </Link>
                <span className="text-sm text-slate-500">
                  Marketing Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CounterUp />
    </>
  );
};

export default About;
