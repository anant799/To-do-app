import React from 'react';

interface details{
    name:string;
    id:string;
}
const SpanApp=(props:details)=>
{
return(
<>
<span id={props.id}><strong>{props.name}</strong></span>
</>
);
}

export default SpanApp;