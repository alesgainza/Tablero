import React from 'react';
import './Navbar.css';
import logo from '../../files/logo-norma.png';
import logoAuto from '../../files/logo_automotive.png';

const Navbar = () => {
    return (
        <nav className="navbar p-0 bg-transparent">
            <div className="container-fluid">
                <img className="navbar-brand" id="logo" alt="logo" src={logo}></img>
                <div className="navbar-brand">
					<embed src="https://free.timeanddate.com/clock/i7qc8lx8/n327/tles4/fn14/fs48/tct/pct/ftb/th1/ts1" id="hour" frameborder="0" allowtransparency="true"/>
				</div>
				<img className="navbar-brand" id="logo-automotive" alt="logo-automotive" src={logoAuto}></img>
            </div>
        </nav>
    );
}

export default Navbar;