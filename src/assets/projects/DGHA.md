The DGHA ([Dog Guide Handlers Australia](http://dgha.org.au/dgha/)) project was the final and largest project for my Software Development Diploma completed over the entirety of the second semester. The aim of the project was to create an app that allows dog guide handlers to show dog guide information to business owners if there is a misunderstanding and rate locations based on their accessibility to guide dogs.

## Team Members

This project was completed in a team of 4 and wouldn't be nearly as good without them:

- [Joseph Khai](https://github.com/josephkhaipi)
- [Lee Chu Yem](https://github.com/leechuyem)
- [Matthew Thorne](https://github.com/Thornie)
- [James Towers](https://github.com/jamtowers) (Hey that's me!)

---

# App Components
There where 3 applications created for this project:

- [Mobile App](https://github.com/leechuyem/dgha)
- [Backend API](https://github.com/jamtowers/DGHA-Backend)
- [Admin App](https://github.com/jamtowers/DGHA-Admin)

Note: The project was only ever supposed to be a prototype, so none of the components of the project are particularly ready for deployment, though we got them as close as we could.

---

## Mobile Application

[GitHub Repo](https://github.com/leechuyem/dgha)

The Mobile Application was the main product and received most the the development time as a result, It was built on flutter.

### Features
The app has two main sections:
- The Information section
  - Mainly intended to be shown to people if there was a misunderstanding
  - Included general information about dog guide handlers
  - Also Included laws for each state
  - Included menu to change language if the reader wasn't a native english speaker
- The Review section
  - Based on the google maps place API
  - Allowed user search for places and see reviews made by other on the app
  - Allowed a logged in user to add a review to a place
  - Allowed logged in user to add a complaint to a review if it's malicious

Users could only create an account if linked to a hidden page on the application, this was so only DGHA members could crate accounts through the sharing of this link.

### My Contributions

I was mainly tasked with working on the backend implementation of the project so I rarely touched the code on the mobile application, I was however still a part of the design a testing of the app, in particular I spent a lot of time doing accessibility testing on the app (Which was an important consideration for this project).

---

## Backend API
[GitHub Repo](https://github.com/jamtowers/DGHA-Backend)

The backend technically came in two parts, the review API which handled the review data and the identity server which handled the authorisation process.

### Review API

The Review API handled the communication between the database and the various applications, it was built on .net core 3.0 and handles authorisation via the identity server (see below).
The API also handled the requests to the Google places API and featured API documentation via Swagger.

### Identity Server

The Identity Server handled the authentication of users and helps handle authorisation for the Review API.
This is built on .net core 3.0 with the [Identity Server](https://identityserver.io/) Framework and that uses .net core's [Identity](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-3.0&tabs=visual-studio) to handle user management (Yes those names really did make it hard to talk about it)

### My Contributions

This is where most of my development time was spent so most of the backend is my code, the main exception to this is the google places API requests which Lee did the implementation for.

---

## Admin Application
[GitHub Repo](https://github.com/jamtowers/DGHA-Admin)

The admin application was thrown in at the end of the project as a demonstration of what is possible to do with the system (it wasn't initially part of the scope but we had time so ¯\\\_(ツ)\_/¯).
The App was build on Angular and used [oidc-client](https://www.npmjs.com/package/oidc-client) to handle login and authentication through Identity server, The primary purpose of the app was as a moderation system for the reviews.

### Features

- login Authentication
- View and delete reviews
- View complaints and change their status
- All the general Angular Goodness
  - SPA
  - Lazy loading

### My Contributions

When this application was added to the project the rest of the system was more or less done, it just needed some touching up and there wasn't really much else for me to do, so we decided we would add on a small administration app for me to put together as I wasn't familiar enough with flutter to help them in any meaningful way, so this app was primarily developed by me, though the team did help with some testing design and a couple of small features along the way as always.
