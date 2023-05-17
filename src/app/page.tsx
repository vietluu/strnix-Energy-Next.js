'use client'
import { Rate, Tabs } from 'antd';
import Image from 'next/image';
import React, { useEffect, } from 'react';
import Slider, { Settings } from 'react-slick';
import { isMobile} from 'react-device-detect';
import Aos from 'aos';
import CountUp from 'react-countup';
const Homepage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
  const Right = ({ currentSlide, slideCount, children, ...props }: any) => (
    <button {...props}>
      <i className="fas fa-chevron-right" />
    </button>
  );
  const Left = ({ currentSlide, slideCount, children, ...props }: any) => (
    <button {...props}>
      <i className="fas fa-chevron-left" />
    </button>
  );
  const reviewSlide: Settings = {
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    useTransform: false,
    speed: 500,
    autoplaySpeed: 3000,
    nextArrow: <Right />,
    prevArrow: <Left />,
    responsive: [
  
      {
        breakpoint: 1024,
        settings: {
          arrows:false,
          slidesToShow: 1,
        },
      },
    ],
  }
  const slide: Settings = {
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    useTransform: false,
    speed: 500,
    autoplaySpeed: 3000,
    nextArrow: <Right />,
    prevArrow: <Left />,
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
      image: '/assets/images/home/featured-image-6.jpg ',
    },
    {
      label: 'House Villa',
      sublabel: '5.2KW SYSTEM',
      image: '/assets/images/home/featured-image-7.jpg ',
    },
    {
      label: 'Agri Lounge',
      sublabel: '5.2KW SYSTEM',
      image: '/assets/images/home/featured-image-8.jpg ',
    },
  ];
  return (
    <>
      <div className="slidemain ">
        <Slider {...setting}>
          <div className="header-slides ">
            <div
              className="img-slide slide"
              style={{ backgroundImage: 'url(/assets/images/home/slide1.jpg)' }}
            ></div>
            <div className="image-layer ">
              <div className="text-img ">
                <span>
                  {' '}
                  <i className="fas fa-solar-panel "></i> W E L C O M E T O S T
                  R N I X <i className="fas fa-solar-panel "></i>
                </span>
              </div>
              <div className="text-info ">
                <h1>Take Your Building Or Home Off The Grid By Solar</h1>
              </div>
            </div>
          </div>
          <div className="header-slides ">
            <div
              className="img-slide slide"
              style={{ backgroundImage: 'url(/assets/images/home/slide1.jpg)' }}
            ></div>
            <div className="image-layer ">
              <div className="text-img ">
                <span>
                  {' '}
                  <i className="fas fa-solar-panel "></i> W E L C O M E T O S T
                  R N I X <i className="fas fa-solar-panel "></i>
                </span>
              </div>
              <div className="text-info ">
                <h1>Take Your Building Or Home Off The Grid By Solar</h1>
              </div>
            </div>
          </div>
          <div className="header-slides ">
            <div
              className="img-slide slide"
              style={{ backgroundImage: 'url(/assets/images/home/slide1.jpg)' }}
            ></div>
            <div className="image-layer ">
              <div className="text-img ">
                <span>
                  {' '}
                  <i className="fas fa-solar-panel "></i> W E L C O M E T O S T
                  R N I X <i className="fas fa-solar-panel "></i>
                </span>
              </div>
              <div className="text-info ">
                <h1>Take Your Building Or Home Off The Grid By Solar</h1>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="first-body">
        <div className="first-body-elm clearfix ">
          <div className="elm-left col-lg-6 col-md-12 col-sm-12 ">
            <div className="imgelm ">
              <div className="img-left" data-aos="fade-right">
                <Image
                  fill
                  loading="lazy"
                  src="/assets/images/home/featured-image-1.jpg"
                  alt=" "
                />
              </div>
            </div>
            <div className="img-bottom " data-aos="fade-left">
              <Image
                fill
                loading="lazy"
                src="/assets/images/home/featured-image-2.jpg"
                alt=" "
              />
            </div>
          </div>
          <div className="elm-right col-lg-6 col-md-12 col-sm-12 ">
            <div>
              <div className="title-text ">
                <p>
                  WHO ARE STRNIX <i className="fas fa-bolt "></i>
                </p>
              </div>
              <h2 data-aos="fade-right">Integrated Solar Solutions</h2>
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
            <div className="elmtextinfo " data-aos="fade-right">
              <p>
                Nunc quam arcu, pretium quis quam sed, laoreet efficitur leo.
                Aliquam era volutpat. Integer lobortis sem consequat consequat
                imperdiet. In nulla sed viverra ut lorem ut, dapibus consectetur
                diam. Nunc bibendum imperdiet condimentum. Duis lacinia pulvinar
                turpis lacinia feugiat.
              </p>
              <div className="texteffect ">
                <p>
                  Vivamus tellus enim, euismod euismod laoreet nec, aliquet ut
                  metus. Cras feugiat turpis varius pellentesque eleifend.
                  Vivamus porta ipsum diamy ac congue felis imperdiet vitae duis
                  porttitor.
                </p>
              </div>
            </div>
            <div className="iconenergy ">
              <div className="icon " data-aos="fade-up">
                <div className="img-solar ">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwwLDApIj4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zNDQuODA4LDQyMi40MjljLTMuMzkyLTMuMzk0LTguODkyLTMuMzk0LTEyLjI4NS0wLjAwMWwtMjEuOTg2LDIxLjk4OGwtNi44NTEtMTguNjkyICAgIGMtMS4wMi0yLjc4NC0zLjM5LTQuODU1LTYuMjg2LTUuNDk0Yy0yLjg5Ni0wLjYzOS01LjkxNiwwLjI0NC04LjAxNCwyLjM0MWwtMjcuOTA1LDI3LjkwNWMtMy4zOTQsMy4zOTMtMy4zOTQsOC44OTMtMC4wMDEsMTIuMjg2ICAgIGMzLjM5MywzLjM5MSw4Ljg5MiwzLjM5MywxMi4yODYsMGwxOC4yODYtMTguMjg2bDYuODUxLDE4LjY5M2MxLjAyLDIuNzg0LDMuMzksNC44NTUsNi4yODYsNS40OTQgICAgYzAuNjIyLDAuMTM3LDEuMjQ5LDAuMjA0LDEuODcxLDAuMjA0YzIuMjc4LDAsNC40OTYtMC44OTgsNi4xNDMtMi41NDVsMzEuNjA1LTMxLjYwNiAgICBDMzQ4LjIsNDMxLjMyMiwzNDguMiw0MjUuODIyLDM0NC44MDgsNDIyLjQyOXoiIGZpbGw9IiMxM2I2ZDEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTE2My41NCwxMDhjLTU0LjQwOCwwLTk4LjY3Myw0NC4yNjUtOTguNjczLDk4LjY3MnM0NC4yNjUsOTguNjczLDk4LjY3Myw5OC42NzNzOTguNjcxLTQ0LjI2NCw5OC42NzEtOTguNjczICAgIEMyNjIuMjEyLDE1Mi4yNjUsMjE3Ljk0OCwxMDgsMTYzLjU0LDEwOHogTTE2My41MzksMjg3Ljk3MWMtNDQuODI5LDAtODEuMjk5LTM2LjQ3LTgxLjI5OS04MS4yOTkgICAgYzAtNDQuODI4LDM2LjQ3LTgxLjI5OSw4MS4yOTktODEuMjk5YzQ0LjgyOCwwLDgxLjI5OCwzNi40NzEsODEuMjk4LDgxLjI5OUMyNDQuODM3LDI1MS41LDIwOC4zNjcsMjg3Ljk3MSwxNjMuNTM5LDI4Ny45NzF6IiBmaWxsPSIjMTNiNmQxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0xNjMuNTM5LDQzLjEzM2MtNC43OTksMC04LjY4NywzLjg4OS04LjY4Nyw4LjY4N3YzNC4yMDRjMCw0Ljc5OSwzLjg4OSw4LjY4OCw4LjY4Nyw4LjY4OCAgICBjNC43OTksMCw4LjY4Ny0zLjg4OSw4LjY4Ny04LjY4N1Y1MS44MkMxNzIuMjI2LDQ3LjAyMywxNjguMzM4LDQzLjEzMywxNjMuNTM5LDQzLjEzM3oiIGZpbGw9IiMxM2I2ZDEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTIzNy41NjgsNDM2LjcxN2gtMTkuNDljLTI1LjI4MiwwLTQ1Ljg1Mi0yMC41NjktNDUuODUyLTQ1Ljg1MlYzMjcuMzJjMC00Ljc5Ny0zLjg4OC04LjY4Ny04LjY4Ny04LjY4NyAgICBzLTguNjg3LDMuODg5LTguNjg3LDguNjg3djYzLjU0NWMwLDM0Ljg2MiwyOC4zNjIsNjMuMjI1LDYzLjIyNSw2My4yMjVoMTkuNDljNC43OTksMCw4LjY4Ny0zLjg4OSw4LjY4Ny04LjY4NyAgICBTMjQyLjM2Niw0MzYuNzE3LDIzNy41NjgsNDM2LjcxN3oiIGZpbGw9IiMxM2I2ZDEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI3OS4xOCw5MS4wMzNjLTMuMzk0LTMuMzkzLTguODkzLTMuMzkzLTEyLjI4NiwwbC0yNC4xODcsMjQuMTg3Yy0zLjM5MywzLjM5My0zLjM5Myw4Ljg5MiwwLDEyLjI4NCAgICBjMS42OTYsMS42OTcsMy45MTksMi41NDUsNi4xNDIsMi41NDVjMi4yMjMsMCw0LjQ0Ny0wLjg0OCw2LjE0My0yLjU0NWwyNC4xODctMjQuMTg3ICAgIEMyODIuNTczLDk5LjkyNSwyODIuNTczLDk0LjQyNSwyNzkuMTgsOTEuMDMzeiIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNODQuMzczLDI4NS44NGMtMy4zOTMtMy4zOTEtOC44OTMtMy4zOTMtMTIuMjg2LDBsLTI0LjE4OCwyNC4xODdjLTMuMzk0LDMuMzkzLTMuMzk0LDguODkzLTAuMDAxLDEyLjI4NiAgICBjMS42OTcsMS42OTcsMy45MTksMi41NDUsNi4xNDMsMi41NDVjMi4yMjMsMCw0LjQ0Ny0wLjg0OCw2LjE0Mi0yLjU0NWwyNC4xODgtMjQuMTg3ICAgIEM4Ny43NjUsMjk0LjczMyw4Ny43NjUsMjg5LjIzMyw4NC4zNzMsMjg1Ljg0eiIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzE4LjM5MiwxOTcuOTg2aC0zNC4yMDZjLTQuNzk3LDAtOC42ODcsMy44ODktOC42ODcsOC42ODdjMCw0Ljc5NywzLjg4OCw4LjY4Nyw4LjY4Nyw4LjY4N2gzNC4yMDYgICAgYzQuNzk5LDAsOC42ODctMy44ODksOC42ODctOC42ODdDMzI3LjA3OCwyMDEuODc1LDMyMy4xOSwxOTcuOTg2LDMxOC4zOTIsMTk3Ljk4NnoiIGZpbGw9IiMxM2I2ZDEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQyLjg5MiwxOTcuOTg2SDguNjg3Yy00Ljc5OSwwLTguNjg3LDMuODg5LTguNjg3LDguNjg3YzAsNC43OTcsMy44ODgsOC42ODcsOC42ODcsOC42ODdoMzQuMjA1ICAgIGM0Ljc5OSwwLDguNjg3LTMuODg5LDguNjg3LTguNjg3QzUxLjU3OSwyMDEuODc1LDQ3LjY5MSwxOTcuOTg2LDQyLjg5MiwxOTcuOTg2eiIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNODQuMzcyLDExNS4yMTlMNjAuMTg0LDkxLjAzM2MtMy4zOTEtMy4zOTMtOC44OTItMy4zOTEtMTIuMjg0LDBjLTMuMzkzLDMuMzkzLTMuMzkzLDguODkzLDAuMDAxLDEyLjI4NmwyNC4xODcsMjQuMTg3ICAgIGMxLjY5NiwxLjY5NiwzLjkxOSwyLjU0NSw2LjE0MiwyLjU0NWMyLjIyMywwLDQuNDQ2LTAuODQ4LDYuMTQzLTIuNTQ1Qzg3Ljc2NSwxMjQuMTEyLDg3Ljc2NSwxMTguNjEyLDg0LjM3MiwxMTUuMjE5eiIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjc5LjE4LDMxMC4wMjhsLTI0LjE4Ny0yNC4xODdjLTMuMzkzLTMuMzkzLTguODkyLTMuMzk0LTEyLjI4NywwYy0zLjM5MywzLjM5My0zLjM5Myw4Ljg5MiwwLDEyLjI4NGwyNC4xODcsMjQuMTg3ICAgIGMxLjY5NywxLjY5NywzLjkxOSwyLjU0NSw2LjE0MywyLjU0NWMyLjIyMywwLDQuNDQ3LTAuODQ4LDYuMTQzLTIuNTQ1QzI4Mi41NzMsMzE4LjkyLDI4Mi41NzMsMzEzLjQyLDI3OS4xOCwzMTAuMDI4eiIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTAzLjMxMywxOTcuOTg2aC0xNy43NTZoLTguMDgzVjE0OS40N2MwLTQuNzk3LTMuODg4LTguNjg3LTguNjg3LTguNjg3cy04LjY4NywzLjg4OS04LjY4Nyw4LjY4N3Y0OC41MTZoLTQzLjc4NVYxNDkuNDcgICAgYzAtNC43OTctMy44ODgtOC42ODctOC42ODctOC42ODdzLTguNjg3LDMuODg5LTguNjg3LDguNjg3djQ4LjUxNmgtOC4wODNoLTE3Ljc1NmMtNC43OTksMC04LjY4NywzLjg4OS04LjY4Nyw4LjY4NyAgICBjMCw0Ljc5NywzLjg4OCw4LjY4Nyw4LjY4Nyw4LjY4N2g5LjA2OXY0Mi45MDljMCwyNy45NDQsMjAuNTYxLDUxLjE3Myw0Ny4zNDksNTUuMzZ2NzcuMjM4YzAsMjUuMjgyLTIwLjU2OSw0NS44NTItNDUuODUyLDQ1Ljg1MiAgICBoLTIwLjQzN2MtNC43OTksMC04LjY4NywzLjg4OS04LjY4Nyw4LjY4N3MzLjg4OCw4LjY4Nyw4LjY4Nyw4LjY4N2gyMC40MzdjMzQuODYzLDAsNjMuMjI1LTI4LjM2Myw2My4yMjUtNjMuMjI1di03Ny4yMzggICAgYzI2Ljc4Ny00LjE4Nyw0Ny4zNDktMjcuNDE2LDQ3LjM0OS01NS4zNnYtNDIuOTA5aDkuMDY5YzQuNzk5LDAsOC42ODctMy44ODksOC42ODctOC42ODcgICAgQzUxMS45OTksMjAxLjg3NSw1MDguMTExLDE5Ny45ODYsNTAzLjMxMywxOTcuOTg2eiBNNDc2Ljg3LDI1OC4yNjhjMCwyMS4zMTktMTcuMzQ1LDM4LjY2Mi0zOC42NjIsMzguNjYyICAgIHMtMzguNjYyLTE3LjM0NC0zOC42NjItMzguNjYydi00Mi45MDloNzcuMzI1VjI1OC4yNjh6IiBmaWxsPSIjMTNiNmQxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxjaXJjbGUgY3g9IjQyMS43MDciIGN5PSIyNTEuNjk4IiByPSI4LjY4NyIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxjaXJjbGUgY3g9IjQ1NC43MTgiIGN5PSIyNTEuNjk4IiByPSI4LjY4NyIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
                  <p>
                    <strong>SAVE ENERGY FOR WORLD</strong>{' '}
                  </p>
                </div>

                <div className=" img-solar ">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTggNTExLjk5OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU1Ljk5OCw0MC4zMmMtMjAuODMzLDAtMzcuNzgxLDE2Ljk0OC0zNy43ODEsMzcuNzgxczE2Ljk0OCwzNy43OCwzNy43ODEsMzcuNzhzMzcuNzgxLTE2Ljk0OSwzNy43ODEtMzcuNzggICAgQzI5My43OCw1Ny4yNjgsMjc2LjgzMSw0MC4zMiwyNTUuOTk4LDQwLjMyeiBNMjU1Ljk5OCwxMDAuODAyYy0xMi41MTgsMC0yMi43MDMtMTAuMTg0LTIyLjcwMy0yMi43MDIgICAgczEwLjE4NC0yMi43MDMsMjIuNzAzLTIyLjcwM3MyMi43MDMsMTAuMTg0LDIyLjcwMywyMi43MDNTMjY4LjUxNywxMDAuODAyLDI1NS45OTgsMTAwLjgwMnoiIGZpbGw9IiMyNmJkMTkiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NS45OTgsMGMtNC4xNjUsMC03LjUzOSwzLjM3Ni03LjUzOSw3LjUzOXYxMC4wOGMwLDQuMTY0LDMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5czcuNTM5LTMuMzc2LDcuNTM5LTcuNTM5VjcuNTM5ICAgIEMyNjMuNTM4LDMuMzc2LDI2MC4xNjMsMCwyNTUuOTk4LDB6IiBmaWxsPSIjMjZiZDE5IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMTguNTYzLDMwLjAwMmwtNy4xMjgtNy4xMjdjLTIuOTQzLTIuOTQ0LTcuNzE3LTIuOTQzLTEwLjY2MiwwYy0yLjk0NCwyLjk0NC0yLjk0NCw3LjcxOCwwLjAwMSwxMC42NjNsNy4xMjcsNy4xMjggICAgYzEuNDcyLDEuNDcyLDMuNDAyLDIuMjA4LDUuMzMxLDIuMjA4czMuODU5LTAuNzM2LDUuMzMyLTIuMjA5QzIyMS41MDgsMzcuNzIsMjIxLjUwOCwzMi45NDYsMjE4LjU2MywzMC4wMDJ6IiBmaWxsPSIjMjZiZDE5IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0xOTUuNTE4LDcwLjU2aC0xMC4wOGMtNC4xNjUsMC03LjUzOSwzLjM3Ni03LjUzOSw3LjUzOWMwLDQuMTY0LDMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5aDEwLjA4ICAgIGM0LjE2NSwwLDcuNTM5LTMuMzc2LDcuNTM5LTcuNTM5QzIwMy4wNTcsNzMuOTM2LDE5OS42ODIsNzAuNTYsMTk1LjUxOCw3MC41NnoiIGZpbGw9IiMyNmJkMTkiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTIxOC41NjMsMTE1LjUzNmMtMi45NDUtMi45NDQtNy43MTgtMi45NDQtMTAuNjY0LDBsLTcuMTI3LDcuMTI3Yy0yLjk0NCwyLjk0NC0yLjk0NCw3LjcxOCwwLDEwLjY2MiAgICBjMS40NzMsMS40NzIsMy40MDMsMi4yMDksNS4zMzIsMi4yMDlzMy44NTktMC43MzYsNS4zMzItMi4yMDlsNy4xMjctNy4xMjdDMjIxLjUwNywxMjMuMjU0LDIyMS41MDcsMTE4LjQ4LDIxOC41NjMsMTE1LjUzNnoiIGZpbGw9IiMyNmJkMTkiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NS45OTgsMTMxLjA0MmMtNC4xNjUsMC03LjUzOSwzLjM3Ni03LjUzOSw3LjUzOXYxMC4wOGMwLDQuMTY0LDMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5czcuNTM5LTMuMzc2LDcuNTM5LTcuNTM5ICAgIHYtMTAuMDhDMjYzLjUzOCwxMzQuNDE4LDI2MC4xNjMsMTMxLjA0MiwyNTUuOTk4LDEzMS4wNDJ6IiBmaWxsPSIjMjZiZDE5IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zMTEuMjI1LDEyMi42NjVsLTcuMTI3LTcuMTI3Yy0yLjk0NC0yLjk0NC03LjcxOC0yLjk0NS0xMC42NjMtMC4wMDFjLTIuOTQ1LDIuOTQ0LTIuOTQ1LDcuNzE4LTAuMDAxLDEwLjY2M2w3LjEyNyw3LjEyNyAgICBjMS40NzMsMS40NzIsMy40MDIsMi4yMDgsNS4zMzIsMi4yMDhjMS45MjksMCwzLjg1OS0wLjczNiw1LjMzMS0yLjIwOEMzMTQuMTY5LDEzMC4zODMsMzE0LjE2OSwxMjUuNjA5LDMxMS4yMjUsMTIyLjY2NXoiIGZpbGw9IiMyNmJkMTkiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMyNi41Niw3MC41NjJoLTEwLjA4Yy00LjE2NSwwLTcuNTM5LDMuMzc2LTcuNTM5LDcuNTM5czMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5aDEwLjA4YzQuMTY1LDAsNy41MzktMy4zNzYsNy41MzktNy41MzkgICAgUzMzMC43MjUsNzAuNTYyLDMyNi41Niw3MC41NjJ6IiBmaWxsPSIjMjZiZDE5IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zMTEuMjI0LDIyLjg3NGMtMi45NDMtMi45NDQtNy43MTctMi45NDMtMTAuNjYyLDBsLTcuMTI3LDcuMTI3Yy0yLjk0NCwyLjk0NC0yLjk0NCw3LjcxOCwwLjAwMSwxMC42NjMgICAgYzEuNDcxLDEuNDczLDMuNDAxLDIuMjA5LDUuMzMsMi4yMDljMS45MjksMCwzLjg1OS0wLjczNiw1LjMzMi0yLjIwOWw3LjEyNy03LjEyN0MzMTQuMTY5LDMwLjU5MywzMTQuMTY5LDI1LjgxOSwzMTEuMjI0LDIyLjg3NHogICAgIiBmaWxsPSIjMjZiZDE5IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik00NjUuMTIzLDM4Ni4xODFjLTAuMDA2LTAuMTMyLTAuMDA3LTAuMjYzLTAuMDItMC4zOTVjLTAuMDI2LTAuMjY1LTAuMDY2LTAuNTI2LTAuMTItMC43ODIgICAgYy0wLjAwMS0wLjAwNi0wLjAwMS0wLjAxMS0wLjAwMy0wLjAxN2wtMTMuNDI3LTYzLjc3OGMtMC4wMDUtMC4wMjMtMC4wMS0wLjA0NS0wLjAxNC0wLjA2OGwtMTMuNDI2LTYzLjc3NCAgICBjLTAuMDA1LTAuMDIzLTAuMDEtMC4wNDUtMC4wMTQtMC4wNjhsLTEzLjQzOS02My44MzdjLTAuNzM0LTMuNDg5LTMuODEyLTUuOTg2LTcuMzc4LTUuOTg2SDk0LjcxMyAgICBjLTMuNTY2LDAtNi42NDMsMi40OTctNy4zNzgsNS45ODZsLTEzLjQzNiw2My44M2MtMC4wMDYsMC4wMjctMC4wMTIsMC4wNTMtMC4wMTcsMC4wOGwtMTMuNDI1LDYzLjc3NSAgICBjLTAuMDA0LDAuMDE4LTAuMDA4LDAuMDM3LTAuMDExLDAuMDU1TDQ3LjAyLDM4NC45ODFjLTAuMDU2LDAuMjY5LTAuMDk5LDAuNTQ0LTAuMTI2LDAuODIyYy0wLjAwNiwwLjA2NC0wLjAwNSwwLjEzLTAuMDEsMC4xOTQgICAgYy0wLjAxMywwLjE3OS0wLjAyNywwLjM1OC0wLjAyNywwLjU0MXYzMC4yNDNjMCw0LjE2NCwzLjM3NSw3LjUzOSw3LjUzOSw3LjUzOWgxNzguOTR2NDIuMzU2aC01Ny45ODIgICAgYy00LjE2NSwwLTcuNTM5LDMuMzc2LTcuNTM5LDcuNTM5djIyLjcwNEg5NC43MTRjLTQuMTY1LDAtNy41MzksMy4zNzYtNy41MzksNy41MzlzMy4zNzUsNy41MzksNy41MzksNy41MzloODAuNjQxaDE2MS4yODVoODAuNjMgICAgYzQuMTY1LDAsNy41MzktMy4zNzYsNy41MzktNy41MzlzLTMuMzc1LTcuNTM5LTcuNTM5LTcuNTM5SDM0NC4xOHYtMjIuNzA0YzAtNC4xNjQtMy4zNzUtNy41MzktNy41MzktNy41MzloLTU3Ljk4MlY0MjQuMzJINDU3LjYgICAgYzQuMTY1LDAsNy41MzktMy4zNzYsNy41MzktNy41Mzl2LTMwLjEwOGMwLjAwMS0wLjAxLDAuMDAxLTAuMDIyLDAuMDAxLTAuMDM0di0wLjA5OCAgICBDNDY1LjE0MSwzODYuNDE4LDQ2NS4xMjksMzg2LjMwMSw0NjUuMTIzLDM4Ni4xODF6IE00NDguMzExLDM3OUgzMzAuMjNsLTMuNDIzLTQ4Ljc2M2gxMTEuMjM4TDQ0OC4zMTEsMzc5eiBNNDI0LjYwNSwyNjYuMzk2ICAgIGwxMC4yNjcsNDguNzYzSDMyNS43NDlsLTMuNDIzLTQ4Ljc2M0g0MjQuNjA1eiBNNDExLjE2NSwyMDIuNTU1bDEwLjI2Nyw0OC43NjNIMzIxLjI2OGwtMy40MjMtNDguNzYzSDQxMS4xNjV6IE0yMDkuMjY1LDIwMi41NTUgICAgaDkzLjQ2NWwzLjQyMyw0OC43NjNoLTEwMC4zMUwyMDkuMjY1LDIwMi41NTV6IE0yMDQuNzg2LDI2Ni4zOTZoMTAyLjQyNWwzLjQyMyw0OC43NjNoLTEwOS4yN0wyMDQuNzg2LDI2Ni4zOTZ6IE0yMDAuMzA3LDMzMC4yMzggICAgaDExMS4zODVMMzE1LjExNCwzNzlIMTk2Ljg4NUwyMDAuMzA3LDMzMC4yMzh6IE0xMDAuODMxLDIwMi41NTVoOTMuMzE5bC0zLjQyMiw0OC43NjNIOTAuNTY1TDEwMC44MzEsMjAyLjU1NXogTTg3LjM5MiwyNjYuMzk2ICAgIEgxODkuNjdsLTMuNDIyLDQ4Ljc2M0g3Ny4xMjZMODcuMzkyLDI2Ni4zOTZ6IE0zMjkuMTAyLDQ4MS43NTd2MTUuMTY0SDE4Mi44OTV2LTE1LjE2NGg1Ny45ODJoMzAuMjQ0SDMyOS4xMDJ6IE0yNDguNDE2LDQ2Ni42NzggICAgdi00Mi4zNTZoMTUuMTY1djQyLjM1NkgyNDguNDE2eiBNMjcxLjIwOCw0MDkuMjQzYy0wLjAyOSwwLTAuMDU4LTAuMDA0LTAuMDg3LTAuMDA0aC0zMC4yNDRjLTAuMDI5LDAtMC4wNTgsMC4wMDQtMC4wODcsMC4wMDQgICAgSDYxLjkzNXYtMTUuMTY0aDM1LjkxNWM0LjE2NSwwLDcuNTM5LTMuMzc2LDcuNTM5LTcuNTM5YzAtNC4xNjQtMy4zNzUtNy41MzktNy41MzktNy41MzlINjMuNjg3bDEwLjI2NS00OC43NjNIMTg1LjE5ICAgIEwxODEuNzY4LDM3OWgtNTEuMzE0aC0wLjAwMWMtNC4xNjUsMC03LjUzOSwzLjM3Ni03LjUzOSw3LjUzOWMwLDQuMTY0LDMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5aDAuMDAxaDU4LjMzNyAgICBjMC4wMDUsMCwwLjAwOSwwLDAuMDE0LDBjMC4wMDMsMCwwLjAwNywwLDAuMDEsMGgxMzQuMzY3YzAuMDAzLDAsMC4wMDcsMCwwLjAxLDBjMC4wMDUsMCwwLjAwOSwwLDAuMDE0LDBINDUwLjA2djE1LjE2NEgyNzEuMjA4eiAgICAiIGZpbGw9IiMyNmJkMTkiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+ " />
                  <p>
                    <strong> RESIDENTIALS SOLUTIONS</strong>
                  </p>
                </div>
                <div className="img-solar ">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ0OCA0NDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik00NDgsMjQ5YzAtNTcuMzQ2LTQ2LjY1NC0xMDQtMTA0LTEwNGMtMjAuMzMsMC00MC4yMiw2LjAyMy01Ny4wODksMTcuMDk1Yy00LjM4LTE5LjE4Mi0xMC4yMDMtMzcuNjYyLTE3LjIzNS01NC4xOTggIEMyNTAuNzgxLDYzLjQ2OSwyMjYuMDM2LDM5LDIwMCwzOWMtMjYuMDY1LDAtNTAuODEsMjQuMzY4LTY5LjY3Myw2OC42MTVjLTYuNjQ1LDE1LjU4Ny0xMi4yMTIsMzIuOTQtMTYuNTAxLDUxLjAxbC0yNi4xMDgtOTUuNzMgIEM4Ni43NjgsNTkuNDE1LDgzLjYwNyw1Nyw4MCw1N3MtNi43NjksMi40MTUtNy43MTgsNS44OTZsLTcyLDI2NGMtMC42NTYsMi40MDUtMC4xNTMsNC45NzksMS4zNiw2Ljk2ICBDMy4xNTYsMzM1LjgzOCw1LjUwNywzMzcsOCwzMzdoNjR2NjRjMCw0LjQxOCwzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOHYtNjRoNjRjMi40OTMsMCw0Ljg0NC0xLjE2Miw2LjM1Ny0zLjE0NSAgYzEuMjMyLTEuNjEzLDEuNzgxLTMuNjE4LDEuNTk0LTUuNjA2YzkuODk4LDQuNTU1LDIwLjY5Niw3LjQ3NSwzMi4wNDksOC40MTVWNDAxYzAsNC40MTgsMy41ODIsOCw4LDhzOC0zLjU4Miw4LTh2LTY0LjMzNSAgYzIwLjc2OC0xLjcxOSwzOS42ODQtMTAuMDY3LDU0LjYyLTIyLjkyYzE4LjAxNCwyMi42MjYsNDQuNTg0LDM2LjcyLDczLjM4LDM4LjkzNlY0MDFjMCw0LjQxOCwzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOHYtNDguMzA1ICBDNDA1LjYyMiwzNDguNTk3LDQ0OCwzMDMuNjU0LDQ0OCwyNDl6IE0xNDEuNTI2LDMyMUg4OHYtMTIuNjg2bDE0LjE1Ny0xNC4xNTdjMy4xMjQtMy4xMjUsMy4xMjQtOC4xODksMC0xMS4zMTQgIGMtMy4xMjUtMy4xMjMtOC4xODktMy4xMjMtMTEuMzE0LDBMODgsMjg1LjY4NVYyMzNjMC00LjQxOC0zLjU4Mi04LTgtOHMtOCwzLjU4Mi04LDh2MzYuNjg2bC0xMC4zNDMtMTAuMzQzICBjLTMuMTI1LTMuMTIzLTguMTg5LTMuMTIzLTExLjMxNCwwYy0zLjEyNCwzLjEyNS0zLjEyNCw4LjE4OSwwLDExLjMxNEw3MiwyOTIuMzE0djEyLjY4YzAsMC4wMDMsMCwwLjAwNywwLDAuMDFWMzIxSDE4LjQ3NCAgTDgwLDk1LjQwNGwyNy4xMDUsOTkuMzgzYy0yLjEwOSwxNS41NDMtMy4yMywzMS4xMS0zLjIzLDQ2LjA4N2MwLDMwLjQwOCwxNC4xOTYsNTcuNTU5LDM2LjMwNCw3NS4xODZMMTQxLjUyNiwzMjF6IE0yMDgsMzA4LjMxNCAgbDI5LjY1Ny0yOS42NTdjMy4xMjQtMy4xMjUsMy4xMjQtOC4xODksMC0xMS4zMTRjLTMuMTI1LTMuMTIzLTguMTg5LTMuMTIzLTExLjMxNCwwTDIwOCwyODUuNjg1di0zMy4zNzFsMjEuNjU3LTIxLjY1NyAgYzMuMTI0LTMuMTI1LDMuMTI0LTguMTg5LDAtMTEuMzE0Yy0zLjEyNS0zLjEyMy04LjE4OS0zLjEyMy0xMS4zMTQsMEwyMDgsMjI5LjY4NVYyMDljMC00LjQxOC0zLjU4Mi04LTgtOHMtOCwzLjU4Mi04LDh2MzkuOTk1ICBjMCwwLjAwMywwLDAuMDA3LDAsMC4wMXYyMC42OGwtMTguMzQzLTE4LjM0M2MtMy4xMjUtMy4xMjMtOC4xODktMy4xMjMtMTEuMzE0LDBjLTMuMTI0LDMuMTI1LTMuMTI0LDguMTg5LDAsMTEuMzE0TDE5MiwyOTIuMzE0ICB2MTIuNjhjMCwwLjAwMywwLDAuMDA3LDAsMC4wMXYxNS41OTRjLTQwLjQzOC00LjAyOC03Mi4xMjUtMzguMjQ0LTcyLjEyNS03OS43MjRjMC00Mi41NDQsOS40MDktOTAuMDE2LDI1LjE3LTEyNi45ODQgIEMxNjEuMDAxLDc2LjQ2NSwxODEuMDMxLDU1LDIwMCw1NWMxOC45MzQsMCwzOC45NjMsMjEuNTYzLDU0Ljk1Miw1OS4xNTljMTUuNzYzLDM3LjA2NCwyNS4xNzMsODQuNDM1LDI1LjE3MywxMjYuNzE2ICBjMCw0MS40ODEtMzEuNjg3LDc1LjY5Ny03Mi4xMjUsNzkuNzI0VjMwOC4zMTR6IE0zNTIsMzM2LjYzM3YtMTIuMzE4bDI5LjY1Ny0yOS42NTdjMy4xMjQtMy4xMjUsMy4xMjQtOC4xODksMC0xMS4zMTQgIGMtMy4xMjUtMy4xMjMtOC4xODktMy4xMjMtMTEuMzE0LDBMMzUyLDMwMS42ODVWMjQ5YzAtNC40MTgtMy41ODItOC04LThzLTgsMy41ODItOCw4djM2LjY4NmwtMTguMzQzLTE4LjM0MyAgYy0zLjEyNS0zLjEyMy04LjE4OS0zLjEyMy0xMS4zMTQsMGMtMy4xMjQsMy4xMjUtMy4xMjQsOC4xODksMCwxMS4zMTRMMzM2LDMwOC4zMTR2MTIuNjhjMCwwLjAwMywwLDAuMDA3LDAsMC4wMXYxNS42MyAgYy0yNC41MzgtMi4yMzQtNDcuMDY0LTE0LjY3Ny02Mi4wNjYtMzQuMzk4YzEzLjg1LTE2LjY1OSwyMi4xOTEtMzguMDU0LDIyLjE5MS02MS4zNjJjMC0xOS45NTItMi4wMS00MC45OTQtNS43MjMtNjEuNjU2ICBDMzA1LjcwNywxNjcuNDU4LDMyNC42MTgsMTYxLDM0NCwxNjFjNDguNTIzLDAsODgsMzkuNDc3LDg4LDg4QzQzMiwyOTQuODI2LDM5Ni43ODgsMzMyLjU3NywzNTIsMzM2LjYzM3oiIGZpbGw9IiMwZjQ3ZjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
                  <p>
                    <strong>GET ENERGY FORESTS</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" sercond-body ">
        <div className="elmprogram ">
          <div
            className="titleprogram"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
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
          <div className="imgprogram">
            <Slider {...slide}>
              <div className="imglinkcontent ">
                <div className="imgobject hoverimg ">
                  <Image
                    loading="lazy"
                    fill
                    src="/assets/images/home/program-image-3.jpg"
                    alt="work "
                  />
                  <div className="hidentext ">
                    <div className="elmhiden ">
                      <div className="flation ">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEzOC43MzIzOSAxMzgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzdXJmYWNlMSI+CjxwYXRoIGQ9Ik0gMTIyLjM2NzE4OCAyNC4yMzQzNzUgQyAxMjIuMzcxMDk0IDIzLjE5OTIxOSAxMjEuNTM5MDYyIDIyLjM1NTQ2OSAxMjAuNTAzOTA2IDIyLjM1MTU2MiBDIDEyMC40OTYwOTQgMjIuMzUxNTYyIDEyMC40OTIxODggMjIuMzUxNTYyIDEyMC40OTIxODggMjIuMzUxNTYyIEwgODMuMDAzOTA2IDIyLjM1MTU2MiBDIDgxLjk2ODc1IDIyLjM1MTU2MiA4MS4xMjg5MDYgMjMuMTkxNDA2IDgxLjEyODkwNiAyNC4yMjY1NjIgQyA4MS4xMjg5MDYgMjQuMjI2NTYyIDgxLjEyODkwNiAyNC4yMzA0NjkgODEuMTI4OTA2IDI0LjIzNDM3NSBDIDgxLjAzOTA2MiAzMy43MDcwMzEgODAuMzIwMzEyIDQzLjE2MDE1NiA3OC45NzY1NjIgNTIuNTI3MzQ0IEMgNzUuNzQ2MDk0IDM1Ljk2MDkzOCA3NC4wMjczNDQgMTkuMTMyODEyIDczLjgzOTg0NCAyLjI1MzkwNiBDIDczLjg0NzY1NiAxLjIxODc1IDczLjAxMTcxOSAwLjM3NSA3MS45NzY1NjIgMC4zNjcxODggQyA3MS45NzI2NTYgMC4zNjcxODggNzEuOTY4NzUgMC4zNjcxODggNzEuOTY0ODQ0IDAuMzY3MTg4IEwgMjMuMTI4OTA2IDAuMzY3MTg4IEMgMjIuMTAxNTYyIDAuMzg2NzE5IDIxLjI4NTE1NiAxLjIzMDQ2OSAyMS4yOTI5NjkgMi4yNTM5MDYgQyAyMS4yOTI5NjkgMi44NTU0NjkgMjEuNTU0Njg4IDYyLjgzOTg0NCAwLjI5Njg3NSA5Ni4yMjY1NjIgQyAtMC4yNjE3MTkgOTcuMTAxNTYyIC0wLjAwNzgxMjUgOTguMjU3ODEyIDAuODYzMjgxIDk4LjgyMDMxMiBDIDEuMTY3OTY5IDk5LjAxNTYyNSAxLjUyMzQzOCA5OS4xMTcxODggMS44ODY3MTkgOTkuMTE3MTg4IEwgMTM2Ljg0NzY1NiA5OS4xMTcxODggQyAxMzcuODgyODEyIDk5LjEyMTA5NCAxMzguNzI2NTYyIDk4LjI4OTA2MiAxMzguNzMwNDY5IDk3LjI1MzkwNiBDIDEzOC43MzA0NjkgOTYuODkwNjI1IDEzOC42Mjg5MDYgOTYuNTM1MTU2IDEzOC40MzM1OTQgOTYuMjI2NTYyIEMgMTIyLjE2Nzk2OSA3MC42NzU3ODEgMTIyLjM1MTU2MiAyNC43NDYwOTQgMTIyLjM2NzE4OCAyNC4yMzQzNzUgWiBNIDg0Ljg3ODkwNiAyNi4xMDE1NjIgTCAxMTguNjE3MTg4IDI2LjEwMTU2MiBDIDExOC42MTcxODggMjYuNTExNzE5IDExOC42MTcxODggMjcgMTE4LjYxNzE4OCAyNy41MTk1MzEgTCA4NC44MTI1IDI3LjUxOTUzMSBDIDg0LjgyNDIxOSAyNi45ODQzNzUgODQuODM5ODQ0IDI2LjUgODQuODM5ODQ0IDI2LjA4NTkzOCBaIE0gODQuNzEwOTM4IDMxLjI2OTUzMSBMIDExOC44MDQ2ODggMzEuMjY5NTMxIEMgMTE4Ljk1MzEyNSAzNC44ODI4MTIgMTE5LjI0MjE4OCAzOS42NDQ1MzEgMTE5LjgxMjUgNDUuMDg5ODQ0IEwgODMuNjUyMzQ0IDQ1LjA4OTg0NCBDIDg0LjIyMjY1NiAzOS42NDQ1MzEgODQuNTI3MzQ0IDM0Ljg3NSA4NC42NzU3ODEgMzEuMjYxNzE5IFogTSA4My4yMjY1NjIgNDguODM5ODQ0IEwgMTIwLjIwMzEyNSA0OC44Mzk4NDQgQyAxMjAuMzM1OTM4IDQ5LjkwMjM0NCAxMjAuNDc2NTYyIDUwLjk4MDQ2OSAxMjAuNjI4OTA2IDUyLjA3ODEyNSBMIDgyLjgwMDc4MSA1Mi4wNzgxMjUgQyA4Mi45NDkyMTkgNTAuOTgwNDY5IDgzLjA4OTg0NCA0OS45MDIzNDQgODMuMjI2NTYyIDQ4LjgzOTg0NCBaIE0gODIuMjUgNTUuODI4MTI1IEwgMTIxLjE3NTc4MSA1NS44MjgxMjUgQyAxMjIuNDI5Njg4IDY0LjEzMjgxMiAxMjQuMzY3MTg4IDcyLjMxNjQwNiAxMjYuOTc2NTYyIDgwLjI5Njg3NSBMIDg2Ljg2MzI4MSA4MC4yOTY4NzUgQyA4NC41NzQyMTkgNzQuNDA2MjUgODIuNjY0MDYyIDY4LjM3MTA5NCA4MS4xMzY3MTkgNjIuMjM4MjgxIEMgODEuNTUwNzgxIDYwLjAzOTA2MiA4MS44NjMyODEgNTcuOTAyMzQ0IDgyLjI1IDU1LjgxNjQwNiBaIE0gMjUuMDQyOTY5IDQuMTE3MTg4IEwgNzAuMDg5ODQ0IDQuMTE3MTg4IEMgNzAuMDg5ODQ0IDQuODkwNjI1IDcwLjA4OTg0NCA1LjkxNzk2OSA3MC4wODk4NDQgNy4wODk4NDQgTCAyNC45OTIxODggNy4wODk4NDQgQyAyNS4wMTU2MjUgNS45MTc5NjkgMjUuMDI3MzQ0IDQuODkwNjI1IDI1LjA0Mjk2OSA0LjExNzE4OCBaIE0gMjQuODY3MTg4IDEwLjgzOTg0NCBMIDcwLjI2NTYyNSAxMC44Mzk4NDQgQyA3MC40NTcwMzEgMTUuNzE0ODQ0IDcwLjg1NTQ2OSAyMi4zMzU5MzggNzEuNjY3OTY5IDI5Ljk0NTMxMiBMIDIzLjQ2NDg0NCAyOS45NDUzMTIgQyAyNC4yODEyNSAyMi4zMzU5MzggMjQuNjc5Njg4IDE1LjcyNjU2MiAyNC44NjcxODggMTAuODUxNTYyIFogTSAyMy4wMzkwNjIgMzMuNzA3MDMxIEwgNzIuMDg5ODQ0IDMzLjcwNzAzMSBDIDcyLjMwMDc4MSAzNS40NDkyMTkgNzIuNTMxMjUgMzcuMjMwNDY5IDcyLjc3NzM0NCAzOS4wNDI5NjkgTCAyMi4zNTU0NjkgMzkuMDQyOTY5IEMgMjIuNjA1NDY5IDM3LjIyNjU2MiAyMi44MzU5MzggMzUuNDQ5MjE5IDIzLjAzOTA2MiAzMy43MDcwMzEgWiBNIDIxLjc4OTA2MiA0Mi43OTI5NjkgTCA3My4zMzk4NDQgNDIuNzkyOTY5IEMgNzUgNTMuOTg4MjgxIDc3LjYyMTA5NCA2NS4wMTE3MTkgODEuMTg3NSA3NS43NDYwOTQgTCAxMy45NTcwMzEgNzUuNzQ2MDk0IEMgMTcuNTE5NTMxIDY1LjAxMTcxOSAyMC4xNDA2MjUgNTMuOTgwNDY5IDIxLjc4OTA2MiA0Mi43OTI5NjkgWiBNIDUuMjE4NzUgOTUuMzY3MTg4IEMgOC4xMjEwOTQgOTAuMjg5MDYyIDEwLjU5Mzc1IDg0Ljk4MDQ2OSAxMi42MjEwOTQgNzkuNDk2MDk0IEwgODIuNTIzNDM4IDc5LjQ5NjA5NCBDIDg0LjU1MDc4MSA4NC45ODA0NjkgODcuMDIzNDM4IDkwLjI4OTA2MiA4OS45MjU3ODEgOTUuMzY3MTg4IFogTSA5NC4zMDA3ODEgOTUuMzY3MTg4IEMgOTIuMDc4MTI1IDkxLjczMDQ2OSA5MC4xMjEwOTQgODcuOTQ5MjE5IDg4LjQzNzUgODQuMDMxMjUgTCAxMjguMzI0MjE5IDg0LjAzMTI1IEMgMTI5Ljc3NzM0NCA4Ny45Mzc1IDEzMS41MjczNDQgOTEuNzI2NTYyIDEzMy41NDY4NzUgOTUuMzY3MTg4IFogTSA5NC4zMDA3ODEgOTUuMzY3MTg4ICIgc3R5bGU9IiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+CjwvZz48L3N2Zz4=" />
                      </div>
                      <p>
                        Integer lobortisy consequat consequat imperdiet sed
                        nulla sed viverra ut lorem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" linkimg ">
                  <strong>
                    <a href="# ">Solar Thermal Systems</a>
                  </strong>
                </div>
              </div>
              <div className="imglinkcontent ">
                <div className="imgobject hoverimg">
                  <Image
                    loading="lazy"
                    fill
                    src="/assets/images/home/program-image-4.jpg"
                    alt="charges "
                  />
                  <div className="hidentext ">
                    <div className="elmhiden ">
                      <div className="flation ">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEzOC43MzIzOSAxMzgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzdXJmYWNlMSI+CjxwYXRoIGQ9Ik0gMTIyLjM2NzE4OCAyNC4yMzQzNzUgQyAxMjIuMzcxMDk0IDIzLjE5OTIxOSAxMjEuNTM5MDYyIDIyLjM1NTQ2OSAxMjAuNTAzOTA2IDIyLjM1MTU2MiBDIDEyMC40OTYwOTQgMjIuMzUxNTYyIDEyMC40OTIxODggMjIuMzUxNTYyIDEyMC40OTIxODggMjIuMzUxNTYyIEwgODMuMDAzOTA2IDIyLjM1MTU2MiBDIDgxLjk2ODc1IDIyLjM1MTU2MiA4MS4xMjg5MDYgMjMuMTkxNDA2IDgxLjEyODkwNiAyNC4yMjY1NjIgQyA4MS4xMjg5MDYgMjQuMjI2NTYyIDgxLjEyODkwNiAyNC4yMzA0NjkgODEuMTI4OTA2IDI0LjIzNDM3NSBDIDgxLjAzOTA2MiAzMy43MDcwMzEgODAuMzIwMzEyIDQzLjE2MDE1NiA3OC45NzY1NjIgNTIuNTI3MzQ0IEMgNzUuNzQ2MDk0IDM1Ljk2MDkzOCA3NC4wMjczNDQgMTkuMTMyODEyIDczLjgzOTg0NCAyLjI1MzkwNiBDIDczLjg0NzY1NiAxLjIxODc1IDczLjAxMTcxOSAwLjM3NSA3MS45NzY1NjIgMC4zNjcxODggQyA3MS45NzI2NTYgMC4zNjcxODggNzEuOTY4NzUgMC4zNjcxODggNzEuOTY0ODQ0IDAuMzY3MTg4IEwgMjMuMTI4OTA2IDAuMzY3MTg4IEMgMjIuMTAxNTYyIDAuMzg2NzE5IDIxLjI4NTE1NiAxLjIzMDQ2OSAyMS4yOTI5NjkgMi4yNTM5MDYgQyAyMS4yOTI5NjkgMi44NTU0NjkgMjEuNTU0Njg4IDYyLjgzOTg0NCAwLjI5Njg3NSA5Ni4yMjY1NjIgQyAtMC4yNjE3MTkgOTcuMTAxNTYyIC0wLjAwNzgxMjUgOTguMjU3ODEyIDAuODYzMjgxIDk4LjgyMDMxMiBDIDEuMTY3OTY5IDk5LjAxNTYyNSAxLjUyMzQzOCA5OS4xMTcxODggMS44ODY3MTkgOTkuMTE3MTg4IEwgMTM2Ljg0NzY1NiA5OS4xMTcxODggQyAxMzcuODgyODEyIDk5LjEyMTA5NCAxMzguNzI2NTYyIDk4LjI4OTA2MiAxMzguNzMwNDY5IDk3LjI1MzkwNiBDIDEzOC43MzA0NjkgOTYuODkwNjI1IDEzOC42Mjg5MDYgOTYuNTM1MTU2IDEzOC40MzM1OTQgOTYuMjI2NTYyIEMgMTIyLjE2Nzk2OSA3MC42NzU3ODEgMTIyLjM1MTU2MiAyNC43NDYwOTQgMTIyLjM2NzE4OCAyNC4yMzQzNzUgWiBNIDg0Ljg3ODkwNiAyNi4xMDE1NjIgTCAxMTguNjE3MTg4IDI2LjEwMTU2MiBDIDExOC42MTcxODggMjYuNTExNzE5IDExOC42MTcxODggMjcgMTE4LjYxNzE4OCAyNy41MTk1MzEgTCA4NC44MTI1IDI3LjUxOTUzMSBDIDg0LjgyNDIxOSAyNi45ODQzNzUgODQuODM5ODQ0IDI2LjUgODQuODM5ODQ0IDI2LjA4NTkzOCBaIE0gODQuNzEwOTM4IDMxLjI2OTUzMSBMIDExOC44MDQ2ODggMzEuMjY5NTMxIEMgMTE4Ljk1MzEyNSAzNC44ODI4MTIgMTE5LjI0MjE4OCAzOS42NDQ1MzEgMTE5LjgxMjUgNDUuMDg5ODQ0IEwgODMuNjUyMzQ0IDQ1LjA4OTg0NCBDIDg0LjIyMjY1NiAzOS42NDQ1MzEgODQuNTI3MzQ0IDM0Ljg3NSA4NC42NzU3ODEgMzEuMjYxNzE5IFogTSA4My4yMjY1NjIgNDguODM5ODQ0IEwgMTIwLjIwMzEyNSA0OC44Mzk4NDQgQyAxMjAuMzM1OTM4IDQ5LjkwMjM0NCAxMjAuNDc2NTYyIDUwLjk4MDQ2OSAxMjAuNjI4OTA2IDUyLjA3ODEyNSBMIDgyLjgwMDc4MSA1Mi4wNzgxMjUgQyA4Mi45NDkyMTkgNTAuOTgwNDY5IDgzLjA4OTg0NCA0OS45MDIzNDQgODMuMjI2NTYyIDQ4LjgzOTg0NCBaIE0gODIuMjUgNTUuODI4MTI1IEwgMTIxLjE3NTc4MSA1NS44MjgxMjUgQyAxMjIuNDI5Njg4IDY0LjEzMjgxMiAxMjQuMzY3MTg4IDcyLjMxNjQwNiAxMjYuOTc2NTYyIDgwLjI5Njg3NSBMIDg2Ljg2MzI4MSA4MC4yOTY4NzUgQyA4NC41NzQyMTkgNzQuNDA2MjUgODIuNjY0MDYyIDY4LjM3MTA5NCA4MS4xMzY3MTkgNjIuMjM4MjgxIEMgODEuNTUwNzgxIDYwLjAzOTA2MiA4MS44NjMyODEgNTcuOTAyMzQ0IDgyLjI1IDU1LjgxNjQwNiBaIE0gMjUuMDQyOTY5IDQuMTE3MTg4IEwgNzAuMDg5ODQ0IDQuMTE3MTg4IEMgNzAuMDg5ODQ0IDQuODkwNjI1IDcwLjA4OTg0NCA1LjkxNzk2OSA3MC4wODk4NDQgNy4wODk4NDQgTCAyNC45OTIxODggNy4wODk4NDQgQyAyNS4wMTU2MjUgNS45MTc5NjkgMjUuMDI3MzQ0IDQuODkwNjI1IDI1LjA0Mjk2OSA0LjExNzE4OCBaIE0gMjQuODY3MTg4IDEwLjgzOTg0NCBMIDcwLjI2NTYyNSAxMC44Mzk4NDQgQyA3MC40NTcwMzEgMTUuNzE0ODQ0IDcwLjg1NTQ2OSAyMi4zMzU5MzggNzEuNjY3OTY5IDI5Ljk0NTMxMiBMIDIzLjQ2NDg0NCAyOS45NDUzMTIgQyAyNC4yODEyNSAyMi4zMzU5MzggMjQuNjc5Njg4IDE1LjcyNjU2MiAyNC44NjcxODggMTAuODUxNTYyIFogTSAyMy4wMzkwNjIgMzMuNzA3MDMxIEwgNzIuMDg5ODQ0IDMzLjcwNzAzMSBDIDcyLjMwMDc4MSAzNS40NDkyMTkgNzIuNTMxMjUgMzcuMjMwNDY5IDcyLjc3NzM0NCAzOS4wNDI5NjkgTCAyMi4zNTU0NjkgMzkuMDQyOTY5IEMgMjIuNjA1NDY5IDM3LjIyNjU2MiAyMi44MzU5MzggMzUuNDQ5MjE5IDIzLjAzOTA2MiAzMy43MDcwMzEgWiBNIDIxLjc4OTA2MiA0Mi43OTI5NjkgTCA3My4zMzk4NDQgNDIuNzkyOTY5IEMgNzUgNTMuOTg4MjgxIDc3LjYyMTA5NCA2NS4wMTE3MTkgODEuMTg3NSA3NS43NDYwOTQgTCAxMy45NTcwMzEgNzUuNzQ2MDk0IEMgMTcuNTE5NTMxIDY1LjAxMTcxOSAyMC4xNDA2MjUgNTMuOTgwNDY5IDIxLjc4OTA2MiA0Mi43OTI5NjkgWiBNIDUuMjE4NzUgOTUuMzY3MTg4IEMgOC4xMjEwOTQgOTAuMjg5MDYyIDEwLjU5Mzc1IDg0Ljk4MDQ2OSAxMi42MjEwOTQgNzkuNDk2MDk0IEwgODIuNTIzNDM4IDc5LjQ5NjA5NCBDIDg0LjU1MDc4MSA4NC45ODA0NjkgODcuMDIzNDM4IDkwLjI4OTA2MiA4OS45MjU3ODEgOTUuMzY3MTg4IFogTSA5NC4zMDA3ODEgOTUuMzY3MTg4IEMgOTIuMDc4MTI1IDkxLjczMDQ2OSA5MC4xMjEwOTQgODcuOTQ5MjE5IDg4LjQzNzUgODQuMDMxMjUgTCAxMjguMzI0MjE5IDg0LjAzMTI1IEMgMTI5Ljc3NzM0NCA4Ny45Mzc1IDEzMS41MjczNDQgOTEuNzI2NTYyIDEzMy41NDY4NzUgOTUuMzY3MTg4IFogTSA5NC4zMDA3ODEgOTUuMzY3MTg4ICIgc3R5bGU9IiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+CjwvZz48L3N2Zz4=" />
                      </div>
                      <p>
                        Integer lobortisy consequat consequat imperdiet sed
                        nulla sed viverra ut lorem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" linkimg ">
                  <strong>
                    <a href="# ">Residential EV Chanrgersrs </a>
                  </strong>
                </div>
              </div>
              <div className="imglinkcontent ">
                <div className="imgobject hoverimg ">
                  <Image
                    fill
                    loading="lazy"
                    src="/assets/images/home/program-image-2.jpg"
                    alt=" "
                  />
                  <div className="hidentext ">
                    <div className="elmhiden ">
                      <div className="flation ">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEzOC43MzIzOSAxMzgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzdXJmYWNlMSI+CjxwYXRoIGQ9Ik0gMTIyLjM2NzE4OCAyNC4yMzQzNzUgQyAxMjIuMzcxMDk0IDIzLjE5OTIxOSAxMjEuNTM5MDYyIDIyLjM1NTQ2OSAxMjAuNTAzOTA2IDIyLjM1MTU2MiBDIDEyMC40OTYwOTQgMjIuMzUxNTYyIDEyMC40OTIxODggMjIuMzUxNTYyIDEyMC40OTIxODggMjIuMzUxNTYyIEwgODMuMDAzOTA2IDIyLjM1MTU2MiBDIDgxLjk2ODc1IDIyLjM1MTU2MiA4MS4xMjg5MDYgMjMuMTkxNDA2IDgxLjEyODkwNiAyNC4yMjY1NjIgQyA4MS4xMjg5MDYgMjQuMjI2NTYyIDgxLjEyODkwNiAyNC4yMzA0NjkgODEuMTI4OTA2IDI0LjIzNDM3NSBDIDgxLjAzOTA2MiAzMy43MDcwMzEgODAuMzIwMzEyIDQzLjE2MDE1NiA3OC45NzY1NjIgNTIuNTI3MzQ0IEMgNzUuNzQ2MDk0IDM1Ljk2MDkzOCA3NC4wMjczNDQgMTkuMTMyODEyIDczLjgzOTg0NCAyLjI1MzkwNiBDIDczLjg0NzY1NiAxLjIxODc1IDczLjAxMTcxOSAwLjM3NSA3MS45NzY1NjIgMC4zNjcxODggQyA3MS45NzI2NTYgMC4zNjcxODggNzEuOTY4NzUgMC4zNjcxODggNzEuOTY0ODQ0IDAuMzY3MTg4IEwgMjMuMTI4OTA2IDAuMzY3MTg4IEMgMjIuMTAxNTYyIDAuMzg2NzE5IDIxLjI4NTE1NiAxLjIzMDQ2OSAyMS4yOTI5NjkgMi4yNTM5MDYgQyAyMS4yOTI5NjkgMi44NTU0NjkgMjEuNTU0Njg4IDYyLjgzOTg0NCAwLjI5Njg3NSA5Ni4yMjY1NjIgQyAtMC4yNjE3MTkgOTcuMTAxNTYyIC0wLjAwNzgxMjUgOTguMjU3ODEyIDAuODYzMjgxIDk4LjgyMDMxMiBDIDEuMTY3OTY5IDk5LjAxNTYyNSAxLjUyMzQzOCA5OS4xMTcxODggMS44ODY3MTkgOTkuMTE3MTg4IEwgMTM2Ljg0NzY1NiA5OS4xMTcxODggQyAxMzcuODgyODEyIDk5LjEyMTA5NCAxMzguNzI2NTYyIDk4LjI4OTA2MiAxMzguNzMwNDY5IDk3LjI1MzkwNiBDIDEzOC43MzA0NjkgOTYuODkwNjI1IDEzOC42Mjg5MDYgOTYuNTM1MTU2IDEzOC40MzM1OTQgOTYuMjI2NTYyIEMgMTIyLjE2Nzk2OSA3MC42NzU3ODEgMTIyLjM1MTU2MiAyNC43NDYwOTQgMTIyLjM2NzE4OCAyNC4yMzQzNzUgWiBNIDg0Ljg3ODkwNiAyNi4xMDE1NjIgTCAxMTguNjE3MTg4IDI2LjEwMTU2MiBDIDExOC42MTcxODggMjYuNTExNzE5IDExOC42MTcxODggMjcgMTE4LjYxNzE4OCAyNy41MTk1MzEgTCA4NC44MTI1IDI3LjUxOTUzMSBDIDg0LjgyNDIxOSAyNi45ODQzNzUgODQuODM5ODQ0IDI2LjUgODQuODM5ODQ0IDI2LjA4NTkzOCBaIE0gODQuNzEwOTM4IDMxLjI2OTUzMSBMIDExOC44MDQ2ODggMzEuMjY5NTMxIEMgMTE4Ljk1MzEyNSAzNC44ODI4MTIgMTE5LjI0MjE4OCAzOS42NDQ1MzEgMTE5LjgxMjUgNDUuMDg5ODQ0IEwgODMuNjUyMzQ0IDQ1LjA4OTg0NCBDIDg0LjIyMjY1NiAzOS42NDQ1MzEgODQuNTI3MzQ0IDM0Ljg3NSA4NC42NzU3ODEgMzEuMjYxNzE5IFogTSA4My4yMjY1NjIgNDguODM5ODQ0IEwgMTIwLjIwMzEyNSA0OC44Mzk4NDQgQyAxMjAuMzM1OTM4IDQ5LjkwMjM0NCAxMjAuNDc2NTYyIDUwLjk4MDQ2OSAxMjAuNjI4OTA2IDUyLjA3ODEyNSBMIDgyLjgwMDc4MSA1Mi4wNzgxMjUgQyA4Mi45NDkyMTkgNTAuOTgwNDY5IDgzLjA4OTg0NCA0OS45MDIzNDQgODMuMjI2NTYyIDQ4LjgzOTg0NCBaIE0gODIuMjUgNTUuODI4MTI1IEwgMTIxLjE3NTc4MSA1NS44MjgxMjUgQyAxMjIuNDI5Njg4IDY0LjEzMjgxMiAxMjQuMzY3MTg4IDcyLjMxNjQwNiAxMjYuOTc2NTYyIDgwLjI5Njg3NSBMIDg2Ljg2MzI4MSA4MC4yOTY4NzUgQyA4NC41NzQyMTkgNzQuNDA2MjUgODIuNjY0MDYyIDY4LjM3MTA5NCA4MS4xMzY3MTkgNjIuMjM4MjgxIEMgODEuNTUwNzgxIDYwLjAzOTA2MiA4MS44NjMyODEgNTcuOTAyMzQ0IDgyLjI1IDU1LjgxNjQwNiBaIE0gMjUuMDQyOTY5IDQuMTE3MTg4IEwgNzAuMDg5ODQ0IDQuMTE3MTg4IEMgNzAuMDg5ODQ0IDQuODkwNjI1IDcwLjA4OTg0NCA1LjkxNzk2OSA3MC4wODk4NDQgNy4wODk4NDQgTCAyNC45OTIxODggNy4wODk4NDQgQyAyNS4wMTU2MjUgNS45MTc5NjkgMjUuMDI3MzQ0IDQuODkwNjI1IDI1LjA0Mjk2OSA0LjExNzE4OCBaIE0gMjQuODY3MTg4IDEwLjgzOTg0NCBMIDcwLjI2NTYyNSAxMC44Mzk4NDQgQyA3MC40NTcwMzEgMTUuNzE0ODQ0IDcwLjg1NTQ2OSAyMi4zMzU5MzggNzEuNjY3OTY5IDI5Ljk0NTMxMiBMIDIzLjQ2NDg0NCAyOS45NDUzMTIgQyAyNC4yODEyNSAyMi4zMzU5MzggMjQuNjc5Njg4IDE1LjcyNjU2MiAyNC44NjcxODggMTAuODUxNTYyIFogTSAyMy4wMzkwNjIgMzMuNzA3MDMxIEwgNzIuMDg5ODQ0IDMzLjcwNzAzMSBDIDcyLjMwMDc4MSAzNS40NDkyMTkgNzIuNTMxMjUgMzcuMjMwNDY5IDcyLjc3NzM0NCAzOS4wNDI5NjkgTCAyMi4zNTU0NjkgMzkuMDQyOTY5IEMgMjIuNjA1NDY5IDM3LjIyNjU2MiAyMi44MzU5MzggMzUuNDQ5MjE5IDIzLjAzOTA2MiAzMy43MDcwMzEgWiBNIDIxLjc4OTA2MiA0Mi43OTI5NjkgTCA3My4zMzk4NDQgNDIuNzkyOTY5IEMgNzUgNTMuOTg4MjgxIDc3LjYyMTA5NCA2NS4wMTE3MTkgODEuMTg3NSA3NS43NDYwOTQgTCAxMy45NTcwMzEgNzUuNzQ2MDk0IEMgMTcuNTE5NTMxIDY1LjAxMTcxOSAyMC4xNDA2MjUgNTMuOTgwNDY5IDIxLjc4OTA2MiA0Mi43OTI5NjkgWiBNIDUuMjE4NzUgOTUuMzY3MTg4IEMgOC4xMjEwOTQgOTAuMjg5MDYyIDEwLjU5Mzc1IDg0Ljk4MDQ2OSAxMi42MjEwOTQgNzkuNDk2MDk0IEwgODIuNTIzNDM4IDc5LjQ5NjA5NCBDIDg0LjU1MDc4MSA4NC45ODA0NjkgODcuMDIzNDM4IDkwLjI4OTA2MiA4OS45MjU3ODEgOTUuMzY3MTg4IFogTSA5NC4zMDA3ODEgOTUuMzY3MTg4IEMgOTIuMDc4MTI1IDkxLjczMDQ2OSA5MC4xMjEwOTQgODcuOTQ5MjE5IDg4LjQzNzUgODQuMDMxMjUgTCAxMjguMzI0MjE5IDg0LjAzMTI1IEMgMTI5Ljc3NzM0NCA4Ny45Mzc1IDEzMS41MjczNDQgOTEuNzI2NTYyIDEzMy41NDY4NzUgOTUuMzY3MTg4IFogTSA5NC4zMDA3ODEgOTUuMzY3MTg4ICIgc3R5bGU9IiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+CjwvZz48L3N2Zz4=" />
                      </div>
                      <p>
                        Integer lobortisy consequat consequat imperdiet sed
                        nulla sed viverra ut lorem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" linkimg ">
                  <strong>
                    <a href="# ">Commercial Solutions</a>
                  </strong>
                </div>
              </div>
              <div className="imglinkcontent ">
                <div className="imgobject hoverimg ">
                  <Image
                    loading="lazy"
                    fill
                    src="/assets/images/home/program-image-1.jpg"
                    alt=" "
                  />
                  <div className="hidentext ">
                    <div className="elmhiden ">
                      <div className="flation ">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEzOC43MzIzOSAxMzgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzdXJmYWNlMSI+CjxwYXRoIGQ9Ik0gMTIyLjM2NzE4OCAyNC4yMzQzNzUgQyAxMjIuMzcxMDk0IDIzLjE5OTIxOSAxMjEuNTM5MDYyIDIyLjM1NTQ2OSAxMjAuNTAzOTA2IDIyLjM1MTU2MiBDIDEyMC40OTYwOTQgMjIuMzUxNTYyIDEyMC40OTIxODggMjIuMzUxNTYyIDEyMC40OTIxODggMjIuMzUxNTYyIEwgODMuMDAzOTA2IDIyLjM1MTU2MiBDIDgxLjk2ODc1IDIyLjM1MTU2MiA4MS4xMjg5MDYgMjMuMTkxNDA2IDgxLjEyODkwNiAyNC4yMjY1NjIgQyA4MS4xMjg5MDYgMjQuMjI2NTYyIDgxLjEyODkwNiAyNC4yMzA0NjkgODEuMTI4OTA2IDI0LjIzNDM3NSBDIDgxLjAzOTA2MiAzMy43MDcwMzEgODAuMzIwMzEyIDQzLjE2MDE1NiA3OC45NzY1NjIgNTIuNTI3MzQ0IEMgNzUuNzQ2MDk0IDM1Ljk2MDkzOCA3NC4wMjczNDQgMTkuMTMyODEyIDczLjgzOTg0NCAyLjI1MzkwNiBDIDczLjg0NzY1NiAxLjIxODc1IDczLjAxMTcxOSAwLjM3NSA3MS45NzY1NjIgMC4zNjcxODggQyA3MS45NzI2NTYgMC4zNjcxODggNzEuOTY4NzUgMC4zNjcxODggNzEuOTY0ODQ0IDAuMzY3MTg4IEwgMjMuMTI4OTA2IDAuMzY3MTg4IEMgMjIuMTAxNTYyIDAuMzg2NzE5IDIxLjI4NTE1NiAxLjIzMDQ2OSAyMS4yOTI5NjkgMi4yNTM5MDYgQyAyMS4yOTI5NjkgMi44NTU0NjkgMjEuNTU0Njg4IDYyLjgzOTg0NCAwLjI5Njg3NSA5Ni4yMjY1NjIgQyAtMC4yNjE3MTkgOTcuMTAxNTYyIC0wLjAwNzgxMjUgOTguMjU3ODEyIDAuODYzMjgxIDk4LjgyMDMxMiBDIDEuMTY3OTY5IDk5LjAxNTYyNSAxLjUyMzQzOCA5OS4xMTcxODggMS44ODY3MTkgOTkuMTE3MTg4IEwgMTM2Ljg0NzY1NiA5OS4xMTcxODggQyAxMzcuODgyODEyIDk5LjEyMTA5NCAxMzguNzI2NTYyIDk4LjI4OTA2MiAxMzguNzMwNDY5IDk3LjI1MzkwNiBDIDEzOC43MzA0NjkgOTYuODkwNjI1IDEzOC42Mjg5MDYgOTYuNTM1MTU2IDEzOC40MzM1OTQgOTYuMjI2NTYyIEMgMTIyLjE2Nzk2OSA3MC42NzU3ODEgMTIyLjM1MTU2MiAyNC43NDYwOTQgMTIyLjM2NzE4OCAyNC4yMzQzNzUgWiBNIDg0Ljg3ODkwNiAyNi4xMDE1NjIgTCAxMTguNjE3MTg4IDI2LjEwMTU2MiBDIDExOC42MTcxODggMjYuNTExNzE5IDExOC42MTcxODggMjcgMTE4LjYxNzE4OCAyNy41MTk1MzEgTCA4NC44MTI1IDI3LjUxOTUzMSBDIDg0LjgyNDIxOSAyNi45ODQzNzUgODQuODM5ODQ0IDI2LjUgODQuODM5ODQ0IDI2LjA4NTkzOCBaIE0gODQuNzEwOTM4IDMxLjI2OTUzMSBMIDExOC44MDQ2ODggMzEuMjY5NTMxIEMgMTE4Ljk1MzEyNSAzNC44ODI4MTIgMTE5LjI0MjE4OCAzOS42NDQ1MzEgMTE5LjgxMjUgNDUuMDg5ODQ0IEwgODMuNjUyMzQ0IDQ1LjA4OTg0NCBDIDg0LjIyMjY1NiAzOS42NDQ1MzEgODQuNTI3MzQ0IDM0Ljg3NSA4NC42NzU3ODEgMzEuMjYxNzE5IFogTSA4My4yMjY1NjIgNDguODM5ODQ0IEwgMTIwLjIwMzEyNSA0OC44Mzk4NDQgQyAxMjAuMzM1OTM4IDQ5LjkwMjM0NCAxMjAuNDc2NTYyIDUwLjk4MDQ2OSAxMjAuNjI4OTA2IDUyLjA3ODEyNSBMIDgyLjgwMDc4MSA1Mi4wNzgxMjUgQyA4Mi45NDkyMTkgNTAuOTgwNDY5IDgzLjA4OTg0NCA0OS45MDIzNDQgODMuMjI2NTYyIDQ4LjgzOTg0NCBaIE0gODIuMjUgNTUuODI4MTI1IEwgMTIxLjE3NTc4MSA1NS44MjgxMjUgQyAxMjIuNDI5Njg4IDY0LjEzMjgxMiAxMjQuMzY3MTg4IDcyLjMxNjQwNiAxMjYuOTc2NTYyIDgwLjI5Njg3NSBMIDg2Ljg2MzI4MSA4MC4yOTY4NzUgQyA4NC41NzQyMTkgNzQuNDA2MjUgODIuNjY0MDYyIDY4LjM3MTA5NCA4MS4xMzY3MTkgNjIuMjM4MjgxIEMgODEuNTUwNzgxIDYwLjAzOTA2MiA4MS44NjMyODEgNTcuOTAyMzQ0IDgyLjI1IDU1LjgxNjQwNiBaIE0gMjUuMDQyOTY5IDQuMTE3MTg4IEwgNzAuMDg5ODQ0IDQuMTE3MTg4IEMgNzAuMDg5ODQ0IDQuODkwNjI1IDcwLjA4OTg0NCA1LjkxNzk2OSA3MC4wODk4NDQgNy4wODk4NDQgTCAyNC45OTIxODggNy4wODk4NDQgQyAyNS4wMTU2MjUgNS45MTc5NjkgMjUuMDI3MzQ0IDQuODkwNjI1IDI1LjA0Mjk2OSA0LjExNzE4OCBaIE0gMjQuODY3MTg4IDEwLjgzOTg0NCBMIDcwLjI2NTYyNSAxMC44Mzk4NDQgQyA3MC40NTcwMzEgMTUuNzE0ODQ0IDcwLjg1NTQ2OSAyMi4zMzU5MzggNzEuNjY3OTY5IDI5Ljk0NTMxMiBMIDIzLjQ2NDg0NCAyOS45NDUzMTIgQyAyNC4yODEyNSAyMi4zMzU5MzggMjQuNjc5Njg4IDE1LjcyNjU2MiAyNC44NjcxODggMTAuODUxNTYyIFogTSAyMy4wMzkwNjIgMzMuNzA3MDMxIEwgNzIuMDg5ODQ0IDMzLjcwNzAzMSBDIDcyLjMwMDc4MSAzNS40NDkyMTkgNzIuNTMxMjUgMzcuMjMwNDY5IDcyLjc3NzM0NCAzOS4wNDI5NjkgTCAyMi4zNTU0NjkgMzkuMDQyOTY5IEMgMjIuNjA1NDY5IDM3LjIyNjU2MiAyMi44MzU5MzggMzUuNDQ5MjE5IDIzLjAzOTA2MiAzMy43MDcwMzEgWiBNIDIxLjc4OTA2MiA0Mi43OTI5NjkgTCA3My4zMzk4NDQgNDIuNzkyOTY5IEMgNzUgNTMuOTg4MjgxIDc3LjYyMTA5NCA2NS4wMTE3MTkgODEuMTg3NSA3NS43NDYwOTQgTCAxMy45NTcwMzEgNzUuNzQ2MDk0IEMgMTcuNTE5NTMxIDY1LjAxMTcxOSAyMC4xNDA2MjUgNTMuOTgwNDY5IDIxLjc4OTA2MiA0Mi43OTI5NjkgWiBNIDUuMjE4NzUgOTUuMzY3MTg4IEMgOC4xMjEwOTQgOTAuMjg5MDYyIDEwLjU5Mzc1IDg0Ljk4MDQ2OSAxMi42MjEwOTQgNzkuNDk2MDk0IEwgODIuNTIzNDM4IDc5LjQ5NjA5NCBDIDg0LjU1MDc4MSA4NC45ODA0NjkgODcuMDIzNDM4IDkwLjI4OTA2MiA4OS45MjU3ODEgOTUuMzY3MTg4IFogTSA5NC4zMDA3ODEgOTUuMzY3MTg4IEMgOTIuMDc4MTI1IDkxLjczMDQ2OSA5MC4xMjEwOTQgODcuOTQ5MjE5IDg4LjQzNzUgODQuMDMxMjUgTCAxMjguMzI0MjE5IDg0LjAzMTI1IEMgMTI5Ljc3NzM0NCA4Ny45Mzc1IDEzMS41MjczNDQgOTEuNzI2NTYyIDEzMy41NDY4NzUgOTUuMzY3MTg4IFogTSA5NC4zMDA3ODEgOTUuMzY3MTg4ICIgc3R5bGU9IiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+CjwvZz48L3N2Zz4=" />
                      </div>
                      <p>
                        Integer lobortisy consequat consequat imperdiet sed
                        nulla sed viverra ut lorem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" linkimg ">
                  <strong>
                    <a href="# ">Solar Thermal Systems</a>
                  </strong>
                </div>
              </div>
              <div className="imglinkcontent ">
                <div className="imgobject hoverimg ">
                  <Image
                    fill
                    loading="lazy"
                    src="/assets/images/home/program-image-3.jpg"
                    alt="work "
                  />
                  <div className="hidentext ">
                    <div className="elmhiden ">
                      <div className="flation ">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEzOC43MzIzOSAxMzgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzdXJmYWNlMSI+CjxwYXRoIGQ9Ik0gMTIyLjM2NzE4OCAyNC4yMzQzNzUgQyAxMjIuMzcxMDk0IDIzLjE5OTIxOSAxMjEuNTM5MDYyIDIyLjM1NTQ2OSAxMjAuNTAzOTA2IDIyLjM1MTU2MiBDIDEyMC40OTYwOTQgMjIuMzUxNTYyIDEyMC40OTIxODggMjIuMzUxNTYyIDEyMC40OTIxODggMjIuMzUxNTYyIEwgODMuMDAzOTA2IDIyLjM1MTU2MiBDIDgxLjk2ODc1IDIyLjM1MTU2MiA4MS4xMjg5MDYgMjMuMTkxNDA2IDgxLjEyODkwNiAyNC4yMjY1NjIgQyA4MS4xMjg5MDYgMjQuMjI2NTYyIDgxLjEyODkwNiAyNC4yMzA0NjkgODEuMTI4OTA2IDI0LjIzNDM3NSBDIDgxLjAzOTA2MiAzMy43MDcwMzEgODAuMzIwMzEyIDQzLjE2MDE1NiA3OC45NzY1NjIgNTIuNTI3MzQ0IEMgNzUuNzQ2MDk0IDM1Ljk2MDkzOCA3NC4wMjczNDQgMTkuMTMyODEyIDczLjgzOTg0NCAyLjI1MzkwNiBDIDczLjg0NzY1NiAxLjIxODc1IDczLjAxMTcxOSAwLjM3NSA3MS45NzY1NjIgMC4zNjcxODggQyA3MS45NzI2NTYgMC4zNjcxODggNzEuOTY4NzUgMC4zNjcxODggNzEuOTY0ODQ0IDAuMzY3MTg4IEwgMjMuMTI4OTA2IDAuMzY3MTg4IEMgMjIuMTAxNTYyIDAuMzg2NzE5IDIxLjI4NTE1NiAxLjIzMDQ2OSAyMS4yOTI5NjkgMi4yNTM5MDYgQyAyMS4yOTI5NjkgMi44NTU0NjkgMjEuNTU0Njg4IDYyLjgzOTg0NCAwLjI5Njg3NSA5Ni4yMjY1NjIgQyAtMC4yNjE3MTkgOTcuMTAxNTYyIC0wLjAwNzgxMjUgOTguMjU3ODEyIDAuODYzMjgxIDk4LjgyMDMxMiBDIDEuMTY3OTY5IDk5LjAxNTYyNSAxLjUyMzQzOCA5OS4xMTcxODggMS44ODY3MTkgOTkuMTE3MTg4IEwgMTM2Ljg0NzY1NiA5OS4xMTcxODggQyAxMzcuODgyODEyIDk5LjEyMTA5NCAxMzguNzI2NTYyIDk4LjI4OTA2MiAxMzguNzMwNDY5IDk3LjI1MzkwNiBDIDEzOC43MzA0NjkgOTYuODkwNjI1IDEzOC42Mjg5MDYgOTYuNTM1MTU2IDEzOC40MzM1OTQgOTYuMjI2NTYyIEMgMTIyLjE2Nzk2OSA3MC42NzU3ODEgMTIyLjM1MTU2MiAyNC43NDYwOTQgMTIyLjM2NzE4OCAyNC4yMzQzNzUgWiBNIDg0Ljg3ODkwNiAyNi4xMDE1NjIgTCAxMTguNjE3MTg4IDI2LjEwMTU2MiBDIDExOC42MTcxODggMjYuNTExNzE5IDExOC42MTcxODggMjcgMTE4LjYxNzE4OCAyNy41MTk1MzEgTCA4NC44MTI1IDI3LjUxOTUzMSBDIDg0LjgyNDIxOSAyNi45ODQzNzUgODQuODM5ODQ0IDI2LjUgODQuODM5ODQ0IDI2LjA4NTkzOCBaIE0gODQuNzEwOTM4IDMxLjI2OTUzMSBMIDExOC44MDQ2ODggMzEuMjY5NTMxIEMgMTE4Ljk1MzEyNSAzNC44ODI4MTIgMTE5LjI0MjE4OCAzOS42NDQ1MzEgMTE5LjgxMjUgNDUuMDg5ODQ0IEwgODMuNjUyMzQ0IDQ1LjA4OTg0NCBDIDg0LjIyMjY1NiAzOS42NDQ1MzEgODQuNTI3MzQ0IDM0Ljg3NSA4NC42NzU3ODEgMzEuMjYxNzE5IFogTSA4My4yMjY1NjIgNDguODM5ODQ0IEwgMTIwLjIwMzEyNSA0OC44Mzk4NDQgQyAxMjAuMzM1OTM4IDQ5LjkwMjM0NCAxMjAuNDc2NTYyIDUwLjk4MDQ2OSAxMjAuNjI4OTA2IDUyLjA3ODEyNSBMIDgyLjgwMDc4MSA1Mi4wNzgxMjUgQyA4Mi45NDkyMTkgNTAuOTgwNDY5IDgzLjA4OTg0NCA0OS45MDIzNDQgODMuMjI2NTYyIDQ4LjgzOTg0NCBaIE0gODIuMjUgNTUuODI4MTI1IEwgMTIxLjE3NTc4MSA1NS44MjgxMjUgQyAxMjIuNDI5Njg4IDY0LjEzMjgxMiAxMjQuMzY3MTg4IDcyLjMxNjQwNiAxMjYuOTc2NTYyIDgwLjI5Njg3NSBMIDg2Ljg2MzI4MSA4MC4yOTY4NzUgQyA4NC41NzQyMTkgNzQuNDA2MjUgODIuNjY0MDYyIDY4LjM3MTA5NCA4MS4xMzY3MTkgNjIuMjM4MjgxIEMgODEuNTUwNzgxIDYwLjAzOTA2MiA4MS44NjMyODEgNTcuOTAyMzQ0IDgyLjI1IDU1LjgxNjQwNiBaIE0gMjUuMDQyOTY5IDQuMTE3MTg4IEwgNzAuMDg5ODQ0IDQuMTE3MTg4IEMgNzAuMDg5ODQ0IDQuODkwNjI1IDcwLjA4OTg0NCA1LjkxNzk2OSA3MC4wODk4NDQgNy4wODk4NDQgTCAyNC45OTIxODggNy4wODk4NDQgQyAyNS4wMTU2MjUgNS45MTc5NjkgMjUuMDI3MzQ0IDQuODkwNjI1IDI1LjA0Mjk2OSA0LjExNzE4OCBaIE0gMjQuODY3MTg4IDEwLjgzOTg0NCBMIDcwLjI2NTYyNSAxMC44Mzk4NDQgQyA3MC40NTcwMzEgMTUuNzE0ODQ0IDcwLjg1NTQ2OSAyMi4zMzU5MzggNzEuNjY3OTY5IDI5Ljk0NTMxMiBMIDIzLjQ2NDg0NCAyOS45NDUzMTIgQyAyNC4yODEyNSAyMi4zMzU5MzggMjQuNjc5Njg4IDE1LjcyNjU2MiAyNC44NjcxODggMTAuODUxNTYyIFogTSAyMy4wMzkwNjIgMzMuNzA3MDMxIEwgNzIuMDg5ODQ0IDMzLjcwNzAzMSBDIDcyLjMwMDc4MSAzNS40NDkyMTkgNzIuNTMxMjUgMzcuMjMwNDY5IDcyLjc3NzM0NCAzOS4wNDI5NjkgTCAyMi4zNTU0NjkgMzkuMDQyOTY5IEMgMjIuNjA1NDY5IDM3LjIyNjU2MiAyMi44MzU5MzggMzUuNDQ5MjE5IDIzLjAzOTA2MiAzMy43MDcwMzEgWiBNIDIxLjc4OTA2MiA0Mi43OTI5NjkgTCA3My4zMzk4NDQgNDIuNzkyOTY5IEMgNzUgNTMuOTg4MjgxIDc3LjYyMTA5NCA2NS4wMTE3MTkgODEuMTg3NSA3NS43NDYwOTQgTCAxMy45NTcwMzEgNzUuNzQ2MDk0IEMgMTcuNTE5NTMxIDY1LjAxMTcxOSAyMC4xNDA2MjUgNTMuOTgwNDY5IDIxLjc4OTA2MiA0Mi43OTI5NjkgWiBNIDUuMjE4NzUgOTUuMzY3MTg4IEMgOC4xMjEwOTQgOTAuMjg5MDYyIDEwLjU5Mzc1IDg0Ljk4MDQ2OSAxMi42MjEwOTQgNzkuNDk2MDk0IEwgODIuNTIzNDM4IDc5LjQ5NjA5NCBDIDg0LjU1MDc4MSA4NC45ODA0NjkgODcuMDIzNDM4IDkwLjI4OTA2MiA4OS45MjU3ODEgOTUuMzY3MTg4IFogTSA5NC4zMDA3ODEgOTUuMzY3MTg4IEMgOTIuMDc4MTI1IDkxLjczMDQ2OSA5MC4xMjEwOTQgODcuOTQ5MjE5IDg4LjQzNzUgODQuMDMxMjUgTCAxMjguMzI0MjE5IDg0LjAzMTI1IEMgMTI5Ljc3NzM0NCA4Ny45Mzc1IDEzMS41MjczNDQgOTEuNzI2NTYyIDEzMy41NDY4NzUgOTUuMzY3MTg4IFogTSA5NC4zMDA3ODEgOTUuMzY3MTg4ICIgc3R5bGU9IiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+CjwvZz48L3N2Zz4=" />
                      </div>
                      <p>
                        Integer lobortisy consequat consequat imperdiet sed
                        nulla sed viverra ut lorem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" linkimg ">
                  <strong>
                    <a href="# ">Solar Thermal Systems</a>
                  </strong>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="third-body ">
        <div className="auto-container">
          <div className="panel ">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTggNTExLjk5OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU1Ljk5OCw0MC4zMmMtMjAuODMzLDAtMzcuNzgxLDE2Ljk0OC0zNy43ODEsMzcuNzgxczE2Ljk0OCwzNy43OCwzNy43ODEsMzcuNzhzMzcuNzgxLTE2Ljk0OSwzNy43ODEtMzcuNzggICAgQzI5My43OCw1Ny4yNjgsMjc2LjgzMSw0MC4zMiwyNTUuOTk4LDQwLjMyeiBNMjU1Ljk5OCwxMDAuODAyYy0xMi41MTgsMC0yMi43MDMtMTAuMTg0LTIyLjcwMy0yMi43MDIgICAgczEwLjE4NC0yMi43MDMsMjIuNzAzLTIyLjcwM3MyMi43MDMsMTAuMTg0LDIyLjcwMywyMi43MDNTMjY4LjUxNywxMDAuODAyLDI1NS45OTgsMTAwLjgwMnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NS45OTgsMGMtNC4xNjUsMC03LjUzOSwzLjM3Ni03LjUzOSw3LjUzOXYxMC4wOGMwLDQuMTY0LDMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5czcuNTM5LTMuMzc2LDcuNTM5LTcuNTM5VjcuNTM5ICAgIEMyNjMuNTM4LDMuMzc2LDI2MC4xNjMsMCwyNTUuOTk4LDB6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMTguNTYzLDMwLjAwMmwtNy4xMjgtNy4xMjdjLTIuOTQzLTIuOTQ0LTcuNzE3LTIuOTQzLTEwLjY2MiwwYy0yLjk0NCwyLjk0NC0yLjk0NCw3LjcxOCwwLjAwMSwxMC42NjNsNy4xMjcsNy4xMjggICAgYzEuNDcyLDEuNDcyLDMuNDAyLDIuMjA4LDUuMzMxLDIuMjA4czMuODU5LTAuNzM2LDUuMzMyLTIuMjA5QzIyMS41MDgsMzcuNzIsMjIxLjUwOCwzMi45NDYsMjE4LjU2MywzMC4wMDJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0xOTUuNTE4LDcwLjU2aC0xMC4wOGMtNC4xNjUsMC03LjUzOSwzLjM3Ni03LjUzOSw3LjUzOWMwLDQuMTY0LDMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5aDEwLjA4ICAgIGM0LjE2NSwwLDcuNTM5LTMuMzc2LDcuNTM5LTcuNTM5QzIwMy4wNTcsNzMuOTM2LDE5OS42ODIsNzAuNTYsMTk1LjUxOCw3MC41NnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTIxOC41NjMsMTE1LjUzNmMtMi45NDUtMi45NDQtNy43MTgtMi45NDQtMTAuNjY0LDBsLTcuMTI3LDcuMTI3Yy0yLjk0NCwyLjk0NC0yLjk0NCw3LjcxOCwwLDEwLjY2MiAgICBjMS40NzMsMS40NzIsMy40MDMsMi4yMDksNS4zMzIsMi4yMDlzMy44NTktMC43MzYsNS4zMzItMi4yMDlsNy4xMjctNy4xMjdDMjIxLjUwNywxMjMuMjU0LDIyMS41MDcsMTE4LjQ4LDIxOC41NjMsMTE1LjUzNnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NS45OTgsMTMxLjA0MmMtNC4xNjUsMC03LjUzOSwzLjM3Ni03LjUzOSw3LjUzOXYxMC4wOGMwLDQuMTY0LDMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5czcuNTM5LTMuMzc2LDcuNTM5LTcuNTM5ICAgIHYtMTAuMDhDMjYzLjUzOCwxMzQuNDE4LDI2MC4xNjMsMTMxLjA0MiwyNTUuOTk4LDEzMS4wNDJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zMTEuMjI1LDEyMi42NjVsLTcuMTI3LTcuMTI3Yy0yLjk0NC0yLjk0NC03LjcxOC0yLjk0NS0xMC42NjMtMC4wMDFjLTIuOTQ1LDIuOTQ0LTIuOTQ1LDcuNzE4LTAuMDAxLDEwLjY2M2w3LjEyNyw3LjEyNyAgICBjMS40NzMsMS40NzIsMy40MDIsMi4yMDgsNS4zMzIsMi4yMDhjMS45MjksMCwzLjg1OS0wLjczNiw1LjMzMS0yLjIwOEMzMTQuMTY5LDEzMC4zODMsMzE0LjE2OSwxMjUuNjA5LDMxMS4yMjUsMTIyLjY2NXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMyNi41Niw3MC41NjJoLTEwLjA4Yy00LjE2NSwwLTcuNTM5LDMuMzc2LTcuNTM5LDcuNTM5czMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5aDEwLjA4YzQuMTY1LDAsNy41MzktMy4zNzYsNy41MzktNy41MzkgICAgUzMzMC43MjUsNzAuNTYyLDMyNi41Niw3MC41NjJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zMTEuMjI0LDIyLjg3NGMtMi45NDMtMi45NDQtNy43MTctMi45NDMtMTAuNjYyLDBsLTcuMTI3LDcuMTI3Yy0yLjk0NCwyLjk0NC0yLjk0NCw3LjcxOCwwLjAwMSwxMC42NjMgICAgYzEuNDcxLDEuNDczLDMuNDAxLDIuMjA5LDUuMzMsMi4yMDljMS45MjksMCwzLjg1OS0wLjczNiw1LjMzMi0yLjIwOWw3LjEyNy03LjEyN0MzMTQuMTY5LDMwLjU5MywzMTQuMTY5LDI1LjgxOSwzMTEuMjI0LDIyLjg3NHogICAgIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik00NjUuMTIzLDM4Ni4xODFjLTAuMDA2LTAuMTMyLTAuMDA3LTAuMjYzLTAuMDItMC4zOTVjLTAuMDI2LTAuMjY1LTAuMDY2LTAuNTI2LTAuMTItMC43ODIgICAgYy0wLjAwMS0wLjAwNi0wLjAwMS0wLjAxMS0wLjAwMy0wLjAxN2wtMTMuNDI3LTYzLjc3OGMtMC4wMDUtMC4wMjMtMC4wMS0wLjA0NS0wLjAxNC0wLjA2OGwtMTMuNDI2LTYzLjc3NCAgICBjLTAuMDA1LTAuMDIzLTAuMDEtMC4wNDUtMC4wMTQtMC4wNjhsLTEzLjQzOS02My44MzdjLTAuNzM0LTMuNDg5LTMuODEyLTUuOTg2LTcuMzc4LTUuOTg2SDk0LjcxMyAgICBjLTMuNTY2LDAtNi42NDMsMi40OTctNy4zNzgsNS45ODZsLTEzLjQzNiw2My44M2MtMC4wMDYsMC4wMjctMC4wMTIsMC4wNTMtMC4wMTcsMC4wOGwtMTMuNDI1LDYzLjc3NSAgICBjLTAuMDA0LDAuMDE4LTAuMDA4LDAuMDM3LTAuMDExLDAuMDU1TDQ3LjAyLDM4NC45ODFjLTAuMDU2LDAuMjY5LTAuMDk5LDAuNTQ0LTAuMTI2LDAuODIyYy0wLjAwNiwwLjA2NC0wLjAwNSwwLjEzLTAuMDEsMC4xOTQgICAgYy0wLjAxMywwLjE3OS0wLjAyNywwLjM1OC0wLjAyNywwLjU0MXYzMC4yNDNjMCw0LjE2NCwzLjM3NSw3LjUzOSw3LjUzOSw3LjUzOWgxNzguOTR2NDIuMzU2aC01Ny45ODIgICAgYy00LjE2NSwwLTcuNTM5LDMuMzc2LTcuNTM5LDcuNTM5djIyLjcwNEg5NC43MTRjLTQuMTY1LDAtNy41MzksMy4zNzYtNy41MzksNy41MzlzMy4zNzUsNy41MzksNy41MzksNy41MzloODAuNjQxaDE2MS4yODVoODAuNjMgICAgYzQuMTY1LDAsNy41MzktMy4zNzYsNy41MzktNy41MzlzLTMuMzc1LTcuNTM5LTcuNTM5LTcuNTM5SDM0NC4xOHYtMjIuNzA0YzAtNC4xNjQtMy4zNzUtNy41MzktNy41MzktNy41MzloLTU3Ljk4MlY0MjQuMzJINDU3LjYgICAgYzQuMTY1LDAsNy41MzktMy4zNzYsNy41MzktNy41Mzl2LTMwLjEwOGMwLjAwMS0wLjAxLDAuMDAxLTAuMDIyLDAuMDAxLTAuMDM0di0wLjA5OCAgICBDNDY1LjE0MSwzODYuNDE4LDQ2NS4xMjksMzg2LjMwMSw0NjUuMTIzLDM4Ni4xODF6IE00NDguMzExLDM3OUgzMzAuMjNsLTMuNDIzLTQ4Ljc2M2gxMTEuMjM4TDQ0OC4zMTEsMzc5eiBNNDI0LjYwNSwyNjYuMzk2ICAgIGwxMC4yNjcsNDguNzYzSDMyNS43NDlsLTMuNDIzLTQ4Ljc2M0g0MjQuNjA1eiBNNDExLjE2NSwyMDIuNTU1bDEwLjI2Nyw0OC43NjNIMzIxLjI2OGwtMy40MjMtNDguNzYzSDQxMS4xNjV6IE0yMDkuMjY1LDIwMi41NTUgICAgaDkzLjQ2NWwzLjQyMyw0OC43NjNoLTEwMC4zMUwyMDkuMjY1LDIwMi41NTV6IE0yMDQuNzg2LDI2Ni4zOTZoMTAyLjQyNWwzLjQyMyw0OC43NjNoLTEwOS4yN0wyMDQuNzg2LDI2Ni4zOTZ6IE0yMDAuMzA3LDMzMC4yMzggICAgaDExMS4zODVMMzE1LjExNCwzNzlIMTk2Ljg4NUwyMDAuMzA3LDMzMC4yMzh6IE0xMDAuODMxLDIwMi41NTVoOTMuMzE5bC0zLjQyMiw0OC43NjNIOTAuNTY1TDEwMC44MzEsMjAyLjU1NXogTTg3LjM5MiwyNjYuMzk2ICAgIEgxODkuNjdsLTMuNDIyLDQ4Ljc2M0g3Ny4xMjZMODcuMzkyLDI2Ni4zOTZ6IE0zMjkuMTAyLDQ4MS43NTd2MTUuMTY0SDE4Mi44OTV2LTE1LjE2NGg1Ny45ODJoMzAuMjQ0SDMyOS4xMDJ6IE0yNDguNDE2LDQ2Ni42NzggICAgdi00Mi4zNTZoMTUuMTY1djQyLjM1NkgyNDguNDE2eiBNMjcxLjIwOCw0MDkuMjQzYy0wLjAyOSwwLTAuMDU4LTAuMDA0LTAuMDg3LTAuMDA0aC0zMC4yNDRjLTAuMDI5LDAtMC4wNTgsMC4wMDQtMC4wODcsMC4wMDQgICAgSDYxLjkzNXYtMTUuMTY0aDM1LjkxNWM0LjE2NSwwLDcuNTM5LTMuMzc2LDcuNTM5LTcuNTM5YzAtNC4xNjQtMy4zNzUtNy41MzktNy41MzktNy41MzlINjMuNjg3bDEwLjI2NS00OC43NjNIMTg1LjE5ICAgIEwxODEuNzY4LDM3OWgtNTEuMzE0aC0wLjAwMWMtNC4xNjUsMC03LjUzOSwzLjM3Ni03LjUzOSw3LjUzOWMwLDQuMTY0LDMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5aDAuMDAxaDU4LjMzNyAgICBjMC4wMDUsMCwwLjAwOSwwLDAuMDE0LDBjMC4wMDMsMCwwLjAwNywwLDAuMDEsMGgxMzQuMzY3YzAuMDAzLDAsMC4wMDcsMCwwLjAxLDBjMC4wMDUsMCwwLjAwOSwwLDAuMDE0LDBINDUwLjA2djE1LjE2NEgyNzEuMjA4eiAgICAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+ " />
          </div>
          <div className="row clearfix row-text">
            <div className="row-content col-xl-4 col-lg-12 col-md-12 ">
              <h2 data-aos="fade-right">
                We're Dedicated To <br /> Build A Cleaner Future
              </h2>
            </div>
            <form className="form col-xl-8 col-lg-12 col-md-12 ">
              <div className="elm-form row clearfix">
                <div className="form-group  inputform col-lg-4 col-md-6 col-sm-12">
                  <label>
                    <i className="fas fa-user "></i>
                  </label>
                  <input
                    id="text"
                    type="text "
                    name="name "
                    placeholder="Your Name "
                    required
                  />
                </div>

                <div className=" form-group inputform col-lg-4 col-md-6 col-sm-12">
                  <label>
                    <i className="fas fa-envelope-open "></i>
                  </label>
                  <input
                    id="text"
                    type="email "
                    name="email "
                    placeholder="Your Email "
                    required
                  />
                </div>
                <button className="form-group  btnbox inputform col-lg-4 col-md-6 col-sm-12">
                  <div className="link-text effect ">
                    <span className="btn-txt ">
                      <a></a>Get More Info
                    </span>
                    <span className="btn-icon ">
                      <i className="fas fa-arrow-right "></i>{' '}
                    </span>
                  </div>
                </button>
              </div>
              <div className="noti">
                <p>Thank you for your message. It has been sent.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bodyfour ">
        <div className="bodyfourcontainer ">
          <div className="patternimgleft ">
            <Image fill priority src="/assets/images/home/pattern-image-1.png" alt="" />
          </div>
          <div className="patternimgright ">
            <Image fill priority src="/assets/images/home/pattern-image-2.png" alt=" " />
          </div>
          <div className="mainbodyfour ">
            <div className="services ">
              <div className="mainsevices row">
                <div
                  className="imgelmleft col-lg-5 col-md-6 col-sm-12 "
                  data-aos="fade-left"
                  
                >
                  <div className="imgdemo ">
                    <Image fill priority
                      src="/assets/images/home/featured-image-3.jpg"
                      alt=" "
                    />
                    <div className="imgcircle" data-aos="spin" data-aos-duration='2000'>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4MC4wMDAzMiA0ODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxyZWN0IHdpZHRoPSI0ODAuMDAwMzIiIGhlaWdodD0iNDgwIiBmaWxsPSIjZmZmZmZmIiBzaGFwZT0ic3F1YXJlIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDAsMCkiPjwvcmVjdD48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjUsMCwwLDAuNSwxMjAuMDAwMDgzOTIzMzM5NjcsMTE5Ljk5OTk5OTk5OTk5OTg3KSI+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMzUyIDM1MmgxNnYxNmgtMTZ6bTAgMCIgZmlsbD0iIzM0ZWYwZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTM4Mi42MjUgMzQ1LjkzMzU5NCAxMS4zMTI1LTExLjMxMjUgMTEuMzIwMzEyIDExLjMxNjQwNi0xMS4zMTY0MDYgMTEuMzE2NDA2em0wIDAiIGZpbGw9IiMzNGVmMGQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00MDAgMzA0aDE2djE2aC0xNnptMCAwIiBmaWxsPSIjMzRlZjBkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMzA0IDMwNGgxNnYxNmgtMTZ6bTAgMCIgZmlsbD0iIzM0ZWYwZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMxNC43NDYwOTQgMzQ1Ljk0MTQwNiAxMS4zMjAzMTItMTEuMzE2NDA2IDExLjMxMjUgMTEuMzEyNS0xMS4zMjAzMTIgMTEuMzIwMzEyem0wIDAiIGZpbGw9IiMzNGVmMGQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im05NiA0MjRoODBjNC40MTc5NjkgMCA4LTMuNTgyMDMxIDgtOHYtODBjMC00LjQxNzk2OS0zLjU4MjAzMS04LTgtOGgtODBjLTQuNDE3OTY5IDAtOCAzLjU4MjAzMS04IDh2ODBjMCA0LjQxNzk2OSAzLjU4MjAzMSA4IDggOHptNDgtODBoMjR2MjRoLTI0em0wIDQwaDI0djI0aC0yNHptLTQwLTQwaDI0djI0aC0yNHptMCA0MGgyNHYyNGgtMjR6bTAgMCIgZmlsbD0iIzM0ZWYwZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMyIDU2YzAgMTcuNjcxODc1IDE0LjMyODEyNSAzMiAzMiAzMnMzMi0xNC4zMjgxMjUgMzItMzItMTQuMzI4MTI1LTMyLTMyLTMyLTMyIDE0LjMyODEyNS0zMiAzMnptMzItMTZjOC44MzU5MzggMCAxNiA3LjE2NDA2MiAxNiAxNnMtNy4xNjQwNjIgMTYtMTYgMTYtMTYtNy4xNjQwNjItMTYtMTYgNy4xNjQwNjItMTYgMTYtMTZ6bTAgMCIgZmlsbD0iIzM0ZWYwZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTU2IDk2aDE2djE2aC0xNnptMCAwIiBmaWxsPSIjMzRlZjBkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTA0IDQ4aDE2djE2aC0xNnptMCAwIiBmaWxsPSIjMzRlZjBkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNTYgMGgxNnYxNmgtMTZ6bTAgMCIgZmlsbD0iIzM0ZWYwZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTggNDhoMTZ2MTZoLTE2em0wIDAiIGZpbGw9IiMzNGVmMGQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im05MC4zNDM3NSAxOC4zMzk4NDQgMTYtMTUuOTk2MDk0IDExLjMxMjUgMTEuMzEyNS0xNS45OTYwOTQgMTZ6bTAgMCIgZmlsbD0iIzM0ZWYwZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTEwLjM0Mzc1IDEzLjY1NjI1IDExLjMxMjUtMTEuMzEyNSAxNiAxNS45OTYwOTQtMTEuMzE2NDA2IDExLjMxNjQwNnptMCAwIiBmaWxsPSIjMzRlZjBkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTAuMzQzNzUgOTguMzM5ODQ0IDE2LTE1Ljk5NjA5NCAxMS4zMTI1IDExLjMxMjUtMTUuOTk2MDk0IDE2em0wIDAiIGZpbGw9IiMzNGVmMGQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im05MC4zNDM3NSA5My42NTYyNSAxMS4zMTY0MDYtMTEuMzEyNSAxNS45OTYwOTQgMTUuOTk2MDk0LTExLjMxMjUgMTEuMzE2NDA2em0wIDAiIGZpbGw9IiMzNGVmMGQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00NjEuMTY3OTY5IDE1MC4xNTIzNDRjMTQuNzY5NTMxLTE3LjkwMjM0NCAxNC4zOTg0MzctNDMuODcxMDk0LS44Nzg5MDctNjEuMzQzNzUgNy43ODkwNjMtMTYuODAwNzgyIDMuMDMxMjUtMzYuNzQ2MDk0LTExLjUtNDguMjIyNjU2LTE0LjUzNTE1Ni0xMS40NzI2NTctMzUuMDQyOTY4LTExLjQ3MjY1Ny00OS41NzgxMjQgMC0xNC41MzEyNSAxMS40NzY1NjItMTkuMjg5MDYzIDMxLjQyMTg3NC0xMS41IDQ4LjIyMjY1Ni0xNS4yNzczNDQgMTcuNDc2NTYyLTE1LjY0ODQzOCA0My40NDkyMTgtLjg3MTA5NCA2MS4zNTE1NjItLjUxOTUzMi40NTcwMzItLjk2ODc1Ljk5MjE4OC0xLjQ3MjY1NiAxLjQ3MjY1NmwtMTguNzEwOTM4LTI4LjA3NDIxOGMtLjA1NDY4OC0uMDc4MTI1LS4xNjAxNTYtLjEwMTU2My0uMjE0ODQ0LS4xODM1OTQtLjIyMjY1Ni0uMzQzNzUtLjQ2ODc1LS42Njc5NjktLjczODI4MS0uOTc2NTYyLS4wODU5MzctLjA3ODEyNi0uMTkxNDA2LS4xMzI4MTMtLjI3NzM0NC0uMjE0ODQ0LS41ODk4NDMtLjUzOTA2My0xLjI1NzgxMi0uOTg4MjgyLTEuOTc2NTYyLTEuMzM1OTM4LS4yMzQzNzUtLjEwMTU2Mi0uNDQ5MjE5LS4xOTkyMTgtLjY4NzUtLjI4OTA2Mi0uMDkzNzUtLjA0Mjk2OS0uMTg3NS0uMDgyMDMyLS4yODEyNS0uMTE3MTg4LTguMDgyMDMxLTM1LjQ1NzAzMS0yMy43NzczNDQtNTYuNDQxNDA2LTQyLjQ4MDQ2OS01Ni40NDE0MDZzLTM0LjIzMDQ2OSAyMC44MDA3ODEtNDIuMzk4NDM4IDU2aC0xNzMuNjAxNTYyYy0uOTUzMTI1LjAxOTUzMS0xLjg5MDYyNS4yMTA5MzgtMi43NzczNDQuNTU4NTk0LS4xOTE0MDYuMDc0MjE4LS4zNzUuMTI4OTA2LS41NTg1OTQuMjE4NzUtLjgwODU5My4zNjcxODctMS41NDY4NzQuODY3MTg3LTIuMTkxNDA2IDEuNDgwNDY4LS4xMjEwOTQuMTA5Mzc2LS4yMDcwMzEuMjQ2MDk0LS4zMjgxMjUuMzc1LS4yODkwNjIuMjg5MDYzLS41NTQ2ODcuNjAxNTYzLS44MDA3ODEuOTI1NzgybC05NiAxNDRjLS4xNjc5NjkuMzAwNzgxLS4zMTY0MDYuNjEzMjgxLS40NDkyMTkuOTI5Njg3LS4xMTcxODcuMjE0ODQ0LS4yMjI2NTYuNDMzNTk0LS4zMjAzMTIuNjU2MjUtLjM0NzY1Ny44NTkzNzUtLjU0Mjk2OSAxLjc3MzQzOC0uNTc0MjE5IDIuNzAzMTI1di4xNTIzNDQgMjAwYzAgNC40MTc5NjkgMy41ODIwMzEgOCA4IDhoNDQ4YzQuNDE3OTY5IDAgOC0zLjU4MjAzMSA4LTh2LTIwMGMwLS4wNTQ2ODggMC0uMDk3NjU2IDAtLjE1MjM0NC0uMDIzNDM4LS45MjU3ODEtLjIwNzAzMS0xLjgzOTg0NC0uNTQyOTY5LTIuNzAzMTI1LS4wOTc2NTYtLjIyMjY1Ni0uMjAzMTI1LS40NDE0MDYtLjMyMDMxMi0uNjU2MjUtLjEzMjgxMy0uMzE2NDA2LS4yODEyNS0uNjI4OTA2LS40NDkyMTktLjkyOTY4N2wtMTYuMjg5MDYyLTI0LjM1OTM3NWMyMC4zMzk4NDMtOC45MjE4NzUgMzMuNTExNzE4LTI4Ljk4ODI4MSAzMy42MDE1NjItNTEuMTk5MjE5LjA1NDY4OC0xNi4wMTE3MTktNi44MTI1LTMxLjI2OTUzMS0xOC44MzIwMzEtNDEuODQ3NjU2em0tNTguMjIyNjU3LTU0LjAzMTI1YzMuMDIzNDM4LTIuNjc1NzgyIDMuNTgyMDMyLTcuMTkxNDA2IDEuMjkyOTY5LTEwLjUxOTUzMi00LjI0NjA5My02LjEyODkwNi01LjM4MjgxMi0xMy44OTA2MjQtMy4wNzgxMjUtMjAuOTgwNDY4IDIuMzA4NTk0LTcuMDg5ODQ0IDcuODAwNzgyLTEyLjY5NTMxMyAxNC44Mzk4NDQtMTUuMTQ4NDM4djE0OC4xMjg5MDZsLTIxLjQ4ODI4MS0zMi4yMzQzNzRjMi41MzEyNS0yLjg5NDUzMiA1LjQ2NDg0My01LjQxMDE1NyA4LjcxMDkzNy03LjQ3MjY1NyAyLjIzODI4Mi0xLjM1MTU2MiAzLjY3NTc4Mi0zLjcxNDg0MyAzLjg0NzY1Ni02LjMyNDIxOS4xNjc5NjktMi42MDkzNzQtLjk0NTMxMi01LjEzNjcxOC0yLjk5MjE4Ny02Ljc2OTUzMS03LjQyMTg3NS01LjgxNjQwNi0xMS44NDc2NTYtMTQuNjUyMzQzLTEyLjA3MDMxMy0yNC4wODIwMzEtLjIxODc1LTkuNDI1NzgxIDMuNzkyOTY5LTE4LjQ1NzAzMSAxMC45Mzc1LTI0LjYxMzI4MXptMzguMTA5Mzc2IDE2Ny44Nzg5MDZoLTE2Mi4xMDkzNzZsODEuMDU0Njg4LTEyMS42MDE1NjJ6bS03My4wNTQ2ODggNDhjMCA0LjQxNzk2OS0zLjU4MjAzMSA4LTggOHMtOC0zLjU4MjAzMS04LTggMy41ODIwMzEtOCA4LTggOCAzLjU4MjAzMSA4IDh6bS0yMTQuOTQ1MzEyLTgwLTIxLjMzNTkzOCAzMmgtNDQuNzk2ODc1bDIxLjMzNTkzNy0zMnptLTM0LjEwOTM3Ni0xNiAyMS4zMzU5MzgtMzJoNDQuNzk2ODc1bC0yMS4zMzU5MzcgMzJ6bTUzLjMzNTkzOCAxNmg0NC43OTY4NzVsLTIxLjMzNTkzNyAzMmgtNDQuNzk2ODc2em0xMC42NjQwNjItMTYgMjEuMzM1OTM4LTMyaDQ0Ljc5Njg3NWwtMjEuMzM1OTM3IDMyem04NS4zMzU5MzgtMzJoNDQuNzk2ODc1bC0yMS4zMzU5MzcgMzJoLTQ0Ljc5Njg3NnptNTkuNzE4NzUtMTAwLjEyMTA5NGM5LjE5MTQwNiAxMC4xNjAxNTYgMTUuMzkwNjI1IDIyLjY2MDE1NiAxNy45MjE4NzUgMzYuMTIxMDk0aC0xNy45MjE4NzV6bTE3LjA1NDY4OCA1Mi4xMjEwOTQtMjEuMzM1OTM4IDMyaC00NC43OTY4NzVsMjEuMzM1OTM3LTMyem0tMzMuMDU0Njg4LTUyLjEyMTA5NHYzNi4xMjEwOTRoLTE3LjkyMTg3NWMyLjUzMTI1LTEzLjQ2MDkzOCA4LjczMDQ2OS0yNS45NjA5MzggMTcuOTIxODc1LTM2LjEyMTA5NHptLTMwLjk0NTMxMiA1Mi4xMjEwOTQtMjEuMzM1OTM4IDMyaC00NC43OTY4NzVsMjEuMzM1OTM3LTMyem0tNjQgMC0yMS4zMzU5MzggMzJoLTQ0Ljc5Njg3NWwyMS4zMzU5MzctMzJ6bS0xMDguNzk2ODc2IDBoNDQuNzk2ODc2bC0yMS4zMzU5MzggMzJoLTQ0Ljc5Njg3NXptLTMyIDQ4aDQ0Ljc5Njg3NmwtMjEuMzM1OTM4IDMyaC00NC43OTY4NzV6bS0zMiA0OGg0NC43OTY4NzZsLTIxLjMzNTkzOCAzMmgtNDQuNzk2ODc1em0yMTEuNzQyMTg4IDIzMmgtMjQwdi0xODRoMjQwem0zLjcxODc1LTIwMGgtNDQuNzk2ODc1bDIxLjMzNTkzNy0zMmg0NC43OTY4NzZ6bTEyNC4yODEyNSAyMDBoLTQ4di00MGMwLTEzLjI1MzkwNiAxMC43NDYwOTQtMjQgMjQtMjRzMjQgMTAuNzQ2MDk0IDI0IDI0em02NC0xODR2MTg0aC00OHYtNDBjMC0yMi4wODk4NDQtMTcuOTEwMTU2LTQwLTQwLTQwcy00MCAxNy45MTAxNTYtNDAgNDB2NDBoLTQ4di0xODRoODB2OS40NzI2NTZjLTExLjAxOTUzMSAzLjg5NDUzMi0xNy42MzI4MTIgMTUuMTY0MDYzLTE1LjY1NjI1IDI2LjY4MzU5NCAxLjk3NjU2MiAxMS41MjM0MzggMTEuOTY4NzUgMTkuOTQxNDA2IDIzLjY1NjI1IDE5Ljk0MTQwNnMyMS42Nzk2ODgtOC40MTc5NjggMjMuNjU2MjUtMTkuOTQxNDA2YzEuOTc2NTYyLTExLjUxOTUzMS00LjYzNjcxOS0yMi43ODkwNjItMTUuNjU2MjUtMjYuNjgzNTk0di05LjQ3MjY1NnptLTEwLjY0ODQzOC01MC4zOTg0MzgtNS4zNTE1NjItOHYtMTcyLjEyODkwNmM3LjAzOTA2MiAyLjQ1MzEyNSAxMi41MzEyNSA4LjA1ODU5NCAxNC44Mzk4NDQgMTUuMTQ4NDM4IDIuMzA0Njg3IDcuMDg5ODQ0IDEuMTY3OTY4IDE0Ljg1MTU2Mi0zLjA3ODEyNSAyMC45ODA0NjgtMi4yOTY4NzUgMy4zMzIwMzItMS43NDIxODggNy44NTU0NjkgMS4yOTI5NjkgMTAuNTM1MTU3IDcuMTMyODEyIDYuMTU2MjUgMTEuMTM2NzE4IDE1LjE3OTY4NyAxMC45MTc5NjggMjQuNTk3NjU2LS4yMjI2NTYgOS40MjE4NzUtNC42NDA2MjUgMTguMjUtMTIuMDUwNzgxIDI0LjA2NjQwNi0yLjAyNzM0NCAxLjYzMjgxMy0zLjEzMjgxMyA0LjE1MjM0NC0yLjk2MDkzNyA2Ljc1LjE2Nzk2OCAyLjU5NzY1NyAxLjU5Mzc1IDQuOTQ5MjE5IDMuODE2NDA2IDYuMzA0Njg4IDEzLjE5NTMxMiA3Ljk5MjE4NyAyMC42MDE1NjIgMjIuODc1IDE5LjAxMTcxOCAzOC4yMTg3NS0xLjU4NTkzNyAxNS4zNDc2NTYtMTEuODgyODEyIDI4LjM5ODQzNy0yNi40Mzc1IDMzLjUxOTUzMXptMCAwIiBmaWxsPSIjMzRlZjBkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className=" textright col-lg-7 col-md-6 col-sm-12" data-aos="fade-right"
                  >
                  <div className="textsub ">
                    <h2>
                      <strong>Solar Panels Installation</strong>
                    </h2>
                    <div className="wraptext ">
                      <p>WITH MOST SUNLIGHT CONVERSION EFICIENCY</p>
                    </div>
                    <div className="contenttext ">
                      <p>
                        Aenean volutpat, sem sit amet ullamcorper gravida,
                        tortor arcu molestie risus, ut bibendum urna enim nulla.
                        Pellentesque porta arcu velit, faucibus kodales dolor
                        rhoncus sed. Curabitur lacinia massa vitae efficitur
                        porttitor. Sed scelerisque vestibulum lectus, at egestas
                        erat varius.
                      </p>
                    </div>
                    <span className="getstart">
                      <a href="# ">
                        GET STARTED<i className="fas fa-arrow-right "></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row mainsevices ">
                <div className="textleft col-lg-7 col-md-6 col-sm-12" data-aos="fade-left"
                  >
                  <div className="textsub ">
                    <h2>
                      <strong>Solar Panels Installation</strong>
                    </h2>
                    <div className="wraptext ">
                      <p>WITH MOST SUNLIGHT CONVERSION EFICIENCY</p>
                    </div>
                    <div className="contenttext ">
                      <p>
                        Aenean volutpat, sem sit amet ullamcorper gravida,
                        tortor arcu molestie risus, ut bibendum urna enim nulla.
                        Pellentesque porta arcu velit, faucibus kodales dolor
                        rhoncus sed. Curabitur lacinia massa vitae efficitur
                        porttitor. Sed scelerisque vestibulum lectus, at egestas
                        erat varius.
                      </p>
                    </div>
                    <span className="getstart">
                      <a href="# ">
                        GET STARTED<i className="fas fa-arrow-right "></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="imgelmright col-lg-5 col-md-6 col-sm-12"
                  data-aos="fade-right"
                  
                >
                  <div className="imgdemo ">
                    <Image fill priority
                      src="/assets/images/home/featured-image-4.jpg"
                      alt=" "
                    />
                    <div className="imgcircle" data-aos="spin" data-aos-duration='2000'>
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBmaWxsPSIjZmZmZmZmIiBzaGFwZT0ic3F1YXJlIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDAsMCkiPjwvcmVjdD48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjcsMCwwLDAuNyw3Ni43OTk2OTMyOTgzMzk4Niw3Ni43OTk4NjQ5NTk3MTY4MSkiPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTI1NiA4MS4yNTVjLTk2LjM1NSAwLTE3NC43NDUgNzguMzkxLTE3NC43NDUgMTc0Ljc0NXM3OC4zOSAxNzQuNzQ1IDE3NC43NDUgMTc0Ljc0NSAxNzQuNzQ1LTc4LjM5MSAxNzQuNzQ1LTE3NC43NDUtNzguMzkxLTE3NC43NDUtMTc0Ljc0NS0xNzQuNzQ1em0wIDMyOS40OWMtODUuMzI3IDAtMTU0Ljc0NS02OS40MTgtMTU0Ljc0NS0xNTQuNzQ1czY5LjQxOC0xNTQuNzQ1IDE1NC43NDUtMTU0Ljc0NSAxNTQuNzQ1IDY5LjQxOCAxNTQuNzQ1IDE1NC43NDUtNjkuNDE4IDE1NC43NDUtMTU0Ljc0NSAxNTQuNzQ1eiIgZmlsbD0iIzRkZDUwZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im00ODQuMyAyMDEuMTY5aC04LjQ3OWMtNS40MTQtMjEuODA0LTE0LjAwOC00Mi41MzQtMjUuNjI3LTYxLjgybDYuMDExLTYuMDFjMTAuOC0xMC44MDEgMTAuOC0yOC4zNzMgMC0zOS4xNzRsLTM4LjM2OS0zOC4zNjljLTEwLjgwMS0xMC43OTktMjguMzczLTEwLjc5OS0zOS4xNzQgMGwtNi4wMSA2LjAxMWMtMTkuMjg0LTExLjYxOC00MC4wMTYtMjAuMjEyLTYxLjgyLTI1LjYyN3YtOC40OGMwLTE1LjI3My0xMi40MjYtMjcuNy0yNy43LTI3LjdoLTU0LjI2MmMtMTUuMjc0IDAtMjcuNyAxMi40MjctMjcuNyAyNy43djguNDc5Yy0yMS44MDUgNS40MTUtNDIuNTM2IDE0LjAwOS02MS44MiAyNS42MjdsLTYuMDEtNi4wMTFjLTEwLjgwMS0xMC43OTktMjguMzczLTEwLjc5OS0zOS4xNzQgMGwtMzguMzcgMzguMzdjLTEwLjggMTAuODAxLTEwLjggMjguMzczIDAgMzkuMTc0bDYuMDExIDYuMDFjLTExLjYxOSAxOS4yODYtMjAuMjEzIDQwLjAxNy0yNS42MjcgNjEuODJoLTguNDhjLTE1LjI3MyAwLTI3LjcgMTIuNDI2LTI3LjcgMjcuN3Y1NC4yNjJjMCAxNS4yNzQgMTIuNDI3IDI3LjcgMjcuNyAyNy43aDguNDc5YzUuNDE0IDIxLjgwNCAxNC4wMDggNDIuNTM0IDI1LjYyNyA2MS44MmwtNi4wMTEgNi4wMWMtMTAuOCAxMC44MDEtMTAuOCAyOC4zNzMgMCAzOS4xNzRsMzguMzY5IDM4LjM2OWMxMC44MDEgMTAuNzk5IDI4LjM3MyAxMC43OTkgMzkuMTc0IDBsNi4wMS02LjAxMWMxOS4yODQgMTEuNjE4IDQwLjAxNiAyMC4yMTIgNjEuODIgMjUuNjI3djguNDc5YzAgMTUuMjczIDEyLjQyNiAyNy43IDI3LjcgMjcuN2g1NC4yNjJjMTUuMjc0IDAgMjcuNy0xMi40MjcgMjcuNy0yNy43di04LjQ3OWMyMS44MDUtNS40MTUgNDIuNTM2LTE0LjAwOSA2MS44Mi0yNS42MjdsNi4wMSA2LjAxMWMxMC44MDEgMTAuNzk5IDI4LjM3MyAxMC43OTkgMzkuMTc0IDBsMzguMzY5LTM4LjM2OWMxMC44LTEwLjgwMSAxMC44LTI4LjM3MyAwLTM5LjE3NGwtNi4wMTEtNi4wMWMxMS42MTktMTkuMjg2IDIwLjIxMy00MC4wMTcgMjUuNjI3LTYxLjgyaDguNDc5YzE1LjI3MyAwIDI3LjctMTIuNDI2IDI3LjctMjcuN3YtNTQuMjYyYy4wMDItMTUuMjc0LTEyLjQyNS0yNy43LTI3LjY5OC0yNy43em03LjcgODEuOTYyYzAgNC4yNDYtMy40NTQgNy43LTcuNyA3LjdoLTE2LjQ0NGMtNC43MjggMC04LjgxMiAzLjMxMy05Ljc4NSA3LjkzOS01LjI1MiAyNC45NDEtMTQuOTk0IDQ4LjQ0NC0yOC45NTcgNjkuODU3LTIuNTgyIDMuOTYxLTIuMDM4IDkuMTkgMS4zMDYgMTIuNTMzbDExLjY0MyAxMS42NDNjMy4wMDIgMy4wMDIgMy4wMDIgNy44ODcgMCAxMC44ODlsLTM4LjM2OSAzOC4zNjljLTMuMDAyIDMuMDAyLTcuODg3IDMuMDAyLTEwLjg4OSAwbC0xMS42NDMtMTEuNjQzYy0zLjM0NC0zLjM0NC04LjU3My0zLjg4NS0xMi41MzMtMS4zMDYtMjEuNDExIDEzLjk2Mi00NC45MTQgMjMuNzA0LTY5Ljg1NyAyOC45NTctNC42MjcuOTc1LTcuOTM5IDUuMDU3LTcuOTM5IDkuNzg1djE2LjQ0NmMwIDQuMjQ2LTMuNDU0IDcuNy03LjcgNy43aC01NC4yNjJjLTQuMjQ2IDAtNy43LTMuNDU0LTcuNy03Ljd2LTE2LjQ0NGMwLTQuNzI4LTMuMzEzLTguODExLTcuOTM5LTkuNzg1LTI0Ljk0My01LjI1My00OC40NDYtMTQuOTk1LTY5Ljg1Ny0yOC45NTctMS42NzMtMS4wOS0zLjU3MS0xLjYyMy01LjQ1OS0xLjYyMy0yLjU4MiAwLTUuMTQzLjk5Ny03LjA3NCAyLjkyOWwtMTEuNjQzIDExLjY0M2MtMy4wMDIgMy4wMDItNy44ODcgMy4wMDItMTAuODg5IDBsLTM4LjM2OS0zOC4zNjljLTMuMDAyLTMuMDAyLTMuMDAyLTcuODg3IDAtMTAuODg5bDExLjY0My0xMS42NDNjMy4zNDQtMy4zNDQgMy44ODgtOC41NzIgMS4zMDYtMTIuNTMzLTEzLjk2My0yMS40MTMtMjMuNzA1LTQ0LjkxNi0yOC45NTctNjkuODU3LS45NzQtNC42MjctNS4wNTctNy45MzktOS43ODUtNy45MzloLTE2LjQ0OGMtNC4yNDYgMC03LjctMy40NTQtNy43LTcuN3YtNTQuMjYyYzAtNC4yNDYgMy40NTQtNy43IDcuNy03LjdoMTYuNDQ0YzQuNzI5IDAgOC44MTItMy4zMTMgOS43ODUtNy45MzkgNS4yNTItMjQuOTQxIDE0Ljk5NC00OC40NDQgMjguOTU3LTY5Ljg1NyAyLjU4Mi0zLjk2MSAyLjAzOC05LjE4OS0xLjMwNi0xMi41MzNsLTExLjY0My0xMS42NDNjLTMuMDAyLTMuMDAyLTMuMDAyLTcuODg3IDAtMTAuODg5bDM4LjM2OS0zOC4zNjljMy4wMDItMy4wMDIgNy44ODctMy4wMDIgMTAuODg5IDBsMTEuNjQzIDExLjY0M2MzLjM0NSAzLjM0NSA4LjU3NSAzLjg4NyAxMi41MzMgMS4zMDYgMjEuNDExLTEzLjk2MiA0NC45MTQtMjMuNzA0IDY5Ljg1Ny0yOC45NTcgNC42MjctLjk3NSA3LjkzOS01LjA1NyA3LjkzOS05Ljc4NXYtMTYuNDQ4YzAtNC4yNDYgMy40NTQtNy43IDcuNy03LjdoNTQuMjYyYzQuMjQ2IDAgNy43IDMuNDU0IDcuNyA3Ljd2MTYuNDQ0YzAgNC43MjkgMy4zMTMgOC44MTEgNy45MzkgOS43ODUgMjQuOTQzIDUuMjUzIDQ4LjQ0NiAxNC45OTUgNjkuODU3IDI4Ljk1NyAzLjk2MSAyLjU4IDkuMTg5IDIuMDM4IDEyLjUzMy0xLjMwNmwxMS42NDMtMTEuNjQzYzMuMDAyLTMuMDAyIDcuODg3LTMuMDAyIDEwLjg4OSAwbDM4LjM2OSAzOC4zNjljMy4wMDIgMy4wMDIgMy4wMDIgNy44ODcgMCAxMC44ODlsLTExLjY0MyAxMS42NDNjLTMuMzQ0IDMuMzQ0LTMuODg4IDguNTcyLTEuMzA2IDEyLjUzMyAxMy45NjMgMjEuNDEzIDIzLjcwNSA0NC45MTYgMjguOTU3IDY5Ljg1Ny45NzQgNC42MjcgNS4wNTcgNy45MzkgOS43ODUgNy45MzloMTYuNDQ4YzQuMjQ2IDAgNy43IDMuNDU0IDcuNyA3Ljd6IiBmaWxsPSIjNGRkNTBmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTMyMS41ODEgMjI1LjE3My0zOC43MTUgMS40MzMgNi4wMDItODAuOTc5Yy4zMzQtNC41MDktMi4zOTgtOC42ODItNi42NjYtMTAuMTc3LTQuMjY3LTEuNDk2LTkuMDA3LjA1OS0xMS41NTkgMy43OTFsLTg4Ljg0NyAxMjkuODYyYy0yLjA5NSAzLjA2Mi0yLjMyMiA3LjAzMS0uNTkyIDEwLjMxMnM1LjEzNSA1LjMzNSA4Ljg0NSA1LjMzNWg0OC45M2wtMTAuOTY1IDgxLjAyMmMtLjYzIDQuNjUzIDIuMDYzIDkuMTE4IDYuNDczIDEwLjczMSAxLjEyNy40MTMgMi4yODcuNjEgMy40MzUuNjEgMy4zNDEgMCA2LjU1OS0xLjY4MSA4LjQzNy00LjYyOWw4NC4wMjgtMTMxLjk0NmMxLjk5Ny0zLjEzNiAyLjA5LTcuMTE5LjI0Mi0xMC4zNDQtMS44NTEtMy4yMjQtNS4zMy01LjE2NC05LjA0OC01LjAyMXptLTY3LjY0NSA5OC4xNzcgNi4zOTctNDcuMjU5Yy4zODctMi44NTktLjQ4LTUuNzQ3LTIuMzgtNy45MjEtMS44OTgtMi4xNzMtNC42NDUtMy40Mi03LjUzLTMuNDJoLTQxLjQxNmw1Ny4xNzEtODMuNTY0LTQuMDgzIDU1LjA4NmMtLjIxIDIuODM3Ljc5OCA1LjYzIDIuNzcyIDcuNjc5IDEuOTc0IDIuMDQ4IDQuNzI0IDMuMTYgNy41NyAzLjA1NGwzMC44NDYtMS4xNDJ6IiBmaWxsPSIjNGRkNTBmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mainsevices ">
                <div
                  className="imgelmleft col-lg-5 col-md-6 col-sm-12"
                  data-aos="fade-left"
                  
                >
                  <div className="imgdemo ">
                    <Image fill priority
                      src="/assets/images/home/featured-image-5.jpg"
                      alt=" "
                    />
                    <div className="imgcircle" data-aos="spin" data-aos-duration='2000'>
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMzcgNTEyLjAzNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PHJlY3Qgd2lkdGg9IjUxMi4wMzciIGhlaWdodD0iNTEyLjAzNyIgZmlsbD0iI2ZmZmZmZiIgc2hhcGU9InNxdWFyZSIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwwLDApIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuODA1NTY0MTE3NDMxNjYsNzYuODA1MTA1NDk1NDUyODkpIj48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxwYXRoIGQ9Im0yOTEuNDI0IDE4NC42MzZoNTYuNjR2OTguMTk3YzAgNC41MTIgMy4wMjIgOC40NjUgNy4zNzYgOS42NDkuODcyLjIzNyAxLjc1My4zNTIgMi42MjUuMzUyIDMuNDgxIDAgNi43OTUtMS44MjUgOC42MjMtNC45MzdsOTAuNjkzLTE1NC40MjZjMS44MTYtMy4wOTIgMS44MzctNi45MTkuMDU2LTEwLjAzMi0xLjc4MS0zLjExMi01LjA5My01LjAzMi04LjY3OS01LjAzMmgtNTYuNjR2LTk4LjE5N2MwLTQuNTEyLTMuMDIyLTguNDY1LTcuMzc2LTkuNjQ5LTQuMzU0LTEuMTg2LTguOTYxLjY5NS0xMS4yNDcgNC41ODVsLTkwLjY5MyAxNTQuNDI2Yy0xLjgxNiAzLjA5Mi0xLjgzNyA2LjkxOS0uMDU2IDEwLjAzMiAxLjc4IDMuMTEyIDUuMDkyIDUuMDMyIDguNjc4IDUuMDMyem04MC42OTMtMTI3LjY1MnY3MS40MjNjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMGg0OS4xN2wtNjMuMjIzIDEwNy42NTJ2LTcxLjQyM2MwLTUuNTIzLTQuNDc3LTEwLTEwLTEwaC00OS4xN3oiIGZpbGw9IiM0MWQ5MGEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtNTA3Ljk0NyAzOTYuNjk0Yy04Ljk0MS0xOC4wNDItMjguODQ0LTI0LjU2My00OS40Ny0xNi4yNDRsLTk2LjM3NCAzOC4zMDVjLTEwLjAxNiAzLjIzMy0yMC45OSAzLjExOS0zMC45MzgtLjMyNmwtNTYuMzcyLTE5LjUyYzIyLjk3My41NjQgNDkuODg2LS44NDkgNzEuNjM3LTEuOTg5IDEyLjQ1My0uNjUyIDIzLjIxMi0xLjIxNiAyOS44MjYtMS4yMTYuMDMyIDAgLjA2NC0uMDAxLjA5NiAwIDE0Ljg1MyAwIDI4LjE1My04Ljk3OSAzMy44ODktMjIuODc5bC4yNS0uNjA2YzQuNjY0LTExLjMwNCAzLjM5LTI0LjExMy0zLjQwOC0zNC4yNjQtNi43MjQtMTAuMDQxLTE3LjkxOC0xNi4wMzMtMjkuOTQyLTE2LjAzM2gtMjAuNjkzYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwczQuNDc3IDEwIDEwIDEwaDIwLjY4N2M1LjQyNCAwIDEwLjI4MiAyLjYxIDEzLjMzIDcuMTYxIDMuMTIxIDQuNjYgMy42ODIgMTAuMzEzIDEuNTM4IDE1LjUwOWwtLjI1LjYwNmMtMi42MzQgNi4zODMtOC42NzggMTAuNTA2LTE1LjQgMTAuNTA2LS4wMyAwLS4wNjIgMC0uMDkzIDAtNy4xNCAwLTE4LjE0My41NzctMzAuODc1IDEuMjQ0LTIyLjA0MyAxLjE1NS00OS40NzQgMi41OTUtNzIuMDY1IDEuOTE0LTkuODk3LS4yOS0xOC4wNiA2LjMyMy0xOS44NTUgMTYuMS0xLjgwMyA5LjgxMyAzLjQ5NyAxOC45MzggMTIuODg3IDIyLjE4OWw1OC4yNzIgMjAuMTc4YzE0LjE1NSA0LjkgMjkuNzg0IDUuMDE5IDQ0LjAxLjMzNC4xOS0uMDYzLjM3OS0uMTMxLjU2NS0uMjA1bDk2LjcxNC0zOC40NGM1LjIyOS0yLjEwOSAxOC4wNDYtNS42OTIgMjQuMTE3IDYuNTU3IDMuNTQ4IDcuMTYgMi40OTggMTcuMDE2LTUuMjkyIDIxLjQxNWwtMTMyLjQyOCA0OS45NmMtLjA2NC4wMjQtLjEyOS4wNS0uMTkzLjA3NS0xNS43MTQgNi4zMDUtMzMuMDI2IDYuMzk2LTQ4Ljc5Ni4yNjlsLTExNy45MDMtNTguMzE3Yy0xLjM3OC0uNjgyLTIuODk2LTEuMDM3LTQuNDM0LTEuMDM3aC0yMC44MzZ2LTQwLjc1NWgyNy4yMjljMTkuMTU2IDAgMjMuMjg2LTExLjg3OSAyNS43NTQtMTguOTc2IDIuNzg0LTguMDA3IDUuNjY0LTE2LjI4OCA0MC43NjYtMTYuMjg4aDEyLjEzOWM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3Ny0xMC0xMC0xMGgtMTIuMTM5Yy00NS41MTQgMC01NC40MjcgMTQuNjgxLTU5LjY1NiAyOS43MTktLjY0OSAxLjg2OC0xLjQ1OCA0LjE5My0yLjA1NCA0Ljc3NC0uMjE5LjIxNC0xLjUxMS43Ny00LjgxLjc3aC0yNy4yMjl2LS44MjNjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMGgtMzMuOTE4di0uODdjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMGgtOTYuMjNjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTA3LjQwMWMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwaDk2LjIzYzUuNTIzIDAgMTAtNC40NzcgMTAtMTB2LS44N2gzMy45MTZjNS41MjMgMCAxMC00LjQ3NyAxMC0xMHYtNC4wODRoMTguNDk5bDExNi4xOTEgNTcuNDdjLjI0OC4xMjMuNS4yMzUuNzU3LjMzNiAxMC4yNTYgNC4wNTUgMjEuMDIgNi4wODEgMzEuNzg2IDYuMDgxIDEwLjg3Mi0uMDAxIDIxLjc0My0yLjA2NyAzMi4wODMtNi4ybDEzMi45Ni01MC4xNjJjLjM3MS0uMTQuNzMzLS4zMDIgMS4wODQtLjQ4NCAxNy4xMDgtOC44OTQgMjMuNDUxLTMwLjEwNSAxNC40NDEtNDguMjg1em0tNDExLjcxNyA0Ni4yMDFoLTc2LjIzdi04Ny40MDFoNzYuMjN6bTQzLjkxNi0xMC44N2gtMjMuOTE2di02NS42NjJoMjMuOTE2eiIgZmlsbD0iIzQxZDkwYSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMTkuNzQgMzI2LjM2OGMtMi4zOTctMy40OTgtNi43ODEtNS4yMTItMTAuOTA2LTQuMS00LjA1MyAxLjA5Mi03LjAzNiA0LjY4Ny03LjM4MSA4Ljg3LS4zNDIgNC4xNSAyLjA2OCA4LjE3OCA1Ljg0OSA5Ljg5IDMuNzQ1IDEuNjk2IDguMjc2Ljg3NyAxMS4xODgtMi4wMyAzLjM1NS0zLjM1MSAzLjgzMi04LjY4NSAxLjI1LTEyLjYzeiIgZmlsbD0iIzQxZDkwYSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=" />
                    </div>
                  </div>
                </div>
                <div className=" textright col-lg-7 col-md-6 col-sm-12 " data-aos="fade-right"
                  >
                  <div className="textsub ">
                    <h2>
                      <strong>Upgrade Or Replacement</strong>
                    </h2>
                    <div className="wraptext ">
                      <p>GET YOUR PANELS IN GOOD SHAPE REGULARLY</p>
                    </div>
                    <div className="contenttext ">
                      <p>
                        Aenean volutpat, sem sit amet ullamcorper gravida,
                        tortor arcu molestie risus, ut bibendum urna enim nulla.
                        Pellentesque porta arcu velit, faucibus kodales dolor
                        rhoncus sed. Curabitur lacinia massa vitae efficitur
                        porttitor. Sed scelerisque vestibulum lectus, at egestas
                        erat varius.
                      </p>
                    </div>
                    <span className="getstart">
                      <a href="# ">
                        GET STARTED<i className="fas fa-arrow-right "></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyfive ">
        <div className="bgfirst "></div>
        <div className="bodyfivemain ">
          <div className="five-elm row clearfix ">
            <div className="elmfiveleft col-xl-5 col-lg-5 col-sm-12 ">
              <div className="content" data-aos="fade-right"
                  >
                <div className="elmif ">
                  <div className="title-text ">
                    <p>
                      WHO ARE STRNIX <i className="fas fa-bolt "></i>
                    </p>
                  </div>
                  <h2>The Recent Projects</h2>
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
                <div className="elmtextinfo ">
                  <p>
                    Aliquam era volutpat. Integer lobortis sem consequat
                    consequat imperdiet. In nulla sed viverra ut lorem dapib
                    consectetur bibendum imperdiets.
                  </p>
                </div>
                <div className="linkbox ">
                  <a href="# " className="link ">
                    <div className="link-text effect ">
                      <span className="btn-txt ">View All Works</span>
                      <span className="btn-icon ">
                        <i className="fas fa-arrow-right "></i>{' '}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="elm-five-right col-xl-7 col-lg-7 col-sm-12 ">
              <div className="fivecontent " id="tabs" data-aos="fade-left"
                  >
                <Tabs type="card" tabPosition={isMobile ? 'top' : 'bottom'}>
                  {dataTabs.map((value, index) => {
                    return (
                      <Tabs.TabPane key={index} tab={value.label}>
                        {
                          <div className="tab">
                            <Image fill priority src={value.image} alt=" " />
                            <div className="subimg ">COMMERCIAL</div>
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
        <div className="sub-body-five ">
          <div className="bgsecond "></div>

          <div className="content ">
            <div className="method " data-aos="fade-up">
              <ul>
                <li className="col-lg-3 col-md-6 col-sm-12">
                  <span className="method-icon ">
                    <i className="fas fa-bolt "></i>
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
                      />
                        
                    }
                    
                    {"+ Years"}
                  </h2>
                  <p>Of Experience & Record</p>
                </li>

                <li className="col-lg-3 col-md-6 col-sm-12">
                  <span className="method-icon ">
                    <i className="fas fa-bolt "></i>
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
                    />
                      
                  }
                   
                    {"+"}
                  </h2>
                  <p>System Installed</p>
                </li>
                <li className="col-lg-3 col-md-6 col-sm-12">
                  <span className="method-icon ">
                    <i className="fas fa-bolt "></i>
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
                     />
                       
                      
                   }
                   
                    {"k Watt"}
                  </h2>
                  <p>Energy Financing Done</p>
                </li>
                <li className="col-lg-3 col-md-6 col-sm-12">
                  <span className="method-icon ">
                    <i className="fas fa-bolt "></i>
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
                     />
                       
                      
                   }
                   
                    {"+"}
                  </h2>
                  <p>Hours Of Inspection</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="body-six ">
                <div className="imgbg ">
                </div>
                <div className="main-body-six ">
                    <div className="elmif " data-aos="fade-right">
                        <div className="title-text ">
                            <p>WHO ARE STRNIX <i className="fas fa-bolt "></i></p>
                        </div>
                        <h2>Client's Reviews</h2>
                        <div className="subtext ">
                            <p>Company Testimonials</p>
                        </div>
                        <div className="bottomtitle2 ">
                            <span className="line "></span>
                            <span className="dottitle "></span>
                            <span className="dottitle "></span>
                            <span className="dottitle "></span>
                        </div>
                    </div>
                    <div className="container slides-comment" data-aos="fade-up">

                        
                            <Slider {...reviewSlide} >

                                <div className="vote">
                                    <div className="elm-cmt">
                                        <div className="quote ">
                                            <i className="fas fa-quote-right "></i>
                                        </div>
                                        <Rate value={5} disabled/>
                                        <div className="text ">
                                            <p>Integer lobortis sem consequat consequat imperdiet. In nulla sed viverra ut lorem dap ib consectetur bibendum imperdiets. Aliquam era volutpat dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                                        </div>
                                        <div className="user ">
                                            <div className="user-avt ">
                                                <img src="/assets/images/home/author-thumb-1.jpg" alt=" "/>
                                            </div>

                                            <p className="name ">Erina Soulasd</p>
                                            <p className="address ">Florida, USA</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="vote">
                                    <div className="elm-cmt">
                                        <div className="quote ">
                                            <i className="fas fa-quote-right "></i>
                                        </div>
                                        <Rate value={5} disabled/>
                                        <div className="text ">
                                            <p>Integer lobortis sem consequat consequat imperdiet. In nulla sed viverra ut lorem dap ib consectetur bibendum imperdiets. Aliquam era volutpat dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                                        </div>
                                        <div className="user ">
                                            <div className="user-avt ">
                                                <img src="/assets/images/home/author-thumb-2.jpg" alt=" "/>
                                            </div>

                                            <p className="name ">Noal Hsuat</p>
                                            <p className="address ">Florida, USA</p>

                                        </div>
                                    </div>
                </div>
                 <div className="vote">
                                    <div className="elm-cmt">
                                        <div className="quote ">
                                            <i className="fas fa-quote-right "></i>
                                        </div>
                                        <Rate value={5} disabled/>
                                        <div className="text ">
                                            <p>Integer lobortis sem consequat consequat imperdiet. In nulla sed viverra ut lorem dap ib consectetur bibendum imperdiets. Aliquam era volutpat dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                                        </div>
                                        <div className="user ">
                                            <div className="user-avt ">
                                                <img src="/assets/images/home/author-thumb-1.jpg" alt=" "/>
                                            </div>

                                            <p className="name ">Erina Soulasd</p>
                                            <p className="address ">Florida, USA</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="vote">
                                    <div className="elm-cmt">
                                        <div className="quote ">
                                            <i className="fas fa-quote-right "></i>
                                        </div>
                                        <Rate value={5} disabled/>
                                        <div className="text ">
                                            <p>Integer lobortis sem consequat consequat imperdiet. In nulla sed viverra ut lorem dap ib consectetur bibendum imperdiets. Aliquam era volutpat dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                                        </div>
                                        <div className="user ">
                                            <div className="user-avt ">
                                                <img src="/assets/images/home/author-thumb-2.jpg" alt=" "/>
                                            </div>

                                            <p className="name ">Noal Hsuat</p>
                                            <p className="address ">Florida, USA</p>

                                        </div>
                                    </div>
                                </div>
                            </Slider>
                       

                    </div>
                </div>
      </div>
      <div className="body-seven ">
                <div className="body-container">
                    <div className="row-info clearfix ">
                        <div className="elmif " data-aos='fade-right'>
                            <div className="title-text ">
                                <p>WHO ARE STRNIX <i className="fas fa-bolt "></i></p>
                            </div>
                            <h2>Pricing Structure</h2>
                            <div className="subtext ">
                                <p>Transparent & Flexible Pricing</p>
                            </div>
                            <div className="bottomtitle ">
                                <span className="line "></span>
                                <span className="dottitle "></span>
                                <span className="dottitle "></span>
                                <span className="dottitle "></span>
                            </div>
                        </div>
                        <div className="btn-show ">
                            <span className="btn-check active ">Monthly</span>
                            <span className="btn-check ">yearly</span>

                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="tab col-xl-4 col-md-6 col-sm-12 ">

                            <div className="tab-element" data-aos='fade-up'>
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4MC4wMDkgNDgwLjAwOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTAwMDAwMDAwMDAwMDAxLDAsMCwwLjk5MDAwMDAwMDAwMDAwMDEsMi40MDAwNDU3NzYzNjcxNjQ4LDIuNDAwMDQwMDAwMDAxOTc5NSkiPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ3OS45MTMsMzExLjUwOGMtMC4wNDYtMC43MDYtMC4xODYtMS40MDMtMC40MTYtMi4wNzJjLTAuMDg4LTAuMjU2LTAuMTUyLTAuNDk2LTAuMjY0LTAuNzQ0ICAgIGMtMC4zODktMC44Ny0wLjkzMS0xLjY2NC0xLjYtMi4zNDRsLTEyOC0xMjhjLTEuNDkyLTEuNDkzLTMuNTE0LTIuMzM1LTUuNjI0LTIuMzQ0aC0xNzIuNTZjMi45NzEtNi4yNTEsNC41MjgtMTMuMDc5LDQuNTYtMjAgICAgYy0wLjAzMS0yMy41MS0xNy4wNTktNDMuNTUtNDAuMjU2LTQ3LjM3NmMwLjE2OC0xLjUzNiwwLjI1My0zLjA3OSwwLjI1Ni00LjYyNGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4Yy0yNi41MSwwLTQ4LDIxLjQ5LTQ4LDQ4ICAgIGMwLjAwMywxLjU0NSwwLjA4OCwzLjA4OCwwLjI1Niw0LjYyNGMtMjYuMDUsNC4xNDMtNDMuODA4LDI4LjYyLTM5LjY2NSw1NC42NjljMS4wNjIsNi42NzgsMy41MywxMy4wNTQsNy4yNDEsMTguNzA3ICAgIGMtMTAuODcsMTYuNDk5LTEwLjM4OSwzOC4wMDQsMS4yMDgsNTRjLTEzLjI3NCwxOC4zMjYtMTEuNzk1LDQzLjQ2OCwzLjUzNiw2MC4xMTJMMi4zNTMsMzA2LjM0OCAgICBjLTEuNSwxLjUtMi4zNDQsMy41MzQtMi4zNDQsNS42NTZ2MTYwYzAsNC40MTgsMy41ODIsOCw4LDhoNDY0YzQuNDE4LDAsOC0zLjU4Miw4LTh2LTE2MCAgICBDNDgwLjAwOSwzMTEuODM2LDQ3OS45MjEsMzExLjY4NCw0NzkuOTEzLDMxMS41MDh6IE00NTIuNjczLDMwNC4wMDRoLTQ5LjJsLTMwLTMyaDQ3LjJMNDUyLjY3MywzMDQuMDA0eiBNMjcxLjk2OSwyMzIuMDA0aDQyLjA4ICAgIGwyMi40OTYsMjRoLTQyLjA3MkwyNzEuOTY5LDIzMi4wMDR6IE0yNzIuNTQ1LDI1Ni4wMDRoLTUzLjIyNGwtMjQtMjRoNTQuNzI4TDI3Mi41NDUsMjU2LjAwNHogTTM1MS41NDUsMjcyLjAwNGwzMCwzMmgtNDIuMDcyICAgIGwtMzAtMzJIMzUxLjU0NXogTTQwNC42OTcsMjU2LjAwNGgtNDYuMjI0bC0yMi40NjQtMjRoNDQuNzI4TDQwNC42OTcsMjU2LjAwNHogTTM0MC42OTcsMTkyLjAwNGwyNCwyNGgtNDMuNzI4bC0yMi40OTYtMjQgICAgSDM0MC42OTd6IE0yNzYuNTQ1LDE5Mi4wMDRsMjIuNTA0LDI0aC00Mi4wOGwtMjIuNDk2LTI0SDI3Ni41NDV6IE0yMTIuNTQ1LDE5Mi4wMDRsMjIuNTA0LDI0aC01NS43MjhsLTI0LTI0SDIxMi41NDV6ICAgICBNMjMuODk3LDE3Ni44MDRjLTUuMDU5LTUuNzUxLTcuODYyLTEzLjE0MS03Ljg4OC0yMC44YzAtMTcuNjczLDE0LjMyNy0zMiwzMi0zMmgwLjA4YzAuNTIsMC4wNzIsMS4wNDgsMC4xMzYsMS42LDAuMTYgICAgYzQuNDEyLDAuMjMyLDguMTc3LTMuMTU3LDguNDA5LTcuNTY5YzAuMDUtMC45NTgtMC4wNzItMS45MTctMC4zNjEtMi44MzFjLTEuMDg0LTMuMTQzLTEuNjY3LTYuNDM2LTEuNzI4LTkuNzYgICAgYzAtMTcuNjczLDE0LjMyNy0zMiwzMi0zMnMzMiwxNC4zMjcsMzIsMzJjLTAuMDU2LDMuMzItMC42MzQsNi42MTEtMS43MTIsOS43NTJjLTEuMzMyLDQuMjEzLDEuMDA0LDguNzA3LDUuMjE3LDEwLjAzOSAgICBjMC45MTQsMC4yODksMS44NzMsMC40MTEsMi44MzEsMC4zNjFjMC41NTctMC4wMTUsMS4xMTMtMC4wNjYsMS42NjQtMC4xNTJjMTcuNjczLDAsMzIsMTQuMzI3LDMyLDMyICAgIGMtMC4wMTQsNy4yOTktMi41NTgsMTQuMzY3LTcuMiwyMGgtMTYuOGMtMC45MzMsMC4wMTYtMS44NTYsMC4xOTQtMi43MjgsMC41MjhjLTAuMDk2LDAuMDQtMC4yMDgsMC0wLjMxMiwwLjA4ICAgIGMtMC4xMDQsMC4wOC0wLjI4LDAuMi0wLjQ0LDAuMjhjLTAuNjQsMC4zMTQtMS4yMzQsMC43MTItMS43NjgsMS4xODRjLTAuMTIsMC4xMDQtMC4yODgsMC4xNTItMC40MDgsMC4yNzJsLTM0LjM0NCwzNC4zNDQgICAgdi04NC42ODhjMC00LjQxOC0zLjU4Mi04LTgtOHMtOCwzLjU4Mi04LDh2NDQuNjg4bC0xOC4zNDQtMTguMzQ0Yy0zLjE3OC0zLjA2OS04LjI0My0yLjk4MS0xMS4zMTIsMC4xOTcgICAgYy0yLjk5NCwzLjEtMi45OTQsOC4wMTUsMCwxMS4xMTVsMjkuNjU2LDI5LjY1NnYzMy4zNjhsLTgsOGwtMTAuMzQ0LTEwLjMzNmMtMy4xNzgtMy4wNjktOC4yNDMtMi45ODEtMTEuMzEyLDAuMTk3ICAgIGMtMi45OTQsMy4xLTIuOTk0LDguMDE1LDAsMTEuMTE1bDEwLjM0NCwxMC4zNDRsLTM2Ljg0LDM2LjhjLTUuMDU5LTUuNzQ4LTcuODQ5LTEzLjE0My03Ljg0OC0yMC44ICAgIGMtMC4wMDktOC4zODYsMy4yOTUtMTYuNDM3LDkuMTkyLTIyLjRjMy4wNDktMy4xMTEsMy4wNDktOC4wODksMC0xMS4yYy0xMS43NDYtMTEuODA5LTEyLjMxNi0zMC43MDQtMS4zMDQtNDMuMiAgICBDMjYuNDU3LDE4NC4yMTEsMjYuNDU3LDE3OS43OTgsMjMuODk3LDE3Ni44MDR6IE0xNjguMDA5LDQ2NC4wMDRoLTY0di05Nmg2NFY0NjQuMDA0eiBNMjU2LjAwOSw0NjQuMDA0aC03MnYtMTA0ICAgIGMwLTQuNDE4LTMuNTgyLTgtOC04aC04MGMtNC40MTgsMC04LDMuNTgyLTgsOHYxMDRoLTcyVjMxNS4zMTZsMTMuNzYtMTMuNzZsNjMuODg4LTYzLjg4OGw0Mi4zNTItNDIuMzUybDEyMCwxMjBWNDY0LjAwNHogICAgIE0yMzUuMzIxLDI3Mi4wMDRoNTIuMjI0bDMwLDMyaC01MC4yMjRMMjM1LjMyMSwyNzIuMDA0eiBNNDY0LjAwOSw0NjQuMDA0aC0xOTJ2LTE0NGgxOTJWNDY0LjAwNHoiIGZpbGw9IiM3Nzc3NzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM5Mi4wMDksMzIuMDA0Yy0zMC45MjgsMC01NiwyNS4wNzItNTYsNTZjMCwzMC45MjgsMjUuMDcyLDU2LDU2LDU2YzMwLjkxMS0wLjA0LDU1Ljk2LTI1LjA4OSw1Ni01NiAgICBDNDQ4LjAwOSw1Ny4wNzYsNDIyLjkzNywzMi4wMDQsMzkyLjAwOSwzMi4wMDR6IE0zOTIuMDA5LDEyOC4wMDRjLTIyLjA5MSwwLTQwLTE3LjkwOS00MC00MHMxNy45MDktNDAsNDAtNDAgICAgYzIyLjA5MSwwLDQwLDE3LjkwOSw0MCw0MEM0MzEuOTgyLDExMC4wODUsNDE0LjA4OSwxMjcuOTc4LDM5Mi4wMDksMTI4LjAwNHoiIGZpbGw9IiM3Nzc3NzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMzg0LjAwOSIgeT0iMC4wMDQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzc3Nzc3NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIzODQuMDA5IiB5PSIxNjAuMDA0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiM3Nzc3NzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMzA0LjAwOSIgeT0iODAuMDA0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiM3Nzc3NzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iNDY0LjAwOSIgeT0iODAuMDA0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiM3Nzc3NzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMzI3LjQ0MSIgeT0iMjMuNDM1IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIDc2LjAyMDEgMjQ2LjM5OTMpIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiM3Nzc3NzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iNDQwLjU2NSIgeT0iMTM2LjU3MSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAyOS4xNTUyIDM1OS41Mjg1KSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjNzc3Nzc3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjMyNy40MzUiIHk9IjEzNi41NjUiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTMuOTc2MSAyNzkuNTMwNykiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzc3Nzc3NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSI0NDAuNTcxIiB5PSIyMy40NDEiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgMTA5LjE1MTQgMzI2LjM5NjcpIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiM3Nzc3NzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+ "
                                />
                                <div className="img-name ">
                                    SEAMLESS COSTT
                                </div>
                                <h2>Residential Area</h2>

                                <div className="icon-flash ">
                                    <i className="fas fa-bolt "></i>
                                </div>
                                <div className="cost ">
                                    <span className="curency ">$</span>
                                    <span className="money ">14.30</span>
                                </div>
                                <div className="cost-w ">PER WATT</div>
                                <p>Eco-Packing Systems</p>
                                <p>Minimal Energy Waste</p>
                                <p>High Density Cells</p>
                                <p>Environmental Frendly</p>
                                <p>Monitoring & Maintaince</p>
                                <div className="linkbox ">
                                    <a href="# " className="link ">
                                        <div className="link-text effect ">
                                            <span className="btn-txt ">Get Started</span>
                                            <span className="btn-icon "><i className="fas fa-arrow-right "></i> </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="tab col-xl-4 col-md-6 col-sm-12">
                            <div className="tab-element view " data-aos='fade-down'>
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4MC4wMDMgNDgwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDc5LjcwNiw0NjkuODQybC0zMi4yNzItMTE1LjI1NmMtMTUuNTQ5LTU1LjUyOC0yMy40MzMtMTEyLjkyLTIzLjQzMi0xNzAuNTg0YzUuMDA0LTIuOCw5LjYwMi02LjI3MywxMy42NjQtMTAuMzIgICAgYzguNzIxLTguNzgsMjAuNTkzLTEzLjcwNiwzMi45NjgtMTMuNjhoOS4zNjh2LTE2aC05LjM2OGMtMTYuNjItMC4wNDYtMzIuNTY4LDYuNTU5LTQ0LjI4OCwxOC4zNDQgICAgYy04LjcyNyw4Ljc3My0yMC42MDEsMTMuNjkxLTMyLjk3NiwxMy42NTZoLTgwLjY0OGMzLjkxOS0yMy4wNjYsMjMuODgzLTM5Ljk1Nyw0Ny4yOC00MGMyLjY3NCwwLDUuMTcyLTEuMzM1LDYuNjU2LTMuNTYgICAgYzguNDk4LTEyLjc4MiwyMi44MzUtMjAuNDU3LDM4LjE4NC0yMC40NGgxMS4xNmMxMi4xMTMtMC4wMjMsMjMuODk2LTMuOTUxLDMzLjYtMTEuMmw2LjQtNC44YzYuOTMxLTUuMTc4LDE1LjM0OC03Ljk4NCwyNC04di0xNiAgICBjLTEyLjExMywwLjAyMy0yMy44OTYsMy45NTEtMzMuNiwxMS4ybC02LjQsNC44Yy02LjkzMSw1LjE3OC0xNS4zNDgsNy45ODQtMjQsOGgtMTEuMmMtMTkuMjEyLTAuMDIzLTM3LjMzOSw4Ljg5OC00OS4wNCwyNC4xMzYgICAgYy0zMy42MSwyLjI3MS01OS43MjMsMzAuMTc3LTU5Ljc2LDYzLjg2NGMwLjAwMSw1Ny42NjQtNy44ODMsMTE1LjA1Ni0yMy40MzIsMTcwLjU4NGwtMC4zMzYsMS4ybC0wLjYwOC0yLjIzMiAgICBjLTIwLjk4NC03Ni4wNzctMzEuNjIxLTE1NC42MzQtMzEuNjI0LTIzMy41NTJjMC04LjgzNyw3LjE2My0xNiwxNi0xNmg1NmMxMi41ODQtMC4wMjgsMjQuNDI4LTUuOTUsMzItMTZsNC44LTYuNCAgICBjNC41NDItNi4wMzEsMTEuNjQ5LTkuNTg1LDE5LjItOS42YzM5Ljc0Ni0wLjA0NCw3MS45NTYtMzIuMjU0LDcyLTcyaC0xNmMtMC4wMzUsMzAuOTEzLTI1LjA4Nyw1NS45NjUtNTYsNTYgICAgYy0xMi41ODQsMC4wMjgtMjQuNDI4LDUuOTUtMzIsMTZsLTQuOCw2LjRjLTQuNTQyLDYuMDMxLTExLjY0OSw5LjU4NS0xOS4yLDkuNmgtNTZjLTE0LjU0NywwLjA1NS0yNy4yMjcsOS45MTQtMzAuODY0LDI0SDgwLjcyMiAgICBjMy45MTktMjMuMDY2LDIzLjg4My0zOS45NTcsNDcuMjgtNDBoNzJjMTcuNjA4LDAuMDQ3LDM0LjI3MS03Ljk2Myw0NS4yMzItMjEuNzQ0bDIuMDI0LTIuNTEyICAgIGM3LjkzNi05Ljk3NiwxOS45OTctMTUuNzc1LDMyLjc0NC0xNS43NDRjMTcuNjczLDAsMzItMTQuMzI3LDMyLTMyaC0xNmMwLDguODM3LTcuMTYzLDE2LTE2LDE2ICAgIGMtMTcuNjA4LTAuMDQ3LTM0LjI3MSw3Ljk2My00NS4yMzIsMjEuNzQ0bC0yLjAyNCwyLjUxMmMtNy45MzYsOS45NzYtMTkuOTk3LDE1Ljc3NS0zMi43NDQsMTUuNzQ0aC03MiAgICBjLTM1LjMzLDAuMDQtNjMuOTYsMjguNjctNjQsNjRDNjQsMTk4LjkxOSw1My4zNjMsMjc3LjQ3NywzMi4zNzgsMzUzLjU1NEwwLjI5LDQ2OS44NzRjLTEuMTc1LDQuMjU5LDEuMzI1LDguNjY0LDUuNTg0LDkuODQgICAgYzAuNjkzLDAuMTkxLDEuNDA5LDAuMjg4LDIuMTI4LDAuMjg4aDQ2NGM0LjQxOCwwLjAwMSw4LjAwMS0zLjU4MSw4LjAwMS03Ljk5OUM0ODAuMDAzLDQ3MS4yNzIsNDc5LjkwNCw0NzAuNTQ1LDQ3OS43MDYsNDY5Ljg0MnogICAgIE0zMTIuMDAyLDE5Mi4wMDJoODEuMzY4aDE0LjY4YzAuMTA0LDgsMC4zOTIsMTYsMC44LDI0aC05Ny42NDhDMzExLjU5NCwyMDguMDAyLDMxMS44ODIsMjAwLjAwMiwzMTIuMDAyLDE5Mi4wMDJ6ICAgICBNNzkuOTcsMTI4LjAwMmgxNDQuMDMyYzAuMTA0LDgsMC4zNTIsMTYsMC42NCwyNEg3OS4zNjJDNzkuNjUsMTQ0LjAwMiw3OS44OTgsMTM2LjAwMiw3OS45NywxMjguMDAyeiBNMTguNTA2LDQ2NC4wMDIgICAgTDQ3LjgwMiwzNTcuODFjMTcuMDU5LTYxLjk3OSwyNy4zODUtMTI1LjYxNiwzMC44LTE4OS44MDhoMTQ2LjhjMy40MTUsNjQuMTkyLDEzLjc0MSwxMjcuODI5LDMwLjgsMTg5LjgwOGwyOC44NDgsMTA0LjU5MiAgICBsMC40NDgsMS42SDE4LjUwNnogTTMwMi4wOTgsNDY0LjAwMmwtMjEuNi03OC4zMzZsNy41MDQtMjYuNzY4YzExLjU4OS00MS40NTcsMTkuMDItODMuOTY2LDIyLjE4NC0xMjYuODk2aDk5LjYzMiAgICBjMy4xNjQsNDIuOTMsMTAuNTk1LDg1LjQzOSwyMi4xODQsMTI2Ljg5NmwyOS40NTYsMTA1LjEwNEgzMDIuMDk4eiIgZmlsbD0iIzc3Nzc3NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
                                />
                                <div className=" img-name ">
                                    SEAMLESS COSTT
                                </div>
                                <h2>Commercial Area</h2>
                                <div className="icon-flash ">
                                    <i className="fas fa-bolt "></i>
                                </div>
                                <div className="cost ">
                                    <span className="curency ">$</span>
                                    <span className="money ">25.08</span>
                                </div>
                                <div className="cost-w ">PER WATT</div>
                                <p>Eco-Packing Systems</p>
                                <p>Minimal Energy Waste</p>
                                <p>High Density Cells</p>
                                <p>Environmental Frendly</p>
                                <p>Monitoring & Maintaince</p>
                                <div className="linkbox ">
                                    <a href="# " className="link ">
                                        <div className="link-text effect ">
                                            <span className="btn-txt ">Get Started</span>
                                            <span className="btn-icon "><i className="fas fa-arrow-right "></i> </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="tab col-xl-4 col-md-6 col-sm-12">
                            <div className="tab-element " data-aos='fade-up'>
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KC0xLDAsMCwxLDUxMS45OTk4OTMxODg0NzY1NiwwKSI+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBkPSJtNDg5LjUgNDY3aC0zNS4yNjVjLS4yMjctMTQuMDA5LTkuOTQtMjUuNzUyLTIyLjk4Ny0yOS4wNjR2LTEyMS40MjNjMC0uMjg0LS4wMTktLjU2My0uMDQ5LS44MzhsMzkuNTkxLTM5LjU5MWMyLjkyOS0yLjkzIDIuOTI5LTcuNjc4IDAtMTAuNjA3LTIuOTI4LTIuOTI3LTcuNjc3LTIuOTI5LTEwLjYwNiAwbC0xMjUuMTg3IDEyNS4xODZjLTEuNDE3IDEuNDE2LTMuMyAyLjE5Ni01LjMwMyAyLjE5NnMtMy44ODYtLjc4LTUuMzAzLTIuMTk3Yy0xLjQxNy0xLjQxNi0yLjE5Ny0zLjMtMi4xOTctNS4zMDNzLjc4LTMuODg3IDIuMTk3LTUuMzAzbDE1OS44MDYtMTU5LjgwNmMyLjkyNS0yLjkyNCA3LjY4My0yLjkyMyAxMC42MDYtLjAwMSAyLjkyNCAyLjkyNSAyLjkyNCA3LjY4NCAwIDEwLjYwN2wtMTEuOTk5IDExLjk5OWMtMi45MjkgMi45My0yLjkyOSA3LjY3OCAwIDEwLjYwNyAyLjkyOSAyLjkyOCA3LjY3OCAyLjkyOCAxMC42MDYgMGwxMi0xMmM4Ljc3Mi04Ljc3MiA4Ljc3Mi0yMy4wNDcgMC0zMS44Mi04Ljc3Mi04Ljc3MS0yMy4wNDctOC43NzEtMzEuODE5IDBsLTE1OS44MDcgMTU5LjgwN2MtNC4yNSA0LjI1LTYuNTkgOS45LTYuNTkgMTUuOTFzMi4zNDEgMTEuNjYgNi41OSAxNS45MDljNC4yNSA0LjI1IDkuOSA2LjU5MSAxNS45MSA2LjU5MXMxMS42Ni0yLjM0MSAxNS45MS02LjU5bDcwLjY0NS03MC42NDR2MTA3LjMxYy0xMy4wNDcgMy4zMTItMjIuNzYgMTUuMDU1LTIyLjk4NyAyOS4wNjRoLTkyLjYyM2MtLjIyNy0xNC4wMDktOS45NC0yNS43NTMtMjIuOTg3LTI5LjA2NHYtMTIxLjQyMmMwLS4yODMtLjAxOS0uNTYyLS4wNDktLjgzN2w3NC4yMTItNzQuMjExdi0uMDAxYzguNzcyLTguNzcyIDguNzcyLTIzLjA0NyAwLTMxLjgyLTguNzczLTguNzcxLTIzLjA0Ny04Ljc3MS0zMS44MiAwbC0xNTkuODA4IDE1OS44MDVjLTQuMjUgNC4yNS02LjU5IDkuOS02LjU5IDE1LjkxczIuMzQxIDExLjY2IDYuNTkgMTUuOTA5YzQuMjUgNC4yNSA5LjkgNi41OTEgMTUuOTEgNi41OTFzMTEuNjYxLTIuMzQxIDE1LjkxLTYuNTlsNzAuNjQ0LTcwLjY0NHYxMDcuMzFjLTEzLjA0NyAzLjMxMi0yMi43NiAxNS4wNTUtMjIuOTg3IDI5LjA2NGgtOTIuNjIyYy0uMjI3LTE0LjAwOS05Ljk0LTI1Ljc1My0yMi45ODctMjkuMDY0di0xMjEuNDIyYzAtLjI4NC0uMDE5LS41NjMtLjA1LS44MzhsNzQuMjEyLTc0LjIxMmM4Ljc3Mi04Ljc3MiA4Ljc3Mi0yMy4wNDcgMC0zMS44Mi04Ljc3Mi04Ljc3MS0yMy4wNDctOC43NzEtMzEuODE5IDBsLTExOS40ODEgMTE5LjQ3OWMtMi45MjkgMi45My0yLjkyOSA3LjY3OCAwIDEwLjYwNyAyLjkyOSAyLjkyOCA3LjY3OCAyLjkyOCAxMC42MDYgMGwxMTkuNDgtMTE5LjQ3OWMyLjkyNS0yLjkyNCA3LjY4My0yLjkyMyAxMC42MDYtLjAwMSAyLjkyNCAyLjkyNSAyLjkyNCA3LjY4NCAwIDEwLjYwN2wtMTU5LjgwNiAxNTkuODA3Yy0xLjQxNyAxLjQxNi0zLjMgMi4xOTYtNS4zMDMgMi4xOTZzLTMuODg2LS43OC01LjMwMy0yLjE5N2MtMS40MTctMS40MTYtMi4xOTctMy4zLTIuMTk3LTUuMzAzcy43OC0zLjg4NyAyLjE5Ny01LjMwM2wxNy43MDUtMTcuNzA1YzIuOTI5LTIuOTMgMi45MjktNy42NzggMC0xMC42MDctMi45MjktMi45MjgtNy42NzgtMi45MjgtMTAuNjA2IDBsLTE3LjcwNiAxNy43MDVjLTQuMjUgNC4yNS02LjU5IDkuOS02LjU5IDE1LjkxczIuMzQxIDExLjY2IDYuNTkgMTUuOTA5YzQuMjUgNC4yNSA5LjkgNi41OTEgMTUuOTEgNi41OTFzMTEuNjYtMi4zNDEgMTUuOTEtNi41OWw3MC42NDUtNzAuNjQ1djEwNy4zMTFjLTEzLjA0NyAzLjMxMi0yMi43NiAxNS4wNTUtMjIuOTg3IDI5LjA2NGgtNjMuNTY4Yy0xMi40MDcuMDAxLTIyLjUgMTAuMDk1LTIyLjUgMjIuNTAxczEwLjA5MyAyMi41IDIyLjUgMjIuNWg0NjdjMTIuNDA3IDAgMjIuNS0xMC4wOTQgMjIuNS0yMi41cy0xMC4wOTMtMjIuNS0yMi41LTIyLjV6bS0zMDguMS03Ni4zMzdjLTEuNDE3IDEuNDE2LTMuMyAyLjE5Ni01LjMwMyAyLjE5NnMtMy44ODYtLjc4LTUuMzAzLTIuMTk3Yy0xLjQxNy0xLjQxNi0yLjE5Ny0zLjMtMi4xOTctNS4zMDNzLjc4LTMuODg3IDIuMTk3LTUuMzAzbDE1OS44MDYtMTU5LjgwNmMxLjQ2Mi0xLjQ2MyAzLjM4My0yLjE5MyA1LjMwNC0yLjE5MyAxLjkyIDAgMy44NDEuNzMxIDUuMzAzIDIuMTkyIDIuOTI0IDIuOTI1IDIuOTI0IDcuNjg0IDAgMTAuNjA3em0yNDIuMzQ4IDYxLjMzN2M4LjM3OSAwIDE1LjIyNyA2LjY4NCAxNS40OTIgMTVoLTMwLjk4NGMuMjY1LTguMzE2IDcuMTEzLTE1IDE1LjQ5Mi0xNXptLTE1My41OTcgMGM4LjM3OSAwIDE1LjIyNyA2LjY4NCAxNS40OTIgMTVoLTMwLjk4NGMuMjY1LTguMzE2IDcuMTEyLTE1IDE1LjQ5Mi0xNXptLTE1My41OTcgMGM4LjM3OSAwIDE1LjIyNyA2LjY4NCAxNS40OTIgMTVoLTMwLjk4NGMuMjY1LTguMzE2IDcuMTEzLTE1IDE1LjQ5Mi0xNXptMzcyLjk0NiA0NWgtNDY3Yy00LjEzNiAwLTcuNS0zLjM2NC03LjUtNy41czMuMzY0LTcuNSA3LjUtNy41aDQ2N2M0LjEzNiAwIDcuNSAzLjM2NCA3LjUgNy41cy0zLjM2NCA3LjUtNy41IDcuNXoiIGZpbGw9IiM3Nzc3NzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMTA3LjUgMTYxYzI5LjUgMCA1My41LTI0IDUzLjUtNTMuNXMtMjQtNTMuNS01My41LTUzLjVjLTcuODI5IDAtMTUuMzc3IDEuNjU1LTIyLjQzNSA0LjkyLTMuNzYgMS43MzgtNS4zOTcgNi4xOTUtMy42NTkgOS45NTVzNi4xOTggNS4zOTcgOS45NTYgMy42NThjNS4wNy0yLjM0NSAxMC40OTktMy41MzMgMTYuMTM4LTMuNTMzIDIxLjIyOSAwIDM4LjUgMTcuMjcxIDM4LjUgMzguNXMtMTcuMjcxIDM4LjUtMzguNSAzOC41LTM4LjUtMTcuMjcxLTM4LjUtMzguNWMwLTUuNzc0IDEuMjQ1LTExLjMyMyAzLjY5OS0xNi40OTMgMS43NzctMy43NDEuMTg0LTguMjE1LTMuNTU4LTkuOTkyLTMuNzQxLTEuNzc1LTguMjE1LS4xODMtOS45OTIgMy41NTktMy40MTcgNy4xOTUtNS4xNDkgMTQuOTA4LTUuMTQ5IDIyLjkyNiAwIDI5LjUgMjQgNTMuNSA1My41IDUzLjV6IiBmaWxsPSIjNzc3Nzc3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTEwNy41IDI3YzQuMTQyIDAgNy41LTMuMzU3IDcuNS03LjV2LTEyYzAtNC4xNDMtMy4zNTgtNy41LTcuNS03LjVzLTcuNSAzLjM1Ny03LjUgNy41djEyYzAgNC4xNDMgMy4zNTggNy41IDcuNSA3LjV6IiBmaWxsPSIjNzc3Nzc3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTEwMCAxOTUuNXYxMmMwIDQuMTQzIDMuMzU4IDcuNSA3LjUgNy41czcuNS0zLjM1NyA3LjUtNy41di0xMmMwLTQuMTQzLTMuMzU4LTcuNS03LjUtNy41cy03LjUgMy4zNTctNy41IDcuNXoiIGZpbGw9IiM3Nzc3NzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMTY5LjcyNiA1Mi43NzRjMS45MTkgMCAzLjgzOS0uNzMyIDUuMzAzLTIuMTk3bDguNDg1LTguNDg1YzIuOTI5LTIuOTI5IDIuOTI5LTcuNjc4IDAtMTAuNjA2cy03LjY3OC0yLjkyOS0xMC42MDYuMDAxbC04LjQ4NSA4LjQ4NWMtMi45MjkgMi45MjktMi45MjkgNy42NzggMCAxMC42MDYgMS40NjQgMS40NjQgMy4zODMgMi4xOTYgNS4zMDMgMi4xOTZ6IiBmaWxsPSIjNzc3Nzc3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTM2Ljc5IDE4NS43MTFjMS45MTkgMCAzLjgzOS0uNzMyIDUuMzAzLTIuMTk3bDguNDg1LTguNDg1YzIuOTI5LTIuOTI5IDIuOTI5LTcuNjc4IDAtMTAuNjA2cy03LjY3OC0yLjkyOS0xMC42MDYuMDAxbC04LjQ4NSA4LjQ4NWMtMi45MjkgMi45MjktMi45MjkgNy42NzggMCAxMC42MDYgMS40NjQgMS40NjQgMy4zODMgMi4xOTYgNS4zMDMgMi4xOTZ6IiBmaWxsPSIjNzc3Nzc3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTE5NS41IDExNWgxMmM0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNWgtMTJjLTQuMTQyIDAtNy41IDMuMzU3LTcuNSA3LjVzMy4zNTggNy41IDcuNSA3LjV6IiBmaWxsPSIjNzc3Nzc3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTcuNSAxMTVoMTJjNC4xNDIgMCA3LjUtMy4zNTcgNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjVoLTEyYy00LjE0MiAwLTcuNSAzLjM1Ny03LjUgNy41czMuMzU4IDcuNSA3LjUgNy41eiIgZmlsbD0iIzc3Nzc3NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNzIuOTA3IDE4My41MTRjMS40NjQgMS40NjUgMy4zODQgMi4xOTcgNS4zMDMgMi4xOTdzMy44MzktLjczMiA1LjMwMy0yLjE5NmMyLjkyOS0yLjkyOSAyLjkyOS03LjY3OCAwLTEwLjYwNmwtOC40ODUtOC40ODVjLTIuOTI4LTIuOTI5LTcuNjc3LTIuOTMtMTAuNjA2LS4wMDFzLTIuOTI5IDcuNjc4IDAgMTAuNjA2eiIgZmlsbD0iIzc3Nzc3NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zOS45NzEgNTAuNTc3YzEuNDY0IDEuNDY1IDMuMzg0IDIuMTk3IDUuMzAzIDIuMTk3czMuODM5LS43MzIgNS4zMDMtMi4xOTZjMi45MjktMi45MjkgMi45MjktNy42NzggMC0xMC42MDZsLTguNDg1LTguNDg1Yy0yLjkyOS0yLjkzLTcuNjc4LTIuOTI5LTEwLjYwNi0uMDAxLTIuOTI5IDIuOTI5LTIuOTI5IDcuNjc4IDAgMTAuNjA2eiIgZmlsbD0iIzc3Nzc3NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg=="
                                />
                                <div className=" img-name ">
                                    SEAMLESS COSTT
                                </div>
                                <h2>Agricultral Area</h2>
                                <div className="icon-flash ">
                                    <i className="fas fa-bolt "></i>
                                </div>
                                <div className="cost ">
                                    <span className="curency ">$</span>
                                    <span className="money ">14.30</span>
                                </div>
                                <div className="cost-w ">PER WATT</div>
                                <p>Eco-Packing Systems</p>
                                <p>Minimal Energy Waste</p>
                                <p>High Density Cells</p>
                                <p>Environmental Frendly</p>
                                <p>Monitoring & Maintaince</p>
                                <div className="linkbox ">
                                    <a href="# " className="link ">
                                        <div className="link-text effect ">
                                            <span className="btn-txt ">Get Started</span>
                                            <span className="btn-icon "><i className="fas fa-arrow-right "></i> </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>

            <div className="eight-body ">
                <div className="bgimg "></div>
                <div className="eight-container ">
                    <div className="elmif " data-aos='fade-right'>
                        <div className="title-text ">
                            <p>WHO ARE STRNIX <i className="fas fa-bolt "></i></p>
                        </div>
                        <h2>Get Free Consultation</h2>
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
                    <div className="support ">
                        <div className="form-request " data-aos='fade-up'>
                            <form>
                                <div className="row-input clearfix ">
                                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                        <input type="text" name="name " placeholder="Your Name " required/>
                                    </div>
                                    <div className="form-group  col-lg-4 col-md-6 col-sm-12">
                                        <input type="email" name="email " placeholder="Email " required/>
                                    </div>
                                    <div className="form-group  col-lg-4 col-md-12 col-sm-12">
                                        <input type="tel " name="phone-number " placeholder="Phone " pattern="[0-9]{4}[0-9]{3}[0-9]{3}" required/>
                                    </div>
                                    <div className="form-group  col-xl-12">
                                        <select className="custom-select-box " name="field-name ">
                                <option >Subject / Discuss About Service</option>
                                <option>Installation</option>
                                <option>Maintenance</option>
                                <option>Replacement</option> 
                            </select>
                                    </div>
                                    <div className="linkbox ">

                                        <button type="submit" className="link-text effect ">
                                        <span className="btn-txt ">Send Request</span>
                                        <span className="btn-icon "><i className="fas fa-arrow-right "></i> </span>
                                    </button>

                                    </div>

                                </div>
                            </form>

                            <div className="response ">

                                <p>Thank you for your messeage. It has been sent.</p>
                            </div>


                            <div className="textcontent ">

                                <div className="sub-titletext ">
                                    <span className="txt ">OR IF YOU NEED QUICK ASSISTANCE</span>
                                </div>
                                <div className="info-support ">Call Us 24/7 For Customer Support At <span className="icon "></span>
                                    <a href="# "><img src="/assets/images/home/phone.svg " alt="phone "/>(222)-303-4500</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nine-body ">
                <div className="nine-container ">
                    <div className="elmif " data-aos='fade-right'>
                        <div className="title-text ">
                            <p>STRNIX IS IMPORTANT <i className="fas fa-bolt "></i></p>
                        </div>
                        <h2>Latest Company News</h2>
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
                    <div className="body-container">
                        <div className="row clearfix ">
                            <div className="tab col-lg-4 col-md-6 col-sm-12" data-aos='fade-down'>
                                <div className="news ">
                                    <div className="img-date ">
                                        <a href="# "><Image priority width="773" height="451" src="/assets/images/home/Artboard-–-1-4.png " alt=''/></a>
                                        <div className="date ">
                                            <h2>17</h2>
                                            <p>DEC</p>
                                        </div>
                                    </div>
                                    <div className="text-box ">
                                        <h4>Mead Before And After The Epic Etars</h4>
                                        <div className="text-content ">
                                            By <span><a href="# ">admin </a></span> | <span><a href="# "> Commercial Services</a></span>, <span><a href="# ">Panels Installation</a></span>
                                        </div>
                                        <div className="text-link-elm ">
                                            <a href="# "><span className="linkt ">Read More</span><span className="iconx "><i className="fas fa-arrow-right "></i></span></a>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab col-lg-4 col-md-6 col-sm-12" data-aos='fade-up'>
                                <div className="news ">
                                    <div className="img-date ">
                                        <Image priority width="773" height="451" src="/assets/images/home/Artboard-–-1-3.png" alt=''/>
                              
                                        <div className="date ">
                                            <h2>17</h2>
                                            <p>DEC</p>
                                        </div>
                                    </div>
                                    <div className="text-box ">
                                        <h4>The Amin Gaisame Toren Maintenance</h4>
                                        <div className="text-content ">
                                            By <span><a href="# ">admin </a></span> | <span><a href="# "> Commercial Services</a></span>, <span><a href="# ">Panels Installation</a></span>
                                        </div>
                                        <div className="text-link-elm ">
                                            <a href="# "><span className="linkt ">Read More</span><span className="iconx "><i className="fas fa-arrow-right "></i></span></a>
                                           
                                        </div>
                                    </div>
                                </div>
                          </div>
                            <div className="tab col-lg-4 col-md-6 col-sm-12" data-aos='fade-down'>
                                <div className="news ">
                                    <div className="img-date ">
                                        <Image priority width="779" height="451" src="/assets/images/home/Artboard-–-1-2.png"  alt=''/>
                               
                                        <div className="date ">
                                            <h2>15</h2>
                                            <p>DEC</p>
                                        </div>
                                    </div>
                                    <div className="text-box ">
                                        <h4>Newly Built Customized Hydro Plants</h4>
                                        <div className="text-content ">
                                            By <span><a href="# ">admin </a></span> | <span><a href="# "> Commercial Services</a></span>, <span><a href="# ">Panels Installation</a></span>
                            </div>
                            <div className="text-link-elm ">
                                <a href="# "><span className="linkt">Read More</span><span className="iconx "><i className="fas fa-arrow-right "></i></span></a>
                                            
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
