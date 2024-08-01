// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css'

// const AdminPage = () => (
//     <div>
//         <header className='header'>
//         <a href="/" className="logo">Logo</a>
//         <nav className='navbar'>
//                 <Link to="/admin/insurance-plans">Insurance Plans</Link>
//                 <Link to="/admin/view-clients">View Clients</Link>
//                 <Link to="/admin/approved-insurance">Approved Insurance</Link>
//                 <Link to="/admin/view-feedback">View Feedback</Link>
//                 <Link to="/admin/pending-approvals">Pending Approvals</Link>
            
//         </nav>
//         </header>
//     </div>
// );

// export default AdminPage;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaRegListAlt, FaUsers, FaCheckCircle, FaRegCommentDots, FaBell } from 'react-icons/fa';

// import '../styles/AdminPage.css'; // Make sure to import the CSS file

// const AdminPage = () => (
//     <div>
//     <div className="sidebar">
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/admin/insurance-plans">
//                         <FaRegListAlt className="icon" />
//                         Insurance Plans
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/admin/view-clients">
//                         <FaUsers className="icon" />
//                         View Clients
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/admin/approved-insurance">
//                         <FaCheckCircle className="icon" />
                        
//                         Approved Insurance
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/admin/view-feedback">
//                         <FaRegCommentDots className="icon" />
//                         View Feedback
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/admin/pending-approvals">
//                         <FaBell className="icon" />
//                         Pending Approvals
//                     </Link>
//                 </li>
//             </ul>
//         </nav>
//         </div>
//     </div>
// );

// export default AdminPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegListAlt, FaUsers, FaCheckCircle, FaRegCommentDots, FaBell, FaChartPie } from 'react-icons/fa';
import logoImage from '../assets/images/insure-all-logo.png'
import '../styles/AdminPage.css';
import PolicyServices from '../components/PolicyServices/PolicyServices';
import Footer from './Footer'
import { IoLogOut } from "react-icons/io5";

const AdminPage = () => (
  <div className="flex min-h-screen">
    <div className="sidebar">
    
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/admin/insurance-plans" className="flex items-center text-white hover:text-gray-400">
              <FaRegListAlt className="mr-2" />
              Insurance Plans
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/view-clients" className="flex items-center text-white hover:text-gray-400">
              <FaUsers className="mr-2" />
              View Clients
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/approved-insurance" className="flex items-center text-white hover:text-gray-400">
              <FaCheckCircle className="mr-2" />
              Approved Insurance
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/view-feedback" className="flex items-center text-white hover:text-gray-400">
              <FaRegCommentDots className="mr-2" />
              View Feedback
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/pending-approvals" className="flex items-center text-white hover:text-gray-400">
              <FaBell className="mr-2" />
              Pending Approvals
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/statistics" className="flex items-center hover:text-gray-400">
               <FaChartPie className="mr-2" />
               See Statistics
             </Link>
           </li>
          <li className="mb-4">
            <Link to="/" className="flex items-center text-white hover:text-gray-400">
              <IoLogOut className="mr-2" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="main-content flex-1 p-8 bg-gray-50 ml-64">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Welcome Admin</h1>
      <p className="text-lg mb-4">
        Welcome to the Admin Dashboard! Here, you can manage all aspects of the insurance platform. Use the sidebar to navigate through various sections:
      </p>
      <ul className="list-disc list-inside mb-4 text-lg">
        <li><strong>Insurance Plans:</strong> Manage and update the available insurance plans.</li>
        <li><strong>View Clients:</strong> View the list of all clients and their details.</li>
        <li><strong>Approved Insurance:</strong> See the list of approved insurance policies.</li>
        <li><strong>View Feedback:</strong> Review feedback and comments from clients.</li>
        <li><strong>Pending Approvals:</strong> Approve or reject pending insurance applications.</li>
      </ul>
      <p className="text-lg mb-20">
        Use the tools provided to ensure smooth operations and maintain a high standard of service for all our clients. Your efforts help in making the platform a better place for everyone.
      </p>
      {/* <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto ">
            <h2 className="heading text-center">
              Offering top-tier Insurance Policies.
            </h2>
            <p className="text__para text-center">
            Find insurance plans that fit your specific needs. We offer customized options to ensure you get the best coverage.
            </p>
          </div>
           <PolicyServices/> 
        </div>
      </section> */}
     <div className='flex mt-30'>
     <Footer/>
     </div>
    </div>
  </div>
);

export default AdminPage;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaRegListAlt, FaUsers, FaCheckCircle, FaRegCommentDots, FaBell, FaChartPie } from 'react-icons/fa';
// import { IoLogOut } from "react-icons/io5";
// import '../styles/AdminPage.css'; // Make sure to import the CSS file
 
// const AdminSidePage = () => (
//   <div className="w-64 bg-blue-700 text-white min-h-screen p-4 fixed">
//     <div className="sidebar">
//       <nav>
//         <ul>
//           <li className="mb-4">
//             <Link to="/admin/insurance-plans" className="flex items-center hover:text-gray-400">
//               <FaRegListAlt className="mr-2" />
//               Insurance Plans
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/admin/view-clients" className="flex items-center hover:text-gray-400">
//               <FaUsers className="mr-2" />
//               View Clients
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/admin/approved-insurance" className="flex items-center hover:text-gray-400">
//               <FaCheckCircle className="mr-2" />
//               Approved Insurance
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/admin/view-feedback" className="flex items-center hover:text-gray-400">
//               <FaRegCommentDots className="mr-2" />
//               View Feedback
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/admin/pending-approvals" className="flex items-center hover:text-gray-400">
//               <FaBell className="mr-2" />
//               Pending Approvals
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/admin/statistics" className="flex items-center hover:text-gray-400">
//               <FaChartPie className="mr-2" />
//               See Statistics
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/" className="flex items-center hover:text-gray-400">
//               <IoLogOut className="mr-2" />
//               Logout
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   </div>
// );
 
// export default AdminSidePage;




