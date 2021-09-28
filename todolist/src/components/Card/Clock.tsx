import React, { useState } from 'react';
 
interface details{
    data:number;
}

const Clock=(props:details)=>{

    const [timer,setTimer]=useState('');
   
    let distance=props.data;
   setInterval(()=>{
      
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
              
           
           
            let ans="";
            if(days>0)
            ans+=days+"d";
            if(hours>0)
            ans+=" "+hours+"h";
            if(minutes>0)
            ans+=" "+minutes+"m";
            if(seconds>0)
            ans+=" "+seconds+"s";
            
           
            ans="Starts In: "+ans;
          
            setTimer(ans);
             distance=distance-1;
   },1000);
    return(
        <div className="item9">{timer}</div>
    );
}

export default Clock;