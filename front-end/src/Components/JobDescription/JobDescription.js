import React from "react"
import {
    Typography,
    Col,
    Descriptions,
    Space
} from "antd"
import Title from "antd/lib/skeleton/Title";


const JobDescription = (props) => {
    const {Title} = Typography;
    return (
        <div>
            <Col span={24}>
                <div layout="vertical">
                    <Space direction="vertical" size="small">
                        <Title level={3}>Software Engineer</Title>
                        <div className="company">Amazon</div> 
                    </Space>
                    
                    <Descriptions title="Job Description">
                        <p>This is a job.</p>
                    </Descriptions>
                    <Descriptions title="About Company">
                        <p>This is a company description.</p>   
                    </Descriptions>
                    <Descriptions title="Job Location">
                        <p>This is a Job Location</p>       
                    </Descriptions>
                    <Descriptions title="Desired Skills">
                        <p>This is a Desired Skills</p>
                    </Descriptions> 
                </div>   
            </Col>
        </div>
    )
}

export default JobDescription