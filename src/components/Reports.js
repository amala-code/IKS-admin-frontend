import Sidebar from "./Sidebar"
import Header from "./Header"

const Reports = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <Sidebar user={user} />
      <div className="main-content">
        <Header title="Reports" onLogout={onLogout} />
        <div className="content-placeholder">
          <h2>Reports</h2>
          <p>This page would contain various reports and analytics.</p>
        </div>
      </div>
    </div>
  )
}

export default Reports
