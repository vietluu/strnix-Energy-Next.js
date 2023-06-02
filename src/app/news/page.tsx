'use client';
import { Breadcrumb } from 'antd';
import { Breadcrumbs } from '../../components/breadcrums/breadcrumMap';
export default function News() {
 
  return (
    <>
      <div
        className='page-baner banner-title'
        style={{
          backgroundImage: 'url(/assets/images/services/banner-bg-2.jpg)',
        }}
       
      >
        <div className='mt-11 pt-8 font-weight-bold'>
          <h5>
              <Breadcrumb separator='→' items={Breadcrumbs('Blog classic')}/>
          </h5>
          <h1 className='text-6xl mt-4'>Latest News</h1>
        </div>
      </div>
      <div className='news-container'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='news-box'>

              </div>
               
            </div>
            <div className='col-lg-4 col-md-12'>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
