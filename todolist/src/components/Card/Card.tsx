/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import InputApp from '../Layer2/InputApp';
import Clock from './Clock';
import Subcard_component from './Subcard_component';

interface details{
    data:{ title:string,
        date:string,
        goal_start_time:number,
        deadline_time:number};
}

const Card=(props:details)=>
{
    const [subcarddata,setSubcarddata]=useState([
        {
            text:''
        }]);

    const [inputvalue,setInputvalue]=useState('');
    
    const addSubCard=()=>{
        setSubcarddata([...subcarddata,{
            text:inputvalue
        }]);
    }



return(
    <>
    <div className="block">
    <h4 className="item1">{props.data.title}</h4>
    <div className="item2">{props.data.date}</div>
    <Clock data={props.data.goal_start_time}/>
    <div className="item4">{}</div>
    <InputApp class="item5" text="text" placeholder="Enter the step" setInputvalue={setInputvalue}/>
    <Button text="Add Steps" class="button_field item6" addSubCard={addSubCard}/>
    <div className="completed_button_div" ></div>
    <Subcard_component data={subcarddata} />
    </div>
    </>
);
}

export default Card;