// ExpenseList.js

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
    return (
        <table className="table table-bordered mt-3">
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {expenses.length > 0 && (
                    expenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.amount}</td>
                            <td>{expense.description}</td>
                            <td>{expense.category}</td>
                            <td>{expense.date}</td>
                            <td>
                                <button className="btn btn-warning me-2" onClick={() => onEdit(index)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => onDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default ExpenseList;
