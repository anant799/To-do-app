import React, { FunctionComponent, useState } from 'react';
import { useEffect } from 'react';

interface details{
    cardid:number;
    show:boolean;
    data:{id:number;text:string;textarea_data:string};
    onSaveButton:(arg1:string,arg2:number,arg3:number)=>void;
    closeModal:()=>void;
    disable:boolean;
}

const Modal:FunctionComponent<details>=(props:details)=>{


    const [cardId,setCardId]=useState(props.cardid);
    useEffect(()=>{
        setCardId(props.cardid);
    },[props.cardid]);
    const [edittextarea,setEdittextarea]=useState(props.data.textarea_data);
    useEffect(()=>{setEdittextarea(props.data.textarea_data)},[props.data.textarea_data]);
    if(props.show===false)
        return null;

   
return(
    <div className="new_win" onClick={()=>{props.closeModal()}} >
    <div className="inner_win" onClick={e=>e.stopPropagation()}>
            <h1 className="win_title">{props.data.text}</h1>
            <textarea className="win_desc" onChange={(e)=>{
                    setEdittextarea(e.target.value)}
                    }
                    disabled={props.disable?true:false}>{edittextarea}
            </textarea>
            <button 
            disabled={props.disable?true:false}
            onClick={()=>{
                props.onSaveButton(edittextarea,props.data.id,cardId);
                props.closeModal();
            }} className="button_field">Save</button>
    </div>
    </div>
);
}
export default Modal;