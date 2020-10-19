import React, { useState } from 'react';
import './Hand.css';
import randomColor from 'randomcolor'

export default function Hand() {
    const [color, setColor] = useState(randomColor())
    
    return (
    <div className="wrapper">
        <div className="one">
            <div className="nail" style={{backgroundColor:`${color}`}}></div>
        </div>
        <div className="two">
        <div className="nail" style={{backgroundColor:`${color}`}}></div>
        </div>
        <div className="three">
        <div className="nail" style={{backgroundColor:`${color}`}}></div>
        </div>
        <div className="four">
        <div className="nail" style={{backgroundColor:`${color}`}}></div>
        </div>
        <div className="five">
        <div className="nail" style={{backgroundColor:`${color}`}}></div></div>    
        <div className="six">
            <button className="button" onClick={() => setColor(randomColor())}>Change Color</button>
        </div>
    </div>
    )
  }