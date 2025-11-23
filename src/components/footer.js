import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-email">Email: <a href="mailto:info@myapp.com">CrystalDetailing@gmail.com</a></div>
        <div className="footer-copy">© {year} CDC. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
