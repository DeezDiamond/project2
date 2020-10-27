import React from 'react';
import { Route, Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <header>
                <h1>I'm the header</h1>
            </header>
            <nav>
                {/* <Link to "/">Home</Link> */}
            </nav>
            
        </div>
    );
};

export default Header;