#### Production

- ProdURL endpoint: https://jobs-api-pd07.onrender.com

## Routes / How To Use

- Register user: ProdURL/api/v1/auth/register (POST)
- Login user: ProdURL/api/v1/auth/login (POST)
- Create job: ProdURL/api/v1/jobs (POST)
- Get all jobs: ProdURL/api/v1/jobs (GET)
- Get single job: ProdURL/api/v1/jobs/:jobId (GET)
- Update job: ProdURL/api/v1/jobs/:jobId (PATCH)
- Delete job: ProdURL/api/v1/jobs/:jobId (DELETE)

Hosted on render.com (initial deployment: 13-Dec-24)

#### Project Setup

In order to spin up the project locally, in the root create .env with these two variables, with your own values.

MONGO_URI
JWT_SECRET
JWT_LIFETIME

After that run this command

```bash
npm install && npm start
```

Note: for better local dev experience, change the start script command in package.json to `nodemon app.js `

#### Database Connection

1. Import connect.js
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value

#### Routers

- auth.js
- jobs.js

#### User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### Login User

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

#### Mongoose Errors

- Validation Errors (required property in schema)
- Duplicate (Email - unique property in schema)
- Cast Error (when id syntax doesn't match what mongoose is looking for)

#### Security

- helmet (sets various http headers to prevent numerous attacks)
- cors (ensures our api is accessible from other domains)
- xss-clean (santizes user input in req.body, req.query, req.param and protects from cross-site scripting attack)
- express-rate-limit (limit the amount of request the user can make)
