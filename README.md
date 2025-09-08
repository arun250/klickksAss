# 👤 User Register and Login 

This project demonstrates a full-stack implementation of user registration , login  with the help of backend (Node js, Expres js). It also supports fetching and displaying users from an sqlite.

## 🌍 Live Demo

#### Published Frontend URL:
🔗 **Frontend (Netlify):** https://klickass.netlify.app/

#### Server:
🔗 **Backend (Render):** https://klickksassserver.onrender.com

## 📦 Tech Stack

- ⚛️ React (Frontend)
- 🧠 Express.js + Node.js (Backend)
- SQLite Database

---

## 🚀 Features

- ✅ Register users via form
- 📥 Login  Registered Users 
- ✅ Success toast on update

---

## 📁 Project Structure
```
project/
│
├── crudass/
│ ├── public/
│ └── src/
│ ├── components/
│ │ ├── RegisterForm.jsx # Form to add users
│ │ └── HomePage.jsx 
│ │ └── LoginForm.jsx 
│ │ └── ProtectedRoute.jsx 
│ ├── App.jsx # Main app component
│ └── index.css
│
├── server/
│ ├── index.js
└── README.md
```

## 🔧 Setup Instructions

### 1. Clone the repository

    git clone https://github.com/your-username/your-repo-name.git
    cd covAss

###  2. Backend Setup

   
    You must update it to your Render backend URL. You must update as per your server
     In your Express backend (index.js):
       // Example
    const cors = require('cors');
    app.use(cors({
      origin: 'https://your-frontend.netlify.app',
    }));
    
    cd backend
    npm install
    node index.js
    
###  3. Frontend Setup

     Your React frontend is likely still calling the published URL. You must update as per your server in all api calls
      // Example
    const API_URL = "https://localhost:5100/api/login";
    
    cd klickkass
    npm install
    npm run dev
