import React, {useState} from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value);
    }
    const amountChangeHandler=(e)=>{
        setEnteredAmount(e.target.value);
    }
    const dateChangeHandler=(e)=>{
        setEnteredDate(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)           
        }
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(expenseData);
    }
    return(
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label><b>Title</b></label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label><b>Amount</b></label>
                <input type="number" min="0" step="1" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label><b>Date</b></label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>    
    </form>
)
};
export default ExpenseForm;