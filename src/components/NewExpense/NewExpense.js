import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseData = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData} />
        </div>
    )
}

export default NewExpense