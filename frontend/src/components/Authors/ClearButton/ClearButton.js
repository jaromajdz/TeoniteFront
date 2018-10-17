import React from 'react';
import './ClearButton.css'

const clearButton =(props)=>{
    return (props.show ? <button onClick={props.clearAll}
           className="Clear">Clear All</button>: null)
};

export default clearButton;
