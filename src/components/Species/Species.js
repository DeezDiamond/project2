import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Species = () => {
	const [species, setSpecies] = useState([]);
	const ghilbiTwo = 'https://ghibliapi.herokuapp.com/species';

	useEffect(() => {
		fetch(ghilbiTwo)
			.then((res) => res.json())
			.then((res) => {
				setSpecies(res);
			})
			.catch((err) => {
				return 'There appears to be a problem with Species.js...';
			});
	}, []);

	return (
		<div className='cardHolder'>
			{species.map((specie) => {
				return (
					<Link to={`/species/${specie.id}`} key={specie.id}>
						<div className='card'>{specie.name}</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Species;
