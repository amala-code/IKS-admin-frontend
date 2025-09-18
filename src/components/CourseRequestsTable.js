
// import { useState } from "react"
// import "../styles/CourseRequestsTable.css"
// import "../components/Update.js"
// import MemberEditDialog from "../components/Update.js"


// const CourseRequestsTable = ({ requests, onStatusChange, currentPage, totalPages, onPageChange }) => {
//   const [activeDropdown, setActiveDropdown] = useState(null)
//   const [selectedMemberId, setSelectedMemberId] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
  
//   const toggleDropdown = (id) => {
//     setActiveDropdown(activeDropdown === id ? null : id)
//   }
//   const exportToCSV = () => {
//     const headers = [
//       "Member ID",
//       "Name",
//       "Email",
//       "Phone",
//       "Registration Amount",
//       "Subscription Amount",
//       "Address",
//       "Subscription Paid Status"
//     ]
  
//     const rows = requests.map((req) => [
//       req.id,
//       req.name,
//       req.email,
//       req.phone,
//       req.amount_paid_registration,
//       req.amount_paid_subscription,
//       req.address,
//       req.amount_subscription ? "Paid" : "Unpaid"
//     ])
  
//     const csvContent =
//       [headers, ...rows]
//         .map((e) => e.map((v) => `"${v}"`).join(","))
//         .join("\n")
  
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
//     const link = document.createElement("a")
//     link.href = URL.createObjectURL(blob)
//     link.setAttribute("download", "member_data.csv")
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }
  
//   const handleStatusChange = (requestId, newStatus) => {
//     onStatusChange(requestId, newStatus)
//     setActiveDropdown(null)
//   }

//   const handleUpdateMember = (requestId) => {
//     setSelectedMemberId(requestId);
//     setIsDialogOpen(true);
//   };
//   const handleUpdateSuccess = (updatedData) => {
//     console.log('Member updated:', updatedData);
//     // Refresh your member list or update state as needed
//   };

//   const handleCloseDialog = () => {
//     setIsDialogOpen(false);
//     setSelectedMemberId(null);
//   };
//   const getStatusClass = (status) => {
//     switch (status) {
//       case "Approved":
//         return "status-approved"
//       case "Rejected":
//         return "status-rejected"
//       case "Pending":
//         return "status-pending"
//       default:
//         return ""
//     }
//   }

//   const handleUpdateMemberold =(requestId) => {
    
//     <MemberEditDialog
//     memberId={selectedMemberId}
//     isOpen={isDialogOpen}
//     onClose={handleCloseDialog}
//     onUpdateSuccess={handleUpdateSuccess}
//   />
    
//   }

//   return (
//     <div className="course-requests-table-container">

//   <button className="export-button"     onClick={exportToCSV} >
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"></path>
//                     </svg>
            
//                     Export
//                   </button>

//       <table className="course-requests-table">
//       <thead>

//           <tr>
//             <th>Member ID</th>
//             <th>Member Name</th>
//             <th>Member Email</th>
//             <th>Member Phone</th>
//             <th>Registration amount</th>
//             <th>subscription amount</th>
//             <th> Address</th>
//             <th>Subscription  Paid Status</th>

//           </tr>
//         </thead>
//         <tbody>
//           {console.log(requests)}
//           {requests.map((request) => (

//             <tr key={request._id}>
//               <td>{request.id}</td>
//               <td>{request.name}</td>
//               <td>{request.email}</td>
//               <td>{request.phone}</td>
//               <td>{request.amount_paid_registration}</td>
//               <td>{request.amount_paid_subscription}</td>
//               <td>{request.address}</td>
//               <td style={{ color: request.amount_subscription ? 'green' : 'red' }}>
//   {request.amount_subscription ? 'Paid' : 'Unpaid'}
// </td>
              





//               <td>
//                 <span className={`status-badge ${getStatusClass(request.status)}`}>{request.status}</span>
//               </td>
//               <td>
//                 <div className="actions-dropdown">
//                   <button className="actions-button" onClick={() => toggleDropdown(request.id)}>
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
//                     </svg>
//                   </button>
//                   {activeDropdown === request.id && (
//                     <div className="dropdown-menu">
                   

//                       <button className="dropdown-item" onClick={() => handleUpdateMember(request.id, "Pending")}>
//                         Update Member Info
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination">
//         <div className="pagination-info">
//           Showing {requests.length > 0 ? 1 : 0}-{requests.length} of {requests.length} results
//         </div>
//         <div className="pagination-controls">
//           <button
//             className="pagination-button"
//             disabled={currentPage === 1}
//             onClick={() => onPageChange(currentPage - 1)}
//           >
//             Previous
//           </button>

//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               className={`pagination-button ${currentPage === page ? "active" : ""}`}
//               onClick={() => onPageChange(page)}
//             >
//               {page}
//             </button>
//           ))}

//           <button
//             className="pagination-button"
//             disabled={currentPage === totalPages}
//             onClick={() => onPageChange(currentPage + 1)}
//           >
//             Next
//           </button>
              
//     <MemberEditDialog
//     memberId={selectedMemberId}
//     isOpen={isDialogOpen}
//     onClose={handleCloseDialog}
//     onUpdateSuccess={handleUpdateSuccess}
//   />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CourseRequestsTable

import { useState } from "react"
import "../styles/CourseRequestsTable.css"
import "../components/Update.js"
import MemberEditDialog from "../components/Update.js"

const CourseRequestsTable = ({ requests, onStatusChange }) => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id)
  }

  // Filter requests based on search term
  const filteredRequests = requests.filter((request) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      request.name?.toLowerCase().includes(searchLower) ||
      request.email?.toLowerCase().includes(searchLower) ||
      request.phone?.toLowerCase().includes(searchLower) ||
      request.id?.toString().toLowerCase().includes(searchLower) ||
      request.address?.toLowerCase().includes(searchLower) ||
      request.amount_paid_registration?.toString().includes(searchLower) ||
      request.amount_paid_subscription?.toString().includes(searchLower)
    );
  });

  const exportToCSV = () => {
    const headers = [
      "Member ID",
      "Name",
      "Email",
      "Phone",
      "Registration Amount",
      "Subscription Amount",
      "Address",
      "Subscription Paid Status"
    ]
  
    const rows = filteredRequests.map((req) => [
      req.id,
      req.name,
      req.email,
      req.phone,
      req.amount_paid_registration,
      req.amount_paid_subscription,
      req.address,
      req.amount_subscription ? "Paid" : "Unpaid"
    ])
  
    const csvContent =
      [headers, ...rows]
        .map((e) => e.map((v) => `"${v}"`).join(","))
        .join("\n")
  
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.setAttribute("download", "member_data.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  const handleStatusChange = (requestId, newStatus) => {
    onStatusChange(requestId, newStatus)
    setActiveDropdown(null)
  }

  const handleUpdateMember = (requestId) => {
    setSelectedMemberId(requestId);
    setIsDialogOpen(true);
  };

  const handleUpdateSuccess = (updatedData) => {
    console.log('Member updated:', updatedData);
    // Refresh your member list or update state as needed
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedMemberId(null);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Approved":
        return "status-approved"
      case "Rejected":
        return "status-rejected"
      case "Pending":
        return "status-pending"
      default:
        return ""
    }
  }

  return (
    <div className="course-requests-table-container">
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search by name, email, phone, ID, address..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
            width: '300px'
          }}
        />
        
        <button className="export-button" onClick={exportToCSV}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"></path>
          </svg>
          Export
        </button>
      </div>

      {/* <div style={{ marginBottom: '10px', color: '#666' }}>
        Showing {filteredRequests.length} of {requests.length} members
      </div> */}

      <table className="course-requests-table">
        <thead>
          <tr>
            <th>Member ID</th>
            <th>Member Name</th>
            <th>Member Email</th>
            <th>Member Phone</th>
            <th>Registration amount</th>
            <th>Subscription amount</th>
            <th>Address</th>
            <th>Subscription Paid Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {console.log(requests)}
          {filteredRequests.map((request) => (
            <tr key={request._id}>
              <td>{request.id}</td>
              <td>{request.name}</td>
              <td>{request.email}</td>
              <td>{request.phone}</td>
              <td>{request.amount_paid_registration}</td>
              <td>{request.amount_paid_subscription}</td>
              <td>{request.address}</td>
              <td style={{ color: request.amount_subscription ? 'green' : 'red' }}>
                {request.amount_subscription ? 'Paid' : 'Unpaid'}
              </td>
              <td>
                <div className="actions-dropdown">
                  <button className="actions-button" onClick={() => toggleDropdown(request.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                  </button>
                  {activeDropdown === request.id && (
                    <div className="dropdown-menu">
                      <button className="dropdown-item" onClick={() => handleUpdateMember(request.id, "Pending")}>
                        Update Member Info
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <MemberEditDialog
        memberId={selectedMemberId}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onUpdateSuccess={handleUpdateSuccess}
      />
    </div>
  )
}

export default CourseRequestsTable