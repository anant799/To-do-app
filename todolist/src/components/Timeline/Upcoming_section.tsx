import {FunctionComponent} from 'react';
import Card from '../Card/Card';

interface details
{
data:{ id:number,
    title:string,
    date:string,
    goal_start_time:number,
    deadline_time:number,
    cards:{id:number,text:string,textarea_data:string,checkbox_value:boolean}[],
    disable:boolean,
    createdAt:number}[];
    deleteUpcomingId:(arg1:number,arg2:{id:number,text:string,textarea_data:string,checkbox_value:boolean}[])=>void;
    addSubcard?:(arg1:number,arg2:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>void;
    addtextarea?:(arg1:number,arg2:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>void;
    updatecheckboxvalue?:(arg1:number,arg2:{id:number,text:string,textarea_data:string,checkbox_value:boolean})=>void;
}

const Upcoming_section:FunctionComponent<details>=(props:details)=>
{
return(
    <>
    <div className="future_div" id="div_future">
        {
            props.data.map((todo) => (
                    <Card data={todo} deleteUpcomingId={props.deleteUpcomingId} addSubcard={props.addSubcard} addtextarea={props.addtextarea} updatecheckboxvalue={props.updatecheckboxvalue}/>
                
            ))
        }
    
    </div>
    </>
);
}
export default Upcoming_section;