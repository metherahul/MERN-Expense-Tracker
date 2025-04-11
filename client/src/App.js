import React, {useState, useEffect } from 'react';
import NewExpense from './components/NewExpenses/newExpense.js';
import Expenses from "./components/Expenses/Expenses.js";

        const App=()=>{
            const[expenses, setExpenses] = useState([]);
            
            //fetching data from backend when component mounts
            useEffect(()=> {
                const fetchExpenses = async ()=> {
                    try {
                        const response = await fetch ('http://localhost:5000/api/expenses');
                        const data = await response.json();
                        setExpenses(data);
                    } catch (error) {
                        console.error('Failed to fetch expense:', error);
                    }
                }
                fetchExpenses();
            },[]);
   
    const addExpenseHandler = async(expense)=>{
        try {
            const response = await fetch('http://localhost:5000/api/expenses',{
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(expense),
            });
            const dataFromDB = await response.json();
            
            // The data is coming from server is putting in state
            setExpenses((prevExpenses) => [dataFromDB, ...prevExpenses]);   
        } catch (error) {
            console.error('Failed to send expense to backend:', error);
        }           
    };
   return (
    <div>
    <NewExpense onAddExpense = {addExpenseHandler}/>
    <Expenses item= {expenses}/>
    </div>
    );
}
export default App;