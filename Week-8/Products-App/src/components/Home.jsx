import React from 'react';
import { useNavigate } from 'react-router';
import logo from '../assets/logo.jpeg';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img src={logo} alt="Products App Logo" className="logo" />
      
      <h1>Welcome to Products App</h1>
      <p>Your one-stop shop for everything you need.</p>
      
      <div className="button-group">
        <button onClick={() => navigate('/productList')} className="primary-btn">
          View Products
        </button>
        <button onClick={() => navigate('/contactus')} className="secondary-btn">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Home;