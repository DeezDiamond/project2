import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom"
import Header from "../Header/Header"
import Movies from '../Movies/Movies';
import Movie from '../Movie/Movie';

function App() {
	const [movies, setMovies] = useState([])
	const ghilbi = 'https://ghibliapi.herokuapp.com/films';

	useEffect(() => {
		fetch(ghilbi)
		.then((res) => res.json()) 
		.then((res) => {
			setMovies(res);
			})
		.catch((err) => {
			return("There appears to be a problem...")
		}) 
		}, 
	[]);

	return (
		<div className='App'>
			<Header />
			<Route 
			path="/"
			exact
			render={() => {
				return (<Movies movie={movies} />
				);
			}}
		/>
		</div>
	);
}

export default App;
