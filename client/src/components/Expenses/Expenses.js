import React from 'react';
import './Expenses.css';
import ExpenseItems from './ExpenseItems';
import Card from '../UI/Card';
const Expenses=(props)=>{
return(
    <Card className ="expenses">
        {props.item.map((expense)=>(
        
        <ExpenseItems
            key = {expense._id || expense.id}
            id = {expense._id}
            date = {new Date(expense.date)} 
            title = {expense.title} 
            amount = {expense.amount}
            onDelete= {props.onDelete}
            onUpdate = {props.onUpdate}/>
        ))}     
    </Card>
)

}
export default Expenses;