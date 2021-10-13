/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import InputApp from '../Layer2/InputApp';
import ReactDOM from 'react-dom';
import Modal from '../Modal/Modal';
import { useEffect } from 'react';

interface details{
    class:string;
    data:string;
}

const SubCard=(props:details)=>{

    const [show,setShow]=useState(false);
    const [displayData,setDisplayData]=useState(props.data);
    useEffect(()=>{  if(displayData.length>15)
        setDisplayData(displayData.substring(0,15)+"     ");},[]);
  

    return(
            <>
            <div className={props.class} onClick={()=>{setShow(true);}}>
            <p className="item8">{displayData}</p>
            <InputApp text="checkbox" class="checkbox_button"  />
            <Button class="delbutton" text="X"  />
            </div>
            <Modal onSaveButton={(textareaValue:string)=>{
                setShow(false);
                if(textareaValue.length>20)
                textareaValue=textareaValue.substring(0,20)+"......";
                
                // if(props.data.length>20)
                // setDisplayData(`${props.data.substring(0,20)}.....${textareaValue}`);
                // else
                setDisplayData(`${displayData}${textareaValue}`);
             }} 
                show={show} data={props.data}/>
            </>
        );
}

export default SubCard;