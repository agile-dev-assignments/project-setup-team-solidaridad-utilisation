# Guide to Contributing

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

## Roles
- Sprint 1:
  - Product Owner: Jay Li
  - Scrum Master: Andrew
- Sprint 2:
  - Product Owner: Matthew
  - Scrum Master: Jonathan
- Sprint 3:
  - Product Owner: Edward
  - Scrum Master: Jin
- Sprint 4:
  - Product Owner: Andrew
  - Scrum Master: Edward

## Rules of Contributing
- Every pull request should be related to an assigned task or bug
- Always do pull requests instead of merging directly
- Every feature has its own branch, and branches are merged at standups after discussing changes and deciding what features to add.

## Project Values / Team Norms
- Come to the meetings on time
    - Discuss meaningful content
    - 1 hour cap on team discussion meetings
- Support those who are learning
- Standups (3 days/week)
  - Monday 10:00 PM / Thursday 10:00 PM / Saturday 10:00 AM (EST)
  - Link [here](https://nyu.zoom.us/j/94685988260).
- Take notes for each meeting and post after it's done in Slack
- Transparency
    - As soon as a problem arises, report in Slack
- No shame in having a problem, we are here to help each other out

## Git Workflow
1. Commit your changes locally
2. Before pushing and making a pull request to the main branch, pull all of the recent changes to your branch so that you deal with merge conflicts on the local end instead of GitHub
3. Pull requests should contain a description indicating the task or issue it solves

## How Disagreements or Conflicts Should Be Resolved
- Transparency between contributors to prevent conflicts & misunderstandings as much as possible.
- If there is conflicting work, see how to split the ticket even more so that it doesn’t interfere with each other.
- When dealing with concerns and issues with the way the project is currently going, feel free to say it on Slack along with an objective reason why it will not work.
- All other team members can either react or start a thread off of that comment and we can decide from there.
- If we can’t decide something by ourselves, the scrum master should go to the Professor for more insight.
