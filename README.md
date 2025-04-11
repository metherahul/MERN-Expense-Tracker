#  Expense Tracker (MERN Stack)

A full-stack Expense Tracker application built with **MongoDB, Express.js, React.js, and Node.js**.  
Track your daily expenses, add new records, and keep your budget under control!

---

##  Features

- Add new expenses with date, amount, and title  
- Store data in MongoDB database  
- REST API built with Express.js  
- User-friendly React frontend  
- Real-time update on new expense addition  

---

##  Folder Structure

```text
EXPENSE_TRACKER/
├── client/              # React frontend
│   ├── public/
│   ├── src/
│   └── package.json
├── server/              # Express backend
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
├── .gitignore
├── License
└── README.md
```


---

##  Getting Started

###  Prerequisites
Make sure you have **Node.js**, **npm**, and **MongoDB** installed.

---

## Installation

### Clone the repository

```bash
git clone https://github.com/metherahul/expense-tracker.git
cd expense-tracker
```

### Install client dependencies

```bash
cd client
npm install
```

### Install server dependencies

```bash
cd ../server
npm install
```

### Setup MongoDB connection

Create a **.env** file inside the **server/** folder with the following:

```bash
env
MONGO_URI=mongodb://localhost:27017/expenseDB
PORT=5000
```

### Start the server

```bash
npm start
```

### Start the client

```bash
cd ../client
npm start
```
Now, visit your app at => http://localhost:3000

## Tech Stack

**Frontend:** ReactJS
**Backend:** Node.js, Express.js
**Database:** MongoDB (via Mongoose)

## Upcoming Features
- Delete expense items
- Total expense summary
- Filter by date
- User Authentication (optional)

## Contribution
**Pull requests** are welcome. For major changes, please open an **issue** first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

