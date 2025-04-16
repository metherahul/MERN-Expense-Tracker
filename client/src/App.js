import React, { useState, useEffect } from 'react';
import NewExpense from './components/NewExpenses/newExpense.js';
import Expenses from "./components/Expenses/Expenses.js";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Initial data fetch
  const fetchExpensesHandler = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/expenses');
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Failed to fetch expenses:', error);
    }
  };

  useEffect(() => {
    fetchExpensesHandler();
  }, []);

  //Add: Add newly created expense to local state
  const addExpenseHandler = async (expense) => {
    try {
      const response = await fetch('http://localhost:5000/api/expenses', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(expense),
      });

      const dataFromDB = await response.json();
      setExpenses(prevExpenses => [dataFromDB, ...prevExpenses]);
    } catch (error) {
      console.error('Failed to add expense:', error);
    }
  };

  //Update: update specific expense locally using map
  const updateExpensesHandler = async (_id, updatedExpense) => {
    try {
      const response = await fetch(`http://localhost:5000/api/expenses/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedExpense),
      });

      const updatedData = await response.json();

      setExpenses(prevExpenses =>
        prevExpenses.map(exp =>
          exp._id === _id ? updatedData : exp
        )
      );
    } catch (error) {
      console.error("Failed to update expense", error);
    }
  };

  //Delete: remove expense locally using filter
  const deleteExpenseHandler = async (_id) => {
    try {
      await fetch(`http://localhost:5000/api/expenses/${_id}`, {
        method: "DELETE"
      });

      setExpenses(prevExpenses =>
        prevExpenses.filter(exp => exp._id !== _id)
      );
    } catch (error) {
      console.error("Failed to delete expense:", error);
    }
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        item={expenses}
        onDelete={deleteExpenseHandler}
        onUpdate={updateExpensesHandler}
      />
    </div>
  );
};

export default App;
