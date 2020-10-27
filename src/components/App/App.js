import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom"
import './App.css';
import Header from "../Header/Header"
import Movies from '../Movies/Movies';
import MovieInfo from '../MovieInfo/MovieInfo';

function App() {
	const [movies, setMovies] = useState([])
	const ghilbi = 'https://ghibliapi.herokuapp.com/films';

	useEffect(() => {
		fetch(ghilbi)
		.then((res) => res.json()) 
		.then((res) => {
			setMovies(res);
			}) 
		}, 
	[]);

	return (
		<div className='App'>
			<Header />
			<h1>There's nothing here</h1>
		</div>
	);
}

export default App;
