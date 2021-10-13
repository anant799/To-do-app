/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import Layer2 from './Layer2/Layer2';
import Layer1 from './Layer1/Layer1';
import Layer3 from './Layer3/Layer3';
import Upcoming_section from './Timeline/Upcoming_section';
import display_date_time from './Layer2/display_date_time';
import Active_section from './Timeline/Active_section';


const App=()=> {

const [inputValue,setInputValue]=useState({
  text:'',
    date:'',
    time:'',
    datetime:''
});

const [active,setActive]=useState([{
  title:'anant',
  date:'29-07-2021',
  goal_start_time:123,
  deadline_time:456
}]);

const [upcoming,setUpcoming]=useState([{
  title:'anant',
  date:'29-07-2021',
  goal_start_time:123,
  deadline_time:456
}]);

const [passed,setPassed]=useState([{
    title:'',
    date:'',
    goal_start_time:'',
    deadline_time:''
}]);

const gettingData=(value:{text:string,date:string,time:string,datetime:string})=>
{
  setInputValue(value);
  addCard();
}

const addCard=()=>
{
    let x=inputValue.date;

    // for timer

    let current_timer = new Date().getTime();

    let d1=display_date_time(x);
    d1+=" "+inputValue.time;
    let goal_start_timer=new Date(d1).getTime();
  
    let deadline_timer=new Date(inputValue.datetime).getTime();


    if(goal_start_timer<=current_timer && current_timer<deadline_timer) //present
    {
        setActive([...active,{
            title:inputValue.text,
            date:inputValue.date,
            goal_start_time:goal_start_timer-current_timer,
            deadline_time:deadline_timer-goal_start_timer
          }]);

    }
    else if(goal_start_timer>current_timer) //future
    {
      setUpcoming([...upcoming,{
        title:inputValue.text,
        date:inputValue.date,
        goal_start_time:goal_start_timer-current_timer,
        deadline_time:deadline_timer-goal_start_timer
      }]);
      //props.return_data(upcoming);
    }
    else{ 
        alert("Task cannot be created for past.")
      
    }
    // console.log(upcoming);
}


  return (
    <>
    <Layer1/>
    <Layer2 addCard={gettingData} />
    <Layer3/>
    <Active_section data={active} />
    <Upcoming_section data={upcoming}/>
    </>
  );
}

export default App;
