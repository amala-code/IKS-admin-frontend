// // This file simulates API calls to a backend server
// // In a real application, these would be actual API calls

// import axios from "axios"

// // Sample data (keeping for backwards compatibility)
// const sampleRequests = [
//   {
//     id: 1,
//     courseName: "Advanced Web Development",
//     studentName: "Emma Thompson",
//     requestDate: "2024-01-15",
//     status: "Pending",
//   },
//   // ... rest of sample data
// ]

// let courseRequests = [...sampleRequests]
// let nextId = courseRequests.length + 1

// // Simulate API delay
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// // Fetch dashboard stats
// export const fetchDashboardStats = async () => {
//   await delay(800) // Simulate network delay

//   const totalRequests = courseRequests.length
//   const pendingApprovals = courseRequests.filter((req) => req.status === "Pending").length
//   const approved = courseRequests.filter((req) => req.status === "Approved").length
//   const rejectedRequests = courseRequests.filter((req) => req.status === "Rejected").length

//   return {
//     totalRequests,
//     pendingApprovals,
//     approved,
//     rejectedRequests,
//   }
// }

// // Fetch ALL members without pagination
// export const fetchCourseRequests = async () => {
//   try {
//     const response = await axios.get('https://new-admin-backend.vercel.app/all/members')
    
//     // Access the 'members' property from the response
//     const allMembers = response.data.members || []
//     console.log(`Fetched ${allMembers.length} total members`)

//     return {
//       requests: allMembers,
//       total: allMembers.length,
//     }
//   } catch (error) {
//     console.error("Failed to fetch all members:", error)
//     return {
//       requests: [],
//       total: 0,
//     }
//   }
// }

// export const fetchamountstatus = async () => {
//   try {
//     const response = await axios.get('https://new-admin-backend.vercel.app/members/payment-totals')

//     const total_amount = response.data
//     console.log(total_amount)

//     return {
//       total_registration: total_amount.total_registration,
//       total_subscription: total_amount.total_subscription
//     }
//   } catch (error) {
//     console.error("Failed to fetch payment totals:", error)
//     return {
//       total_registration: 0,
//       total_subscription: 0
//     }
//   }
// }

// export const addCourseRequest = async (formData) => {
//   try {
//     // Transform the form data to match the API requirements
//     const requestData = {
//       name: formData.studentName || "string",
//       address: formData.address || "string", 
//       email: formData.email || "user@example.com",
//       phone: formData.phone || "string",
//       id: formData.studentId || "string",
//       year_of_joining: parseInt(formData.yearOfJoining) || 0,
//     }

//     const response = await axios.post('https://new-admin-backend.vercel.app/register_member', requestData)
//     return response.data
//   } catch (error) {
//     console.error('Failed to register member:', error)
//     throw error
//   }
// }

// // Update course request status
// export const updateRequestStatus = async (requestId, newStatus) => {
//   await delay(500) // Simulate network delay

//   const requestIndex = courseRequests.findIndex((req) => req.id === requestId)

//   if (requestIndex === -1) {
//     throw new Error("Request not found")
//   }

//   courseRequests[requestIndex] = {
//     ...courseRequests[requestIndex],
//     status: newStatus,
//   }

//   return courseRequests[requestIndex]
// }

// This file simulates API calls to a backend server
// In a real application, these would be actual API calls

import axios from "axios"

// Sample data (keeping for backwards compatibility)
const sampleRequests = [
  {
    id: 1,
    courseName: "Advanced Web Development",
    studentName: "Emma Thompson",
    requestDate: "2024-01-15",
    status: "Pending",
  },
  // ... rest of sample data
]

let courseRequests = [...sampleRequests]
let nextId = courseRequests.length + 1

// Function to get auth token from storage
const getAuthToken = () => {
  return localStorage.getItem('token') || sessionStorage.getItem('token')
}

// Function to get auth headers
const getAuthHeaders = () => {
  const token = getAuthToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Fetch dashboard stats
export const fetchDashboardStats = async () => {
  await delay(800) // Simulate network delay

  const totalRequests = courseRequests.length
  const pendingApprovals = courseRequests.filter((req) => req.status === "Pending").length
  const approved = courseRequests.filter((req) => req.status === "Approved").length
  const rejectedRequests = courseRequests.filter((req) => req.status === "Rejected").length

  return {
    totalRequests,
    pendingApprovals,
    approved,
    rejectedRequests,
  }
}

// Fetch ALL members without pagination
export const fetchCourseRequests = async () => {
  try {
    const response = await axios.get('https://new-admin-backend.vercel.app/all/members', {
      headers: getAuthHeaders()
    })
    
    // Access the 'members' property from the response
    const allMembers = response.data.members || []
    console.log(`Fetched ${allMembers.length} total members`)

    return {
      requests: allMembers,
      total: allMembers.length,
    }
  } catch (error) {
    console.error("Failed to fetch all members:", error)
    return {
      requests: [],
      total: 0,
    }
  }
}
export const FetchNonMember = async () => {
  try {
    const response = await axios.get('https://new-admin-backend.vercel.app/non_member_requests', {
      headers: getAuthHeaders()
    })
    
    // Access the 'members' property from the response
    const allMembers = response.data.members || []
    console.log(`Fetched ${allMembers.length} total members`)

    return {
      requests: allMembers,
      total: allMembers.length,
    }
  } catch (error) {
    console.error("Failed to fetch all members:", error)
    return {
      requests: [],
      total: 0,
    }
  }
}


export const fetchamountstatus = async () => {
  try {
    const response = await axios.get('https://new-admin-backend.vercel.app/members/payment-totals', {
      headers: getAuthHeaders()
    })

    const total_amount = response.data
    console.log(total_amount)

    return {
      total_registration: total_amount.total_registration,
      total_subscription: total_amount.total_subscription
    }
  } catch (error) {
    console.error("Failed to fetch payment totals:", error)
    return {
      total_registration: 0,
      total_subscription: 0
    }
  }
}

export const addCourseRequest = async (formData) => {
  try {
    // Transform the form data to match the API requirements
    const requestData = {
      name: formData.studentName || "string",
      address: formData.address || "string", 
      email: formData.email || "user@example.com",
      phone: formData.phone || "string",
      id: formData.studentId || "string",
      year_of_joining: parseInt(formData.yearOfJoining) || 0,
    }

    const response = await axios.post('https://new-admin-backend.vercel.app/register_member', requestData, {
      headers: getAuthHeaders()
    })
    return response.data
  } catch (error) {
    console.error('Failed to register member:', error)
    throw error
  }
}

// Update course request status
export const updateRequestStatus = async (requestId, newStatus) => {
  await delay(500) // Simulate network delay

  const requestIndex = courseRequests.findIndex((req) => req.id === requestId)

  if (requestIndex === -1) {
    throw new Error("Request not found")
  }

  courseRequests[requestIndex] = {
    ...courseRequests[requestIndex],
    status: newStatus,
  }

  return courseRequests[requestIndex]
}