"use client"
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
const inter = Inter({ subsets: ['vietnamese'] });
import React, {useLayoutEffect, } from 'react';
import Aos from 'aos';
import '/assets/css/slick.css';
import '/assets/css/owl.carousel.css';
import 'antd/dist/reset.css';
import '/assets/css/bootstrap.min.css';
import '/assets/css/aos.css';
import '/assets/css/globals.css';
import '/assets/css/flaticon.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
    useLayoutEffect(() => {
      Aos.init({
        duration: 1000,
        delay:0,
        once: true,// whether animation should happen only once - while scrolling down
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99,// the delay on throttle used while scrolling the page (advanced)
      });
    }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Free Web tutorials with next.js" />
        <meta name="keywords" content="strnix , energy, next,next.js,vercel, website,demo" />
        <meta name="author" content="Vietluu" />
        <meta
          property="og:image"
          content="/assets/images/home/bg-image-1.jpg"
        />
        <title>Strnix World's Energy by Next.js</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"
        />
        {/* <link rel='stylesheet' href='https://smartdemowp.com/strnix/wp-content/themes/strnix/assets/css/flaticon.css?ver=1'/> */}
      </head>
      <body className={'container-body ' + inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
