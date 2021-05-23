import React from 'react'

function Button2(props) {
    return (
        <div>
            
        <button style={{
            outline:'none',
            border:'none',
            fontSize:10,
            borderRadius:5,
            backgroundColor:props.backgroundColor,
            height:20

        }}
        onClick={props.btnClick}
        >
            {props.btnText}
            
        </button>
            
        </div>
    )
}

export default Button2
