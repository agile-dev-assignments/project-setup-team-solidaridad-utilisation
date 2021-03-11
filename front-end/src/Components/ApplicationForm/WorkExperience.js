import React, { useState } from "react"

import {
  Row,
  Col,
  Button,
  Card,
  Alert,
} from "antd"

import {
  PlusOutlined,
  EditTwoTone
} from "@ant-design/icons"

import "./card.css"

import NewJobForm from "./NewJobForm"

const WorkExperience = (props) => {
  const [jobs, setJobs] = useState([])
  const [showForm, setShowForm] = useState(false)

  const showJobForm = () => setShowForm(true)

  const cancelJob = () => {
    setShowForm(false)
  }

  const addJob = (details) => {
    setJobs([...jobs, details])
    setShowForm(false)
    props.addJob(details)
  }

  return (
    <Row gutter={[16, 16]}>
      {jobs.length > 0 && (
        <Col span={24}>
          <Row gutter={[16, 16]}>
            {jobs && jobs.map(job => (
              <Col span={24}>
                <Card className="info-card" size="small">
                  <div><strong>{job.title} - {job.employer}</strong></div>
                  <div>{job.startDate} - {job.currentJob ? job.endDate : "Present"}</div>
                  <div>{job.description}</div>
                  <div class="edit"><EditTwoTone /></div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      )}
      {jobs.length == 0 && (
        <Col span={24}>
          <Alert message="No work experiences added" type="warning" showIcon />
        </Col>
      )}
      {/* {showForm && (
        <Col span={24}>
          <NewJobForm
            cancelJob={cancelJob}
            addJob={addJob}
          />
        </Col>
      )} */}
      <Col span={24}>
        <Button block type="text" onClick={showJobForm}><PlusOutlined />Add Work</Button>
      </Col>

      <NewJobForm
        showForm={showForm}
        cancelJob={cancelJob}
        addJob={addJob}
      />
    </Row>
  )
}

export default WorkExperience
