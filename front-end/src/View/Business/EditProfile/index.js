import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Upload, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd'; 
import axios from 'axios'; 

//layout of the form item
const layout = {
  wrapperCol: {
    span: 14,
    offset: 5
  },
};

/*
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
*/

const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

const BusinessEditProfile = () => {
  const [fileList, setFileList] = useState([])
  const onFinish = async(values) => {
    console.log(values);
    

    let formData = new FormData(); 
    formData.append("logo", fileList[0].originFileObj)
    formData.append("description", values.user.description)
    formData.append("industry", values.user.industry)

    await axios.post("http://localhost:4000/updateprofile", formData)
  };

  const handleUpload = ({ fileList }) => {
    setFileList(fileList)
  }

  return (
    <div class="profile-main">
        <Row>
            <Col span={2}>
                <Button type="link" href="/business/dashboard" size = "middle" block="true">
                    <p>Back to Dashboard</p>
                </Button>
            </Col>
        </Row>
        <Row>
            <Col span = {10} offset = {8}>
                <h1>Tell us about your company</h1>
            </Col>
        </Row>
        
        <Form {...layout} name="edit-profile" onFinish={onFinish}>

        <Row><Col offset={5}>Description - This info will be on all job postings </Col></Row>
        <Form.Item name={['user', 'description']}>
            <Input.TextArea rows={4}/>
        </Form.Item>

        <Row><Col offset={5}>What industry are you in? </Col></Row>
        <Form.Item name={['user', 'introduction']}>
            <Input.TextArea rows={4}/>
        </Form.Item>

        <Row><Col offset={5}>Upload a logo</Col></Row>
        <Form.Item>
            <Form.Item name="logo" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name="files" onChange={handleUpload} beforeUpload={() => false}>
                <p className="ant-upload-drag-icon">
                <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
            </Form.Item>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
            <Button type="primary" htmlType="submit" block="true" size="middle">
            Save Changes
            </Button>
        </Form.Item>

        </Form>
    </div>
  );
};

export default BusinessEditProfile