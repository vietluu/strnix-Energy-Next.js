'use client'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { getData, getPost } from '../../../redux/slices/newSlice'
import React, { useLayoutEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import BannerBreadcrumbs from '../../../components/banner/BannerBreadcrumbs'
import NewsSidebar from '../../../components/NewsSidebar'

interface slug{
    params: {
        slug:string
    }
}
interface post{
    id: number,
    title: string,
    slug: string,
    image: string,
    category: string,
    content: string,
    tag:string,
    createAt:Date
}
export default function NewDetail() {
    const dispatch = useAppDispatch()
    const params = useParams()
    const data = useAppSelector(state => state.newSlice.dataPost)
    const sideBarData = useAppSelector(state => state.newSlice.data)
    useLayoutEffect(() => {
        Promise.all(
            [
                dispatch(getPost(params.slug)),
                dispatch(getData())
            ]
        )
    }, [params.slug])
  return (
    <>
          <BannerBreadcrumbs
            //@ts-ignore
      title={data[0]?.title}
      url="/assets/images/services/banner-bg-2.jpg"
    />
    <div className="news-container">
      <div className="container-xl py-[100px]">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="news-box">
              {data.length > 0 &&
                data.map((value: post) =>
                  <div className='news-box__inner px-3 mb-[40px]'>
                    <div className="pb-[50px]">
                      
                      <Image priority fill className='aspect-[13/9]' src={value.image} alt='img' />
                      <h2 className='text-3xl font-bold p-[20px]'>{value.title}</h2>
                      
                      <p className=' p-[20px]'>{value.content}</p>
                      <div className='d-flex items-center p-[20px] '>
                      <span className='ml-0 text-[#999999] font-bold cursor-pointer hover:text-[green]'>{value.category}</span>
                      </div>
                    </div>
                  
                </div>)}
            </div>
          </div>
          <NewsSidebar data={sideBarData}/>
        </div>
      </div>
    </div>
  </>
  )
}
