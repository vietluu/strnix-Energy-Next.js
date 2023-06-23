'use client';
import Image from 'next/image';
import BannerBreadcrumbs from '@/components/banner/BannerBreadcrumbs';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getData } from '@/redux/slices/newSlice';
import { useLayoutEffect } from 'react';
import Link from 'next/link';
import NewsSidebar from '@/components/NewsSidebar';
import NewsSkeleton from '@/components/skeleton/NewsSkeleton';

interface news {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  content: string;
  tag: string;
  createAt: Date;
}

export default function News() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.newSlice.data);

  useLayoutEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      <BannerBreadcrumbs
        title="News Blog"
        url="/assets/images/services/banner-bg-2.jpg"
      />
      <div className="news-container">
        <div className="container-xl py-[100px]">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="news-box">
                {data.length > 0 ? (
                  data.map((value: news) => (
                    <div
                      key={value.id}
                      className="news-box__inner px-4 mb-[40px]"
                    >
                      <div className="pb-[50px]">
                        <Link href={`news/${value.slug}`}>
                          <Image
                            priority
                            fill
                            className="aspect-[13/9]"
                            src={value.image}
                            alt="img"
                          />
                          <h2 className="text-3xl font-bold p-[20px]">
                            {value.title}
                          </h2>
                        </Link>
                        <p className=" p-[20px] whitespace-nowrap overflow-hidden text-ellipsis">
                          {value.content}
                        </p>
                        <div className="d-flex items-center p-[20px] ">
                          <span className="ml-0 text-[#999999] font-bold cursor-pointer hover:text-[green]">
                            {value.category}
                          </span>
                          <Link
                            href={`news/${value.slug}`}
                            className="mr-0 text-blue-700 text-xl"
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <NewsSkeleton />
                  </>
                )}
              </div>
            </div>
            <NewsSidebar data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
