# 🌐 InfoHub — Full Stack Web App

**InfoHub** is a multi-feature information portal built using the **MERN stack (React + Node.js + Express)** with Vite for fast front-end development.
It provides quick access to real-time (or mock) **weather**, **unit conversion**, and **motivational quotes** — all in one clean interface.

---

## 🚀 Live Project Links

| Component                     | Platform        | URL                                                                                  |
| ----------------------------- | --------------- | ------------------------------------------------------------------------------------ |
| 🌤️ **Frontend (React/Vite)** | **Vercel**      | [https://infohub-client.vercel.app](https://infohub-client.vercel.app)               |
| ⚙️ **Backend (Express API)**  | **Render**      | [https://infohub-server-kdqv.onrender.com](https://infohub-server-kdqv.onrender.com) |
| 💻 **GitHub (Frontend)**      | **GitHub Repo** | [infohub-client](https://github.com/sathishrouthu1909/infohub-client)                |
| 💻 **GitHub (Backend)**       | **GitHub Repo** | [infohub-server](https://github.com/sathishrouthu1909/infohub-server)                |

---

## 🧠 Overview

**InfoHub** offers three key features:

* 🌦️ **Weather Forecast:** Displays current temperature, conditions, and city (supports live data via OpenWeather or mock fallback).
* 💱 **Converter:** Quickly converts between temperature, length, and weight units.
* 💬 **Motivational Quotes:** Fetches or cycles through inspiring quotes each time you visit.

---

## 🧩 Tech Stack

| Layer               | Technology                           | Description                                    |
| ------------------- | ------------------------------------ | ---------------------------------------------- |
| **Frontend**        | React + Vite                         | Fast UI rendering with modular components      |
| **Backend**         | Node.js + Express                    | RESTful API for weather, converter, and quotes |
| **Hosting**         | Vercel (frontend) / Render (backend) | Cloud-based hosting for full stack             |
| **Version Control** | Git + GitHub                         | Source management and collaboration            |
| **Optional API**    | OpenWeather                          | For real-time weather updates                  |

---

## ⚙️ Folder Structure

```
infohub/
 ├── client/          # Frontend (Vite + React)
 │   ├── src/
 │   │   ├── components/
 │   │   │   ├── Weather.jsx
 │   │   │   ├── Convert.jsx
 │   │   │   └── Quote.jsx
 │   │   ├── App.jsx
 │   │   └── main.jsx
 │   ├── .env
 │   ├── vite.config.js
 │   └── package.json
 │
 └── server/          # Backend (Node + Express)
     ├── server.js
     ├── package.json
     ├── .gitignore
     └── .env (optional)
```

---

## 🔗 API Endpoints

You can test your backend APIs directly:

| Endpoint                                 | Description              | Example                                                                                     |
| ---------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------- |
| `/api/health`                            | Health check             | [Live Link](https://infohub-server-kdqv.onrender.com/api/health)                            |
| `/api/weather?city=Hyderabad`            | Weather info (mock/live) | [Live Link](https://infohub-server-kdqv.onrender.com/api/weather?city=Hyderabad)            |
| `/api/convert?type=temperature&value=25` | Converter API            | [Live Link](https://infohub-server-kdqv.onrender.com/api/convert?type=temperature&value=25) |
| `/api/quote`                             | Quote of the moment      | [Live Link](https://infohub-server-kdqv.onrender.com/api/quote)                             |

---

## 💻 Running Locally

### 1. Backend

```bash
cd server
npm install
npm run dev
```

Server runs on: `http://localhost:5000`

### 2. Frontend

```bash
cd client
npm install
npm run dev
```

App runs on: `http://localhost:5173`

---

## 🔐 Environment Variables

### Backend (.env or Render)

```
OPENWEATHER_API_KEY=your_api_key_here
```

### Frontend (.env or Vercel)

```
VITE_API_BASE=https://infohub-server-kdqv.onrender.com
```

---

## 🌤️ Enabling Live Weather (Optional)

1. Get a free API key → [OpenWeather API](https://openweathermap.org/api)
2. Add it to your **Render** environment variables as `OPENWEATHER_API_KEY`.
3. Redeploy your backend service.
4. Your weather data will now come from the live API instead of mock data.

If no key is added, InfoHub automatically uses mock data.

---

## 🧾 Submission Checklist

✅ Frontend deployed (Vercel)
✅ Backend deployed (Render)
✅ Repositories uploaded to GitHub
✅ Fully working Weather, Converter, and Quotes modules
✅ Optional real API key supported
✅ Ready for presentation or evaluation

---


## 🏁 Conclusion

🎯 **InfoHub** is a fully functional full-stack web app, designed with modular clean code and deployed using modern web technologies.
It supports both live and mock data modes for flexibility and reliability.

> **Status:** ✅ 100% Completed
> **Author:** Sathish Routhu
> **Date:** November 2025
