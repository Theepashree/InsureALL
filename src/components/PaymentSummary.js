// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import QRCode from 'qrcode.react';


// const PaymentSummary = () => {
//     const location = useLocation();
//     const { policy } = location.state;

//     const paymentUrl = 'https://vaishnavi-sivaraman.github.io/deploy/'; // Replace with your actual URL

//     return (
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <div>
//                 <h2>Summary</h2>
//                 <p>Base Premium - 1 year: ₹{policy.termAmount}</p>
//                 <h3>Selected Rider(s)</h3>
//                 <p>Claim Shield: ₹452</p>
//                 <p>Annual Health Check-up: ₹453</p>
//                 <h3>Select Add-ons</h3>
//                 <p>No add-ons selected</p>
//                 <h3>Total premium</h3>
//                 <p>₹{parseInt(policy.termAmount) + 452 + 453}</p>
//                 <p>Get up to ₹5,144 in benefits.</p>
//             </div>
//             <div>
//                 <QRCode
//                     value={paymentUrl}
//                     size={200}
//                     level="H"
//                     includeMargin={true}
//                 />
//             </div>
//         </div>
//     );
// };

// export default PaymentSummary;

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import QRCode from 'qrcode.react';

// const PaymentSummary = () => {
//     const location = useLocation();
//     const { policy } = location.state;

//     const paymentUrl = 'https://vaishnavi-sivaraman.github.io/deploy/'; // Replace with your actual URL

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl flex flex-col md:flex-row justify-between">
//                 <div className="mb-6 md:mb-0 md:mr-6">
//                     <h2 className="text-2xl font-bold text-blue-700 mb-4">Summary</h2>
//                     <p className="mb-4">Base Premium - 1 year : ₹{policy.termAmount}</p>
//                     <h3 className="text-xl font-semibold mb-2">Selected Rider(s)</h3>
//                     <p className="mb-2">Claim Shield: ₹452</p>
//                     <p className="mb-4">Annual Health Check-up: ₹453</p>
//                     <h3 className="text-xl font-semibold mb-2">Select Add-ons</h3>
//                     <p className="mb-4">No add-ons selected</p>
//                     <h3 className="text-xl font-semibold mb-2">Total Premium</h3>
//                     <p className="mb-4">₹{parseInt(policy.termAmount) + 452 + 453}</p>
//                     <p className="text-green-600 font-bold">Get up to ₹5,144 in benefits.</p>
//                 </div>
//                 <div className="flex items-center justify-center">
//                     <QRCode
//                         value={paymentUrl}
//                         size={200}
//                         level="H"
//                         includeMargin={true}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PaymentSummary;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import QRCode from 'qrcode.react';
 
// const PaymentSummary = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { policy } = location.state;
 
//     const [showQRCode, setShowQRCode] = useState(false);
//     const [sessionExpired, setSessionExpired] = useState(false);
 
//     const paymentUrl = 'https://vaishnavi-sivaraman.github.io/deploy/'; // Replace with your actual URL
 
//     useEffect(() => {
//         let timer;
//         if (showQRCode) {
//             timer = setTimeout(() => {
//                 setShowQRCode(false);
//                 setSessionExpired(true);
//             }, 120000); // 2 minutes
//         }
//         return () => clearTimeout(timer);
//     }, [showQRCode]);
 
//     const handlePaymentClick = () => {
//         setShowQRCode(true);
//         setSessionExpired(false);
//     };
 
//     const handleSessionExpiredOk = () => {
//         navigate('/customer');
//     };
 
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl flex flex-col items-center">
//                 <div className="mb-6 md:mb-0 md:mr-6">
//                     <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Summary</h2>
//                     <p className="mb-4 text-center">Base Premium - 1 year : ₹{policy.termAmount}</p>
//                     <h3 className="text-xl font-semibold mb-2 text-center">Selected Rider(s)</h3>
//                     <p className="mb-2 text-center">Claim Shield: ₹452</p>
//                     <p className="mb-4 text-center">Annual Health Check-up: ₹453</p>
//                     <h3 className="text-xl font-semibold mb-2 text-center">Select Add-ons</h3>
//                     <p className="mb-4 text-center">No add-ons selected</p>
//                     <h3 className="text-xl font-semibold mb-2 text-center">Total Premium</h3>
//                     <p className="mb-4 text-center">₹{parseInt(policy.termAmount) + 452 + 453}</p>
//                     <p className="text-green-600 font-bold text-center">Get up to ₹5,144 in benefits.</p>
//                     <button
//                         onClick={handlePaymentClick}
//                         className="bg-blue-600 text-white justify-center items-center py-2 px-4 rounded hover:bg-blue-700 mt-4"
//                     >
//                         Click here to Pay
//                     </button>
//                 </div>
//             </div>
 
//             {showQRCode && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                     <div className="relative bg-white p-4 rounded-lg">
//                         <button
//                             onClick={() => setShowQRCode(false)}
//                             className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800"
//                         >
//                             &times;
//                         </button>
//                         <QRCode
//                             value={paymentUrl}
//                             size={200}
//                             level="H"
//                             includeMargin={true}
//                         />
//                     </div>
//                 </div>
//             )}
 
//             {sessionExpired && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                     <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//                         <p className="mb-4">Your session has expired.</p>
//                         <button
//                             onClick={handleSessionExpiredOk}
//                             className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//                         >
//                             OK
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
 
// export default PaymentSummary;

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';
import logoImage from '../assets/images/insure-all-logo.png'

const PaymentSummary = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { policy } = location.state;

    const [showQRCode, setShowQRCode] = useState(false);
    const [sessionExpired, setSessionExpired] = useState(false);

    const paymentUrl = 'https://vaishnavi-sivaraman.github.io/deploy/'; // Replace with your actual URL

    useEffect(() => {
        let timer;
        if (showQRCode) {
            timer = setTimeout(() => {
                setShowQRCode(false);
                setSessionExpired(true);
            }, 120000); // 2 minutes
        }
        return () => clearTimeout(timer);
    }, [showQRCode]);

    const handlePaymentClick = () => {
        setShowQRCode(true);
        setSessionExpired(false);
    };

    const handleSessionExpiredOk = () => {
        navigate('/customer');
    };

    return (
        <div className="payment-summary flex flex-col items-center justify-center min-h-screen bg-white p-6">
            <img src={logoImage} alt="Logo" className="logo-img"/>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl flex flex-col items-center">
                <div className="mb-6 md:mb-0 md:mr-6 text-center">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">Summary</h2>
                    <p className="mb-4">Base Premium - 1 year : ₹{policy.termAmount}</p>
                    <h3 className="text-xl font-semibold mb-2">Selected Rider(s)</h3>
                    <p className="mb-2">Claim Shield: ₹452</p>
                    <p className="mb-4">Annual Health Check-up: ₹453</p>
                    <h3 className="text-xl font-semibold mb-2">Select Add-ons</h3>
                    <p className="mb-4">No add-ons selected</p>
                    <h3 className="text-xl font-semibold mb-2">Total Premium</h3>
                    <p className="mb-4">₹{parseInt(policy.termAmount) + 452 + 453}</p>
                    <p className="text-green-600 font-bold">Get up to ₹5,144 in benefits.</p>
                    <button
                        onClick={handlePaymentClick}
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4"
                    >
                        Click here to Pay
                    </button>
                </div>
            </div>

            {showQRCode && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="relative bg-white p-4 rounded-lg">
                        <button
                            onClick={() => setShowQRCode(false)}
                            className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800"
                        >
                            &times;
                        </button>
                        <QRCode
                            value={paymentUrl}
                            size={200}
                            level="H"
                            includeMargin={true}
                        />
                    </div>
                </div>
            )}

            {sessionExpired && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <p className="mb-4">Your session has expired.</p>
                        <button
                            onClick={handleSessionExpiredOk}
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentSummary;

