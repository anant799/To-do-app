/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { useEffect,FunctionComponent } from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import InputApp from '../Layer2/InputApp';
import Clock from './Clock';
import Subcard_component from './Subcard_component';

interface details{
    data:{ id:number,
        title:string,
        date:string,
        goal_start_time:number,
        deadline_time:number,
        cards:{id:number,text:string,textarea_data:string,checkbox_value:boolean}[],
        disable:boolean,
        createdAt:number};
        deleteUpcomingId?:(arg1:number,arg2:{id:number,text:string,textarea_data:string,checkbox_value:boolean}[])=>void;
        addSubcard?:(arg1:number,arg2:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>void;
        addtextarea?:(arg1:number,arg2:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>void;
        updatecheckboxvalue?:(arg1:number,arg2:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>void;
}

const Card:FunctionComponent<details>=(props:details)=>
{
      
        const [allchecked,setAllchecked]=useState(false);
        const [subcarddata,setSubcarddata]=useState([
            {
                id:-1,
                text:'1',
                textarea_data:'hii 1',
                checkbox_value:false
            }]);
        
        const [uid,setUid]=useState(-100000000);
        useEffect(()=>{
               
                // setSubcarddata(prev=>[...subcarddata,...props.data.cards]);
                setSubcarddata(prev=>[...props.data.cards]);
                let temp=-100000;
                
                // console.log("temp value:");
                // console.log(props.data.cards.length);
                // console.log(subcarddata.length);
                for(let i=0;i<props.data.cards.length;i++)
                {
                    // console.log(subcarddata[i]);
                    if(props.data.cards[i].id>temp)
                    {
                    temp=props.data.cards[i].id;
                    
                    }
                }
            //   console.log(temp);
               setUid(Math.max(0,temp)+1);
            },[props.data]);
            
        const [inputvalue,setInputvalue]=useState('');
        useEffect(()=>{setInputvalue('')},[props.data]);
        
        
        const addSubCard=()=>{
            if(inputvalue)
            {
            setUid(uid+1);
            setSubcarddata([...subcarddata,{
                id:uid,
                text:inputvalue,
                textarea_data:'',
                checkbox_value:false
            }]);
            setAllchecked(false);
            props.addSubcard!(props.data.id,{
                id:uid,
                text:inputvalue,
                textarea_data:'',
                checkbox_value:false
            });
            setInputvalue('');
            }
            else
            alert("Enter the task");
        }
       

        const [displayData,setDisplayData]=useState(props.data.title);
    
        useEffect(()=>{  
            setDisplayData(props.data.title);
            if(displayData.length>15)
                setDisplayData(`${displayData.substring(0,15)}.....`);
    
    
        },[props.data.title]);
    
        
        let clockData1=props.data.goal_start_time;
    
        const deleteObject=(objectid:number)=>{
        const items=subcarddata.filter(item=>item.id!==objectid);
        // console.log(items);
        setSubcarddata(items);
        // console.log("b",items);
        }
        const [a,setA]=useState(props.data.id);
        useEffect(()=>{
            setA(props.data.id);
        },[props.data]);

        const update_textarea_data=(textarea_value:string,id:number,cardid:number)=>{
        const index = subcarddata.map(function(x) {return x.id; }).indexOf(id);
        
        subcarddata[index].textarea_data=textarea_value;
        props.addtextarea!(cardid,subcarddata[index]);
        }
    
        const [checking,setChecking]=useState(false);
        const checkbox_click=(id:number)=>{
        const index = subcarddata.map(function(x) {return x.id; }).indexOf(id);
        // console.log(upcoming[index]);
        subcarddata[index].checkbox_value=!subcarddata[index].checkbox_value;
        props.updatecheckboxvalue!(props.data.id,subcarddata[index]);
        setChecking(prev=>!prev);

        }
        useEffect(()=>{
            setChecking(prev=>!prev);
        },[props.data]);
    
        
        const [thumbsdownsign,setThumbsdownsign]=useState(false);
        useEffect(()=>{
        let count=0;
        let count1=0;
            for(let i=0;i<subcarddata.length;i++)
            {
                if(subcarddata[i].id===-1)   
                count1=count1+1;
                if(subcarddata[i].id!==-1 && subcarddata[i].checkbox_value)
                    count=count+1;
            }
    
            if(count!==0&&(subcarddata.length-count1)===count)
            {
            setAllchecked(true);
            setThumbsdownsign(false);
            }
            else
            {
            setAllchecked(false);
            if(props.data.disable)
            setThumbsdownsign(true);
            }
        },[checking,props.data]);
        
    
       
        const thumbsup={
            color:"green",
            fontSize:"36px"
        }
        const thumbsdown={
            color:"red",
            fontSize:"36px"
        }
    
    return(
        <>
        <div className="block">
        <h4 className="item1">{displayData}</h4>
        <div className="item2">{props.data.date}</div>
        {!props.data.disable?
        <Clock data={clockData1} deleteUpcomingId={()=>{props.deleteUpcomingId!(props.data.id,subcarddata)}}/>:'Expired'}
        
        <div className="item4">
           
            {allchecked&&<i className="fa fa-thumbs-up" style={thumbsup}></i>}
            {thumbsdownsign&&<i className="fa fa-thumbs-down" style={thumbsdown}></i>}
            </div>
            
        <InputApp value={inputvalue} class="item5" text="text" placeholder="Enter the step" setInputvalue={(arg:string)=>{setInputvalue(arg);}} disable={props.data.disable}/>
        <Button text="Add Steps" class="button_field item6" addSubCard={addSubCard} disable={props.data.disable}/>
        <div className="completed_button_div" ></div>
        <Subcard_component 
        data={subcarddata} 
        cardid={props.data.id}
        checkbox_click={(id:number)=>{checkbox_click(id)}} 
        deleteObject={(objectid)=>{deleteObject(objectid)}} 
        disable={props.data.disable} 
        update_textarea_data={(textarea_value:string,id:number,cardid:number)=>{update_textarea_data(textarea_value,id,cardid);}}/>
        </div>
        </>
        );
    
    
}

export default Card;

