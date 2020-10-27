import React from 'react';
import Movie from "../Movie/Movie"


const Movies = ({ movie }) => {

    

    return (
        <div>
           {movie.map((movie) => (
               <Movie movie={movie} />
           ))}
        </div>
    );
};

export default Movies;