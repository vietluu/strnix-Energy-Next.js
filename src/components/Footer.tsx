'use client';
import Link from 'next/link';
import Image from 'next/image';
import SocialLink from './SocialLink';
import Logo from './Logo';
export default function Footer() {
  const goToTop = (): void => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };
  return (
    <footer>
      <div className="bg-[#0f1e44]">
        <div className="container-xl">
          <div className="row-list ">
            <div className="info-link ">
              <i aria-hidden="true" className=" flaticon-renewable-energy"></i>
              <a href=" # ">ENERGY EFFICIENCY SOLUTIONS</a>
            </div>
            <div className="info-link ">
              <i aria-hidden="true" className=" flaticon-power-7"></i>
              <a href="# ">SOLAR PANEL COMMISSIONING</a>
            </div>
            <div className="social-logo ">
              <Logo option="footer" />

              <SocialLink />
            </div>
            <div className="info-link ">
              <i aria-hidden="true" className=" flaticon-car-battery"></i>
              <a href=" # ">BATTERY BACKUP GENERATOR</a>
            </div>
            <div className="info-link ">
              <i aria-hidden="true" className=" flaticon-solar-energy-2"></i>
              <a href=" # ">WHOLE HOUSE SURGE PROTECTION</a>
            </div>
          </div>
          <div className="row-services ">
            <div className="contact-elm clearfix ">
              <h3>Contact Us</h3>

              <div className="info ">
                <div className="icon-img ">
                  <Image
                    width={40}
                    height={40}
                    src="/assets/images/home/cooment.svg"
                    alt="cooment "
                  />
                </div>
                <strong>Visit The Office</strong>
                <div className="info-text ">
                  <p> 102 Taily End Rd, NY</p>
                </div>
              </div>
              <div className="info ">
                <div className="icon-img ">
                  <Image
                    width={40}
                    height={40}
                    src="/assets/images/home/cooment.svg"
                    alt="cooment "
                  />
                </div>
                <strong>Send Email</strong>
                <div className="info-text ">
                  <p>
                    <a href="mailto:info@domain.com"> info@domain.com</a>
                  </p>
                </div>
              </div>
              <div className="info ">
                <div className="icon-img ">
                  <Image
                    width={40}
                    height={40}
                    priority
                    src="/assets/images/home/phone.svg"
                    alt="phone "
                  />
                </div>
                <strong>Phone Inquiry</strong>
                <div className="info-text ">
                  <p>
                    <a href="# "> (222) 303 4500 </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-elm ">
              <div className="contact ">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="# ">
                      <i className="fas fa-arrow-right "></i> About StrnixStrnix
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fas fa-arrow-right "></i> News Blog
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fas fa-arrow-right "></i> Careers
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fas fa-arrow-right "></i> Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fas fa-arrow-right "></i> Meet Our Team
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fas fa-arrow-right "></i>{' '}
                      TestimonialsTestimonials
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-elm ">
              <h3>Our Services</h3>
              <div className="contact ">
                <ul>
                  <li>
                    <a href="# ">
                      <i className="fas fa-arrow-right "></i> Stallation &
                      Monitoring{' '}
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fas fa-arrow-right "></i> After Sales
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fas fa-arrow-right "></i> Free Replacemrnt
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fas fa-arrow-right "></i> Warrenty Claims
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fas fa-arrow-right "></i> Energy Equipments
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-elm ">
              <div className="contact-logo ">
                <Logo option="footer" />

                <p>
                  Integer lobortis sem consequat imperdiet In nulla viverra ut
                  lorem ut, dapibus conse etur diam. Nun bibendum diet condiment
                  sed ipsum duis lacinia.
                </p>
                <SocialLink />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer clearfix ">
        <div className="footer-container clearfix ">
          <div className="footer-left ">
            <span>&#169; Copyright 2019 by </span>
            <span>
              {' '}
              <a href="# ">
                <strong>Strnix</strong>
              </a>
            </span>
          </div>
          <div className="footer-right ">
            <a href="# ">Privacy Policy </a>
            <span> | </span>
            <a href="# "> Sitemap </a>
            <span> | </span>
            <a href="# "> Terms & Conditions</a>
          </div>
        </div>
        <div className="go-back">
          <span onClick={goToTop}>
            <i className="fas fa-arrow-up "></i>
          </span>
        </div>
      </div>
    </footer>
  );
}
