import Sidebar from "./Sidebar"
import Header from "./Header"

const Courses = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <Sidebar user={user} />
      <div className="main-content">
        <Header title="Courses" onLogout={onLogout} />
        <div className="content-placeholder">
          <h2>Courses Management</h2>
          <p>This page would contain the courses management functionality.</p>
        </div>
      </div>
    </div>
  )
}

export default Courses
