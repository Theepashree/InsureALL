// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// const CustomerDetails = () => {
//   const { policyId } = useParams();
//   const [customer, setCustomer] = useState({
//     customerName: '', occupation: '', city: '', state: '', country: '', zip: '',
//     mobileNumber: '', DOB1: '', nomineeName: '', nomineeOccupation: '',
//     nomineeAddress: '', nomineemobileNumber: '', nomineeDOB: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCustomer({ ...customer, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8080/api/customers', customer)
//       .then(response => {
//         navigate(`/customer/apply-policy/${policyId}`);
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h2>Customer Details</h2>
//       <form onSubmit={handleSubmit}>
        // <label>
        //   Customer Name:
        //   <input type="text" name="customerName" value={customer.customerName} onChange={handleChange} required />
        // </label>
        // <label>
        //   Occupation:
        //   <input type="text" name="occupation" value={customer.occupation} onChange={handleChange} required />
        // </label>
        // <label>
        //   City:
        //   <input type="text" name="city" value={customer.city} onChange={handleChange} required />
        // </label>
        // <label>
        //   State:
        //   <input type="text" name="state" value={customer.state} onChange={handleChange} required />
        // </label>
        // <label>
        //   Country:
        //   <input type="text" name="country" value={customer.country} onChange={handleChange} required />
        // </label>
        // <label>
        //   ZIP Code:
        //   <input type="number" name="zip" value={customer.zip} onChange={handleChange} required />
        // </label>
        // <label>
        //   Mobile Number:
        //   <input type="number" name="mobileNumber" value={customer.mobileNumber} onChange={handleChange} required />
        // </label>
        // <label>
        //   Date of Birth:
        //   <input type="date" name="DOB1" value={customer.DOB1} onChange={handleChange} required />
        // </label>
        // <label>
        //   Nominee Name:
        //   <input type="text" name="nomineeName" value={customer.nomineeName} onChange={handleChange} required />
        // </label>
        // <label>
        //   Nominee Occupation:
        //   <input type="text" name="nomineeOccupation" value={customer.nomineeOccupation} onChange={handleChange} required />
        // </label>
        // <label>
        //   Nominee Address:
        //   <input type="text" name="nomineeAddress" value={customer.nomineeAddress} onChange={handleChange} required />
        // </label>
        // <label>
        //   Nominee Mobile Number:
        //   <input type="number" name="nomineemobileNumber" value={customer.nomineemobileNumber} onChange={handleChange} required />
        // </label>
        // <label>
        //   Nominee Date of Birth:
        //   <input type="date" name="nomineeDOB" value={customer.nomineeDOB} onChange={handleChange} required />
        // </label>
//         <button type="submit">Next</button>
//       </form>
//     </div>
//   );
// };

// export default CustomerDetails;

//now
// import React, { useState } from 'react';
// import { useNavigate, useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const CustomerDetails = () => {
//   const { policyId } = useParams();
//   const location = useLocation();
//   const { policyName, planType } = location.state || {};
//   const [customer, setCustomer] = useState({
//     customerName: '', occupation: '', city: '', state: '', country: '', zip: '',
//     mobileNumber: '', DOB1: '', nomineeName: '', nomineeOccupation: '',
//     nomineeAddress: '', nomineemobileNumber: '', nomineeDOB: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCustomer({ ...customer, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8080/api/customers', customer)
//       .then(response => {
//         navigate(`/customer/apply-policy/${policyId}`, { state: { policyName, planType, customerName: customer.customerName } });
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h2>Customer Details</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Form fields */}
//         <label>
//           Customer Name:
//           <input type="text" name="customerName" value={customer.customerName} onChange={handleChange} required />
//         </label>
//         <label>
//           Occupation:
//           <input type="text" name="occupation" value={customer.occupation} onChange={handleChange} required />
//         </label>
//         <label>
//           City:
//           <input type="text" name="city" value={customer.city} onChange={handleChange} required />
//         </label>
//         <label>
//           State:
//           <input type="text" name="state" value={customer.state} onChange={handleChange} required />
//         </label>
//         <label>
//           Country:
//           <input type="text" name="country" value={customer.country} onChange={handleChange} required />
//         </label>
//         <label>
//           ZIP Code:
//           <input type="number" name="zip" value={customer.zip} onChange={handleChange} required />
//         </label>
//         <label>
//           Mobile Number:
//           <input type="number" name="mobileNumber" value={customer.mobileNumber} onChange={handleChange} required />
//         </label>
//         <label>
//           Date of Birth:
//           <input type="date" name="DOB1" value={customer.DOB1} onChange={handleChange} required />
//         </label>
//         <label>
//           Nominee Name:
//           <input type="text" name="nomineeName" value={customer.nomineeName} onChange={handleChange} required />
//         </label>
//         <label>
//           Nominee Occupation:
//           <input type="text" name="nomineeOccupation" value={customer.nomineeOccupation} onChange={handleChange} required />
//         </label>
//         <label>
//           Nominee Address:
//           <input type="text" name="nomineeAddress" value={customer.nomineeAddress} onChange={handleChange} required />
//         </label>
//         <label>
//           Nominee Mobile Number:
//           <input type="number" name="nomineemobileNumber" value={customer.nomineemobileNumber} onChange={handleChange} required />
//         </label>
//         <label>
//           Nominee Date of Birth:
//           <input type="date" name="nomineeDOB" value={customer.nomineeDOB} onChange={handleChange} required />
//         </label>
//         <button type="submit">Next</button>
//       </form>
//     </div>
//   );
// };

// export default CustomerDetails;

// import React, { useState } from 'react';
// import { useNavigate, useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';
 
// const CustomerDetails = () => {
//     const { policyId } = useParams();
//     const location = useLocation();
//     const { policyName, planType, userName } = location.state || {};
 
//     const [customer, setCustomer] = useState({
//         customerName: '', occupation: '', city: '', state: '', country: '', zip: '',
//         mobileNumber: '', DOB1: '', nomineeName: '', nomineeOccupation: '',
//         nomineeAddress: '', nomineemobileNumber: '', nomineeDOB: ''
//     });
 
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();
 
//     const handleChange = (e) => {
//         const { name, value } = e.target;
 
//         let updatedErrors = { ...errors };
       
//         if (name === 'DOB1' || name === 'nomineeDOB') {
//             const age = calculateAge(value);
//             if (age < 18) {
//                 updatedErrors[name] = 'Age should be greater than 18';
//             } else if (new Date(value) > new Date()) {
//                 updatedErrors[name] = 'Date should not be in the future';
//             } else {
//                 delete updatedErrors[name];
//             }
//         }
 
//         setCustomer({ ...customer, [name]: value });
//         setErrors(updatedErrors);
//     };
 
//     const calculateAge = (dob) => {
//         const today = new Date();
//         const birthDate = new Date(dob);
//         let age = today.getFullYear() - birthDate.getFullYear();
//         const monthDiff = today.getMonth() - birthDate.getMonth();
//         if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//             age--;
//         }
//         return age;
//     };
 
//     const handleSubmit = (e) => {
//         e.preventDefault();
 
//         if (Object.keys(errors).length > 0) {
//             console.error('Please fix the errors before submitting.');
//             return;
//         }
 
//         const customerData = { ...customer, userName };
//         axios.post('http://localhost:8080/api/customers', customerData)
//             .then(response => {
//                 navigate(`/customer/apply-policy/${policyId}`, { state: { policyName, planType, customerName: customer.customerName, userName } });
//             })
//             .catch(error => console.error(error));
//     };
 
//     return (
//         <div>
//             <h2>Customer Details</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Customer Name:
//                     <input type="text" name="customerName" value={customer.customerName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Occupation:
//                     <input type="text" name="occupation" value={customer.occupation} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     City:
//                     <input type="text" name="city" value={customer.city} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     State:
//                     <input type="text" name="state" value={customer.state} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Country:
//                     <input type="text" name="country" value={customer.country} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     ZIP Code:
//                     <input type="number" name="zip" value={customer.zip} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Mobile Number:
//                     <input type="number" name="mobileNumber" value={customer.mobileNumber} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Date of Birth:
//                     <input type="date" name="DOB1" value={customer.DOB1} onChange={handleChange} required />
//                     {errors.DOB1 && <span className="error">{errors.DOB1}</span>}
//                 </label>
//                 <label>
//                     Nominee Name:
//                     <input type="text" name="nomineeName" value={customer.nomineeName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Nominee Occupation:
//                     <input type="text" name="nomineeOccupation" value={customer.nomineeOccupation} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Nominee Address:
//                     <input type="text" name="nomineeAddress" value={customer.nomineeAddress} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Nominee Mobile Number:
//                     <input type="number" name="nomineemobileNumber" value={customer.nomineemobileNumber} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Nominee Date of Birth:
//                     <input type="date" name="nomineeDOB" value={customer.nomineeDOB} onChange={handleChange} required />
//                     {errors.nomineeDOB && <span className="error">{errors.nomineeDOB}</span>}
//                 </label>
//                 <button type="submit">Next</button>
//             </form>
//         </div>
//     );
// };
 
// export default CustomerDetails;


// 

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
