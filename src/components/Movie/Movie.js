import React, { useState, useEffect } from 'react';

const filmURL = 'https://ghibliapi.herokuapp.com/films/';

const Movie = (props) => {
	const [movie, setMovie] = useState('');
	useEffect(() => {
		const url = `${filmURL}${props.match.params.id}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setMovie(res);
			})
			.catch((err) => {
				console.log('There appears to be a problem with Movie.js..');
			});
	}, [props.match.params.id]);

	return (
		<div className='details'>
			<h2>Title: {movie.title}</h2>
			<p><strong>Released</strong>: {movie.release_date}</p>
			<p><strong>Directed by</strong>: {movie.director}</p>
			<p><strong>Producer</strong>: {movie.producer}</p>
			<p><strong>Summary</strong>: <br /> {movie.description}</p>
		</div>
	);
};

export default Movie;
