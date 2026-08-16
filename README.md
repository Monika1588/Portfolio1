# MERN Portfolio

This project is a full-stack personal portfolio application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It showcases projects, skills, and portfolio information, and includes contact and feedback features for visitors.

## How it Works

1. **Frontend:** Built with React.js using reusable components, responsive layouts, and interactive UI elements.
2. **Backend:** Uses Node.js and Express.js to build RESTful APIs and handle application logic.
3. **Database:** Uses MongoDB Atlas to store project information, contact submissions, and visitor feedback.
4. **API Integration:** The React frontend communicates with the Express backend through REST APIs and handles asynchronous operations.
5. **Architecture:** The backend follows the MVC architecture to organize routes, controllers, models, and application logic.
6. **Deployment:** The frontend is deployed on Vercel and the backend is deployed on Render, with environment variables configured for the live environment.

## Features

* Responsive personal portfolio.
* Projects showcase.
* Skills and technologies section.
* Contact form.
* Visitor feedback feature.
* Project and contact data management.
* Feedback storage using MongoDB Atlas.
* RESTful API integration.
* Reusable React components.
* Responsive user interface.

## Setup and Usage

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/mern-portfolio.git
```

2. **Install frontend dependencies:**

```bash
cd frontend
npm install
```

3. **Install backend dependencies:**

```bash
cd ../backend
npm install
```

4. **Configure Environment Variables:** Create a `.env` file in the backend directory and add your MongoDB Atlas connection string and other required configuration values.

5. **Run the Backend:**

```bash
npm run dev
```

6. **Run the Frontend:** Open another terminal, navigate to the frontend directory, and run:

```bash
npm run dev
```

7. Open the application using the local URL provided by the React development server.

## Technologies Used

* React.js
* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* REST APIs
* JavaScript
* HTML5
* CSS3
* Git & GitHub

## Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

Environment variables are configured separately for development and production.

## Challenges

During development, the main challenges included:

* Resolving MongoDB Atlas connection issues.
* Debugging API communication between React and Express.
* Managing environment variables across different environments.
* Handling frontend and backend integration issues.
* Resolving deployment and production bugs.

## What I Learned

This project provided practical experience in building a full-stack MERN application, developing RESTful APIs, following MVC architecture, working with MongoDB Atlas, integrating frontend and backend, managing environment variables, debugging application issues, and deploying a complete application online.
