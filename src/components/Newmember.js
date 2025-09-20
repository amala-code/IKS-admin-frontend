"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
import StatCard from "./StatCard"
import CourseRequestsTable from "./CourseRequestsTable"
import "../styles/Dashboard.css"
import { fetchDashboardStats, FetchNonMember, fetchamountstatus } from "../api/api"

const NewMember = ({ user, onLogout }) => {
  const navigate = useNavigate()
  const [stats, setStats] = useState({
    totalRequests: 0,
    pendingApprovals: 0,
    approved: 0,
    rejectedRequests: 0,
  })
  const [courseRequests, setCourseRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalMembers,setTotalMembers] = useState(0)
  const [totalSubscriptions,setTotalSubscriptions] = useState(0)
  const [totalRegistration,setTotalRegistration] = useState(0)
  const[amount,setAmount] = useState([])

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true)
        // In a real app, these would be API calls
        const statsData = await fetchDashboardStats()
        const requestsData = await FetchNonMember(currentPage)

        const amountData = await fetchamountstatus()  // renamed

        console.log(amountData)
        
        setTotalSubscriptions(amountData.total_subscription)
        setTotalRegistration(amountData.total_registration)
        console.log(amountData.total_subscription)
        console.log(totalRegistration)
        setAmount(amountData)  // update state if needed

        setStats(statsData)
        setCourseRequests(requestsData.requests)
        setTotalMembers("statsData", requestsData.requests.length)
        setStats((prevStats) => ({ ...prevStats, totalRequests: requestsData.requests.length }))
        setStats((prevStats) => ({ ...prevStats, pendingApprovals: amountData.total_registration }))
        setStats((prevStats) => ({ ...prevStats, approved: amountData.total_subscription }))

        console.log("requestsData.requests", requestsData.requests)
        setTotalPages(Math.ceil(requestsData.total / requestsData.perPage))
      } catch (error) {
        console.error("Error loading dashboard data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadDashboardData()
  }, [currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleAddCourseRequest = () => {
    navigate("/add-course-request")
  }

  const handleStatusChange = async (requestId, newStatus) => {
    // In a real app, this would be an API call
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Update local state
      setCourseRequests((prevRequests) =>
        prevRequests.map((request) => (request.id === requestId ? { ...request, status: newStatus } : request)),
      )

      // Update stats based on status change
      setStats((prevStats) => {
        const updatedStats = { ...prevStats }

        // Decrement previous status count
        const request = courseRequests.find((r) => r.id === requestId)
        if (request) {
          if (request.status === "Pending") updatedStats.pendingApprovals--
          else if (request.status === "Approved") updatedStats.approved--
          else if (request.status === "Rejected") updatedStats.rejectedRequests--
        }

        // Increment new status count
        if (newStatus === "Pending") updatedStats.pendingApprovals++
        else if (newStatus === "Approved") updatedStats.approved++
        else if (newStatus === "Rejected") updatedStats.rejectedRequests++

        return updatedStats
      })
    } catch (error) {
      console.error("Error updating status:", error)
    }
  }
  

  return (
    <div className="dashboard-container">
      <Sidebar user={user} />
      <div className="main-content">
        <Header title="Admin Dashboard" onLogout={onLogout} />

        {loading ? (
          <div className="loading">Loading dashboard data...</div>
        ) : (
          <>
            {/* <div className="stats-container">
              <StatCard
                title="Total Members"
                value={stats.totalRequests}
                // change="+12.5%"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path>
                  </svg>
                }
                color="blue"
              />
              <StatCard
                title="Total Registration Amount "
                value={stats.pendingApprovals}
                // change="-2.3%"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M12.5 7H11v2h1.5c.83 0 1.5.67 1.5 1.5S13.33 12 12.5 12H11v2h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H11v2h1.5c1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.98-1.19-2.63.75-.64 1.19-1.58 1.19-2.62 0-1.93-1.57-3.5-3.5-3.5z"/>
                  <path d="M11 7H9v2h2v10H9v2h6v-2h-2V9h2V7H11z"/>
                </svg>
                }
                color="orange"
              />
              <StatCard
                title="Total Subscription Amount"
                value={stats.approved}
                // change="+8.1%"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M12.5 7H11v2h1.5c.83 0 1.5.67 1.5 1.5S13.33 12 12.5 12H11v2h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H11v2h1.5c1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.98-1.19-2.63.75-.64 1.19-1.58 1.19-2.62 0-1.93-1.57-3.5-3.5-3.5z"/>
                  <path d="M11 7H9v2h2v10H9v2h6v-2h-2V9h2V7H11z"/>
                </svg>
                }
                color="green"
              />
              <StatCard
                title="Rejected Requests"
                value={stats.rejectedRequests}
                // change="+3.2%"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                }
                color="red"
              />
            </div> */}

            <div className="course-requests-section">
              <div className="section-header">
                <h2>All Members</h2>
                <div className="section-actions">
                  {/* <button className="export-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"></path>
                    </svg>
                    Export
                  </button> */}
                  <div className="dropdown">
                    <button className="bulk-actions-button" onClick={handleAddCourseRequest}>
                      <span>Add New Request</span>
                    </button>
                  </div>
                </div>
              </div>

              <CourseRequestsTable
                requests={courseRequests}
                onStatusChange={handleStatusChange}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
       
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default NewMember
