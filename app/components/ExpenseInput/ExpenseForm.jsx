import React, { useState, useEffect } from 'react';

const ExpenseForm = ({ onSubmit, initialData }) => {
  const [expenseData, setExpenseData] = useState({
    amount: '',
    description: '',
    category: 'Food',
    date: '',
  });

  useEffect(() => {
    if (initialData) {
      setExpenseData(initialData);
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSubmit(expenseData);

    setExpenseData({
      amount: '',
      description: '',
      category: 'Food',
      date: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount Spent</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          name="amount"
          value={expenseData.amount}
          onChange={handleInputChange}
          placeholder="Enter amount spent"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          value={expenseData.description}
          onChange={handleInputChange}
          placeholder="Enter a description"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select
          id="category"
          name="category"
          className="form-select"
          value={expenseData.category}
          onChange={handleInputChange}
        >
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Events">Events</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={expenseData.date}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit Expense</button>
    </form>
  );
};

export default ExpenseForm;
