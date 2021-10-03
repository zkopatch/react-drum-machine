import React, { Component, useState } from 'react';
import './Pad.css';

const Pad = (props) => {

    const [lit, setLit] = useState(props.lit);

    const clickHandler = (event) => {
        if(event.type === "mousedown"){
            setLit(true);
            props.sound();
            props.handleDisplay(event);
        } else {
            setLit(false);
        }
      };

    return(

        <div className="PadSection">
            <button className="Pad"  onMouseDown={clickHandler} onMouseUp={clickHandler} >{props.title}</button>
            <div className={`led-yellow ${lit ? 'lit': ''}`} ></div>
        </div>
    );
    
}

export default Pad;