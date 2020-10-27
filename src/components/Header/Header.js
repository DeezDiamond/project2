import React from 'react';
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <header>
                <h1>Welcome to the Ghilbi Film Directory</h1>
            </header>
            <nav>
                <Link to="/">Home Page</Link>
            </nav>
            
        </div>
    );
};

export default Header;