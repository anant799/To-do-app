/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import InputApp from '../Layer2/InputApp';
import ReactDOM from 'react-dom';

interface details{
    class:string;
    data:string;
}

const SubCard=(props:details)=>{

    const [edittextarea,setEdittextarea]=useState('');

    const modal_dialog=()=>{
        ReactDOM.render(
            <>
            <div className="inner_win">
                <h1 className="win_title">{props.data}</h1>
                <textarea className="win_desc" onChange={(e)=>{
                    setEdittextarea(e.target.value)}
                    }>{edittextarea}</textarea>
            </div>
            </>,
            document.getElementById('root')
          );
            
        }

    return(
            <>
            <div className={props.class} onClick={modal_dialog}>
            <p className="item8">{props.data}</p>
            <InputApp text="checkbox" class="checkbox_button"/>
            <Button class="delbutton" text="X"/>
            </div>
            </>
        );
}

export default SubCard;