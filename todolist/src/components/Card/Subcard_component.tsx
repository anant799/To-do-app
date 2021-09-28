import react from 'react';
import SubCard from './SubCard';

interface details{
data:{text:string}[];
}

const Subcard_component=(props:details)=>{
return(
    <>
    <div className="item7">
        {
            props.data.map((todo) => (
                <SubCard class="card" data={todo.text}/>
            ))
        }
    
    </div>
    </>
    
);

}

export default Subcard_component;