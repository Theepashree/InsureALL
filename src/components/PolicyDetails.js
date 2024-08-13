import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Navbar.css';
import Footer from './Footer';
import logoImage from '../assets/images/insure-all-logo.png';
import CarServices from "./PolicyServices/CarServices";
import LifeServices from "./PolicyServices/LifeServices";
import HomeServices from "./PolicyServices/HomeServices";
import HealthServices from "./PolicyServices/HealthServices";

const PolicyDetails = () => {
    const { planType } = useParams();
    const [policies, setPolicies] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { userName } = location.state || {};

    useEffect(() => {
        axios.get(`http://localhost:8080/api/policies/planType/${planType}`)
            .then(response => setPolicies(response.data))
            .catch(error => console.error(error));
    }, [planType]);

    const handleApply = (policy) => {
        navigate(`/customer/apply/${policy.policyId}`, { state: { policyName: policy.policyName, planType, userName } });
    };

    return (
        <div className="policy-details flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <header className='header'>
                <a href="/" className="logo">
                    <img src={logoImage} alt="Logo" className="logo-img" />
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
           
            <h1 className="text-3xl font-bold mt-20 text-blue-700 mb-6">{planType.toUpperCase()} POLICIES</h1>
            <div className="overflow-x-auto w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-700 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Policy Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Period</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Brochure</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {policies.map(policy => (
                            <tr key={policy.policyId} className="hover:bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap">{policy.policyName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{policy.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{policy.period}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        onClick={() => handleApply(policy)}
                                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                                    >
                                        Apply
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <a
                                        href={`/${policy.policyId}.pdf`}
                                        download={`${policy.policyName}_brochure.pdf`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        Download Brochure
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {planType === 'vehicle' && (
                <section>
                    <div className="container">
                        <div className="lg:w-[470px] mx-auto ">
                            <h2 className="heading text-center">
                                Offering top-tier Vehicle Insurance Policies.
                            </h2>
                            <p className="text__para text-center">
                                Find insurance plans that fit your specific needs. We offer customized options to ensure you get the best coverage.
                            </p>
                        </div>
                        <CarServices />
                    </div>
                </section>
            )}

            {planType === 'life' && (
                <section>
                    <div className="container">
                        <div className="lg:w-[470px] mx-auto ">
                            <h2 className="heading text-center">
                                Offering top-tier Life Insurance Policies.
                            </h2>
                            <p className="text__para text-center">
                                Find insurance plans that fit your specific needs. We offer customized options to ensure you get the best coverage.
                            </p>
                        </div>
                        <LifeServices />
                    </div>
                </section>
            )}

            {planType === 'home' && (
                <section>
                    <div className="container">
                        <div className="lg:w-[470px] mx-auto ">
                            <h2 className="heading text-center">
                                Offering top-tier Home Insurance Policies.
                            </h2>
                            <p className="text__para text-center">
                                Find insurance plans that fit your specific needs. We offer customized options to ensure you get the best coverage.
                            </p>
                        </div>
                        <HomeServices />
                    </div>
                </section>
            )}

            {planType === 'health' && (
                <section>
                    <div className="container">
                        <div className="lg:w-[470px] mx-auto ">
                            <h2 className="heading text-center">
                                Offering top-tier Health Insurance Policies.
                            </h2>
                            <p className="text__para text-center">
                                Find insurance plans that fit your specific needs. We offer customized options to ensure you get the best coverage.
                            </p>
                        </div>
                        <HealthServices />
                    </div>
                </section>
            )}
        </div>
    );
};

export default PolicyDetails;


