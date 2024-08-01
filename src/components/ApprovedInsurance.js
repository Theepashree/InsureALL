// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminPage from './AdminPage';
// import '../styles/AdminPage.css';

// const ApprovedInsurance = () => {
//     const [clients, setClients] = useState([]);

//     useEffect(() => {
//         fetchApprovedClients();
//     }, []);

//     const fetchApprovedClients = async () => {
//         try {
//             const response = await axios.get('/api/appliedPolicies/approved');
//             setClients(response.data);
//         } catch (error) {
//             console.error('Error fetching approved clients', error);
//         }
//     };

//     return (
//         <div>
//             <AdminPage />
//             <h2>Approved Clients</h2>
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
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ApprovedInsurance;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminPage from './AdminPage';

// axios.defaults.baseURL = 'http://localhost:8080';

// const ApprovedInsurance = () => {
//     const [clients, setClients] = useState([]);

//     useEffect(() => {
//         fetchApprovedClients();
//     }, []);

//     const fetchApprovedClients = async () => {
//         try {
//             const response = await axios.get('/api/appliedPolicies/approved');
//             setClients(response.data);
//         } catch (error) {
//             console.error('Error fetching approved clients', error);
//         }
//     };

//     return (
//         <div className="flex">
//             <AdminPage />
//             <div className="flex-1 flex items-center justify-center p-10 ml-[220px]">
//                 <div className="w-full max-w-6xl">
//                     <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Approved Clients</h2>
//                     <div className="overflow-x-auto">
//                         <table className="w-full border-collapse">
//                             <thead>
//                                 <tr className="bg-blue-700 text-white">
//                                     <th className="p-3 text-left">ID</th>
//                                     <th className="p-3 text-left">Policy Name</th>
//                                     <th className="p-3 text-left">Plan Type</th>
//                                     <th className="p-3 text-left">Customer Name</th>
//                                     <th className="p-3 text-left">Term</th>
//                                     <th className="p-3 text-left">Period</th>
//                                     <th className="p-3 text-left">Current Date</th>
//                                     <th className="p-3 text-left">Next Payment Date</th>
//                                     <th className="p-3 text-left">Term Amount</th>
//                                     <th className="p-3 text-left">Coverage Amount</th>
//                                     <th className="p-3 text-left">Status</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {clients.map((client) => (
//                                     <tr key={client.appliedPolicyId} className="border-b border-gray-200 bg-gray-100">
//                                         <td className="p-3">{client.appliedPolicyId}</td>
//                                         <td className="p-3">{client.policyName}</td>
//                                         <td className="p-3">{client.planType}</td>
//                                         <td className="p-3">{client.customerName}</td>
//                                         <td className="p-3">{client.term}</td>
//                                         <td className="p-3">{client.period}</td>
//                                         <td className="p-3">{client.currentDate}</td>
//                                         <td className="p-3">{client.nextPaymentDate}</td>
//                                         <td className="p-3">{client.termAmount}</td>
//                                         <td className="p-3">{client.coverageAmount}</td>
//                                         <td className="p-3">
//                                             <span className={client.status === 'approved' ? 'text-green-500 font-bold' : ''}>
//                                                 {client.status}
//                                             </span>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ApprovedInsurance;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminPage from './AdminPage';
import AdminSidePage from './SideBar';

axios.defaults.baseURL = 'http://localhost:8080';

const ApprovedInsurance = () => {
    const [clients, setClients] = useState([]);
    const [filteredClients, setFilteredClients] = useState([]);
    const [selectedPlanType, setSelectedPlanType] = useState('all');

    useEffect(() => {
        fetchApprovedClients();
    }, []);

    useEffect(() => {
        filterClientsByPlanType(selectedPlanType);
    }, [clients, selectedPlanType]);

    const fetchApprovedClients = async () => {
        try {
            const response = await axios.get('/api/appliedPolicies/approved');
            setClients(response.data);
            setFilteredClients(response.data); // Initially display all clients
        } catch (error) {
            console.error('Error fetching approved clients', error);
        }
    };

    const filterClientsByPlanType = (planType) => {
        if (planType === 'all') {
            setFilteredClients(clients);
        } else {
            setFilteredClients(clients.filter(client => client.planType === planType));
        }
    };

    const handleButtonClick = (planType) => {
        setSelectedPlanType(planType);
    };

    return (
        <div className="flex">
            <AdminSidePage />
            <div className="flex-1 flex items-center justify-center p-10 ml-[220px] approved-insurance">
                <div className="w-full max-w-6xl ">
                    <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">APPROVED CLIENTS</h2>
                    <div className="flex justify-center mb-6">
                        <button onClick={() => handleButtonClick('all')} className="bg-blue-500 text-white px-4 py-2 rounded mx-2">ALL CLIENTS</button>
                        <button onClick={() => handleButtonClick('life')} className="bg-blue-500 text-white px-4 py-2 rounded mx-2">LIFE</button>
                        <button onClick={() => handleButtonClick('health')} className="bg-blue-500 text-white px-4 py-2 rounded mx-2">HEALTH</button>
                        <button onClick={() => handleButtonClick('home')} className="bg-blue-500 text-white px-4 py-2 rounded mx-2">HOME</button>
                        <button onClick={() => handleButtonClick('vehicle')} className="bg-blue-500 text-white px-4 py-2 rounded mx-2">VEHICLE</button>
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
                                        <td className="p-3">
                                            <span className={client.status === 'approved' ? 'text-green-500 font-bold' : ''}>
                                                {client.status}
                                            </span>
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

export default ApprovedInsurance;