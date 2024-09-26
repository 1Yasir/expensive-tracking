// BudgetInput.js
"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './BudgetInput.module.css';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';

const BudgetInput = () => {
  const [budgetList, setBudgetList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    budget: '',
    description: '',
    name: '',
    date: '',
  });

  const handleAddOrUpdateBudget = (data) => {
    if (editIndex !== null) {
      const updatedBudgetList = budgetList.map((entry, index) =>
        index === editIndex ? { ...data } : entry
      );
      setBudgetList(updatedBudgetList);
      setEditIndex(null);
    } else {
      setBudgetList([...budgetList, data]);
    }
    setFormData({
      budget: '',
      description: '',
      name: '',
      date: '',
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(budgetList[index]);
  };

  const handleDelete = (index) => {
    const updatedBudgetList = budgetList.filter((_, i) => i !== index);
    setBudgetList(updatedBudgetList);
  };

  const totalBudget = budgetList.reduce((total, entry) => total + Number(entry.budget), 0);

  return (
    <div className={`container ${styles.budgetInput}`}>
      <h2 className="text-center mb-4">Budget</h2>
      <BudgetForm onSubmit={handleAddOrUpdateBudget} formData={formData} editIndex={editIndex} />
      {
        !!budgetList.length && (

          <BudgetList budgetList={budgetList} onEdit={handleEdit} onDelete={handleDelete} totalBudget={totalBudget} />
        )
      }
    </div>
  );
};

export default BudgetInput;
