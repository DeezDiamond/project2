import React, { useState } from 'react';

const Movie = ({ movie }) => {
    return (
        <div className="movieinfo">
            <h2>Title: {movie.title}</h2>
            <p>Released: {movie.release_date}</p>
            <p>Directed by: {movie.director}</p>
            <p>Producer: {movie.producer}</p>
            <p>Summary: {movie.description}</p>
        </div>
    );
};

export default Movie;