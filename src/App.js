import React, { useState } from "react";

import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

import './components/Expenses/Expenses.css';

const DUMMY_EXPENSES = [
  // {
  //   id: 'e1',
  //   title: 'Toilet Paper',
  //   amount: 94.12,
  //   date: new Date(2020, 7, 14),
  // },
  // { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  // {
  //   id: 'e3',
  //   title: 'Car Insurance',
  //   amount: 294.67,
  //   date: new Date(2021, 2, 28),
  // },
  // {
  //   id: 'e4',
  //   title: 'New Desk (Wooden)',
  //   amount: 450,
  //   date: new Date(2021, 5, 12),
  // },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  let expenseContent = <h2 className="expenses-list__fallback">No Expenses Found</h2>

  if(expenses.length > 0) {
    expenseContent = expenses.map((expense) => (
      <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
    ))
  }

  return (
    <div className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />

      {expenseContent}
      
      {/* {expenses.length === 0 ? <p>No Expenses Found</p> : expenses.map((expense) => (
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
      ))} */}
 
    </div>
  );
}

export default App;
