'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import BannerBreadcrumbs from '@/components/banner/BannerBreadcrumbs';
import ContactForm from '@/components/form/ContactForm';

export default function Contact() {

  return (
    <>
      <BannerBreadcrumbs
        title="Contact Us"
        url="/assets/images/services/banner-bg-2.jpg"
      />

      <div className="strnix-contact py-[80px]">
        <div className="container-xl">
          <div className="row flex-wrap text-center">
            <div className="contact-box col-sm-12 col-md-6 col-lg-4">
              <div className="inner-box">
                <Image
                  priority
                  width={40}
                  height={40}
                  src="/assets/images/home/cooment.svg"
                  alt="cooment "
                />

                <strong>Visit The Office</strong>

                <p> 102 Taily End Rd, NY</p>
              </div>
            </div>
            <div className="contact-box col-sm-12 col-md-6 col-lg-4">
              <div className="inner-box">
                <Image
                  width={40}
                  height={40}
                  src="/assets/images/home/cooment.svg"
                  alt="cooment "
                />

                <strong>Send Email</strong>

                <p>
                  <a href="mailto:info@domain.com"> info@domain.com</a>
                </p>
              </div>
            </div>
            <div className="contact-box col-sm-12 col-md-6 col-lg-4">
              <div className="inner-box">
                <Image
                  width={40}
                  height={40}
                  priority
                  src="/assets/images/home/phone.svg"
                  alt="phone "
                />

                <strong>Phone Inquiry</strong>

                <p>
                  <a href="# "> (222) 303 4500 </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <div className="map">
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Fafim%20Ng%C3%A3%20T%C6%B0%20S%E1%BB%9F,%2019%20Nguy%E1%BB%85n%20Tr%C3%A3i,%20Ng%C3%A3%20T%C6%B0%20S%E1%BB%9F,%20%C4%90%E1%BB%91ng%20%C4%90a,%20H%C3%A0%20N%E1%BB%99i,%20Vi%E1%BB%87t%20Nam+(my%20address)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="w-full aspect-[21/9] max-sm:aspect-[4/3]"
        />
      </div>
    </>
  );
}
