// BudgetList.js
"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BudgetList = ({ budgetList, onEdit, onDelete, totalBudget }) => {
  return (
    <>
      <h3 className="mt-4">Budget List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Budget Amount</th>
            <th>Budget Source</th>
            <th>Your Name</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {budgetList.map((entry, index) => (
            <tr key={index}>
              <td>{entry.budget}</td>
              <td>{entry.description}</td>
              <td>{entry.name}</td>
              <td>{entry.date}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => onEdit(index)}>Edit</button>
                <button className="btn btn-danger" onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="text-end"><strong>Total Budget:</strong></td>
            <td><strong>{totalBudget}</strong></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BudgetList;
