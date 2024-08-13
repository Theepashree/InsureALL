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
            <main className='customer-landing' style={{ flex: '1', textAlign: 'center', padding: '20px' }}>
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


