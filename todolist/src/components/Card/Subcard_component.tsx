import {FunctionComponent} from 'react';
import SubCard from './SubCard';

interface details{
cardid:number;    
data:{id:number;text:string;textarea_data:string,checkbox_value:boolean}[];
deleteObject:(arg:number)=>void;
disable:boolean;
update_textarea_data:(arg1:string,arg2:number,id:number)=>void;
checkbox_click:(arg:number)=>void;
}

const Subcard_component:FunctionComponent<details>=(props:details)=>{
return(
    <>
    <div className="item7">
        {
            props.data.map((todo) => (
                todo.id!==-1?
                <SubCard cardid={props.cardid} class="card" data={todo} deleteObject={props.deleteObject} disable={props.disable} 
            update_textarea_data={props.update_textarea_data} checkbox_click={props.checkbox_click}/>:null
            )
            )}
    
    </div>
    </>
    
);

}

export default Subcard_component;