import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<header>
				<h1>Welcome to the Ghilbi Film Directory</h1>
				<nav>
					<Link to='/'>Home Page</Link>
				</nav>
			</header>
		</div>
	);
};

export default Header;
