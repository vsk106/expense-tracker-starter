import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#2d6a4f', '#b5832a', '#8b1a1a', '#1a3558', '#c77b3f', '#4a7c59', '#9b4444', '#3a6b8a'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#ffffff',
        border: '1px solid #e4dcd0',
        borderRadius: 8,
        padding: '10px 16px',
        boxShadow: '0 4px 16px rgba(44, 28, 16, 0.12)',
      }}>
        <div style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#8a7d6e',
          marginBottom: 6,
        }}>{label}</div>
        <div style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 15,
          color: '#2c2018',
        }}>${payload[0].value.toFixed(2)}</div>
      </div>
    );
  }
  return null;
};

function SpendingChart({ transactions }) {
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const data = Object.entries(expensesByCategory).map(([name, value]) => ({
    name,
    value: parseFloat(value.toFixed(2)),
  }));

  if (data.length === 0) {
    return (
      <div className="chart-section">
        <h2>Spending by Category</h2>
        <p className="no-data">No expense data to display.</p>
      </div>
    );
  }

  return (
    <div className="chart-section">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ede8e0" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: '#8a7d6e', fontFamily: "'Lato', sans-serif", fontWeight: 700, letterSpacing: '0.08em' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            tick={{ fontSize: 11, fill: '#8a7d6e', fontFamily: "'Fira Code', monospace" }}
            axisLine={false}
            tickLine={false}
            width={56}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(44, 28, 16, 0.03)' }} />
          <Bar dataKey="value" radius={[5, 5, 0, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} fillOpacity={0.88} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
