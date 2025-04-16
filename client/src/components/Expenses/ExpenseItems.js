import React, { useState } from 'react';
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItems = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(props.title);
  const [updatedAmount, setUpdatedAmount] = useState(props.amount);

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const updateHandler = () => {
    setIsEditing(true);
  };

  const cancelUpdateHandler = () => {
    setIsEditing(false);
  };

  const submitUpdateHandler = () => {
    const updatedExpense = {
      title: updatedTitle,
      amount: updatedAmount,
      date: props.date,
    };
    props.onUpdate(props.id, updatedExpense);
    setIsEditing(false);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      {isEditing ? (
        <div className="expense-item__description">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <input
            type="number"
            value={updatedAmount}
            onChange={(e) => setUpdatedAmount(e.target.value)}
          />
        </div>
      ) : (
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
      )}

      <div className="expense-item__price">${props.amount}</div>

      <div className="expense-item__buttons">
        {isEditing ? (
          <>
            <button onClick={submitUpdateHandler}>Save</button>
            <button onClick={cancelUpdateHandler}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={updateHandler}>Update</button>
            <button onClick={deleteHandler}>Delete</button>
          </>
        )}
      </div>
    </Card>
  );
};

export default ExpenseItems;