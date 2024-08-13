import React, { useState } from 'react';
import '../styles/Navbar.css';
import Footer from './Footer';
import logoImage from '../assets/images/insure-all-logo.png'
import { Link } from 'react-router-dom';
import cal1 from '../assets/images/cal1.svg';

const PremiumCalculator = () => {
  const [coverageAmount, setCoverageAmount] = useState('');
  const [term, setTerm] = useState('6');
  const [period, setPeriod] = useState('5');
  const [premium, setPremium] = useState('');
  const [error, setError] = useState('');


  const calculatePremium = () => {
    if (coverageAmount < 10000 || coverageAmount > 10000000) {
      setError('Coverage amount should be between 10,000 and 10,000,000');
      return;
    } else {
      setError('');
    }

    let calculatedPremium = 0;
    if (term === '6') {
      calculatedPremium = coverageAmount / (period * 2);
    } else if (term === '12') {
      calculatedPremium = coverageAmount / period;
    }
    setPremium(calculatedPremium);
  };

  return (
    <div className="premium-cal flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-8 mt-20 rounded-lg shadow-lg w-full max-w-md mb-5">



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

        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">PREMIUM CALCULATOR</h2>
        <div className="mb-4">
          <label htmlFor="coverageAmount" className="block text-gray-700 font-semibold mb-2">
            Coverage Amount:
          </label>
          <input
            type="number"
            id="coverageAmount"
            value={coverageAmount}
            onChange={(e) => setCoverageAmount(e.target.value)}
            placeholder="Enter coverage amount"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {error && <div className="text-red-600 mt-2">{error}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="term" className="block text-gray-700 font-semibold mb-2">
            Term:
          </label>
          <select
            id="term"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="6">6</option>
            <option value="12">12</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="period" className="block text-gray-700 font-semibold mb-2">
            Period:
          </label>
          <select
            id="period"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        <button
          onClick={calculatePremium}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Calculate Premium
        </button>
        {premium && !error && (
          <div className="mt-4 text-center text-blue-700 font-semibold">
            Premium Amount: ₹{premium.toFixed(2)}
          </div>
        )}
      </div>
      <div className="p-2 mt-20 text-center font-bold dark:bg-neutral-100 ">
        <span className=" text-black black:text-textColor">© 2024 Copyright </span>
        <span className="text-[#00adef]">INSUREALL</span>
      </div>

    </div>
    
    

  );
};


export default PremiumCalculator;
