import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WorkoutForm from '../Components/WorkoutForm'; //Import workout form
import arms from '../Assets/arms.png';
import chest from '../Assets/chest.png';
import back from '../Assets/back.png';
import shoulders from '../Assets/shoulders.png';
import legs from '../Assets/legs.png';
import '../Styles/Button.css'

function Workouts(){

    //muscle group data
    const muscleGroups =[{name: "Arms", exercises: ["Bicep Curl", "Tricep Pushdown", "Preacher Curl"], image: arms},
{name: "Shoulders", exercises: ["Shoulder Press Machine", "Cable Lateral Raise", "Cable Rear Delt Fly"], image: shoulders},
{name: "Chest", exercises: ["Pec Deck", "High-to-low Chest Fly"], image: chest}, 
{name: "Back", exercises: ["High-to-low Single Arm Lat Row", "Lat Pulldown"], image: back},
{name: "Legs", exercises: ["Leg Extension", "Seated Hamstring Curl", "Calf Raises", "Leg Press"], image: legs}];

    // initializing a state to workout, and saying that the setWorkouts function will be responsible for updating the state of workouts
    const [workouts, setWorkouts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // state to manage current view
    const [currentGroup, setCurrentGroup] = useState(null); //track the selected muscle group
    const [selectedExercise, setSelectedExercise] = useState(null); //track the selected excerise

    const [hoverIndex, setHoverIndex] = useState(null); //tracks which box is being hovered over
   
    //Handlers
    const handleMuscleGroupClick = (group) => {
        setCurrentGroup(group);
    };

    const handleExerciseClick = (exercise) =>{
        setSelectedExercise(exercise); //select the exercise
    };

    const handleBackToGrid = () => {
        setCurrentGroup(null); //go back to the muscle group grid
        setSelectedExercise(null);
        setShowForm(false);
    }

    const handleMouseEnter = (index) => {
        setHoverIndex(index); // set hovered index
    };

    const handleMouseLeave = () => {
        setHoverIndex(null); //reset when no box is being hovered over
    };

    return(
        <div style={styles.container}>
            <h2 style={styles.header}>
            {!currentGroup
                ? "Choose a Muscle Group"
                : showForm
                ? `Add Metrics for ${selectedExercise}`
                : `Choose an Exercise`}
            </h2> 

            {/* Muscle Group Grid View */}
            {!currentGroup && !selectedExercise && (
                <div style={styles.grid}>
                    {muscleGroups.map((group, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.box,
                                backgroundColor: hoverIndex === index ? "#30A6E9": "#f9f9f9",
                                transform: hoverIndex === index ? "translateY(-10px)" : "translateY(0)",
                                boxShadow: hoverIndex === index
                                    ? "0 6px 8px rgba(0,0,0,0.2)" //stronger shadow on hover
                                    : "0 4px 6px rgba(0,0,0,0.1)", //normal shadow
                                animationDelay: `${index * 0.2}s`, //staggered delay for fade-in
                                transition: "background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease"
                            }}
                            onMouseEnter={() => setHoverIndex(index)} //update hover index when mouse enters box
                            onMouseLeave={() => setHoverIndex(null)} //reset hover index when mouse leaves box
                            onClick={()=>handleMuscleGroupClick(group)}
                        >
                            <img
                                src = {group.image}
                                alt={group.name}
                                style={styles.image}
                            />
                            <p style={styles.label}>{group.name}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Exercise Selection View */}
            {currentGroup && !showForm && (
                <div style = {styles.exerciseList}>
                    <label htmlFor='exerciseDropdown' style={styles.dropdownLabel}>
        
                    </label>
                    <select
                        id='exerciseDropdown'
                        style={styles.dropdown}
                        defaultValue={currentGroup.exercises[0]} //sets the first exercise as the default value of the dropdown
                        onChange={(e) =>{
                            const selectedExercise = e.target.value;
                            if (selectedExercise){
                                setSelectedExercise(selectedExercise);
                                console.log("Selected Exercise Booelan Value:", !!selectedExercise);
                            }
                        }}
                    >
                        {/*<option value=""></option>*/}
                        {currentGroup.exercises.map ((exercise,index)=> (
                            <option key={index} value={exercise}>
                                {exercise}
                            </option>
                        ))}
                    </select>
                    
                    <div style={styles.backButtonContainer}>
                        {/*Back Button*/}
                        <button className="navButton" onClick={handleBackToGrid}>
                            {"\u2190"} {/*left arrow in unicode*/} 
                        </button>
                    </div>

                    {/* "Next" button */}
                    <button
                        className="navButton"
                        onClick={() => {
                        setShowForm(true)
                        
                        console.log("showForm:", true);
                        }}
                        
                        //proceed to workout form
                        disabled={!selectedExercise} //disable button if no exercise is selected
                    >
                        Next
                    </button>
                    
                

                    {/*Add Custom Exercise Button*/}
                    <button
                        style={styles.customButton}
                        onClick={() => handleExerciseClick("Custom Exercise")}
                    >
                        Add Custom Exercise
                    </button>

                   
                </div>
            )}

            {/* Workout Form View*/}
            {showForm && selectedExercise && (
                <WorkoutForm exercise={selectedExercise} onBack={handleBackToGrid}/>
            )}
        </div>
    );
}

//inline styles
const styles={
    header:{
        fontSize:'24px',
        marginBottom:'20px',
        opacity:0,
        animation: 'fadeIn 2s ease forwards',
        animationDelay: '0.5s'
    },
    container: {
        textAlign: 'center',
        margin: '20px auto',
        padding: '10px'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        justifyContent: 'center',
        overflow: 'visible'
    },
    box: {
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        padding: '10px',
        textAlign: 'center',
        transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        opacity: 0,
        animation: 'fadeIn 2s ease forwards' //apply fadeIn animation
    },
    image: {
        width: '100px', 
        height: '100px',
        objectFit: 'cover',
        borderRadius: '8px'
    },
    label: {
        marginTop: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333'
    },
    exerciseList:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
    },
    exerciseItem:{
        backgroundColor: '#eef',
        padding: '10px 15px',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'background-color 0.2s'
    },
    customButton: {
        marginTop: '60px',
        backgroundColor: '#30A6E9',
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '40px',
        cursor: 'pointer', 
        fontWeight: 'bold',
        width: '220px',
    },
    dropdown: {
        height: '30px',
        width: '220px',
        textAlign: 'center'
    },
    backButtonContainer:{
        position: 'fixed',
        bottom: '50px',
        left: '50px',
        zIndex: 1000
    }

};

const fadeInStyle = `
    @keyframes fadeIn{
        from {
            opacity: 0;
            // transform: translateY(20px);
        }
        to {
            opacity: 1;
            // transform: translateY(0);
        }
    }
`;

//inject fade-in animation styles into the DOM
const styleSheet = document.createElement('style');
styleSheet.innerText = fadeInStyle;
document.head.appendChild(styleSheet);

export default Workouts;