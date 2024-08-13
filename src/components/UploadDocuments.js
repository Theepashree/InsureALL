import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/insure-all-logo.png';

const UploadDocuments = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { planType } = location.state || {};

    const [documents, setDocuments] = useState({
        incomeCertificate: null,
        selfCancelledCheque: null,
        communicationAddressProof: null,
        birthCertificate: null,
        photo: null,
        signature: null,
    });

    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const fileType = file.type;
        const fileSize = file.size / 1024 / 1024; // Size in MB

        // Allowed image types
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (!allowedTypes.includes(fileType)) {
            setError('Only JPEG, PNG, and GIF files are allowed.');
            return;
        }

        if (fileSize > 1) {
            setError('File size should be less than 1MB.');
            return;
        }

        setError('');
        setDocuments({ ...documents, [e.target.name]: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (error) {
            alert('Please fix the errors before submitting.');
            return;
        }

        const formData = new FormData();
        Object.keys(documents).forEach((key) => {
            if (documents[key]) {
                formData.append(key, documents[key]);
            }
        });

        axios.post('http://localhost:8080/api/appliedPolicies/documents', formData)
            .then(response => {
                alert('Documents uploaded successfully');
                navigate('/customer/plan-type-form', { state: { planType } });
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="upload-documents flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <img src={logoImage} alt="Logo" className="logo-img" style={{ width: '200px', height: 'auto' }} />
            <h2 className="text-3xl font-bold text-blue-700 mb-6">UPLOAD DOCUMENTS</h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                {error && <div className="text-red-500 mb-4">{error}</div>}
                {[
                    { label: 'Income Certificate', name: 'incomeCertificate', required: true },
                    { label: 'Self Cancelled Cheque', name: 'selfCancelledCheque', required: true },
                    { label: 'Communication Address Proof', name: 'communicationAddressProof', required: true },
                    { label: 'Birth Certificate', name: 'birthCertificate', required: true },
                    { label: 'Photo', name: 'photo', required: true },
                    { label: 'Signature', name: 'signature', required: true },
                ].map((field, idx) => (
                    <div key={idx} className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2">
                            {field.label} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="file"
                            name={field.name}
                            onChange={handleFileChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required={field.required}
                        />
                    </div>
                ))}
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">Submit</button>
            </form>
        </div>
    );
};

export default UploadDocuments;





