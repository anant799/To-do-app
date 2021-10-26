import {FunctionComponent} from 'react';
import Card from '../Card/Card';

interface details
{
data:{id:number, title:string,
    date:string,
    goal_start_time:number,
    deadline_time:number,
    cards:{id:number,text:string,textarea_data:string,checkbox_value:boolean}[],
    disable:boolean,
    createdAt:number}[];
}

const Passed_section:FunctionComponent<details>=(props:details)=>
{
return(
    <>
    <div className="past_div" id="div_past">
   
    {
            props.data.map((todo) => (
                <Card data={todo}/>
            ))
        }
    </div>
    </>
);
}
export default Passed_section;