import React, {useState, useEffect} from 'react';

function Home(){

    const [text, setText] = useState(""); //state to hold the progressively typed text
    const [showCursor, setShowCursor] = useState(true); //state to toggle the cursor
    const fullText = "Welcome to Overload.io!"; //full text to be typed out

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() =>{
            if (index >= fullText.length){
                clearInterval(typingInterval);
                setShowCursor(false);
            }
            if (index < fullText.length){
                setText(fullText.slice(0, index + 1)); //use slicing to add one char at a time
                index++;
            } else{
                clearInterval(typingInterval);
            }

        }, 70);

        return() => clearInterval(typingInterval);
    }, []);
    
    useEffect(() => {
        //blinking cursor effect: toggle visibility every 500ms
        if (showCursor){
            const cursorInterval = setInterval(() => {
                setShowCursor((prev) => !prev);
            }, 500); //blink speed in 500 ms
            return () => clearInterval(cursorInterval); //cleanup cursor interval
        }
    }, [showCursor]);

    return (
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <h2>{text}
                {showCursor && <span style={{color:'black'}}>|</span>}</h2> {/*dynamically updating the text */}

        </div>
    );
}

export default Home;