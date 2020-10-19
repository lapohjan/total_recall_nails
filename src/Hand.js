import React, { useState } from 'react';
import './Hand.css';
import randomColor from 'randomcolor'

export default function Hand() {
    const [color, setColor] = useState(randomColor())
    
    return (
      <div className="division" style={{backgroundColor:`${color}`}}>
        <button className="button" onClick={() => setColor(randomColor())}>Change Color</button>
      </div>
    )
  }