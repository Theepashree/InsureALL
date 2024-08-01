// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const ViewPolicies = () => {
//   const [planTypes, setPlanTypes] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/insurance')
//       .then(response => setPlanTypes(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h1>Insurance Plans</h1>
//       <ul>
//         {planTypes.map(plan => (
//           <li key={plan.planId}>
//             <Link to={`/customer/policies/${plan.planType}`}>{plan.planType}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ViewPolicies;

// import React, { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { UserContext } from '../UserContext';

// const ViewPolicies = () => {
//     const [planTypes, setPlanTypes] = useState([]);
//     const { user } = useContext(UserContext);

//     useEffect(() => {
//         axios.get('http://localhost:8080/api/insurance')
//             .then(response => setPlanTypes(response.data))
//             .catch(error => console.error(error));
//     }, []);

//     return (
//         <div>
//             <h1>Insurance Plans</h1>
//             <ul>
//                 {planTypes.map(plan => (
//                     <li key={plan.planId}>
//                         <Link to={`/customer/policies/${plan.planType}`} state={{ userName: user.userName }}>
//                             {plan.planType}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ViewPolicies;

// import React, { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { UserContext } from '../UserContext';

// const ViewPolicies = () => {
//     const [planTypes, setPlanTypes] = useState([]);
//     const { user } = useContext(UserContext);

//     useEffect(() => {
//         axios.get('http://localhost:8080/api/insurance')
//             .then(response => setPlanTypes(response.data))
//             .catch(error => console.error(error));
//     }, []);

//     return (
//         <div>
//             <h1>Insurance Plans</h1>
//             <ul>
//                 {planTypes.map(plan => (
//                     <li key={plan.planId}>
//                         <Link to={`/customer/policies/${plan.planType}`} state={{ userName: user.userName }}>
//                             {plan.planType}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ViewPolicies;

// import React, { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { UserContext } from '../UserContext';

// const ViewPolicies = () => {
//     const [planTypes, setPlanTypes] = useState([]);
//     const { user } = useContext(UserContext);

//     useEffect(() => {
//         axios.get('http://localhost:8080/api/insurance')
//             .then(response => setPlanTypes(response.data))
//             .catch(error => console.error(error));
//     }, []);

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//             <h1 className="text-3xl font-bold text-blue-700 mb-6">Insurance Plans</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {planTypes.map(plan => (
//                     <div key={plan.planId} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
//                         <img 
//                             src={`path/to/image/${plan.planType}.jpg`} 
//                             alt={`${plan.planType}`} 
//                             className="w-full h-48 object-cover rounded-t-lg mb-4" 
//                         />
//                         <Link 
//                             to={`/customer/policies/${plan.planType}`} 
//                             state={{ userName: user.userName }}
//                             className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//                         >
//                             {plan.planType}
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ViewPolicies;
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';
import '../styles/ViewPolicies.css'; // Import the CSS file for custom styles
import '../styles/Navbar.css';
import Footer from './Footer';
import logoImage from '../assets/images/insure-all-logo.png'
import cal1 from '../assets/images/cal1.svg';
import About from "../components/About/About";
import cal2 from '../assets/images/cal2.svg';
import cal3 from '../assets/images/cal3.svg';


// Import images
import healthIcon from '../assets/images/icon03.png';
import homeIcon from '../assets/images/icon04.png';
import lifeIcon from '../assets/images/lifeicon.jpg';
import vehicleIcon from '../assets/images/icon01.png';

const ViewPolicies = () => {
    const [planTypes, setPlanTypes] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        axios.get('http://localhost:8080/api/insurance')
            .then(response => setPlanTypes(response.data))
            .catch(error => console.error(error));
    }, []);

    const carouselContents = [
        { id: 1, title: 'Cashless Repairs', content: '6000+ Cashless Network Garages for you to choose from across India', image: cal1 },
        { id: 2, title: 'Super-Fast claims', content: "We've settled 96% of all claims for private cars!", image: cal2 },
        { id: 3, title: '24*7 Support', content: '24*7 call facility even on National Holidays', image: cal3 },
        // Add more cards as needed
    ];

    // Function to get the image path based on plan type
    const getImagePath = (planType) => {
        switch (planType.toLowerCase()) {
            case 'health':
                return healthIcon;
            case 'home':
                return homeIcon;
            case 'life':
                return lifeIcon;
            case 'vehicle':
                return vehicleIcon;
            default:
                return ''; // Fallback to a default image if needed
        }
    };

    return (
        <div className="view-policy flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">

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

            <h1 className="text-3xl mt-20 font-bold text-blue-700 mb-6">INSURANCE PLANS</h1>
            <div className="container-ViewPolicies mb-20">
                {planTypes.map((plan,index) => (
                    <div key={plan.planId} className="card">
                        <img
                            src={getImagePath(plan.planType)}
                            alt={`${plan.planType}`}
                            className={index===2 ? 'reduced-width': ''}
                        />
                        <Link
                            to={`/customer/policies/${plan.planType}`}
                            state={{ userName: user.userName }}
                        >
                            {plan.planType.toUpperCase()}
                        </Link>
                    </div>
                ))}
            </div>
            
            <About />
            
            

            <div style={carouselStyle}>
                    {carouselContents.map(card => (
                        <div key={card.id} style={carouselCardStyle}>
                            <img src={card.image} alt={card.title} style={cardImageStyle} />
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                        </div>
                    ))}
                </div>

                <div className="p-2 mt-20 text-center font-bold dark:bg-neutral-100 ">
        <span className=" text-black black:text-textColor">© 2024 Copyright </span>
        <span className="text-[#00adef]">INSUREALL</span>
      </div>

        </div>
    );
};

const carouselStyle = {
    display: 'flex',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    gap: '10px',
    justifyContent: 'center',
    padding: '10px'
  };
  
  const carouselCardStyle = {
    flex: '0 0 auto',
    width: '300px',
    margin: '0 10px',
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    scrollSnapAlign: 'start',
    textAlign: 'center'
  
  };
  
  const cardImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0'
  };

export default ViewPolicies;



