import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Movie from "../Movie/Movie"


const Movies = ({ movie }) => {

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
        <section>
           {films.map((movie) => {
               return (
                   <Link to={`/details/${movie.id}`} key={movie.id}>
                       <div className="card">
                           {movie.title}
                       </div>
                   </Link>
               )
           })}
        </section>
    );
};

export default Movies;