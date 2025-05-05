import Sidebar from "./Sidebar"
import Header from "./Header"

const Settings = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <Sidebar user={user} />
      <div className="main-content">
        <Header title="Settings" onLogout={onLogout} />
        <div className="content-placeholder">
          <h2>Settings</h2>
          <p>This page would contain application settings and configurations.</p>
        </div>
      </div>
    </div>
  )
}

export default Settings
