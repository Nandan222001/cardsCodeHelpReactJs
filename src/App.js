import React, { useState } from 'react';
import data from './data.js';
import Tours from './components/Tours.js';
import './App.css';

function App() {

  const [tours,setTours] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  if(tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={() => setTours(data)}>refresh</button>
      </div>
    );
  }
   
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
