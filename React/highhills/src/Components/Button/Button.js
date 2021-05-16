import React from 'react'

function Button(props) {
    return (
        <div>
            <button 
            onClick={props.buttonClick}
            style={{backgroundColor:props.bgColor}}>{props.buttonname}</button>
        </div>
    )
}

export default Button;
 