'use client';
import { useAppDispatch} from '@/redux/hooks';
import { getData, getPost } from '@/redux/slices/newSlice';
import React from 'react';
import Image from 'next/image';
import NewsSkeleton from '@/components/skeleton/NewsSkeleton';

interface slug {
  params: {
    slug: string;
  };
}
interface post {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  content: string;
  tag: string;
  createAt: Date;
}
interface props {
  data: [
    {
      id: number;
      title: string;
      slug: string;
      image: string;
      category: string;
      content: string;
      tag: string;
      createAt: Date;
    }
  ];
}
export default function Detail(props: props) {
  const { data } = props;
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="news-box">
        {data.length > 0 ? (
          data.map((value: post) => (
            <div className="news-box__inner px-3 mb-[40px]">
              <div className="pb-[50px]">
                <Image
                  priority
                  fill
                  className="aspect-[13/9]"
                  src={value.image}
                  alt="img"
                />
                <h2 className="text-3xl font-bold p-[20px]">{value.title}</h2>

                <p className=" p-[20px]">{value.content}</p>
                <div className="d-flex items-center p-[20px] ">
                  <span className="ml-0 text-[#999999] font-bold cursor-pointer hover:text-[green]">
                    {value.category}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <NewsSkeleton />
        )}
      </div>
    </>
  );
}
