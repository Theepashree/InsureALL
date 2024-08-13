// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/Register.css'
// import { FaUser, FaLock, FaPen } from "react-icons/fa";
// import { IoMail } from "react-icons/io5";

// axios.defaults.baseURL = 'http://localhost:8080';

// function Register() {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('customer');
//     const [msg, setMsg] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
 
//         // Validate password
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         if (!passwordRegex.test(password)) {
//             setError('Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special character, 1 number, and be at least 8 characters long.');
//             return;
//         }
 
//         try {
//             const response = await axios.post('/api/register', { firstName, lastName, email, userName, password, role });
//             if (response.status === 201) {
//                 navigate('/login');
//             }
//         } catch (error) {
//             if (error.response && error.response.status === 400) {
//                 setError('Username already exists, try something else.');
//             } else {
//                 setError('Error registering user');
//             }
//         }
//     };

//     return (
//         <div className="login-container">
//         <div className='wrapper'>
//             <h1>Register</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className='input-box'>
//                     {/* <label>First Name</label> */}
//                     <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//                     <FaPen className='icon' />

//                 </div>
//                 <div className='input-box'>
//                     {/* <label>Last Name</label> */}
//                     <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//                     <FaPen className='icon' />
//                 </div>
//                 <div className='input-box'>
//                     {/* <label>Email</label> */}
//                     <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
//                     <IoMail className='icon' />

//                 </div>
//                 <div className='input-box'>
//                     {/* <label>Username</label> */}
//                     <input type="text" placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} required />
//                     <FaUser className='icon' />
//                 </div>
//                 <div className='input-box'>
//                     {/* <label>Password</label> */}
//                     <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
//                     <FaLock className='icon' />
//                 </div>
//                 <div className='input-box'>
//                     <select id='role' value={role} onChange={(e) => setRole(e.target.value)} required>
//                     <option value="" disabled selected>Role</option>
//                         <option value='customer'>Customer</option>
//                         <option value='admin'>Admin</option>
//                     </select>
//                 </div>
//                 {msg && <p>{msg}</p>}
//                 <button type="submit">Register</button>

//                 <div className='register-link'>
//                     <p>Already have an account? <Link to='/login'>Login</Link></p>
//                 </div>
//             </form>
//         </div>
//         </div>
//     );
// }

// export default Register;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/Register.css';
// import { FaUser, FaLock, FaPen } from "react-icons/fa";
// import { IoMail } from "react-icons/io5";
// import logoImage from '../assets/images/insure-all-logo.png'
 
// axios.defaults.baseURL = 'http://localhost:8080';
 
// function Register() {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('customer');
//     const [employeeId, setEmployeeId] = useState('');
//     const [msg, setMsg] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
 
//     const dummyEmployeeIds = ['E123', 'E456', 'E789', 'E101', 'E112'];
 
//     const handleSubmit = async (e) => {
//         e.preventDefault();
 
//         // Validate password
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         if (!passwordRegex.test(password)) {
//             setError('Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special character, 1 number, and be at least 8 characters long.');
//             return;
//         }
 
//         // Validate employee ID if role is admin
//         if (role === 'admin' && !dummyEmployeeIds.includes(employeeId)) {
//             setError('No such employee ID exists.');
//             return;
//         }
 
//         try {
//             const response = await axios.post('/api/register', { firstName, lastName, email, userName, password, role, employeeId });
//             if (response.status === 201) {
//                 navigate('/login');
//             }
//         } catch (error) {
//             if (error.response && error.response.status === 400) {
//                 setError('Username already exists, try something else.');
//             } else {
//                 setError('Error registering user');
//             }
//         }
//     };
 
//     return (
//         <div className="login-container">
//             <img src={logoImage} alt="Logo" className="logo-img" style={{width:'200px', height:'auto'}}/>
//             <div className='wrapper'>
//                 <h1>Register</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className='input-box'>
//                         <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//                         <FaPen className='icon' />
//                     </div>
//                     <div className='input-box'>
//                         <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//                         <FaPen className='icon' />
//                     </div>
//                     <div className='input-box'>
//                         <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
//                         <IoMail className='icon' />
//                     </div>
//                     <div className='input-box'>
//                         <input type="text" placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} required />
//                         <FaUser className='icon' />
//                     </div>
//                     <div className='input-box'>
//                         <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
//                         <FaLock className='icon' />
//                     </div>
//                     <div className='input-box'>
//                         <select id='role' value={role} onChange={(e) => setRole(e.target.value)} required>
//                             <option value="" disabled selected>Role</option>
//                             <option value='customer'>Customer</option>
//                             <option value='admin'>Admin</option>
//                         </select>
//                     </div>
//                     {role === 'admin' && (
//                         <div className='input-box'>
//                             <input type="text" placeholder='Employee ID Number' value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required />
//                         </div>
//                     )}
//                     {error && <p className='error-msg'>{error}</p>}
//                     {msg && <p>{msg}</p>}
//                     <button type="submit">Register</button>
//                     <div className='register-link'>
//                         <p>Already have an account? <Link to='/login'>Login</Link></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }
 
// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import { FaUser, FaLock, FaPen } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import logoImage from '../assets/images/insure-all-logo.png'

axios.defaults.baseURL = 'http://localhost:8080';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('customer');
    const [employeeId, setEmployeeId] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Admin details map with keys as "firstName lastName" and values as employee IDs
    const adminMap = {
        'John Doe': 'E123',
        'Jane Smith': 'E456',
        'Bob Johnson': 'E789',
        'Alice Brown': 'E101',
        'Charlie Davis': 'E112',
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special character, 1 number, and be at least 8 characters long.');
            return;
        }

        // Validate admin details if role is admin
        if (role === 'admin') {
            const adminName = `${firstName} ${lastName}`;
            if (!adminMap[adminName] || adminMap[adminName] !== employeeId) {
                setError('Admin name or Employee ID does not match our records.');
                return;
            }
        }

        try {
            const response = await axios.post('/api/register', { firstName, lastName, email, userName, password, role, employeeId });
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('Username already exists, try something else.');
            } else {
                setError('Error registering user');
            }
        }
    };

    return (
        <div className="login-container">
            <img src={logoImage} alt="Logo" className="logo-img" style={{width:'200px', height:'auto'}}/>
            <div className='wrapper'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-box'>
                        <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        <FaPen className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        <FaPen className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <IoMail className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <FaLock className='icon' />
                    </div>
                    <div className='input-box'>
                        <select id='role' value={role} onChange={(e) => setRole(e.target.value)} required>
                            <option value="" disabled>Role</option>
                            <option value='customer'>Customer</option>
                            <option value='admin'>Admin</option>
                        </select>
                    </div>
                    {role === 'admin' && (
                        <div className='input-box'>
                            <input 
                                type="text" 
                                placeholder='Employee ID Number' 
                                value={employeeId} 
                                onChange={(e) => setEmployeeId(e.target.value)} 
                                required 
                            />
                        </div>
                    )}
                    {error && <p className='error-msg'>{error}</p>}
                    {msg && <p>{msg}</p>}
                    <button type="submit">Register</button>
                    <div className='register-link'>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;

