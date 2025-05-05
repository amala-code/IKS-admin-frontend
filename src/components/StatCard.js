import "../styles/StatCard.css"

const StatCard = ({ title, value, change, icon, color }) => {
  const isPositive = change && change.startsWith("+")

  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>{icon}</div>
      <div className="stat-info">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
        {change && <div className={`stat-change ${isPositive ? "positive" : "negative"}`}>{change}</div>}
      </div>
    </div>
  )
}

export default StatCard
