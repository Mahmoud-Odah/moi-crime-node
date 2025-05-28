# MOI Crime Dashboard – Backend (Node.js)

This is the backend API for the MOI Crime Management Dashboard, built with Node.js, Express, and MongoDB. It supports user authentication and user management features, and serves as the backend for the React frontend deployed on Vercel.

---

## 🔗 Live API

➡️ [https://moi-crime-node.onrender.com/api](https://moi-crime-node.onrender.com/api)

---

## 🔐 Authentication

The API uses **JWT-based authentication**. After logging in, the client must include the JWT token in the `Authorization` header as a Bearer token:

```http
Authorization: Bearer <your_token>

---

## ✨ Features

- Interactive map displaying crimes by zone 
- JWT-based login authentication
- User listing with pagination and sorting
- Add, edit, and delete users
- Responsive design using Tailwind CSS
- UI components powered by PrimeReact

---

## 🧰 Technologies Used

- **Node.js** with **Express**
- **MongoDB Atlas** (NoSQL database)
- **Mongoose** for schema modeling
- **JWT** for authentication
- **bcrypt** for password hashing
- **dotenv** for environment variables
- **CORS** and **express-validator**

---

## ⚙️ Running Locally

```bash
### 1. Clone the repository

git clone https://github.com/Mahmoud-Odah/moi-crime-node.git
cd moi-crime-node

### 2. Install dependencies

npm install

### 3. Create a .env file

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

### 4. Run the development server

npm start

---

## 📦 API Endpoints

### 🔑 Authentication

| Method | Route              | Description             |
|--------|--------------------|-------------------------|
| POST   | `/api/auth/login`  | Login and get JWT token |
| POST   | `/api/auth/signup` | Register a new user     |

### 👥 Users (Protected)

| Method | Route              | Description         |
|--------|--------------------|---------------------|
| GET    | `/api/users`       | Get all users       |
| GET    | `/api/users/:id`   | Get user by ID      |
| POST   | `/api/users`       | Create a new user   |
| PUT    | `/api/users/:id`   | Update user by ID   |
| DELETE | `/api/users/:id`   | Delete user by ID   |
