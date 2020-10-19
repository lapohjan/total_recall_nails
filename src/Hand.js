import React, { useState } from 'react';
import './Hand.css';
import randomColor from 'randomcolor'

export default function Hand() {
    const [color, setColor] = useState(randomColor())
    
    return (
    <div className="wrapper">
        <div className="five">
            <button className="nail" style={{backgroundColor:`${color}`}} onClick={() => setColor(randomColor())}/>
        </div>
        <div className="four">
            <button className="nail" style={{backgroundColor:`${color}`}} onClick={() => setColor(randomColor())}/>
        </div>
        <div className="three">
            <button className="nail" style={{backgroundColor:`${color}`}} onClick={() => setColor(randomColor())}/>
        </div>
        <div className="two">
            <button className="nail" style={{backgroundColor:`${color}`}} onClick={() => setColor(randomColor())}/>
        </div>
        <div className="one">
            <button className="nail" style={{backgroundColor:`${color}`}} onClick={() => setColor(randomColor())}/>
        </div>
        <div className="six">
            {/* <button className="button" onClick={() => setColor(randomColor())}>Change Color</button> */}
        </div>
    </div>
    )
  }