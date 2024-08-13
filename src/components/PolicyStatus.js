import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';
import './PaymentSummary';
import '../styles/Navbar.css';
import Footer from './Footer';
import logoImage from '../assets/images/insure-all-logo.png'
import { Link } from 'react-router-dom';

const PolicyStatus = () => {
    const { user } = useContext(UserContext);
    const [policies, setPolicies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/appliedPolicies/username?userName=${user.userName}`)
            .then(response => setPolicies(response.data))
            .catch(error => console.error('Error fetching policies:', error));
    }, [user.userName]);

    const handleProceedToPay = (policy) => {
        navigate('/payment-summary', { state: { policy } });
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'approved':
                return 'text-green-600 font-semibold ';
            case 'inprogress':
                return 'text-yellow-500 font-semibold';
            case 'rejected':
                return 'text-red-600 font-semibold';
            default:
                return '';
        }
    };

    return (
        <div className="policy-status flex flex-col items-center justify-center min-h-screen bg-white p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl mt-20 mb-20">

            <header className='header'>
                <a href="/" className="logo">
                <img src={logoImage} alt="Logo" className="logo-img"/>
                </a>
                <nav className='navbar'>
                    <Link to="/customer/edit-profile">Edit Profile</Link>
                    <Link to="/customer/view-policy">View Policy</Link>
                    <Link to="/customer/premium-calculator">Premium Calculator</Link>
                    <Link to="/customer/policy-status">Policy Status</Link>
                    <Link to="/customer/give-feedback">Give Feedback</Link>
                    <Link to="/">Logout</Link>
                </nav>
            </header>

                <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                    Policy Status for {user.userName}
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-blue-700 text-white">
                                <th className="p-3 text-left">Policy Name</th>
                                <th className="p-3 text-left">Plan Type</th>
                                <th className="p-3 text-left">Customer Name</th>
                                <th className="p-3 text-left">Term</th>
                                <th className="p-3 text-left">Period</th>
                                <th className="p-3 text-left">Next Payment Date</th>
                                <th className="p-3 text-left">Term Amount</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-left">Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {policies.map(policy => (
                                <tr key={policy.appliedPolicyId} className="border-b border-gray-200 even:bg-gray-100">
                                    <td className="p-3">{policy.policyName}</td>
                                    <td className="p-3">{policy.planType}</td>
                                    <td className="p-3">{policy.customerName}</td>
                                    <td className="p-3">{policy.term}</td>
                                    <td className="p-3">{policy.period}</td>
                                    <td className="p-3">{policy.nextPaymentDate}</td>
                                    <td className="p-3">{policy.termAmount}</td>
                                    <td className={`p-3 ${getStatusClass(policy.status)}`}>{policy.status}</td>
                                    <td className="p-3 text-center">
                                        <button
                                            onClick={() => handleProceedToPay(policy)}
                                            disabled={policy.status !== 'approved'}
                                            className={`py-2 px-4 rounded ${
                                                policy.status === 'approved'
                                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                    : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                            }`}
                                        >
                                            Proceed to Pay
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="p-2 text-center font-bold dark:bg-neutral-100 ">
        <span className=" text-black black:text-textColor">© 2024 Copyright </span>
        <span className="text-[#00adef]">INSUREALL</span>
      </div>
        </div>
    );
};

export default PolicyStatus;



