import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import expenseRoutes from './routes/expenses.js';
import cors from 'cors';

dotenv.config();
const app = express();

// CORS implementation as a Middleware for two server
app.use(cors());

// Middleware to parse incoming JSON
app.use(express.json());

//connect routes 
app.use("/api/expenses", expenseRoutes);

//MongoDB connection
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // Forcefully stop app if DB not connected
  }
};
connectToDB();


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


