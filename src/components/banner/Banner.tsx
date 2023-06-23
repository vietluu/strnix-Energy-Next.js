import React from 'react';
import Slider, { Settings } from 'react-slick';
export default function Banner() {
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
  return (
    <div className="page-baner">
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
                <i className="fas fa-solar-panel "></i> W E L C O M E T O S T R
                N I X <i className="fas fa-solar-panel "></i>
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
                <i className="fas fa-solar-panel "></i> W E L C O M E T O S T R
                N I X <i className="fas fa-solar-panel "></i>
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
                <i className="fas fa-solar-panel "></i> W E L C O M E T O S T R
                N I X <i className="fas fa-solar-panel "></i>
              </span>
            </div>
            <div className="text-info ">
              <h1>Take Your Building Or Home Off The Grid By Solar</h1>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
