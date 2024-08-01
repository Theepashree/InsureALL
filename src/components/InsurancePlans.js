// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:8080';

// const InsurancePlans = () => {
//     const [plans, setPlans] = useState([]);
//     const [selectedId, setSelectedId] = useState(null);
//     const [formData, setFormData] = useState({
//         policyName: '',
//         planType: '',
//         description: '',
//         period: ''
//     });

//     // useEffect(() => {
//     //     fetchPlans();
//     // }, []);

//     const fetchPlans = async () => {
//         try {
//             const response = await axios.get('/api/policies');
//             setPlans(response.data);
//         } catch (error) {
//             console.error('Error fetching insurance plans', error);
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleAdd = async () => {
//         try {
//             const response = await axios.post('/api/policies', formData);
//             setPlans([...plans, response.data]);
//             setFormData({
//                 policyName: '',
//                 planType: '',
//                 description: '',
//                 period: ''
//             });
//         } catch (error) {
//             console.error('Error adding insurance plan', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`/api/policies/${id}`);
//             setPlans(plans.filter(plan => plan.policyId !== id));
//         } catch (error) {
//             console.error('Error deleting insurance plan', error);
//         }
//     };

//     const handleUpdate = async (id) => {
//         try {
//             const response = await axios.put(`/api/policies/${id}`, formData);
//             setPlans(plans.map(plan => (plan.policyId === id ? response.data : plan)));
//             setFormData({
//                 policyName: '',
//                 planType: '',
//                 description: '',
//                 period: ''
//             });
//             setSelectedId(null);
//         } catch (error) {
//             console.error('Error updating insurance plan', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Insurance Plans</h2>
//             <div>
//                 <input
//                     type="text"
//                     name="policyName"
//                     placeholder="Policy Name"
//                     value={formData.policyName}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="text"
//                     name="planType"
//                     placeholder="Plan Type"
//                     value={formData.planType}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="text"
//                     name="description"
//                     placeholder="Description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="text"
//                     name="period"
//                     placeholder="Period"
//                     value={formData.period}
//                     onChange={handleInputChange}
//                 />
//                 <button onClick={handleAdd}>Add Insurance</button>
//                 {selectedId && (
//                     <button onClick={() => handleUpdate(selectedId)}>Update Insurance</button>
//                 )}
//             </div>
//             <button onClick={fetchPlans}>View Insurance</button>
            
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Type</th>
//                         <th>Description</th>
//                         <th>Period</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {plans.map((plan) => (
//                         <tr key={plan.policyId}>
//                             <td>{plan.policyId}</td>
//                             <td>{plan.policyName}</td>
//                             <td>{plan.planType}</td>
//                             <td>{plan.description}</td>
//                             <td>{plan.period}</td>
//                             <td>
//                                 <button onClick={() => setSelectedId(plan.policyId)}>Edit</button>
//                                 <button onClick={() => handleDelete(plan.policyId)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table> 
                
//         </div>
//     );
// };

// export default InsurancePlans;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './AdminPage'
// import AdminPage from './AdminPage';

// axios.defaults.baseURL = 'http://localhost:8080';

// const InsurancePlans = () => {
//     const [plans, setPlans] = useState([]);
//     const [selectedId, setSelectedId] = useState(null);
//     const [formData, setFormData] = useState({
//         policyName: '',
//         planType: '',
//         description: '',
//         period: ''
//     });
//     const [showTable, setShowTable] = useState(false);

//     const fetchPlans = async () => {
//         try {
//             const response = await axios.get('/api/policies');
//             setPlans(response.data);
//             setShowTable(true); // Show the table when data is fetched
//         } catch (error) {
//             console.error('Error fetching insurance plans', error);
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleAdd = async () => {
//         try {
//             const response = await axios.post('/api/policies', formData);
//             setPlans([...plans, response.data]);
//             setFormData({
//                 policyName: '',
//                 planType: '',
//                 description: '',
//                 period: ''
//             });
//         } catch (error) {
//             console.error('Error adding insurance plan', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`/api/policies/${id}`);
//             setPlans(plans.filter(plan => plan.policyId !== id));
//         } catch (error) {
//             console.error('Error deleting insurance plan', error);
//         }
//     };

//     const handleUpdate = async (id) => {
//         try {
//             const response = await axios.put(`/api/policies/${id}`, formData);
//             setPlans(plans.map(plan => (plan.policyId === id ? response.data : plan)));
//             setFormData({
//                 policyName: '',
//                 planType: '',
//                 description: '',
//                 period: ''
//             });
//             setSelectedId(null);
//         } catch (error) {
//             console.error('Error updating insurance plan', error);
//         }
//     };

//     return (
//         <div>
//             {/* <div>
//             <AdminPage/>
//             </div> */}
//             <h2>Insurance Plans</h2>
//             <div>
//                 <input
//                     type="text"
//                     name="policyName"
//                     placeholder="Policy Name"
//                     value={formData.policyName}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="text"
//                     name="planType"
//                     placeholder="Plan Type"
//                     value={formData.planType}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="text"
//                     name="description"
//                     placeholder="Description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="text"
//                     name="period"
//                     placeholder="Period"
//                     value={formData.period}
//                     onChange={handleInputChange}
//                 />
//                 <button onClick={handleAdd}>Add Insurance</button>
//                 {selectedId && (
//                     <button onClick={() => handleUpdate(selectedId)}>Update Insurance</button>
//                 )}
//             </div>
//             <button onClick={fetchPlans}>View Insurance</button>
//             {showTable && (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Type</th>
//                             <th>Description</th>
//                             <th>Period</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {plans.map((plan) => (
//                             <tr key={plan.policyId}>
//                                 <td>{plan.policyId}</td>
//                                 <td>{plan.policyName}</td>
//                                 <td>{plan.planType}</td>
//                                 <td>{plan.description}</td>
//                                 <td>{plan.period}</td>
//                                 <td>
//                                     <button onClick={() => setSelectedId(plan.policyId)}>Edit</button>
//                                     <button onClick={() => handleDelete(plan.policyId)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default InsurancePlans;


// import React, { useState } from 'react';
// import axios from 'axios';
// import AdminPage from './AdminPage';
// import '../styles/AdminPage.css';

// axios.defaults.baseURL = 'http://localhost:8080';

// const InsurancePlans = () => {
//     const [plans, setPlans] = useState([]);
//     const [selectedId, setSelectedId] = useState(null);
//     const [formData, setFormData] = useState({
//         policyName: '',
//         planType: '',
//         description: '',
//         period: ''
//     });
//     const [showTable, setShowTable] = useState(false);

//     const fetchPlans = async () => {
//         try {
//             const response = await axios.get('/api/policies');
//             setPlans(response.data);
//             setShowTable(true); // Show the table when data is fetched
//         } catch (error) {
//             console.error('Error fetching insurance plans', error);
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleAdd = async () => {
//         try {
//             const response = await axios.post('/api/policies', formData);
//             setPlans([...plans, response.data]);
//             setFormData({
//                 policyName: '',
//                 planType: '',
//                 description: '',
//                 period: ''
//             });
//         } catch (error) {
//             console.error('Error adding insurance plan', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`/api/policies/${id}`);
//             setPlans(plans.filter(plan => plan.policyId !== id));
//         } catch (error) {
//             console.error('Error deleting insurance plan', error);
//         }
//     };

//     const handleUpdate = async (id) => {
//         try {
//             const response = await axios.put(`/api/policies/${id}`, formData);
//             setPlans(plans.map(plan => (plan.policyId === id ? response.data : plan)));
//             setFormData({
//                 policyName: '',
//                 planType: '',
//                 description: '',
//                 period: ''
//             });
//             setSelectedId(null);
//         } catch (error) {
//             console.error('Error updating insurance plan', error);
//         }
//     };

//     return (
//         <div className="flex">
//             <AdminPage />
//             <div className="ml-[250px] p-10 w-full">
//                 <h2 className="text-2xl font-bold mb-6">Insurance Plans</h2>
//                 <div className="space-y-4">
//                     <input
//                         type="text"
//                         name="policyName"
//                         placeholder="Policy Name"
//                         value={formData.policyName}
//                         onChange={handleInputChange}
//                         className="border border-gray-300 p-2 w-full"
//                     />
//                     <input
//                         type="text"
//                         name="planType"
//                         placeholder="Plan Type"
//                         value={formData.planType}
//                         onChange={handleInputChange}
//                         className="border border-gray-300 p-2 w-full"
//                     />
//                     <input
//                         type="text"
//                         name="description"
//                         placeholder="Description"
//                         value={formData.description}
//                         onChange={handleInputChange}
//                         className="border border-gray-300 p-2 w-full"
//                     />
//                     <input
//                         type="text"
//                         name="period"
//                         placeholder="Period"
//                         value={formData.period}
//                         onChange={handleInputChange}
//                         className="border border-gray-300 p-2 w-full"
//                     />
//                     <div className="space-x-4">
//                         <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add Insurance</button>
//                         {selectedId && (
//                             <button onClick={() => handleUpdate(selectedId)} className="bg-green-500 text-white px-4 py-2 rounded">Update Insurance</button>
//                         )}
//                     </div>
//                 </div>
//                 <button onClick={fetchPlans} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">View Insurance</button>
//                 {showTable && (
//                     <table className="mt-6 w-full border-collapse border border-gray-200">
//                         <thead>
//                             <tr className="bg-gray-100">
//                                 <th className="border border-gray-200 p-2">ID</th>
//                                 <th className="border border-gray-200 p-2">Name</th>
//                                 <th className="border border-gray-200 p-2">Type</th>
//                                 <th className="border border-gray-200 p-2">Description</th>
//                                 <th className="border border-gray-200 p-2">Period</th>
//                                 <th className="border border-gray-200 p-2">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {plans.map((plan) => (
//                                 <tr key={plan.policyId} className="text-center">
//                                     <td className="border border-gray-200 p-2">{plan.policyId}</td>
//                                     <td className="border border-gray-200 p-2">{plan.policyName}</td>
//                                     <td className="border border-gray-200 p-2">{plan.planType}</td>
//                                     <td className="border border-gray-200 p-2">{plan.description}</td>
//                                     <td className="border border-gray-200 p-2">{plan.period}</td>
//                                     <td className="border border-gray-200 p-2 space-x-2">
//                                         <button onClick={() => setSelectedId(plan.policyId)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
//                                         <button onClick={() => handleDelete(plan.policyId)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default InsurancePlans;

// import React, { useState } from 'react';
// import axios from 'axios';
// import AdminPage from './AdminPage';
// import '../styles/AdminPage.css';
// import AdminSidePage from './SideBar';

// axios.defaults.baseURL = 'http://localhost:8080';

// const InsurancePlans = () => {
//     const [plans, setPlans] = useState([]);
//     const [selectedId, setSelectedId] = useState(null);
//     const [formData, setFormData] = useState({
//         policyName: '',
//         planType: '',
//         description: '',
//         period: ''
//     });
//     const [showTable, setShowTable] = useState(false);

//     const fetchPlans = async () => {
//         if (!showTable) {
//             try {
//                 const response = await axios.get('/api/policies');
//                 setPlans(response.data);
//             } catch (error) {
//                 console.error('Error fetching insurance plans', error);
//             }
//         }
//         setShowTable(!showTable);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleAdd = async () => {
//         try {
//             const response = await axios.post('/api/policies', formData);
//             setPlans([...plans, response.data]);
//             setFormData({
//                 policyName: '',
//                 planType: '',
//                 description: '',
//                 period: ''
//             });
//         } catch (error) {
//             console.error('Error adding insurance plan', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`/api/policies/${id}`);
//             setPlans(plans.filter(plan => plan.policyId !== id));
//         } catch (error) {
//             console.error('Error deleting insurance plan', error);
//         }
//     };

//     const handleUpdate = async (id) => {
//         try {
//             const response = await axios.put(`/api/policies/${id}`, formData);
//             setPlans(plans.map(plan => (plan.policyId === id ? response.data : plan)));
//             setFormData({
//                 policyName: '',
//                 planType: '',
//                 description: '',
//                 period: ''
//             });
//             setSelectedId(null);
//         } catch (error) {
//             console.error('Error updating insurance plan', error);
//         }
//     };

//     return (
//         <div className="flex">
//             <AdminSidePage />
//             <div className="ml-[250px] p-10 w-full">
//                 <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">INSURANCE PLANS</h2>
//                 <div className="space-y-4">
//                     <input
//                         type="text"
//                         name="policyName"
//                         placeholder="Policy Name"
//                         value={formData.policyName}
//                         onChange={handleInputChange}
//                         className="border border-gray-300 p-2 w-full"
//                     />
//                     <input
//                         type="text"
//                         name="planType"
//                         placeholder="Plan Type"
//                         value={formData.planType}
//                         onChange={handleInputChange}
//                         className="border border-gray-300 p-2 w-full"
//                     />
//                     <input
//                         type="text"
//                         name="description"
//                         placeholder="Description"
//                         value={formData.description}
//                         onChange={handleInputChange}
//                         className="border border-gray-300 p-2 w-full"
//                     />
//                     <input
//                         type="text"
//                         name="period"
//                         placeholder="Period"
//                         value={formData.period}
//                         onChange={handleInputChange}
//                         className="border border-gray-300 p-2 w-full"
//                     />
//                     <div className="space-x-4">
//                         <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add Insurance</button>
//                         {selectedId && (
//                             <button onClick={() => handleUpdate(selectedId)} className="bg-green-500 text-white px-4 py-2 rounded">Update Insurance</button>
//                         )}
//                     </div>
//                 </div>
//                 <button onClick={fetchPlans} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
//                     {showTable ? 'Hide Insurance' : 'View Insurance'}
//                 </button>
//                 {showTable && (
//                     <table className="mt-6 w-full border-collapse border border-gray-200">
//                         <thead>
//                             <tr className="bg-gray-100">
//                                 <th className="border border-gray-200 p-2">ID</th>
//                                 <th className="border border-gray-200 p-2">Name</th>
//                                 <th className="border border-gray-200 p-2">Type</th>
//                                 <th className="border border-gray-200 p-2">Description</th>
//                                 <th className="border border-gray-200 p-2">Period</th>
//                                 <th className="border border-gray-200 p-2">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {plans.map((plan) => (
//                                 <tr key={plan.policyId} className="text-center">
//                                     <td className="border border-gray-200 p-2">{plan.policyId}</td>
//                                     <td className="border border-gray-200 p-2">{plan.policyName}</td>
//                                     <td className="border border-gray-200 p-2">{plan.planType}</td>
//                                     <td className="border border-gray-200 p-2">{plan.description}</td>
//                                     <td className="border border-gray-200 p-2">{plan.period}</td>
//                                     <td className="border border-gray-200 p-2 space-x-2">
//                                         <button onClick={() => setSelectedId(plan.policyId)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
//                                         <button onClick={() => handleDelete(plan.policyId)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default InsurancePlans;

import React, { useState } from 'react';
import axios from 'axios';
import AdminSidePage from './SideBar';
 
axios.defaults.baseURL = 'http://localhost:8080';
 
const InsurancePlans = () => {
    const [plans, setPlans] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [formData, setFormData] = useState({
        policyName: '',
        planType: '',
        description: '',
        period: ''
    });
    const [showTable, setShowTable] = useState(false);
 
    const fetchPlans = async () => {
        if (!showTable) {
            try {
                const response = await axios.get('/api/policies');
                setPlans(response.data);
            } catch (error) {
                console.error('Error fetching insurance plans', error);
            }
        }
        setShowTable(!showTable);
    };
 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
 
    const handleAdd = async () => {
        try {
            const response = await axios.post('/api/policies', formData);
            setPlans([...plans, response.data]);
            setFormData({
                policyName: '',
                planType: '',
                description: '',
                period: ''
            });
        } catch (error) {
            console.error('Error adding insurance plan', error);
        }
    };
 
    const handleDelete = async (id, policyName) => {
        try {
            // Check if the policy is in the appliedPolicy table
            const response = await axios.get('/api/appliedPolicies');
            const appliedPolicies = response.data;
            const policyExists = appliedPolicies.some(appliedPolicy => appliedPolicy.policyName === policyName);
 
            if (policyExists) {
                alert("You can't delete this policy, as customers have enrolled for the policy.");
            } else {
                await axios.delete(`/api/policies/${id}`);
                setPlans(plans.filter(plan => plan.policyId !== id));
            }
        } catch (error) {
            console.error('Error deleting insurance plan', error);
        }
    };
 
    const handleUpdate = async (id) => {
        try {
            const response = await axios.put(`/api/policies/${id}`, formData);
            setPlans(plans.map(plan => (plan.policyId === id ? response.data : plan)));
            setFormData({
                policyName: '',
                planType: '',
                description: '',
                period: ''
            });
            setSelectedId(null);
        } catch (error) {
            console.error('Error updating insurance plan', error);
        }
    };
 
    return (
        <div className="flex ">
            <AdminSidePage />
            <div className="ml-[250px] p-10 w-full insurance-plans">
                <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">INSURANCE PLANS</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        name="policyName"
                        placeholder="Policy Name"
                        value={formData.policyName}
                        onChange={handleInputChange}
                        className="border border-gray-300 p-2 w-full"
                    />
                    <input
                        type="text"
                        name="planType"
                        placeholder="Plan Type"
                        value={formData.planType}
                        onChange={handleInputChange}
                        className="border border-gray-300 p-2 w-full"
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="border border-gray-300 p-2 w-full"
                    />
                    <input
                        type="text"
                        name="period"
                        placeholder="Period"
                        value={formData.period}
                        onChange={handleInputChange}
                        className="border border-gray-300 p-2 w-full"
                    />
                    <div className="space-x-4">
                        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add Insurance</button>
                        {selectedId && (
                            <button onClick={() => handleUpdate(selectedId)} className="bg-green-500 text-white px-4 py-2 rounded">Update Insurance</button>
                        )}
                    </div>
                </div>
                <button onClick={fetchPlans} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
                    {showTable ? 'Hide Insurance' : 'View Insurance'}
                </button>
                {showTable && (
                    <table className="mt-6 w-full border-collapse border border-gray-200 insurance-plans">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-200 p-2">ID</th>
                                <th className="border border-gray-200 p-2">Name</th>
                                <th className="border border-gray-200 p-2">Type</th>
                                <th className="border border-gray-200 p-2">Description</th>
                                <th className="border border-gray-200 p-2">Period</th>
                                <th className="border border-gray-200 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plans.map((plan) => (
                                <tr key={plan.policyId} className="text-center">
                                    <td className="border border-gray-200 p-2">{plan.policyId}</td>
                                    <td className="border border-gray-200 p-2">{plan.policyName}</td>
                                    <td className="border border-gray-200 p-2">{plan.planType}</td>
                                    <td className="border border-gray-200 p-2">{plan.description}</td>
                                    <td className="border border-gray-200 p-2">{plan.period}</td>
                                    <td className="border border-gray-200 p-2 space-x-2">
                                        <button onClick={() => setSelectedId(plan.policyId)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                                        <button onClick={() => handleDelete(plan.policyId, plan.policyName)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};
 
export default InsurancePlans;