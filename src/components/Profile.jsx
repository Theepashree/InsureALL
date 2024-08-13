import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';
import avatar from '../assets/images/avatar.png';
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Contexts/AuthProvider";

const Profile = ({ user }) => {
    
    const navigate = useNavigate();
    // const a = useContext(AuthContext);

    const handleLogout = () => {
        
        navigate('/');
    };

    return (
        <div>
            <div className="drawer drawer-end z-50">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer-4"
                        className="drawer-button btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img alt="User Avatar" src={avatar} />
                        </div>
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-4"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <a href="/update-profile">Profile</a>
                        </li>
                        <li>
                            <a href="/order">Order</a>
                        </li>
                        <li>
                            <a href="/settings">Setting</a>
                        </li>
                        <li>
                            <a onClick={handleLogout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

Profile.propTypes = {
    user: PropTypes.object.isRequired, // Adjust the prop type as per your requirement
};

export default Profile;

