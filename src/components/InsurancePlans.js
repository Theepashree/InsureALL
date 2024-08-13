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
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // For error messages

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

    const handleEdit = async (policy) => {
        try {
            // Check if the policy is in the appliedPolicy table
            const response = await axios.get('/api/appliedPolicies');
            const appliedPolicies = response.data;

            const policyExists = appliedPolicies.some(appliedPolicy => appliedPolicy.policyName === policy.policyName);

            if (policyExists) {
                // If users are enrolled, show error popup
                //setErrorMessage("You can't update this policy, as customers have enrolled for the policy.");
                alert("You can't update this policy, as customers have enrolled for the policy.");

               // setShowModal(true);
            } else {
                // If no users are enrolled, allow editing
                setSelectedId(policy.policyId);
                setFormData({
                    policyName: policy.policyName,
                    planType: policy.planType,
                    description: policy.description,
                    period: policy.period
                });
                setShowModal(true);
            }
        } catch (error) {
            console.error('Error checking applied policies', error);
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
            setShowModal(false);
        } catch (error) {
            console.error('Error updating insurance plan', error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setErrorMessage('');
    };

    return (
        <div className="flex">
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
                                        <button onClick={() => handleEdit(plan)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                                        <button onClick={() => handleDelete(plan.policyId, plan.policyName)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {showModal && (
                    <div className="modal">
                        <div className="modal-content p-4">
                            <span className="close" onClick={closeModal}>&times;</span>
                            {errorMessage ? (
                                <p>{errorMessage}</p>
                            ) : (
                                <div>
                                    <h2 className="text-lg font-bold mb-4">Update Insurance Plan</h2>
                                    <input
                                        type="text"
                                        name="policyName"
                                        placeholder="Policy Name"
                                        value={formData.policyName}
                                        onChange={handleInputChange}
                                        className="border border-gray-300 p-2 w-full mb-4"
                                    />
                                    <input
                                        type="text"
                                        name="planType"
                                        placeholder="Plan Type"
                                        value={formData.planType}
                                        onChange={handleInputChange}
                                        className="border border-gray-300 p-2 w-full mb-4"
                                    />
                                    <input
                                        type="text"
                                        name="description"
                                        placeholder="Description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        className="border border-gray-300 p-2 w-full mb-4"
                                    />
                                    <input
                                        type="text"
                                        name="period"
                                        placeholder="Period"
                                        value={formData.period}
                                        onChange={handleInputChange}
                                        className="border border-gray-300 p-2 w-full mb-4"
                                    />
                                    <button onClick={() => handleUpdate(selectedId)} className="bg-green-500 text-white px-4 py-2 rounded">Update Insurance</button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InsurancePlans;
