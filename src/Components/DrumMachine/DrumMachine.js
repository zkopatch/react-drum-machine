import React, { Component, useState } from 'react';
import './DrumMachine.css';

import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';
 
const DrumMachine = () => {

    const [displayValue, setDisplayValue] = useState("Welcome!");

    const handleDisplay = (event) => {
        setDisplayValue(event.target.innerHTML);
        console.log("Display Value Changed");
    }
    
    return(
        //<div>
            <div className="DrumMachine">
                <div className="TitleArea">
                    <span className="MachineTitle">ZHKH's Drum Machine</span>
                </div>
                <Display displayValue={displayValue} />
                <DrumPad handleDisplay={handleDisplay} />
            </div> 
            
        //</div>
    );   
}

export default DrumMachine;