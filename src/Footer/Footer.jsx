import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>Crytotec</h2>
          <p>Your favorite meals delivered fast at your door. Taste the difference with every bite.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
           <Link to='/'>
                       <li>Home</li>
                       </Link>
                       <Link to='/About'>
                       <li>About</li>
                       </Link>
                       <Link to='/Contact'>
                       <li>Contact</li>
                       </Link>
                       <Link to='Cart'>
                       <li>Cart</li>
                       </Link>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@Crytotec.com</p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Address: 123 Flavor St, Tasty City, YUM 45678</p>
        </div>

        <div className="footer-section newsletter">
          <h3>Subscribe</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Crytotec. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
