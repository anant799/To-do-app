import {FunctionComponent} from 'react';

interface details{
    name:string;
    id:string;
}
const SpanApp:FunctionComponent<details>=(props:details)=>
{
return(
<>
<span id={props.id}><strong>{props.name}</strong></span>
</>
);
}

export default SpanApp;