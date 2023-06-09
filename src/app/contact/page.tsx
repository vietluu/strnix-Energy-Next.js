'use client';
import React, {useRef} from 'react';
import Image from 'next/image';
import {Button, Form, Input, Breadcrumb} from 'antd';
import { emailValiate } from '@/utils/validate';
import Link from 'next/link';
import CustomBtnHover from '@/components/buttonCustom/CustomBtnHover';
import { Breadcrumbs } from '../../components/breadcrums/breadcrumMap';
export default function Contact() {
  
  const onFinish = (value:any) => {
  
    console.log('Success:', value);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
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
          <Breadcrumb separator='→' items={Breadcrumbs('Contact US')}/>
          </h5>
          <h1 className='text-6xl mt-4'>Contact Us</h1>
        </div>
      </div>
      <div className='strnix-contact py-[80px]'>
        <div className='container-xl'>
          <div className='row flex-wrap text-center'>

              <div className='contact-box col-sm-12 col-md-6 col-lg-4'>
               
              <div className='inner-box'>
                
              <Image
                        width={40}
                        height={40}
                      
                        src='/assets/images/home/cooment.svg'
                        alt='cooment '
                      />
                
                <strong>Visit The Office</strong>
               
                  <p> 102 Taily End Rd, NY</p>
                </div>
              </div>
              <div className='contact-box col-sm-12 col-md-6 col-lg-4'>
               
              <div className='inner-box'>
              <Image
                        width={40}
                        height={40}
                    
                        src='/assets/images/home/cooment.svg'
                        alt='cooment '
                      />
                
                <strong>Send Email</strong>
               
                  <p>
                    <a href='mailto:info@domain.com'> info@domain.com</a>
                  </p>
               </div>
              
              </div>
              <div className='contact-box col-sm-12 col-md-6 col-lg-4'>
               
              <div className='inner-box'>
                 
              <Image
                 width={40}
                 height={40}
                 priority
                 src='/assets/images/home/phone.svg'
                 alt='phone '
               />
               
                <strong>Phone Inquiry</strong>
               
                  <p>
                    <a href='# '> (222) 303 4500 </a>
                  </p>
               </div>
              
              </div>
           
           
          </div>
          

            </div>
      </div>
      <div className='form-contact pt-[40px] pb-[80px]'>
        <div className='container-xl'>
          <div className='row px-2'>
            <div className='col-md-8 col-sm-12 py-[30px] bg-[#84b040] p-md-[30px] '>
            <div className='elmif px-[20px] mt-[20px] ' data-aos='fade-right'>
             
              <h2>{"Don’t Hesitate To "} <br/>  Contact Us</h2>
             
              <div className='bottomtitle clearfix'>
                <span className='line '></span>
                <span className='dottitle '></span>
                <span className='dottitle '></span>
                <span className='dottitle '></span>
              </div>
              </div>
              <Form   className='py-[30px] text-left' onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <div className='row px-3 '>
                <div className='col-sm-12 col-md-6 mt-3' >
                  <Form.Item
                      name='name'
                      rules={[{
                        required: true,
                        message:'The field is required.'
                      }]}
                  >
                    <Input placeholder='Your Name'/>
                    </Form.Item>
                </div>
                <div className='col-sm-12 col-md-6 mt-3'>
                    <Form.Item name='email'
                         rules={[{
                          required: true,
                           validator: (_, value) => {
                             if (!value || value.trim() === '') {
                              return Promise.reject('The field is required.');
                             }
                             if (!emailValiate(value)) {
                               return Promise.reject('The e-mail address entered is invalid.');
                             }
                             return Promise.resolve();
                          }
                      }]}
                    >
                    <Input placeholder='Email'/>
                    </Form.Item>
                  </div>
                </div>
                <div className='col-12 py-3'>
                  <Form.Item name='subject'
                    rules={[{
                      required: true,
                      message:'The field is required.'
                  }]}
                  >
                    <Input placeholder='Subject' className='w-full'/>
                    </Form.Item>
                </div>
                <div className='col-12 py-3'>
                  <Form.Item name='message'>
                    <Input.TextArea cols={100} rows={5}  style={{ height: 120, resize: 'none' }}  placeholder='Message'/>
                    </Form.Item>
                  </div>
                <div className='col-sm-12 col-md-4 m-0 py-3'>
              
                  <Button htmlType='submit' className='border-none w-full p-0'>
                  <CustomBtnHover text='Send request'/>
                    </Button>
                
                  </div>
              </Form>
            </div>
            <div className='form-banner col-md-4 col-sm-12'>
              <div className='banner-inner text-center'>
                <p >
                Call Us 24/7 For Support
                </p>
                <div className='tel-career'>
                  <Link className='d-inline-flex items-center' href='tel: (+84)19008198'>

                    <Image src='/assets/images/home/phone.svg' width={40} height={40} alt='phone' />
                    <span className=' pl-2 text-2xl font-weight-bolder '> (222) 303 4500</span>
                  </Link>
                </div>
                    </div>
            </div>
            </div>
          </div>
      </div>
      <div className='map'>
        <iframe src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Fafim%20Ng%C3%A3%20T%C6%B0%20S%E1%BB%9F,%2019%20Nguy%E1%BB%85n%20Tr%C3%A3i,%20Ng%C3%A3%20T%C6%B0%20S%E1%BB%9F,%20%C4%90%E1%BB%91ng%20%C4%90a,%20H%C3%A0%20N%E1%BB%99i,%20Vi%E1%BB%87t%20Nam+(my%20address)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed' className='w-full aspect-[21/9] max-sm:aspect-[4/3]'/>
      </div>
    </>
  );
}
