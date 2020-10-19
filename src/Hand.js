import React, { useState } from 'react';
import './Hand.css';
import randomColor from 'randomcolor'

export default function Hand() {
    const [color, setColor] = useState(randomColor())
    
    return (
    <div className="hand">
       <div className="nail" style={{backgroundColor:`${color}`}}></div>
       <div className="nail" style={{backgroundColor:`${color}`}}></div>
       <div className="nail" style={{backgroundColor:`${color}`}}></div>
       <div className="nail" style={{backgroundColor:`${color}`}}></div>
       <div className="nail" style={{backgroundColor:`${color}`}}></div>    
       <button className="button" onClick={() => setColor(randomColor())}>Change Color</button>
      </div>
    )
  }