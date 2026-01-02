---
layout: page
title: FastAPI Base API
description: FastAPI Base API (SQL Server + JWT Auth)
img: assets/img/projects/FastAPI-Backend-Base/swagger.png
importance: 3
category: work
related_publications: false
published: true
---

# FastAPI Base API (SQL Server + JWT Auth)

This repository provides a professional boilerplate for developing APIs with **FastAPI**. It is designed to be modular, scalable, and easily replicable for **Artificial Intelligence** projects that require robust user management, **SQL Server** persistence, and **JWT-based** security.

## 🚀 Key Features

* **Layered Architecture**: Clear separation of concerns including Routers, Services, Repositories, and Schemas.
* **JWT Authentication**: Implements a complete login flow and route protection using `HTTPBearer`.
* **SQL Server Integration**: Utilizes `SQLAlchemy` with `pyodbc` to interact efficiently with stored procedures.
* **Data Validation**: Powered by `Pydantic` for strict input and output data schemas.
* **Enhanced Security**: Industry-standard password hashing using `bcrypt`.

## 📂 Project Structure

<pre style="background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; line-height: 1.6;">├── app/
│   ├── config/          <span style="color: #6a9955;"># Database, Security, and Environment configuration</span>
│   ├── core/            <span style="color: #6a9955;"># Security utility functions (bcrypt)</span>
│   ├── dependencies/    <span style="color: #6a9955;"># Dependency injection (Authentication)</span>
│   ├── repositories/    <span style="color: #6a9955;"># Direct database access (Stored Procedures)</span>
│   ├── routers/         <span style="color: #6a9955;"># API Endpoints and route definitions</span>
│   ├── schemas/         <span style="color: #6a9955;"># Pydantic data models</span>
│   ├── services/        <span style="color: #6a9955;"># Business logic layer</span>
│   └── main.py          <span style="color: #6a9955;"># Application entry point</span>
├── scripts.sql          <span style="color: #6a9955;"># Database schema and stored procedure scripts</span>
└── .env                 <span style="color: #6a9955;"># Environment variables (Do not commit to Git)</span></pre>

## 🛠️ Prerequisites

1. **Python 3.10+**
2. **SQL Server** instance
3. **ODBC Driver for SQL Server**

## ⚙️ Initial Setup

### 1. Clone the repository

<pre style="background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; line-height: 1.6;"><span style="color: #4ec9b0;">git</span> clone https://github.com/javsan77/FastAPI-Backend-Base
<span style="color: #4ec9b0;">cd</span> FastAPI-Backend-Base</pre>

### 2. Create a virtual environment and install dependencies

<pre style="background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; line-height: 1.6;"><span style="color: #dcdcaa;">python</span> <span style="color: #ce9178;">-m</span> venv venv
<span style="color: #dcdcaa;">source</span> venv/bin/activate  <span style="color: #6a9955;"># On Windows use: venv\Scripts\activate</span>
<span style="color: #dcdcaa;">pip</span> install fastapi uvicorn sqlalchemy pyodbc python-dotenv python-jose[cryptography] passlib[bcrypt]</pre>

### 3. Configure environment variables

Create a `.env` file in the root directory with the following credentials:

<pre style="background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; line-height: 1.6;"><span style="color: #9cdcfe;">DB_SERVER</span>=<span style="color: #ce9178;">your_server_address</span>
<span style="color: #9cdcfe;">DB_NAME</span>=<span style="color: #ce9178;">fastapi_user_api</span>
<span style="color: #9cdcfe;">DB_USER</span>=<span style="color: #ce9178;">your_username</span>
<span style="color: #9cdcfe;">DB_PASSWORD</span>=<span style="color: #ce9178;">your_password</span>
<span style="color: #9cdcfe;">DB_DRIVER</span>=<span style="color: #ce9178;">ODBC Driver 17 for SQL Server</span></pre>

### 4. Initialize the Database

Execute the contents of `scripts.sql` in your SQL Server instance to generate the `Users` table and required stored procedures.

## 🚦 Running the Application

To start the development server:

<pre style="background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; line-height: 1.6;"><span style="color: #dcdcaa;">uvicorn</span> app.main:app <span style="color: #ce9178;">--reload</span></pre>

The API will be available at `http://127.0.0.1:8000`. Access the interactive API documentation at `/docs`.

## 🔒 Primary Endpoints

| Method | Path            | Description                               | Protected |
|--------|-----------------|-------------------------------------------|-----------|
| POST   | `/auth/login`   | Authenticate and receive JWT access token | No        |
| POST   | `/users/create` | Register a new user                       | No        |
| GET    | `/users/`       | List all registered users                 | Yes       |
| GET    | `/users/{id}`   | Retrieve specific user details            | No        |

## 🧠 AI Project Integration Notes

This boilerplate is ideal for AI-driven applications because:

* **User Persistence**: Easily store chat histories, prompt logs, or agent configurations.
* **Scalability**: The repository pattern allows for seamless integration of Vector Databases (like Pinecone or Milvus) alongside SQL.
* **Security**: Protects expensive model inference and sensitive data through robust authentication.

## 📚 Next Steps

* Explore the `/docs` endpoint for interactive API testing
* Customize stored procedures in `scripts.sql` for your specific needs
* Extend the authentication system with role-based access control (RBAC)
* Integrate with AI models for intelligent user interactions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.