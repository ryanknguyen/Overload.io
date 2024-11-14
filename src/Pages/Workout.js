import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Workouts(){
    // initializing a state to workout, and saying that the setWorkouts function will be responsible for updating the state of workouts
    const [workouts, setWorkouts] = useState([]);

    //uses a side effect within the functional component 'Workouts' to
    // call the workout api to fetch workouts
    useEffect(() => {
        axios.get('http://localhost:5000/api/workout')
            .then(response => {
                setWorkouts(response.data);
            })
            .catch(error => {
                console.error("Error fetching workouts:", error);
            });
    }, []);

    // functional component
    return(
        <div>
            <h2>My Workouts</h2>
            {workouts.length > 0 ? (
                <ul>
                    {workouts.map(workout => (
                        <li key = {workout.workoutId} >

                        </li>
                    ))}
                </ul>
            ) : (
                <p>No workouts found. </p>
            )}
        </div>
    );
}

export default Workouts;