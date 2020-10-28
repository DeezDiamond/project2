import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
	const [films, setFilms] = useState([]);
	const ghilbi = 'https://ghibliapi.herokuapp.com/films';

	useEffect(() => {
		fetch(ghilbi)
			.then((res) => res.json())
			.then((res) => {
				setFilms(res);
			})
			.catch((err) => {
				return 'There appears to be a problem with Movies.js...';
			});
	}, []);

	return (
		<div className="cardHolder">
			{films.map((movie) => {
				return (
					<Link to={`/films/${movie.id}`} key={movie.id}>
						<div className='card'>{movie.title}</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Movies;
