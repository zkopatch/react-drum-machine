import React, { Component } from 'react'
import './Display.css';

const Display = (props) => {
   
    return(
        <div className="Display">
            <span className="DisplayTitle">{props.displayValue}</span>
        </div>
    )
   
}

export default Display;