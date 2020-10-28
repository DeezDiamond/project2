import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Movie from '../Movie/Movie';

function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<Route path='/' exact component={Movies} />
				<Route
					path='/films/:id'
					render={(routerProps) => {
						return <Movie match={routerProps.match} />;
					}}
				/>
			</main>
		</div>
	);
}

export default App;
