// BudgetTracker.jsx
"use client";
import React, { useState } from 'react';
import BudgetInput from './BudgetInput/BudgetInput'; // BudgetInput component ko import karein
import ExpenseInput from './ExpenseInput/ExpenseInput'; // ExpenseInput component ko import karein
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './BudgetTracker.module.css';

const BudgetTracker = () => {
  // Budget ka state
  const [budgetData, setBudgetData] = useState({ amount: 0, description: '', name: '', date: '' });
  // Kharchon ka state
  const [expenses, setExpenses] = useState([]);

  // Kharch add karne ka function
  const addExpense = (expenseData) => {
    setExpenses((prevExpenses) => [...prevExpenses, expenseData]);
  };

  // Total kharch nikalne ka function
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className={`container`}>
      <BudgetInput onAddBudget={setBudgetData} />
      <ExpenseInput onAddExpense={addExpense} />
      <h3>Total Expenses: ${totalExpenses}</h3>
      <h4>Expense List:</h4>
      <ul className="list-group">
        {expenses.map((expense, index) => (
          <li key={index} className="list-group-item">
            <strong>{expense.description}</strong> - ${expense.amount} ({expense.category}) on {expense.date}
            {/* Yahan par hum delete aur update ki functionality add karenge */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetTracker;
