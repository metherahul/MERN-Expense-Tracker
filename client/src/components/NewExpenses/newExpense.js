import React from 'react'
import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css'

const NewExpense=(props)=>{
    const saveExpenseDAtaHandler = (enteredExpenseData)=>{
        const NewExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
      props.onAddExpense(NewExpenseData);
     };
    return(
        <div className='NewExpense'>
            <ExpenseForm onSaveExpenseData ={saveExpenseDAtaHandler}/>
        </div>
    );
};
export default NewExpense;