import React from 'react';
import './App.css';
import User from './components/User';
import Followers from './components/Followers';

function App() {
	return (
		<div className='App'>
			<h1>React Github User Card</h1>
			<div className='container'>
				<User />
				<Followers />
			</div>
		</div>
	);
}

export default App;
