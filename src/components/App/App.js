import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Movie from '../Movie/Movie';
import Species from "../Species/Species"
import Specie from "../Specie/Specie"

function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<Switch>
				<Route path='/' exact component={Movies} /> 

				<Route
					path='/films/:id'
					render={(routerProps) => {
						return <Movie match={routerProps.match} />;
					}}
				/>

				<Route path="/species" exact component={Species} />

				<Route 
				path="/species/:id"
				render={(routerProps) => {
					return <Specie match={routerProps.match} />
				}} />

				</Switch>
			</main>
		</div>
	);
}

export default App;
