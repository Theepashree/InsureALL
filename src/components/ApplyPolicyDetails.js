// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// const ApplyPolicyDetails = () => {
//   const { policyId } = useParams();
//   const [policyDetails, setPolicyDetails] = useState({
//     policyName: '', planType: '', customerName: '', term: 0, period: 0,
//     coverageAmount: 0
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setPolicyDetails({ ...policyDetails, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8080/api/appliedPolicies', policyDetails)
//       .then(response => {
//         navigate(`/customer/upload-documents/${policyId}`);
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h2>Policy Application Details</h2>
//       <form onSubmit={handleSubmit}>
        // <label>
        //   Policy Name:
        //   <input type="text" name="policyName" value={policyDetails.policyName} onChange={handleChange} required />
        // </label>
        // <label>
        //   Plan Type:
        //   <input type="text" name="planType" value={policyDetails.planType} onChange={handleChange} required />
        // </label>
        // <label>
        //   Customer Name:
        //   <input type="text" name="customerName" value={policyDetails.customerName} onChange={handleChange} required />
        // </label>
        // <label>
        //   Term (months):
        //   <input type="number" name="term" value={policyDetails.term} onChange={handleChange} required />
        // </label>
        // <label>
        //   Period (years):
        //   <input type="number" name="period" value={policyDetails.period} onChange={handleChange} required />
        // </label>
        // <label>
        //   Coverage Amount:
        //   <input type="number" name="coverageAmount" value={policyDetails.coverageAmount} onChange={handleChange} required />
        // </label>
//         <button type="submit">Next</button>
//       </form>
//     </div>
//   );
// };

// export default ApplyPolicyDetails;

//now
// import React, { useState } from 'react';
// import { useNavigate, useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const ApplyPolicyDetails = () => {
//   const { policyId } = useParams();
//   const location = useLocation();
//   const { policyName, planType, customerName } = location.state || {};

//   const [policyDetails, setPolicyDetails] = useState({
//     policyName: policyName || '',
//     planType: planType || '',
//     customerName: customerName || '',
//     term: 0,
//     period: 0,
//     coverageAmount: 0
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setPolicyDetails({ ...policyDetails, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     for (const [key, value] of Object.entries(policyDetails)) {
//       formData.append(key, value);
//     }

//     axios.post('http://localhost:8080/api/appliedPolicies', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//       .then(response => {
//         navigate(`/customer/upload-documents/${policyId}`);
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h2>Policy Application Details</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Policy Name:
//           <input type="text" name="policyName" value={policyDetails.policyName} onChange={handleChange} required />
//         </label>
//         <label>
//           Plan Type:
//           <input type="text" name="planType" value={policyDetails.planType} onChange={handleChange} required />
//         </label>
//         <label>
//           Customer Name:
//           <input type="text" name="customerName" value={policyDetails.customerName} onChange={handleChange} required />
//         </label>
//         <label>
//           Term (months):
//           <input type="number" name="term" value={policyDetails.term} onChange={handleChange} required />
//         </label>
//         <label>
//           Period (years):
//           <input type="number" name="period" value={policyDetails.period} onChange={handleChange} required />
//         </label>
//         <label>
//           Coverage Amount:
//           <input type="number" name="coverageAmount" value={policyDetails.coverageAmount} onChange={handleChange} required />
//         </label>
//         <button type="submit">Next</button>
//       </form>
//     </div>
//   );
// };

// export default ApplyPolicyDetails;


// import React, { useState } from 'react';
// import { useNavigate, useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const ApplyPolicyDetails = () => {
//     const { policyId } = useParams();
//     const location = useLocation();
//     const { policyName, planType, customerName, userName } = location.state || {};

//     const [policyDetails, setPolicyDetails] = useState({
//         policyName: policyName || '',
//         planType: planType || '',
//         customerName: customerName || '',
//         userName: userName || '',
//         term: 0,
//         period: 0,
//         coverageAmount: 0
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setPolicyDetails({ ...policyDetails, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         for (const [key, value] of Object.entries(policyDetails)) {
//             formData.append(key, value);
//         }

//         axios.post('http://localhost:8080/api/appliedPolicies', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//             .then(response => {
//                 navigate(`/customer/upload-documents/${policyId}`);
//             })
//             .catch(error => console.error(error));
//     };

//     return (
//         <div>
//             <h2>Policy Application Details</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Policy Name:
//                     <input type="text" name="policyName" value={policyDetails.policyName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Plan Type:
//                     <input type="text" name="planType" value={policyDetails.planType} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Customer Name:
//                     <input type="text" name="customerName" value={policyDetails.customerName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     User Name:
//                     <input type="text" name="userName" value={policyDetails.userName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Term (months):
//                     <input type="number" name="term" value={policyDetails.term} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Period (years):
//                     <input type="number" name="period" value={policyDetails.period} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Coverage Amount:
//                     <input type="number" name="coverageAmount" value={policyDetails.coverageAmount} onChange={handleChange} required />
//                 </label>
//                 <button type="submit">Next</button>
//             </form>
//         </div>
//     );
// };

// export default ApplyPolicyDetails;

// import React, { useState } from 'react';
// import { useNavigate, useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';
 
// const ApplyPolicyDetails = () => {
//     const { policyId } = useParams();
//     const location = useLocation();
//     const { policyName, planType, customerName, userName } = location.state || {};
 
//     const [policyDetails, setPolicyDetails] = useState({
//         policyName: policyName || '',
//         planType: planType || '',
//         customerName: customerName || '',
//         userName: userName || '',
//         term: 6,
//         period: 5,
//         coverageAmount: ''
//     });
 
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();
 
//     const handleChange = (e) => {
//         const { name, value } = e.target;
 
//         let updatedErrors = { ...errors };
 
//         if (name === 'coverageAmount') {
//             if (value < 10000 || value > 10000000) {
//                 updatedErrors[name] = 'Coverage amount should be between 10,000 and 10,000,000';
//             } else {
//                 delete updatedErrors[name];
//             }
//         }
 
//         setPolicyDetails({ ...policyDetails, [name]: value });
//         setErrors(updatedErrors);
//     };
 
//     const handleSubmit = (e) => {
//         e.preventDefault();
 
//         if (Object.keys(errors).length > 0) {
//             console.error('Please fix the errors before submitting.');
//             return;
//         }
 
//         const formData = new FormData();
//         for (const [key, value] of Object.entries(policyDetails)) {
//             formData.append(key, value);
//         }
 
//         axios.post('http://localhost:8080/api/appliedPolicies', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//         .then(response => {
//             navigate(`/customer/upload-documents/${policyId}`, { state: { planType } });
//         })
//         .catch(error => console.error(error));
//     };
 
//     return (
//         <div>
//             <h2>Policy Application Details</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Policy Name:
//                     <input type="text" name="policyName" value={policyDetails.policyName} disabled />
//                 </label>
//                 <label>
//                     Plan Type:
//                     <input type="text" name="planType" value={policyDetails.planType} disabled />
//                 </label>
//                 <label>
//                     Customer Name:
//                     <input type="text" name="customerName" value={policyDetails.customerName} disabled />
//                 </label>
//                 <label>
//                     User Name:
//                     <input type="text" name="userName" value={policyDetails.userName} disabled />
//                 </label>
//                 <label>
//                     Term (months):
//                     <select name="term" value={policyDetails.term} onChange={handleChange} required>
//                         <option value="6">6</option>
//                         <option value="12">12</option>
//                     </select>
//                 </label>
//                 <label>
//                     Period (years):
//                     <select name="period" value={policyDetails.period} onChange={handleChange} required>
//                         <option value="5">5</option>
//                         <option value="12">12</option>
//                     </select>
//                 </label>
//                 <label>
//                     Coverage Amount:
//                     <input
//                         type="number"
//                         name="coverageAmount"
//                         value={policyDetails.coverageAmount}
//                         onChange={handleChange}
//                         placeholder="Enter coverage amount"
//                         required
//                     />
//                     {errors.coverageAmount && <span className="error">{errors.coverageAmount}</span>}
//                 </label>
//                 <button type="submit">Next</button>
//             </form>
//         </div>
//     );
// };
 
// export default ApplyPolicyDetails;

// import React, { useState } from 'react';
// import { useNavigate, useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const ApplyPolicyDetails = () => {
//     const { policyId } = useParams();
//     const location = useLocation();
//     const { policyName, planType, customerName, userName } = location.state || {};

//     const [policyDetails, setPolicyDetails] = useState({
//         policyName: policyName || '',
//         planType: planType || '',
//         customerName: customerName || '',
//         userName: userName || '',
//         term: 6,
//         period: 5,
//         coverageAmount: ''
//     });

//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         let updatedErrors = { ...errors };

//         if (name === 'coverageAmount') {
//             if (value < 10000 || value > 10000000) {
//                 updatedErrors[name] = 'Coverage amount should be between 10,000 and 10,000,000';
//             } else {
//                 delete updatedErrors[name];
//             }
//         }

//         setPolicyDetails({ ...policyDetails, [name]: value });
//         setErrors(updatedErrors);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (Object.keys(errors).length > 0) {
//             console.error('Please fix the errors before submitting.');
//             return;
//         }

//         const formData = new FormData();
//         for (const [key, value] of Object.entries(policyDetails)) {
//             formData.append(key, value);
//         }

//         axios.post('http://localhost:8080/api/appliedPolicies', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//         .then(response => {
//             navigate(`/customer/upload-documents/${policyId}`, { state: { planType } });
//         })
//         .catch(error => console.error(error));
//     };

//     return (
//         <div>
//             <h2>Policy Application Details</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Policy Name:
//                     <input type="text" name="policyName" value={policyDetails.policyName} disabled />
//                 </label>
//                 <label>
//                     Plan Type:
//                     <input type="text" name="planType" value={policyDetails.planType} disabled />
//                 </label>
//                 <label>
//                     Customer Name:
//                     <input type="text" name="customerName" value={policyDetails.customerName} disabled />
//                 </label>
//                 <label>
//                     User Name:
//                     <input type="text" name="userName" value={policyDetails.userName} disabled />
//                 </label>
//                 <label>
//                     Term (months):
//                     <select name="term" value={policyDetails.term} onChange={handleChange} required>
//                         <option value="6">6</option>
//                         <option value="12">12</option>
//                     </select>
//                 </label>
//                 <label>
//                     Period (years):
//                     <select name="period" value={policyDetails.period} onChange={handleChange} required>
//                         <option value="5">5</option>
//                         <option value="12">12</option>
//                     </select>
//                 </label>
//                 <label>
//                     Coverage Amount:
//                     <input
//                         type="number"
//                         name="coverageAmount"
//                         value={policyDetails.coverageAmount}
//                         onChange={handleChange}
//                         placeholder="Enter coverage amount"
//                         required
//                     />
//                     {errors.coverageAmount && <span className="error">{errors.coverageAmount}</span>}
//                 </label>
//                 <button type="submit">Next</button>
//             </form>
//         </div>
//     );
// };

// export default ApplyPolicyDetails;


import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import logoImage from '../assets/images/insure-all-logo.png'

const ApplyPolicyDetails = () => {
    const { policyId } = useParams();
    const location = useLocation();
    const { policyName, planType, customerName, userName } = location.state || {};

    const [policyDetails, setPolicyDetails] = useState({
        policyName: policyName || '',
        planType: planType || '',
        customerName: customerName || '',
        userName: userName || '',
        term: 6,
        period: 5,
        coverageAmount: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedErrors = { ...errors };

        if (name === 'coverageAmount') {
            if (value < 10000 || value > 10000000) {
                updatedErrors[name] = 'Coverage amount should be between 10,000 and 10,000,000';
            } else {
                delete updatedErrors[name];
            }
        }

        setPolicyDetails({ ...policyDetails, [name]: value });
        setErrors(updatedErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.keys(errors).length > 0) {
            console.error('Please fix the errors before submitting.');
            return;
        }

        const formData = new FormData();
        for (const [key, value] of Object.entries(policyDetails)) {
            formData.append(key, value);
        }

        axios.post('http://localhost:8080/api/appliedPolicies', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            navigate(`/customer/upload-documents/${policyId}`, { state: { planType } });
        })
        .catch(error => console.error(error));
    };

    return (
        <div className="apply-policy flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
             <img src={logoImage} alt="Logo" className="logo-img" style={{width:'200px', height:'auto'}}/>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">POLICY APPLICATION DETAILS</h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                {[
                    { label: 'Policy Name', name: 'policyName', type: 'text', disabled: true },
                    { label: 'Plan Type', name: 'planType', type: 'text', disabled: true },
                    { label: 'Customer Name', name: 'customerName', type: 'text', disabled: true },
                    { label: 'User Name', name: 'userName', type: 'text', disabled: true }
                ].map((field, idx) => (
                    <div key={idx} className="mb-4">
                        <label className="block text-black text-lg font-bold mb-2">{field.label}</label>
                        <input
                            type={field.type}
                            name={field.name}
                            value={policyDetails[field.name]}
                            disabled={field.disabled}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                ))}
                <div className="mb-4">
                    <label className="block text-black text-lg font-bold mb-2">Term (months)</label>
                    <select
                        name="term"
                        value={policyDetails.term}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        <option value="6">6</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-black text-lg font-bold mb-2">Period (years)</label>
                    <select
                        name="period"
                        value={policyDetails.period}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        <option value="5">5</option>
                        <option value="12">10</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-black text-lg font-bold mb-2">Coverage Amount</label>
                    <input
                        type="number"
                        name="coverageAmount"
                        value={policyDetails.coverageAmount}
                        onChange={handleChange}
                        placeholder="Enter coverage amount"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                    {errors.coverageAmount && <span className="text-red-500 text-xs italic">{errors.coverageAmount}</span>}
                </div>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">Next</button>
            </form>
        </div>
    );
};

export default ApplyPolicyDetails;

