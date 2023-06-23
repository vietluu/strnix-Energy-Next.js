'use client';
import Fancybox from '@/components/FancyBox';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import '@fancyapps/ui/dist/fancybox/fancybox.css';

import BannerBreadcrumbs from '@/components/banner/BannerBreadcrumbs';

export default function Project() {
  return (
    <>
      <BannerBreadcrumbs
        title="Our Project"
        url="/assets/images/services/banner-bg-2.jpg"
      />

      <div className=" py-[90px]">
        <div className="container-lg">
          <Fancybox>
            <div className="row">
              <div className="project-block col-lg-4 col-md-6 col-sm-12 ">
                <div className="img-box max-lg:p-0 mb-2">
                  <Image
                    width={365}
                    height={537}
                    priority
                    src="/assets/images/projects/16.jpg"
                    alt="projects"
                  />

                  <div className="overlay">
                    <div className="over-inner text-center">
                      <div className="zoom-btn">
                        <Link
                          href="/assets/images/projects/16.jpg"
                          data-fancybox="gallery"
                        >
                          {' '}
                          <span className="fa fa-search-plus fa-2x"></span>
                        </Link>
                      </div>
                      <div className="title">
                        <h3 className="text-2xl hover:text-[#e85728]">
                          IMPACTFUL TECHNOLOGY
                        </h3>
                      </div>
                      <div className="description  text-[#e85728]">
                        CONSTRUCTION
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" project-block col-lg-4 col-md-6 col-sm-12 d-flex flex-col justify-between">
                <div className="img-box max-lg:p-0 mb-2">
                  <Image
                    width={365}
                    height={254}
                    priority
                    src="/assets/images/projects/17.jpg"
                    alt="projects"
                  />
                  <div className="overlay">
                    <div className="over-inner text-center">
                      <div className="zoom-btn">
                        <Link
                          href="/assets/images/projects/17.jpg"
                          data-fancybox="gallery"
                        >
                          {' '}
                          <span className="fa fa-search-plus fa-2x"></span>
                        </Link>
                      </div>
                      <div className="title">
                        <h3 className="text-2xl hover:text-[#e85728]">
                          IMPACTFUL TECHNOLOGY
                        </h3>
                      </div>
                      <div className="description  text-[#e85728]">
                        CONSTRUCTION
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img-box max-lg:p-0 mb-2">
                  <Image
                    width={365}
                    height={254}
                    priority
                    src="/assets/images/projects/18.jpg"
                    alt="projects"
                  />
                  <div className="overlay">
                    <div className="over-inner text-center">
                      <div className="zoom-btn">
                        <Link
                          href="/assets/images/projects/18.jpg"
                          data-fancybox="gallery"
                        >
                          {' '}
                          <span className="fa fa-search-plus fa-2x"></span>
                        </Link>
                      </div>
                      <div className="title">
                        <h3 className="text-2xl hover:text-[#e85728]">
                          IMPACTFUL TECHNOLOGY
                        </h3>
                      </div>
                      <div className="description  text-[#e85728]">
                        CONSTRUCTION
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" project-block col-lg-4 col-md-6 col-sm-12 d-flex flex-col justify-between">
                <div className="img-box max-lg:p-0 mb-2">
                  <Image
                    width={365}
                    height={254}
                    priority
                    src="/assets/images/projects/17.jpg"
                    alt="projects"
                  />
                  <div className="overlay">
                    <div className="over-inner text-center">
                      <div className="zoom-btn">
                        <Link
                          href="/assets/images/projects/17.jpg"
                          data-fancybox="gallery"
                        >
                          {' '}
                          <span className="fa fa-search-plus fa-2x"></span>
                        </Link>
                      </div>
                      <div className="title">
                        <h3 className="text-2xl hover:text-[#e85728]">
                          IMPACTFUL TECHNOLOGY
                        </h3>
                      </div>
                      <div className="description  text-[#e85728]">
                        CONSTRUCTION
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img-box max-lg:p-0 mb-2">
                  <Image
                    width={365}
                    height={254}
                    priority
                    src="/assets/images/projects/18.jpg"
                    alt="projects"
                  />
                  <div className="overlay">
                    <div className="over-inner text-center">
                      <div className="zoom-btn">
                        <Link
                          href="/assets/images/projects/18.jpg"
                          data-fancybox="gallery"
                        >
                          {' '}
                          <span className="fa fa-search-plus fa-2x"></span>
                        </Link>
                      </div>
                      <div className="title">
                        <h3 className="text-2xl hover:text-[#e85728]">
                          IMPACTFUL TECHNOLOGY
                        </h3>
                      </div>
                      <div className="description  text-[#e85728]">
                        CONSTRUCTION
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" project-block col-lg-4 col-md-6 col-sm-12 d-flex flex-col justify-between">
                <div className="img-box max-lg:p-0 mb-2">
                  <Image
                    width={365}
                    height={254}
                    priority
                    src="/assets/images/projects/17.jpg"
                    alt="projects"
                  />
                  <div className="overlay">
                    <div className="over-inner text-center">
                      <div className="zoom-btn">
                        <Link
                          href="/assets/images/projects/17.jpg"
                          data-fancybox="gallery"
                        >
                          {' '}
                          <span className="fa fa-search-plus fa-2x"></span>
                        </Link>
                      </div>
                      <div className="title">
                        <h3 className="text-2xl hover:text-[#e85728]">
                          IMPACTFUL TECHNOLOGY
                        </h3>
                      </div>
                      <div className="description  text-[#e85728]">
                        CONSTRUCTION
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img-box max-lg:p-0 mb-2">
                  <Image
                    width={365}
                    height={254}
                    priority
                    src="/assets/images/projects/18.jpg"
                    alt="projects"
                  />
                  <div className="overlay">
                    <div className="over-inner text-center">
                      <div className="zoom-btn">
                        <Link
                          href="/assets/images/projects/18.jpg"
                          data-fancybox="gallery"
                        >
                          {' '}
                          <span className="fa fa-search-plus fa-2x"></span>
                        </Link>
                      </div>
                      <div className="title">
                        <h3 className="text-2xl hover:text-[#e85728]">
                          IMPACTFUL TECHNOLOGY
                        </h3>
                      </div>
                      <div className="description  text-[#e85728]">
                        CONSTRUCTION
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" project-block col-lg-4 col-md-6 col-sm-12 d-flex flex-col justify-between">
                <div className="img-box max-lg:p-0 mb-2">
                  <Image
                    width={365}
                    height={254}
                    priority
                    src="/assets/images/projects/17.jpg"
                    alt="projects"
                  />
                  <div className="overlay">
                    <div className="over-inner text-center">
                      <div className="zoom-btn">
                        <Link
                          href="/assets/images/projects/17.jpg"
                          data-fancybox="gallery"
                        >
                          {' '}
                          <span className="fa fa-search-plus fa-2x"></span>
                        </Link>
                      </div>
                      <div className="title">
                        <h3 className="text-2xl hover:text-[#e85728]">
                          IMPACTFUL TECHNOLOGY
                        </h3>
                      </div>
                      <div className="description  text-[#e85728]">
                        CONSTRUCTION
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img-box max-lg:p-0 mb-2">
                  <Image
                    width={365}
                    height={254}
                    priority
                    src="/assets/images/projects/18.jpg"
                    alt="projects"
                  />
                  <div className="overlay">
                    <div className="over-inner text-center">
                      <div className="zoom-btn">
                        <Link
                          href="/assets/images/projects/18.jpg"
                          data-fancybox="gallery"
                        >
                          {' '}
                          <span className="fa fa-search-plus fa-2x"></span>
                        </Link>
                      </div>
                      <div className="title">
                        <h3 className="text-2xl hover:text-[#e85728]">
                          IMPACTFUL TECHNOLOGY
                        </h3>
                      </div>
                      <div className="description  text-[#e85728]">
                        CONSTRUCTION
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-block col-lg-4 col-md-6 col-sm-12 ">
                <div className="img-box max-lg:p-0 mb-2">
                  <Image
                    width={365}
                    height={537}
                    priority
                    src="/assets/images/projects/16.jpg"
                    alt="projects"
                  />
                  <div className="overlay">
                    <div className="over-inner text-center">
                      <div className="zoom-btn">
                        <Link
                          href="/assets/images/projects/16.jpg"
                          data-fancybox="gallery"
                        >
                          {' '}
                          <span className="fa fa-search-plus fa-2x"></span>
                        </Link>
                      </div>
                      <div className="title">
                        <h3 className="text-2xl hover:text-[#e85728]">
                          IMPACTFUL TECHNOLOGY
                        </h3>
                      </div>
                      <div className="description  text-[#e85728]">
                        CONSTRUCTION
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fancybox>
        </div>
      </div>
    </>
  );
}

