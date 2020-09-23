# ca-application-website

1. [Heroku link](#heroku-link)
2. [Figma link](#figma-link)
3. [Problem](#problem)
4. [User Journey](#user-journey)
5. [User Story ](#user-story)
6. [Database Schema](#database-schema) 
7. [How to run the project?](#how-to-run-the-project?)
8. [Used Technologies](#used-technologies)
9. [Working Group](#working-group)

## Heroku Link
https://ca-application-website.herokuapp.com/

## Figma Link

Checkout the Design
[HERE](https://www.figma.com/file/gemoeKwpCEDYvrfQHq93lo/CA-application-system?node-id=0%3A1)
:sunglasses:

## Problem

The old way -> https://gazaskygeeks.com/code-academy-application-gaza/ The
system is trying to automate the registration steps for the Code Academy where
the steps right now as follow :

- fill up the first step with the basic info
- The applicant receives an email explaining the basic requirements and the next
  steps
- Through the email, you will get a link to sign up for the next step and to
  fill up the basic accounts(Github, freecodecamp,...)
- Then after submitting the second form, the applicant receives a random
  technical task to complete for his application. And after this, they should
  come to take an on-site tech test.

---

## Solution

We found that allocating requirements and registration steps on one spot on a
website would help reducing the distraction level of many applicants. In our
website, we make this possible by signing up into a personal account that
contains the required application steps from each applicant to fill as:
(personal info,Typing task,(freecodeCamp, github, codeWars) accounts, technical
tasks) and finally submitting them at the end. The applicant also will be
provided with his/her updated points that's been accomplished at freeCodeCamp,
codewars, and at Typing task on his/her personal account on our website.

## User Journey

By pressing on **Join us** CTA button at the main page, the user will be able to
signUp and go into his account. There, all the needed steps and tasks will
appear to him/her as a collapsible content and thus he/she can fill whatever
they want at any order, except of submitting collapsible section. Through the
account, the user may fill his/her personal data, and launching the learning
websites such as: (freeCodeCamp, codeWars, Typing class) as well as submitting
these accounts links in a collapsible too. The applicant will be able also to
discern the required projects that have to be done.

## User Story

Want to zoom in? :mag:. No Worriess! Check this
[Link](https://miro.com/app/board/o9J_kt1xB9M=/):pushpin:

## ![image](https://user-images.githubusercontent.com/56412800/80745585-2f32cd80-8b29-11ea-8052-fd1b8c29b8cf.png)

## Database schema

## ![GSGDatabase](https://user-images.githubusercontent.com/39573452/80102180-164f7880-857b-11ea-8e73-35a115d2dda4.jpg)

## How to run the project?

- Clone this repo to your local machine using terminal:

```shell
git clone https://github.com/GSG-K3/ca-application-website.git
```

- run these commands in your terminal:

```shell
 $ cd ca-application-website
 $ npm i
 $ cd client
 $ npm i
 $ cd ..
 $ npm run dev
```

---

## Used technologies:

**Front End**:

- [React Framework](https://reactjs.org/)
- [Material UI](https://material-ui.com/)

**Back End**:

- [Node js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

---

## Working Group

- **Team leader**
  - [Rand](https://github.com/RandInaim)
- **Team Leader (Refactoring)**
 - [Duaa'](https://github.com/DuaaH)
- **Team Reviewer**
  - [Greg](https://github.com/leggomuhgreggo)
- **Design Support**
  - [Haneen](https://www.behance.net/hanin_abu_rass)
- **Project Owner**
  - [Mohammad](https://github.com/MohammedYehia)
- **Team members**
  - [Banan](https://github.com/bananhaj)
  - [Duha](https://github.com/Duha96)
  - [Karmel](https://github.com/karmelyoei)
  - [Nujood](https://github.com/Jood80)
