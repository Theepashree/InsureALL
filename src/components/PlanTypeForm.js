// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
 
// const PlanTypeForm = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { planType = '' } = location.state || {};
//   console.log(planType);
 
//   const [formData, setFormData] = useState({
//     // Initialize all possible fields here
//     annualIncome: '',
//     healthHistory: '',
//     smokingStatus: '',
//     hobbiesLifestyle: '',
//     medicalExamDetails: '',
//     propertyAddress: '',
//     yearBuilt: '',
//     residenceType: '',
//     squareFootage: '',
//     securitySystems: '',
//     heightWeight: '',
//     existingConditions: '',
//     primaryPhysician: '',
//     medications: '',
//     hospitalPreferences: '',
//     vin: '',
//     currentMileage: '',
//     previousClaims: '',
//     usageType: '',
//     usageFrequency: '',
//   });
 
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     console.log.apply(planType);
//     axios.post(`http://localhost:8080/api/${planType}-insurance`, formData)
//       .then(response => {
//         alert('Details submitted successfully');
//         navigate('/customer/success-page'); // Navigate to a success page or dashboard
//       })
//       .catch(error => console.error(error));
//   };
 
//   const renderFormFields = () => {
//     switch (planType) {
//       case 'life':
//         return (
//           <>
//             <label>
//               Annual Income:
//               <select name="annualIncome" value={formData.annualIncome} onChange={handleChange} required>
//                 <option value="">Select Annual Income</option>
//                 <option value="Up to 2.9L">Up to 2.9L</option>
//                 <option value="3L to 4.9L">3L to 4.9L</option>
//                 <option value="5L to 7.9L">5L to 7.9L</option>
//                 <option value="8L to 9.9L">8L to 9.9L</option>
//                 <option value="10L to 19.9L">10L to 19.9L</option>
//                 <option value="20L and above">20L and above</option>
//               </select>
//             </label>
//             <label>
//               Health History:
//               <textarea name="healthHistory" value={formData.healthHistory} onChange={handleChange} required />
//             </label>
//             <label>
//               Smoking Status:
//               <select name="smokingStatus" value={formData.smokingStatus} onChange={handleChange} required>
//                 <option value="non-smoker">Non-Smoker</option>
//                 <option value="smoker">Smoker</option>
//               </select>
//             </label>
//             <label>
//               Hobbies and Lifestyle:
//               <textarea name="hobbiesLifestyle" value={formData.hobbiesLifestyle} onChange={handleChange} required />
//             </label>
//             <label>
//               Medical Exam Details:
//               <textarea name="medicalExamDetails" value={formData.medicalExamDetails} onChange={handleChange} required />
//             </label>
//           </>
//         );
//       case 'home':
//         return (
//           <>
//             <label>
//               Property Address:
//               <input type="text" name="propertyAddress" value={formData.propertyAddress} onChange={handleChange} required />
//             </label>
//             <label>
//               Year Built:
//               <input type="number" name="yearBuilt" value={formData.yearBuilt} onChange={handleChange} required />
//             </label>
//             <label>
//               Type of Residence:
//               <select name="residenceType" value={formData.residenceType} onChange={handleChange} required>
//                 <option value="single-family">Single-family</option>
//                 <option value="condo">Condo</option>
//                 <option value="townhouse">Townhouse</option>
//                 <option value="multi-family">Multi-family</option>
//               </select>
//             </label>
//             <label>
//               Square Footage:
//               <input type="number" name="squareFootage" value={formData.squareFootage} onChange={handleChange} required />
//             </label>
//             <label>
//               Security Systems:
//               <select name="securitySystems" value={formData.securitySystems} onChange={handleChange} required>
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//               </select>
//             </label>
//           </>
//         );
//       case 'health':
//         return (
//           <>
//             <label>
//               Height and Weight:
//               <input type="text" name="heightWeight" value={formData.heightWeight} onChange={handleChange} required />
//             </label>
//             <label>
//               Existing Medical Conditions:
//               <textarea name="existingConditions" value={formData.existingConditions} onChange={handleChange} required />
//             </label>
//             <label>
//               Primary Care Physician:
//               <input type="text" name="primaryPhysician" value={formData.primaryPhysician} onChange={handleChange} required />
//             </label>
//             <label>
//               Medications:
//               <textarea name="medications" value={formData.medications} onChange={handleChange} required />
//             </label>
//             <label>
//               Hospital Preferences:
//               <textarea name="hospitalPreferences" value={formData.hospitalPreferences} onChange={handleChange} required />
//             </label>
//           </>
//         );
//       case 'vehicle':
//         return (
//           <>
//             <label>
//               Vehicle Identification Number (VIN):
//               <input type="text" name="vin" value={formData.vin} onChange={handleChange} required />
//             </label>
//             <label>
//               Current Mileage:
//               <input type="number" name="currentMileage" value={formData.currentMileage} onChange={handleChange} required />
//             </label>
//             <label>
//               Previous Claims:
//               <textarea name="previousClaims" value={formData.previousClaims} onChange={handleChange} required />
//             </label>
//             <label>
//               Usage Type:
//               <select name="usageType" value={formData.usageType} onChange={handleChange} required>
//                 <option value="personal">Personal</option>
//                 <option value="commercial">Commercial</option>
//               </select>
//             </label>
//             <label>
//               Vehicle Usage Frequency:
//               <select name="usageFrequency" value={formData.usageFrequency} onChange={handleChange} required>
//                 <option value="daily">Daily</option>
//                 <option value="weekly">Weekly</option>
//                 <option value="occasional">Occasional</option>
//               </select>
//             </label>
//           </>
//         );
//       default:
//         return <p>Invalid plan type</p>;
//     }
//   };
 
//   return (
//     <div>
//       <h2>{planType ? planType.charAt(0).toUpperCase() + planType.slice(1) : 'Invalid'} Insurance Details</h2>
//       <form onSubmit={handleSubmit}>
//         {renderFormFields()}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };
 
// export default PlanTypeForm;


// 

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './SuccessPage'

// const PlanTypeForm = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { planType = '' } = location.state || {};

//     const [formData, setFormData] = useState({
//         // Initialize all possible fields here
//         annualIncome: '',
//         healthHistory: '',
//         smokingStatus: '',
//         hobbiesLifestyle: '',
//         medicalExamDetails: '',
//         propertyAddress: '',
//         yearBuilt: '',
//         residenceType: '',
//         squareFootage: '',
//         securitySystems: '',
//         heightWeight: '',
//         existingConditions: '',
//         primaryPhysician: '',
//         medications: '',
//         hospitalPreferences: '',
//         vin: '',
//         currentMileage: '',
//         previousClaims: '',
//         usageType: '',
//         usageFrequency: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post(`http://localhost:8080/api/${planType}-insurance`, formData)
//             .then(response => {
//                 alert('Details submitted successfully');
//                 navigate('/customer/success-page');
//             })
//             .catch(error => console.error(error));
//     };

//     const renderFormFields = () => {
//         switch (planType) {
//             case 'life':
//                 return (
//                     <>
//                         <label className="block mb-4 font-bold text-lg">
//                             Annual Income:
//                             </label>
//                             <select name="annualIncome" value={formData.annualIncome} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
//                                 <option value="">Select Annual Income</option>
//                                 <option value="Up to 2.9L">Up to 2.9L</option>
//                                 <option value="3L to 4.9L">3L to 4.9L</option>
//                                 <option value="5L to 7.9L">5L to 7.9L</option>
//                                 <option value="8L to 9.9L">8L to 9.9L</option>
//                                 <option value="10L to 19.9L">10L to 19.9L</option>
//                                 <option value="20L and above">20L and above</option>
//                             </select>
                        
//                         <label className="block mb-4 font-bold text-lg">
//                             Health History:
//                         </label>    
//                             <textarea name="healthHistory" value={formData.healthHistory} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                            
//                         <label className="block mb-4 font-bold text-lg">
//                             Smoking Status:
//                         </label>
//                             <select name="smokingStatus" value={formData.smokingStatus} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
//                                 <option value="non-smoker">Non-Smoker</option>
//                                 <option value="smoker">Smoker</option>
//                             </select>
                        
//                         <label className="block mb-4 font-bold text-lg">
//                             Hobbies and Lifestyle:
//                         </label>    
//                             <textarea name="hobbiesLifestyle" value={formData.hobbiesLifestyle} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        
//                         <label className="block mb-4 font-bold text-lg">
//                             Medical Exam Details:
//                         </label>
//                             <textarea name="medicalExamDetails" value={formData.medicalExamDetails} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        
//                     </>
//                 );
//             case 'home':
//                 return (
//                     <>
//                         <label className="block mb-4 font-bold text-lg">
//                             Property Address:
//                             </label>
//                             <input type="text" name="propertyAddress" value={formData.propertyAddress} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
//                         <label className="block mb-4 font-bold text-lg">
//                             Year Built:
//                             </label>
//                             <input type="number" name="yearBuilt" value={formData.yearBuilt} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
//                         <label className="block mb-4 font-bold text-lg">
//                             Type of Residence:
//                             </label>
//                             <select name="residenceType" value={formData.residenceType} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
//                                 <option value="single-family">Single-family</option>
//                                 <option value="condo">Condo</option>
//                                 <option value="townhouse">Townhouse</option>
//                                 <option value="multi-family">Multi-family</option>
//                             </select>
                        
//                         <label className="block mb-4 font-bold text-lg">
//                             Square Footage:
//                             </label>
//                             <input type="number" name="squareFootage" value={formData.squareFootage} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
//                         <label className="block mb-4 font-bold text-lg">
//                             Security Systems:
//                             </label>
//                             <select name="securitySystems" value={formData.securitySystems} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
//                                 <option value="yes">Yes</option>
//                                 <option value="no">No</option>
//                             </select>
                        
//                     </>
//                 );
//             case 'health':
//                 return (
//                     <>
//                         <label className="block mb-4 font-bold text-lg">
//                             Height and Weight:
//                         </label>
//                             <input type="text" name="heightWeight" value={formData.heightWeight} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
//                         <label className="block mb-4 font-bold text-lg">
//                             Existing Medical Conditions:
//                             </label>
//                             <textarea name="existingConditions" value={formData.existingConditions} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        
//                         <label className="block mb-4 font-bold text-lg">
//                             Primary Care Physician:
//                             </label>
//                             <input type="text" name="primaryPhysician" value={formData.primaryPhysician} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
//                         <label className="block mb-4 font-bold text-lg">
//                             Medications:
//                             </label>
//                             <textarea name="medications" value={formData.medications} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                       
//                         <label className="block mb-4 font-bold text-lg">
//                             Hospital Preferences:
//                             </label>
//                             <textarea name="hospitalPreferences" value={formData.hospitalPreferences} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    
//                     </>
//                 );
//             case 'vehicle':
//                 return (
//                     <>
//                         <label className="block mb-4 font-bold text-lg">
//                             Vehicle Identification Number (VIN):
//                             </label>
//                             <input type="text" name="vin" value={formData.vin} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
//                         <label className="block mb-4 font-bold text-lg">
//                             Current Mileage:
//                             </label>
//                             <input type="number" name="currentMileage" value={formData.currentMileage} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
//                         <label className="block mb-4 font-bold text-lg">
//                             Previous Claims:
//                             </label>
//                             <textarea name="previousClaims" value={formData.previousClaims} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        
//                         <label className="block mb-4 font-bold text-lg">
//                             Usage Type:
//                             </label>
//                             <select name="usageType" value={formData.usageType} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
//                                 <option value="personal">Personal</option>
//                                 <option value="commercial">Commercial</option>
//                             </select>
                       
//                         <label className="block mb-4 font-bold text-lg">
//                             Vehicle Usage Frequency:
//                             </label>
//                             <select name="usageFrequency" value={formData.usageFrequency} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
//                                 <option value="daily">Daily</option>
//                                 <option value="weekly">Weekly</option>
//                                 <option value="occasional">Occasional</option>
//                             </select>
                        
//                     </>
//                 );
//             default:
//                 return <p>Invalid plan type</p>;
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//             <h2 className="text-3xl font-bold text-blue-700 mb-6">
//                 {planType ? planType.toUpperCase() : 'Invalid'} INSURANCE DETAILS
//             </h2>
//             <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
//                 {renderFormFields()}
//                 <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full mt-4">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default PlanTypeForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/insure-all-logo.png'
 
const PlanTypeForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { planType = '' } = location.state || {};
 
    const [formData, setFormData] = useState({
        // Initialize all possible fields here
        annualIncome: '',
        healthHistory: '',
        smokingStatus: '',
        hobbiesLifestyle: '',
        medicalExamDetails: '',
        propertyAddress: '',
        yearBuilt: '',
        residenceType: '',
        squareFootage: '',
        securitySystems: '',
        heightWeight: '',
        existingConditions: '',
        primaryPhysician: '',
        medications: '',
        hospitalPreferences: '',
        vin: '',
        currentMileage: '',
        previousClaims: '',
        usageType: '',
        usageFrequency: '',
    });
 
    const [showPopup, setShowPopup] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
 
    const handleProceed = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };
 
    const handlePopupSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/${planType}-insurance`, formData)
            .then(response => {
                alert('Details submitted successfully');
                navigate('/customer/success-page');
            })
            .catch(error => console.error(error));
    };
 
    const renderFormFields = () => {
        switch (planType) {
            case 'life':
                return (
                    <>
                        <label className="block mb-4 font-bold text-lg">
                            Annual Income:
                            </label>
                            <select name="annualIncome" value={formData.annualIncome} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="">Select Annual Income</option>
                                <option value="Up to 2.9L">Up to 2.9L</option>
                                <option value="3L to 4.9L">3L to 4.9L</option>
                                <option value="5L to 7.9L">5L to 7.9L</option>
                                <option value="8L to 9.9L">8L to 9.9L</option>
                                <option value="10L to 19.9L">10L to 19.9L</option>
                                <option value="20L and above">20L and above</option>
                            </select>
                        
                        <label className="block mb-4 font-bold text-lg">
                            Health History:
                            </label>
                            <textarea name="healthHistory" value={formData.healthHistory} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        
                        <label className="block mb-4 font-bold text-lg">
                            Smoking Status:
                            </label>
                            <select name="smokingStatus" value={formData.smokingStatus} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="non-smoker">Non-Smoker</option>
                                <option value="smoker">Smoker</option>
                            </select>
                        
                        <label className="block mb-4 font-bold text-lg">
                            Hobbies and Lifestyle:
                            </label>
                            <textarea name="hobbiesLifestyle" value={formData.hobbiesLifestyle} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                       
                        <label className="block mb-4 font-bold text-lg">
                            Medical Exam Details:
                            </label>
                            <textarea name="medicalExamDetails" value={formData.medicalExamDetails} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        
                    </>
                );
            case 'home':
                return (
                    <>
                        <label className="block mb-4 font-bold text-lg">
                            Property Address:
                            </label>
                            <input type="text" name="propertyAddress" value={formData.propertyAddress} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
                        <label className="block mb-4 font-bold text-lg">
                            Year Built:
                            </label>
                            <input type="number" name="yearBuilt" value={formData.yearBuilt} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
                        <label className="block mb-4 font-bold text-lg">
                            Type of Residence:
                            </label>
                            <select name="residenceType" value={formData.residenceType} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="single-family">Single-family</option>
                                <option value="condo">Condo</option>
                                <option value="townhouse">Townhouse</option>
                                <option value="multi-family">Multi-family</option>
                            </select>
                        
                        <label className="block mb-4 font-bold text-lg">
                            Square Footage:
                            </label>
                            <input type="number" name="squareFootage" value={formData.squareFootage} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
                        <label className="block mb-4 font-bold text-lg">
                            Security Systems:
                            </label>
                            <select name="securitySystems" value={formData.securitySystems} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                       
                    </>
                );
            case 'health':
                return (
                    <>
                        <label className="block mb-4 font-bold text-lg">
                            Height and Weight:
                            </label>
                            <input type="text" name="heightWeight" value={formData.heightWeight} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
                        <label className="block mb-4 font-bold text-lg">
                            Existing Medical Conditions:
                            </label>
                            <textarea name="existingConditions" value={formData.existingConditions} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                       
                        <label className="block mb-4 font-bold text-lg">
                            Primary Care Physician:
                            </label>
                            <input type="text" name="primaryPhysician" value={formData.primaryPhysician} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                       
                        <label className="block mb-4 font-bold text-lg">
                            Medications:
                            </label>
                            <textarea name="medications" value={formData.medications} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        
                        <label className="block mb-4 font-bold text-lg">
                            Hospital Preferences:
                            </label>
                            <textarea name="hospitalPreferences" value={formData.hospitalPreferences} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        
                    </>
                );
            case 'vehicle':
                return (
                    <>
                        <label className="block mb-4 font-bold text-lg">
                            Vehicle Identification Number (VIN):
                            </label>
                            <input type="text" name="vin" value={formData.vin} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
                        <label className="block mb-4 font-bold text-lg">
                            Current Mileage:
                            </label>
                            <input type="number" name="currentMileage" value={formData.currentMileage} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
                        <label className="block mb-4 font-bold text-lg">
                            Previous Claims:
                            </label>
                            <textarea name="previousClaims" value={formData.previousClaims} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        
                        <label className="block mb-4 font-bold text-lg">
                            Usage Type:
                            </label>
                            <select name="usageType
 
" value={formData.usageType} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="personal">Personal</option>
                                <option value="commercial">Commercial</option>
                            </select>
                        
                        <label className="block mb-4 font-bold text-lg">
                            Vehicle Usage Frequency:
                            </label>
                            <select name="usageFrequency" value={formData.usageFrequency} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="occasional">Occasional</option>
                            </select>
                        
                    </>
                );
            default:
                return <p>Invalid plan type</p>;
        }
    };
 
    const renderTermsAndConditions = () => (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
                <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
                <p className="mb-4">
                    Here are some general terms and conditions for all insurance policies:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Policy coverage is subject to the terms and conditions specified in the policy document.</li>
                    <li>Premiums must be paid on time to avoid policy lapses.</li>
                    <li>Claims must be filed within the time frame specified in the policy document.</li>
                    <li>Any fraudulent activity will result in policy cancellation.</li>
                    <li>Policyholders are required to inform the insurer of any changes in their information.</li>
                </ul>
                <label className="block mb-4">
                    <input type="checkbox" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} />
                    <span className="ml-2">I accept all the terms and conditions</span>
                </label>
                <button onClick={handlePopupSubmit} disabled={!termsAccepted} className={`bg-blue-600 text-white py-2 px-4 rounded ${!termsAccepted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`} >
                    Submit
                </button>
            </div>
        </div>
    );
 
    return (
        <div className="plan-type flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <img src={logoImage} alt="Logo" className="logo-img" style={{width:'200px', height:'auto'}}/>

            <h2 className="text-3xl font-bold text-blue-700 mb-6">
                {planType ? planType.toUpperCase() : 'Invalid'} INSURANCE DETAILS
            </h2>
            <form onSubmit={handleProceed} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                {renderFormFields()}
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full mt-4">
                    Proceed
                </button>
            </form>
            {showPopup && renderTermsAndConditions()}
        </div>
    );
};
 
export default PlanTypeForm;
 