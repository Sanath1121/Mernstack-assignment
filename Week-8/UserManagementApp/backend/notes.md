# Backend Setup Notes (MERN - UserManagementApp)

Use these terminal commands step-by-step to create and run the backend.

## 1) Move to backend folder
```powershell
cd "C:\Users\srila\OneDrive\Desktop\BTECH\ATP\Mernstack\Class\Week-8\Day_16\UserManagementApp\backend"
```

## 2) Initialize Node project (if package.json is not created)
```powershell
npm init -y
```

## 3) Install main dependencies
```powershell
npm i express mongoose cors dotenv
```

## 4) Install development dependency
```powershell
npm i -D nodemon
```

## 5) (Optional) If already installed separately
```powershell
npm i express mongoose
```

## 6) Add scripts in package.json
Update `package.json` scripts section:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

## 7) Create basic backend files
```powershell
ni server.js
ni .env
mkdir src
mkdir src\config,src\models,src\routes,src\controllers
```

## 8) Add environment variables in .env
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## 9) Run backend server (development)
```powershell
npm run dev
```

## 10) Run backend server (production mode)
```powershell
npm start
```

## 11) Useful extra installs (as needed)
For password hashing and tokens:
```powershell
npm i bcryptjs jsonwebtoken
```

For request validation:
```powershell
npm i express-validator
```

For logging:
```powershell
npm i morgan
```

---

## Quick complete install (single command style)
```powershell
npm i express mongoose cors dotenv bcryptjs jsonwebtoken express-validator morgan
npm i -D nodemon
```
