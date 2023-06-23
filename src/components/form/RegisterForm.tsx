import React, { useEffect, useRef } from 'react';
import { Rate, Tabs, Form, Input, Select, notification, message } from 'antd';
import { emailValiate, phoneValidate } from '@/utils/validate';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { sendForm } from '@/redux/slices/formSlice';
import CustomBtnHover from '../buttonCustom/CustomBtnHover';
export default function RegisterForm() {
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
    <div className="register-cleaner">
      <div className="auto-container">
        <div className="panel ">
          <span className="flaticon-solar-panel"></span>
        </div>
        <div className="row clearfix row-text">
          <div className="row-content col-xl-4 col-lg-12 col-md-12 ">
            <h2 data-aos="fade-right">
              {"We're Dedicated To "}
              <br /> Build A Cleaner Future
            </h2>
          </div>
          <Form
            ref={formRef}
            onFinish={(value: any) => sendFormRequest(value)}
            onFinishFailed={(err: any) => console.log(err)}
            className="form col-xl-8 col-lg-12 col-md-12 "
          >
            <div className="elm-form row clearfix">
              <div className="form-group  inputform col-lg-4 col-md-6 col-sm-12">
                <Form.Item name="name">
                  <Input
                    id="text"
                    prefix={<i className="fas fa-user "></i>}
                    placeholder="Your Name "
                  />
                </Form.Item>
              </div>

              <div className=" form-group inputform col-lg-4 col-md-6 col-sm-12">
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
                  <Input
                    prefix={<i className="fas fa-envelope-open"></i>}
                    id="text"
                    placeholder="Your Email "
                  />
                </Form.Item>
              </div>
              <button className="form-group  btnbox inputform col-lg-4 col-md-6 col-sm-12">
                <CustomBtnHover text="Get More Info" />
              </button>
            </div>
            <div className="noti">
              <p>Thank you for your message. It has been sent.</p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
