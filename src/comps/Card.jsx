import React, { useState } from 'react'
import '../css/Main.css'




function Card({ card , removeCard, toggleActive, dark }) {

    const { id, logo, name, description, isActive } = card
    const [isOn, setIsOn] = useState(isActive)


    const startToggle = () => {
        toggleActive(id)
        setIsOn(!isOn)
    }

    return (
        <div className='main'>
            <div className="cards">
                <div className={`card ${dark ? "" : "on"}`}>
                    <div className="card-content">
                        <div className="img">
                            <img src={logo} />
                        </div>
                        <div className="content">
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="generic">
                        <button className={`btn-1 ${dark ? "" : "on"}`} onClick={()=> removeCard(id)}>Remove</button>
                        <div className={`toggle ${isOn ? "on" : ""}`} onClick={startToggle}>
                            <div className="knob"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card