import React from 'react';
import './Footer.css';

const Footer = ({ text }) => {
    return (
        <footer className="main-footer">
            <div className="barraContacto">
				<p>{text}</p>
			</div>
        </footer>
    )
}

export default Footer;
