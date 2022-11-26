import React from "react";
import "./Button.css"
/////////////////////////////////////default
const Button = (probs , customClick = () =>{}) =>{
    return(
        <button onClick={probs.customClick} className="btn">{probs.children}</button>
    )
}

export default Button