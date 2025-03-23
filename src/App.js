import React, {useState} from 'react';
import NewExpense from './components/NewExpenses/newExpense.js';
import Expenses from "./components/Expenses/Expenses.js";

    let Dummy_Expense = [
        {
            id: 'e1',
            title: 'Car Loan',
            amount: 350000,
            date: new Date (2024, 5, 18)
        },
        {
            id: 'e2',
            title: 'Telephone Bill',
            amount: 124,
            date: new Date (2024, 5, 12)
        },
        {
            id: 'e3',
            title: 'School fee',
            amount: 250,
            date: new Date (2024, 5, 25)
        },
        {
            id: 'e4',
            title: 'House Rent',
            amount: 650,
            date: new Date (2024, 5, 11)
        }
    ]
        const App=()=>{
            const[expenses, setExpenses] = useState(Dummy_Expense);
   
    const addExpenseHandler = (expense)=>{
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);     
        };
   return (
    <div>
    <NewExpense onAddExpense = {addExpenseHandler}/>
    <Expenses item= {expenses}/>
    </div>
    );
}
export default App;