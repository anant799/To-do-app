import React from 'react';
import Card from '../Card/Card';

interface details
{
data:{ title:string,
    date:string,
    goal_start_time:number,
    deadline_time:number}[];
}

const Active_section=(props:details)=>
{
return(
    <>
    <div className="present_div" id="div_present">
    {
            props.data.map((todo) => (
                <Card data={todo}/>
            ))
        }
    </div>
    </>
);
}
export default Active_section;