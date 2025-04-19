---

# Admin and User Journey Project

This project consists of two parts: **Admin Journey** and **User Journey**.

- **Admin Journey** is built using **React.js**.
- **User Journey** is built using **Next.js**.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Running the Projects](#running-the-projects)
3. [Folder Structure](#folder-structure)
4. [Description](#description)

---

## Project Setup

To get started, you need to install the dependencies for both the **React.js** and **Next.js** projects. 

1. **Navigate to each project folder**:
   - Go to the `admin-journey` folder for the React project.
   - Go to the `user-journey` folder for the Next.js project.

2. **Install Dependencies**:
   For each project, run the following command:

   ```bash
   npm install
   ```

   This will install all the necessary dependencies for both the React.js and Next.js applications.

---

## Running the Projects

### 1. Admin Journey (React.js)

To run the **Admin Journey** (React.js) project:

1. Navigate to the `admin-journey` directory.
2. Run the following command:

   ```bash
   npm start
   ```

   This will start the React development server, and you can access the admin interface via `http://localhost:3000`.

### 2. User Journey (Next.js)

To run the **User Journey** (Next.js) project:

1. Navigate to the `user-journey` directory.
2. Run the following command:

   ```bash
   npm run dev
   ```

   This will start the Next.js development server, and you can access the user journey interface via `http://localhost:3001`.

---

## Folder Structure

Here’s a simple breakdown of the folder structure:

```
/project-root
├── /admin-journey         # React.js Admin Journey
│   ├── /src
│   ├── /public
│   ├── package.json
│   └── README.md
│
└── /user-journey          # Next.js User Journey
    ├── /pages
    ├── /components
    ├── package.json
    └── README.md
```

- `/admin-journey`: This folder contains the React.js project for the admin interface.
- `/user-journey`: This folder contains the Next.js project for the user journey interface.

---

## Description

The project is designed to handle **Admin** and **User** journeys separately:

1. **Admin Journey (React.js)**: 
   - The admin login and admin dashboard are created using React.js.
   - This allows the admin to manage the system and view analytics or other required information.

2. **User Journey (Next.js)**:
   - The user journey was initially started with Next.js, and it focuses on the **user login** and related features.
   - The user can log in and interact with the system based on the user role and permissions.

### Evolution of the Project
- Initially, both **Admin** and **User** interfaces were planned to be built using **Next.js**.
- After feedback from the project manager, the decision was made to use **React.js** for the **Admin Journey**.
- The **User Journey** continues to use **Next.js** because it was already in progress when the change in direction was made.

---

## Notes

- Make sure you have Node.js and npm installed on your system to run both projects.
- You can modify the default ports if they conflict with other services on your machine.

---
