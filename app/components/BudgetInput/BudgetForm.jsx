import React, { useState } from 'react';
import styles from './BudgetInput.module.css';

const BudgetForm = ({ onSubmit, formData, editIndex }) => {
  const [localFormData, setLocalFormData] = useState(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(localFormData);
    setLocalFormData({
      budget: '',
      description: '',
      name: '',
      date: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="budget" className="form-label">Budget Amount</label>
        <input
          type="number"
          className={`form-control ${styles.inputField}`}
          id="budget"
          name="budget"
          value={localFormData.budget}
          onChange={handleChange}
          placeholder="Enter your budget"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Budget Source</label>
        <input
          type="text"
          className={`form-control ${styles.inputField}`}
          id="description"
          name="description"
          value={localFormData.description}
          onChange={handleChange}
          placeholder="Enter the source of your budget"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Your Name</label>
        <input
          type="text"
          className={`form-control ${styles.inputField}`}
          id="name"
          name="name"
          value={localFormData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date</label>
        <input
          type="date"
          className={`form-control ${styles.inputField}`}
          id="date"
          name="date"
          value={localFormData.date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>
        {editIndex !== null ? 'Update' : 'Submit'}
      </button>
    </form>
  );
};

export default BudgetForm;
