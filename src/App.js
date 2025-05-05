import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Courses from "./components/Courses"
import Students from "./components/Students"
import Reports from "./components/Reports"
import Settings from "./components/Settings"
import AddCourseRequest from "./components/AddCourseRequest"

// Protected route wrapper component
const ProtectedRoute = ({ children }) => {
  // First try localStorage, then try sessionStorage for user data
  const storedUserFromLocal = localStorage.getItem("user")
  const storedUserFromSession = sessionStorage.getItem("user")
  
  // Check if user exists in either storage
  if ((!storedUserFromLocal || storedUserFromLocal === "undefined" || storedUserFromLocal === "null") && 
      (!storedUserFromSession || storedUserFromSession === "undefined" || storedUserFromSession === "null")) {
    return <Navigate to="/login" replace />
  }
  
  // If we have user data, use it
  return children
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = () => {
      try {
        // First check localStorage
        let loggedInUser = localStorage.getItem("user")
        
        // If not in localStorage, check sessionStorage
        if (!loggedInUser || loggedInUser === "undefined" || loggedInUser === "null") {
          loggedInUser = sessionStorage.getItem("user")
        }
        
        if (loggedInUser && loggedInUser !== "undefined" && loggedInUser !== "null") {
          const userData = JSON.parse(loggedInUser)
          if (userData) {
            setUser(userData)
            setIsAuthenticated(true)
          }
        }
      } catch (error) {
        console.error("Error parsing user data from storage:", error)
        // Clear invalid data
        localStorage.removeItem("user")
        sessionStorage.removeItem("user")
      } finally {
        // Always set loading to false when done
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const handleLogin = (userData) => {
    if (userData && typeof userData === 'object') {
      setUser(userData)
      setIsAuthenticated(true)
      // No need to store in localStorage/sessionStorage as Login component does it
    } else {
      console.error("Attempted to login with invalid user data", userData)
    }
  }

  const handleLogout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("token")
  }

  // Show a loading indicator while checking authentication
  if (isLoading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard user={user} onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <Courses user={user} onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/students"
            element={
              <ProtectedRoute>
                <Students user={user} onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <Reports user={user} onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings user={user} onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-course-request"
            element={
              <ProtectedRoute>
                <AddCourseRequest user={user} onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App