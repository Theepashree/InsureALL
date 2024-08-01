// import React, { useContext } from "react";
// import PropTypes from "prop-types";
// import avatar from '../assets/images/avatar.png';
// //import { AuthContext } from "../Contexts/AuthProvider";
// const Profile = ({ user }) => {
//  // const a = useContext(AuthContext);
//   const handleLogout = () => {
//     // a.logOut()
//     //   .then(() => {
//     //     // Sign-out successful.
//     //     console.log("Logout successful");
//     //     console.log(a.user)
//     //   })
//     //   .catch((error) => {
//     //     // An error happened.
//     //   });
//   };
//   return (
//     <div>
//       <div className="drawer drawer-end z-50">
//         <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content">
//           {/* Page content here */}
//           <label
//             htmlFor="my-drawer-4"
//             className="drawer-button btn btn-ghost btn-circle avatar"
//           >
//             <div className="w-10 rounded-full">
//               {true ? (
//                 <img alt="Tailwind CSS Navbar component" src={avatar} />
//               ) : (
//                 <img
//                   alt="Tailwind CSS Navbar component"
//                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//                 />
//               )}
//             </div>
//           </label>
//         </div>
//         <div className="drawer-side">
//           <label
//             htmlFor="my-drawer-4"
//             aria-label="close sidebar"
//             className="drawer-overlay"
//           ></label>
//           <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
//             {/* Sidebar content here */}
//             <li>
//               <a href="/update-profile">Profile</a>
//             </li>
//             <li>
//               <a>Setting</a>
//             </li>
//             <li>
//               <a onClick={
//                handleLogout
                
//               }>Logout</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// Profile.propTypes = {
//   user: PropTypes.object.isRequired, // Adjust the prop type as per your requirement
// };

// export default Profile;

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
        // a.logOut()
        //   .then(() => {
        //     // Sign-out successful.
        //     console.log("Logout successful");
        //     console.log(a.user)
        //     history.push('/');
        //   })
        //   .catch((error) => {
        //     // An error happened.
        //   });
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

