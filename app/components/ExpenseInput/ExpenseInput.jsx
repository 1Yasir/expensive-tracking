// ExpenseInput.js
"use client";
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExpenseInput = () => {
  const [expenses, setExpenses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const handleAddExpense = (newExpense) => {
    if (isEditing) {
      const updatedExpenses = [...expenses];
      updatedExpenses[editIndex] = { ...newExpense, amount: parseFloat(newExpense.amount) };
      setExpenses(updatedExpenses);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setExpenses([...expenses, { ...newExpense, amount: parseFloat(newExpense.amount) }]);
    }
  };

  const handleEdit = (index) => {
    const expenseToEdit = expenses[index];
    setEditIndex(index);
    setIsEditing(true);
  };

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div className={`container`}>
      <h2 className="text-center mb-4">{isEditing ? 'Edit Expense' : 'Add Expense'}</h2>
      <ExpenseForm onSubmit={handleAddExpense} initialData={isEditing ? expenses[editIndex] : null} />
      {
        !!expenses.length && (
          <>
            <h3 className="text-center mt-5">Expenses List</h3>
            <ExpenseList expenses={expenses} onEdit={handleEdit} onDelete={handleDelete} />

            <div className="text-center">
              <strong>Total Expense: {calculateTotalExpenses()}</strong>
            </div>
          </>
        )
      }


    </div>
  );
};

export default ExpenseInput;
