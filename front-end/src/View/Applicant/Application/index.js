import React, { useState, useEffect, useContext }  from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../../../Context/AuthContext"

import ApplicationForm from "../../../Components/ApplicationForm"
import ApplicantHeader from "../../../Components/ApplicantHeader"
import JobDescription from "../../../Components/JobDescription/JobDescription"
import CompanyLogo from "../../../Components/CompanyImageHeader"
import ExpressApply from "../../../Components/ExpressButton"
import NotFound from "../../../Components/NotFound"

import "../index.css"

import {
  Spin
} from "antd"

const Application = () => {
  const [application, setApplication] = useState(null)
  const [loading, setLoading] = useState(true)
  const { applicantUser } = useContext(AuthContext)
  const { company, job } = useParams()
  const [companyDetails, setCompanyDetails] = useState(null)


  useEffect(async () => {
    // get the application details
    try {

      const result = await axios.get(`https://6050e7e35346090017670c11.mockapi.io/applications/${job}`)
      const resultCompany = await axios.get(`http://localhost:4000/company/${company}`)

      setLoading(false)
      console.log(result.data)

      setCompanyDetails(resultCompany.data)

      if (result.data) {
        setApplication(result.data)
      }
    } catch(err) {
      // cannot retrieve application
      setLoading(false)
    }
  }, [])

  return (
    <>
      <div className="header">
        {/* Application Header */}
        {<ApplicantHeader />}
      </div>

      <div className="applicant-main">
        <div className="application">
          {!loading && application && companyDetails ?
          <>
            {/* Put job description here */}

            <JobDescription
              company={companyDetails}
              details={application}
            />

            {/* Form for application */}

            {/* Only show express apply button when not logged in */}
            {!applicantUser ? <ExpressApply /> : "" }

            <ApplicationForm
              fields={application ? application.fields : []}
              extraQuestions={application ? application.extraQuestions : []}
            />
          </>
          : "" }

          {!loading && !application ?
          <NotFound />
          : "" }

          {loading ?
          <div className="loading">
            <Spin />
          </div>
          : "" }
        </div>
      </div>
    </>
  )
}

export default Application