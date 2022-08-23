import React from "react";
import "./Toggle.css"

const Toggle = () => {
    return(
        <label className="toggle">
            <input type="checkbox"/>
            <span className="slider rounded-full"/>
        </label>
    )

}

export default Toggle