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

//Route for update data
router.put("/:id", async(req, res)=>{
  try {
      //get the updated data from the request body 
      const { title, amount, date } = req.body;
      const updateExpense = await Expense.updateOne({_id: req.params.id},{$set: {title, amount, date}});
      res.json(updateExpense);
  } catch (error) {
      res.status(400).json({message: "Failed to update", error});
  }
});

//Route for delete data
router.delete("/:id", async(req, res)=>{
  try{
    const deleteExpense = await Expense.deleteOne({_id: req.params.id});
    if(deleteExpense.deletedCount === 0){
      return res.status(404).json({message: "Expense not found"});
    }
    res.status(200).json({message: "Expense deleted successfully",
      result: deleteExpense
    });
    
  } catch(error){
    res.status(400).json({message: "Failed to delete", error});
  }
})

export default router;