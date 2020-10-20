import React, { useState } from 'react';
import './Hand.css';
import randomColor from 'randomcolor'

export default function Hand() {
    const [color, setColor] = useState(randomColor())
    const [color1, setColor1] = useState(randomColor())
    const [color2, setColor2] = useState(randomColor())
    const [color3, setColor3] = useState(randomColor())
    const [color4, setColor4] = useState(randomColor())
    const [color5, setColor5] = useState(randomColor())
    
    return (
    <div className="wrapper">
        <div className="two">
            <button className="nail" style={{backgroundColor:`${color1}`}} onClick={() => setColor1(color)}/>
        </div>
        <div className="three">
            <button className="nail" style={{backgroundColor:`${color2}`}} onClick={() => setColor2(color)}/>
        </div>
        <div className="four">
            <button className="nail" style={{backgroundColor:`${color3}`}} onClick={() => setColor3(color)}/>
        </div>
        <div className="five">
            <button className="nail" style={{backgroundColor:`${color4}`}} onClick={() => setColor4(color)}/>
        </div>
        <div className="one">
            <button className="nail" style={{backgroundColor:`${color5}`}} onClick={() => setColor5(color)}/>
        </div>
        <div className="six">
            <button className="button" style={{backgroundColor:`${color}`}} onClick={() => setColor(randomColor())}>Choose Color</button>
        </div>
    </div>
    )
  }