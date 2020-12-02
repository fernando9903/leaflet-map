import React from 'react';
import MapRenderer from './components/MapRenderer'
import HeaderBar from './components/HeaderBar';
import './style.css';

function App() {
    return (
        <div>
            <HeaderBar/>
            <MapRenderer />
        </div>
    );
}



export default App;