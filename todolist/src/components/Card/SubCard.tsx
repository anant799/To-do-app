/* eslint-disable jsx-a11y/heading-has-content */
import React, {  MouseEvent,FunctionComponent} from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import InputApp from '../Layer2/InputApp';
import Modal from '../Modal/Modal';
import { useEffect } from 'react';

interface details{
    cardid:number;
    class:string;
    data:{id:number;text:string;textarea_data:string,checkbox_value:boolean};
    deleteObject:(arg:number)=>void;
    disable:boolean;
    update_textarea_data:(arg1:string,arg2:number,arg3:number)=>void;
    checkbox_click:(arg:number)=>void;
}

const SubCard:FunctionComponent<details>=(props:details)=>{
    const [changecheckboxvalue,setChangecheckboxvalue]=useState(props.data.checkbox_value);
    const [show,setShow]=useState(false);
    const [titleData,setTitleData]=useState(props.data.text);
    // useEffect(()=>{setTitleData(props.data.text)},[props.data.text]);
    let titleDataconst=props.data.text;
    let textareaData=props.data.textarea_data;
    const [displayData,setDisplayData]=useState('');
    useEffect(()=>{  
        setTitleData(props.data.text);
        // console.log("hii",titleData);
        if(titleData.length>13)
        {
            setTitleData(`${titleData.substring(0,13)}..`);
            titleDataconst=titleDataconst.substring(0,13)+"..";
        }

        if(textareaData.length>17)
        textareaData=textareaData.substring(0,17)+"......";

        if(textareaData.length===0)
        setDisplayData(`${titleDataconst}`);
        else
        setDisplayData(`${titleDataconst} :${textareaData}`);

            // console.log(props.data.id);
},[props.data]);
        
    const inputappControl=(e:MouseEvent<HTMLInputElement>)=>{
        e.stopPropagation();    
        setChangecheckboxvalue(prev=>!prev);
        props.checkbox_click(props.data.id);
    }
    const deletebuttonControl=(e:MouseEvent<HTMLButtonElement>)=>{
        e.stopPropagation();     
        props.deleteObject(props.data.id);
        
    }
   
    // if(displayData===' :'||displayData==='')
    if(props.data.id===-1)
    return(<></>);
    else
    return(
            <>
            <div className={props.class} onClick={()=>{setShow(true);}}>
            <p className="item8">{displayData}</p>
            <InputApp text="checkbox" class="checkbox_button" inputappControl={(e:MouseEvent<HTMLInputElement>)=>{inputappControl(e);}} disable={props.disable} checked={changecheckboxvalue}/>
            <Button class="delbutton" text="X" deletebuttonControl={(e:MouseEvent<HTMLButtonElement>)=>{deletebuttonControl(e);}} disable={props.disable}/>
            </div>
            <Modal cardid={props.cardid} onSaveButton={(textareaValue:string,id:number,cardid:number)=>{
                props.update_textarea_data(textareaValue,id,cardid);
                if(textareaValue.length>17)
                textareaValue=textareaValue.substring(0,17)+"......";
            
                
                setDisplayData(`${titleData} :${textareaValue}`);

             }
            } 
            disable={props.disable}
                show={show} data={props.data}  closeModal={()=>{setShow(false);}}/>
            </>
        );
}

export default SubCard;