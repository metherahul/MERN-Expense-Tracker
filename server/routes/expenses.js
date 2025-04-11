import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// Route to add new expense
router.post("/", async (req, res) => {
  try {
    const { title, amount, date } = req.body;
    const newExpense = new Expense({ title, amount, date });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: "Error adding expense", error });
  }
});

// Route to get all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses", error });
  }
});

export default router;
