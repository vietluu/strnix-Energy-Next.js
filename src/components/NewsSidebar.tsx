'use client'
import React, { useRef } from 'react';
import { Form, Input, Pagination } from 'antd';
import {useRouter } from 'next/navigation';

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
export default function NewsSidebar(props: any) {
  const formRef = useRef(null)
  const pathName = useRouter()
  const { data } = props;
  
  return (
    <div className="col-lg-4 col-md-12">
      <div className="news-search">
        <Form ref={formRef} >
          <Form.Item name="keyword">
            <Input.Search placeholder="enter keyword" onSearch={(value) => {
              pathName.push(`news?title=${value}`),
                //@ts-ignore
              formRef?.current?.resetFields()
            }} />
          </Form.Item>
        </Form>
      </div>
      <div className="p-3">
        <div className="catetgory">
          <h1 className="text-3xl font-bold">Categories</h1>
          <div className="bottomtitle clearfix ">
            <span className="line "></span>
            <span className="dottitle "></span>
            <span className="dottitle "></span>
            <span className="dottitle "></span>
          </div>
          <ul className="list-disc p-3">
            {data.length > 0 &&
              data.map((data: news) => (
                <li
                  onClick={e => pathName.push(`news?category=${data.category}`)}
                  className="font-xl cursor-pointer hover:text-lime-400 py-2"
                >
                  {data.category}
                </li>
              ))}
          </ul>
        </div>
        <div className="tag">
          <h1 className="text-3xl font-bold">Tags</h1>
          <div className="bottomtitle clearfix ">
            <span className="line "></span>
            <span className="dottitle "></span>
            <span className="dottitle "></span>
            <span className="dottitle "></span>
          </div>
          <div className="d-flex p-1 flex-row flex-wrap">
            {data.length > 0 &&
              data.map((data: news) => (
                <span
                  onClick={e => pathName.push(`news?tag=${data.tag}`)}
                  className="ml-0 mr-2 my-1 border border-black px-4 justify-start d-block  font-xl cursor-pointer hover:text-lime-400 py-2"
                >
                  {data.tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
