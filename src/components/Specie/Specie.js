import React, { useState, useEffect } from 'react';

const speciesURL = 'https://ghibliapi.herokuapp.com/species/';

const Specie = (props) => {
	const [specie, setSpecie] = useState('');
	useEffect(() => {
		const url = `${speciesURL}${props.match.params.id}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setSpecie(res);
			})
			.catch((err) => {
				console.log('There appears to be a problem with singular Specie.js..');
			});
	}, [props.match.params.id]);

	return (
		<div className='details'>
			<h2>Species: {specie.name}</h2>
			<p><strong>Classification</strong>: {specie.classification}</p>
			<p><strong>Eye Colors</strong>: {specie.eye_colors}</p>
			<p><strong>Fur (or hair) Color</strong>: {specie.hair_colors}</p>
			{/* <p>Film Appearance: {specie.films}</p> */}
		</div>
	);
};

export default Specie;