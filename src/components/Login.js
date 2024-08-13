import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import '../styles/Login.css'
import { FaUser,FaLock } from "react-icons/fa";
import logoImage from '../assets/images/insure-all-logo.png'

axios.defaults.baseURL = 'http://localhost:8080';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { userName, password });
            if (response.data.role === 'admin') {
                setUser({ userName, role: 'admin' });
                navigate('/admin');
            } else if (response.data.role === 'customer') {
                setUser({ userName, role: 'customer' });
                navigate('/customer');
            } else {
                setUser({ userName, role: 'user' });
                navigate('/dashboard'); // Update this to the actual user dashboard route
            }
        } catch (error) {
            setMsg('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <img src={logoImage} alt="Logo" className="logo-img" style={{width:'200px', height:'auto'}}/>
            <div className='wrapper'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-box'>
                    {/* <label>Username</label> */}
                    <input type="text" placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box' style={{color:"black"}}>
                    {/* <label>Password</label> */}
                    <input style={{color:"black"}} type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className='icon'/>
                </div>

                <div className='remember-forgot'>
                    <label><input type='checkbox'/>Remember me</label>
                    <a href='#'>Forgot password?</a>
                </div>
                {msg && <p>{msg}</p>}
                <button type="submit">Login</button>
                <div className='register-link'>
                    <p>Don't have an account? <Link to='/Register'>Register</Link></p>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Login;

// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { UserContext } from '../UserContext';
// import '../styles/Login.css';
// import { FaUser, FaLock } from "react-icons/fa";

// axios.defaults.baseURL = 'http://localhost:8080';

// function Login() {
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [msg, setMsg] = useState('');
//     const { setUser } = useContext(UserContext);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/api/login', { userName, password });
//             if (response.data.role === 'admin') {
//                 setUser({ userName, role: 'admin' });
//                 navigate('/admin');
//             } else if (response.data.role === 'customer') {
//                 setUser({ userName, role: 'customer' });
//                 navigate('/customer');
//             } else {
//                 setUser({ userName, role: 'user' });
//                 navigate('/dashboard'); // Update this to the actual user dashboard route
//             }
//         } catch (error) {
//             setMsg('Invalid username or password');
//         }
//     };

//     return (
//         <div className="login__section flex items-center justify-center min-h-screen">
//             <div className="wrapper bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h1 className="text-2xl font-bold text-center mb-10">Login</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="input-box mb-4">
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             value={userName}
//                             onChange={(e) => setUserName(e.target.value)}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded"
//                         />
//                         <FaUser className="icon" />
//                     </div>
//                     <div className="input-box mb-4">
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded"
//                         />
//                         <FaLock className="icon" />
//                     </div>
//                     <div className="remember-forgot flex justify-between items-center mb-4">
//                         <label className="flex items-center">
//                             <input type="checkbox" className="mr-2" />
//                             Remember me
//                         </label>
//                         <a href="#" className="text-blue-500">Forgot password?</a>
//                     </div>
//                     {msg && <p className="text-red-500 text-center mb-4">{msg}</p>}
//                     <button type="submit" className="btn w-full">Login</button>
//                     <div className="register-link text-center mt-4">
//                         <p>Don't have an account? <Link to="/Register" className="text-blue-500">Register</Link></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;

