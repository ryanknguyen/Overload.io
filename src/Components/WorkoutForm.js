import React, {useState} from 'react'; 
import axios from 'axios';

function WorkoutForm(){
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [heartRate, setHeartRate] = useState("");
    const [RPE, setRPE] = useState("");
    
    //function to handle the "Save" button
    const handleSave = async() => {
        const workoutExerciseData = {
            sets: parseInt(sets, 10),
            reps: parseInt(reps, 10),
            heartRate: parseInt(heartRate, 10),
            RPE: parseInt(RPE, 10),
        };

        try{
            const response = await axios.post('http://localhost:5000/api/workoutExercise', workoutExerciseData);
            console.log("Data saved successfully:", response.data);
            setSets("");
            setReps("");
            setHeartRate("");
            setRPE("");
        } catch(error){
            console.error("Error saving data:", error);
        }

    }

    return(
        <div>
            <h2>Enter Workout Details</h2>
            {/* Reuse IntegerEntry for each input */}
            <IntegerEntry label='Sets' onValueChange={setSets}/>
            <IntegerEntry label='Reps' onValueChange={setReps}/>
            <IntegerEntry label='Heart Rate' onValueChange={setHeartRate}/>
            <IntegerEntry label='RPE' onValueChange={setRPE}/>

            <button onClick={handleSave}>Save</button>
            
        </div>
    )

}

//this functional component will be reused to save the inputs for sets, reps, heartRate, RPE
function IntegerEntry({label, onValueChange}){
    const [value, setValue] = useState("");
    
    const handleChange = (event) => {
        const inputValue = event.target.value;
        
        //regex for non-negative integers
        if (/^\d*$/.test(inputValue)){
            setValue(inputValue);
            onValueChange(inputValue); //send updated value to parent component
        }
    };

    return(
        <div>
            <label>
                {label}: {/* Use the label prop here */}
                <input
                    type='text'
                    value={value}
                    onChange={handleChange}
                    placeholder='0'
                />
            </label>
        </div>
    );
   
};



export default WorkoutForm;
export {IntegerEntry};