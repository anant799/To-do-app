/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import InputApp from '../Layer2/InputApp';
import ReactDOM from 'react-dom';
import Modal from '../Modal/Modal';

interface details{
    class:string;
    data:string;
}

const SubCard=(props:details)=>{

    const [show,setShow]=useState(false);

    return(
            <>
            <div className={props.class} onClick={()=>{setShow(true);}}>
            <p className="item8">{props.data}</p>
            <InputApp text="checkbox" class="checkbox_button"  />
            <Button class="delbutton" text="X"  />
            </div>
            <Modal onSaveButton={()=>{setShow(false);}} show={show} data={props.data}/>
            </>
        );
}

export default SubCard;