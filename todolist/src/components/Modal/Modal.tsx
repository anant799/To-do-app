import React, { ButtonHTMLAttributes, useState } from 'react';

interface details{
    show:boolean;
    data:string;
    onSaveButton:(arg:string)=>void;
}

const Modal=(props:details)=>{

    const [edittextarea,setEdittextarea]=useState('');
    if(props.show===false)
        return null;

   
return(
    <div className="new_win" onClick={()=>{props.onSaveButton(edittextarea)}} >
    <div className="inner_win" onClick={e=>e.stopPropagation()}>
            <h1 className="win_title">{props.data}</h1>
            <textarea className="win_desc" onChange={(e)=>{
                    setEdittextarea(e.target.value)}
                    }>{edittextarea}
            </textarea>
            <button onClick={()=>{props.onSaveButton(edittextarea)}}className="button_field">Save</button>
    </div>
    </div>
);
}
export default Modal;