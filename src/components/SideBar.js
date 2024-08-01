import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegListAlt, FaUsers, FaCheckCircle, FaRegCommentDots, FaBell, FaChartPie } from 'react-icons/fa';
import { IoLogOut } from "react-icons/io5";
import '../styles/AdminPage.css'; // Make sure to import the CSS file

const AdminSidePage = () => (
    <div>
    <div className="sidebar">
        <nav>
            <ul>
                <li>
                    <Link to="/admin/insurance-plans">
                        <FaRegListAlt className="icon" />
                        Insurance Plans
                    </Link>
                </li>
                <li>
                    <Link to="/admin/view-clients">
                        <FaUsers className="icon" />
                        View Clients
                    </Link>
                </li>
                <li>
                    <Link to="/admin/approved-insurance">
                        <FaCheckCircle className="icon" />
                        
                        Approved Insurance
                    </Link>
                </li>
                <li>
                    <Link to="/admin/view-feedback">
                        <FaRegCommentDots className="icon" />
                        View Feedback
                    </Link>
                </li>
                <li>
                    <Link to="/admin/pending-approvals">
                        <FaBell className="icon" />
                        Pending Approvals
                    </Link>
                </li>
                <li>
            <Link to="/admin/statistics">
              <FaChartPie className="icon" />
              See Statistics
            </Link>
          </li>
                <li>
            <Link to="/">
              <IoLogOut className="icon" />
              Logout
            </Link>
          </li>
            </ul>
        </nav>
        </div>
    </div>
);

export default AdminSidePage;