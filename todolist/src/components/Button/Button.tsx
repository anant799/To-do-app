/* eslint-disable react/jsx-pascal-case */

import React from 'react';

interface details{
    text:string;
    class:string;
    call_button?:()=>void;
    addSubCard?:()=>void;
}

const Button=(props:details)=>
{
    return(
        <>
        <button onClick={()=>{
            if(props.call_button!=null)
            props.call_button();
            if(props.addSubCard!=null)
            props.addSubCard();
        }} className={props.class} >
            {props.text}
        </button>
        </>
    );
}

export default Button;