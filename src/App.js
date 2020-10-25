import React from 'react';
import Map from './components/Map'
import './style.css';

function App() {
	return (
		<div>
			<Map zoom={3} center={{ lat: 200, lng: 200 }} />
		</div>
	);
}



export default App;
