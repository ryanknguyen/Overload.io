import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Workouts from './Pages/Workout';
import WorkoutForm from './Components/WorkoutForm'
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/> {/*NavBar is always visible*/}
      <div>
        <h1> Overload.io Fitness Tracker </h1>
        <WorkoutForm/>
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path="/workouts" element={<Workouts/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
