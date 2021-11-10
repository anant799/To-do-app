/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import Layer2 from './Layer2/Layer2';
import Layer1 from './Layer1/Layer1';
import Layer3 from './Layer3/Layer3';
import Upcoming_section from './Timeline/Upcoming_section';
import display_date_time from './Layer2/display_date_time';
import Active_section from './Timeline/Active_section';
import Passed_section from './Timeline/Passed_section';

const App=()=> {

const [active,setActive]=useState([{
  id:-1,
  title:'US1',
  date:'27-10-2021',
  goal_start_time:70000,
  deadline_time:7000,
  cards:[{id:-1,text:'Task1',textarea_data:'To do unit testing',checkbox_value:false}],
  disable:false,
  createdAt:new Date().getTime()
},
{
  id:-2,
  title:'US2',
  date:'27-10-2021',
  goal_start_time:200000,
  deadline_time:7000,
  cards:[{id:-1,text:'Task1',textarea_data:'To do unit testing',checkbox_value:false}],
  disable:false,
  createdAt:new Date().getTime()
}]);

const [upcoming,setUpcoming]=useState([{
  id:-3,
  title:'US3',
  date:'27-10-2021',
  goal_start_time:100000,
  deadline_time:40000,
  cards:[{id:-1,text:'Task1',textarea_data:'To do unit testing',checkbox_value:false}],
  disable:false,
  createdAt:new Date().getTime()
},
{
  id:-4,
  title:'US4',
  date:'27-10-2021',
  goal_start_time:200000,
  deadline_time:9000,
  cards:[{id:-1,text:'Task1',textarea_data:'To complete the functionality',checkbox_value:false}],
  disable:false,
  createdAt:new Date().getTime()
}]);

const [passed,setPassed]=useState([{
    id:-10,
    title:'US5',
    date:'27-10-2021',
    goal_start_time:0,
    deadline_time:0,
    cards:[{id:-1,text:'Task1',textarea_data:'All task completed',checkbox_value:false}],
    disable:true,
    createdAt:new Date().getTime()
}]);

const gettingData=(value:{text:string,date:string,time:string,datetime:string},createdAt:number)=>
{
  
  addCard(value,createdAt);
}
const [activeId,setActiveId]=useState(11000);
const [upcomingId,setUpcomingId]=useState(12000);

const addCard=(inputValue:{text:string,date:string,time:string,datetime:string},createdAtt:number)=>
{
    let x=inputValue.date;

    // for timer

    let current_timer = new Date().getTime();

    let d1=display_date_time(x);
    d1+=" "+inputValue.time;
    let goal_start_timer=new Date(d1).getTime();
  
    let deadline_timer=new Date(inputValue.datetime).getTime();
    // console.log(goal_start_timer-current_timer);

    if(goal_start_timer<=current_timer && current_timer<deadline_timer) //present
    {
      
        setActiveId(activeId+1);
        setActive([...active,{
            id:activeId,
            title:inputValue.text,
            date:inputValue.date,
            goal_start_time:deadline_timer-current_timer,
            deadline_time:deadline_timer-current_timer,
            cards:[],
            disable:false,
            createdAt:createdAtt
          }]);

    }
    else if(goal_start_timer>current_timer&&deadline_timer>goal_start_timer) //future
    {
     
      setUpcomingId(upcomingId+1);
      setUpcoming([...upcoming,{
        id:upcomingId,
        title:inputValue.text,
        date:inputValue.date,
        goal_start_time:goal_start_timer-current_timer,
        deadline_time:deadline_timer-goal_start_timer,
        cards:[],
        disable:false,
        createdAt:createdAtt
      }]);
      //props.return_data(upcoming);
    }
    else{ 
        alert("Task cannot be created for past.")
      
    }
   
}
const deleteUpcomingId=(id:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean}[])=>{
  const index = upcoming.map(function(x) {return x.id; }).indexOf(id);
  // // console.log(upcoming[index]);
  let temp=upcoming[index];
  const items=upcoming.filter(item=>item.id!==id);
  const time=new Date().getTime();
  for(let i=0;i<items.length;i++)
  {
    items[i].goal_start_time=items[i].goal_start_time-(time-items[i].createdAt);
    // if(items[i].goal_start_time===0)
    // items[i].goal_start_time=2000;
  }
  setUpcoming(items);

  temp.goal_start_time=upcoming[index].deadline_time;
  temp.createdAt=new Date().getTime();
  let highestId=-10000000;
  for(let i=0;i<active.length;i++)
  {
    if(active[i].id>highestId)
    highestId=active[i].id;
  }
  temp.id=highestId+1;
  // temp.cards=subcarddata;
  // console.log(upcoming[index]);
  // console.log(upcoming[index]);
  setActive(prev=>[...active,temp]);
  
  // console.log(items);
  // console.log('hi');
}

const deleteActiveId=(id:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean}[])=>{
  // console.log(id);
  const index = active.map(function(x) {return x.id; }).indexOf(id);
  // console.log(upcoming[index]);
  active[index].goal_start_time=0;
  active[index].disable=true;
  
  // active[index].cards=subcarddata;
  // console.log(upcoming[index]);
  // console.log(upcoming[index]);
  setPassed(prev=>[...passed,active[index]]);
  const items=active.filter(item=>item.id!==id);
  const time=new Date().getTime();
  for(let i=0;i<items.length;i++)
  {
    items[i].goal_start_time=items[i].goal_start_time-(time-items[i].createdAt);
  }
  setActive(items);
}

const addSubcardupcoming=(id:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>{
  const index = upcoming.map(function(x) {return x.id; }).indexOf(id); 
  upcoming[index].cards=[...upcoming[index].cards,subcarddata];
  // console.log(upcoming[index]);
  // console.log(upcoming[index]);
  setUpcoming(upcoming);
}

const addSubcardactive=(id:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>{
  const index = active.map(function(x) {return x.id; }).indexOf(id); 
  active[index].cards=[...active[index].cards,subcarddata];
  // console.log(upcoming[index]);
  // console.log(upcoming[index]);
  setActive(active);
}
const addtextareaupcoming=(cardId:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>{
  const index1 = upcoming.map(function(x) {return x.id; }).indexOf(cardId); 
  const items=upcoming[index1].cards.filter(item=>item.id!==subcarddata.id);
  upcoming[index1].cards=[...items,subcarddata];
  setUpcoming(upcoming);
}

const addtextareaactive=(cardId:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>{
  const index1 = active.map(function(x) {return x.id; }).indexOf(cardId); 
  const items=active[index1].cards.filter(item=>item.id!==subcarddata.id);
  active[index1].cards=[...items,subcarddata];
  setActive(active);
}

const updatecheckboxvalueupcoming=(cardId:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>{
  const index1 = upcoming.map(function(x) {return x.id; }).indexOf(cardId); 
  const items=upcoming[index1].cards.filter(item=>item.id!==subcarddata.id);
  upcoming[index1].cards=[...items,subcarddata];
  setUpcoming(upcoming);
}

const updatecheckboxvalueactive=(cardId:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>{
  const index1 = active.map(function(x) {return x.id; }).indexOf(cardId); 
  const items=active[index1].cards.filter(item=>item.id!==subcarddata.id);
  active[index1].cards=[...items,subcarddata];
  setActive(active);
}
  return (
    <>
    <Layer1/>
    <Layer2 addCard={gettingData} />
    <Layer3/>
    <Active_section 
    data={active} 
    updatecheckboxvalue={(cardId:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>{updatecheckboxvalueactive(cardId,subcarddata)}}
    addtextarea={(cardId:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>{addtextareaactive(cardId,subcarddata)}}
    deleteUpcomingId={(id:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean}[])=>{deleteActiveId(id,subcarddata)}}
    addSubcard={(id:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>{addSubcardactive(id,subcarddata)}}
    />
    <Upcoming_section 
    data={upcoming} 
    updatecheckboxvalue={(cardId:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>{updatecheckboxvalueupcoming(cardId,subcarddata)}}
    addtextarea={(cardId:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>{addtextareaupcoming(cardId,subcarddata)}}
    deleteUpcomingId={(id:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean}[])=>{deleteUpcomingId(id,subcarddata)}}
    addSubcard={(id:number,subcarddata:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>{addSubcardupcoming(id,subcarddata)}}
    />
    <Passed_section data={passed} />
    </>
  );
}

export default App;
