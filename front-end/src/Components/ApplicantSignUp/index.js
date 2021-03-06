import React, { useContext } from "react"
import { useParams, useHistory } from "react-router-dom"
import './index.css'
import { Card, Col, Button, Form, Input, Checkbox, message } from 'antd';
import {
    Link,
} from "react-router-dom";
import axios from "axios"
import { AuthContext } from "../../Context/AuthContext";

const ApplicantSignUp = () => {
    const history = useHistory()
    const [form] = Form.useForm()
    const { setApplicantUser, setApplicantToken } = useContext(AuthContext)
    const { job } = useParams()

    const validate = async () => {
        try {
            const validateResult = await form.validateFields()

            signup(validateResult)
        } catch (errorInfo) {
            message.error("Please fill out all of the required fields")
        }
    }

    const signup = async (fields) => {
        try {
            // sign up the user
            const result = await axios.post("/applicant/user/register", {
                email: fields.email,
                password: fields.password,
            })
            setApplicantUser(result.data.user)
            setApplicantToken(result.data.token)
            localStorage.setItem("applicantToken", result.data.token)

            if (job == "landing") {
                history.push(`/`)
            } else {
                history.push(`/application/${job}`)
            }
        } catch ({ response }) {
            message.error(response.data)
        }
    }

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
                        <p className="NoAccount">Already have an account? <Link to={`/application/signin/${job}`}>Sign In</Link></p>
                    </div>
                        <Form
                            {...layout}
                            form={form}
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Set Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input a password',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                label="Confirm Password"
                                name="confirmPassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                          if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                          }
                                          return Promise.reject(new Error('The two passwords must match'));
                                        },
                                    })
                                ]
                                }
                            >
                                <Input.Password />
                            </Form.Item>
                        </Form>


                    <Button type="primary" block onClick={validate}>
                        Continue with Copply
                    </Button>
                </Card>
            </Col>
        </div>
    );
}

export default ApplicantSignUp