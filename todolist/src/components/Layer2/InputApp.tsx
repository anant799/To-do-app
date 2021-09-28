import React, { useState } from 'react';

interface details{
text:string;
class:string;
placeholder?:string;
changeInputValue?:(inputValue: string )=>void; // regarding layer2 input
setInputvalue?:(inputValue: string )=>void; //regarding subcard input
};

 const InputApp=(props: details)=>{


return(
 <input  onChange= {(e) => {
     if(props.changeInputValue!=null)
        props.changeInputValue(e.target.value);
    if(props.setInputvalue!=null)
        props.setInputvalue(e.target.value);
    }} 
    
    type={props.text} 
    className={props.class} 
    placeholder={props.placeholder} />
);
}

export default InputApp;