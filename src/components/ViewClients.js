// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../styles/ViewClients.css'
// import AdminPage from './AdminPage';
// import '../styles/AdminPage.css';

// const ViewClients = () => {
//     const [clients, setClients] = useState([]);

//     useEffect(() => {
//         fetchClients();
//     }, []);

//     const fetchClients = async () => {
//         try {
//             const response = await axios.get('/api/customers');
//             setClients(response.data);
//         } catch (error) {
//             console.error('Error fetching clients', error);
//         }
//     };

//     return (
//         <div className='view-clients-container'>
//             <AdminPage/>
//             <h2  className="view-clients-heading">CLIENT DETAILS</h2>
//             <table className="view-clients-table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Occupation</th>
//                         <th>City</th>
//                         <th>State</th>
//                         <th>Country</th>
//                         <th>ZIP</th>
//                         <th>Mobile Number</th>
//                         {/* <th>Date of Birth</th> */}
//                         <th>Nominee Name</th>
//                         <th>Nominee Occupation</th>
//                         <th>Nominee Address</th>
//                         <th>Nominee Mobile Number</th>
//                         <th>Nominee Date of Birth</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {clients.map((client) => (
//                         <tr key={client.customerId}>
//                             <td>{client.customerId}</td>
//                             <td>{client.customerName}</td>
//                             <td>{client.occupation}</td>
//                             <td>{client.city}</td>
//                             <td>{client.state}</td>
//                             <td>{client.country}</td>
//                             <td>{client.zip}</td>
//                             <td>{client.mobileNumber}</td>
//                             {/* <td>{client.DOB1}</td> */}
//                             <td>{client.nomineeName}</td>
//                             <td>{client.nomineeOccupation}</td>
//                             <td>{client.nomineeAddress}</td>
//                             <td>{client.nomineemobileNumber}</td>
//                             <td>{client.nomineeDOB}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ViewClients;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminPage from './AdminPage';

// axios.defaults.baseURL = 'http://localhost:8080';

// const ViewClients = () => {
//     const [clients, setClients] = useState([]);

//     useEffect(() => {
//         fetchClients();
//     }, []);

//     const fetchClients = async () => {
//         try {
//             const response = await axios.get('/api/customers');
//             setClients(response.data);
//         } catch (error) {
//             console.error('Error fetching clients', error);
//         }
//     };

//     return (
//         <div className="flex">
//             <AdminPage />
//             <div className="ml-[210px] mr-[0px] p-10 pr-0 w-full">
//                 <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">CLIENT DETAILS</h2>
//                 <div className='overflow-x-auto'>
//                 <table className="w-full border-collapse">
//                     <thead>
//                         <tr className="bg-blue-700 text-white">
//                             <th className="p-3">ID</th>
//                             <th className="p-3">Name</th>
//                             <th className="p-3">Occupation</th>
//                             <th className="p-3">City</th>
//                             <th className="p-3">State</th>
//                             <th className="p-3">Country</th>
//                             <th className="p-3">ZIP</th>
//                             <th className="p-3">Mobile Number</th>
//                             <th className="p-3">Nominee Name</th>
//                             <th className="p-3">Nominee Occupation</th>
//                             <th className="p-3">Nominee Address</th>
//                             <th className="p-3">Nominee Mobile Number</th>
//                             <th className="p-3">Nominee Date of Birth</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {clients.map((client) => (
//                             <tr key={client.customerId} className="border-b border-gray-200 bg-gray-100 text-center">
//                                 <td className="p-3">{client.customerId}</td>
//                                 <td className="p-3">{client.customerName}</td>
//                                 <td className="p-3">{client.occupation}</td>
//                                 <td className="p-3">{client.city}</td>
//                                 <td className="p-3">{client.state}</td>
//                                 <td className="p-3">{client.country}</td>
//                                 <td className="p-3">{client.zip}</td>
//                                 <td className="p-3">{client.mobileNumber}</td>
//                                 <td className="p-3">{client.nomineeName}</td>
//                                 <td className="p-3">{client.nomineeOccupation}</td>
//                                 <td className="p-3">{client.nomineeAddress}</td>
//                                 <td className="p-3">{client.nomineemobileNumber}</td>
//                                 <td className="p-3">{client.nomineeDOB}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewClients;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminPage from './AdminPage';
import AdminSidePage from './SideBar';

axios.defaults.baseURL = 'http://localhost:8080';

const ViewClients = () => {
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredClients, setFilteredClients] = useState([]);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        try {
            const response = await axios.get('/api/customers');
            setClients(response.data);
            setFilteredClients(response.data); // Initialize filteredClients with all clients
        } catch (error) {
            console.error('Error fetching clients', error);
        }
    };

    const handleSearch = () => {
        const searchResults = clients.filter(client =>
            client.customerName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredClients(searchResults);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="flex ">
            <AdminSidePage />
            <div className="ml-[210px] mr-[0px] p-10 pr-0 w-full">
                <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">CLIENT DETAILS</h2>
                <div className="flex justify-between mb-6">
                    <div className="flex w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={searchTerm}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 w-full ml-4 rounded-l"
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
                                <th className="p-3">ID</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Occupation</th>
                                <th className="p-3">City</th>
                                <th className="p-3">State</th>
                                <th className="p-3">Country</th>
                                <th className="p-3">ZIP</th>
                                <th className="p-3">Mobile Number</th>
                                <th className="p-3">Nominee Name</th>
                                <th className="p-3">Nominee Occupation</th>
                                <th className="p-3">Nominee Address</th>
                                <th className="p-3">Nominee Mobile Number</th>
                                <th className="p-3">Nominee Date of Birth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClients.map((client) => (
                                <tr key={client.customerId} className="border-b border-gray-200 bg-gray-100 text-center">
                                    <td className="p-3">{client.customerId}</td>
                                    <td className="p-3">{client.customerName}</td>
                                    <td className="p-3">{client.occupation}</td>
                                    <td className="p-3">{client.city}</td>
                                    <td className="p-3">{client.state}</td>
                                    <td className="p-3">{client.country}</td>
                                    <td className="p-3">{client.zip}</td>
                                    <td className="p-3">{client.mobileNumber}</td>
                                    <td className="p-3">{client.nomineeName}</td>
                                    <td className="p-3">{client.nomineeOccupation}</td>
                                    <td className="p-3">{client.nomineeAddress}</td>
                                    <td className="p-3">{client.nomineemobileNumber}</td>
                                    <td className="p-3">{client.nomineeDOB}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewClients;