# College ERP 

Inspired by the need for efficient student management in colleges, this ERP system provides a centralized platform for course enrollment and user authentication. The goal was to create a modern, responsive web application that solves real-world educational challenges.

## Description
A Node.js backend for a College ERP system, handling user registration and login with MongoDB Atlas and Mongoose.

### Features
- User authentication (register/login)
- MongoDB integration
- Express.js APIs

### Tech Stack
- Node.js, Express.js, Mongoose, Nodemon

## Installation
1. Clone: `git clone https://github.com/YOUR_USERNAME/college-erp-backend.git`
2. Navigate: `cd college-erp-backend/server`
3. Install: `npm install`
4. Create `.env` in `server/` with:
DB_URI=mongodb+srv://yourusername:yourpassword@cluster0.3mrhtmq.mongodb.net/college_erp?retryWrites=true&w=majority&appName=Cluster0
(Set up your own MongoDB Atlas cluster: https://www.mongodb.com/docs/atlas/getting-started/)
5. Whitelist your IP in MongoDB Atlas.

## Running
1. Run: `npm run dev`
2. Server runs on `http://localhost:3000`
3. Test endpoints with Postman (e.g., POST `/register`).

## Troubleshooting
- MongoDB errors? Check IP whitelist and DB_URI.
- Node.js v14+ required.
