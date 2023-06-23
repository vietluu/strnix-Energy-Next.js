import React, { useEffect, useRef } from 'react';
import { Rate, Tabs, Form, Input, Select, notification, message } from 'antd';
import { emailValiate, phoneValidate } from '@/utils/validate';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { sendForm } from '@/redux/slices/formSlice';
import CustomBtnHover from '../buttonCustom/CustomBtnHover';
import Image from 'next/image';

export default function ContactForm() {
  const dispatch = useAppDispatch();
  const formRef = useRef(null);

  const sendFormRequest = async (value: any) => {
    const res = await dispatch(sendForm(value));
    if (res.payload) {
      //@ts-ignore
      formRef.current.resetFields();
      notification.success({
        message: 'Success',
        description:
          'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      });
    }
  };
  return (
    <div className="consultation-form">
      <div className="bgimg "></div>
      <div className="consultation-container ">
        <div className="elmif " data-aos="fade-right">
          <div className="title-text ">
            <p>
              WHO ARE STRNIX <i className="fas fa-bolt "></i>
            </p>
          </div>
          <h2>Get Free Consultation</h2>
          <div className="subtext ">
            <p>For Controling Your Energy Production</p>
          </div>
          <div className="bottomtitle2 ">
            <span className="line "></span>
            <span className="dottitle "></span>
            <span className="dottitle "></span>
            <span className="dottitle "></span>
          </div>
        </div>
        <div className="support ">
          <div className="form-request " data-aos="fade-up">
            <Form
              ref={formRef}
              onFinish={(value: any) => sendFormRequest(value)}
              onFinishFailed={(err: any) => {
                console.log(err);
              }}
            >
              <div className="row-input clearfix ">
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'The field is required',
                      },
                    ]}
                  >
                    <Input placeholder="Your Name " />
                  </Form.Item>
                </div>
                <div className="form-group  col-lg-4 col-md-6 col-sm-12">
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        validator: (_, value) => {
                          if (!value || value.trim() === '') {
                            return Promise.reject('The field is required.');
                          }
                          if (!emailValiate(value)) {
                            return Promise.reject(
                              'The e-mail address entered is invalid.'
                            );
                          }
                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <Input placeholder="Email " />
                  </Form.Item>
                </div>
                <div className="form-group  col-lg-4 col-md-12 col-sm-12">
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        validator: (_, value) => {
                          if (!value || value.trim() === '') {
                            return Promise.reject('The field is required.');
                          }
                          if (!phoneValidate(value)) {
                            return Promise.reject(
                              'The phone number entered is invalid.'
                            );
                          }
                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <Input placeholder="Phone " />
                  </Form.Item>
                </div>
                <div className="form-group  col-xl-12">
                  {/* <select className='custom-select-box ' name='field-name '>
                      <option>Subject / Discuss About Service</option>
                      <option>Installation</option>
                      <option>Maintenance</option>
                      <option>Replacement</option>
                    </select> */}
                  <Form.Item
                    name="subject"
                    rules={[
                      {
                        required: true,
                        message: 'The field is required',
                      },
                    ]}
                  >
                    <Select
                      placeholder="Subject / Discuss About Service"
                      options={[
                        {
                          value: 'Installation',
                          label: 'Installation',
                        },
                        {
                          value: 'Maintenance',
                          label: 'Maintenance',
                        },
                        { value: 'Replacement', label: 'Replacement' },
                      ]}
                      allowClear
                    />
                  </Form.Item>
                </div>
                <div className="linkbox ">
                  <button type="submit">
                    <CustomBtnHover text="Send Request" />
                  </button>
                </div>
              </div>
            </Form>

            <div className="response ">
              <p>Thank you for your messeage. It has been sent.</p>
            </div>

            <div className="textcontent ">
              <div className="sub-titletext ">
                <span className="txt ">OR IF YOU NEED QUICK ASSISTANCE</span>
              </div>
              <div className="info-support ">
                Call Us 24/7 For Customer Support At{' '}
                <span className="icon "></span>
                <a href="# ">
                  <Image
                    width={50}
                    height={50}
                    loading="lazy"
                    src="/assets/images/home/phone.svg"
                    alt="phone "
                  />
                  (222)-303-4500
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
