import React from 'react';
import Card from '../Card/Card';

interface details
{
data:{ title:string,
    date:string,
    goal_start_time:number,
    deadline_time:number}[];
}

const Upcoming_section=(props:details)=>
{
return(
    <>
    <div className="future_div" id="div_future">
        {
            props.data.map((todo) => (
                    <Card data={todo}/>
                
            ))
        }
    
    </div>
    </>
);
}
export default Upcoming_section;