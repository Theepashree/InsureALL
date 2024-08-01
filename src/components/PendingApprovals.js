// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PendingApprovals = () => {
//     const [clients, setClients] = useState([]);

//     useEffect(() => {
//         fetchPendingClients();
//     }, []);

//     const fetchPendingClients = async () => {
//         try {
//             const response = await axios.get('/api/appliedPolicies/pending');
//             setClients(response.data);
//         } catch (error) {
//             console.error('Error fetching pending clients', error);
//         }
//     };

//     const handleApprove = async (id) => {
//         try {
//             await axios.put(`/api/appliedPolicies/${id}/approve`);
//             fetchPendingClients(); // Refresh the list
//         } catch (error) {
//             console.error('Error approving policy', error);
//         }
//     };

//     const handleReject = async (id) => {
//         try {
//             await axios.put(`/api/appliedPolicies/${id}/reject`);
//             fetchPendingClients(); // Refresh the list
//         } catch (error) {
//             console.error('Error rejecting policy', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Pending Approvals</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Policy Name</th>
//                         <th>Plan Type</th>
//                         <th>Customer Name</th>
//                         <th>Term</th>
//                         <th>Period</th>
//                         <th>Current Date</th>
//                         <th>Next Payment Date</th>
//                         <th>Term Amount</th>
//                         <th>Coverage Amount</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {clients.map((client) => (
//                         <tr key={client.appliedPolicyId}>
//                             <td>{client.appliedPolicyId}</td>
//                             <td>{client.policyName}</td>
//                             <td>{client.planType}</td>
//                             <td>{client.customerName}</td>
//                             <td>{client.term}</td>
//                             <td>{client.period}</td>
//                             <td>{client.currentDate}</td>
//                             <td>{client.nextPaymentDate}</td>
//                             <td>{client.termAmount}</td>
//                             <td>{client.coverageAmount}</td>
//                             <td>{client.status}</td>
//                             <td>
//                                 <button onClick={() => handleApprove(client.appliedPolicyId)}>Approve</button>
//                                 <button onClick={() => handleReject(client.appliedPolicyId)}>Reject</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default PendingApprovals;

// import React, { useEffect, useState } from 'react';
//    import { useNavigate } from 'react-router-dom';
//    import axios from 'axios';
//    import AdminPage from './AdminPage';
// import '../styles/AdminPage.css';

//    const PendingApprovals = () => {
//        const [clients, setClients] = useState([]);
//        const navigate = useNavigate(); // For navigation

//        useEffect(() => {
//            fetchPendingClients();
//        }, []);

//        const fetchPendingClients = async () => {
//            try {
//                const response = await axios.get('/api/appliedPolicies/pending');
//                setClients(response.data);
//            } catch (error) {
//                console.error('Error fetching pending clients', error);
//            }
//        };

//        const handleApprove = async (id) => {
//            try {
//                await axios.put(`/api/appliedPolicies/${id}/approve`);
//                fetchPendingClients(); // Refresh the list
//            } catch (error) {
//                console.error('Error approving policy', error);
//            }
//        };

//        const handleReject = async (id) => {
//            try {
//                await axios.put(`/api/appliedPolicies/${id}/reject`);
//                fetchPendingClients(); // Refresh the list
//            } catch (error) {
//                console.error('Error rejecting policy', error);
//            }
//        };

//        const handleViewDocuments = (id) => {
//            navigate(`/admin/view-documents/${id}`); // Navigate to the view documents page
//        };

//        return (
//            <div>
//             <AdminPage/>
//                <h2>Pending Approvals</h2>
//                <table>
//                    <thead>
//                        <tr>
//                            <th>ID</th>
//                            <th>Policy Name</th>
//                            <th>Plan Type</th>
//                            <th>Customer Name</th>
//                            <th>Term</th>
//                            <th>Period</th>
//                            <th>Current Date</th>
//                            <th>Next Payment Date</th>
//                            <th>Term Amount</th>
//                            <th>Coverage Amount</th>
//                            <th>Status</th>
//                            <th>Actions</th>
//                        </tr>
//                    </thead>
//                    <tbody>
//                        {clients.map((client) => (
//                            <tr key={client.appliedPolicyId}>
//                                <td>{client.appliedPolicyId}</td>
//                                <td>{client.policyName}</td>
//                                <td>{client.planType}</td>
//                                <td>{client.customerName}</td>
//                                <td>{client.term}</td>
//                                <td>{client.period}</td>
//                                <td>{client.currentDate}</td>
//                                <td>{client.nextPaymentDate}</td>
//                                <td>{client.termAmount}</td>
//                                <td>{client.coverageAmount}</td>
//                                <td>{client.status}</td>
//                                <td>
//                                    <button onClick={() => handleApprove(client.appliedPolicyId)}>Approve</button>
//                                    <button onClick={() => handleReject(client.appliedPolicyId)}>Reject</button>
//                                    <button onClick={() => handleViewDocuments(client.appliedPolicyId)}>View Documents</button>
//                                </td>
//                            </tr>
//                        ))}
//                    </tbody>
//                </table>
//            </div>
//        );
//    };

//    export default PendingApprovals;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import AdminPage from './AdminPage';
// import '../styles/AdminPage.css';

// axios.defaults.baseURL = 'http://localhost:8080';

// const PendingApprovals = () => {
//   const [clients, setClients] = useState([]);
//   const navigate = useNavigate(); // For navigation

//   useEffect(() => {
//     fetchPendingClients();
//   }, []);

//   const fetchPendingClients = async () => {
//     try {
//       const response = await axios.get('/api/appliedPolicies/pending');
//       setClients(response.data);
//     } catch (error) {
//       console.error('Error fetching pending clients', error);
//     }
//   };

//   const handleApprove = async (id) => {
//     try {
//       await axios.put(`/api/appliedPolicies/${id}/approve`);
//       fetchPendingClients(); // Refresh the list
//     } catch (error) {
//       console.error('Error approving policy', error);
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       await axios.put(`/api/appliedPolicies/${id}/reject`);
//       fetchPendingClients(); // Refresh the list
//     } catch (error) {
//       console.error('Error rejecting policy', error);
//     }
//   };

//   const handleViewDocuments = (id) => {
//     navigate(`/admin/view-documents/${id}`); // Navigate to the view documents page
//   };

//   return (
//     <div className="flex">
//       <AdminPage />
//       <div className="flex-1 flex items-center justify-center p-10 ml-[220px] mr-[0px]">
//         <div className="w-full max-w-full">
//           <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Pending Approvals</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-blue-700 text-white">
//                   <th className="p-3 text-left">ID</th>
//                   <th className="p-3 text-left">Policy Name</th>
//                   <th className="p-3 text-left">Plan Type</th>
//                   <th className="p-3 text-left">Customer Name</th>
//                   <th className="p-3 text-left">Term</th>
//                   <th className="p-3 text-left">Period</th>
//                   <th className="p-3 text-left">Current Date</th>
//                   <th className="p-3 text-left">Next Payment Date</th>
//                   <th className="p-3 text-left">Term Amount</th>
//                   <th className="p-3 text-left">Coverage Amount</th>
//                   <th className="p-3 text-left">Status</th>
//                   <th className="p-3 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {clients.map((client) => (
//                   <tr key={client.appliedPolicyId} className="border-b border-gray-200 bg-gray-100">
//                     <td className="p-3">{client.appliedPolicyId}</td>
//                     <td className="p-3">{client.policyName}</td>
//                     <td className="p-3">{client.planType}</td>
//                     <td className="p-3">{client.customerName}</td>
//                     <td className="p-3">{client.term}</td>
//                     <td className="p-3">{client.period}</td>
//                     <td className="p-3">{client.currentDate}</td>
//                     <td className="p-3">{client.nextPaymentDate}</td>
//                     <td className="p-3">{client.termAmount}</td>
//                     <td className="p-3">{client.coverageAmount}</td>
//                     <td className="p-3">{client.status}</td>
//                     <td className="p-3 flex space-x-2">
//                       <button
//                         onClick={() => handleApprove(client.appliedPolicyId)}
//                         className="bg-green-500 text-white px-2 py-0 text-xs rounded hover:bg-green-700"
//                       >
//                         Approve
//                       </button>
//                       <button
//                         onClick={() => handleReject(client.appliedPolicyId)}
//                         className="bg-red-500 text-white px-2 py-0 text-xs rounded hover:bg-red-700"
//                       >
//                         Reject
//                       </button>
//                       <button
//                         onClick={() => handleViewDocuments(client.appliedPolicyId)}
//                         className="bg-blue-500 text-white px-2 py-0 text-xs rounded hover:bg-blue-700"
//                       >
//                         View Documents
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PendingApprovals;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminPage from './AdminPage';
import '../styles/AdminPage.css';
import AdminSidePage from './SideBar';

axios.defaults.baseURL = 'http://localhost:8080';

const PendingApprovals = () => {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClients, setFilteredClients] = useState([]);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    fetchPendingClients();
  }, []);

  const fetchPendingClients = async () => {
    try {
      const response = await axios.get('/api/appliedPolicies/pending');
      setClients(response.data);
      setFilteredClients(response.data); // Initialize filteredClients with all clients
    } catch (error) {
      console.error('Error fetching pending clients', error);
    }
  };

  const handleSearch = () => {
    const searchResults = clients.filter(client =>
      client.planType.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClients(searchResults);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`/api/appliedPolicies/${id}/approve`);
      fetchPendingClients(); // Refresh the list
    } catch (error) {
      console.error('Error approving policy', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`/api/appliedPolicies/${id}/reject`);
      fetchPendingClients(); // Refresh the list
    } catch (error) {
      console.error('Error rejecting policy', error);
    }
  };

  const handleViewDocuments = (id) => {
    navigate(`/admin/view-documents/${id}`); // Navigate to the view documents page
  };

  return (
    <div className="flex">
      <AdminSidePage />
      <div className="flex-1 flex items-center justify-center p-10 ml-[220px] mr-[0px]">
        <div className="w-full max-w-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">PENDING APPROVALS</h2>
          <div className="flex justify-between mb-6">
            <div className="flex w-full max-w-md">
              <input
                type="text"
                placeholder="Search by plan type"
                value={searchTerm}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 w-full rounded-l"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded-r"
              >
                Search
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Policy Name</th>
                  <th className="p-3 text-left">Plan Type</th>
                  <th className="p-3 text-left">Customer Name</th>
                  <th className="p-3 text-left">Term</th>
                  <th className="p-3 text-left">Period</th>
                  <th className="p-3 text-left">Current Date</th>
                  <th className="p-3 text-left">Next Payment Date</th>
                  <th className="p-3 text-left">Term Amount</th>
                  <th className="p-3 text-left">Coverage Amount</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client) => (
                  <tr key={client.appliedPolicyId} className="border-b border-gray-200 bg-gray-100">
                    <td className="p-3">{client.appliedPolicyId}</td>
                    <td className="p-3">{client.policyName}</td>
                    <td className="p-3">{client.planType}</td>
                    <td className="p-3">{client.customerName}</td>
                    <td className="p-3">{client.term}</td>
                    <td className="p-3">{client.period}</td>
                    <td className="p-3">{client.currentDate}</td>
                    <td className="p-3">{client.nextPaymentDate}</td>
                    <td className="p-3">{client.termAmount}</td>
                    <td className="p-3">{client.coverageAmount}</td>
                    <td className="p-3">{client.status}</td>
                    <td className="p-3 flex space-x-2">
                      <button
                        onClick={() => handleApprove(client.appliedPolicyId)}
                        className="bg-green-500 text-white px-2 py-0 text-xs rounded hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(client.appliedPolicyId)}
                        className="bg-red-500 text-white px-2 py-0 text-xs rounded hover:bg-red-700"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => handleViewDocuments(client.appliedPolicyId)}
                        className="bg-blue-500 text-white px-2 py-0 text-xs rounded hover:bg-blue-700"
                      >
                        View Documents
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingApprovals;

