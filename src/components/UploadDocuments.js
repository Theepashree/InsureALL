// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const UploadDocuments = () => {
//   const { policyId } = useParams();
//   const navigate = useNavigate();

//   const [documents, setDocuments] = useState({
//     incomeCertificate: null,
//     selfCancelledCheque: null,
//     communicationAddressProof: null,
//     birthCertificate: null,
//     photo: null,
//     signature: null
//   });

//   const handleFileChange = (e) => {
//     setDocuments({ ...documents, [e.target.name]: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('policyId', policyId);
//     formData.append('incomeCertificate', documents.incomeCertificate);
//     if (documents.selfCancelledCheque) formData.append('selfCancelledCheque', documents.selfCancelledCheque);
//     if (documents.communicationAddressProof) formData.append('communicationAddressProof', documents.communicationAddressProof);
//     if (documents.birthCertificate) formData.append('birthCertificate', documents.birthCertificate);
//     if (documents.photo) formData.append('photo', documents.photo);
//     if (documents.signature) formData.append('signature', documents.signature);

//     axios.post(`http://localhost:8080/api/appliedPolicies/${policyId}/documents`, formData)
//       .then(response => {
//         alert('Documents uploaded successfully');
//         navigate('/some-other-page'); // Navigate to a success page or dashboard
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h2>Upload Documents</h2>
//       <form onSubmit={handleSubmit}>
        // <label>
        //   Income Certificate:
        //   <input type="file" name="incomeCertificate" onChange={handleFileChange} required />
        // </label>
        // <label>
        //   Self Cancelled Cheque:
        //   <input type="file" name="selfCancelledCheque" onChange={handleFileChange} />
        // </label>
        // <label>
        //   Communication Address Proof:
        //   <input type="file" name="communicationAddressProof" onChange={handleFileChange} />
        // </label>
        // <label>
        //   Birth Certificate:
        //   <input type="file" name="birthCertificate" onChange={handleFileChange} />
        // </label>
        // <label>
        //   Photo:
        //   <input type="file" name="photo" onChange={handleFileChange} />
        // </label>
        // <label>
        //   Signature:
        //   <input type="file" name="signature" onChange={handleFileChange} />
        // </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UploadDocuments;

//now
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const UploadDocuments = () => {
//   const { policyId } = useParams();
//   const navigate = useNavigate();

//   const [documents, setDocuments] = useState({
//     incomeCertificate: null,
//     selfCancelledCheque: null,
//     communicationAddressProof: null,
//     birthCertificate: null,
//     photo: null,
//     signature: null
//   });

//   const handleFileChange = (e) => {
//     setDocuments({ ...documents, [e.target.name]: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('policyId', policyId);
//     formData.append('incomeCertificate', documents.incomeCertificate);
//     if (documents.selfCancelledCheque) formData.append('selfCancelledCheque', documents.selfCancelledCheque);
//     if (documents.communicationAddressProof) formData.append('communicationAddressProof', documents.communicationAddressProof);
//     if (documents.birthCertificate) formData.append('birthCertificate', documents.birthCertificate);
//     if (documents.photo) formData.append('photo', documents.photo);
//     if (documents.signature) formData.append('signature', documents.signature);

//     axios.post(`http://localhost:8080/api/appliedPolicies/${policyId}/documents`, formData)
//       .then(response => {
//         alert('Documents uploaded successfully');
//         navigate('/some-other-page'); // Navigate to a success page or dashboard
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h2>Upload Documents</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Income Certificate:
//           <input type="file" name="incomeCertificate" onChange={handleFileChange} required />
//         </label>
//         <label>
//           Self Cancelled Cheque:
//           <input type="file" name="selfCancelledCheque" onChange={handleFileChange} />
//         </label>
//         <label>
//           Communication Address Proof:
//           <input type="file" name="communicationAddressProof" onChange={handleFileChange} />
//         </label>
//         <label>
//           Birth Certificate:
//           <input type="file" name="birthCertificate" onChange={handleFileChange} />
//         </label>
//         <label>
//           Photo:
//           <input type="file" name="photo" onChange={handleFileChange} />
//         </label>
//         <label>
//           Signature:
//           <input type="file" name="signature" onChange={handleFileChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UploadDocuments;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const UploadDocuments = () => {
//   const { policyId } = useParams();
//   const navigate = useNavigate();

//   const [documents, setDocuments] = useState({
//     incomeCertificate: null,
//     selfCancelledCheque: null,
//     communicationAddressProof: null,
//     birthCertificate: null,
//     photo: null,
//     signature: null
//   });

//   const handleFileChange = (e) => {
//     setDocuments({ ...documents, [e.target.name]: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('incomeCertificate', documents.incomeCertificate);
//     if (documents.selfCancelledCheque) formData.append('selfCancelledCheque', documents.selfCancelledCheque);
//     if (documents.communicationAddressProof) formData.append('communicationAddressProof', documents.communicationAddressProof);
//     if (documents.birthCertificate) formData.append('birthCertificate', documents.birthCertificate);
//     if (documents.photo) formData.append('photo', documents.photo);
//     if (documents.signature) formData.append('signature', documents.signature);

//     axios.post(`http://localhost:8080/api/appliedPolicies/${policyId}/documents`, formData)
//       .then(response => {
//         alert('Documents uploaded successfully');
//         navigate('/some-other-page'); // Navigate to a success page or dashboard
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h2>Upload Documents</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Income Certificate:
//           <input type="file" name="incomeCertificate" onChange={handleFileChange} required />
//         </label>
//         <label>
//           Self Cancelled Cheque:
//           <input type="file" name="selfCancelledCheque" onChange={handleFileChange} />
//         </label>
//         <label>
//           Communication Address Proof:
//           <input type="file" name="communicationAddressProof" onChange={handleFileChange} />
//         </label>
//         <label>
//           Birth Certificate:
//           <input type="file" name="birthCertificate" onChange={handleFileChange} />
//         </label>
//         <label>
//           Photo:
//           <input type="file" name="photo" onChange={handleFileChange} />
//         </label>
//         <label>
//           Signature:
//           <input type="file" name="signature" onChange={handleFileChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UploadDocuments;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const UploadDocuments = () => {
//   const navigate = useNavigate();

//   const [documents, setDocuments] = useState({
//     incomeCertificate: null,
//     selfCancelledCheque: null,
//     communicationAddressProof: null,
//     birthCertificate: null,
//     photo: null,
//     signature: null,
//   });

//   const handleFileChange = (e) => {
//     setDocuments({ ...documents, [e.target.name]: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('incomeCertificate', documents.incomeCertificate);
//     if (documents.selfCancelledCheque) formData.append('selfCancelledCheque', documents.selfCancelledCheque);
//     if (documents.communicationAddressProof) formData.append('communicationAddressProof', documents.communicationAddressProof);
//     if (documents.birthCertificate) formData.append('birthCertificate', documents.birthCertificate);
//     if (documents.photo) formData.append('photo', documents.photo);
//     if (documents.signature) formData.append('signature', documents.signature);

//     axios.post('http://localhost:8080/api/appliedPolicies/documents', formData)
//       .then(response => {
//         alert('Documents uploaded successfully');
//         navigate('/some-other-page'); // Navigate to a success page or dashboard
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h2>Upload Documents</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Income Certificate:
//           <input type="file" name="incomeCertificate" onChange={handleFileChange} required />
//         </label>
//         <label>
//           Self Cancelled Cheque:
//           <input type="file" name="selfCancelledCheque" onChange={handleFileChange} />
//         </label>
//         <label>
//           Communication Address Proof:
//           <input type="file" name="communicationAddressProof" onChange={handleFileChange} />
//         </label>
//         <label>
//           Birth Certificate:
//           <input type="file" name="birthCertificate" onChange={handleFileChange} />
//         </label>
//         <label>
//           Photo:
//           <input type="file" name="photo" onChange={handleFileChange} />
//         </label>
//         <label>
//           Signature:
//           <input type="file" name="signature" onChange={handleFileChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UploadDocuments;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';

// const UploadDocuments = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { planType } = location.state || {};

//     const [documents, setDocuments] = useState({
//         incomeCertificate: null,
//         selfCancelledCheque: null,
//         communicationAddressProof: null,
//         birthCertificate: null,
//         photo: null,
//         signature: null,
//     });

//     const handleFileChange = (e) => {
//         setDocuments({ ...documents, [e.target.name]: e.target.files[0] });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('incomeCertificate', documents.incomeCertificate);
//         if (documents.selfCancelledCheque) formData.append('selfCancelledCheque', documents.selfCancelledCheque);
//         if (documents.communicationAddressProof) formData.append('communicationAddressProof', documents.communicationAddressProof);
//         if (documents.birthCertificate) formData.append('birthCertificate',documents.birthCertificate);
//         if (documents.photo) formData.append('photo', documents.photo);
//         if (documents.signature) formData.append('signature', documents.signature);

//         axios.post('http://localhost:8080/api/appliedPolicies/documents', formData)
//             .then(response => {
//                 alert('Documents uploaded successfully');
//                 navigate('/customer/plan-type-form', { state: { planType } });
//             })
//             .catch(error => console.error(error));
//     };

//     return (
//         <div>
//             <h2>Upload Documents</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Income Certificate:
//                     <input type="file" name="incomeCertificate" onChange={handleFileChange} required />
//                 </label>
//                 <label>
//                     Self Cancelled Cheque:
//                     <input type="file" name="selfCancelledCheque" onChange={handleFileChange} />
//                 </label>
//                 <label>
//                     Communication Address Proof:
//                     <input type="file" name="communicationAddressProof" onChange={handleFileChange} />
//                 </label>
//                 <label>
//                     Birth Certificate:
//                     <input type="file" name="birthCertificate" onChange={handleFileChange} />
//                 </label>
//                 <label>
//                     Photo:
//                     <input type="file" name="photo" onChange={handleFileChange} />
//                 </label>
//                 <label>
//                     Signature:
//                     <input type="file" name="signature" onChange={handleFileChange} />
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default UploadDocuments;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';

// const UploadDocuments = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { planType } = location.state || {};

//     const [documents, setDocuments] = useState({
//         incomeCertificate: null,
//         selfCancelledCheque: null,
//         communicationAddressProof: null,
//         birthCertificate: null,
//         photo: null,
//         signature: null,
//     });

//     const handleFileChange = (e) => {
//         setDocuments({ ...documents, [e.target.name]: e.target.files[0] });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('incomeCertificate', documents.incomeCertificate);
//         if (documents.selfCancelledCheque) formData.append('selfCancelledCheque', documents.selfCancelledCheque);
//         if (documents.communicationAddressProof) formData.append('communicationAddressProof', documents.communicationAddressProof);
//         if (documents.birthCertificate) formData.append('birthCertificate',documents.birthCertificate);
//         if (documents.photo) formData.append('photo', documents.photo);
//         if (documents.signature) formData.append('signature', documents.signature);

//         axios.post('http://localhost:8080/api/appliedPolicies/documents', formData)
//             .then(response => {
//                 alert('Documents uploaded successfully');
//                 navigate('/customer/plan-type-form', { state: { planType } });
//             })
//             .catch(error => console.error(error));
//     };

//     return (
//         <div>
//             <h2>Upload Documents</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Income Certificate:
//                     <input type="file" name="incomeCertificate" onChange={handleFileChange} required />
//                 </label>
//                 <label>
//                     Self Cancelled Cheque:
//                     <input type="file" name="selfCancelledCheque" onChange={handleFileChange} />
//                 </label>
//                 <label>
//                     Communication Address Proof:
//                     <input type="file" name="communicationAddressProof" onChange={handleFileChange} />
//                 </label>
//                 <label>
//                     Birth Certificate:
//                     <input type="file" name="birthCertificate" onChange={handleFileChange} />
//                 </label>
//                 <label>
//                     Photo:
//                     <input type="file" name="photo" onChange={handleFileChange} />
//                 </label>
//                 <label>
//                     Signature:
//                     <input type="file" name="signature" onChange={handleFileChange} />
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default UploadDocuments;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';

// const UploadDocuments = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { planType } = location.state || {};

//     const [documents, setDocuments] = useState({
//         incomeCertificate: null,
//         selfCancelledCheque: null,
//         communicationAddressProof: null,
//         birthCertificate: null,
//         photo: null,
//         signature: null,
//     });

//     const handleFileChange = (e) => {
//         setDocuments({ ...documents, [e.target.name]: e.target.files[0] });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('incomeCertificate', documents.incomeCertificate);
//         if (documents.selfCancelledCheque) formData.append('selfCancelledCheque', documents.selfCancelledCheque);
//         if (documents.communicationAddressProof) formData.append('communicationAddressProof', documents.communicationAddressProof);
//         if (documents.birthCertificate) formData.append('birthCertificate', documents.birthCertificate);
//         if (documents.photo) formData.append('photo', documents.photo);
//         if (documents.signature) formData.append('signature', documents.signature);

//         axios.post('http://localhost:8080/api/appliedPolicies/documents', formData)
//             .then(response => {
//                 alert('Documents uploaded successfully');
//                 navigate('/customer/plan-type-form', { state: { planType } });
//             })
//             .catch(error => console.error(error));
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//             <h2 className="text-3xl font-bold text-blue-700 mb-6">UPLOAD DOCUMENTS</h2>
//             <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
//                 {[
//                     { label: 'Income Certificate', name: 'incomeCertificate', required: true },
//                     { label: 'Self Cancelled Cheque', name: 'selfCancelledCheque', required: true },
//                     { label: 'Communication Address Proof', name: 'communicationAddressProof', required: true },
//                     { label: 'Birth Certificate', name: 'birthCertificate', required: true },
//                     { label: 'Photo', name: 'photo', required: true },
//                     { label: 'Signature', name: 'signature', required: true },
//                 ].map((field, idx) => (
//                     <div key={idx} className="mb-4">
//                         <label className="block text-gray-700 text-lg font-bold mb-2">{field.label}</label>
//                         <input
//                             type="file"
//                             name={field.name}
//                             onChange={handleFileChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required={field.required}
//                         />
//                     </div>
//                 ))}
//                 <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default UploadDocuments;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/insure-all-logo.png'

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

    const handleFileChange = (e) => {
        setDocuments({ ...documents, [e.target.name]: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('incomeCertificate', documents.incomeCertificate);
        if (documents.selfCancelledCheque) formData.append('selfCancelledCheque', documents.selfCancelledCheque);
        if (documents.communicationAddressProof) formData.append('communicationAddressProof', documents.communicationAddressProof);
        if (documents.birthCertificate) formData.append('birthCertificate', documents.birthCertificate);
        if (documents.photo) formData.append('photo', documents.photo);
        if (documents.signature) formData.append('signature', documents.signature);

        axios.post('http://localhost:8080/api/appliedPolicies/documents', formData)
            .then(response => {
                alert('Documents uploaded successfully');
                navigate('/customer/plan-type-form', { state: { planType } });
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="upload-documents flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <img src={logoImage} alt="Logo" className="logo-img" style={{width:'200px', height:'auto'}}/>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">UPLOAD DOCUMENTS</h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
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





