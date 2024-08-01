// import React from "react";
// import '../styles/Navbar.css'
// import logoImage from '../assets/images/insure-all-logo.jpg'

// const Navbar = () => {
//     return(
//         <header className="header">
//             <a href="/" className="logo">
//             <img src={logoImage} alt="Logo" className="logo-img"/>
//             </a>

//             <nav className="navbar">
//             <a href="/">Insurance Advisors</a>
//             <a href="/">Services</a>
//             <a href="/">Contact</a>
//             <a href="/login">Login</a>
//             <a href="/register">Register</a>   
//             </nav>
//         </header>
//     )
// }
// export default Navbar;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import '../styles/Navbar.css';
// import logoImage from '../assets/images/insure-all-logo.png';

// const Navbar = () => {
//     const [isContactPopupVisible, setContactPopupVisible] = useState(false);

//     const toggleContactPopup = () => {
//         setContactPopupVisible(!isContactPopupVisible);
//     };

//     const handleOutsideClick = (e) => {
//         if (e.target.classList.contains('popup-overlay')) {
//             setContactPopupVisible(false);
//         }
//     };

//     return (
//         <>
//             <header className="header">
//                 <a href="/" className="logo">
//                     <img src={logoImage} alt="Logo" className="logo-img" />
//                 </a>
//                 <nav className="navbar">
//                     <a href="/">Insurance Advisors</a>
//                     <a href="/">Services</a>
//                     <a href="#" onClick={toggleContactPopup}>Contact</a>
//                     <a href="/login">Login</a>
//                     <a href="/register">Register</a>
//                 </nav>
//             </header>

//             {isContactPopupVisible && (
//                 <div className="popup-overlay" onClick={handleOutsideClick}>
//                     <div className="contact-popup">
//                         <h2 className="font-bold text-lg">Contact Us</h2>
//                         <div className="contact-details">
//                             <div className="contact-item">
//                                 <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
//                                 <span>New York, NY 10012, US</span>
//                             </div>
//                             <div className="contact-item">
//                                 <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
//                                 <span>info@example.com</span>
//                             </div>
//                             <div className="contact-item">
//                                 <FontAwesomeIcon icon={faPhone} className="contact-icon" />
//                                 <span>+ 01 234 567 88</span>
//                             </div>
//                             <div className="contact-item">
//                                 <FontAwesomeIcon icon={faPhone} className="contact-icon" />
//                                 <span>+ 01 234 567 89</span>
//                             </div>
//                         </div>
//                         <button onClick={toggleContactPopup}>Close</button>
//                     </div>

                

//                 </div>
//             )}
//         </>
//     );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faEnvelope, faPhone, faHospital, faCar, faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
// import '../styles/Navbar.css';
// import logoImage from '../assets/images/insure-all-logo.jpg';

// const Navbar = () => {
//     const [isContactPopupVisible, setContactPopupVisible] = useState(false);
//     const [isInsuranceDropdownVisible, setInsuranceDropdownVisible] = useState(false);
//     const [isServicesDropdownVisible, setServicesDropdownVisible] = useState(false);

//     const toggleContactPopup = () => {
//         setContactPopupVisible(!isContactPopupVisible);
//     };

//     const handleOutsideClick = (e) => {
//         if (e.target.classList.contains('popup-overlay')) {
//             setContactPopupVisible(false);
//         }
//     };

//     return (
//         <>
//             <header className="header">
//                 <a href="/" className="logo">
//                     <img src={logoImage} alt="Logo" className="logo-img" />
//                 </a>
//                 <nav className="navbar">
//                     <div className="dropdown">
//                         <a href="#" onClick={() => setInsuranceDropdownVisible(!isInsuranceDropdownVisible)}>Insurance Advisors</a>
//                         {isInsuranceDropdownVisible && (
//                             <div className="dropdown-menu">
//                                 <a href="/">Insurance Advisors in New Delhi</a>
//                                 <a href="/">Insurance Advisors in Gurgaon</a>
//                                 <a href="/">Insurance Advisors in Noida</a>
//                                 <a href="/">Insurance Advisors in Chennai</a>
//                             </div>
//                         )}
//                     </div>
//                     <div className="dropdown">
//                         <a href="#" onClick={() => setServicesDropdownVisible(!isServicesDropdownVisible)}>Services</a>
//                         {isServicesDropdownVisible && (
//                             <div className="dropdown-menu">
//                                 <div className="dropdown-item">
//                                     <FontAwesomeIcon icon={faHeart} className="dropdown-icon" />
//                                     <a href="/">Health Insurance</a>
//                                 </div>
//                                 <div className="dropdown-item">
//                                     <FontAwesomeIcon icon={faHeart} className="dropdown-icon" />
//                                     <a href="/">Life Insurance</a>
//                                 </div>
//                                 <div className="dropdown-item">
//                                     <FontAwesomeIcon icon={faHome} className="dropdown-icon" />
//                                     <a href="/">Home Insurance</a>
//                                 </div>
//                                 <div className="dropdown-item">
//                                     <FontAwesomeIcon icon={faCar} className="dropdown-icon" />
//                                     <a href="/">Vehicle Insurance</a>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                     <a href="#" onClick={toggleContactPopup}>Contact</a>
//                     <a href="/login">Login</a>
//                     <a href="/register">Register</a>
//                 </nav>
//             </header>

//             {isContactPopupVisible && (
//                 <div className="popup-overlay" onClick={handleOutsideClick}>
//                     <div className="contact-popup">
//                         <h2>Contact Us</h2>
//                         <div className="contact-details">
//                             <div className="contact-item">
//                                 <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
//                                 <span>New York, NY 10012, US</span>
//                             </div>
//                             <div className="contact-item">
//                                 <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
//                                 <span>info@example.com</span>
//                             </div>
//                             <div className="contact-item">
//                                 <FontAwesomeIcon icon={faPhone} className="contact-icon" />
//                                 <span>+ 01 234 567 88</span>
//                             </div>
//                             <div className="contact-item">
//                                 <FontAwesomeIcon icon={faPhone} className="contact-icon" />
//                                 <span>+ 01 234 567 89</span>
//                             </div>
//                         </div>
//                         <button onClick={toggleContactPopup}>Close</button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faEnvelope, faPhone, faHeart, faHome, faCar } from '@fortawesome/free-solid-svg-icons';
// import logoImage from '../assets/images/insure-all-logo.jpg';

// const Navbar = () => {
//     const [isContactPopupVisible, setContactPopupVisible] = useState(false);
//     const [isInsuranceDropdownVisible, setInsuranceDropdownVisible] = useState(false);
//     const [isServicesDropdownVisible, setServicesDropdownVisible] = useState(false);

//     const toggleContactPopup = () => {
//         setContactPopupVisible(!isContactPopupVisible);
//     };

//     const handleOutsideClick = (e) => {
//         if (e.target.classList.contains('popup-overlay')) {
//             setContactPopupVisible(false);
//         }
//     };

//     return (
//         <>
//             <header className="fixed top-0 left-0 w-full py-5 px-10 bg-white flex justify-between items-center z-50 shadow-md h-20">
//                 <a href="/" className="text-2xl font-bold text-black">
//                     <img src={logoImage} alt="Logo" className="h-24 w-auto ml-5" />
//                 </a>
//                 <nav className="flex space-x-10">
//                     <div className="relative">
//                         <a href="#" onClick={() => setInsuranceDropdownVisible(!isInsuranceDropdownVisible)} className="text-lg font-medium text-black hover:underline">Insurance Advisors</a>
//                         {isInsuranceDropdownVisible && (
//                             <div className="absolute left-0 top-full mt-2 w-48 bg-white text-black border border-gray-300 shadow-lg rounded-md">
//                                 <a href="/" className="block px-4 py-2 hover:bg-gray-100">Insurance Advisors in New Delhi</a>
//                                 <a href="/" className="block px-4 py-2 hover:bg-gray-100">Insurance Advisors in Gurgaon</a>
//                                 <a href="/" className="block px-4 py-2 hover:bg-gray-100">Insurance Advisors in Noida</a>
//                                 <a href="/" className="block px-4 py-2 hover:bg-gray-100">Insurance Advisors in Chennai</a>
//                             </div>
//                         )}
//                     </div>
//                     <div className="relative">
//                         <a href="#" onClick={() => setServicesDropdownVisible(!isServicesDropdownVisible)} className="text-lg font-medium text-black hover:underline">Services</a>
//                         {isServicesDropdownVisible && (
//                             <div className="absolute left-0 top-full mt-2 w-48 bg-white text-black border border-gray-300 shadow-lg rounded-md">
//                                 <div className="flex items-center px-4 py-2 hover:bg-gray-100">
//                                     <FontAwesomeIcon icon={faHeart} className="mr-2 text-red-600" />
//                                     <a href="/" className="text-black">Health Insurance</a>
//                                 </div>
//                                 <div className="flex items-center px-4 py-2 hover:bg-gray-100">
//                                     <FontAwesomeIcon icon={faHeart} className="mr-2 text-red-600" />
//                                     <a href="/" className="text-black">Life Insurance</a>
//                                 </div>
//                                 <div className="flex items-center px-4 py-2 hover:bg-gray-100">
//                                     <FontAwesomeIcon icon={faHome} className="mr-2 text-blue-600" />
//                                     <a href="/" className="text-black">Home Insurance</a>
//                                 </div>
//                                 <div className="flex items-center px-4 py-2 hover:bg-gray-100">
//                                     <FontAwesomeIcon icon={faCar} className="mr-2 text-blue-600" />
//                                     <a href="/" className="text-black">Vehicle Insurance</a>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                     <a href="#" onClick={toggleContactPopup} className="text-lg font-medium text-black hover:underline">Contact</a>
//                     <a href="/login" className="text-lg font-medium text-black hover:underline">Login</a>
//                     <a href="/register" className="text-lg font-medium text-black hover:underline">Register</a>
//                 </nav>
//             </header>

//             {isContactPopupVisible && (
//                 <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={handleOutsideClick}>
//                     <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
//                         <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
//                         <div className="flex flex-col items-start mb-6">
//                             <div className="flex items-center mb-4">
//                                 <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 mr-3" />
//                                 <span>New York, NY 10012, US</span>
//                             </div>
//                             <div className="flex items-center mb-4">
//                                 <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 mr-3" />
//                                 <span>info@example.com</span>
//                             </div>
//                             <div className="flex items-center mb-4">
//                                 <FontAwesomeIcon icon={faPhone} className="text-blue-600 mr-3" />
//                                 <span>+ 01 234 567 88</span>
//                             </div>
//                             <div className="flex items-center mb-4">
//                                 <FontAwesomeIcon icon={faPhone} className="text-blue-600 mr-3" />
//                                 <span>+ 01 234 567 89</span>
//                             </div>
//                         </div>
//                         <button onClick={toggleContactPopup} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Close</button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Navbar;

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faHeart, faHome, faCar } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../assets/images/insure-all-logo.png';

const Navbar = () => {
    const [isContactPopupVisible, setContactPopupVisible] = useState(false);

    const toggleContactPopup = () => {
        setContactPopupVisible(!isContactPopupVisible);
    };

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
            setContactPopupVisible(false);
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full py-5 px-10 bg-white flex justify-between items-center z-50 shadow-md h-20">
                <a href="/" className="text-2xl font-bold text-black">
                    <img src={logoImage} alt="Logo" className="h-24 w-auto ml-5" />
                </a>
                <nav className="flex space-x-10 ">
                    <div className="relative group">
                        <a href="#" className="text-lg font-medium text-black transition-all duration-3 hover:underline">Insurance Advisors</a>
                        <div className="dropdown-menu absolute left-0 top-full mt-2 w-48 bg-white text-black border border-gray-300 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="/" className="block px-4 py-2 hover:bg-gray-100">Insurance Advisors in New Delhi</a>
                            <a href="/" className="block px-4 py-2 hover:bg-gray-100">Insurance Advisors in Gurgaon</a>
                            <a href="/" className="block px-4 py-2 hover:bg-gray-100">Insurance Advisors in Noida</a>
                            <a href="/" className="block px-4 py-2 hover:bg-gray-100">Insurance Advisors in Chennai</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="text-lg font-medium text-black hover:underline">Services</a>
                        <div className="dropdown-menu absolute left-0 top-full mt-2 w-48 bg-white text-black border border-gray-300 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center px-4 py-2 hover:bg-gray-100">
                                <FontAwesomeIcon icon={faHeart} className="mr-2 text-red-600" />
                                <a href="/" className="text-black">Health Insurance</a>
                            </div>
                            <div className="flex items-center px-4 py-2 hover:bg-gray-100">
                                <FontAwesomeIcon icon={faHeart} className="mr-2 text-red-600" />
                                <a href="/" className="text-black">Life Insurance</a>
                            </div>
                            <div className="flex items-center px-4 py-2 hover:bg-gray-100">
                                <FontAwesomeIcon icon={faHome} className="mr-2 text-blue-600" />
                                <a href="/" className="text-black">Home Insurance</a>
                            </div>
                            <div className="flex items-center px-4 py-2 hover:bg-gray-100">
                                <FontAwesomeIcon icon={faCar} className="mr-2 text-blue-600" />
                                <a href="/" className="text-black">Vehicle Insurance</a>
                            </div>
                        </div>
                    </div>
                    <a href="#" onClick={toggleContactPopup} className="text-lg font-medium text-black hover:underline">Contact</a>
                    <a href="/login" className="text-lg font-medium text-black hover:underline">Login</a>
                    <a href="/register" className="text-lg font-medium text-black hover:underline">Register</a>
                </nav>
            </header>

            {isContactPopupVisible && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={handleOutsideClick}>
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
                        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
                        <div className="flex flex-col items-start mb-6">
                            <div className="flex items-center mb-4">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 mr-3" />
                                <span>New York, NY 10012, US</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 mr-3" />
                                <span>info@example.com</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FontAwesomeIcon icon={faPhone} className="text-blue-600 mr-3" />
                                <span>+ 01 234 567 88</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FontAwesomeIcon icon={faPhone} className="text-blue-600 mr-3" />
                                <span>+ 01 234 567 89</span>
                            </div>
                        </div>
                        <button onClick={toggleContactPopup} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;








