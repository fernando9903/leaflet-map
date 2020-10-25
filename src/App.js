import React from 'react';
import Map from './components/Map'
import './style.css';

function App() {
	return (
		<div>
			<Map zoom={2} center={{ lat: 0, lng: 0 }} />
		</div>
	);
}



export default App;
