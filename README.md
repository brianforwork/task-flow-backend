### 🗃️ **Backend: `taskflow-backend/README.md`**
```markdown
# TaskFlow – Backend

This is the **backend** service for TaskFlow, a task management web app designed for student teams and collaborative planning. It provides secure API endpoints, manages user authentication, and handles task and board data persistence.

---

## ⚙️ Features

- 🧾 RESTful API with clean route structuring
- 🔐 JWT-based Authentication (Sign Up / Login / Protected Routes)
- 🗂️ Task + Column CRUD operations
- 👥 User and session management
- 🧠 Built for multi-user collaboration

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose) *(or PostgreSQL via Prisma — update accordingly)*
- **Authentication:** JWT + Bcrypt
- **Validation:** express-validator / Joi
- **CORS & Security:** Helmet, CORS, rate-limiting middleware
- **Environment Config:** dotenv

---

## 🔐 Environment Variables

Create a `.env` file with the following:

```env
PORT=5000
MONGO_URI=your_db_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
