import React from "react"
import './index.css'
import { Card, Col, Button, Form, Input,Checkbox } from 'antd';
import {
    Link,
  } from "react-router-dom";

const ApplicantSignUp = () => {
    const layout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 24,
        },
    };
    return (
        <div className="Applicant-SignUp-Card">
            <Col span={24}>
                <Card>
                    <div className="Applicant-SignUp-Words">
                        <h3>Express Apply</h3>
                        <p className="NoAccount">Already have an account? <Link to="/application/signin">Sign In</Link></p>
                    </div>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}                          
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Set Password"
                                name="Set password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Set Password',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                label="Confirm Password"
                                name="Confirm Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Confirm Password',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Form> 


                    <Button type="primary" block>
                        Continue with Copply
                    </Button>
                </Card>
            </Col>
        </div>
    );
}

export default ApplicantSignUp