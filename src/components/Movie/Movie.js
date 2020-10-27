import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const filmURL = 'https://ghibliapi.herokuapp.com/films';

const Movie = (props) => {
    const [movie, setMovie] = useState(null); 
    useEffect(() => {
        const url=`${filmURL}${props.match.params.id}`;

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            setMovie(res);
        })
        .catch((err) => {
            return("There appears to be a problem with Movie.js..");
        });
    }, [props.match.params.id]);

    if (!movie) {
        return null;
    }

    return (
        <div className="details">
            <h2>Title: {movie.title}</h2>
            <p>Released: {movie.release_date}</p>
            <p>Directed by: {movie.director}</p>
            <p>Producer: {movie.producer}</p>
            <p>Summary: {movie.description}</p>
        </div>
    );
};

export default Movie;