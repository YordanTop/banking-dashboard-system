# Banking Dashboard System

A modern full-stack banking dashboard application built with **React**, **Express.js**, and **TypeScript**. The system provides secure authentication, account management, transaction tracking, financial statistics, and multilingual support.

> ⚠️ This project is currently under active development and new features are continuously being added.

---

## Features

### Authentication & Authorization

- User registration
- User login
- JWT authentication
- Cookie-based authentication
- Protected routes
- Authentication & authorization middleware
- Persistent authentication using React Context API

### Banking Dashboard

#### Statistics Page

Provides an overview of the user's financial information:

- Total balance across all accounts
- Monthly received money
- Monthly withdrawn money
- Account summaries
- Transfer summaries

#### Accounts Page

Manage and view banking accounts.

**Features:**

- View all accounts
- Open account details
- Transfer money between accounts
- View account transactions

#### Transaction History

Displays all user transactions including:

- Transfers
- Transaction details
- Account activity history

#### Profile Page

Displays complete user information:

- Personal details
- Banking information
- Account-related data

---

## Architecture

The backend follows the **Controller-Service Pattern**.

### Controllers

Responsible for:

- Handling HTTP requests
- Returning responses
- Request validation

### Services

Responsible for:

- Business logic
- Data processing
- Database interactions

This architecture improves:

- Maintainability
- Scalability
- Testability
- Separation of concerns

---

## Middleware

### Authentication & Authorization Middleware

Handles:

- JWT validation
- User authentication
- Protected route access

### Error Handling Middleware

Provides:

- Centralized error handling
- Consistent API responses
- Easier debugging

---

## Form Validation

The application uses **React Hook Form** for:

- Registration validation
- Login validation
- Better performance
- Improved developer experience

---

## Internationalization (i18n)

The application supports:

- 🇧🇬 Bulgarian
- 🇬🇧 English

Users can switch between languages seamlessly using **i18next**.

---

## Data Seeding

The backend includes a data seeding mechanism powered by **Faker**.

Mock data can be generated for:

- Users
- Accounts
- Transactions

This simplifies local development and testing.

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Context API
- React Hook Form
- React Router
- i18next

### Backend

- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT
- Cookie Parser

### Development Tools

- Faker
- ESLint
- Prettier

---

## Technology Documentation

### Frontend

- React - [https://react.dev](https://react.dev)
- TypeScript - [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)
- Vite - [https://vitejs.dev](https://vitejs.dev)
- Tailwind CSS - [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- Axios - [https://axios-http.com/docs/intro](https://axios-http.com/docs/intro)
- React Hook Form - [https://react-hook-form.com](https://react-hook-form.com)
- React Router - [https://reactrouter.com](https://reactrouter.com)
- i18next - [https://www.i18next.com](https://www.i18next.com)

### Backend

- Express.js - [https://expressjs.com](https://expressjs.com)
- MongoDB - [https://www.mongodb.com/docs](https://www.mongodb.com/docs)
- Mongoose - [https://mongoosejs.com/docs](https://mongoosejs.com/docs)
- JWT - [https://jwt.io/introduction](https://jwt.io/introduction)
- Cookie Parser - [https://expressjs.com/en/resources/middleware/cookie-parser.html](https://expressjs.com/en/resources/middleware/cookie-parser.html)

### Development

- Faker - [https://fakerjs.dev](https://fakerjs.dev)
- ESLint - [https://eslint.org/docs/latest](https://eslint.org/docs/latest)
- Prettier - [https://prettier.io/docs](https://prettier.io/docs)

---

## Environment Configuration

### Backend (`.env`)

Create a `.env` file inside the `server` directory:

```env
# Allowed client URL for cross-site requests (CORS)
CLIENT_URL=

# Express server host
EXPRESS_HOST_URL=

# Express server port
EXPRESS_HOST_PORT=

# MongoDB host URI
MONGO_DB_HOST_URI=

# MongoDB port
MONGO_DB_HOST_PORT=

# MongoDB database name
MONGO_DB_HOST_DATABASE=

# Secret key used to sign and verify JWT tokens
JWT_AUTH_SECRET_KEY=

# JWT expiration time in milliseconds
JWT_AUTH_DEFAULT_EXPIRATION_DATE=

# Enable or disable automatic mock data generation
MOCKING_DATA=

# Number of users to generate during data seeding
MOCKING_DATA_USER_QUANTITY=

# Number of accounts generated for each user
MOCKING_DATA_USER_ACCOUNTS=

# Number of transaction history records generated for each account
MOCKING_DATA_USER_TRANSACTION_HISTORY=
```

### Frontend (`.env`)

Create a `.env` file inside the `client` directory:

```env
# Backend API base URL used by the dashboard
VITE_DASHBOARD_URL=
```

## Installation

### Clone Repository

```bash
git clone https://github.com/YordanTop/banking-dashboard-system.git
cd banking-dashboard-system
```

### Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

## Running the Frontend

Navigate to the client folder:

```bash
cd client
```

Start the development server:

```bash
npm run dev
```

The application will be available through the Vite development server.

---

## Running the Backend

Navigate to the server folder:

```bash
cd server
```

Start the backend server:

```bash
npm run dev
```

> The development command is already preconfigured.

---

## Current Status

### Completed

- User authentication
- User registration
- JWT cookie authentication
- Authorization middleware
- Error handling middleware
- Statistics dashboard
- Accounts management
- Money transfers
- Transaction history
- User profile
- React Context authentication state
- Form validation
- Mock data seeding
- Multi-language support

### In Progress

- Additional banking operations
- Improved analytics
- Better UI/UX
- Testing coverage
- CI/CD integration
- Additional security improvements

---

## Author

**Yordan Topalov**

- GitHub: [YordanTop](https://github.com/YordanTop)
- Repository: [banking-dashboard-system](https://github.com/YordanTop/banking-dashboard-system)

---

## License

This project is intended for educational, learning, and portfolio purposes.