function Summary({ totalIncome, totalExpenses, balance }) {
  const fmt = (n) =>
    n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const isPositive = balance >= 0;

  return (
    <div className="summary">
      <div className="balance-hero">
        <span className="hero-label">Net Balance</span>
        <span className={`hero-amount ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '+' : '−'}${fmt(Math.abs(balance))}
        </span>
      </div>
      <div className="summary-stats">
        <div className="summary-card income-card">
          <h3>Total Income</h3>
          <p className="income-amount">${fmt(totalIncome)}</p>
        </div>
        <div className="summary-card expense-card">
          <h3>Total Expenses</h3>
          <p className="expense-amount">${fmt(totalExpenses)}</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
