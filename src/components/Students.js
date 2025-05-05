import Sidebar from "./Sidebar"
import Header from "./Header"

const Students = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <Sidebar user={user} />
      <div className="main-content">
        <Header title="Students" onLogout={onLogout} />
        <div className="content-placeholder">
          <h2>Students Management</h2>
          <p>This page would contain the students management functionality.</p>
        </div>
      </div>
    </div>
  )
}

export default Students
