import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <>
            <nav>
                <li className="nav-item"><Link to="/home">Home</Link></li>
                <li className="nav-item"><Link to="/login">Login</Link></li>
            </nav>
        </>
    )
}

export default Nav;