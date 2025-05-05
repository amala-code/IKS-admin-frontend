// This file simulates API calls to a backend server
// In a real application, these would be actual API calls

import axios from "axios"

// Sample data
const sampleRequests = [
  {
    id: 1,
    courseName: "Advanced Web Development",
    studentName: "Emma Thompson",
    requestDate: "2024-01-15",
    status: "Pending",
  },
  {
    id: 2,
    courseName: "Data Science Fundamentals",
    studentName: "Michael Chen",
    requestDate: "2024-01-14",
    status: "Approved",
  },
  {
    id: 3,
    courseName: "Mobile App Development",
    studentName: "Sarah Johnson",
    requestDate: "2024-01-14",
    status: "Rejected",
  },
  {
    id: 4,
    courseName: "Machine Learning Basics",
    studentName: "David Wilson",
    requestDate: "2024-01-13",
    status: "Approved",
  },
  {
    id: 5,
    courseName: "UI/UX Design Principles",
    studentName: "Lisa Anderson",
    requestDate: "2024-01-13",
    status: "Pending",
  },
  {
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },
  {
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },{
    id: 6,
    courseName: "Cybersecurity Essentials",
    studentName: "James Taylor",
    requestDate: "2024-01-12",
    status: "Approved",
  },
]

let courseRequests = [...sampleRequests]
let nextId = courseRequests.length + 1

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

// Fetch course requests with pagination


export const fetchamountstatus = async () => {
  try {
    const response = await axios.get('http://localhost:8001/members/payment-totals')

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


export const fetchCourseRequests = async (page = 1, perPage = 10) => {
  const start = (page - 1) * perPage
  const end = start + perPage

  try {
    const response = await axios.get('http://localhost:8001/all/members')
    
    // Access the 'members' property from the response
    const courseRequests = response.data.members || []
    console.log(courseRequests)

    const paginatedRequests = courseRequests.slice(start, end)

    return {
      requests: paginatedRequests,
      total: courseRequests.length,
      page,
      perPage,
    }
  } catch (error) {
    console.error("Failed to fetch course requests:", error)
    return {
      requests: [],
      total: 0,
      page,
      perPage,
    }
  }
}

// Add a new course request
// export const addCourseRequest = async (requestData) => {
//   await delay(1000) // Simulate network delay

//   const newRequest = {
//     id: nextId++,
//     ...requestData,
//   }

//   courseRequests = [newRequest, ...courseRequests]

//   return newRequest
// }

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

    const response = await axios.post('http://localhost:8001/register_member', requestData)
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
