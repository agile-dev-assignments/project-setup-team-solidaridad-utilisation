# Project Repository

[![Build Status](https://travis-ci.com/agile-dev-assignments/project-setup-team-solidaridad-utilisation.svg?branch=master)](https://travis-ci.com/agile-dev-assignments/project-setup-team-solidaridad-utilisation)

## Project Description

Copply is a web application that addresses the inefficiencies in the job application system. Traditionally when a potential applicant visits a company's online job application form, they are required to fill out many details about themselves (such as their name, address, work experience, education, etc.) that they have filled out countless times before. Copply aims to create a more seamless application process, where applicants can have their details auto-filled right when they open the application, reducing the headache they have wrestling with the spotty resume parsers and giving them more time to devote to answering company specific questions.

There are two sides to Copply that will allow this to happen: the business-side and the applicant-side. On the business-side, a company will create a company specific account and use the job application form builder to create a new application through Copply. On the applicant-side, an applicant can navigate to that newly created application to apply for the job. If the applicant has a Copply account, all of their details will be instantly auto-filled. If they do not have an account, they can easily make one so that in the future they can take advantage of the auto-fill for other job applications created through Copply.

Copply came to life when a group of college students grew frustrated with having to constantly fill out the same details over and over again for easily 50+ applications in one recruiting season. Some of these details were lengthy enough to the point it can take 10-15 min to just fill out simple information, which still left the possibility for errors and typos. There have been so many quality of life advancements in other fields (such as instant checkout for e-commerce sites), so why can't that be the case for the job market?

## Product Vision

Business
- Landing page
- Be able to see everyone who has applied to the position
- Create a form builder that works well and makes sense

Applicant
- Be able to fill out an application form without using Copply
- Sign up with Copply and then fill out application form
- Auto-fill details if already have a copply account
- Want to make this a very seamless process to show how effective it can be
(measure time it takes for someone manually filling out the form vs someone filling out with Copply)

## Setup Instructions
Frontend:
1. Navigate to the `front-end` directory and type in `npm install` to install the dependencies
1. Use `npm start` to start the front-end React server

Backend:
1. Navigate to the `back-end` directory and type in `npm install` to install the dependencies
1. Modify the `.env` within `back-end` to look like this:
    ```
    MONGO_URI=...
    JWT_KEY=...
    ```
1. Use `npm start` to start the back-end Express server using `nodemon`


## How to Contribute
Refer to: [CONTRIBUTING.md](./CONTRIBUTING.md)

## Core team
- Andrew Huang ([GitHub](https://github.com/ando-huang))
- Edward Zhu ([GitHub](https://github.com/EddieSource))
- Jay Li Quek ([GitHub](https://github.com/jayliquek))
- Jin Sim ([GitHub](https://github.com/jinsim95))
- Jonathan Ko ([GitHub](https://github.com/jonako99))
- Matthew Fan ([GitHub](https://github.com/mattfan00))

## Demo Link
- http://198.199.86.158:5000/
