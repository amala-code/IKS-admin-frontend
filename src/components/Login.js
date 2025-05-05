

// import { useState } from "react"
// import axios from "axios"
// import "../styles/Login.css"

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [rememberMe, setRememberMe] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError("")

//     // Basic validation
//     if (!email || !password) {
//       setError("Please enter both email and password")
//       return
//     }

//     // Email format validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(email)) {
//       setError("Please enter a valid email address")
//       return
//     }

//     setLoading(true)

//     try {
//       // API call to verify credentials
//       const response = await axios.post('https://iks-admin-backend.vercel.app/login', {
//         email,
//         password,
//       })

//       // Store token and user data
//       const { token, user } = response.data
      
//       if (rememberMe) {
//         localStorage.setItem('token', token)
//       } else {
//         sessionStorage.setItem('token', token)
//       }

//       // Pass user data to parent component
//       onLogin(user)

//     } catch (error) {
//       if (error.response) {
//         // Handle different error status codes
//         switch (error.response.status) {
//           case 401:
//             setError("Invalid email or password")
//             break
//           case 429:
//             setError("Too many login attempts. Please try again later")
//             break
//           case 500:
//             setError("Server error. Please try again later")
//             break
//           default:
//             setError(error.response.data.message || "Login failed")
//         }
//       } else if (error.request) {
//         setError("Network error. Please check your connection")
//       } else {
//         setError("An unexpected error occurred")
//       }
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="login-container">
//       <div className="login-wrapper">
//         {/* Left side - Form */}
//         <div className="login-form-section">
//           <div className="login-form-container">
//             <div className="login-header">
//               <div className="login-logo">
//                 <div className="logo-icon">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="48"
//                     height="48"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//                   </svg>
//                 </div>
//                 <h1 className="logo-text">IKS CorePanel</h1>
//               </div>
//               <h2 className="welcome-text">Welcome back</h2>
//               <p className="subtitle">Sign in to continue to your dashboard</p>
//             </div>

//             <form onSubmit={handleSubmit} className="login-form">
//               {error && (
//                 <div className="error-message">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <circle cx="12" cy="12" r="10"></circle>
//                     <line x1="12" y1="8" x2="12" y2="12"></line>
//                     <line x1="12" y1="16" x2="12.01" y2="16"></line>
//                   </svg>
//                   <span>{error}</span>
//                 </div>
//               )}

//               <div className="form-group">
//                 <label htmlFor="email" className="form-label">
//                   Email address
//                 </label>
//                 <div className="input-wrapper">
        
//                   <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="you@example.com"
//                     className="form-input"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <div className="input-wrapper">
            
//                   <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="••••••••"
//                     className="form-input"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>

//               <div className="form-options">
//                 <label className="checkbox-container">
//                   <input
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     disabled={loading}
//                   />
//                   <span className="checkmark"></span>
//                   <span className="checkbox-label">Remember me</span>
//                 </label>
//                 <a href="#forgot-password" className="forgot-password">
//                   Forgot password?
//                 </a>
//               </div>

//               <button
//                 type="submit"
//                 className={`login-button ${loading ? 'loading' : ''}`}
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <div className="button-loader">
//                     <span className="loader-spinner"></span>
//                     <span>Signing in...</span>
//                   </div>
//                 ) : (
//                   'Sign In'
//                 )}
//               </button>
//             </form>

//             {/* <div className="signup-prompt">
//               <span>Don't have an account?</span>
//               <a href="#signup" className="signup-link">Sign up</a>
//             </div> */}
//           </div>
//         </div>

//         {/* Right side - Decorative */}
//         <div className="login-decoration-section">
//   <div className="decoration-content">
//     <h2>Manage with Confidence</h2>
//     <p>Access all tools and insights needed to oversee users, finances, and operations effectively.</p>
//     <div className="feature-list">
//       <div className="feature-item">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//           <polyline points="22 4 12 14.01 9 11.01"></polyline>
//         </svg>
//         <span>User Management Dashboard</span>
//       </div>
//       <div className="feature-item">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//           <polyline points="22 4 12 14.01 9 11.01"></polyline>
//         </svg>
//         <span>Track Financial Reports</span>
//       </div>
//       <div className="feature-item">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//           <polyline points="22 4 12 14.01 9 11.01"></polyline>
//         </svg>
//         <span>Advanced Control Panel</span>
//       </div>
//     </div>
//   </div>
//   <div className="decoration-overlay"></div>
// </div>

//       </div>
//     </div>
//   )
// }

// export default Login


import { useState } from "react"
import axios from "axios"
import "../styles/Login.css"

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setLoading(true)

    try {
      // API call to verify credentials
      const response = await axios.post('https://iks-admin-backend.vercel.app/login', {
        email,
        password,
      })

      // Extract token data from response
      const { access_token, token_type } = response.data
      
      // Create a user object from the email (since API doesn't return user data)
      const user = { 
        email: email,
        // You can add any other user data you need here
        tokenType: token_type
      }
      
      // Store token and user data
      if (rememberMe) {
        localStorage.setItem('token', access_token)
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        sessionStorage.setItem('token', access_token)
        sessionStorage.setItem('user', JSON.stringify(user))
      }

      // Pass user data to parent component
      onLogin(user)

    } catch (error) {
      if (error.response) {
        // Handle different error status codes
        switch (error.response.status) {
          case 401:
            setError("Invalid email or password")
            break
          case 429:
            setError("Too many login attempts. Please try again later")
            break
          case 500:
            setError("Server error. Please try again later")
            break
          default:
            setError(error.response.data.message || "Login failed")
        }
      } else if (error.request) {
        setError("Network error. Please check your connection")
      } else {
        setError("An unexpected error occurred")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left side - Form */}
        <div className="login-form-section">
          <div className="login-form-container">
            <div className="login-header">
              <div className="login-logo">
                <div className="logo-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h1 className="logo-text">IKS CorePanel</h1>
              </div>
              <h2 className="welcome-text">Welcome back</h2>
              <p className="subtitle">Sign in to continue to your dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {error && (
                <div className="error-message">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <div className="input-wrapper">
        
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="form-input"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-wrapper">
            
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="form-input"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={loading}
                  />
                  <span className="checkmark"></span>
                  <span className="checkbox-label">Remember me</span>
                </label>
                <a href="#forgot-password" className="forgot-password">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className={`login-button ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <div className="button-loader">
                    <span className="loader-spinner"></span>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* <div className="signup-prompt">
              <span>Don't have an account?</span>
              <a href="#signup" className="signup-link">Sign up</a>
            </div> */}
          </div>
        </div>

        {/* Right side - Decorative */}
        <div className="login-decoration-section">
  <div className="decoration-content">
    <h2>Manage with Confidence</h2>
    <p>Access all tools and insights needed to oversee users, finances, and operations effectively.</p>
    <div className="feature-list">
      <div className="feature-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>User Management Dashboard</span>
      </div>
      <div className="feature-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>Track Financial Reports</span>
      </div>
      <div className="feature-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>Advanced Control Panel</span>
      </div>
    </div>
  </div>
  <div className="decoration-overlay"></div>
</div>

      </div>
    </div>
  )
}

export default Login