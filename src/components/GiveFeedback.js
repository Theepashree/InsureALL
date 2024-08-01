// import React, { useState } from 'react';
// import axios from 'axios';
 
// const GiveFeedback = () => {
//   const [customerName, setCustomerName] = useState('');
//   const [feedback, setFeedback] = useState('');
 
//   const handleSubmit = async () => {
//     if (feedback.length > 1000) {
//       alert('Feedback must be less than 1000 characters.');
//       return;
//     }
 
//     try {
//       const response = await axios.post('/api/feedback', {
//         customerName,
//         comments: feedback
//       });
//       alert('Feedback submitted successfully!');
//       setCustomerName(''); // Reset customer name field after successful submission
//       setFeedback(''); // Reset feedback field after successful submission
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//       alert('Failed to submit feedback.');
//     }
//   };
 
//   const handleReset = () => {
//     setCustomerName('');
//     setFeedback('');
//   };
 
//   return (
//     <div>
//       <h3>Please submit your feedback (Maximum length - 1000 characters only)</h3>
//       <label htmlFor="customerName">Your Name:</label>
//       <input
//         type="text"
//         value={customerName}
//         onChange={(e) => setCustomerName(e.target.value)}
//         placeholder="Enter your name"
//       />
//       <textarea
//         value={feedback}
//         onChange={(e) => setFeedback(e.target.value)}
//         placeholder="Type your feedback here..."
//         maxLength="1000"
//       />
//       <button onClick={handleSubmit}>Submit Feedback</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };
 
// export default GiveFeedback;

// import React, { useState } from 'react';
// import axios from 'axios';
 
// const GiveFeedback = () => {
//   const [customerName, setCustomerName] = useState('');
//   const [feedback, setFeedback] = useState('');
 
//   const handleSubmit = async () => {
//     if (feedback.length > 1000) {
//       alert('Feedback must be less than 1000 characters.');
//       return;
//     }
 
//     try {
//       const response = await axios.post('/api/feedback', {
//         customerName,
//         comments: feedback
//       });
//       alert('Feedback submitted successfully!');
//       setCustomerName(''); // Reset customer name field after successful submission
//       setFeedback(''); // Reset feedback field after successful submission
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//       alert('Failed to submit feedback.');
//     }
//   };
 
//   const handleReset = () => {
//     setCustomerName('');
//     setFeedback('');
//   };
 
//   return (
//     <div>
//       <h3>Please submit your feedback (Maximum length - 1000 characters only)</h3>
//       <label htmlFor="customerName">Your Name:</label>
//       <input
//         type="text"
//         value={customerName}
//         onChange={(e) => setCustomerName(e.target.value)}
//         placeholder="Enter your name"
//       />
//       <textarea
//         value={feedback}
//         onChange={(e) => setFeedback(e.target.value)}
//         placeholder="Type your feedback here..."
//         maxLength="1000"
//       />
//       <button onClick={handleSubmit}>Submit Feedback</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };
 
// export default GiveFeedback;

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Navbar.css';
import Footer from './Footer';
import logoImage from '../assets/images/insure-all-logo.png'
import { Link } from 'react-router-dom';

const GiveFeedback = () => {
  const [customerName, setCustomerName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async () => {
    if (feedback.length > 1000) {
      alert('Feedback must be less than 1000 characters.');
      return;
    }

    try {
      await axios.post('/api/feedback', {
        customerName,
        comments: feedback,
      });
      alert('Feedback submitted successfully!');
      setCustomerName(''); // Reset customer name field after successful submission
      setFeedback(''); // Reset feedback field after successful submission
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback.');
    }
  };

  const handleReset = () => {
    setCustomerName('');
    setFeedback('');
  };

  return (
    <div className="give-feedback flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md8">

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
                </nav>
            </header>


        <h2 className="text-xl font-bold text-blue-700 mb-2 text-center">
          Please submit your feedback
        </h2>
        <h5 className="text-sm font-semibold text-blue-700 mb-6 text-center">
        (Maximum length - 1000 characters only)
        </h5>
        <div className="mb-4">
          <label htmlFor="customerName" className="block text-gray-700 font-semibold mb-2">
            Your Name:
          </label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-gray-700 font-semibold mb-2">
            Your Feedback:
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Type your feedback here..."
            maxLength="1000"
            className="w-full p-2 border border-gray-300 rounded"
            rows="5"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit Feedback
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="p-2 text-center mt-20 font-bold dark:bg-neutral-100 ">
        <span className=" text-black black:text-textColor">© 2024 Copyright </span>
        <span className="text-[#00adef]">INSUREALL</span>
      </div>
    </div>
  );
};

export default GiveFeedback;
