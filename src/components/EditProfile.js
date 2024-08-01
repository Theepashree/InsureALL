// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../UserContext';

// const EditProfile = () => {
//     const { user, setUser } = useContext(UserContext);
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         userName: '',
//         password: '',
//     });

//     const navigate = useNavigate();

//     useEffect(() => {
//         if (user) {
//             setFormData({
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 email: user.email,
//                 userName: user.userName,
//                 password: '',
//             });
//         }
//     }, [user]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(user.userId);
//         console.log(user.userName);
//         console.log(user.firstName);
//         axios.put(`http://localhost:8080/api/users/${user.userId}`, formData)
//             .then(response => {
//                 setUser(response.data);
//                 alert('Profile updated successfully');
//                 navigate('/customer');
//             })
//             .catch(error => console.error('There was an error updating the profile!', error));
//     };

//     return (
//         <div>
//             <h2>Edit Profile</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     First Name:
//                     <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Last Name:
//                     <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Email:
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     User Name:
//                     <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Password:
//                     <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//                 </label>
//                 <button type="submit">Update</button>
//             </form>
//         </div>
//     );
// };

// export default EditProfile;

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../UserContext';

// const EditProfile = () => {
//     const { user, setUser } = useContext(UserContext);
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         userName: '',
//         password: '',
//     });

//     const navigate = useNavigate();

//     useEffect(() => {
//         if (user) {
//             axios.get(`/api/users/${user.userName}`)
//                 .then(response => {
//                     setFormData({
//                         firstName: response.data.firstName,
//                         lastName: response.data.lastName,
//                         email: response.data.email,
//                         userName: response.data.userName,
//                         password: '',
//                     });
//                 })
//                 .catch(error => console.error('Error fetching user details:', error));
//         }
//     }, [user]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.put(`/api/users/${user.userName}`, formData)
//             .then(response => {
//                 setUser(response.data);
//                 alert('Profile updated successfully');
//                 navigate('/customer');
//             })
//             .catch(error => console.error('There was an error updating the profile!', error));
//     };

//     return (
//         <div>
//             <h2>Edit Profile</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     First Name:
//                     <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Last Name:
//                     <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Email:
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     User Name:
//                     <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Password:
//                     <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//                 </label>
//                 <button type="submit">Update</button>
//             </form>
//         </div>
//     );
// };

// export default EditProfile;


// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../UserContext';

// const EditProfile = () => {
//     const { user, setUser } = useContext(UserContext);
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         userName: '',
//         password: '',
//     });

//     const navigate = useNavigate();

//     useEffect(() => {
//         if (user) {
//             axios.get(`/api/users/${user.userName}`)
//                 .then(response => {
//                     setFormData({
//                         firstName: response.data.firstName,
//                         lastName: response.data.lastName,
//                         email: response.data.email,
//                         userName: response.data.userName,
//                         password: '',
//                     });
//                 })
//                 .catch(error => console.error('Error fetching user details:', error));
//         }
//     }, [user]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.put(`/api/users/${user.userName}`, formData)
//             .then(response => {
//                 setUser(response.data);
//                 alert('Profile updated successfully');
//                 navigate('/customer');
//             })
//             .catch(error => console.error('There was an error updating the profile!', error));
//     };

//     return (
//         <div>
//             <h2>Edit Profile</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     First Name:
//                     <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Last Name:
//                     <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Email:
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     User Name:
//                     <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Password:
//                     <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//                 </label>
//                 <button type="submit">Update</button>
//             </form>
//         </div>
//     );
// };

// export default EditProfile;

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../UserContext';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';
// import Footer from './Footer';
// import logoImage from '../assets/images/insure-all-logo.jpg'

// const EditProfile = () => {
//     const { user, setUser } = useContext(UserContext);
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         userName: '',
//         password: '',
//     });

//     const navigate = useNavigate();

//     useEffect(() => {
//         if (user) {
//             axios.get(`/api/users/${user.userName}`)
//                 .then(response => {
//                     setFormData({
//                         firstName: response.data.firstName,
//                         lastName: response.data.lastName,
//                         email: response.data.email,
//                         userName: response.data.userName,
//                         password: '',
//                     });
//                 })
//                 .catch(error => console.error('Error fetching user details:', error));
//         }
//     }, [user]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.put(`/api/users/${user.userName}`, formData)
//             .then(response => {
//                 setUser(response.data);
//                 alert('Profile updated successfully');
//                 navigate('/customer');
//             })
//             .catch(error => console.error('There was an error updating the profile!', error));
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-20 mb-20">

//             <header className='header'>
//                 <a href="/" className="logo">
//                 <img src={logoImage} alt="Logo" className="logo-img"/>
//                 </a>
//                 <nav className='navbar'>
//                     <Link to="/customer/edit-profile">Edit Profile</Link>
//                     <Link to="/customer/view-policy">View Policy</Link>
//                     <Link to="/customer/premium-calculator">Premium Calculator</Link>
//                     <Link to="/customer/policy-status">Policy Status</Link>
//                     <Link to="/customer/give-feedback">Give Feedback</Link>
//                 </nav>
//             </header>

//                 <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">EDIT PROFILE</h2>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label className="block text-gray-700 font-semibold mb-2">First Name:</label>
//                         <input
//                             type="text"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-gray-700 font-semibold mb-2">Last Name:</label>
//                         <input
//                             type="text"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-gray-700 font-semibold mb-2">Email:</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-gray-700 font-semibold mb-2">User Name:</label>
//                         <input
//                             type="text"
//                             name="userName"
//                             value={formData.userName}
//                             onChange={handleChange}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-gray-700 font-semibold mb-2">Password:</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//                     >
//                         Update
//                     </button>
//                 </form>
                
//             </div>
//         </div>
//     );
// };

// export default EditProfile;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Footer from './Footer';
import logoImage from '../assets/images/insure-all-logo.png';
 
const EditProfile = () => {
    const { user, setUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
    });
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();
 
    useEffect(() => {
        if (user) {
            axios.get(`/api/users/${user.userName}`)
                .then(response => {
                    setFormData({
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                        userName: response.data.userName,
                        password: '',
                    });
                })
                .catch(error => console.error('Error fetching user details:', error));
        }
    }, [user]);
 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/users/${user.userName}`, formData)
            .then(response => {
                setUser(response.data);
                alert('Profile updated successfully');
                navigate('/customer');
            })
            .catch(error => console.error('There was an error updating the profile!', error));
    };
 
    const enableEditMode = () => {
        setEditMode(true);
    };
 
    return (
        <div className="edit-profile flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <header className="header">
                <a href="/" className="logo">
                    <img src={logoImage} alt="Logo" className="logo-img" />
                </a>
                <nav className="navbar">
                    <Link to="/customer/edit-profile">Edit Profile</Link>
                    <Link to="/customer/view-policy">View Policy</Link>
                    <Link to="/customer/premium-calculator">Premium Calculator</Link>
                    <Link to="/customer/policy-status">Policy Status</Link>
                    <Link to="/customer/give-feedback">Give Feedback</Link>
                </nav>
            </header>
 
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-20 mb-20">
                <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">PROFILE</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            disabled={!editMode}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            disabled={!editMode}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={!editMode}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">User Name:</label>
                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            required
                            disabled={!editMode}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    {editMode && (
                        <>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                            >
                                Update
                            </button>
                        </>
                    )}
                </form>
                {!editMode && (
                    <div className="text-center mt-4">
                        <button
                            onClick={enableEditMode}
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
                        >
                            Edit
                        </button>
                        
                    </div>
                    
                )}
            </div>
            <div className="p-2 text-center font-bold dark:bg-neutral-100 ">
        <span className=" text-black black:text-textColor">© 2024 Copyright </span>
        <span className="text-[#00adef]">INSUREALL</span>
      </div>
        </div>
    );
};
 
export default EditProfile;
