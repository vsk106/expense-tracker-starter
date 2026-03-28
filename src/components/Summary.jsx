function Summary({ totalIncome, totalExpenses, balance }) {
  const fmt = (n) =>
    n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="summary">
      <div className="summary-card income-card">
        <h3>Income</h3>
        <p className="income-amount">${fmt(totalIncome)}</p>
      </div>
      <div className="summary-card expense-card">
        <h3>Expenses</h3>
        <p className="expense-amount">${fmt(totalExpenses)}</p>
      </div>
      <div className="summary-card balance-card">
        <h3>Balance</h3>
        <p className="balance-amount">${fmt(balance)}</p>
      </div>
    </div>
  );
}

export default Summary;
