// import React from 'react';
// import { useHistory, useNavigate } from 'react-router-dom';

// const SuccessPage = () => {
//     const navigate = useNavigate();

//     const goToHomePage = () => {
//         navigate('/customer');
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//             <h2 className="text-3xl font-bold text-blue-700 mb-6">
//                 Thank You for Submitting Your Application!
//             </h2>
//             <p className="text-lg text-gray-700 mb-4">
//                 Your application will be reviewed shortly.
//             </p>
//             <p className="text-lg text-gray-700">
//                 You can check your status for further updates.
//             </p>
//             <button 
//                 onClick={goToHomePage} 
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//             >
//                 Go to Home Page
//             </button>
//         </div>
//     );
// };

// export default SuccessPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import logoImage from '../assets/images/insure-all-logo.png'
 
const SuccessPage = () => {
    const navigate = useNavigate();
 
    const goToHomePage = () => {
        navigate('/customer');
    };
 
    return (
        <div className="success-page flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <img src={logoImage} alt="Logo" className="logo-img" style={{width:'200px', height:'auto'}}/>
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={500} // You can adjust the number of pieces for desired effect
                gravity={0.2} // Adjust gravity for speed and falling behavior
            />
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
                Thank You for Submitting Your Application!
            </h2>
            <p className="text-lg text-gray-700 mb-4">
                Your application will be reviewed shortly.
            </p>
            <p className="text-lg text-gray-700">
                You can check your status for further updates.
            </p>
            <button
                onClick={goToHomePage}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Go to Home Page
            </button>
        </div>
    );
};
 
export default SuccessPage;
