import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#1d4ed8', '#166534', '#991b1b', '#c2410c', '#0e7490', '#7c3aed', '#be185d', '#a16207'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#1a1714',
        border: 'none',
        borderRadius: 4,
        padding: '10px 16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
      }}>
        <div style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'capitalize',
          color: '#7a7267',
          marginBottom: 4,
        }}>
          {label}
        </div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 22,
          fontWeight: 500,
          color: '#f3f0ea',
        }}>
          ${payload[0].value.toFixed(2)}
        </div>
      </div>
    );
  }
  return null;
};

function SpendingChart({ transactions }) {
  const data = useMemo(() => {
    const byCategory = transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {});
    return Object.entries(byCategory).map(([name, value]) => ({
      name,
      value: parseFloat(value.toFixed(2)),
    }));
  }, [transactions]);

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
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#dedad2" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: '#7a7267', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            tick={{ fontSize: 11, fill: '#7a7267', fontFamily: "'Jost', sans-serif" }}
            axisLine={false}
            tickLine={false}
            width={52}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
          <Bar dataKey="value" radius={[3, 3, 0, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
