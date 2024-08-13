import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import logoImage from '../assets/images/insure-all-logo.png'

const CustomerDetails = () => {
    const { policyId } = useParams();
    const location = useLocation();
    const { policyName, planType, userName } = location.state || {};

    const [customer, setCustomer] = useState({
        customerName: '', occupation: '', city: '', state: '', country: '', zip: '',
        mobileNumber: '', DOB1: '', nomineeName: '', nomineeOccupation: '',
        nomineeAddress: '', nomineemobileNumber: '', nomineeDOB: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedErrors = { ...errors };

        if (name === 'DOB1' || name === 'nomineeDOB') {
            const age = calculateAge(value);
            if (age < 18) {
                updatedErrors[name] = 'Age should be greater than 18';
            } else if (new Date(value) > new Date()) {
                updatedErrors[name] = 'Date should not be in the future';
            } else {
                delete updatedErrors[name];
            }
        }

        setCustomer({ ...customer, [name]: value });
        setErrors(updatedErrors);
    };

    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.keys(errors).length > 0) {
            console.error('Please fix the errors before submitting.');
            return;
        }

        const customerData = { ...customer, userName };
        axios.post('http://localhost:8080/api/customers', customerData)
            .then(response => {
                navigate(`/customer/apply-policy/${policyId}`, { state: { policyName, planType, customerName: customer.customerName, userName } });
            })
            .catch(error => console.error(error));
    };

    return (
        <div className=" customer-details flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <img src={logoImage} alt="Logo" className="logo-img" style={{width:'200px', height:'auto'}}/>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">CUSTOMER DETAILS</h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                {[
                    { label: 'Customer Name', name: 'customerName', type: 'text' },
                    { label: 'Occupation', name: 'occupation', type: 'text' },
                    { label: 'City', name: 'city', type: 'text' },
                    { label: 'State', name: 'state', type: 'text' },
                    { label: 'Country', name: 'country', type: 'text' },
                    { label: 'ZIP Code', name: 'zip', type: 'number' },
                    { label: 'Mobile Number', name: 'mobileNumber', type: 'number' },
                    { label: 'Date of Birth', name: 'DOB1', type: 'date', error: errors.DOB1 },
                    { label: 'Nominee Name', name: 'nomineeName', type: 'text' },
                    { label: 'Nominee Occupation', name: 'nomineeOccupation', type: 'text' },
                    { label: 'Nominee Address', name: 'nomineeAddress', type: 'text' },
                    { label: 'Nominee Mobile Number', name: 'nomineemobileNumber', type: 'number' },
                    { label: 'Nominee Date of Birth', name: 'nomineeDOB', type: 'date', error: errors.nomineeDOB }
                ].map((field, idx) => (
                    <div key={idx} className="mb-4">
                        <label className="block text-black text-lg font-bold mb-2">{field.label}</label>
                        <input
                            type={field.type}
                            name={field.name}
                            value={customer[field.name]}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {field.error && <span className="text-red-500 text-xs italic">{field.error}</span>}
                    </div>
                ))}
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">Next</button>
            </form>
        </div>
    );
};

export default CustomerDetails;
