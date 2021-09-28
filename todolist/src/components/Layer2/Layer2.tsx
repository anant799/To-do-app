/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import Button from '../Button/Button';
import SpanApp from '../Layer1/SpanApp';
import InputApp from './InputApp';


interface details{
addCard:(arg0:{text:string,date:string,time:string,datetime:string})=>void;
}
const Layer2=(props:details)=>{

const [inputValue_text, setInputValue_text] = useState('');

const [inputValue_date, setInputValue_date] = useState('');

const [inputValue_time, setInputValue_time] = useState('');

const [inputValue_datetime, setInputValue_datetime] = useState('');

const inputValue={
    text:inputValue_text,
    date:inputValue_date,
    time:inputValue_time,
    datetime:inputValue_datetime
}
// console.log("hii");
//  console.log(inputValue);

const call_button=()=>{
props.addCard(inputValue);
}
return(
    <>
    <div id="div_1">
    <SpanApp name="To-Do App" id="heading"/>
    <InputApp changeInputValue = {setInputValue_text} text="text" class="date_text_field" placeholder="Enter the title"/>
    <InputApp changeInputValue = {setInputValue_date} text="date" class="date_text_field" />
    <InputApp changeInputValue = {setInputValue_time} text="time" class="date_text_field" />
    <InputApp changeInputValue = {setInputValue_datetime} text="datetime-local" class="timer_time" />
    <Button call_button={call_button} text="Submit" class="button_field"/>
    </div>
    </>
);
}

export default Layer2;