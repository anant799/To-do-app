/* eslint-disable react/jsx-pascal-case */

import React, { ButtonHTMLAttributes, MouseEvent } from 'react';

interface details{
    text:string;
    class:string;
    call_button?:()=>void;
    addSubCard?:()=>void;
    deletebuttonControl?:(e: MouseEvent<HTMLButtonElement>) => void
}

const Button=(props:details)=>
{
    return(
        <>
        <button onClick={(e:MouseEvent<HTMLButtonElement>)=>{
            if(props.call_button!=null)
            props.call_button();
            if(props.addSubCard!=null)
            props.addSubCard();
            if(props.deletebuttonControl!=null)
            props.deletebuttonControl(e);
        }} 
        className={props.class} >
            {props.text}
        </button>
        </>
    );
}

export default Button;