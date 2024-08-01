// import React from 'react';
// import { Link } from 'react-router-dom';

// const CustomerPage = () => (
//   <div>
//     <nav>
//       <ul>
//         <li><Link to="/customer/edit-profile">Edit Profile</Link></li>
//         <li><Link to="/customer/view-policy">View Policy</Link></li>
//         <li><Link to="/customer/premium-calculator">Premium Calculator</Link></li>
//         <li><Link to="/customer/policy-status">Policy Status</Link></li>
//         <li><Link to="/customer/give-feedback">Give Feedback</Link></li>
//       </ul>
//     </nav>
//   </div>
// );

// export default CustomerPage;

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { UserContext } from '../UserContext';
// import '../styles/Navbar.css'
// import Footer from "./Footer";
// import PolicyServices from "./PolicyServices/PolicyServices";


// const CustomerPage = () => {
//     const { user } = useContext(UserContext);

//     return (
//         <div>
//              <header className='header'>
//              <a href="/" className="logo">Logo</a>
//             {/* <h2>Welcome, {user.userName}</h2> */}
//             <nav className='navbar'>
//                     <Link to="/customer/edit-profile">Edit Profile</Link>
//                     <Link to="/customer/view-policy">View Policy</Link>
//                     <Link to="/customer/premium-calculator">Premium Calculator</Link>
//                     <Link to="/customer/policy-status">Policy Status</Link>
//                     <Link to="/customer/give-feedback">Give Feedback</Link>
//             </nav>
//             </header>

//             <div>
//         <Footer/>
//       </div>
//         </div>

        
//     );
// };

// export default CustomerPage;


// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { UserContext } from '../UserContext';
// import Footer from "./Footer";
// import '../styles/Navbar.css'

// const CustomerPage = () => {
//     const { user } = useContext(UserContext);

//     const carouselContents = [
//         { id: 1, title: 'Card 1', content: 'Content for card 1' },
//         { id: 2, title: 'Card 2', content: 'Content for card 2' },
//         { id: 3, title: 'Card 3', content: 'Content for card 3' },
//         // Add more cards as needed
//     ];

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//             <header className='header'>
//                 <a href="/" className='logo'>Logo</a>
//                 <nav className='navbar'>
//                     <Link to="/customer/edit-profile" style={linkStyle}>Edit Profile</Link>
//                     <Link to="/customer/view-policy" style={linkStyle}>View Policy</Link>
//                     <Link to="/customer/premium-calculator" style={linkStyle}>Premium Calculator</Link>
//                     <Link to="/customer/policy-status" style={linkStyle}>Policy Status</Link>
//                     <Link to="/customer/give-feedback" style={linkStyle}>Give Feedback</Link>
//                 </nav>
//             </header>

//             <div style={{ flex: '1', textAlign: 'center' }}>
//                 <div style={welcomeMessageStyle}>
//                     Welcome, {user.userName}
//                 </div>
//                 <div style={carouselStyle}>
//                     {carouselContents.map(card => (
//                         <div key={card.id} style={carouselCardStyle}>
//                             <h3>{card.title}</h3>
//                             <p>{card.content}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// };

// const headerStyle = {
//     background: '#f8f9fa',
//     padding: '10px 20px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center'
// };

// const logoStyle = {
//     textDecoration: 'none',
//     fontSize: '1.5rem',
//     fontWeight: 'bold'
// };

// const navbarStyle = {
//     display: 'flex',
//     gap: '15px'
// };

// const linkStyle = {
//     textDecoration: 'none',
//     color: 'black'
// };

// const welcomeMessageStyle = {
//     textAlign: 'center',
//     margin: '20px 0',
//     fontSize: '1.5rem',
//     fontWeight: 'bold'
// };

// const carouselStyle = {
//     display: 'flex',
//     overflowX: 'auto',
//     scrollSnapType: 'x mandatory',
//     gap: '10px',
//     justifyContent: 'center',
//     padding: '10px'
// };

// const carouselCardStyle = {
//     flex: '0 0 auto',
//     width: '300px',
//     margin: '0 10px',
//     background: 'white',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     scrollSnapAlign: 'start'
// };

// export default CustomerPage;

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { UserContext } from '../UserContext';
// import '../styles/Navbar.css';
// import Footer from './Footer';
// import Profile from './Profile';
// import logoImage from '../assets/images/insure-all-logo.jpg'

// const CustomerPage = () => {
//     const { user } = useContext(UserContext);

//     const carouselContents = [
//         { id: 1, title: 'Card 1', content: 'Content for card 1', image: 'path-to-your-image1.jpg' },
//         { id: 2, title: 'Card 2', content: 'Content for card 2', image: 'path-to-your-image2.jpg' },
//         { id: 3, title: 'Card 3', content: 'Content for card 3', image: 'path-to-your-image3.jpg' },
//         // Add more cards as needed
//     ];

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
//                 {/* <Profile/> */}
//             </header>

//             <main style={{ flex: '1', textAlign: 'center', padding: '20px' }}>
//                 <div style={welcomeMessageStyle}>
//                     Welcome, {user.userName}
//                 </div>
//                 <div style={carouselStyle}>
//                     {carouselContents.map(card => (
//                         <div key={card.id} style={carouselCardStyle}>
//                             <img src={card.image} alt={card.title} style={cardImageStyle} />
//                             <h3>{card.title}</h3>
//                             <p>{card.content}</p>
//                         </div>
//                     ))}
//                 </div>
//             </main>

//             <Footer />
//         </div>
//     );
// };

// const welcomeMessageStyle = {
//     margin: '20px 0',
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     marginTop: '80px'
// };

// const carouselStyle = {
//     display: 'flex',
//     overflowX: 'auto',
//     scrollSnapType: 'x mandatory',
//     gap: '10px',
//     justifyContent: 'center',
//     padding: '10px'
// };

// const carouselCardStyle = {
//     flex: '0 0 auto',
//     width: '300px',
//     margin: '0 10px',
//     background: 'white',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     scrollSnapAlign: 'start',
//     textAlign: 'center'
// };

// const cardImageStyle = {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//     borderRadius: '10px 10px 0 0'
// };

// export default CustomerPage;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import '../styles/Navbar.css';
import Footer from './Footer';
import Profile from './Profile';
import logoImage from '../assets/images/insure-all-logo.png';
import '../components/PolicyServices/PolicyServices'
import PolicyServices from '../components/PolicyServices/PolicyServices';

const CustomerPage = () => {
    const { user } = useContext(UserContext);

    const carouselContents = [
        { id: 1, title: 'Card 1', content: 'Content for card 1', image: 'path-to-your-image1.jpg' },
        { id: 2, title: 'Card 2', content: 'Content for card 2', image: 'path-to-your-image2.jpg' },
        { id: 3, title: 'Card 3', content: 'Content for card 3', image: 'path-to-your-image3.jpg' },
        // Add more cards as needed
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
                    {/* <Profile user={user} /> */}
                </nav>
            </header>
            <main style={{ flex: '1', textAlign: 'center', padding: '20px' }}>
                <div style={welcomeMessageStyle}>
                    WELCOME, {user.userName.toUpperCase()}
                </div>
                {/* <div style={carouselStyle}>
                    {carouselContents.map(card => (
                        <div key={card.id} style={carouselCardStyle}>
                            <img src={card.image} alt={card.title} style={cardImageStyle} />
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                        </div>
                    ))}
                </div> */}
                <section>
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
      </section>
            </main>
            <Footer />
        </div>
    );
};

const welcomeMessageStyle = {
    margin: '20px 0',
    fontSize: '50px',
    fontWeight: 'bold',
    marginTop: '80px'
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

export default CustomerPage;


