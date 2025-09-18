"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
import "../styles/AddCourseRequest.css"
import { addCourseRequest } from "../api/api"
import axios from "axios"

const AddCourseRequest = ({ user, onLogout }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    studentName: "",
    requestDate: new Date().toISOString().split("T")[0],
    status: "Pending",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   // Basic validation
  //   if (!formData.courseName || !formData.studentName) {
  //     setError("Please fill in all required fields")
  //     return
  //   }

  //   try {
  //     setLoading(true)
  //     setError("")

  //     // In a real app, this would be an API call
  //     await addCourseRequest(formData)

  //     // Navigate back to dashboard
  //     navigate("/dashboard")
  //   } catch (error) {
  //     console.error("Error adding course request:", error)
  //     setError("Failed to add course request. Please try again.")
  //   } finally {
  //     setLoading(false)
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault()
  
    // Basic validation
    if (!formData.studentName) {
      setError("Please fill in all required fields")
      return
    }
  
    try {
      setLoading(true)
      setError("")
  
      // Transform form data to match API requirements
      const apiData = {
        name: formData.studentName,
        address: formData.address || "string",
        email: formData.email || "user@example.com", 
        phone: formData.phone || "string",
        id: formData.studentId || "string",
        year_of_joining: parseInt(formData.yearOfJoining) || 0,
        amount_paid_total: 0,
        member_true:true,
        amount_paid_registration:0,
        amount_subscription: 0,
        amount_paid_subscription:0
      }
  
      // Make API call to register member
      const response = await axios.post('https://iks-admin-backend.onrender.com/register_member', apiData)
      
      if (response.data) {
        // Navigate back to dashboard on success
        navigate("/dashboard")
      }
    } catch (error) {
      console.error("Error adding course request:", error)
      setError("Failed to add course request. Please try again.")
    } finally {
      setLoading(false)
    }
  }
//   return (
//     <div className="dashboard-container">
//       <Sidebar user={user} />
//       <div className="main-content">
//         <Header title="Add Course Request" onLogout={onLogout} />

//         <div className="add-course-request-container">
//           <div className="form-card">
//             <h2>Add New Course Request</h2>

//             {error && <div className="error-message">{error}</div>}

//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="courseName">Course Name *</label>
//                 <input
//                   type="text"
//                   id="courseName"
//                   name="courseName"
//                   value={formData.courseName}
//                   onChange={handleChange}
//                   placeholder="Enter course name"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="studentName">Member Name *</label>
//                 <input
//                   type="text"
//                   id="studentName"
//                   name="studentName"
//                   value={formData.studentName}
//                   onChange={handleChange}
//                   placeholder="Enter Member name"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="requestDate">Request Date</label>
//                 <input
//                   type="date"
//                   id="requestDate"
//                   name="requestDate"
//                   value={formData.requestDate}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="status">Status</label>
//                 <select id="status" name="status" value={formData.status} onChange={handleChange}>
//                   <option value="Pending">Pending</option>
//                   <option value="Approved">Approved</option>
//                   <option value="Rejected">Rejected</option>
//                 </select>
//               </div>

//               <div className="form-actions">
//                 <button type="button" className="cancel-button" onClick={() => navigate("/dashboard")}>
//                   Cancel
//                 </button>
//                 <button type="submit" className="submit-button" disabled={loading}>
//                   {loading ? "Adding..." : "Add Request"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddCourseRequest
return (
  <div className="dashboard-container">
    <Sidebar user={user} />
    <div className="main-content">
      <Header title="Add Course Request" onLogout={onLogout} />

      <div className="add-course-request-container">
        <div className="form-card">
          <h2>Add New Course Request</h2>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
    

            <div className="form-group">
              <label htmlFor="studentName">member Name *</label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter Member name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="studentId">member ID</label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="Enter Member ID"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                rows="3"
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="address">Membership amount </label>
              <textarea
                id="address"
                name="address"
                value={formData.amount_paid_registration}
                onChange={handleChange}
                placeholder="Enter address"
                rows="3"
              />
            </div>     <div className="form-group">
              <label htmlFor="address">Subscription amount</label>
              <textarea
                id="address"
                name="address"
                value={formData.amount_paid_subscription}
                onChange={handleChange}
                placeholder="Enter address"
                rows="3"
              />
            </div> */}

            <div className="form-group">
              <label htmlFor="requestDate">Request Date</label>
              <input
                type="date"
                id="requestDate"
                name="requestDate"
                value={formData.requestDate}
                onChange={handleChange}
              />
            </div>

 

            <div className="form-actions">
              <button type="button" className="cancel-button" onClick={() => navigate("/dashboard")}>
                Cancel
              </button>
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? "Adding..." : "Add Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)}
export default AddCourseRequest
