import { Link, useLocation } from "react-router-dom"
import "../styles/Sidebar.css"

const Sidebar = ({ user }) => {
  const location = useLocation()

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <span>IKS Admin</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className={location.pathname === "/dashboard" ? "active" : ""}>
            <Link to="/dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
              </svg>
              Dashboard
            </Link>
            </li>
            <li className={location.pathname === "/new-member" ? "active" : ""}>
            <Link to="/new-member">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
              </svg>
              New Member Request
            </Link>
            </li>

        </ul>
      </nav>
      <div className="user-profile">
        <div className="avatar">{user?.name?.charAt(0) || "U"}</div>
        <div className="user-info">
          <div className="user-name">{user?.name || "Admin"}</div>
          <div className="user-role">{user?.role || "Role"}</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
