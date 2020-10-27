import React from 'react';
import { Route } from "react-router-dom"
import Header from "../Header/Header"
import Movies from '../Movies/Movies';
import Movie from '../Movie/Movie';

function App() {
	

	return (
		<div className='App'>
			<Header />
			<Route 
			path="/"
			exact
			component={Movies}
		/>
			<Route path="/details/:id" compnent={Movie} />

		</div>
	);
}

export default App;
